import styled from 'styled-components'



// injectGlobal`
//   input {
//    border:none;
//    background-image:none;
//     background-color:transparent;
//     -webkit-box-shadow: none;
//     -moz-box-shadow: none;
//     box-shadow: none;
//   }

// `
export const Tab = styled.div`
width: 100%;
/* background-color: aquamarine; */
display: flex;
flex-flow: row wrap;
justify-content: center;
`
export const Log = styled.div`
width: 50%;
box-sizing: border-box;
/* border: 1px solid #000000; */
padding: 20px 10px ;
font-size: 0.9rem;
color : #ef8b33;
font-family: 'Raleway', sans-serif;
text-align: center;
`
export const Logc = styled.div`
width: 50%;
box-sizing: border-box;
/* border: 1px solid #000000; */
padding: 20px 10px ;
font-size: 0.9rem;
color : #ef8b33;
font-family: 'Raleway', sans-serif;
text-align: center;
background-color: wheat;
`
export const Frm = styled.form`
padding: 20px;
/* background-color: aquamarine; */
`

export const Inp = styled.input`

    border-color: black;
    border: 1px solid #bfbdbd;
    border-radius: 2px;
    width:100%;
    height : 3rem;
    margin-bottom : 1rem;
    padding: 0px 10px;
    box-sizing: border-box;
    color : black;
    font-family: 'Raleway', sans-serif;
`
export const Sub = styled.input`
    margin-top: 0.8rem;
    border-color: black;
    border: 1px solid #00000000;
    border-radius: 2px;
    width:100%;
    height : 3rem;
    margin-bottom : 1rem;
    background-color: #ef8b33;
    font-family: 'Raleway', sans-serif;  
`

export const Tex = styled.span`
font-size: 0.9rem;
color : #ef8b33;
font-family: 'Raleway', sans-serif;

`