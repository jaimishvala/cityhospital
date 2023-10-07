import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


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
        <div>
            <h2>Review Pages</h2>
            <h3>{rData.name}</h3>
            <h3>{rData.body}</h3>
        </div>
    );
}

export default ReviewPage;