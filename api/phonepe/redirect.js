// Vercel API route for PhonePe redirect
export default async function handler(req, res) {
  // Extract transactionId from query parameters
  const { transactionId } = req.query;

  // Redirect to the React payment completion page
  // This allows the user to see a proper React page instead of raw HTML
  const redirectUrl = transactionId 
    ? `/payment-complete?transactionId=${encodeURIComponent(transactionId)}`
    : '/payment-complete';
  
  res.redirect(307, redirectUrl); // 307 status preserves the original HTTP method
}