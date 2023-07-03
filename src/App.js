import logo from './logo.svg';
import './App.css';
import Skills from './components/Skills';
import Counter from './components/Counter';
import Users from './components/Users';

function App() {
  const skills = [
    { id: 1, name: "plumbing" },
    { id: 2, name: "wiring" },
    { id: 3, name: "painting" }
  ]
  const handleDelete = (userId) => {
    alert(userId)
  }
  return (
    <div className="App">
      {/* <Skills skills={skills} /> */}
      {/* <Counter /> */}
      <Users handleDelete={handleDelete} />
    </div>
  );
}

export default App;
