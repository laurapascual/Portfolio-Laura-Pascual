import { useState } from 'react';
import '../styles/App.scss';
import AboutMe from './AboutMe';
import Landing from './Landing';
import Menu from './Menu';
import Projects from './Projects';
import Contact from './Contact';
import harry from '../images/projectImages/harry.PNG';
import run from '../images/projectImages/run.PNG';
import cocktails from '../images/projectImages/cocktails.PNG';
import friends from '../images/projectImages/friends.PNG';
import compass from '../images/projectImages/brujula.PNG';
import number from '../images/projectImages/number.PNG';
import cards from '../images/projectImages/cards.PNG';
import projects from '../images/projectImages/projects.PNG';

const App = () => {
  const projectList = [{
    image: harry,
    name: "Harry Potter",
    repo: "https://github.com/laurapascual/harry-potter",
    demo: "https://laurapascual.github.io/harry-potter/",
    technologies: ["HTML", "SASS", "JavaScript", "React"]
  },
  {
    image: cards,
    name: "Awesome Cards",
    repo: "https://github.com/laurapascual/create-cards",
    demo: "https://laurapascual.github.io/create-cards/",
    technologies: ["HTML", "SASS", "JavaScript", "React"]
  },
  {
    image: projects,
    name: "Proyectos y ya estaría",
    repo: "https://github.com/laurapascual/create-projects",
    demo: "https://proyectos-y-ya-estaria.onrender.com/",
    technologies: ["HTML", "SASS", "React", "Node.js", "Express.js", "MySQL Workbench"]
  },
  {
    image: run,
    name: "We 🧡 run",
    repo: "https://github.com/laurapascual/we-run",
    demo: "https://laurapascual.github.io/we-run/",
    technologies: ["HTML", "CSS", "SASS"]
  },
  {
    image: cocktails,
    name: "Cocktail finder",
    repo: "https://github.com/laurapascual/cocktail-finder",
    demo: "https://laurapascual.github.io/cocktail-finder/",
    technologies: ["HTML", "CSS", "SASS", "JavaScript"]
  },
  {
    image: friends,
    name: "Friends quotes",
    repo: "https://github.com/laurapascual/friends-quotes",
    demo: "https://laurapascual.github.io/friends-quotes/",
    technologies: ["HTML", "SASS", "JavaScript", "React"]
  },
  {
    image: compass,
    name: "Compass Project",
    repo: "https://github.com/laurapascual/compass-project",
    demo: "https://laurapascual.github.io/compass-project/",
    technologies: ["HTML", "CSS", "SASS"]
  },
  {
    image: number,
    name: "Answer the number",
    repo: "https://github.com/laurapascual/Answer-the-number",
    demo: "https://laurapascual.github.io/Answer-the-number/",
    technologies: ["HTML", "CSS", "SASS", "JavaScript"]
  }];


  const [isMenuShown, setIsMenuShown] = useState(false);

  const handleMenuShown = () => {
    setIsMenuShown(true)
  }


  return (
    <div className="App">
      <Landing handleMenuShown={handleMenuShown} isMenuShown={isMenuShown}/>
      <Menu isMenuShown={isMenuShown}/>
      <AboutMe/>
      <Projects projectList={projectList}/>
      <Contact/>
    </div>
  );
}


export default App; 



 