import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heading2, Heading3 } from '../../components/UI/Card/Card.Style';
import { Heading4 } from '../../components/UI/Heading/Heading';


function ReviewPage(props) {

    const [rData, setrData] = useState([])
    const { id } = useParams()

    const getReview = async () => {
        let respones = await fetch("https://jsonplaceholder.typicode.com/comments")
        // console.log(respones);

        let data = await respones.json()
        // console.log(data);

        let fData = data.filter((v) => v.id == id)
        console.log(fData);

        setrData(fData[0])
    }

    console.log(rData);


    useEffect(() => {
        getReview()
    }, [])



    return (
        <>
            <br></br><br></br>
            <div className='container reviewpage'>
                <Heading2>Review Pages</Heading2>
                <Heading3>{rData.name}</Heading3>
                <Heading4>{rData.body}</Heading4>
            </div>
        </>
    );
}

export default ReviewPage;