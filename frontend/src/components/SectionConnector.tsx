import React from 'react';

const SectionConnector: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes sectionPulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.85;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.4);
            opacity: 0;
          }
        }
        @keyframes sectionPulse2 {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
          }
          100% {
            transform: translate(-50%, -50%) scale(3.2);
            opacity: 0;
          }
        }
        @keyframes sectionBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.55; }
        }
      `}</style>
      <div
        style={{
          position: 'relative',
          height: 0,
          overflow: 'visible',
          zIndex: 20,
          pointerEvents: 'none',
        }}
      >
        {/* Outer ring 2 — slowest, largest */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            border: '1.5px solid #C9A84C',
            transform: 'translate(-50%, -50%)',
            animation: 'sectionPulse2 2.8s ease-out infinite',
            animationDelay: '0.4s',
          }}
        />
        {/* Outer ring 1 — medium */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            border: '1.5px solid #C9A84C',
            transform: 'translate(-50%, -50%)',
            animation: 'sectionPulse 2.2s ease-out infinite',
          }}
        />
        {/* Inner solid gold dot */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            width: '9px',
            height: '9px',
            borderRadius: '50%',
            backgroundColor: '#C9A84C',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 10px 3px rgba(201,168,76,0.65), 0 0 20px 6px rgba(201,168,76,0.25)',
            animation: 'sectionBlink 2.2s ease-in-out infinite',
          }}
        />
      </div>
    </>
  );
};

export default SectionConnector;
