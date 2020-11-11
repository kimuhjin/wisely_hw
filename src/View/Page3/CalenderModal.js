import React, { Fragment,useState } from 'react'
import styled,{keyframes} from 'styled-components'
import { useHistory } from "react-router-dom";
import Calender from './Calender';


function CalenderModal({CalenderOpen}) {
    let date = new Date();
    const calYear = date.getFullYear();
const calMonth = date.getMonth()+1;
const calDay = date.getDate()
    const [shipDay, setShipDay] = useState(`${calYear},${calMonth},${calDay+1}`)
    const history = useHistory();
    const onSubmitFunc = ()=>{
        history.push("/Page4");
    }

    return (
        <Fragment>
        <Layout CalenderOpen={CalenderOpen}>
<Title>결제일을 설정해주세요</Title>
<Calender setShipDay={setShipDay} shipDay={shipDay}/>
<ConfirmBtn onClick={onSubmitFunc} check={`${calYear},${calMonth},${calDay+1}`} value={shipDay}>{`${calYear},${calMonth},${calDay+1}`===shipDay ? "확인" : <Fragment><div >
{shipDay.split(",")[1]}월 {shipDay.split(",")[2]}일</div><div className="text">에 결제하기</div></Fragment> }</ConfirmBtn>
        </Layout>
        </Fragment>
    )
}

export default CalenderModal
const ConfirmBtn = styled.button`
display:flex;
justify-content:center;
align-items:center;
outline:none;
cursor: pointer;
border:none;
color:#fff;
margin:0px auto 0px auto;
height: 48px;
width: 100%;
border-radius: 4px;
box-sizing:border-box;
background-color:${props=>props.value===props.check ? "#CECECE" : "#0055B8"};
box-shadow: ${props=>props.value===props.check ? "" : "0px 2px 4px rgba(0, 0, 0, 0.25)"};
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 23px;
letter-spacing: -0.06em;
text-align: center;
.text{
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: 23px;
letter-spacing: -0.06em;
text-align: center;
}

`
const Title = styled.div`
font-size: 26px;
font-style: normal;
font-weight: 300;
line-height: 26px;
letter-spacing: -0.06em;
`
const FadeIn = () => keyframes`
from{
    transform:translateY(500px);
}
to {
    transform:translateY(0px);
}
`;
const Fadeout = () => keyframes`
from{
    transform:translateY(0px);
}
to {
    transform:translateY(500px);
}
`;
const Layout = styled.div`
font-family: SpoqaHanSans;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:flex-start;
position:absolute;
bottom:0px;
z-index:9998;
height:482px;
width: 414px;
padding:26px 16px 16px 16px;
background-color:white;
box-sizing:border-box;
visibility: ${props => props.CalenderOpen ? 'visible' : 'hidden'};
  animation: ${props => props.CalenderOpen ? FadeIn : Fadeout} 0.5s ease-out;
  transition: visibility 0.5s ease-out;

`