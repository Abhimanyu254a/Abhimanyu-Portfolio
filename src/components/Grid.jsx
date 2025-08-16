/*
=============================================================================
📄 FILE: src/components/Grid.jsx
🔄 ACTION: REPLACE your existing Grid.jsx file with this code
🎯 SOLUTION: All divs stay visible with blur effect when modal opens
=============================================================================
*/

import React, { useState } from "react";
import GridBlock from "./GridBlock";
import ImageGridBlock from "./ImageGridBlock";
import Modal from "./Model";

function Grid() {
  // State to track which modal is currently open (null = no modal open)
  const [activeModal, setActiveModal] = useState(null);

  // Function to open a specific modal
  const handleBlockClick = (blockType) => {
    setActiveModal(blockType);
  };

  // Function to close the modal
  const closeModal = () => {
    setActiveModal(null);
  };

  // Content for each modal section
  // 🔄 CUSTOMIZE: Replace this content with your actual information
  const getModalContent = (blockType) => {
    const content = {
      // ABOUT ME SECTION CONTENT
      'about': {
        title: 'About Me',
        content: (
          <div>
            {/* 🔄 REPLACE: Add your actual about me content here */}
            <p style={{ marginBottom: '16px' }}>
              I'm a passionate Frontend Developer with expertise in modern web technologies. 
              I love creating beautiful, responsive, and user-friendly applications.
            </p>
            <p style={{ marginBottom: '16px' }}>
              My journey in web development started with curiosity and has grown into a deep 
              passion for creating digital experiences that make a difference.
            </p>
            <p>
              I'm always eager to learn new technologies and take on challenging projects 
              that push the boundaries of what's possible on the web.
            </p>
          </div>
        )
      },
      
      // TECH STACK SECTION CONTENT
      'tech': {
        title: 'Tech Stack',
        content: (
          <div>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ marginBottom: '12px', color: '#333' }}>Frontend Technologies</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {/* 🔄 REPLACE: Add your actual tech stack */}
                {['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'].map(tech => (
                  <span key={tech} style={{
                    backgroundColor: '#e3f2fd',
                    color: '#1976d2',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '14px'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Add more tech categories as needed */}
          </div>
        )
      },
      
      // CERTIFICATION SECTION CONTENT
      'certification': {
        title: 'Certifications',
        content: (
          <div>
            {/* 🔄 REPLACE: Add your actual certifications */}
            <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <h3 style={{ marginBottom: '8px', color: '#333' }}>React Developer Certificate</h3>
              <p style={{ color: '#666', marginBottom: '4px' }}>Meta - 2024</p>
              <p style={{ fontSize: '14px', color: '#888' }}>Advanced React patterns, hooks, and performance optimization</p>
            </div>
            {/* Add more certifications */}
          </div>
        )
      },
      
      // PROJECTS SECTION CONTENT
      'projects': {
        title: 'Projects',
        content: (
          <div>
            {/* 🔄 REPLACE: Add your actual projects */}
            <div style={{ marginBottom: '24px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
              <h3 style={{ marginBottom: '12px', color: '#333' }}>E-Commerce Platform</h3>
              <p style={{ marginBottom: '12px', color: '#666' }}>
                A full-featured e-commerce application built with React, featuring user authentication, 
                shopping cart, payment integration, and admin dashboard.
              </p>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                {['React', 'Redux', 'Node.js', 'MongoDB'].map(tech => (
                  <span key={tech} style={{
                    backgroundColor: '#e8f5e8',
                    color: '#2e7d2e',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontSize: '12px'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <a href="#" style={{ color: '#1976d2', textDecoration: 'none', marginRight: '16px' }}>Live Demo</a>
                <a href="#" style={{ color: '#1976d2', textDecoration: 'none' }}>GitHub</a>
              </div>
            </div>
            {/* Add more projects */}
          </div>
        )
      },
      
      // ACHIEVEMENT SECTION CONTENT
      'achievement': {
        title: 'Achievements',
        content: (
          <div>
            {/* 🔄 REPLACE: Add your actual achievements */}
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ marginBottom: '8px', color: '#333' }}>🏆 Hackathon Winner</h3>
              <p style={{ color: '#666', marginBottom: '4px' }}>TechFest 2024 - First Place</p>
              <p style={{ fontSize: '14px', color: '#888' }}>Built an innovative accessibility tool for visually impaired users</p>
            </div>
            {/* Add more achievements */}
          </div>
        )
      },
      
      // GITHUB & LINKEDIN SECTION CONTENT
      'github': {
        title: 'GitHub & LinkedIn',
        content: (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ marginBottom: '16px', color: '#333' }}>Connect with me on:</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* 🔄 REPLACE: Add your actual GitHub and LinkedIn URLs */}
                <a 
                  href="https://github.com/yourusername" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '16px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    color: '#333'
                  }}
                >
                  <div style={{ marginRight: '12px', fontSize: '24px' }}>📱</div>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>GitHub</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>Check out my repositories and contributions</div>
                  </div>
                </a>
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '16px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    color: '#333'
                  }}
                >
                  <div style={{ marginRight: '12px', fontSize: '24px' }}>💼</div>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>LinkedIn</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>Let's connect professionally</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )
      },
      
      // CONTACT SECTION CONTENT
      'contact': {
        title: 'Contact Me',
        content: (
          <div>
            <p style={{ marginBottom: '20px' }}>Let's work together! Feel free to reach out:</p>
            <div style={{ marginBottom: '20px' }}>
              {/* 🔄 REPLACE: Add your actual contact information */}
              <div style={{ marginBottom: '12px' }}>
                <strong>Email:</strong> your.email@example.com
              </div>
              <div style={{ marginBottom: '12px' }}>
                <strong>Phone:</strong> +1 (555) 123-4567
              </div>
              <div style={{ marginBottom: '12px' }}>
                <strong>Location:</strong> Your City, Country
              </div>
            </div>
            <div style={{ padding: '16px', backgroundColor: '#f0f8ff', borderRadius: '8px' }}>
              <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>
                💡 I'm currently open to new opportunities and exciting projects. 
                Let's discuss how we can work together!
              </p>
            </div>
          </div>
        )
      },
      
      // RESUME SECTION CONTENT
      'resume': {
        title: 'Resume',
        content: (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <p style={{ marginBottom: '16px' }}>Download my resume to learn more about my experience and skills:</p>
              {/* 🔄 REPLACE: Add your actual resume download links */}
              <button 
                style={{
                  backgroundColor: '#1976d2',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  marginRight: '12px'
                }}
              >
                📄 Download PDF
              </button>
              <button 
                style={{
                  backgroundColor: '#f5f5f5',
                  color: '#333',
                  border: '1px solid #ddd',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
              >
                👀 View Online
              </button>
            </div>
            <div style={{ padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
              <h4 style={{ marginBottom: '12px' }}>Quick Overview:</h4>
              {/* 🔄 REPLACE: Add your actual resume highlights */}
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li>3+ years of frontend development experience</li>
                <li>Proficient in React, JavaScript, and modern web technologies</li>
                <li>Experience with responsive design and user experience optimization</li>
                <li>Strong problem-solving and collaborative skills</li>
              </ul>
            </div>
          </div>
        )
      }
    };
    
    return content[blockType] || { title: 'Coming Soon', content: 'This section is under development.' };
  };

  return (
    <>
      {/* MAIN GRID CONTAINER - This gets blurred when modal opens */}
      <div 
        className={`Container`}
        style={{
          // BLUR EFFECT: All divs stay visible but get blurred
          filter: activeModal ? 'blur(3px)' : 'none',
          transition: 'filter 0.3s ease',
          pointerEvents: activeModal ? 'none' : 'auto' // Disable clicking when modal is open
        }}
      >
        {/* TOP ROW - About Me, Tech Stack, Certifications */}
        <div className="top">
          {/* ABOUT ME - Large top block */}
          <div onClick={() => handleBlockClick('about')}>
            <GridBlock ClassName='large-top' desciption={'About Me'} />
          </div>
          
          {/* TECH STACK - Small bottom left block */}
          <div onClick={() => handleBlockClick('tech')}>
            <GridBlock ClassName='small-bottom-left' desciption={'Tech Stack'} />
          </div>
          
          {/* CERTIFICATIONS - Small bottom right block */}
          <div onClick={() => handleBlockClick('certification')}>
            <GridBlock ClassName='small-bottom-right' desciption={'Certification'} />
          </div>
        </div>
        
        {/* CENTER ROW - Projects, Profile Image, Achievements */}
        <div className="center">
          {/* PROJECTS - Middle top block */}
          <div className="middle-top-div h-0px w-0px"  onClick={() => handleBlockClick('projects')}>
            <GridBlock ClassName='middle-top' desciption={'Projects'} />
          </div>
          
          {/* PROFILE IMAGE - Middle center block (NOT CLICKABLE) */}
          <ImageGridBlock ClassName='middle' desciption={'ME'} />
          
          {/* ACHIEVEMENTS - Middle bottom block */}
          <div className="middle-bottom-div h-0px w-0px" onClick={() => handleBlockClick('achievement')}>
            <GridBlock ClassName='middle-bottom' desciption={'Achievement'} />
          </div>
        </div>
        
        {/* BOTTOM ROW - GitHub & LinkedIn, Contact, Resume */}
        <div className="bottom">
          {/* GITHUB & LINKEDIN - Small top left block */}
          <div onClick={() => handleBlockClick('github')}>
            <GridBlock ClassName='small-top-left' desciption={'GitHub & LinkedIn'} />
          </div>
          
          {/* CONTACT - Small top right block */}
          <div onClick={() => handleBlockClick('contact')}>
            <GridBlock ClassName='small-top-right' desciption={'Contact'} />
          </div>
          
          {/* RESUME - Large bottom block */}
          <div onClick={() => handleBlockClick('resume')}>
            <GridBlock ClassName='large-bottom' desciption={'Resume'} />
          </div>
        </div>
      </div>

      {/* MODAL COMPONENT - Shows detailed content when div is clicked */}
      <Modal
        isOpen={!!activeModal}
        onClose={closeModal}
        title={activeModal ? getModalContent(activeModal).title : ''}
        content={activeModal ? getModalContent(activeModal).content : null}
      />
    </>
  );
}

export default Grid;