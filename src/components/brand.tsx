'use client';

import React, { useState, useEffect } from 'react';

export default function GlassCard() {
  const [showForm, setShowForm] = useState(false);
  const [step, setStep] = useState(1);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // threshold for background change
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        minHeight: '80vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        overflow: 'hidden',
      }}
    >
      {/* Blurred Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          transform: 'scale(1.05)',
          zIndex: 0,
        }}
      ></div>

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1,
        }}
      ></div>

      {/* Main Glass Card */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '700px',
          padding: '20px',
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <h2 style={{ marginBottom: '10px' }}>Expand your Horizons with Elite Hotel Partnerships</h2>
        <p>
          Unlock the potential of your property by partnering with the world’s top hotel brands!
          Whether you’re looking to introduce a prestigious international chain or a trusted national favorite,
          we’re here to make it happen. Don’t miss this opportunity to elevate your business and deliver
          exceptional guest experiences. Submit your interest today, and let's build something extraordinary together!
        </p>

        {/* Checkout Button */}
        <button
          onClick={() => {
            setShowForm(true);
            setStep(1);
          }}
          style={{
            marginTop: '20px',
            padding: '12px 30px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#fff',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Checkout
        </button>
      </div>

      {/* Popup Form Card */}
      {showForm && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
            width: '500px',
            background: scrolled
              ? '#ffffff' // solid background after scroll
              : 'rgba(255, 255, 255, 0.1)', // glass effect initially
            backdropFilter: scrolled ? 'none' : 'blur(10px)',
            WebkitBackdropFilter: scrolled ? 'none' : 'blur(10px)',
            borderRadius: '16px',
            border: scrolled
              ? '1px solid rgba(0,0,0,0.1)'
              : '1px solid rgba(255, 255, 255, 0.2)',
            padding: '20px',
            color: scrolled ? '#000' : '#fff',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setShowForm(false)}
            style={{
              background: 'transparent',
              border: 'none',
              color: scrolled ? '#000' : '#fff',
              fontSize: '20px',
              position: 'absolute',
              right: '15px',
              top: '10px',
              cursor: 'pointer',
            }}
          >
            ✖
          </button>

          {step === 1 && (
            <>
              <h3 style={{ marginBottom: '10px', color: scrolled ? '#000' : '#fff' }}>
                Contact Information
              </h3>
              <input placeholder="Full name" style={inputStyle(scrolled)} />
              <input placeholder="Email" style={inputStyle(scrolled)} />
              <input placeholder="Phone number" style={inputStyle(scrolled)} />
              <input placeholder="City" style={inputStyle(scrolled)} />

              <button
                onClick={() => setStep(2)}
                style={{
                  marginTop: '15px',
                  padding: '10px 20px',
                  background: '#007BFF',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                Continue
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h3 style={{ marginBottom: '10px', color: scrolled ? '#000' : '#fff' }}>
                Property Details
              </h3>

              <label style={{ color: scrolled ? '#000' : '#fff' }}>Property Type?</label>
              <select style={selectStyle(scrolled)}>
                <option>Select</option>
                <option>Greenfield or Open Land</option>
                <option>Hotel Running</option>
                <option>Under Construction</option>
                <option>Heritage</option>
              </select>

              <label style={{ color: scrolled ? '#000' : '#fff', marginTop: '10px' }}>
                Property Size?
              </label>
              <select style={selectStyle(scrolled)}>
                <option>Select</option>
                <option>Less than 15,000 Sq.ft</option>
                <option>15,000 Sq.ft - 30,000 Sq.ft</option>
                <option>30,000 Sq.ft - 60,000 Sq.ft</option>
                <option>60,000 Sq.ft & Above</option>
              </select>

              <button
                style={{
                  marginTop: '15px',
                  padding: '10px 20px',
                  background: '#28a745',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                Submit
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
interface InputStyleProps {
    scrolled: boolean;
}

const inputStyle = (scrolled: boolean): React.CSSProperties => ({
    width: '100%',
    margin: '5px 0',
    padding: '10px',
    borderRadius: '8px',
    border: scrolled
        ? '1px solid rgba(0,0,0,0.2)'
        : '1px solid rgba(255, 255, 255, 0.4)',
    background: scrolled
        ? 'rgba(255, 255, 255, 0.9)'
        : 'rgba(255, 255, 255, 0.2)',
    color: scrolled ? '#000' : '#fff',
});

interface SelectStyleProps {
    scrolled: boolean;
}

const selectStyle = (scrolled: SelectStyleProps['scrolled']): React.CSSProperties => ({
    width: '100%',
    margin: '5px 0 15px 0',
    padding: '10px',
    borderRadius: '8px',
    border: scrolled
        ? '1px solid rgba(0,0,0,0.2)'
        : '1px solid rgba(255, 255, 255, 0.4)',
    background: scrolled
        ? 'rgba(255, 255, 255, 0.9)'
        : 'rgba(255, 255, 255, 0.2)',
    color: scrolled ? '#000' : '#fff',
});
