import React, { Fragment } from 'react'
import styled from "styled-components"
import headerIcon from "../Icon/headerIcon.png"
import shoppingCart from "../Icon/shopping_cart.png"
import { useSelector} from "react-redux";
function ShopHeader({HeaderSlideControl}) {
    const SelectedItem = useSelector((state) => state.item);
    const PriceAmount = SelectedItem.reduce((prev, curr) => prev + (curr.amount*curr.price), 0);
    const ItemAmount = SelectedItem.reduce((prev, curr) => prev + (curr.amount), 0);
    return (
        <Fragment>
        <Layout>
        <LogoIcon/>
        <ShoppingCartArea onClick={HeaderSlideControl}>
        <ShoppingCartIcon>
        <div className="amount">{ItemAmount}</div>
        </ShoppingCartIcon>
        <PriceArea>
        <div className="won">₩</div>
        <div className="price">{PriceAmount.toLocaleString()}</div>
        </PriceArea>
        <DownBtn/>
        </ShoppingCartArea>
        </Layout>
        </Fragment>
    )
}

export default ShopHeader
const ShoppingCartArea = styled.div`
cursor: pointer;
display:flex;
justify-content:center;
align-items:center;
`
const DownBtn = styled.div`
min-height: 24px;
min-width: 24px;
background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg transform='scale(1, 1)'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M17.6255 9.35267L12.0026 14.6474L6.3745 9.35267' stroke='%231C1C1C' stroke-width='1' stroke-miterlimit='10' stroke-linecap='square'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='12' height='6' fill='white' transform='translate(18 15) rotate(180)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/g%3E%3C/svg%3E");
background-repeat:no-repeat;
background-size:100% auto;
background-position:center;
`
const PriceArea = styled.div`
width:100%;
margin-left:16px;
display:flex;
justify-content:center;
align-items:center;
font-family: SpoqaHanSans;
font-style: normal;
letter-spacing: -0.025em;
.won{
font-size: 12px;
font-weight: 300;
line-height: 12px;
}
.price{    
font-size: 16px;
font-weight: 400;
line-height: 16px;
}
`
const Layout = styled.div`
position:fixed;
z-index:9999;
margin: 0 auto;
top:0;
left: 0;
right: 0;
display:flex;
justify-content:space-between;
align-items:center;
max-width:414px;
height:60px;
border-bottom:1px solid #f5f5f5;
padding:0px 16px;
box-sizing:border-box;
background-color:#fff;
`

const ShoppingCartIcon = styled.div`
min-height: 28px;
min-width: 30.333332061767578px;
background-image:url(${shoppingCart});
background-repeat:no-repeat;
background-size:100% auto;
background-position:center;
.amount{
    font-family: SpoqaHanSans;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 12px;
letter-spacing: -0.04em;
position:relative;
top:3px;
left:17px;
color:#FFC01E;
}
`
const LogoIcon = styled.div`
width:115.26px;
height:18px;
background-image:url(${headerIcon});
background-repeat:no-repeat;
background-size:100% auto;
background-position:center;
`