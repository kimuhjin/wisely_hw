import React, { Fragment} from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'

import OrderDetail from './OrderDetail'
import AdditionalProduct from './AdditionalProduct'
import Header from '../Header';
import { useSelector,useDispatch } from "react-redux";
import {ItemDel} from "../../_actions/item_actions";

import Items from './Items';
function Page2() {
    const history = useHistory();
    const dispatch = useDispatch();
    const SelectedItem = useSelector((state) => state.item);
    const onDelFunc = (e)=>{
        if(SelectedItem.length===1){
            history.push("/");
        }
        const delItem = SelectedItem.filter((data)=>Number(data.id)!==Number(e.target.value))
        dispatch(ItemDel(delItem));
    }

    const RenderItem = SelectedItem.map((data,index)=>{
        return(
            <Fragment key={index}>
          <Items data={data} onDelFunc={onDelFunc}/>
            </Fragment>
        )
    })
    return (
        <Fragment >
        <Header />
        <Layout>
        {RenderItem}
        <OrderDetail SelectedItem={SelectedItem}/>
        <AdditionalProduct SelectedItem={SelectedItem} />
        </Layout>
        </Fragment>
    )
}

export default Page2

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
