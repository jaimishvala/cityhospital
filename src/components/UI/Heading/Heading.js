import styled from "styled-components";

export const HeaderH2 = styled.h2`
font-size: 21px;
color: #FF6337;
margin-top: 4px;
`

export const Heading1 = styled.h1`
    font-family: "Raleway", sans-serif;
    margin: 0;
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    text-transform: uppercase;
    color: #2c4964;
`

export const Heading2 = styled.h2`
font-family: "Raleway", sans-serif;
color: #2c4964;
margin: 10px 0 0 0;
font-size: 24px;

`


export const H2 = styled.h2`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
    color: #2c4964;

    &::before{
    content: '';
    position: absolute;
    display: block;
    width: 120px;
    height: 1px;
    background: #ddd;
    bottom: 1px;
    left: calc(50% - 60px);
    }

    &::after{
    content: '';
    position: absolute;
    display: block;
    width: 40px;
    height: 3px;
    background: #FF6337;
    bottom: 0;
    left: calc(50% - 20px);
    }

`


export const Section = styled.h2`
font-family: "Raleway", sans-serif;
font-size: 32px;
font-weight: bold;
margin-bottom: 20px;
padding-bottom: 20px;
position: relative;
color: #2c4964;

&::before{
    content: '';
    position: absolute;
    display: block;
    width: 120px;
    height: 1px;
    background: #ddd;
    bottom: 1px;
    left: calc(50% - 60px);
    box-sizing: border-box;
}

&::after{
    content: '';
    position: absolute;
    display: block;
    width: 40px;
    height: 3px;
    background: #FF6337;
    bottom: 0;
    left: calc(50% - 20px);
    box-sizing: border-box;
}

`


export const H3 = styled.h3`
font-family: "Raleway", sans-serif;
    font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #2c4964;
`

export const Heading3 = styled.h3`
font-family: "Raleway", sans-serif;
font-size: 18px;
font-weight: bold;
margin: 10px 0 5px 0;
color: #e1d3d3;
`

export const H4 = styled.h4`
font-family: "Raleway", sans-serif;
font-weight: 700;
margin-bottom: 15px;
font-size: 24px;
color: #2c4964;
`


export const Heading4 = styled.h4`
font-family: "Raleway", sans-serif;
font-weight: 700;
margin-bottom: 5px;
font-size: 20px;
color: #2c4964;
`

export const ContactH4 = styled.h4`
font-family: "Raleway", sans-serif;
padding: 0 0 0 60px;
font-size: 22px;
font-weight: 600;
margin-bottom: 5px;
color: #2c4964;
`

export const HomeH4 = styled.h4`
font-family: "Raleway", sans-serif;
font-size: 14px;
    color: #999;
    margin: 0;
`

export const FooterH4 = styled.h4`
font-family: "Raleway", sans-serif;
margin-top: 0;
margin-bottom: 0.5rem;
font-weight: 500;
line-height: 1.2;
font-size: 1.5rem;
`