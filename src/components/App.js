import '../styles/App.scss';
import AboutMe from './AboutMe';
import Landing from './Landing';
import Menu from './Menu';
import Projects from './Projects';



const App = () => {

  return (
    <div className="App">
      <Landing></Landing>
      <Menu></Menu>
      <AboutMe></AboutMe>
      <Projects></Projects>
    </div>
  );
}


export default App; 



 