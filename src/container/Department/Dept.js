import React from 'react';
import { useParams } from 'react-router-dom';
import { Heading2 } from '../../components/UI/Heading/Heading';

function Dept(props) {

    const { id } = useParams()

    return (
        <div className="section-title">
            <Heading2>Department:{id}</Heading2>
        </div>
    );
}

export default Dept;