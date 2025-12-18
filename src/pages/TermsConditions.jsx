import React from 'react';
import PolicyLayout from '../components/PolicyLayout';

const TermsConditions = () => {
  return (
    <PolicyLayout title="Terms and Conditions">
      <p style={{ fontStyle: 'italic', marginBottom: '24px', color: '#5f6368' }}>Last updated: December 18, 2025</p>

      <h2 style={{ fontSize: '24px', margin: '32px 0 16px', color: '#202124' }}>1. Introduction</h2>
      <p style={{ marginBottom: '16px' }}>
        Welcome to Interview Pro. By accessing our website and using our services, you agree to be bound by these Terms and Conditions.
      </p>

      <h2 style={{ fontSize: '24px', margin: '32px 0 16px', color: '#202124' }}>2. Use of Service</h2>
      <p style={{ marginBottom: '16px' }}>
        You agree to use our service only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.
      </p>

      <h2 style={{ fontSize: '24px', margin: '32px 0 16px', color: '#202124' }}>3. Intellectual Property</h2>
      <p style={{ marginBottom: '16px' }}>
        All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Interview Pro or its content suppliers and protected by international copyright laws.
      </p>

      <h2 style={{ fontSize: '24px', margin: '32px 0 16px', color: '#202124' }}>4. Limitation of Liability</h2>
      <p style={{ marginBottom: '16px' }}>
        Interview Pro shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
      </p>

      <h2 style={{ fontSize: '24px', margin: '32px 0 16px', color: '#202124' }}>5. Changes to Terms</h2>
      <p style={{ marginBottom: '16px' }}>
        We reserve the right to modify these terms at any time. We will always post the most current version on our website.
      </p>
      
      <div style={{ marginTop: '40px', borderTop: '1px solid #dadce0', paddingTop: '20px' }}>
        <p>
          If you have any questions about these Terms, please contact us at <a href="mailto:interviewpro4@gmail.com" style={{ color: '#1a73e8' }}>interviewpro4@gmail.com</a>.
        </p>
      </div>
    </PolicyLayout>
  );
};

export default TermsConditions;
