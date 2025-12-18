import React from 'react';
import PolicyLayout from '../components/PolicyLayout';

const Privacy = () => {
  return (
    <PolicyLayout title="Privacy Policy">
      <p style={{ fontStyle: 'italic', marginBottom: '24px', color: '#5f6368' }}>Last updated: December 18, 2025</p>

      <h2 style={{ fontSize: '24px', margin: '32px 0 16px', color: '#202124' }}>1. Information We Collect</h2>
      <p style={{ marginBottom: '16px' }}>
        We collect information you provide directly to us, such as when you create an account, update your profile, or communicate with us. This may include your name, email address, and other contact or personal information.
      </p>

      <h2 style={{ fontSize: '24px', margin: '32px 0 16px', color: '#202124' }}>2. How We Use Your Information</h2>
      <p style={{ marginBottom: '16px' }}>
        We use the information we collect to operate, maintain, and improve our services, to communicate with you, and to protect our users.
      </p>

      <h2 style={{ fontSize: '24px', margin: '32px 0 16px', color: '#202124' }}>3. Information Sharing</h2>
      <p style={{ marginBottom: '16px' }}>
        We do not share your personal information with third parties except as described in this policy or with your consent. We may share information with service providers who perform services on our behalf.
      </p>

      <h2 style={{ fontSize: '24px', margin: '32px 0 16px', color: '#202124' }}>4. Data Security</h2>
      <p style={{ marginBottom: '16px' }}>
        We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
      </p>

      <h2 style={{ fontSize: '24px', margin: '32px 0 16px', color: '#202124' }}>5. Contact Us</h2>
      <p style={{ marginBottom: '16px' }}>
        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:interviewpro4@gmail.com" style={{ color: '#1a73e8' }}>interviewpro4@gmail.com</a>.
      </p>
    </PolicyLayout>
  );
};

export default Privacy;
