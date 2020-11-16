import React, { Fragment} from 'react'

import styled from 'styled-components'

import OrderDetail from './OrderDetail'
import AdditionalProduct from './AdditionalProduct'
import Header from '../Header';
import { useSelector} from "react-redux";


import Items from './Items';
function Page2() {
    const SelectedItem = useSelector((state) => state.item);

    const RenderItem = SelectedItem.map((data,index)=>{
        return(
            <Fragment key={index}>
          <Items data={data} />
            </Fragment>
        )
    })
    return (
        <Fragment >
        <Header />
        <Layout>
        <ItemLayout>
        {RenderItem}
        </ItemLayout>
        <OrderDetail SelectedItem={SelectedItem}/>
        <AdditionalProduct SelectedItem={SelectedItem} />
        </Layout>
        </Fragment>
    )
}

export default Page2
const ItemLayout = styled.div`
width:100%;
padding:0px 16px;
box-sizing:border-box;
`
const Layout = styled.div`
/* font-family: SpoqaHanSans; */
width:100%;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
margin-top:60px;
padding:0px;
box-sizing:border-box;
`
