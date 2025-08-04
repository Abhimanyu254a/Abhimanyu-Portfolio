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
