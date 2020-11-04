import React, { Fragment } from 'react'
import styled from 'styled-components'
import sampleImage from "../../Icon/sample.png"
import addBtnImage from "../../Icon/addBtn.png"
function AdditionalProduct() {
    return (
        <Fragment>
        <Layout>
        <Title>함께하면 더 현명한 습관</Title>
        <ItemContainer>
        <Item >
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
        <Item >
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
        </ItemContainer>
        </Layout>
        </Fragment>


    )
}

export default AdditionalProduct
const ItemContainer = styled.div`
margin-top:18px;
width:100%;
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
width: 328px;
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
const Layout = styled.div`
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