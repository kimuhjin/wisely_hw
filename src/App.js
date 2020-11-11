import React,{ Fragment } from 'react';
import styled from "styled-components"
import './App.css';
import IphoneImage from "./Icon/IPhone6.png"
import Page1 from "./View/Page1/"
import Page2 from "./View/Page2/"
import Page3 from "./View/Page3/"
import Page4 from "./View/Page4/"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
function App() {
  return (
   <Fragment>
   <BG>
   <Layout>
   <PageViewLayout>
   <BrowserRouter basename={process.env.PUBLIC_URL}>
   <ScrollToTop/>
      <Switch>
        <Route exact path="/" component={Page1} />
        <Route exact path="/Page2" component={Page2} />
        <Route exact path="/Page3" component={Page3} />
        <Route exact path="/Page4" component={Page4} />
      </Switch>
    </BrowserRouter>
   </PageViewLayout>
   </Layout>
   </BG>
   </Fragment>
  );
}

export default App;
const BG = styled.div`
width:100%;
height:100%;
background-color:black;
`
const Layout = styled.div`
max-width:414px;
height:100%;
display:flex;
justify-content:flex-start;
align-items:flex-start;
margin: 0 auto;
box-sizing:border-box;
background-color:#fff;
overflow:scroll;
`

const PageViewLayout = styled.div`
width:100%;
/* max-width:414px; */
box-sizing:border-box;

`

