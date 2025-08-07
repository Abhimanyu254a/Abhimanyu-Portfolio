import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Loading Screen Component
const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [glitchText, setGlitchText] = useState('LOADING PORTFOLIO');

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 12;
      });
    }, 120);

    const glitchInterval = setInterval(() => {
      const texts = ['LOADING PORTFOLIO', 'L04D1NG P0RTF0L10', 'LOAD!NG P@RTFOL!O', 'LOADING PORTFOLIO'];
      setGlitchText(texts[Math.floor(Math.random() * texts.length)]);
    }, 300);

    return () => {
      clearInterval(progressInterval);
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="loading-content">
        <div className="loading-logo">
          <motion.div
            className="logo-ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="logo-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="loading-text">
          <motion.h1
            className="glitch-text"
            animate={{ opacity: [1, 0.8, 1] }}
            transition={{ duration: 0.15, repeat: Infinity }}
          >
            {glitchText}
          </motion.h1>
        </div>
        
        <div className="progress-container">
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <span className="progress-text">{Math.floor(Math.min(progress, 100))}%</span>
        </div>
      </div>
    </motion.div>
  );
};
//----------------------------------------------------------------------------------------
// Center Photo Component (Me)
const CenterPhoto = ({ onAutoClick, phase }) => {
  useEffect(() => {
    if (phase === 'enlarged') {
      const timer = setTimeout(() => {
        onAutoClick();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [phase, onAutoClick]);

  const getScale = () => {
    switch (phase) {
      case 'enlarged': return 1.25; // 25% larger
      case 'normal': return 1;      // Original size
      default: return 0;            // Hidden
    }
  };

  return (
    <motion.div
      className="center-photo"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: phase !== 'hidden' ? 1 : 0,
        scale: getScale(),
        boxShadow: phase === 'enlarged' 
          ? [
              "0 0 30px rgba(138, 43, 226, 0.6)",
              "0 0 50px rgba(138, 43, 226, 0.8)",
              "0 0 30px rgba(138, 43, 226, 0.6)"
            ]
          : "0 0 15px rgba(138, 43, 226, 0.4)"
      }}
      transition={{ 
        duration: phase === 'normal' ? 0.8 : 1,
        ease: "easeOut",
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      <div className="photo-container">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
          alt="Profile"
          className="profile-image"
        />
        <div className="photo-overlay">
          <div className="scan-line" />
        </div>
        <div className="photo-label">Me</div>
      </div>
    </motion.div>
  );
};

// Grid Block Component
const GridBlock = ({ title, color, index, isVisible, delay = 0 }) => {
  return (
    <motion.div
      className={`grid-block ${color}`}
      initial={{ 
        opacity: 0, 
        scale: 0.1,
        x: 0, // Start from center (where Me div is)
        y: 0,
        zIndex: -1 // Behind the Me div initially
      }}
      animate={isVisible ? { 
        opacity: 1, 
        scale: 1,
        x: 0,
        y: 0,
        zIndex: 1
      } : {
        opacity: 0, 
        scale: 0.1,
        x: 0,
        y: 0,
        zIndex: -1
      }}
      transition={{ 
        delay: isVisible ? delay + (0.1 * index) : 0,
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
        damping: 15
      }}
    >
      <div className="block-content">
        <h3 className="block-title">{title}</h3>
      </div>
      <div className="block-glow" />
    </motion.div>
  );
};

// Main Portfolio Component
const PortfolioReveal = () => {
  const [loading, setLoading] = useState(true);
  const [centerPhase, setCenterPhase] = useState('hidden'); // 'hidden', 'enlarged', 'normal'
  const [showOtherBlocks, setShowOtherBlocks] = useState(false);
  const [allBlocksSettled, setAllBlocksSettled] = useState(false);

  useEffect(() => {
    // Step 1: Loading finishes, show enlarged Me div
    const loadingTimer = setTimeout(() => {
      setLoading(false);
      setCenterPhase('enlarged');
    }, 3500);

    return () => clearTimeout(loadingTimer);
  }, []);

  const handleAutoClick = () => {
    // Step 2: Auto-click triggers - show other blocks from behind Me
    setShowOtherBlocks(true);
    
    // Step 3: After blocks settle (2 seconds), shrink Me to normal size
    setTimeout(() => {
      setAllBlocksSettled(true);
      setCenterPhase('normal');
    }, 2000);
  };

  const gridBlocks = [
    { id: 'about', title: "About me", color: 'blue', gridArea: 'about' },
    { id: 'projects', title: "Projects", color: 'cyan', gridArea: 'projects' },
    { id: 'contact', title: "Contact", color: 'red', gridArea: 'contact' },
    { id: 'gl', title: "G & L", color: 'red', gridArea: 'gl' },
    { id: 'resume', title: "Resume", color: 'blue', gridArea: 'resume' },
    { id: 'tech', title: "Tech_Stack", color: 'red', gridArea: 'tech' },
    { id: 'cert', title: "Certification", color: 'red', gridArea: 'cert' },
    { id: 'achievement', title: "Achievement", color: 'cyan', gridArea: 'achievement' }
  ];

  return (
    <div className="portfolio-container">
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <div className="main-content">
          <div className="portfolio-grid">
            {/* Other grid blocks - initially hidden */}
            {gridBlocks.map((block, index) => (
              <div key={block.id} className={`grid-item ${block.id}`}>
                <GridBlock
                  title={block.title}
                  color={block.color}
                  index={index}
                  isVisible={showOtherBlocks}
                  delay={0}
                />
              </div>
            ))}
            
            {/* Center photo - appears first, enlarged */}
            <div className="grid-item center">
              <CenterPhoto
                onAutoClick={handleAutoClick}
                phase={centerPhase}
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .portfolio-container {
          min-height: 100vh;
          background: #1a1a1a;
          color: #ffffff;
          font-family: 'Arial', sans-serif;
          overflow-x: hidden;
        }

        /* Loading Screen Styles */
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          z-index: 2000;
        }

        .loading-content {
          text-align: center;
        }

        .loading-logo {
          position: relative;
          width: 100px;
          height: 100px;
          margin: 0 auto 50px;
        }

        .logo-ring {
          position: absolute;
          width: 100px;
          height: 100px;
          border: 4px solid transparent;
          border-top: 4px solid #00ffff;
          border-right: 4px solid #00ffff;
          border-radius: 50%;
        }

        .logo-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 30px;
          height: 30px;
          background: #00ffff;
          border-radius: 50%;
          box-shadow: 0 0 30px #00ffff;
        }

        .glitch-text {
          font-size: 28px;
          color: #00ffff;
          text-shadow: 2px 2px 4px rgba(0, 255, 255, 0.5);
          letter-spacing: 3px;
          margin-bottom: 50px;
          font-weight: bold;
        }

        .progress-container {
          width: 400px;
          margin: 0 auto;
        }

        .progress-bar {
          width: 100%;
          height: 6px;
          background: #333;
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 15px;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00ffff, #0066ff);
          transition: width 0.3s ease;
        }

        .progress-text {
          font-size: 16px;
          color: #00ffff;
          font-weight: bold;
        }

        /* Main Content Styles */
        .main-content {
          min-height: 100vh;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(4, 250px);
          grid-template-rows: repeat(3, 200px);
          gap: 20px;
          grid-template-areas:
            "about about projects projects"
            "tech cert center contact"
            "achievement achievement resume gl";
          position: relative;
        }

        .grid-item {
          position: relative;
        }

        .grid-item.about { grid-area: about; }
        .grid-item.projects { grid-area: projects; }
        .grid-item.contact { grid-area: contact; }
        .grid-item.gl { grid-area: gl; }
        .grid-item.resume { grid-area: resume; }
        .grid-item.tech { grid-area: tech; }
        .grid-item.cert { grid-area: cert; }
        .grid-item.achievement { grid-area: achievement; }
        .grid-item.center { 
          grid-area: center; 
          z-index: 10; /* Me div stays on top initially */
        }

        /* Grid Block Styles */
        .grid-block {
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          border-radius: 20px;
          padding: 20px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .grid-block.blue {
          border: 3px solid #4169E1;
        }

        .grid-block.cyan {
          border: 3px solid #00FFFF;
        }

        .grid-block.red {
          border: 3px solid #FF4444;
        }

        .grid-block.purple {
          border: 3px solid #8A2BE2;
        }

        .block-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
        }

        .block-title {
          font-size: 18px;
          font-weight: bold;
          color: white;
          text-transform: capitalize;
        }

        .block-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .grid-block.blue .block-glow {
          background: radial-gradient(circle, rgba(65, 105, 225, 0.2) 0%, transparent 70%);
        }

        .grid-block.cyan .block-glow {
          background: radial-gradient(circle, rgba(0, 255, 255, 0.2) 0%, transparent 70%);
        }

        .grid-block.red .block-glow {
          background: radial-gradient(circle, rgba(255, 68, 68, 0.2) 0%, transparent 70%);
        }

        .grid-block:hover .block-glow {
          opacity: 1;
        }

        .grid-block:hover {
          transform: translateY(-5px);
        }

        /* Center Photo Styles */
        .center-photo {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          border: 3px solid #8A2BE2;
          background: rgba(0, 0, 0, 0.8);
          padding: 20px;
          cursor: pointer;
          overflow: hidden;
          position: relative;
          transform-origin: center center;
        }

        .photo-container {
          width: 100%;
          height: 100%;
          position: relative;
          border-radius: 15px;
          overflow: hidden;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 15px;
        }

        .photo-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, transparent 30%, rgba(138, 43, 226, 0.2) 50%, transparent 70%);
          pointer-events: none;
        }

        .scan-line {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: #8A2BE2;
          animation: scan 3s infinite linear;
        }

        .photo-label {
          position: absolute;
          top: 15px;
          left: 15px;
          color: white;
          font-size: 18px;
          font-weight: bold;
          z-index: 3;
        }

        @keyframes scan {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .portfolio-grid {
            grid-template-columns: repeat(3, 200px);
            grid-template-rows: repeat(4, 150px);
            gap: 15px;
            grid-template-areas:
              "about about projects"
              "tech center contact"
              "cert achievement gl"
              "resume resume resume";
          }
        }

        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(9, 120px);
            gap: 15px;
            grid-template-areas:
              "about"
              "projects"
              "center"
              "contact"
              "gl"
              "resume"
              "tech"
              "cert"
              "achievement";
          }

          .main-content {
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioReveal;