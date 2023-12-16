import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteFavoriteCart } from '../../redux/action/favorite.action';


function FavoriteCart(props) {

    const medicines = useSelector(state => state.medicines)
    console.log(medicines);

    const favorite = useSelector(state => state.favorite)
    console.log(favorite);

    const dispatch = useDispatch()

    const favoriteData = favorite.favorite.map((v) => {
        let favd = medicines.medicines.find((f) => f.id === v.id)

        let fdata = { ...favd }
        return fdata
    })
    console.log(favoriteData);

    let total = favoriteData.reduce((acc, v) => acc + v.price, 0)
    console.log(total);

    const handleDelete = (id) => {
        dispatch(deleteFavoriteCart(id))
    }


    return (
        <div className='container'>
            <h2>FavoriteCart</h2>
            {
                favoriteData.map((v) => {
                    return (
                        <div className="item">
                            <div className="buttons">
                                <span className="delete-btn" />
                                <span className="like-btn" />
                            </div>
                            <div className="image">
                                <img src="assets/img/medicine/medicine1.jpg" alt width={130} />
                            </div>
                            <div className="description">
                                <h5>{v.name}</h5>
                                <p>{v.date}</p>
                                <span>{v.message.substring(0, 10)}</span>
                            </div>
                            <div className="total-price">${v.price}</div>

                            <div className='delete'>
                                <DeleteIcon onClick={() => handleDelete(v.id)} />
                            </div>
                        </div>
                    )

                })
            }
            <>
                <h4 className='span'>Total:{total}</h4>
            </>
        </div>



    );
}

export default FavoriteCart;