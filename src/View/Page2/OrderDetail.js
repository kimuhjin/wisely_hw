import React, { Fragment } from 'react'
import styled from 'styled-components'

function OrderDetail() {
    return (
        <Fragment>
        <PaymentInfo>
        <ShippingInfo>배송비
        <div>무료</div>
        </ShippingInfo>
        <PriceInfo>
        최종 결제 금액
        <div>8,900원</div>
        </PriceInfo>
        </PaymentInfo>
        <ConfirmBtn>주문하기</ConfirmBtn>
        <MoreInfoArea><div className="top">1.5만원 이상 무료 배송</div><div>평일 16시 이전 주문 시 당일 출고</div>
        </MoreInfoArea>
        </Fragment>
    )
}

export default OrderDetail
const MoreInfoArea = styled.div`
margin-top:16px;
width:100%;
text-align:center;
font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: 20px;
letter-spacing: -0.06em;
color:#979797;
.top{
    font-weight: 400;
}


`
const ConfirmBtn = styled.button`
outline:none;
cursor: pointer;
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
const PriceInfo = styled.div`
margin-top:8px;
display:flex;
justify-content:space-between;
align-items:center;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 21px;
letter-spacing: -0.06em;
text-align: left;
color: #3a3a3a;

`
const ShippingInfo = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: 21px;
letter-spacing: -0.06em;
text-align: left;
color: #979797;

`
const PaymentInfo = styled.div`
width:100%;
margin-top:24px;
padding:0px 12px;
box-sizing:border-box;
`