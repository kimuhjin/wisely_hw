import React, { Fragment } from 'react'
import styled,{keyframes} from 'styled-components'
import { useHistory } from "react-router-dom";
import Calender from './Calender';


function CalenderModal({CalenderOpen}) {
    const history = useHistory();
    const onSubmitFunc = ()=>{
        history.push("/Page4");
    }
    return (
        <Fragment>
        <Layout CalenderOpen={CalenderOpen}>
<Title>결제일을 설정해주세요</Title>
<Calender/>
<ConfirmBtn onClick={onSubmitFunc}>확인</ConfirmBtn>
        </Layout>
        </Fragment>
    )
}

export default CalenderModal

const ConfirmBtn = styled.button`
outline:none;
cursor: pointer;
border:none;
color:#fff;
margin:18px auto 20px auto;
height: 48px;
width: 100%;
border-radius: 4px;
box-sizing:border-box;
background-color:#CECECE;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 23px;
letter-spacing: -0.06em;
text-align: center;

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
left:0px;
z-index:9998;
height:482px;
width: 100%;
padding:26px 16px 16px 16px;
background-color:white;
box-sizing:border-box;
visibility: ${props => props.CalenderOpen ? 'visible' : 'hidden'};
  animation: ${props => props.CalenderOpen ? FadeIn : Fadeout} 0.5s ease-out;
  transition: visibility 0.5s ease-out;

`