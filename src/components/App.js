import { useState } from 'react';
import '../styles/App.scss';
import AboutMe from './AboutMe';
import Landing from './Landing';
import Menu from './Menu';
import Projects from './Projects';



const App = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const handleMenuShown = () => {
    setIsMenuShown(true)
  }


  return (
    <div className="App">
      {!isMenuShown && <Landing handleMenuShown={handleMenuShown}/>}
      {isMenuShown && <Menu/>}
      <AboutMe/>
      <Projects/>
    </div>
  );
}


export default App; 



 