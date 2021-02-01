import axios from "axios";
import { useRouter } from "next/router"
import * as s from './styles'
import Link from 'next/link'
import { useEffect, useState } from "react";

export default function Weather(){
    const router = useRouter();
    const [toggle,setToggle] = useState();
    const [data,setData] = useState({
        name : "",
        cloud : "",
        temp : "",
        weather : ""
    });
    const [img,setImg] = useState('');
    const {id} = router.query;
    const [rand,setRand] = useState();
    useEffect(()=>{
        setRand(Math.floor(Math.random()*(79-10+1)) + 10)
    },[id])
    
    useEffect(()=>{
        if(id!=undefined) window.localStorage.setItem("ID",id)
        const Key = window.localStorage.getItem("ID")
        const API_URL = "http://api.openweathermap.org/data/2.5/weather?q="+ Key +"&appid="+"206e6ea833a5daf26649c41d9e2ea3ec"
        axios.get(API_URL)
        .then((res)=>{
            const a = res.data;
            setToggle(true)
            setData({
                name: a.name,
                cloud:a.clouds.all,
                temp:Math.round(a.main.temp -273.15), 
                weather:a.weather[0].main
            })
        })
        .catch(()=>{
            setToggle(false)
        })
        if(data.name != ''){
            axios({
                url:"https://dapi.kakao.com/v2/search/image?query=" + data.name,
                method:"post",
                headers:{
                    'Authorization' : 'KakaoAK ea455be3c58ab9b39d7f5ce4ab830fcf'
                }
            }) .then((e)=>{
                setImg(e.data.documents[rand]["image_url"])
            })
        }
    },[data])
    return(
        <>
        <s.Header>
            <s.Logo><Link href="/">☂ CITY WEATHER</Link></s.Logo>
        </s.Header>
        {toggle && 
            <>
            <s.Wrapper>
                <s.DescripCont>
                    <s.DHeader>
                        <img src={"/image/알리미.jpg"} alt=""/>
                        <span>{data.name}_weather</span>
                    </s.DHeader>
                    <s.Img src={img}></s.Img>
                    <s.DetailMenu>♡ {data.name}</s.DetailMenu>
                    <s.DescripWheather>☛ {data.name}은  
                    {(data.cloud>90)?" 너무 흐리네요.." : (data.cloud>75)?" 습해용" : " 날씨가 좋네요 ㅎㅎ"}
                    </s.DescripWheather>
                    <s.WheatherDetail>
                        <s.Square>온도 : {data.temp}</s.Square>
                        <s.Square>날씨 : {data.weather}</s.Square>
                        <s.Square>구름 : {data.cloud}%</s.Square>
                    </s.WheatherDetail>
                </s.DescripCont>
            </s.Wrapper>
            </>
            }
            {toggle==false &&
            <>
            <s.Container>
            <img src={"/image/당황.png"} alt="" style={{width:"100px"}}/>
            <span>검색 결과가 없습니다...</span>
            </s.Container>
            </>
            }
        </>
    )
}