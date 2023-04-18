import { useState, useEffect } from 'react';
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
import potter from '../images/overImages/potter.PNG';
import project from '../images/overImages/project.PNG';
import card from '../images/overImages/card.PNG';
import cocktail from '../images/overImages/cocktail.PNG';
import we from '../images/overImages/we.PNG';
import quotes from '../images/overImages/quotes.PNG';
import answer from '../images/overImages/anwser.PNG';
import comp from '../images/overImages/compass.PNG';
import Footer from './Footer';

const App = () => {
  const projectList = [{
    image: harry,
    overImage: potter,
    name: "Harry Potter",
    repo: "https://github.com/laurapascual/harry-potter",
    demo: "https://laurapascual.github.io/harry-potter/",
    technologies: ["HTML", "SASS", "JavaScript", "React"]
  },
  {
    image: cards,
    overImage: card,
    name: "Awesome Cards",
    repo: "https://github.com/laurapascual/create-cards",
    demo: "https://laurapascual.github.io/create-cards/",
    technologies: ["HTML", "SASS", "JavaScript", "React"]
  },
  {
    image: projects,
    overImage: project,
    name: "Proyectos y ya estaría",
    repo: "https://github.com/laurapascual/create-projects",
    demo: "https://proyectos-y-ya-estaria.onrender.com/",
    technologies: ["HTML", "SASS", "React", "Node.js", "Express.js", "MySQL Workbench"]
  },
  {
    image: run,
    overImage: we,
    name: "We 🧡 run",
    repo: "https://github.com/laurapascual/we-run",
    demo: "https://laurapascual.github.io/we-run/",
    technologies: ["HTML", "CSS", "SASS"]
  },
  {
    image: cocktails,
    overImage: cocktail,
    name: "Cocktail finder",
    repo: "https://github.com/laurapascual/cocktail-finder",
    demo: "https://laurapascual.github.io/cocktail-finder/",
    technologies: ["HTML", "CSS", "SASS", "JavaScript"]
  },
  {
    image: friends,
    overImage: quotes,
    name: "Friends quotes",
    repo: "https://github.com/laurapascual/friends-quotes",
    demo: "https://laurapascual.github.io/friends-quotes/",
    technologies: ["HTML", "SASS", "JavaScript", "React"]
  },
  {
    image: compass,
    overImage: comp,
    name: "Compass Project",
    repo: "https://github.com/laurapascual/compass-project",
    demo: "https://laurapascual.github.io/compass-project/",
    technologies: ["HTML", "CSS", "SASS"]
  },
  {
    image: number,
    overImage: answer,
    name: "Answer the number",
    repo: "https://github.com/laurapascual/Answer-the-number",
    demo: "https://laurapascual.github.io/Answer-the-number/",
    technologies: ["HTML", "CSS", "SASS", "JavaScript"]
  }];

  const [isMenuShown, setIsMenuShown] = useState(false);

  const handleMenuShown = () => {
    setIsMenuShown(true)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
      setIsMenuShown(true);
    } else {
      setIsMenuShown(false);
    }
  };

  return (
    <div className="App">
      <Landing handleMenuShown={handleMenuShown} isMenuShown={isMenuShown}/>
      <Menu isMenuShown={isMenuShown}/>
      <AboutMe/>
      <Projects projectList={projectList}/>
      <Contact/>
      <Footer/>
    </div>
    
  );
}


export default App; 