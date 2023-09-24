import styled from "styled-components";

export const Main = styled.main`
font-family: "Open Sans", sans-serif;
color: #444444;
line-height: 1.5;
`

export const P1 = styled.p`
font-family: "Open Sans", sans-serif;
padding: 0 0 0 60px;
margin-bottom: 0;
font-size: 14px;
color: #4b7dab;
`

export const P2 = styled.p`
margin: 10px 0 0 0;
font-size: 14px;
`

export const P = styled.p`
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #212529;
margin-bottom: 0;
margin-bottom: 1rem;
`

export const P3 = styled.p`
padding: 0;
    margin: 0;
    font-family: "Raleway", sans-serif;
    font-size: 14px;
    line-height: 24px;
    color: #444444;
`

export const ItalicP = styled.p`
    font-size: 14px;
    color: #999;
    font-style: italic;
    margin: 15px auto 15px auto;
`


export const DepartmentP = styled.p`
color: #777777;
font-size: 1rem;
font-style: italic!important;
margin-top: 0;
margin-bottom: 1rem
rem
;
`


export const Span = styled.span`
font-size: 36px;
display: block;
font-weight: 600;
color: #082744;
`

export const Span1 = styled.span`
display: block;
    font-size: 15px;
    padding-bottom: 10px;
    position: relative;
    font-weight: 500;

    &::after{
        content: '';
  position: absolute;
  display: block;
  width: 50px;
  height: 1px;
  background: #b2c8dd;
  bottom: 0;
  left: 0;
    }
`

export const FooterP = styled.p`

margin-top: 0;
    margin-bottom: 1rem;
    color: #444444;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
`


// export const Anchor = styled.a`
// display: flex;
// align-items: center;
// justify-content: space-between;
// font-size: 14px;
// color: #2c4964;
// white-space: nowrap;
// transition: 0.3s;
// border-bottom: 2px solid #fff;
// padding: 5px 2px;
// `