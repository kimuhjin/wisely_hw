import React, { Fragment,useState } from 'react'
import styled,{ keyframes }from "styled-components"
import DayOnce from "../../Icon/하루에 여러번.png"
import DayOnce_dis from "../../Icon/하루에 여러번-1.png"
import DayMuch from "../../Icon/하루에 한 번.png"
import DayMuch_dis from "../../Icon/하루에 한 번-1.png"
import TwoDayOnce from "../../Icon/2~3일에 한 번.png"
import TwoDayOnce_dis from "../../Icon/2~3일에 한 번-1.png"
import ShopHeader from '../ShopHeader'
import HeaderSlide from './HeaderSlide'
import CalenderModal from './CalenderModal'
import { useSelector,useDispatch } from "react-redux";
import PeriodComponent from './PeriodComponent'
function Page3() {

const [HeaderSlideOpen, setHeaderSlideOpen] = useState(false)
const [CalenderOpen, setCalenderOpen] = useState(false)
const [SelectPeriod, setSelectPeriod] = useState("")
const [SlideOpen, setSlideOpen] = useState(false)
const [SlideTarget, setSlideTarget] = useState("")
const SelectedItem = useSelector((state) => state.item);
const SlideOpenFunc = (e)=>{
    setSlideTarget(e.target.value)
    setSlideOpen(!SlideOpen)
}
const RenderItemPeriod = SelectedItem.map((data,index)=>{
    return(
        <Fragment key={index}>
        <PeriodSelectorBox value= {data.id} onClick={SlideOpenFunc}>
        <div className="title">{data.title} 주기</div>
        <RightSide>
        <BestText>
        <div className="text">BEST</div></BestText>
        <div className="period">8주에 한 번</div>
        <DownBtn onClick={()=>setSlideOpen(!SlideOpen)}/>
        </RightSide>
        </PeriodSelectorBox>
{SlideTarget==data.id &&(
        <PeriPeriodSelectArea SlideOpen={SlideOpen}>
        <PeriodDetailSelectorBox value="4" onClick={(e)=>setSelectPeriod(e.target.value)} checkClick={SelectPeriod}>
        <FaceIcon iconUrl={DayOnce_dis}/>
        <div className="text">4주에 한 번</div>
        </PeriodDetailSelectorBox>

        <PeriodDetailSelectorBox value="8" onClick={(e)=>setSelectPeriod(e.target.value)} checkClick={SelectPeriod}>
        <FaceIcon iconUrl={DayMuch_dis}/>
        <div className="text">8주에 한 번</div>
        </PeriodDetailSelectorBox>

        <PeriodDetailSelectorBox value="12" onClick={(e)=>setSelectPeriod(e.target.value)} checkClick={SelectPeriod}>
        <FaceIcon iconUrl={TwoDayOnce_dis}/>
        <div className="text">12주에 한 번</div>
        </PeriodDetailSelectorBox>

        <PeriodDetailSelectorBox value="16" onClick={(e)=>setSelectPeriod(e.target.value)} checkClick={SelectPeriod}>
        <FaceIcon iconUrl={TwoDayOnce_dis}/>
        <div className="text">16주에 한 번</div>
        </PeriodDetailSelectorBox>
        </PeriPeriodSelectArea>
        )}
        </Fragment>
    )
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

        {/* ---------------- */}
        <ConfirmBtn onClick={()=>setCalenderOpen(!CalenderOpen)}>다음</ConfirmBtn>
        </Layout>
        <DateInfo>
        <div className="next">
        <div className="nextTitle">다음 결제 예정일</div>
        <div className="nextDate">12월 31일 월요일</div>
        </div>
        <div className="after">
        <div className="afterTitle">이후 결제 예정일</div>
        <div className="afterDate">3월 31일 수요일</div>
        </div>
        </DateInfo>
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
    opacity:0

}
to {
    opacity:1
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
const PeriPeriodSelectArea = styled.div`
display: ${props => props.SlideOpen ? '' : 'none'};
visibility: ${props => props.SlideOpen ? 'visible' : 'hidden'};
animation: ${props => props.SlideOpen ? FadeIn : Fadeout} 0.4s ease-in ;
transition: visibility 0.4s ease-in;
margin-bottom:10px;
`
const FaceIcon = styled.div`
pointer-events:none;
width: 50px;
height: 50px;
background-image:url(${props=>props.iconUrl});
background-repeat:no-repeat;
background-size:100% auto;
background-position:center;
`
const PeriodDetailSelectorBox = styled.button`

cursor: pointer;
outline:none;
display:flex;
justify-content:space-between;
align-items:center;
margin-top:10px;
height: 60px;
width: 100%;
padding:0px 52px 0px 30px;
border: ${props=>props.checkClick===props.value ? "1px solid #0055B8":"1px solid #EBEBEB"};
box-sizing: border-box;
border-radius: 4px;
background-color:#fff;
.text{
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 21px;
letter-spacing: -0.06em;
text-align: right;
color:#0F5783;
}
`



const RightSide = styled.div`
pointer-events:none;
width:160px;
display:flex;
justify-content:space-between;
align-items:center;
`
const DownBtn = styled.div`
height: 24px;
width: 24px;
background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg transform='scale(1, 1)'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M17.6255 9.35267L12.0026 14.6474L6.3745 9.35267' stroke='%230055B8' stroke-width='1' stroke-miterlimit='10' stroke-linecap='square'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='12' height='6' fill='white' transform='translate(18 15) rotate(180)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/g%3E%3C/svg%3E");
background-repeat:no-repeat;
background-size:100% auto;
background-position:center;
`

const BestText = styled.div`
pointer-events:none;
width: 48px;
height: 18px;
display:flex;
justify-content:center;
align-items:center;
background-color:#0F5783;
border-radius: 2px;
.text{
/* margin-top:3px; */
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 12px;
letter-spacing: -0.025em;
color:#FCFCFC;
}

`
const PeriodSelectorBox = styled.button`
outline:none;
cursor: pointer;
display:flex;
justify-content:space-between;
align-items:center;
height: 60px;
width: 100%;
border-radius: 4px;
background-color:#F8F8F8;
padding:0px 18px;
border:1px solid transparent;
box-sizing:border-box;
margin-bottom:10px;
.title{
    pointer-events:none;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
letter-spacing: -0.04em;
text-align: left;
color: #5F5F5F;
}
.period{
    pointer-events:none;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 21px;
letter-spacing: -0.06em;
color:#0F5783;}
`
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
const BackGroundLayer = styled.div`
position:absolute;
top:0px;
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

const DateInfo = styled.div`
margin-top:39px;
width:100%;
padding:23px 26px;
box-sizing:border-box;
border-top:1px solid #EFEFEF;
.next{
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:7px;
.nextTitle{
font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: 20px;
letter-spacing: -0.06em;
text-align: left;
color:#979797;

}.nextDate{
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 21px;
letter-spacing: -0.06em;
text-align: right;
color:#0055B8;

}
}
.after{
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    .afterTitle{
font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: 20px;
letter-spacing: -0.06em;
text-align: left;
color:#979797;

}.afterDate{
    
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 21px;
letter-spacing: -0.06em;
text-align: right;
color:#3A3A3A;

}
    
}
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