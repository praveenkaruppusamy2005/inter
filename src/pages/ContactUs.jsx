import React from 'react';
import PolicyLayout from '../components/PolicyLayout';

const ContactUs = () => {
  return (
    <PolicyLayout title="Contact Us">
      <p style={{ fontStyle: 'italic', marginBottom: '24px', color: '#5f6368' }}>Last updated: December 18, 2025</p>

      <p style={{ marginBottom: '32px', fontSize: '18px' }}>
        We are here to help you! If you have any questions, concerns, or feedback, please reach out to us using the contact information below.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', marginTop: '20px' }}>
        <div style={{ padding: '24px', background: '#f8f9fa', borderRadius: '12px', border: '1px solid #dadce0' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#1a73e8' }}>Email Us</h3>
            <p style={{ margin: 0 }}>
              For general inquiries and support:<br />
              <a href="mailto:interviewpro4@gmail.com" style={{ color: '#202124', fontWeight: 600, textDecoration: 'none' }}>interviewpro4@gmail.com</a>
            </p>
        </div>
        
        <div style={{ padding: '24px', background: '#f8f9fa', borderRadius: '12px', border: '1px solid #dadce0' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#34a853' }}>Response Time</h3>
            <p style={{ margin: 0 }}>
              We aim to respond to all inquiries within <strong>24-48 hours</strong>.
            </p>
        </div>
      </div>
    </PolicyLayout>
  );
};

export default ContactUs;
