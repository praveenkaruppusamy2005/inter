// Vercel API route for PhonePe webhook
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Log the incoming webhook data
    console.log('PhonePe webhook received:', req.body);
    
    // Verify webhook signature here (implement according to PhonePe documentation)
    // const isValid = verifyWebhookSignature(req);
    // if (!isValid) {
    //   return res.status(401).json({ error: 'Unauthorized' });
    // }

    // Process the webhook data
    const webhookData = req.body;
    
    // Forward the webhook data to your backend server
    // This is where you'd communicate with your desktop app backend
    // For development, using localhost backend
    // For production, you would use your deployed backend server URL
    try {
      // For development with localhost backend
      const backendUrl = 'http://localhost:60468/phonepe/webhook';
      
      // For production, you would use your actual backend server URL
      // const backendUrl = 'https://your-actual-backend.com/phonepe/webhook';
      
      const backendResponse = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include authentication if required by your backend
          'Authorization': `Basic ${Buffer.from('praveen:Praveen0132P').toString('base64')}`, // Note: This may need adjustment based on your backend authentication
        },
        body: JSON.stringify(webhookData)
      });
      
      if (backendResponse.ok) {
        console.log('Webhook forwarded successfully to backend');
      } else {
        console.error('Failed to forward webhook to backend, status:', backendResponse.status);
      }
    } catch (backendError) {
      console.error('Error forwarding webhook to backend:', backendError);
      // In a production implementation, you might want to queue this for retry
      // or store it in a database to process later
    }

    // Respond to PhonePe that the webhook was received
    res.status(200).json({ success: true, message: 'Webhook received' });
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}