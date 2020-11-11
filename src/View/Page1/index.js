import React, { Fragment,useState } from 'react'
import styled,{ keyframes }from "styled-components"
import addBtnImage from "../../Icon/addBtn.png"
import { useHistory } from "react-router-dom";
import Popup from './Popup'
import Header from '../Header'
import {Dummy} from "../../ItemInfo"
import { useDispatch } from "react-redux";
import {ItemAdd} from "../../_actions/item_actions";
function Page1() {
    const [PopupOpen, setPopupOpen] = useState(false)
    const [Shaver, setShaver] = useState([])
    const history = useHistory();
    const dispatch = useDispatch();
    const ClickBtn = (e)=>{
        const getItem = Dummy.filter((data)=>Number(data.id)===Number(e.target.value))
        if(getItem[0].shaver){
            setPopupOpen(!PopupOpen)
            setShaver(getItem)
        }
        else{
            history.push("/Page2");
            dispatch(ItemAdd(getItem));
        }
    }
    const RenderItem = Dummy.map((data,index)=>{
        return(
            <Fragment key={index}>
            <Item value={data.id} onClick={ClickBtn}>
            <ThumbImage src={data.img_src}/>
            <ItemDisc>
        <div className="title">{data.title}</div>
        <div className="disc">{data.disc}</div>
        <PriceArea>
        <div className="price">{data.price.toLocaleString()}원</div>
        {data.free_ship &&(<FreeShipping>무료배송</FreeShipping>)}
        </PriceArea>
        </ItemDisc>
        <AddBtn />
        </Item>
            </Fragment>
        )
    })
    return (
        <Fragment>
        <Layout>
        <Header/>
        <Disc>장바구니가 비어있습니다<br/>상품을 추가해주세요</Disc>
        <ItemLayout>
        {RenderItem}
        </ItemLayout>
            <Fragment>
            <BackGroundLayer PopupOpen={PopupOpen}>
            <BackGround onClick={()=>setPopupOpen(!PopupOpen)}/>
            </BackGroundLayer>
            <Popup PopupOpen={PopupOpen} Shaver={Shaver}/>
            </Fragment>
            </Layout>
        </Fragment>
    )
}

export default Page1
const ItemLayout = styled.div`
width:100%;
padding:0px 16px;
box-sizing:border-box;
`
const Layout = styled.div`
width:100%;
min-height:620px;
padding:0px;
box-sizing:border-box;
background-color:#fff;
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
display:flex;
justify-content:center;
align-items:center;
position:absolute;
z-index:9998;
bottom:0px;
/* left:0px; */
width:414px;
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
const AddBtn = styled.button`
pointer-events:none;
min-width:38px;
min-height:38px;
border:none;
background-color:transparent;
background-image:url(${addBtnImage});
background-repeat:no-repeat;
background-size:100% auto;
background-position:center;
`
const ItemDisc = styled.div`
pointer-events:none;
width:100%;
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
pointer-events:none;
margin:0px 8px;
min-width:84px;
min-height:84px;
background-image:url(${props=>props.src});
background-repeat:no-repeat;
background-size:100% auto;
background-position:center;
`
const Disc = styled.div`
margin:118px 0px 58px 0px;
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: 23px;
letter-spacing: -0.06em;
text-align: center;
`
const Item = styled.button`
background-color:transparent;
outline:none;
cursor: pointer;
display:flex;
justify-content:flex-start;
align-items:center;
margin-bottom:12px;
height: 108px;
width: 100%;
padding:12px 16px 12px 22px;
box-sizing:border-box;
border-radius: 4px;
border:1px solid #FCFCFC;
box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.08);
`

