// Vercel API route for PhonePe redirect
export default async function handler(req, res) {
  // Extract transactionId from query parameters
  const { transactionId } = req.query;

  console.log('🔄 Redirect API called for transaction:', transactionId);

  try {
    // Check the actual payment status from backend
    const backendUrl = process.env.NODE_ENV === 'production' 
      ? process.env.BACKEND_URL || 'https://inter-backend-lpmb.onrender.com'
      : 'http://localhost:60468';
    
    console.log('📡 Checking backend status:', `${backendUrl}/phonepe/status/${transactionId}`);
    
    const response = await fetch(`${backendUrl}/phonepe/status/${transactionId}`);
    const statusData = await response.json();
    
    console.log('📊 Backend status response:', statusData);
    
    // Redirect to the React payment completion page with status info
    let statusValue = null;
    
    // Handle success case
    if (statusData.success && statusData.status === 'PAYMENT_SUCCESS') {
      statusValue = 'SUCCESS';
      console.log('✅ Payment successful, redirecting with SUCCESS');
    } 
    // Handle explicit failure cases
    else if (!statusData.success && (
        statusData.status === 'PAYMENT_FAILED' || 
        statusData.status === 'PAYMENT_ERROR' ||
        statusData.status === 'PAYMENT_CANCELLED' ||
        statusData.status === 'PAYMENT_REJECTED' ||
        (statusData.state && ['FAILED', 'CANCELLED', 'USER_CANCELLED', 'REJECTED'].includes(statusData.state.toUpperCase())) ||
        (statusData.errorCode && statusData.errorCode.includes('CANCELLED'))
    )) {
      statusValue = 'FAILED';
      console.log('❌ Payment failed/cancelled, redirecting with FAILED. Status:', statusData.status, 'State:', statusData.state, 'ErrorCode:', statusData.errorCode);
    }
    // Handle pending case - don't pass status, let frontend poll
    else if (statusData.status === 'PAYMENT_PENDING') {
      statusValue = null; // Don't pass status, let frontend handle polling
      console.log('⏳ Payment pending, redirecting without status for polling');
    }
    // Default case
    else {
      statusValue = 'FAILED';
      console.log('❓ Unknown status, defaulting to FAILED:', statusData.status);
    }
    
    const statusParam = statusValue ? `&status=${encodeURIComponent(statusValue)}` : '';
    const redirectUrl = transactionId 
      ? `/payment-complete?transactionId=${encodeURIComponent(transactionId)}${statusParam}`
      : '/payment-complete';
    
    console.log('🔀 Redirecting to:', redirectUrl);
    res.redirect(307, redirectUrl);
  } catch (error) {
    console.error('💥 Error in redirect API:', error);
    
    // If we can't check the status, redirect with the transaction ID
    const redirectUrl = transactionId 
      ? `/payment-complete?transactionId=${encodeURIComponent(transactionId)}`
      : '/payment-complete';
    
    console.log('🔀 Error fallback redirect to:', redirectUrl);
    res.redirect(307, redirectUrl);
  }
}
