import React,{ Fragment } from 'react';
import styled from "styled-components"
import './App.css';
import Header from './View/Header';
import Page1 from "./View/Page1/"

function App() {
  return (
   <Fragment>
   <Layout>
   <Header/>
   <PageViewLayout>
   <Page1/>
   </PageViewLayout>
   </Layout>
   </Fragment>
  );
}

export default App;
const Layout = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
`

const PageViewLayout = styled.div`
width:100;
/* margin-top:60px; */
`

