import React, { Fragment } from 'react'
import styled,{keyframes} from 'styled-components'

function HeaderSlide({HeaderSlideOpen,SelectedItem}) {
    const PriceAmount = SelectedItem.reduce((prev, curr) => prev + (curr.amount*curr.price), 0);
    const RenderItem = SelectedItem.map((data,index)=>{
        return(
            <Fragment key={index}>
            <Item>
        <ThumbImage src={data.img_src} />
        <ItemDisc>
        <div className="title">{data.title} -&nbsp;<div className="amount">{data.amount}개</div></div>
        <div className="discArea">
        {data.color &&(
            <Fragment>
        <div className="color">{data.color}</div> &nbsp;
        </Fragment>
        )}
        <div className="disc">{data.disc}</div>
        </div>
        <PriceArea>
        <div className="period">{data.period?`${data.period}주 마다`:`이번만 구매`}</div>
        <div className="price">{(data.price*data.amount).toLocaleString()}원</div>
        </PriceArea>
        </ItemDisc>
        </Item>
            </Fragment>
        )
    })
    return (
        <Fragment>
        <Layout HeaderSlideOpen={HeaderSlideOpen}>
        {RenderItem}
        <PriceDetailArea>
        <div className="priceArea">
        <div className="priceTitle">상품금액</div>
        <div className="price">{PriceAmount.toLocaleString()}원</div>
        </div>
        <div className="shipArea">
        <div className="shipTitle">배송비</div>
        {PriceAmount>=15000 && (<div className="ship">무료</div>)}
        {PriceAmount<15000 && (<div className="ship">3,500원</div>)}
        </div>
        <div className="totalArea">
        <div className="totalTitle">총 결제 예정 금액</div>
        <div className="total">{PriceAmount>=15000 ? PriceAmount.toLocaleString():(PriceAmount+3500).toLocaleString()}원</div>
        </div>
        </PriceDetailArea>
        </Layout>
        </Fragment>
    )
}

export default HeaderSlide
const PriceDetailArea = styled.div`
width:100%;
padding:26px;
box-sizing:border-box;
.priceArea{
    font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: 20px;
letter-spacing: -0.06em;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#3A3A3A;
}
.shipArea{
    font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: 20px;
letter-spacing: -0.06em;
    margin-top:6px;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#3A3A3A;
}
.totalArea{
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 16px;
letter-spacing: -0.04em;
    margin-top:18px;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#3A3A3A;
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
height: 120px;
width: 100%;
padding:12px 26px;
box-sizing:border-box;
border-bottom:1px solid #EFEFEF;
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
    width:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    font-size: 16px;
    color:#3A3A3A;
    margin-bottom:8px;
    .amount{
        color: #0055B8;
    }
}
.discArea{
    width:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin-bottom:13px;
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
.period{
    font-size:14px;
    color:#0F5783;
letter-spacing: -0.06em;
}
.price{
    font-size:14px;
    color:#3a3a3a;
letter-spacing: -0.06em; 
}
`
const FadeIn = () => keyframes`
from{
    transform:translateY(-500px);
}
to {
    transform:translateY(0px);
}
`;
const Fadeout = () => keyframes`
from{
    transform:translateY(0px);
}
to {
    transform:translateY(-500px);
}
`;
const Layout = styled.div`
font-family: SpoqaHanSans;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
position:absolute;
top:0px;

z-index:9997;
min-height: 200px;
width: 414px;
padding:60px 0px 0px 0px;
background-color:white;
box-sizing:border-box;
visibility: ${props => props.HeaderSlideOpen ? 'visible' : 'hidden'};
  animation: ${props => props.HeaderSlideOpen ? FadeIn : Fadeout} 0.5s ease-out;
  transition: visibility 0.5s ease-out;

`