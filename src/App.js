import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from "react";


// props
// function MyCustomComponent (props) {
//   console.log(props);
//   const name = props.personName;
//   const age = props.personAge;
//   const visible = props.visible;
//   return <p style={{color: 'red'}}>Hello World! My name is {name}. I am {age} years old</p>;
// }

// const obj = {
//   name: "Tom",
//   age: 10
// }

// const name = obj.name;
// const age = obj.age;

// const {name, age} = obj;

// const array = [1,2,3];
// const [one, two, three] = array;

function MyCustomComponent ({personName: name, personAge: age, visible}) {
  console.log('Inside MyCustomComponent');
  // useEffect(() => {
  //   console.log('MyCustomComponent rendered');
  //
  //   // effect cleanup / функция очистки
  //   return () => {
  //     console.log('MyCustomComponent will unmount');
  //   };
  // }, []);

  return <p style={{color: 'red'}}>Hello World! My name is {name}. I am {age} years old</p>;
}

// class MyComponent extends React.Component{
//   constructor(props) {
//     super(props)
//   }
//
//   componentDidMount(){
//
//   }
//
//   componentWillUnmount() {
//
//   }
//
//   render() {
//     return <div></div>
//   }
// }


// Компонент ререндерится в двух случаях
// - Изменение стейта
// - Изменение пропсов

function App() {
  console.log('Function runs');

  // state компонента
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const [foo, setFoo] = useState(20);
  // рефы
  const age = useRef(20);
  const name = useRef('Tom');

  // // реакция на изменение данных
  // useEffect(
  //     function() {
  //       console.log('Mount')
  //     },
  //     []
  // );
  //
  // useEffect(
  //     function() {
  //       console.log('isComponentVisible changed', isComponentVisible)
  //     },
  //     [isComponentVisible]
  // );

  // useEffect(
  //     function() {
  //       console.log('1');
  //       return () => {
  //         console.log('2');
  //       }
  //     },
  //     [isComponentVisible]
  // );

  //
  // useEffect(
  //     () => {
  //       console.log('Every render');
  //     }
  // );


  // useEffect(
  //     function() {
  //       console.log('1');
  //       return () => {
  //         console.log('2');
  //       }
  //     }
  // );



  // useCallback()
  // useMemo()

  const buttonClickHandle = () => {
    age.current = 25;
    setIsComponentVisible(!isComponentVisible);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {isComponentVisible ? <MyCustomComponent personName={name.current} personAge={age.current} /> : null}
        <button onClick={buttonClickHandle}>Отобразить/скрыть компонент</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
