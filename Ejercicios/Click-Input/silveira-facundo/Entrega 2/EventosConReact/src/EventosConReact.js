import React from 'react';

function EventosConReact() {
    const inputEl = React.useRef(null);
    return(
        <div>
            <input type="text" id="btn" ref={inputEl}></input>
            <input type="button" value="mostar alert" id="btn" onClick={() => alert(inputEl.current.value)}></input>
        </div>
    );
}

export default EventosConReact;