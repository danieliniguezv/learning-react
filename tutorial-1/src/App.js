import logo from './logo.svg';
import './App.css';

function App() {
{/*
  * This is JSX. JSX stands for JavaScript XML. It allows to write
  * HTML in REACT. Code in between brackets is rendered as JavaScript.
  * This includes comments such as this one.
  *
  * In this particular iteration we created a function that returns a
  * random name from an array. Then we call the function by rendering
  * it between brackets. Every time we refrsesh the page a different
  * name will be displayed.
*/}

  const handleNameChange = () => {
    const names = ["Daniel", "Roberto", "Rocky"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleNameChange()}!
        </p>
      </header>
    </div>
  );
}

export default App;
