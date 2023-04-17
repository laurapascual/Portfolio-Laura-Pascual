import { useState } from 'react';
import '../styles/App.scss';
import AboutMe from './AboutMe';
import Landing from './Landing';
import Menu from './Menu';
import Projects from './Projects';
import Contact from './Contact';



const App = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const handleMenuShown = () => {
    setIsMenuShown(true)
  }


  return (
    <div className="App">
      <Landing handleMenuShown={handleMenuShown} isMenuShown={isMenuShown}/>
      <Menu isMenuShown={isMenuShown}/>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </div>
  );
}


export default App; 



 