import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCart, incrementCart } from '../../redux/action/cart.action';
import DeleteIcon from '@mui/icons-material/Delete';

function AddToCart(props) {

    const medicines = useSelector(state => state.medicines)
    console.log(medicines);

    const cart = useSelector(state => state.cart)
    console.log(cart);

    const dispatch = useDispatch()

    const cartData = cart.cart.map((v) => {
        let med = medicines.medicines.find((m) => m.id === v.id)

        let fData = { ...med, qty: v.qty }
        return fData
    })
    console.log(cartData);


    let total = cartData.reduce((acc, v) => acc + (v.price * v.qty), 0)
    console.log(total);

    const handleIncrement = (id) => {
        // console.log(id);

        dispatch(incrementCart(id))

    }

    const handleDecrement = (id) => {
        // console.log(id);
        dispatch(decrementCart(id))
    }


    return (
        <div className='container'>
            <div className="shopping-cart">
                <div className="title">
                    Medicine Bag
                </div>

                {
                    cartData.map((v) => {
                        return (
                            <div className="item">
                                <div className="buttons">
                                    <span className="delete-btn" />
                                    <span className="like-btn" />
                                </div>
                                <div className="image">
                                    <img src="medicine1.jpg" alt />
                                </div>
                                <div className="description">
                                    <span>{v.name}</span>
                                </div>
                                <div className="quantity">
                                    <button className="plus-btn" type="button" name="button" onClick={() => handleIncrement(v.id)}>
                                        +
                                    </button>

                                    <span>{v.qty}</span>
                                    <button className="minus-btn" type="button" name="button" onClick={() => handleDecrement(v.id)}>
                                        -
                                    </button>
                                </div>
                                <div className="total-price">${v.price * v.qty}</div>


                                <div className='delete'>
                                    <DeleteIcon />
                                </div>

                            </div>


                        )

                    })
                }

                <>
                    <span className='span'>Total:{total}</span>
                </>

            </div>
        </div>

    );
}

export default AddToCart;