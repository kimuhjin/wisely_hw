import React, { Fragment } from 'react'
import styled,{keyframes} from 'styled-components'
import sampleImage from "../../Icon/면도기세트_네이비.png"


function HeaderSlide({HeaderSlideOpen}) {
    return (
        <Fragment>
        <Layout HeaderSlideOpen={HeaderSlideOpen}>
        <Item>
        <ThumbImage/>
        <ItemDisc>
        <div className="title">면도기 세트</div>
        <div className="disc">면도기 핸들+면도날 2개입</div>
        <PriceArea>
        <div className="period">이번만 구매</div>
        <div className="price">8,900원</div>
        </PriceArea>
        </ItemDisc>
        </Item>
        <PriceDetailArea>
        <div className="priceArea">
        <div className="priceTitle">상품금액</div>
        <div className="price">13,500원</div>
        </div>
        <div className="shipArea">
        <div className="shipTitle">배송비</div>
        <div className="ship">무료</div>
        </div>
        <div className="totalArea">
        <div className="totalTitle">총 결제 예정 금액</div>
        <div className="total">13,500원</div>
        </div>
        </PriceDetailArea>
        </Layout>
        </Fragment>
    )
}

export default HeaderSlide
const PriceDetailArea = styled.div`
width:100%;
padding:26px;
box-sizing:border-box;
.priceArea{
    font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: 20px;
letter-spacing: -0.06em;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#3A3A3A;
}
.shipArea{
    font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: 20px;
letter-spacing: -0.06em;
    margin-top:6px;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#3A3A3A;
}
.totalArea{
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 16px;
letter-spacing: -0.04em;
    margin-top:18px;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#3A3A3A;
}
`
const ThumbImage = styled.div`
margin-left:8px;
min-width:84px;
min-height:84px;
background-image:url(${sampleImage});
background-repeat:no-repeat;
background-size:100% auto;
background-position:center;
`
const Item = styled.div`
outline:none;
cursor: pointer;
display:flex;
justify-content:flex-start;
align-items:center;
font-family: SpoqaHanSans;
margin-bottom:12px;
height: 120px;
width: 100%;
padding:12px 26px;
box-sizing:border-box;
border-bottom:1px solid #EFEFEF;
`
const PriceArea = styled.div`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
`
const ItemDisc = styled.div`
width:100%;
margin-left:20px;
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
.period{
    font-size:14px;
    color:#0F5783;
letter-spacing: -0.06em;
}
.price{
    font-size:14px;
    color:#3a3a3a;
letter-spacing: -0.06em; 
}
`
const FadeIn = () => keyframes`
from{
    transform:translateY(-500px);
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
    transform:translateY(-500px);
}
`;
const Layout = styled.div`
font-family: SpoqaHanSans;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
position:absolute;
top:0px;
left:0px;
z-index:9998;
min-height: 200px;
width: 100%;
padding:60px 0px 0px 0px;
background-color:white;
box-sizing:border-box;
visibility: ${props => props.HeaderSlideOpen ? 'visible' : 'hidden'};
  animation: ${props => props.HeaderSlideOpen ? FadeIn : Fadeout} 0.5s ease-out;
  transition: visibility 0.5s ease-out;

`