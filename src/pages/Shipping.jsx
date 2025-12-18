import React from 'react';
import PolicyLayout from '../components/PolicyLayout';

const Shipping = () => {
  return (
    <PolicyLayout title="Shipping & Delivery Policy">
      <p style={{ fontStyle: 'italic', marginBottom: '24px', color: '#5f6368' }}>Last updated: December 18, 2025</p>

      <div style={{ background: '#fef7e0', padding: '16px', borderRadius: '8px', marginBottom: '32px', border: '1px solid #fce8b2' }}>
        <p style={{ margin: 0, color: '#b06000' }}>
          <strong>Note:</strong> Interview Pro is a digital service platform. We do not ship physical products.
        </p>
      </div>

      <h2 style={{ fontSize: '24px', margin: '32px 0 16px', color: '#202124' }}>Delivery of Digital Services</h2>
      <p style={{ marginBottom: '16px' }}>
        Upon successful payment, you will receive immediate access to the purchased services or features on our platform.
        A confirmation email will also be sent to your registered email address with the details of your purchase.
      </p>

      <h2 style={{ fontSize: '24px', margin: '32px 0 16px', color: '#202124' }}>Issues with Access</h2>
      <p style={{ marginBottom: '16px' }}>
        If you experience any issues accessing your purchased content or features, please contact our support team immediately at <a href="mailto:interviewpro4@gmail.com" style={{ color: '#1a73e8' }}>interviewpro4@gmail.com</a>.
        We will resolve the issue within 24 hours.
      </p>
    </PolicyLayout>
  );
};

export default Shipping;
