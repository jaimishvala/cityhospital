import React from 'react';
import { CardDiv, Heading2, Like, Span } from './Card.Style';
import { Heading3 } from '../Heading/Heading';
import Button from '../Button/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from '@mui/material/Badge';

function Card({ id, title = '', img = '', SubTitle = '', btnValue = '', btnClick, favclick, favStatus }) {
    return (
        <div>
            <CardDiv>

                <IconButton aria-label="cart" onClick={favclick}>
                    <Badge badgeContent={favclick}>
                        {favStatus ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Badge>
                </IconButton>

                <Span>{id}</Span>
                <Heading2>{title}</Heading2>
                <Heading3>{SubTitle}</Heading3>
                {btnValue ? <Button onClick={btnClick}>{btnValue}</Button> : null}
            </CardDiv>
        </div>
    );
}

export default Card;