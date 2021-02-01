import { useState } from 'react'
import * as s from './styles'
import {useRouter} from 'next/router'

export default function Main(){
    const [Value, setValue] = useState('');
    const router = useRouter();
    const InputChange=(e)=>{
        const {value} = e.target;
        setValue(value)
    }
    const SubValue=()=>{
        router.push("/view/" + Value)
    }
    return(
        <>
        <s.SearchContainer>
            <s.Title>☂ CITY WEATHER</s.Title>
            <s.SubContainer>
                <s.Search 
                    placeholder="도시명을 검색하세요.(영어로 입력해주세요!)" 
                    onChange={InputChange}
                />
                <s.SubButton
                    onClick={SubValue}
                ><i className="fas fa-search"></i></s.SubButton>
            </s.SubContainer>
            <s.Detail>
               <a href="https://github.com/jidole02"><i className="fab fa-github"></i></a>
               <a href="https://www.facebook.com/profile.php?id=100012148756964"><i className="fab fa-facebook"></i></a>
            </s.Detail>
        </s.SearchContainer>
        </>
    )
}