import React,{ Fragment } from 'react';
import styled from "styled-components"
import './App.css';
// import Header from './View/Header';
import Page1 from "./View/Page1/"
import Page2 from "./View/Page2/"
import Page3 from "./View/Page3/"
import Page4 from "./View/Page4/"
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
   <Fragment>
   <Layout>
   <PageViewLayout>
   <BrowserRouter basename={process.env.PUBLIC_URL}>
   
      <Switch>
        <Route exact path="/" component={Page1} />
        <Route exact path="/Page2" component={Page2} />
        <Route exact path="/Page3" component={Page3} />
        <Route exact path="/Page4" component={Page4} />
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

box-sizing:border-box;
`

const PageViewLayout = styled.div`
width:100%;
max-width:414px;
box-sizing:border-box;

`

