import React from "react";
import "./App.css";

const numberList = ["Uno", "Dos", "Dos"];

// Forma de hacerlo con class
class AppConClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), titulo: "Hello, world!" };
  }

  // Este se ejecuta cuando el componente es montado o renderizado
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  // Este se ejecuta cuando el componente es desmontado o eliminado
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>{this.state.titulo}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button
          onClick={() => {
            clearInterval(this.timerID);
          }}
        >
          Parar reloj
        </button>
        <ul>
          {numberList.map((element, idx) => {
            return (
              <li key={`${element}-${idx}`}>
                <p>{element}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

// Forma de hacerlo con arrow functions =>
const App = (props) => {
  const [date, setDate] = React.useState(new Date());
  const [title, setTitle] = React.useState("Hello, world!");
  const [visibleTitle, setVisibleTitle] = React.useState(props.visibleTitle);
  const [list, setList] = React.useState(numberList);
  let timerID;

  const funcionComponentDidMount = () => {
    console.log("Se ejecuta la actualizacion");
    timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Se ejecuta cuando se desmonta o muere el componente
    const clear = () => {
      clearInterval(timerID);
    };
    return clear;
  };

  // Cuando se monta el componente
  React.useEffect(funcionComponentDidMount, []);

  const handleStopClock = () => {
    clearInterval(timerID);
  };

  const handleVisibleTitle = () => {
    // const newVisibleTitle = visibleTitle === true ? false : true;
    /*
    let newVisibleTitle;
    if (visibleTitle === true) {
      newVisibleTitle = false;
    } else {
      newVisibleTitle = true;
    }
    */

    setVisibleTitle(!visibleTitle);
  };

  const handleAddToList = () => {
    const newList = [...list];
    newList.push("Cuatro");
    setList(newList);
  };

  return (
    <div>
      {visibleTitle && <h1>{title}</h1>}
      <h2>It is {date.toLocaleTimeString()}.</h2>
      <button onClick={handleStopClock}>Parar reloj</button>
      <button onClick={handleVisibleTitle}>Pone invisible el titulo</button>
      <button onClick={handleAddToList}>
        Agregar un nuevo elemento a la lista
      </button>
      <ul>
        {list.map((element, idx) => {
          return (
            <li key={`${element}-${idx}`}>
              <p>{element}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
