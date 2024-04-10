import './App.css';
import Router from './router/index'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="layout">
      <Router />
      </div>
    </div>
  );
}

export default App;
