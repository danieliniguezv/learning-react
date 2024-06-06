import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  /*
  * This is JSX. JSX stands for JavaScript XML. It allows to write
  * HTML in REACT. Code in between brackets is rendered as JavaScript.
  *
  * */

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
