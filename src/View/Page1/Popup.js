import React, { Fragment,useState } from 'react'
import styled, { keyframes } from "styled-components"
import shaver_navy from "../../Icon/shaver_navy.png"
import shaver_blue from "../../Icon/shaver_blue.png"
import shaver_gray from "../../Icon/shaver_gray.png"
function Popup({PopupOpen}) {
    const [colorSelect, setColorSelect] = useState("#1e314a")
    console.log(PopupOpen)
    return (
        <Fragment>
        <PopupLayout PopupOpen={PopupOpen}>
<div className="title">면도기 색상을 선택해주세요</div>
<ShaverImage color={colorSelect}/>
<Select_Btn_Area>
<Select_Btn_Choose value="#1e314a" onClick={(e)=>setColorSelect(e.target.value)} color={colorSelect} >
<Select_Btn_Navy/>
</Select_Btn_Choose>
<Select_Btn_Choose value="#1888d9" onClick={(e)=>setColorSelect(e.target.value)}
color={colorSelect} >
<Select_Btn_Blue/>
</Select_Btn_Choose>
<Select_Btn_Choose value="#cecece" onClick={(e)=>setColorSelect(e.target.value)}
color={colorSelect} >
<Select_Btn_Gray/>
</Select_Btn_Choose>
</Select_Btn_Area>
{colorSelect==="#1e314a" &&(<ChooseColorTitle color="#000">미드나잇 네이비</ChooseColorTitle>)}
{colorSelect==="#1888d9" &&(<ChooseColorTitle color="#3A81C1">사파이어 블루</ChooseColorTitle>)}
{colorSelect==="#cecece" &&(<ChooseColorTitle color="#858585">슬레이트 그레이</ChooseColorTitle>)}

<ConfirmBtn>선택하기</ConfirmBtn>
        </PopupLayout>
        </Fragment>
    )
}

export default Popup

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
const ChooseColorTitle = styled.div`
width:100%;
margin:14px auto 0px auto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
letter-spacing: -0.06em;
text-align: center;
color:${props=>props.color};
`
const Select_Btn_Area = styled.div`
margin:0px auto;
margin-top:104px;
width:128px;
display:flex;
justify-content:space-between;
align-items:center;
`
const Select_Btn_Choose = styled.button`
outline:none;
background-color:transparent;
padding:0px;
display:flex;
justify-content:center;
align-items:center;
width:32px;
height:32px;
border:${(props)=>props.value === props.color ?`1px solid ${props.value}` : "none"};
border-radius:50%;
`

const Select_Btn_Gray = styled.div`
pointer-events:none;
width:24px;
height:24px;
background-color:#CECECE;
border-radius:50%;
`

const Select_Btn_Blue = styled.div`
pointer-events:none;
width:24px;
height:24px;
background-color:#1888D9;
border-radius:50%;
`
const Select_Btn_Navy = styled.div`
pointer-events:none;
width:24px;
height:24px;
background-color:#1E314A;
border-radius:50%;
`
const ConfirmBtn = styled.button`
border:none;
color:#fff;
margin:18px auto 20px auto;
height: 48px;
width: 328px;
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
const ShaverImage = styled.div`
margin-top:107.03px;
width:321.12px;
height:66.79px;
${props => {
    if (props.color==="#1e314a") {
      return `
      background-image:url(${shaver_navy})
    `
    } else if (props.color==="#1888d9") {
      return `
      background-image:url(${shaver_blue})
    `
    } else if(props.color==="#cecece") {
      return `
      background-image:url(${shaver_gray})
    `
    }
  }};
background-repeat:no-repeat;
background-size:100% auto;
background-position:center;

`
const PopupLayout = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
position:absolute;
bottom:0px;
left:0px;
z-index:999;
height: 476px;
width: 100%;
background-color:white;
box-sizing:border-box;
.title{
margin-left: 16px;
margin-top: 24px;
font-size: 26px;
font-style: normal;
font-weight: 300;
line-height: 26px;
letter-spacing: -0.06em;
text-align: left;
}
visibility: ${props => props.PopupOpen ? 'visible' : 'hidden'};
  animation: ${props => props.PopupOpen ? FadeIn : Fadeout} 0.5s ease-out;
  transition: visibility 0.5s ease-out;

`