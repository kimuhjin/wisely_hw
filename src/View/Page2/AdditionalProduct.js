import React, { Fragment,useState } from 'react'
import styled,{ keyframes }from "styled-components"

import addBtnImage from "../../Icon/addBtn.png"
import { useDispatch } from "react-redux";

import {Dummy} from "../../ItemInfo"
import Popup from '../Page1/Popup'
import {ItemAdd} from "../../_actions/item_actions";
function AdditionalProduct({SelectedItem}) {
    const [PopupOpen, setPopupOpen] = useState(false)
    const [Shaver, setShaver] = useState([])
    const dispatch = useDispatch();
    
    const AddItemFunc = (e)=>{
        if(Number(e.target.value)===Number(1)){
            const getItem = Dummy.filter((data)=>Number(data.id)===Number(e.target.value))
            setPopupOpen(!PopupOpen)
            setShaver(getItem)
        }else{
            const getItem = Dummy.filter((data)=>Number(data.id)===Number(e.target.value))
            dispatch(ItemAdd(getItem));
        }
        
    }
    const filteredNonSelected = Dummy.filter((data) => !SelectedItem.includes(data));
    const RenderAdditionalItem = filteredNonSelected.map((data,index)=>{
        return(
            <Fragment key={index}>
            <Item value={data.id} onClick={AddItemFunc}>
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
        <Title>함께하면 더 현명한 습관</Title>
        <ItemContainer>
        {RenderAdditionalItem}
        </ItemContainer>
        <Fragment>
        <BackGroundLayer PopupOpen={PopupOpen}>
        <BackGround onClick={()=>setPopupOpen(!PopupOpen)}/>
        </BackGroundLayer>
        <Popup PopupOpen={PopupOpen} Shaver={Shaver} setPopupOpen={setPopupOpen}/>
        </Fragment>
        </Layout>
        </Fragment>


    )
}

export default AdditionalProduct
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
z-index:9998;
bottom:0px;
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
const ItemContainer = styled.div`
margin-top:18px;
width:100%;
`
const Item = styled.button`
background-color:transparent;
outline:none;
cursor: pointer;
display:flex;
justify-content:flex-start;
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
const Layout = styled.div`
width:100%;
margin-top:46px;
`
const Title = styled.div`
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 23px;
letter-spacing: -0.06em;
text-align: center;
width:100%;
color: #0F5783;
`