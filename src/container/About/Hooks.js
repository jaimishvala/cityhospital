//[1.]useRef:

// import React, { useEffect, useRef, useState } from 'react';

// function Hooks(props) {
//     const [name, setName] = useState('')
//     const [count, setCount] = useState(0)

//     const nameRef = useRef('')
//     const renderCount = useRef(0);
//     const prevName = useRef('')

//     useEffect(() => {
//         renderCount.current = renderCount.current + 1;   //[] remove count rendering.
//         prevName.current = name;
//         // setCount(count+1);    //Enfinity value.
//     })
//     console.log(name);

//     const handleFocus = () => {
//         console.log("focus");
//         console.log(nameRef.current);   //Element
//         nameRef.current.style.backgroundColor = "red";
//     }

//     return (
//         <div className='container'>
//             <h2>useRef:</h2>

//             <input
//                 type='text'
//                 name='name'
//                 onChange={(event) => setName(event.target.value)}
//                 onFocus={handleFocus}
//                 ref={nameRef}
//             />
//             <br></br><br></br>
//             Num of time componenet render:{renderCount.current}
//             <br></br><br></br>
//             state value:{name}


//         </div>
//     );
// }

// export default Hooks;


//[2.]useMemo:

// import React, { useMemo } from 'react';
// import { useState } from 'react';

// function Hooks(props) {
//     const [count, setCount] = useState(0)
//     const [fact, setFact] = useState()

//     const factorial = useMemo(() => {
//         console.log("fact");

//         let num = 1;
//         for (let i = 1; i <= fact; i++) {
//             num *= i;
//         }

//         return num;
//     }, [fact])



//     return (
//         <div className='container'>
//             <h2>useMemo:</h2>
//             <br></br><br></br>
//             <button onClick={() => setCount(count + 1)}>+</button>
//             {count}
//             <br></br><br></br>
//             <input
//                 type='number'
//                 name='number'
//                 onChange={(event) => setFact(parseInt(event.target.value))}
//             />
//             factorial: {factorial}

//         </div>
//     )
// }

// export default Hooks;


//[3.]useCallBack:



import React, { useCallback } from 'react';
import { useState } from 'react';
import Child from './Child';

function Hooks(props) {
    const [theme, setTheme] = useState(false);
    const [num, setNum] = useState(0)

    const styleTheme = {
        backgroundColor: theme ? 'black' : 'white',
        color: theme ? 'white' : " black"
    }


    //with Callback:
    const getData = useCallback((inc) => {
        return [num + inc, num + 1 + inc, num + 2 + inc]
    }, [num]);


    return (
        <div className='container' style={styleTheme}>
            <h2>useCallBack:</h2>
            <br></br><br></br><br></br>
            <button onClick={() => setTheme(!theme)}>Change Theme</button>
            <br></br><br></br><br></br>
            <input onChange={(event) => setNum(parseInt(event.target.value))} />
            <br></br><br></br><br></br>
            <Child exData={getData} />
        </div>
    );
}

export default Hooks;




















// import React from 'react';
// import { useState, useRef, useMemo, useCallback } from 'react';
// import Child from './Child';

//1. useRef:

// function Hooks(props) {
//     const inputref = useRef()

//     const handleSubmit = () => {
//         console.log("handleSubmit")

//         inputref.current.value = "1000"  ///add value.
//         inputref.current.focus()    //focus
//         inputref.current.style.color = "red"   //color
//         inputref.current.style.display = "none"   //display none
//     }

//     return (
//         <div className='container'>
//             <h2>useRef:</h2>
//             <input type='text' ref={inputref} />
//             <button onClick={handleSubmit}>Submit</button>
//         </div>
//     );
// }

// export default Hooks;


// dom and function component handle useRef used.



//2.  useMemo:

// update kab hona hai
//function component ne pure componenet banane ke liye useMemo use.

// function Hooks(props) {
//     const [count, setCount] = useState(0)
//     const [item, setItem] = useState(10)

//     const multiCountMemo = useMemo(() => {
//         console.log("multiCountMemo");

//         return count * 5;
//     }, [count])

//     return (
//         <div className='container'>
//             <h2>UseMemo Hook In React</h2>
//             <h3>Count: {count}</h3>
//             <h3>Item:{item}</h3>
//             <h3>{multiCountMemo}</h3>
//             <button onClick={() => setCount(count + 1)}>Update Count</button>

//             <button onClick={() => setItem(item * 10)}>Update Item</button>
//         </div>
//     );
// }

// export default Hooks;


//3. useCallBack



// function Hooks(props) {
//     const [add, setAdd] = useState(0)
//     const [count, setCount] = useState(0)

//     const Learning = useCallback(() => {
//         //some operation
//     }, [])

//     return (
//         <div className='container'>
//             <h2>useCallBack:</h2>
//             <Child Learning={Learning} count={count} />
//             {/* props rerender */}
//             <h3>{add}</h3>
//             <button onClick={() => setAdd(add + 1)}>Addition</button>
//             <h3>{count}</h3>
//             <button onClick={() => setCount(count + 2)}>Count</button>
//         </div>
//     );
// }

// export default Hooks;