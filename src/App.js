import './App.css';
import Form from "./components/Form";
import Projects from './components/Projects';


function App() {
  return (
    <body>
    <div>
        <a class = "skip" href="#main">Skip to main content</a>
    </div>
    <header> 
        <a id="logo" href="#top">BF</a>
        <nav>
          <ul>
              <li> <a href="#projects">Projects</a></li>
              <li> <a href="#skills">Skills</a></li>
              <li> <a href="#contact">Contact</a></li>
              <li>
                <div class="resumeoutside">
                  <div class="resumeinside">
                    <a href="/resume.pdf" target="_blank">Resume</a>
                  </div>
                </div>
              </li>
          </ul>
        </nav>
    </header>
    <main>
        <div id="back">
          <h1 id="title">Hi I'm Bryan!</h1>
          <p>I am a University of Michigan graduate with a degree in Cognitive Science and a minor 
          in Computer Science. Currently enrolled in the masters program at the University of Michigan’s 
          School of Information. I possess a unique ability to grasp concepts quickly, and overcome roadblocks 
          with practical solutions. I'm excited to enhance my academics with real life situations in order 
          to prepare for a career as a UX designer or software engineer upon graduation.</p>
        </div>
        <Projects/>
        <div class="subheading" id="skills"> Skills</div>
        <div class="gallery">
          <div class='skill' >Python</div>
          <div class='skill' >HTML</div>
          <div class='skill' >CSS</div>
          <div class='skill' >C++</div>
          <div class='skill' >Figma</div>
          <div class='skill' >Adobe CC</div>
          <div class='skill' >UX Research</div>
          <div class='skill' >UX Design</div>
        </div>
        <Form/>
    </main>
    <footer>
        <p id="bottom">Bryan Flowers SI579 2022</p>
    </footer>
</body>
  );
}

export default App;
