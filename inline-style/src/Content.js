const Content = () => {
  /*
  * The `handleNameChange` function that returns a random name from an array. 
  * The function is then called and rendered by being placed between brackets. 
  * Every time the page is refrseshed a different name will be displayed.
  * */

  const handleNameChange = () => {
    const names =  ["Daniel", "Roberto", "Rocky"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  return (
    <main>
      <p>
        Hello {handleNameChange()}!
      </p>
    </main>
  )
}

export default Content;
