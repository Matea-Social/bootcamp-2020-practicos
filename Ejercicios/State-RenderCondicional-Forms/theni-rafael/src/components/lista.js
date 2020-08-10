import React from "react";

const listaarr=["Uno", "Dos", "Tres", "Cutro"];

const Listar= () => {
    var [lista]=React.useState(listaarr);
    return (
    <div>
        <ul>
            {lista.map((element, idx) => {
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

export default Listar;