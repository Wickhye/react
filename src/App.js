import { useState, useEffect } from 'react';

function Hello() {
  useEffect(function () {
    console.log("hi :)");
    return function() {
       console.log("bye :(");
    };
    }, []);  
  useEffect(function () {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
<button onClick={onClick}>{showing ? <Hello /> : "Show" }</button>
    </div>
  );
}

export default App;