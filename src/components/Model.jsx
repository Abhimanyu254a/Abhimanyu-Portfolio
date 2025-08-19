import React from 'react';

function Modal({ isOpen, onClose, title, content, children }) {
  // Don't render anything if modal is not open
  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay"
      onClick={onClose} // Click outside to close
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999, // High z-index to be on top
        backdropFilter: 'blur(8px)',
        animation: 'fadeIn 0.3s ease'
      }}
    >
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '32px',
          maxWidth: '600px',
          maxHeight: '80vh',
          overflow: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          transform: 'scale(1)',
          transition: 'all 0.3s ease-out',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          position: 'relative',
          animation: 'slideIn 0.3s ease'
        }}
      >
        {/* Modal Header */}
        <div style={{ marginBottom: '24px' }}>

          {/* Modal Content */}
          <div style={{ color: '#666', lineHeight: '1.6' }}>
            {children || content}
          </div>
        </div>
        
        {/* Close Button (X) */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#999',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default Modal;