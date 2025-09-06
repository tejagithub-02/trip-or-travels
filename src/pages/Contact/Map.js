import React from 'react';

export default function Map() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '40px 0 20px 0',
      backgroundColor: '#f9f9f9',
      minHeight: '100vh',
      boxSizing: 'border-box',
      width: '100%'
    }}>
      <h2 style={{
        marginBottom: '30px',
        color: '#2c3e50',
        fontSize: '2rem',
        textAlign: 'center',
        fontFamily: 'Segoe UI, sans-serif',
        width: '100%'
      }}>
        Our Location
      </h2>

      <div style={{
        width: '100%',
        height: '500px',  
        
        borderRadius: '0',
        overflow: 'hidden',
        boxShadow: 'none'  
      }}>
        <iframe
          title="Bloom IT Solutions Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.418271657919!2d77.6072023152732!3d12.93607189136273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d37d33c9d5%3A0xb9a2637d73bf6095!2sBloom%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1694061200000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
