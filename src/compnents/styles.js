import styled from 'styled-components'

export const SearchContainer = styled.header`
width:100%;
height:39vh;
background-color:rgb(36, 38, 39);
display:flex;
flex-direction:column;
align-items:center;
min-width:800px;
`

export const Title = styled.span`
color:white;
font-size:5vmin;
font-weight:bold;
padding-top:5%;
display:flex;
img{
    width:70px;
}
`

export const SubContainer = styled.div`
display:flex;
width:35%;
background-color:whitesmoke;
height:35px;
margin-top:1%;
border-radius:5px;
`

export const Search = styled.input`
width:90%;
padding:0 10px;
border:none;
background-color:transparent;
font-size:1vmin;
`

export const SubButton = styled.button`
width:10%;
background-color:rgb(40, 115, 255);
border:none;
border-radius:0 5px 5px 0;
color:white;
font-size:3vmin;
`

export const Detail = styled.span`
margin-top:3%;
padding:0 3%;
width:100%;
display:flex;
justify-content:flex-end;
color:white;
font-size:3vmin;
i{
    padding:0 5px;
    cursor: pointer;
    :hover{
        opacity:0.5;
    }
}
`
