import React, { Fragment,useEffect,useState } from 'react'
import styled,{ keyframes }from "styled-components"
import DayOnce from "../../Icon/하루에 여러번.png"
import DayOnce_dis from "../../Icon/하루에 여러번-1.png"
import DayMuch from "../../Icon/하루에 한 번.png"
import DayMuch_dis from "../../Icon/하루에 한 번-1.png"
import TwoDayOnce from "../../Icon/2~3일에 한 번.png"
import TwoDayOnce_dis from "../../Icon/2~3일에 한 번-1.png"
function PeriodComponent({data,RefillPeriod,setRefillPeriod}) {
useEffect(() => {
    setSelectPeriod(RefillPeriod)
}, [RefillPeriod])
const [SelectPeriod, setSelectPeriod] = useState(RefillPeriod)
const [SlideOpen, setSlideOpen] = useState(false)

const ClickPeriodSelectFunc = (e)=>{
    if(data.id===2){
        setRefillPeriod(e.target.value)
    }
    setSelectPeriod(e.target.value)
    setSlideOpen(!SlideOpen)
}

    return (
        <Fragment>
        <PeriodSelectorBox onClick={()=>setSlideOpen(!SlideOpen)}>
        <div className="title">{data.title} 주기</div>
        <RightSide>
        <BestText>
        <div className="text">BEST</div></BestText>

        <div className="period">{SelectPeriod}주에 한 번</div>

        <DownBtn onClick={()=>setSlideOpen(!SlideOpen)}/>
        </RightSide>
        </PeriodSelectorBox>

        <PeriPeriodSelectArea SlideOpen={SlideOpen}>
        <PeriodDetailSelectorBox value="4" onClick={ClickPeriodSelectFunc} checkClick={SelectPeriod}
        checkVisible={RefillPeriod} id_={data.id}
        >
        <FaceIcon iconUrl={SelectPeriod==="4" ?DayOnce: DayOnce_dis}/>
        <div className="text">4주에 한 번</div>
        </PeriodDetailSelectorBox>

        <PeriodDetailSelectorBox value="8" onClick={ClickPeriodSelectFunc} checkClick={SelectPeriod}
        checkVisible={RefillPeriod} id_={data.id}
        >
        <FaceIcon iconUrl={SelectPeriod==="8" ?DayMuch:DayMuch_dis}/>
        <div className="text">8주에 한 번</div>
        </PeriodDetailSelectorBox>

        <PeriodDetailSelectorBox value="12" onClick={ClickPeriodSelectFunc} checkClick={SelectPeriod}
        checkVisible={RefillPeriod} id_={data.id}
        >
        <FaceIcon iconUrl={SelectPeriod==="12" ?TwoDayOnce:TwoDayOnce_dis}/>
        <div className="text">12주에 한 번</div>
        </PeriodDetailSelectorBox> 

        <PeriodDetailSelectorBox value="16" onClick={ClickPeriodSelectFunc} checkClick={SelectPeriod}
        checkVisible={RefillPeriod} id_={data.id}
        >
        <FaceIcon iconUrl={SelectPeriod==="16" ?TwoDayOnce:TwoDayOnce_dis}/>
        <div className="text">16주에 한 번</div>
        </PeriodDetailSelectorBox>

        <PeriodDetailSelectorBox value="24" onClick={ClickPeriodSelectFunc} checkClick={SelectPeriod}
        checkVisible={RefillPeriod} id_={data.id}
        >
        <FaceIcon iconUrl={SelectPeriod==="24" ?TwoDayOnce:TwoDayOnce_dis}/>
        <div className="text">24주에 한 번</div>
        </PeriodDetailSelectorBox>
        </PeriPeriodSelectArea>
        </Fragment>
    )
}

export default PeriodComponent

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
${props => {
    if (props.id_ !== 2){
        if (props.checkVisible==props.value) {
      return `
      display:flex
    `
    } else if (props.value==Number(props.checkVisible)*2) {
      return `
      display:flex
    `
    } else if(props.value==Number(props.checkVisible)*4) {
      return `
      display:flex
    `
    }else {
        return `
      display:none
    `
    }
    }
    else{
        return `display:flex`
    }
  }};

cursor: pointer;
outline:none;
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
    pointer-events:none;
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
margin-top:3px;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 12px;
letter-spacing: -0.025em;
color:#FCFCFC;
}

`
const PeriodSelectorBox = styled.div`
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
box-sizing:border-box;
margin-bottom:10px;
.title{
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
letter-spacing: -0.04em;
text-align: left;
color: #5F5F5F;
}
.period{
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 21px;
letter-spacing: -0.06em;
color:#0F5783;}
`