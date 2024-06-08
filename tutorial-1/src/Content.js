import { useState } from 'react';

const Content = () => {
  /*
  * The `handleNameChange` function that returns a random name from an array. 
  * The function is then called and rendered by being placed between brackets. 
  * Every time the page is refrseshed a different name will be displayed.
  * */
  const [name, setState] = useState('Daniel');
  const [count, setCount] = useState(1);

  const handleNameChange = () => {
    const names =  ["Daniel", "Roberto", "Rocky"];
    const int = Math.floor(Math.random() * 3);
    setState(names[int]);
  }

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <main>
      <p>
        Hello {name}!
      </p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Increment Count</button>
    </main>
  )
}

export default Content;
