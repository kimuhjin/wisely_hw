import React, { Fragment,useState } from 'react'
import styled,{ keyframes }from "styled-components"
import sampleImage from "../../Icon/sample.png"
import addBtnImage from "../../Icon/addBtn.png"
import Popup from './Popup'
import { useHistory } from "react-router-dom";
import Header from '../Header'
function Page1() {
    const [PopupOpen, setPopupOpen] = useState(false)
    return (
        <Fragment>
        <Layout>
        <Header/>
        <Disc>장바구니가 비어있습니다<br/>상품을 추가해주세요</Disc>
        <Item onClick={()=>setPopupOpen(!PopupOpen)}>
        <ThumbImage/>
        <ItemDisc>
        <div className="title">면도기 세트</div>
        <div className="disc">면도기 핸들+면도날 2개입</div>
        <PriceArea>
        <div className="price">8,900원</div>
        <FreeShipping>무료배송</FreeShipping>
        </PriceArea>
        </ItemDisc>
        <AddBtn />
        </Item>
            <Fragment>
            <BackGroundLayer PopupOpen={PopupOpen}>
            <BackGround onClick={()=>setPopupOpen(!PopupOpen)}/>
            </BackGroundLayer>
            <Popup PopupOpen={PopupOpen}/>
            </Fragment>
            </Layout>
        </Fragment>
    )
}

export default Page1
const Layout = styled.div`
width:100%;
padding:0px 15px;
box-sizing:border-box;
`
const FadeIn = () => keyframes`
from {
    opacity:0
}
to {
    opacity:0.5
}
`;
const Fadeout = () => keyframes`
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
visibility: ${props => props.PopupOpen ? 'visible' : 'hidden'};
animation: ${props => props.PopupOpen ? FadeIn : Fadeout} 0.5s linear;
transition: visibility 0.5s linear;
`
const BackGround = styled.div`
width:100%;
height:100%;
`
const PriceArea = styled.div`
width:100%;
display:flex;
justify-content:flex-start;
align-items:center;
`
const FreeShipping = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-left:4px;
height: 20px;
width: 46px;
box-sizing:border-box;
border: 1px solid #0055B8;
font-size:10px;
color:#0055B8;
border-radius: 2px;


`
const AddBtn = styled.div`
width:38px;
height:38px;
background-image:url(${addBtnImage});
background-repeat:no-repeat;
background-size:100% auto;
background-position:center;
`
const ItemDisc = styled.div`
margin-right:15px;
font-style: normal;
font-weight: 400;
line-height: 16px;
letter-spacing: -0.06em;
text-align: left;
.title{
    font-size: 16px;
    color:#3A3A3A;
    margin-bottom:8px;
}
.disc{
    font-size:12px;
    color:#979797;
    margin-bottom:13px;
}
.price{
    font-size:14px;
    color:#0F5783;
letter-spacing: -0.04em;



}

`
const ThumbImage = styled.div`
margin-left:8px;
width:84px;
height:84px;
background-image:url(${sampleImage});
background-repeat:no-repeat;
background-size:100% auto;
background-position:center;
`
const Disc = styled.div`
margin:118px 0px 58px 0px;
font-family: SpoqaHanSans;
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: 23px;
letter-spacing: -0.06em;
text-align: center;
`
const Item = styled.div`
outline:none;
cursor: pointer;
display:flex;
justify-content:space-between;
align-items:center;
font-family: SpoqaHanSans;
margin-bottom:12px;
height: 108px;
width: 100%;
padding:12px 16px 12px 22px;
box-sizing:border-box;
border-radius: 4px;
border:1px solid #FCFCFC;
box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.08);
`

