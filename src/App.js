import logo from './logo.svg';
import './App.css';
import Skills from './components/Skills';
import Counter from './components/Counter';

function App() {
  const skills = [
    { id: 1, name: "plumbing" },
    { id: 2, name: "wiring" },
    { id: 3, name: "painting" }
  ]
  return (
    <div className="App">
      {/* <Skills skills={skills} /> */}
      <Counter />
    </div>
  );
}

export default App;
