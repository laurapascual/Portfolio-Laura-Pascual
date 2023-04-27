import { useState, useEffect } from 'react';
import '../styles/App.scss';
import AboutMe from './AboutMe';
import Landing from './Landing';
import Menu from './Menu';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { useTranslation } from "react-i18next";
import { harry, buy, cocktails, friends, potter, project, card, cocktail, we, quotes, guess, comp, compass, number, portfolio, port, cards, projects, hangman, game } from './compiled';

const App = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const { t, i18n } = useTranslation();
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
    image: buy,
    overImage: we,
    name: "We ❤️ Buy",
    repo: "https://github.com/laurapascual/we-buy",
    demo: "https://laurapascual.github.io/we-buy/",
    technologies: ["HTML", "CSS", "SASS"]
  },
  {
    image: cocktails,
    overImage: cocktail,
    name: t("projects.cocktail"),
    repo: "https://github.com/laurapascual/cocktail-finder",
    demo: "https://laurapascual.github.io/cocktail-finder/",
    technologies: ["HTML", "CSS", "SASS", "JavaScript"]
  },
  {
    image: hangman,
    overImage: game,
    name: t("projects.hangman"),
    repo: "https://github.com/laurapascual/hangman-game/tree/main",
    demo: "https://laurapascual.github.io/hangman-game/",
    technologies: ["HTML", "CSS", "SASS", "JavaScript", "React"]
  },
  {
    image: portfolio,
    overImage: port,
    name: t("projects.portfolio"),
    repo: "https://github.com/laurapascual/Portfolio-Laura-Pascual",
    demo: "https://laurapascual.github.io/Portfolio-Laura-Pascual/",
    technologies: ["HTML", "SASS", "JavaScript", "React", "React i18n"]
  },
  {
    image: friends,
    overImage: quotes,
    name: t("projects.friends"),
    repo: "https://github.com/laurapascual/friends-quotes",
    demo: "https://laurapascual.github.io/friends-quotes/",
    technologies: ["HTML", "SASS", "JavaScript", "React"]
  },
  {
    image: compass,
    overImage: comp,
    name: t("projects.compass"),
    repo: "https://github.com/laurapascual/compass-project",
    demo: "https://laurapascual.github.io/compass-project/",
    technologies: ["HTML", "CSS", "SASS"]
  },
  {
    image: number,
    overImage: guess,
    name: t("projects.number"),
    repo: "https://github.com/laurapascual/guess-the-number",
    demo: "https://laurapascual.github.io/guess-the-number/",
    technologies: ["HTML", "CSS", "JavaScript"]
  }];

  

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

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
      <Menu isMenuShown={isMenuShown} handleClick={handleClick} t={t}/> 
      <AboutMe t={t}/>
      <Projects projectList={projectList} t={t}/>
      <Contact t={t}/>
      <Footer t={t}/>
    </div>
    
  );
}


export default App; 