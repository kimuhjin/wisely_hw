import React, { Fragment,useState } from 'react'
import styled,{ keyframes }from "styled-components"
import ShopHeader from '../ShopHeader'
import HeaderSlide from './HeaderSlide'
import CalenderModal from './CalenderModal'
import { useSelector } from "react-redux";
import PeriodComponent from './PeriodComponent'
import CalcDate from "../Page3/CalcDate"
function Page3() {
const [HeaderSlideOpen, setHeaderSlideOpen] = useState(false)
const [CalenderOpen, setCalenderOpen] = useState(false)
const [RefillPeriod, setRefillPeriod] = useState("8")

const SelectedItem = useSelector((state) => state.item);
const SortSelectedItem = SelectedItem.filter((x) => x.id === 2).concat(SelectedItem.filter((x) => x.id !== 2))

const RenderItemPeriod = SortSelectedItem.map((data,index)=>{
    if(data.id !==1){
        return(
            <Fragment key={index}>
            <PeriodComponent data={data} RefillPeriod={RefillPeriod} setRefillPeriod={setRefillPeriod}
            SelectedItem={SelectedItem}
            className={`Period${data.id}`}
            />
            </Fragment>
        )
    }
})
const HeaderSlideControl = ()=>{
    setHeaderSlideOpen(!HeaderSlideOpen)
}
    return (
        <Fragment>
        <ShopHeader HeaderSlideControl={HeaderSlideControl} SelectedItem={SelectedItem}/>
        <Layout>
        <Title>배송 주기를 선택해주세요</Title>
        {/* ---------------- */}
        {RenderItemPeriod}
        <CalcDate SelectedItem={SelectedItem}/>
        {/* ---------------- */}
        <ConfirmBtn onClick={()=>setCalenderOpen(!CalenderOpen)}>다음</ConfirmBtn>
        </Layout>
        <Fragment>
            <BackGroundLayer HeaderSlideOpen={HeaderSlideOpen}>
            <BackGround onClick={HeaderSlideControl}/>
            </BackGroundLayer>
            <ShopHeader HeaderSlideControl={HeaderSlideControl}/>
            <HeaderSlide HeaderSlideOpen={HeaderSlideOpen} SelectedItem={SelectedItem}/>
            </Fragment>
            <Fragment>
            <BackGroundLayer_Calender CalenderOpen={CalenderOpen}>
            <BackGround onClick={()=>setCalenderOpen(!CalenderOpen)}/>
            </BackGroundLayer_Calender>
            <CalenderModal CalenderOpen={CalenderOpen}/>
            </Fragment>
        </Fragment>
    )
}

export default Page3
const FadeIn = () => keyframes`
from {
    transform:translateX(500px);

}
to {
    transform:translateX(0px);
}
`;
const Fadeout = () => keyframes`
from {
    opacity:1
    transform:translateY(0px);
}
to {
    transform:translateY(-500px);
    opacity:0
}
`;
const HeaderFadeIn = () => keyframes`
from {
    opacity:0
}
to {
    opacity:0.5
}
`;
const HeaderFadeout = () => keyframes`
from {
    opacity:0.5
}
to {
    opacity:0
}
`;
const Container = styled.div`
width:100%;
animation : ${FadeIn} 1s ease-in;
`
const BackGroundLayer = styled.div`
position:absolute;
top:0px;
z-index:9988;
left:0px;
width:100%;
height:100%;
opacity:0.5;
background-color: #808080;
visibility: ${props => props.HeaderSlideOpen ? 'visible' : 'hidden'};
animation: ${props => props.HeaderSlideOpen ? HeaderFadeIn : HeaderFadeout} 0.5s linear;
transition: visibility 0.5s linear;
`
const BackGroundLayer_Calender = styled.div`
position:absolute;
z-index:9998;
top:0px;
left:0px;
width:100%;
height:100%;
opacity:0.5;
background-color: #808080;
visibility: ${props => props.CalenderOpen ? 'visible' : 'hidden'};
animation: ${props => props.CalenderOpen ? HeaderFadeIn : HeaderFadeout} 0.5s linear;
transition: visibility 0.5s linear;
`
const BackGround = styled.div`
width:100%;
height:100%;
`
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
background-color:#0055B8;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 23px;
letter-spacing: -0.06em;
text-align: center;
`

const Layout = styled.div`
font-family: SpoqaHanSans;
margin-top:86px;
width:100%;
padding:0px 16px;
box-sizing:border-box;


`
const Title = styled.div`
margin-bottom:24px;
font-size: 26px;
font-style: normal;
font-weight: 300;
line-height: 26px;
letter-spacing: -0.06em;
text-align: left;
color:#1E314A;
`