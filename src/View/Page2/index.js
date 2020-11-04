import React, { Fragment,useState } from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import sampleImage from "../../Icon/sample.png"
import closeBtn from "../../Icon/closeBtn.png"
import plusBtn from "../../Icon/plusBtn.png"
import minusBtn from "../../Icon/minusBtn.png"
import OrderDetail from './OrderDetail'
import AdditionalProduct from './AdditionalProduct'
import Header from '../Header';

function Page2() {
    const [ProductAmount, setProductAmount] = useState(0)
    const history = useHistory();
    const onDelFunc = ()=>{
        history.push("/");
    }
    return (
        <Fragment>
        <Header/>
        <Layout>
        <Item>
        <ThumbImage/>
        <ItemDisc>
        <div className="title">면도기 세트</div>
        <div className="disc">면도기 핸들+면도날 2개입</div>
        <PriceArea>
        <div className="price">8,900원</div>
        <AmountSelectorBox>
        <div className="minusBtn" onClick={()=>setProductAmount(ProductAmount-1)}>
        <div className="minus"/>
        </div>
        <div className="number">{ProductAmount}</div>
        <div className="plusBtn" onClick={()=>setProductAmount(ProductAmount+1)}>
        <div className="plus"/></div>
        </AmountSelectorBox>
        </PriceArea>
        </ItemDisc>
        <CloseBtn onClick={onDelFunc}/>
        </Item>
        <OrderDetail/>
        <AdditionalProduct/>
        </Layout>
        </Fragment>
    )
}

export default Page2
const CloseBtn = styled.div`
outline:none;
position:absolute;
right:26px;
top:90px;
width:12px;
height:12px;
background-image:url(${closeBtn});
background-repeat:no-repeat;
background-size:100% auto;
background-position:center;
`
const AmountSelectorBox = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:84px;
height:28px;
border: 1px solid #CECECE;
box-sizing: border-box;
border-radius:2px;
.plus{
    pointer-events:none;
width:6px;
height:6px;
background-image:url(${plusBtn});
background-repeat:no-repeat;
background-size:100% auto;
background-position:center;
}
.minusBtn{
    cursor: pointer;
    display:flex;
justify-content:center;
align-items:center;
width:28px;
height:26px;
}
.plusBtn{
    cursor: pointer;
    display:flex;
justify-content:center;
align-items:center;
width:28px;
height:26px;  
}
.minus{
    pointer-events:none;
width:6px;
height:6px;
background-image:url(${minusBtn});
background-repeat:no-repeat;
background-size:100% auto;
background-position:center;
}
.number{
    padding-top:2px;
display:flex;
justify-content:center;
align-items:center;
width:28px;
height:26px;
border-right:1px solid #CECECE;
border-left:1px solid #CECECE;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 12px;
letter-spacing: -0.04em;
color:#7A7A7A;
box-sizing:border-box;
}
`
const Layout = styled.div`
font-family: SpoqaHanSans;
width:100%;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
margin-top:60px;
padding:0px 15px;
box-sizing:border-box;
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
.price{
    font-size:14px;
    color:#0F5783;
letter-spacing: -0.04em;



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
height: 140px;
width: 100%;
padding:12px 16px 12px 16px;
box-sizing:border-box;
border-bottom:1px solid #EFEFEF;

`