import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Heading1, Heading2, Heading3 } from '../../components/UI/Heading/Heading';
import { P, Span } from '../../components/UI/TextArea/TextArea';
import { Button } from '@mui/material';
import { Title } from '@mui/icons-material';
import Card from '../../components/UI/Card/Card';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { errorMedicine, getMedicine } from '../../redux/action/medicines.action';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
// import { addTOCart } from '../../redux/action/cart.action';
import { addFavoriteCart } from '../../redux/action/favorite.action';
import { addTOCart } from '../../redux/slice/cart.slice';


function Medicines({ increment, fav, setFav }) {

    // const MedicinesData = [  
    //     {
    //         "id": 1,
    //         "name": "Naproxen",
    //         "price": 85,
    //         "expiry": 2023,
    //         "desc": "Naproxen, sold under the brand name Aleve among others, is a nonsteroidal anti-inflammatory drug used to treat pain, menstrual cramps, inflammatory diseases such as rheumatoid arthritis, gout and fever."
    //     },
    //     {
    //         "id": 2,
    //         "name": "Jakafi",
    //         "price": 85,
    //         "expiry": 2023,
    //         "desc": "Ruxolitinib, sold under the brand name Jakafi among others, is a medication used for the treatment of intermediate or high-risk myelofibrosis, a type of myeloproliferative neoplasm that affects the bone."
    //     },
    //     {
    //         "id": 3,
    //         "name": "Hydrea",
    //         "price": 85,
    //         "expiry": 2023,
    //         "desc": "Hydrea (hydroxyurea) is an antineoplastic (anti-cancer) agent used to treat melanoma, resistant chronic myelocytic leukemia, and recurrent, metastatic, or inoperable carcinoma of the ovary and primary squamous cell (epidermoid) carcinomas of the head and neck."
    //     },
    //     {
    //         "id": 4,
    //         "name": "Hiprex",
    //         "price": 85,
    //         "expiry": 2023,
    //         "desc": "Hexamethylenetetramine, also known as methenamine, hexamine, or urotropin, is a heterocyclic organic compound with the formula (CH₂)₆N₄. This white crystalline compound is highly soluble in water and polar organic solvents. It has a cage-like structure similar to adamantane"
    //     },
    //     {
    //         "id": 5,
    //         "name": "Meftal",
    //         "price": 85,
    //         "expiry": 2023,
    //         "desc": "Meftal Spas tablet is an antispasmodic medicine. It contains a combination of dicyclomine and mefenamic acid. This medicine is used for relieving pain and spasm in the abdomen and during or before menses (periods)."
    //     },
    //     {
    //         "id": 6,
    //         "name": "Wegovy",
    //         "price": 85,
    //         "expiry": 2023,
    //         "desc": "WEGOVY® (semaglutide) injection 2.4 mg is an injectable prescription medicine that may help adults and children aged ≥12 years with obesity (BMI ≥30 for adults, BMI ≥ 95th percentile for age and sex for children), or some adults with excess weight (BMI ≥27) (overweight) who also have weight-related medical problems to help them lose weight and keep it off. Wegovy® should be used with a reduced calorie meal plan and increased physical activity"
    //     },
    //     {
    //         "id": 7,
    //         "name": "Aripiprazole",
    //         "price": 85,
    //         "expiry": 2023,
    //         "desc": "Aripiprazole is used to treat certain mental/mood disorders (such as bipolar disorder, schizophrenia, Tourette's syndrome, and irritability associated with autistic disorder). It may also be used in combination with other medication to treat depression. Aripiprazole is known as an antipsychotic drug (atypical type)."
    //     },
    //     {
    //         "id": 8,
    //         "name": "Orlistat",
    //         "price": 85,
    //         "expiry": 2023,
    //         "desc": "Orlistat, sold under the brand name Xenical among others, is a medication used to treat obesity. Its primary function is preventing the absorption of fats from the human diet by acting as a lipase inhibitor, thereby reducing caloric intake."
    //     }
    // ]


    // const [Medicines, setMedicines] = useState([])
    // const [filterData, setFilterData] = useState([])

    const [adminMedicine, setadminMedicine] = useState([])
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")
    // const [fav, setFav] = useState([])


    const dispatch = useDispatch()

    const medicines = useSelector(state => state.medicines)
    console.log(medicines);

    const cart = useSelector(state => state.cart)
    console.log(cart);

    const favorite = useSelector(state => state.favorite)
    console.log(favorite);


    // const getData = () => {
    //     let localData = JSON.parse(localStorage.getItem("medicines"));
    //     console.log(localData);

    //     setadminMedicine(localData)
    // }

    useEffect(() => {
        // getData()
        dispatch(getMedicine())
    }, [])

    const handleAddCart = (id) => {
        console.log("dsfdsf");
        // increment((prev) => prev + 1)

        dispatch(addTOCart({ id: id, qty: 1 }))
    }

    const handleFavoritebar = (id) => {
        // console.log(id);

        if (fav.includes(id)) {
            let fdata = fav.filter((v) => v !== id)
            console.log(fdata);
            setFav(fdata)
        } else {
            setFav((prev) => [...prev, id])
        }

        dispatch(addFavoriteCart(id))

    }
    console.log(fav);



    const handlesearchsort = () => {

        let localData = JSON.parse(localStorage.getItem("medicines"));

        let fdata = localData.filter((v) => {
            return (
                v.name.toLowerCase().includes(search.toLowerCase()) ||
                v.price.toString().includes(search.toString()) ||
                v.message.toLowerCase().includes(search.toLowerCase()) ||
                v.date.toLowerCase().includes(search.toLowerCase())
            )
        })

        fdata = fdata.sort((a, b) => {
            if (sort === 'az') {
                return a.name.localeCompare(b.name);
            } else if (sort === 'za') {
                return b.name.localeCompare(a.name);
            } else if (sort === 'lh') {
                return a.price - b.price;
            } else if (sort === 'hl') {
                return b.price - a.price;
            }
        })

        return fdata;

    }


    let finalData = handlesearchsort();
    // console.log(finalData);
    // let finalData = filterData.length > 0 ? filterData : localData
    // console.log(finalData);


    return (
        <div className='container'>
            <br></br>

            {
                // <>
                //     <input onChange={(event) => setSearch(event.target.value)} placeholder='Searching...' />

                //     <select onChange={(event) => setSort(event.target.value)}>
                //         <option value="0">--Select---</option>
                //         <option value="az">A To Z</option>
                //         <option value="za">Z TO A</option>
                //         <option value="lh">Low To High</option>
                //         <option value="hl">High To Low</option>
                //     </select>

                // </>
            }

            <br></br><br></br>


            {/* <React.Fragment>
                {hasError && <p>Something went wrong.</p>}
                {isLoading ? (
                    <p>Loading ...</p>
                ) : (
                    <ul>
                        {data.map(item => (
                            <li key={item.ObjectId}>
                                <a href={item.url}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </React.Fragment> */}

            <div className='row'>
                {
                    medicines.isLoading ?
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress color="secondary" />
                        </Box> :
                        medicines.error ? <p>{medicines.error}</p> :
                            medicines.medicines.map((v) => {

                                return (
                                    <div className='col-lg-3'>
                                        <Card
                                            title={v.name}
                                            SubTitle={v.price}
                                            btnValue="Add To Cart"
                                            btnClick={() => handleAddCart(v.id)}
                                            favclick={() => handleFavoritebar(v.id)}
                                            favStatus={fav.includes(v.id) ? true : false}
                                        />
                                        <br></br><br></br>
                                    </div>

                                )

                            })
                }




                {/* {
                    finalData.map((v) => {

                        return (
                            <div className='col-lg-3'>
                                <Link to={"/MedicinesUser/" + v.id}>
                                    <Card>
                                        <Heading1>{v.name}</Heading1>
                                        <Heading2>{v.price}</Heading2>
                                        <P>{v.desc}</P>
                                        <Span>{v.expiry}</Span>
                                       
                                    </Card>
                                </Link>
                            </div>

                        )

                    })

                } */}


            </div >

            <br></br>
        </div>
    );

}

export default Medicines;