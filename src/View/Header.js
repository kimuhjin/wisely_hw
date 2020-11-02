import React, { Fragment } from 'react'
import styled from "styled-components"
import LogoImage from "../Icon/headerIcon.png"
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
top:0;
left:0;
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:60px;
border-bottom:1px solid #f5f5f5;
`
const LogoIcon = styled.div`
width:115.26px;
height:18px;
background-image:url(${LogoImage});
background-repeat:no-repeat;
background-size:100% auto;
background-position:center;
`