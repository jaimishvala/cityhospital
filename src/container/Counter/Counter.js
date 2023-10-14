import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment } from '../../redux/action/counter.action';

function Counter(props) {
    const c1 = useSelector(state => state.counter)

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(Increment())
    }

    const handleDecrement = () => {
        dispatch(Decrement())
    }

    return (
        <div className='container'>
            <br></br><br></br>
            <button onClick={handleIncrement}>+</button>
            {c1.count}
            <button onClick={handleDecrement}>-</button>
            <br></br><br></br>
        </div>
    );
}

export default Counter;