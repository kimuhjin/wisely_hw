import React, { Fragment } from 'react'
import styled from "styled-components"
import headerIcon from "../Icon/headerIcon.png"
import shoppingCart from "../Icon/shopping_cart.png"
import downBtnIcon from "../Icon/downBtn.png"
function Header() {
    return (
        <Fragment>
        <Layout>
        <LogoIcon/>
        </Layout>
        </Fragment>
    )
}

export default Header

const Layout = styled.div`
position:fixed;
z-index:9990;
margin: 0 auto;
top:0;
left: 0;
right: 0;
display:flex;
justify-content:center;
align-items:center;
max-width:414px;
height:60px;
border-bottom:1px solid #f5f5f5;
padding:0px 16px;
box-sizing:border-box;
background-color:#fff;
`

const LogoIcon = styled.div`
width:115.26px;
height:18px;
background-image:url(${headerIcon});
background-repeat:no-repeat;
background-size:100% auto;
background-position:center;
`