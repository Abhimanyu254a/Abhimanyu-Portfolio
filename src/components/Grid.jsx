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
      {/* Main Introduction */}
      <p style={{ marginBottom: '16px' }}>
        Hi, I'm <strong>Abhimanyu</strong> – an AI/ML engineer who is passionate about creating 
        systems that function more like extensions of ideas than like tools. My area of interest 
        is the nexus of full-stack development, AI, and machine learning.
      </p>
      
      {/* Professional Focus */}
      <p style={{ marginBottom: '16px' }}>
        I have experience with AI-powered applications and front-end engineering, and I'm always 
        trying to learn how things work and how they can be improved. My projects demonstrate my 
        dedication, from creating user-friendly interfaces to experimenting with unique LLMs and 
        intelligent assistants.
      </p>

      {/* Current Projects & Interests */}
      <div style={{ marginBottom: '16px' }}>
        <p style={{ marginBottom: '8px' }}>
          <strong>Current Focus Areas:</strong>
        </p>
        <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
          <li>Image recognition software & computer vision</li>
          <li>Intelligent personal assistants & conversational AI</li>
          <li>Game engine development & interactive experiences</li>
          <li>Full-stack applications with AI integration</li>
          <li>Novel approaches to human-computer interaction</li>
        </ul>
      </div>
            <div style={{ marginBottom: '16px' }}>
        <p style={{ marginBottom: '8px' }}>
          <strong>Technical Expertise:</strong>
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
          <span style={{ 
            background: '#3B82F6', 
            color: 'white', 
            padding: '4px 8px', 
            borderRadius: '12px', 
            fontSize: '12px' 
          }}>Python</span>
          <span style={{ 
            background: '#10B981', 
            color: 'white', 
            padding: '4px 8px', 
            borderRadius: '12px', 
            fontSize: '12px' 
          }}>TensorFlow</span>
          <span style={{ 
            background: '#F59E0B', 
            color: 'white', 
            padding: '4px 8px', 
            borderRadius: '12px', 
            fontSize: '12px' 
          }}>PyTorch</span>
          <span style={{ 
            background: '#8B5CF6', 
            color: 'white', 
            padding: '4px 8px', 
            borderRadius: '12px', 
            fontSize: '12px' 
          }}>React</span>
          <span style={{ 
            background: '#EC4899', 
            color: 'white', 
            padding: '4px 8px', 
            borderRadius: '12px', 
            fontSize: '12px' 
          }}>Node.js</span>
          <span style={{ 
            background: '#6366F1', 
            color: 'white', 
            padding: '4px 8px', 
            borderRadius: '12px', 
            fontSize: '12px' 
          }}>OpenAI APIs</span>
        </div>
      </div>
        {/* Philosophy & Vision */}
      <p style={{ marginBottom: '16px' }}>
        Every line of code, in my opinion, is a brick in a bigger framework: my own future, 
        in which innovation is a daily occurrence rather than just a trendy term. I believe 
        in building technology that doesn't just solve problems but anticipates needs and 
        enhances human potential.
      </p>

      {/* Learning & Growth Mindset */}
      <p style={{ marginBottom: '16px' }}>
        I'm always eager to learn new technologies and take on challenging projects that push 
        the boundaries of what's possible in web development, AI/ML, software development, 
        and any field related to Computer Science. The intersection of creativity and logic 
        in programming fascinates me daily.
      </p>
    </div>
    

        )
      },
      
      // TECH STACK SECTION CONTENT
      'tech': {
        title: 'Tech Stack',
        content: (
 <div>
      {/* Frontend Technologies */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '12px', color: '#333', fontSize: '16px', fontWeight: '600' }}>Frontend Technologies</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'].map(tech => (
            <span key={tech} style={{
              backgroundColor: '#e3f2fd',
              color: '#1976d2',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: '500'
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Programming Languages */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '12px', color: '#333', fontSize: '16px', fontWeight: '600' }}>Programming Languages</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['C/C++', 'Python', 'JavaScript', 'Java', 'SQL'].map(tech => (
            <span key={tech} style={{
              backgroundColor: '#f3e5f5',
              color: '#7b1fa2',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: '500'
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* AI/ML Libraries & Frameworks */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '12px', color: '#333', fontSize: '16px', fontWeight: '600' }}>AI/ML Libraries & Frameworks</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Matplotlib', 'OpenCV', 'Scikit-Learn', 'Hugging Face'].map(tech => (
            <span key={tech} style={{
              backgroundColor: '#e8f5e8',
              color: '#2e7d32',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: '500'
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* AI/ML Specializations */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '12px', color: '#333', fontSize: '16px', fontWeight: '600' }}>AI/ML Specializations</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['Large Language Models (LLMs)', 'Machine Learning Algorithms', 'Natural Language Processing (NLP)', 'Data Science', 'Deep Learning', 'Data Visualization'].map(tech => (
            <span key={tech} style={{
              backgroundColor: '#fff3e0',
              color: '#ef6c00',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: '500'
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Operating Systems */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '12px', color: '#333', fontSize: '16px', fontWeight: '600' }}>Operating Systems</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['Linux', 'Windows'].map(tech => (
            <span key={tech} style={{
              backgroundColor: '#fce4ec',
              color: '#c2185b',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: '500'
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '12px', color: '#333', fontSize: '16px', fontWeight: '600' }}>Soft Skills</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['Problem-Solving', 'Adaptability', 'Time Management', 'Team-Work', 'Growth Mindset', 'Communication Skill'].map(skill => (
            <span key={skill} style={{
              backgroundColor: '#e1f5fe',
              color: '#0277bd',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: '500'
            }}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Proficiency Levels Indicator */}
      <div style={{ 
        marginTop: '24px', 
        padding: '16px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '8px',
        border: '1px solid #e9ecef'
      }}>
        <h4 style={{ marginBottom: '12px', color: '#495057', fontSize: '14px' }}>Proficiency Levels</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12px', color: '#6c757d' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#2e7d32' }}></div>
            <span>Expert</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#1976d2' }}></div>
            <span>Advanced</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef6c00' }}></div>
            <span>Intermediate</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#7b1fa2' }}></div>
            <span>Familiar</span>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div style={{ 
        marginTop: '20px', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
        gap: '12px' 
      }}>
        <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#2e7d32' }}>5+</div>
          <div style={{ fontSize: '12px', color: '#6c757d' }}>Languages</div>
        </div>
        <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1976d2' }}>8+</div>
          <div style={{ fontSize: '12px', color: '#6c757d' }}>AI/ML Libraries</div>
        </div>
        <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#ef6c00' }}>6+</div>
          <div style={{ fontSize: '12px', color: '#6c757d' }}>Specializations</div>
        </div>
        <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#7b1fa2' }}>6+</div>
          <div style={{ fontSize: '12px', color: '#6c757d' }}>Soft Skills</div>
        </div>
      </div>
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
      {/* Chat-GPT Clone */}
      <div style={{ marginBottom: '24px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
        <h3 style={{ marginBottom: '12px', color: '#333', fontSize: '18px', fontWeight: '600' }}>
          🤖 Chat-GPT Clone
        </h3>
        <p style={{ marginBottom: '12px', color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
          A full-stack conversational AI application featuring advanced natural language processing 
          capabilities with real-time chat functionality and context-aware conversations.
        </p>
        
        {/* Key Achievements */}
        <div style={{ marginBottom: '12px' }}>
          <ul style={{ paddingLeft: '20px', color: '#555', fontSize: '13px', lineHeight: '1.5' }}>
            <li style={{ marginBottom: '4px' }}>
              Engineered responsive front-end interface resulting in <strong>80% increase</strong> in user engagement
            </li>
            <li style={{ marginBottom: '4px' }}>
              Developed scalable Flask backend with <strong>95%+ real-time processing</strong> efficiency
            </li>
            <li style={{ marginBottom: '4px' }}>
              Integrated Google Gemini API achieving <strong>87.34% response accuracy</strong>
            </li>
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' }}>
          {['Flask', 'HTML', 'CSS', 'JavaScript', 'Python', 'Google Gemini API'].map(tech => (
            <span key={tech} style={{
              backgroundColor: '#e3f2fd',
              color: '#1976d2',
              padding: '3px 10px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: '500'
            }}>
              {tech}
            </span>
          ))}
        </div>
        <div>
          <a 
            href="https://github.com/Abhimanyu254a/Chatgpt-Clone" 
            onClick={() => {}} 
            style={{ color: '#1976d2', textDecoration: 'none', marginRight: '16px', fontSize: '13px' }}
          >
            🔗 GitHub
          </a>
          
        </div>
      </div>

      {/* Object Detection Pipeline */}
      <div style={{ marginBottom: '24px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
        <h3 style={{ marginBottom: '12px', color: '#333', fontSize: '18px', fontWeight: '600' }}>
          👁️ Object Detection Pipeline
        </h3>
        <p style={{ marginBottom: '12px', color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
          Advanced deep learning pipeline combining multiple CNN architectures for high-precision object 
          detection with automated text extraction and metadata generation capabilities.
        </p>
        
        <div style={{ marginBottom: '12px' }}>
          <ul style={{ paddingLeft: '20px', color: '#555', fontSize: '13px', lineHeight: '1.5' }}>
            <li style={{ marginBottom: '4px' }}>
              Built hybrid model using Mask R-CNN and Faster R-CNN achieving <strong>94.57% detection accuracy</strong>
            </li>
            <li style={{ marginBottom: '4px' }}>
              Processed <strong>5000+ image instances</strong> with PyTesseractOCR for text extraction at <strong>98% accuracy</strong>
            </li>
            <li style={{ marginBottom: '4px' }}>
              Integrated DistilBART for automated summarization with <strong>89.6% relevance</strong>
            </li>
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' }}>
          {['PyTorch', 'OpenCV', 'NumPy', 'Pandas', 'Hugging Face', 'PyTesseract'].map(tech => (
            <span key={tech} style={{
              backgroundColor: '#e8f5e8',
              color: '#2e7d32',
              padding: '3px 10px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: '500'
            }}>
              {tech}
            </span>
          ))}
        </div>
        <div>
          <a 
            href="https://github.com/Abhimanyu254a/Object-Detection-Pipeline" 
            onClick={() => {/* Add your GitHub link here */}} 
            style={{ color: '#1976d2', textDecoration: 'none', marginRight: '16px', fontSize: '13px' }}
          >
            🔗 GitHub
          </a>
          
        </div>
      </div>

      {/* Stock Market Price Predictor */}
      <div style={{ marginBottom: '24px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
        <h3 style={{ marginBottom: '12px', color: '#333', fontSize: '18px', fontWeight: '600' }}>
          📈 Stock Market Price Predictor
        </h3>
        <p style={{ marginBottom: '12px', color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
          AI-powered stock prediction platform combining machine learning algorithms with intuitive 
          web interface to provide actionable market insights and trend analysis.
        </p>
        
        <div style={{ marginBottom: '12px' }}>
          <ul style={{ paddingLeft: '20px', color: '#555', fontSize: '13px', lineHeight: '1.5' }}>
            <li style={{ marginBottom: '4px' }}>
              Developed Flask-based backend with responsive frontend for seamless user experience
            </li>
            <li style={{ marginBottom: '4px' }}>
              Implemented ML model achieving <strong>97.56% accuracy</strong> in predicting market trends
            </li>
            <li style={{ marginBottom: '4px' }}>
              Reduced investor risk by <strong>15%</strong> through AI-driven insights and recommendations
            </li>
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' }}>
          {['Python', 'Scikit-Learn', 'Flask', 'HTML', 'CSS', 'Machine Learning'].map(tech => (
            <span key={tech} style={{
              backgroundColor: '#fff3e0',
              color: '#ef6c00',
              padding: '3px 10px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: '500'
            }}>
              {tech}
            </span>
          ))}
        </div>
        <div>
          <a 
            href="https://github.com/Abhimanyu254a/Stock-mark-price-Predictor-AI-" 
            onClick={() => {/* Add your GitHub link here */}} 
            style={{ color: '#1976d2', textDecoration: 'none', marginRight: '16px', fontSize: '13px' }}
          >
            🔗 GitHub
          </a>
          
        </div>
      </div>

      {/* Airlines Data Scraping */}
      <div style={{ marginBottom: '24px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
        <h3 style={{ marginBottom: '12px', color: '#333', fontSize: '18px', fontWeight: '600' }}>
          ✈️ Airlines Data Scraping
        </h3>
        <p style={{ marginBottom: '6px', color: '#666', fontSize: '14px', fontStyle: 'italic' }}>
          Unlock Real-Time Flight Insights Instantly
        </p>
        <p style={{ marginBottom: '12px', color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
          Production-oriented Python application providing interactive web dashboard to visualize 
          real-time departure flight data from major airports with actionable insights through 
          clean, intuitive visualizations.
        </p>
        
        <div style={{ marginBottom: '12px' }}>
          <ul style={{ paddingLeft: '20px', color: '#555', fontSize: '13px', lineHeight: '1.5' }}>
            <li style={{ marginBottom: '4px' }}>
              Seamlessly integrates with external flight data APIs for real-time processing
            </li>
            <li style={{ marginBottom: '4px' }}>
              Interactive web dashboard with clean, intuitive visualizations
            </li>
            <li style={{ marginBottom: '4px' }}>
              Uncovers trends in destinations, frequencies, and scheduling patterns
            </li>
          </ul>
        </div>

        <div style={{ display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' }}>
          {['Python', 'Web Scraping', 'Data Visualization', 'API Integration', 'Dashboard'].map(tech => (
            <span key={tech} style={{
              backgroundColor: '#f3e5f5',
              color: '#7b1fa2',
              padding: '3px 10px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: '500'
            }}>
              {tech}
            </span>
          ))}
        </div>
        <div>
          <a 
            href="https://github.com/Abhimanyu254a/Airlines-Data-Scraping" 
            onClick={() => {/* Add your GitHub link here */}} 
            style={{ color: '#1976d2', textDecoration: 'none', marginRight: '16px', fontSize: '13px' }}
          >
            🔗 GitHub
          </a>
          
        </div>
      </div>

      {/* Projects in Progress Section */}
      <div style={{ 
        marginTop: '32px', 
        padding: '20px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '8px',
        border: '1px solid #e9ecef'
      }}>
        <h3 style={{ marginBottom: '16px', color: '#333', fontSize: '16px', fontWeight: '600' }}>
          🚧 Currently Working On
        </h3>
        
        {/* NULL_Engine */}
        <div style={{ marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #dee2e6' }}>
          <h4 style={{ marginBottom: '8px', color: '#495057', fontSize: '14px', fontWeight: '600' }}>
            🎮 NULL_Engine
          </h4>
          <p style={{ marginBottom: '8px', color: '#6c757d', fontSize: '13px' }}>
            A custom game engine built from scratch - currently in active development with focus on 
            performance optimization and modern rendering techniques.
          </p>
          <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
            {['C++', 'OpenGL', 'Game Engine', 'Graphics Programming'].map(tech => (
              <span key={tech} style={{
                backgroundColor: '#e2e3e5',
                color: '#495057',
                padding: '2px 8px',
                borderRadius: '10px',
                fontSize: '10px'
              }}>
                {tech}
              </span>
            ))}
          </div>
          <a 
            href="https://github.com/Abhimanyu254a/NULL_Engine" 
            onClick={() => {/* Add your GitHub link here */}} 
            style={{ color: '#6c757d', textDecoration: 'none', fontSize: '12px' }}
          >
            🔗 GitHub (In Progress)
          </a>
        </div>

        {/* Jarvis */}
        <div>
          <h4 style={{ marginBottom: '8px', color: '#495057', fontSize: '14px', fontWeight: '600' }}>
            🤖 Jarvis - Personalized Assistant
          </h4>
          <p style={{ marginBottom: '8px', color: '#6c757d', fontSize: '13px' }}>
            An intelligent personal assistant with advanced AI capabilities - building towards 
            a comprehensive personal productivity and automation platform.
          </p>
          <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
            {['Python', 'AI/ML', 'NLP', 'Voice Recognition', 'Automation'].map(tech => (
              <span key={tech} style={{
                backgroundColor: '#e2e3e5',
                color: '#495057',
                padding: '2px 8px',
                borderRadius: '10px',
                fontSize: '10px'
              }}>
                {tech}
              </span>
            ))}
          </div>
          <a 
            href="https://github.com/Abhimanyu254a/JARVIS" 
            onClick={() => {/* Add your GitHub link here */}} 
            style={{ color: '#6c757d', textDecoration: 'none', fontSize: '12px' }}
          >
            🔗 GitHub (In Progress)
          </a>
        </div>
      </div>

      {/* Projects Summary */}
      <div style={{ 
        marginTop: '24px', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
        gap: '12px',
        textAlign: 'center'
      }}>
        <div style={{ padding: '12px', backgroundColor: '#e3f2fd', borderRadius: '6px' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1976d2' }}>4</div>
          <div style={{ fontSize: '12px', color: '#1565c0' }}>Completed</div>
        </div>
        <div style={{ padding: '12px', backgroundColor: '#f3e5f5', borderRadius: '6px' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#7b1fa2' }}>2</div>
          <div style={{ fontSize: '12px', color: '#6a1b9a' }}>In Progress</div>
        </div>
        <div style={{ padding: '12px', backgroundColor: '#e8f5e8', borderRadius: '6px' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#2e7d32' }}>6</div>
          <div style={{ fontSize: '12px', color: '#1b5e20' }}>Total Projects</div>
        </div>
        <div style={{ padding: '12px', backgroundColor: '#fff3e0', borderRadius: '6px' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#ef6c00' }}>15+</div>
          <div style={{ fontSize: '12px', color: '#e65100' }}>Technologies</div>
        </div>
      </div>
    </div>
        )
      },
      
      // ACHIEVEMENT SECTION CONTENT
      'achievement': {
        title: 'Achievements',
        content: (
<div>
      {/* LeetCode Achievement */}
      <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef' }}>
        <h3 style={{ marginBottom: '8px', color: '#333', fontSize: '16px', fontWeight: '600' }}>
          💻 LeetCode Problem Solver
        </h3>
        <p style={{ color: '#666', marginBottom: '8px', fontWeight: '500' }}>
          130+ Problems Solved in C++
        </p>
        <p style={{ fontSize: '14px', color: '#555', marginBottom: '12px', lineHeight: '1.5' }}>
          Demonstrated strong problem-solving skills through consistent practice with data structures 
          and algorithms, deepening understanding of core algorithms and efficient coding practices.
        </p>
        <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
          {['C++', 'Data Structures', 'Algorithms', 'Problem Solving'].map(skill => (
            <span key={skill} style={{
              backgroundColor: '#e3f2fd',
              color: '#1976d2',
              padding: '3px 10px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: '500'
            }}>
              {skill}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a 
            href="https://leetcode.com/u/Abhimanyu254A/" 
            onClick={() => {/* Add your LeetCode profile link here */}} 
            style={{ 
              color: '#1976d2', 
              textDecoration: 'none', 
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontWeight: '500'
            }}
          >
            🔗 View LeetCode Profile
          </a>
          <div style={{ fontSize: '12px', color: '#28a745', fontWeight: '500' }}>
            ✅ 130+ Problems Solved
          </div>
        </div>
      </div>

      {/* Professional Certifications */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', color: '#333', fontSize: '16px', fontWeight: '600' }}>
          📜 Professional Certifications
        </h3>
        
        {/* AI Engineering Certification */}
        <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #eee' }}>
          <h4 style={{ marginBottom: '6px', color: '#333', fontSize: '15px', fontWeight: '600' }}>
            🤖 The Prompt and AI Engineering Safety Professional
          </h4>
          <p style={{ color: '#666', marginBottom: '4px', fontSize: '13px' }}>
            <strong>Issuing Organization:</strong> MTF Institute
          </p>
          <p style={{ fontSize: '13px', color: '#555', marginBottom: '8px' }}>
            Advanced certification in AI engineering safety, prompt engineering techniques, 
            and responsible AI development practices.
          </p>
          <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
            {['AI Safety', 'Prompt Engineering', 'LLM Optimization', 'Ethical AI'].map(skill => (
              <span key={skill} style={{
                backgroundColor: '#fff3e0',
                color: '#ef6c00',
                padding: '2px 8px',
                borderRadius: '10px',
                fontSize: '10px'
              }}>
                {skill}
              </span>
            ))}
          </div>
          <a 
            href="https://drive.google.com/file/d/1lKNTW0ekUj7Roif-oERT-qJxL2nvGtWf/view?usp=drive_link" 
            onClick={() => {/* Add certification link here */}} 
            style={{ color: '#1976d2', textDecoration: 'none', fontSize: '12px' }}
          >
            🏆 View Certificate
          </a>
        </div>

        {/* Node.js Certification */}
        <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #eee' }}>
          <h4 style={{ marginBottom: '6px', color: '#333', fontSize: '15px', fontWeight: '600' }}>
            🟢 Node.js Certification
          </h4>
          <p style={{ color: '#666', marginBottom: '4px', fontSize: '13px' }}>
            <strong>Issuing Organization:</strong> Scaler
          </p>
          <p style={{ fontSize: '13px', color: '#555', marginBottom: '8px' }}>
            Comprehensive certification covering server-side JavaScript development, 
            RESTful APIs, database integration, and modern backend architecture patterns.
          </p>
          <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
            {['Node.js', 'Express.js', 'REST APIs', 'Backend Development'].map(skill => (
              <span key={skill} style={{
                backgroundColor: '#e8f5e8',
                color: '#2e7d32',
                padding: '2px 8px',
                borderRadius: '10px',
                fontSize: '10px'
              }}>
                {skill}
              </span>
            ))}
          </div>
          <a 
            href="https://drive.google.com/file/d/16wbS2ssHURaVcBJWC8y9XMsWaJCIlBV9/view?usp=drive_link" 
            onClick={() => {/* Add certification link here */}} 
            style={{ color: '#1976d2', textDecoration: 'none', fontSize: '12px' }}
          >
            🏆 View Certificate
          </a>
        </div>

        {/* Python ML Certification */}
        <div style={{ marginBottom: '16px' }}>
          <h4 style={{ marginBottom: '6px', color: '#333', fontSize: '15px', fontWeight: '600' }}>
            🐍 Python for Machine Learning Certification
          </h4>
          <p style={{ color: '#666', marginBottom: '4px', fontSize: '13px' }}>
            <strong>Issuing Organization:</strong> GUVI
          </p>
          <p style={{ fontSize: '13px', color: '#555', marginBottom: '8px' }}>
            Specialized certification focusing on Python programming for machine learning applications, 
            including data preprocessing, model development, and ML pipeline optimization.
          </p>
          <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
            {['Python', 'Machine Learning', 'Data Science', 'Model Development'].map(skill => (
              <span key={skill} style={{
                backgroundColor: '#f3e5f5',
                color: '#7b1fa2',
                padding: '2px 8px',
                borderRadius: '10px',
                fontSize: '10px'
              }}>
                {skill}
              </span>
            ))}
          </div>
          <a 
            href="https://drive.google.com/file/d/1fNUt2rHoBNqcu2BQI-w7ahwn00HsYwl3/view?usp=drive_link" 
            onClick={() => {/* Add certification link here */}} 
            style={{ color: '#1976d2', textDecoration: 'none', fontSize: '12px' }}
          >
            🏆 View Certificate
          </a>
        </div>
      </div>

      {/* Achievement Summary */}
      <div style={{ 
        marginTop: '24px', 
        padding: '16px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '8px',
        border: '1px solid #e9ecef'
      }}>
        <h4 style={{ marginBottom: '16px', color: '#333', fontSize: '14px', fontWeight: '600' }}>
          📊 Achievement Summary
        </h4>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
          gap: '12px',
          textAlign: 'center'
        }}>
          <div style={{ padding: '12px', backgroundColor: '#e3f2fd', borderRadius: '6px' }}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1976d2' }}>130+</div>
            <div style={{ fontSize: '11px', color: '#1565c0' }}>LeetCode Problems</div>
          </div>
          <div style={{ padding: '12px', backgroundColor: '#e8f5e8', borderRadius: '6px' }}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#2e7d32' }}>3</div>
            <div style={{ fontSize: '11px', color: '#1b5e20' }}>Professional Certs</div>
          </div>
          <div style={{ padding: '12px', backgroundColor: '#fff3e0', borderRadius: '6px' }}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#ef6c00' }}>AI/ML</div>
            <div style={{ fontSize: '11px', color: '#e65100' }}>Specialized Focus</div>
          </div>
          <div style={{ padding: '12px', backgroundColor: '#f3e5f5', borderRadius: '6px' }}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#7b1fa2' }}>Full-Stack</div>
            <div style={{ fontSize: '11px', color: '#6a1b9a' }}>Development</div>
          </div>
        </div>
      </div>

      {/* Continuous Learning Note */}
      <div style={{ 
        marginTop: '20px', 
        padding: '12px', 
        backgroundColor: '#e8f4fd', 
        borderRadius: '6px',
        borderLeft: '4px solid #1976d2'
      }}>
        <p style={{ 
          margin: 0, 
          fontSize: '13px', 
          color: '#1565c0',
          fontStyle: 'italic'
        }}>
          💡 Continuously expanding knowledge through hands-on projects, competitive programming, 
          and staying current with emerging technologies in AI/ML and full-stack development.
        </p>
      </div>
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
                  href="https://github.com/Abhimanyu254a" 
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
                  href="https://www.linkedin.com/in/abhimanyu254a/" 
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
                <a 
                  href="https://x.com/abhimanyu254a" 
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
                  <div style={{ marginRight: '12px', fontSize: '24px' }}>🤝</div>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>X</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>Let's Connect based on our Interests</div>
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
              <div style={{ marginBottom: '12px',  }}>
                <strong>Email:</strong><a 
                  href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxGpBfhdHNxVDGqldNjBGhpzJkLPmbZSTWCtpFhCXkzwHlqrqHMZFrZqRHxdCXGwvPfCxL"> abhimanyu254a@gmail.com </a>
              </div>
              <div style={{ marginBottom: '12px' }}>
                <strong>Phone:</strong> +91 7052242450
              </div>
              <div style={{ marginBottom: '12px' }}>
                <strong>Location:</strong> Uttar Pradesh, India 
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
      {/* Introduction */}
      <div style={{ marginBottom: '24px', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '12px', color: '#333', fontSize: '20px', fontWeight: '600' }}>
          Why You Should Know About Me
        </h3>
        <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
          Here are the key highlights that define my expertise and achievements in AI/ML and full-stack development:
        </p>
      </div>

      {/* Key Highlights */}
      <div style={{ marginBottom: '32px' }}>
        
        {/* Who I Am */}
        <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #1976d2' }}>
          <h4 style={{ marginBottom: '8px', color: '#1976d2', fontSize: '14px', fontWeight: '600' }}>
            🎯 Who I Am
          </h4>
          <p style={{ margin: 0, fontSize: '13px', color: '#333', lineHeight: '1.5' }}>
            <strong>AI/ML Engineering Student</strong> specializing in cutting-edge software solutions with hands-on industry experience
          </p>
        </div>

        {/* Top Achievement */}
        <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: '#fff3e0', borderRadius: '8px', borderLeft: '4px solid #ef6c00' }}>
          <h4 style={{ marginBottom: '8px', color: '#ef6c00', fontSize: '14px', fontWeight: '600' }}>
            🏆 Top Achievement
          </h4>
          <p style={{ margin: 0, fontSize: '13px', color: '#333', lineHeight: '1.5' }}>
            <strong>130+ LeetCode Problems Solved</strong> in C++ - Demonstrating exceptional problem-solving skills and algorithmic thinking
          </p>
        </div>

        {/* AI Expertise */}
        <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: '#e8f5e8', borderRadius: '8px', borderLeft: '4px solid #2e7d32' }}>
          <h4 style={{ marginBottom: '8px', color: '#2e7d32', fontSize: '14px', fontWeight: '600' }}>
            🤖 AI Expertise
          </h4>
          <p style={{ margin: 0, fontSize: '13px', color: '#333', lineHeight: '1.5' }}>
            Built <strong>Object Detection Pipeline</strong> with 94.57% accuracy using advanced CNN architectures (Mask R-CNN, Faster R-CNN)
          </p>
        </div>

        {/* Real-World Impact */}
        <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: '#f3e5f5', borderRadius: '8px', borderLeft: '4px solid #7b1fa2' }}>
          <h4 style={{ marginBottom: '8px', color: '#7b1fa2', fontSize: '14px', fontWeight: '600' }}>
            💹 Real-World Impact
          </h4>
          <p style={{ margin: 0, fontSize: '13px', color: '#333', lineHeight: '1.5' }}>
            Created <strong>Stock Market Predictor</strong> with 97.56% accuracy, reducing investor risk by 15% through AI-driven insights
          </p>
        </div>

        {/* Full-Stack Proficiency */}
        <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: '#e3f2fd', borderRadius: '8px', borderLeft: '4px solid #1976d2' }}>
          <h4 style={{ marginBottom: '8px', color: '#1976d2', fontSize: '14px', fontWeight: '600' }}>
            🚀 Full-Stack Proficiency
          </h4>
          <p style={{ margin: 0, fontSize: '13px', color: '#333', lineHeight: '1.5' }}>
            Developed <strong>Chat-GPT Clone</strong> with 87.34% response accuracy, increasing user engagement by 80%
          </p>
        </div>

        {/* Data Science Skills */}
        <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: '#fce4ec', borderRadius: '8px', borderLeft: '4px solid #c2185b' }}>
          <h4 style={{ marginBottom: '8px', color: '#c2185b', fontSize: '14px', fontWeight: '600' }}>
            📊 Data Science Skills
          </h4>
          <p style={{ margin: 0, fontSize: '13px', color: '#333', lineHeight: '1.5' }}>
            <strong>5000+ image processing</strong> experience with 98% accuracy in text extraction and automated metadata generation
          </p>
        </div>

        {/* Technical Arsenal */}
        <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: '#e8f5e8', borderRadius: '8px', borderLeft: '4px solid #2e7d32' }}>
          <h4 style={{ marginBottom: '8px', color: '#2e7d32', fontSize: '14px', fontWeight: '600' }}>
            🛠️ Technical Arsenal
          </h4>
          <p style={{ margin: 0, fontSize: '13px', color: '#333', lineHeight: '1.5' }}>
            <strong>15+ Technologies</strong>: Python, PyTorch, TensorFlow, React.js, Flask, Google Cloud, Azure, and advanced ML libraries
          </p>
        </div>

        {/* Certified Professional */}
        <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: '#fff3e0', borderRadius: '8px', borderLeft: '4px solid #ef6c00' }}>
          <h4 style={{ marginBottom: '8px', color: '#ef6c00', fontSize: '14px', fontWeight: '600' }}>
            🎓 Certified Professional
          </h4>
          <p style={{ margin: 0, fontSize: '13px', color: '#333', lineHeight: '1.5' }}>
            <strong>3 Industry Certifications</strong> in AI Engineering Safety, Node.js Development, and Python Machine Learning
          </p>
        </div>

        {/* Unique Value */}
        <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: '#f3e5f5', borderRadius: '8px', borderLeft: '4px solid #7b1fa2' }}>
          <h4 style={{ marginBottom: '8px', color: '#7b1fa2', fontSize: '14px', fontWeight: '600' }}>
            🌟 Unique Value
          </h4>
          <p style={{ margin: 0, fontSize: '13px', color: '#333', lineHeight: '1.5' }}>
            <strong>Bridge between AI innovation and practical implementation</strong> - combining academic excellence with real-world industry experience
          </p>
        </div>
      </div>

      {/* Key Stats Summary */}
      <div style={{ 
        marginBottom: '32px', 
        padding: '20px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '8px',
        border: '1px solid #e9ecef'
      }}>
        <h4 style={{ marginBottom: '16px', color: '#333', fontSize: '16px', textAlign: 'center' }}>
          📊 At a Glance
        </h4>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
          gap: '12px',
          textAlign: 'center'
        }}>
          <div style={{ padding: '12px', backgroundColor: '#e3f2fd', borderRadius: '6px' }}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#1976d2' }}>130+</div>
            <div style={{ fontSize: '10px', color: '#1565c0' }}>Problems Solved</div>
          </div>
          <div style={{ padding: '12px', backgroundColor: '#e8f5e8', borderRadius: '6px' }}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#2e7d32' }}>97.56%</div>
            <div style={{ fontSize: '10px', color: '#1b5e20' }}>ML Accuracy</div>
          </div>
          <div style={{ padding: '12px', backgroundColor: '#fff3e0', borderRadius: '6px' }}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#ef6c00' }}>5000+</div>
            <div style={{ fontSize: '10px', color: '#e65100' }}>Images Processed</div>
          </div>
          <div style={{ padding: '12px', backgroundColor: '#f3e5f5', borderRadius: '6px' }}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#7b1fa2' }}>15+</div>
            <div style={{ fontSize: '10px', color: '#6a1b9a' }}>Technologies</div>
          </div>
          <div style={{ padding: '12px', backgroundColor: '#fce4ec', borderRadius: '6px' }}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#c2185b' }}>3</div>
            <div style={{ fontSize: '10px', color: '#ad1457' }}>Certifications</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{ 
        textAlign: 'center', 
        padding: '24px', 
        backgroundColor: '#f0f7ff', 
        borderRadius: '8px',
        border: '1px solid #bbdefb'
      }}>
        <p style={{ marginBottom: '20px', color: '#1565c0', fontSize: '15px', fontWeight: '500' }}>
          Ready to see the full picture? Download my complete resume below:
        </p>
        
        {/* Download Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <a href="https://drive.google.com/uc?export=download&id=14KiD2-zhzwVsBEj38hI17QfDFGRHr3iU">
          <button 
            onClick={() => {}}
            style={{
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              padding: '14px 28px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'background-color 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            📄 Download PDF
          </button></a>
          <a href="https://drive.google.com/file/d/14KiD2-zhzwVsBEj38hI17QfDFGRHr3iU/preview"><button 
            onClick={() => {/* Add your online resume link here */}}
            style={{
              backgroundColor: 'transparent',
              color: '#1976d2',
              border: '2px solid #1976d2',
              padding: '14px 28px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            👀 View Online
          </button></a>
        </div>

        {/* Additional Info */}
        <p style={{ marginTop: '16px', color: '#666', fontSize: '12px', fontStyle: 'italic' }}>
          Updated January 2025 • Available for immediate opportunities
        </p>
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
            <GridBlock ClassName='large-top' desciption={'About Me'} preview={"🧠 Logic meets imagination"} />
          </div>
          
          {/* TECH STACK - Small bottom left block */}
          <div onClick={() => handleBlockClick('tech')}>
            <GridBlock ClassName='small-bottom-left' desciption={'Tech Stack'} preview={"Tools of Creation⚡"}/>
          </div>
          
          {/* CERTIFICATIONS - Small bottom right block */}
          <div onClick={() => handleBlockClick('certification')}>
            <GridBlock ClassName='small-bottom-right' desciption={'Certification'} preview={"Milestones Unlocked🎓"}/>
          </div>
        </div>
        
        {/* CENTER ROW - Projects, Profile Image, Achievements */}
        <div className="center">
          {/* PROJECTS - Middle top block */}
          <div className="middle-top-div h-0px w-0px"  onClick={() => handleBlockClick('projects')}>
            <GridBlock ClassName='middle-top' desciption={'Projects'} preview={"Ideas in Action 🚀"}/>
          </div>
          
          {/* PROFILE IMAGE - Middle center block (NOT CLICKABLE) */}
          <ImageGridBlock ClassName='middle' desciption={'ME'} />
          
          {/* ACHIEVEMENTS - Middle bottom block */}
          <div className="middle-bottom-div h-0px w-0px" onClick={() => handleBlockClick('achievement')}>
            <GridBlock ClassName='middle-bottom' desciption={'Achievement'} preview={"Proud Moments 🏅"}/>
          </div>
        </div>
        
        {/* BOTTOM ROW - GitHub & LinkedIn, Contact, Resume */}
        <div className="bottom">
          {/* GITHUB & LINKEDIN - Small top left block */}
          <div onClick={() => handleBlockClick('github')}>
            <GridBlock ClassName='small-top-left' desciption={'Social Media'} preview={"Connect & Share 🌐"}/>
          </div>
          
          {/* CONTACT - Small top right block */}
          <div onClick={() => handleBlockClick('contact')}>
            <GridBlock ClassName='small-top-right' desciption={'Contact'} preview={"Let’s Talk 📬"}/>
          </div>
          
          {/* RESUME - Large bottom block */}
          <div onClick={() => handleBlockClick('resume')}>
            <GridBlock ClassName='large-bottom' desciption={'Resume'} preview={"My Journey 📄"}/>
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