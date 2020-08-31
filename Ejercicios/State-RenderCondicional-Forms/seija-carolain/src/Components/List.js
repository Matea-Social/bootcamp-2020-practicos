import React from "react";

const lista = ["Uno", "Dos", "Tres", "Cuatro"];

const Lista = () => {
    const [list] = React.useState(lista);
    return (
        <div>
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

export default Lista;