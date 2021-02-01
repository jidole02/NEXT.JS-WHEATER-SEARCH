import styled from 'styled-components'

export const Header = styled.header`
width:100%;
padding: 8px 20px;
min-width:800px;
background-color:rgb(36, 38, 39);
display:flex;
`

export const Input = styled.input`
width:200px;
border-radius:24px;
height:22px;
background-color:transparent;
padding:0 10px;
font-size:1px;
border:1px solid gray;
color:whitesmoke;
`

export const Logo = styled.span`
color:white;
font-size:2.3vmin;
font-weight:bold;
padding-right:20px;
cursor: pointer;
`

export const Container = styled.div`
width:100%;
height:90vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
min-width:800px;
span{
    font-size:12px;
    margin-top:10px;
    font-weight:bold;
}
`

export const Wrapper = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
min-width:800px;
min-height:500px;
height:600px;
`

export const DescripCont = styled.div`
width:280px;
height:400px;
border:1px solid rgb(200,200,200);
display:flex;
flex-direction:column;
align-items:center;
background-color:white;
border-radius:10px;
`

export const DHeader = styled.div`
width:100%;
padding:5px 0;
border-bottom:1px solid rgb(200,200,200);
display:flex;
align-items:center;
img{
    border-radius:80%;
    width:25px;
    height:25px;
    margin-left:10px;
    object-fit:cover;
}
span{
    font-size:10px;
    font-weight:bold;
    margin-left:5px;
}
`

export const Img = styled.img`
width:100%;
height:250px;
object-fit:cover;
`

export const DetailMenu = styled.div`
width:100%;
padding:10px 15px;
color:black;
font-weight:bold;
font-size:12px;
`

export const DescripWheather = styled.div`
width:100%;
color:gray;
font-size:0.7vmin;
padding:0px 15px;
`

export const WheatherDetail = styled.div`
width:100%;
padding: 10px 15px;
display:flex;
justify-content:space-between;
`

export const Square = styled.div`
width:30%;
border-radius:5px;
height:30px;
background-color:rgb(255, 252, 226);
display:flex;
justify-content:center;
align-items:center;
font-size:10px;
font-weight:bold;
color:rgb(255, 129, 27);
:nth-child(2){background-color:rgb(210, 226, 255);color:rgb(27, 50, 255);}
:nth-child(3){background-color:rgb(227, 255, 225);color: rgb(0, 230, 77);}
`