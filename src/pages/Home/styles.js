import styled from "styled-components";

export const Container= styled.div`
    display:flex;
    background-color: #181f36;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    height: 100vh;

`

export const Topbackground= styled.div`
 background: linear-gradient(to right, #fe735d, #7f3841);
 height: 30vh;
 width: 90vw;
 max-width: 800px;
 border-radius: 30px;
 display: flex;
 justify-content: center;
 align-items: center;

 img {
    max-width: 100%;
    max-height: 100%;
 }

`

export const Form = styled.form `

display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
max-width: 500px;

`
export const Title = styled.h2 `
color: #fff;
font-size: 38px;
text-align: center;
font-weight: 600;
font-style: normal;
`
export const Containerunputs = styled.div `
display: flex;
gap: 20px
`
export const Input = styled.input `
border-radius: 10px;
border: solid 1px #d2dae2;
background-color: #fff;
padding: 12px 20px;
outline: none;
width: 100%;


`
export const Inputlabel = styled.label `
color: #fff;
font-size: 12px;
font-weight: 500;


span {
    color: #ef4f45;
    font-weight:bold;
}
`

export const Button = styled.button `
background: linear-gradient(180deg, #fe7e5d 0%, #FF6378 100% );
border: none;
font-size: 16px;
color: #fff;
padding: 16px 32px;
width: fit-content;
border-radius: 30px;
cursor: pointer;

&:hover {
    opacity: 0.8;
}

&:active{
    opacity: 0.5;
}


`



