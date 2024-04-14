import './App.css';
import Message from './components/Message';
function App() {
  const title = <h1>App Page</h1>
  return (
    <div className="App">
      {title}
      <User name="This is Page Component"/>
      <Message name="This is External Component" />
    </div>
  );
}

export default App;

const User = (props) => {
  return <h2>{props.name}</h2>
}
