import { isDisabled } from "@testing-library/user-event/dist/utils";
import styled from "styled-components";

const BaseButton = styled.button`
    border: 0;
    padding: 10px 20px;
    transition: 0.4s;
    border-radius: 50px;
    cursor: pointer;
    margin-top:10px;
`

export const PrimaryButton = styled(BaseButton)`
    background: ${props => props.disabled ? 'grey' : '#1c84e3'};
color: #fff;
    &:hover{
    background:${props => props.disabled ? 'grey' : '#FF6337'} ;
}
`

export const SecondaryButton = styled(BaseButton)`
background:${props => props.disabled ? 'grey' : '#FF6337'} ;
color: #fff;
    &:hover{
    background:${props => props.disabled ? 'grey' : ' #1c84e3'};
}
`

export const OutlineButton = styled(BaseButton)`
background:  #FF6337;
color:#000;
border: 2px solid black;
    &:hover{
    background: #FF6337;
    color: #fff;
    border: none;
}
`