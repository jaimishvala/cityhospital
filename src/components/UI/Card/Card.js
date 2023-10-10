import React from 'react';
import { CardDiv, Heading2, Span } from './Card.Style';
import { Heading3 } from '../Heading/Heading';
import Button from '../Button/Button';

function Card({ id, title = '', img = '', SubTitle = '', btnValue = '', btnClick = '' }) {
    return (
        <div>
            <CardDiv>
                <Span>{id}</Span>
                <Heading2>{title}</Heading2>
                <Heading3>{SubTitle}</Heading3>
                {btnValue ? <Button onClick={btnClick}>{btnValue}</Button> : null}
            </CardDiv>
        </div>
    );
}

export default Card;