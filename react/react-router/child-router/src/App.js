import './App.css';
import Router from './routers/index'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
     <Navbar />
     <Router />
    </div>
  );
}

export default App;
