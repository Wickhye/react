import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState(""); // keyword는 setKeyword에 의해 변화됨
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => {
    setKeyword((prev) => prev + 1); // setKeyword는 onChange란 function에 의해 호출
    console.log("i run all the time");
  }
  useEffect( () =>{
    console.log("i run only once."); // 우리가 실행시키고 싶은 코드, dependencies(react.js가 지켜보아야 하는 것들)
  }, []); // 처음 렌더 시에 딱 한번만 실행
  useEffect( () =>{
    console.log("i run when 'keyword' changes.");
  }, [keyword]); // 시작할 때와 keyword 변화 시에 실행
  useEffect(()=> {
    console.log("i run when 'counter' changes.");
  }, [counter]); // 시작할 때와 counter 변화 시에 실행
  useEffect(()=> {
    console.log("i run when keyword & counter changes.");
  }, [keyword, counter]); // 시작할 때와 counter, keyword 둘 중 하나가 변화 시에 실행
  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange} // onChange는 사용자의 input이 변화할 때 호출
        type="text"
        placeholder="Search here..."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;