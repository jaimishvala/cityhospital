import React from 'react';
import { CardDiv, Heading2, Span } from './Card.Style';
import { Heading3 } from '../Heading/Heading';

function Card({ id, title = '', img = '', SubTitle = '' }) {
    return (
        <div>
            <CardDiv>
                <Span>{id}</Span>
                <Heading2>{title}</Heading2>
                <Heading3>{SubTitle}</Heading3>
            </CardDiv>
        </div>
    );
}

export default Card;