import "./App.css";
import Typewriter from "./components/typewriter";
import CardComponent from "./components/card";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import projectData from './data/project';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typewriter text="WELCOME TO CHAYADA PORTFOLIO" />
        <p className="custom-text slide-up-text">
          My name is Chayada Wichaiyo, I’m a computer science graduate passionate about software development,
          <br />
          <span className="line-space">
          system design, and clean code. I’m ready to learn and grow through hands-on work
            experience.
          </span>
        </p>
      </header>
      <div className="background-wrapper">
      <div className="curved-section"></div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h1 className="custom-text-bold padding-2">My Projects</h1>
        <p className="custom-text-p">A collection of projects I've worked on.</p>
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-5 p-4">
        {projectData.map((item) => (
          <CardComponent
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            linkto={item.linkto}
            tosource={item.tosource}
            gallery={item.gallery}
          />
        ))}
      </div>
      <div className="background-wrapper">
      <div className="curved-section-footer"></div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
