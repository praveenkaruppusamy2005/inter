import React from 'react';
import PolicyLayout from '../components/PolicyLayout';

const CancellationRefunds = () => {
  return (
    <PolicyLayout title="Cancellation & Refunds Policy">
      <p style={{ fontStyle: 'italic', marginBottom: '24px', color: '#5f6368' }}>Last updated: December 18, 2025</p>
      
      <h2 style={{ fontSize: '24px', margin: '32px 0 16px', color: '#202124' }}>Cancellation Policy</h2>
      <p style={{ marginBottom: '16px' }}>
        <strong>Strict No-Cancellation Policy:</strong> Once a subscription plan is purchased and active, it cannot be cancelled. All sales are final.
        We do not offer cancellations or refunds for the current billing period once payment has been processed.
      </p>

      <h2 style={{ fontSize: '24px', margin: '32px 0 16px', color: '#202124' }}>Refund Policy</h2>
      <p style={{ marginBottom: '16px' }}>
        <strong>No Refunds:</strong> Due to the nature of our service, which is billed on a per-hour basis, we do not offer refunds once the service has been used or time has been consumed.
        Please ensure you are satisfied with the service before purchasing additional hours.
      </p>
      
      <div style={{ marginTop: '40px', padding: '20px', background: '#e8f0fe', borderRadius: '8px', color: '#174ea6' }}>
        <p style={{ margin: 0 }}>
          <strong>Questions?</strong> For any questions regarding cancellations or refunds, please contact us at <a href="mailto:interviewpro4@gmail.com" style={{ color: '#174ea6' }}>interviewpro4@gmail.com</a>.
        </p>
      </div>
    </PolicyLayout>
  );
};

export default CancellationRefunds;
