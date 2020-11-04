import React, { Fragment,useState } from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import closeBtn from "../../Icon/closeBtn.png"
import plusBtn from "../../Icon/plusBtn.png"
import minusBtn from "../../Icon/minusBtn.png"
import OrderDetail from './OrderDetail'
import AdditionalProduct from './AdditionalProduct'
import Header from '../Header';
import { useSelector,useDispatch } from "react-redux";
import {ItemDel} from "../../_actions/item_actions";
function Page2() {
    const [ProductAmount, setProductAmount] = useState(0)
    const history = useHistory();
    const dispatch = useDispatch();
    const SelectedItem = useSelector((state) => state.item);
    const onDelFunc = (e)=>{
        if(SelectedItem.length===1){
            history.push("/");
        }
        const delItem = SelectedItem.filter((data)=>Number(data.id)!==Number(e.target.value))
        console.log(delItem)
        dispatch(ItemDel(delItem));
    }
    const RenderItem = SelectedItem.map((data,index)=>{
        return(
            <Fragment key={index}>
            <Item>
        <ThumbImage src={data.img_src}/>
        <ItemDisc>
        <div className="title">{data.title}</div>
        <div className="discArea">
        {data.color &&(
            <Fragment>
        <div className="color">{data.color}</div> &nbsp;
        </Fragment>
        )}
        <div className="disc">{data.disc}</div>
        </div>
        <PriceArea>
        <div className="price">{data.price.toLocaleString()}</div>
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
        <CloseBtn value={data.id} onClick={onDelFunc}/>
        </Item>
            </Fragment>
        )
    })
    
    return (
        <Fragment>
        <Header/>
        <Layout>
        {RenderItem}
        <OrderDetail/>
        <AdditionalProduct SelectedItem={SelectedItem}/>
        </Layout>
        </Fragment>
    )
}

export default Page2
const CloseBtn = styled.button`
border:none;
background-color:transparent;
outline:none;
position:relative;
right:12px;
top:-45px;
min-width:12px;
min-height:12px;
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
padding:0px 16px;
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
.discArea{
    width:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin-bottom:8px;
}
.disc{
    font-size:12px;
    color:#979797;
}
.color{
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 17px;
letter-spacing: -0.04em;
color:#122141;
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
background-image:url(${props=>props.src});
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