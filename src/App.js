import React,{ Fragment } from 'react';
import styled from "styled-components"
import './App.css';
import Header from './View/Header';
import Page1 from "./View/Page1/"
import Page2 from "./View/Page2/"
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
   <Fragment>
   <Layout>
   <PageViewLayout>
   <BrowserRouter basename={process.env.PUBLIC_URL}>
   <Header/>
      <Switch>
        <Route exact path="/" component={Page1} />
        <Route exact path="/Cart" component={Page2} />
      </Switch>
    </BrowserRouter>
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
padding:0px 15px;
box-sizing:border-box;
`

const PageViewLayout = styled.div`
width:100%;
max-width:414px;
box-sizing:border-box;

`

