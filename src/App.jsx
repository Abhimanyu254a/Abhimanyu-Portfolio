import Grid from './components/Grid.jsx'
import './index.css'
import { LoadingScreen } from './components/LodingScreen.jsx';
import { useState } from 'react';


function App() {


  const [isLoaded , setIsLoaded ] = useState(false) 



  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}




    <Grid />
    </>
  )
}

export default App;

// import Grid from './components/Grid.jsx';
// import './index.css';
// import { LoadingScreen } from './components/LodingScreen.jsx';
// import { useState, useEffect } from 'react';
// import PhotoTrigger from './components/PhotoTrigger.jsx';

// function App() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [showPhoto, setShowPhoto] = useState(false);
//   const [photoSettled, setPhotoSettled] = useState(false);
//   const [showGrid, setShowGrid] = useState(false);

//   // Trigger photo after loading
//   useEffect(() => {
//     if (isLoaded) {
//       setTimeout(() => setShowPhoto(true), 500); // Wait a bit after loading
//     }
//   }, [isLoaded]);

//   // Simulate 1-second photo focus then settle
//   useEffect(() => {
//     if (showPhoto) {
//       setTimeout(() => setPhotoSettled(true), 500);
//     }
//   }, [showPhoto]);

//   // When photo is settled, show grid
//   useEffect(() => {
//     if (photoSettled) {
//       setTimeout(() => setShowGrid(true), 500); // Optional delay
//     }
//   }, [photoSettled]);

//   return (
//     <>
//       {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
//       {showPhoto && !photoSettled && <PhotoTrigger />}
//       {showPhoto && photoSettled && <PhotoTrigger isInGrid={true} />}
//       {showGrid && <Grid />}
//     </>
//   );
// }

// export default App;
