// Vercel API route for checking PhonePe payment status
export default async function handler(req, res) {
  const { transactionId } = req.query;

  console.log('🔍 Status API called for transaction:', transactionId);

  if (!transactionId) {
    console.log('❌ No transaction ID provided');
    return res.status(400).json({
      success: false,
      error: 'Transaction ID is required'
    });
  }

  try {
    // Forward the request to your backend
    const backendUrl = process.env.NODE_ENV === 'production' 
      ? process.env.BACKEND_URL || 'https://inter-backend-lpmb.onrender.com'
      : 'http://localhost:60468';
    
    console.log('📡 Forwarding to backend:', `${backendUrl}/phonepe/status/${transactionId}`);
    
    const response = await fetch(`${backendUrl}/phonepe/status/${transactionId}`);
    const data = await response.json();
    
    console.log('📊 Backend response:', { status: response.status, data });
    
    // Forward the response from backend
    return res.status(response.status).json(data);
  } catch (error) {
    console.error('💥 Error checking payment status:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to check payment status',
      details: error.message
    });
  }
}
