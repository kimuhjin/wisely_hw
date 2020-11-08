import React, { Fragment,useEffect,useState } from 'react'
import styled  from 'styled-components'
import LeftBtnImage from "../../Icon/Cal_left.png"
import RightBtnImage from "../../Icon/Cal_right.png"
function Calender({shipDay,setShipDay}) {
    useEffect(() => {
        renderCalendar()
    }, [])
let date = new Date();
let dates = []
const [DD, setDD] = useState([[]])
const [Count, setCount] = useState(0)
const [Init, setInit] = useState(0)
const [year_, setyear_] = useState(0)
const [month_, setmonth_] = useState(0)

console.log("a"+Init)
const renderCalendar = () => {
    /////////
const calYear = date.getFullYear();
const calMonth = date.getMonth();
setCount(calMonth+1)
setInit(calMonth+1)
setyear_(calYear)
setmonth_(calMonth)
const prevLast = new Date(calYear, calMonth, 0);
const thisLast = new Date(calYear, calMonth + 1, 0);

const PLDay = prevLast.getDay();

const TLDate = thisLast.getDate();
const TLDay = thisLast.getDay();

const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1);
const nextDates = [];

if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
        prevDates.unshift("");
    }
  }
  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push("");
  }
dates =  prevDates.concat(thisDates, nextDates);
let value = [[...dates],[`${calYear},${calMonth+1}`]]
// setDD(dates)
setDD(value)
}


const prevMonth = () => {
    if(Count>Init-1){
    let date = new Date();
let date_today = new Date();
    setCount(Count-1)
    date.setMonth(Count-1);

const calYear = date.getFullYear();
const calMonth = date.getMonth();
const calYear_today = date_today.getFullYear();
const calMonth_today = date_today.getMonth();
    if((calYear_today*100)+(calMonth_today+1)<(calYear*100)+(calMonth+1)){
        console.log("bog")
    }


setyear_(calYear)
setmonth_(calMonth)
const prevLast = new Date(calYear, calMonth, 0);
const thisLast = new Date(calYear, calMonth + 1, 0);

const PLDay = prevLast.getDay();

const TLDate = thisLast.getDate();
const TLDay = thisLast.getDay();

const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1);
const nextDates = [];

if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
    prevDates.unshift("");
    }
  }
  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push("");
  }
dates =  prevDates.concat(thisDates, nextDates);
let value = [[...dates],[`${calYear},${calMonth+1}`]]
setDD(value)
}
  }

const nextMonth = () => {
    if(Init+6 >Count){
    let date = new Date();
        setCount(Count+1)
        date.setMonth(Count+1);

const calYear = date.getFullYear();
const calMonth = date.getMonth();

setyear_(calYear)
setmonth_(calMonth)
const prevLast = new Date(calYear, calMonth, 0);
const thisLast = new Date(calYear, calMonth + 1, 0);

const PLDay = prevLast.getDay();

const TLDate = thisLast.getDate();
const TLDay = thisLast.getDay();

const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1);
const nextDates = [];

if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift("");
    }
  }

  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push("");
  }
dates =  prevDates.concat(thisDates, nextDates);
let value = [[...dates],[`${calYear},${calMonth+1}`]]
setDD(value)
}
}

let ss = DD[0].map((v)=>{
    return [[DD[1]],v]
})

let renderDates = ss.map((v,index)=>{
const calYear = date.getFullYear();
const calMonth = date.getMonth()+1;
const calDay = date.getDate()+1;

if(`${v[0]},${v[1]}`===`${calYear},${calMonth},${calDay}`){
 return(
            <Fragment key={index}>
            <DateTomorrow value={`${v[0]},${v[1]}`} check={shipDay} onClick = {()=>setShipDay(`${v[0]},${v[1]}`)}>
            <div className="Today">
            <div className="Checked">
            {v[1]}
            </div>
            </div></DateTomorrow>
            </Fragment>
            )}
else if (Number(`${v[0]},${v[1]}`.split(",").join(""))<Number(`${calYear},${calMonth},${calDay}`.split(",").join("")) && v[0][0].join("") ===`${calYear},${calMonth}`){
    return(<Fragment key={index}>
        <DateNon>
        <div className="Checked">
        {v[1]}
        </div>
        </DateNon>
        </Fragment>)
}
else if(v[1]!==""){
    return(
        <Fragment key={index}>
        <DateOn value={`${v[0]},${v[1]}`} check={shipDay} onClick = {()=>setShipDay(`${v[0]},${v[1]}`)}>
        <div className="Checked">
        {v[1]}
        </div>
        </DateOn>
        </Fragment>
)
}
else if(v[1]===""){
    return(
        <Fragment key={index}>
        <DateOn value={`${v[0]},${v[1]}`} check={shipDay} >
        <div className="Checked">
        {v[1]}
        </div>
        </DateOn>
        </Fragment>
)
}
})
    return (
        <Fragment>
        <Layout>
        <Header>
        <LeftBtn onClick={prevMonth}/>
        <MonthNow>{year_}년 {month_+1}월</MonthNow>
        <RightBtn onClick={nextMonth}/>
        </Header>
        <Body>
        <Weekend>
        <div className="day">일</div>
        <div className="day">월</div>
        <div className="day">화</div>
        <div className="day">수</div>
        <div className="day">목</div>
        <div className="day">금</div>
        <div className="day">토</div>
        </Weekend>
        <Dates>
        {renderDates}
        </Dates>
        </Body>
    </Layout>
        </Fragment>
    )
}

export default Calender
const Dates = styled.div`
width:100%;
display: flex;
justify-content:space-between;
flex-flow: row wrap;
`
const DateTomorrow = styled.button`
padding:0px;
border:none;
outline:none;
background-color:transparent;
display:flex;
justify-content:center;
align-items:center;
width: calc(100% / 7);
height:calc(width);
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
letter-spacing: -0.06em;
text-align: center;
color:${props=>props.value === props.check ? "#fff" : "#3A3A3A" };
.Today{
    display:flex;
justify-content:center;
align-items:center;
    pointer-events:none;
    display:flex;
justify-content:center;
align-items:center;
width:38px;
height:38px;
border: 2px solid #0055B8;
box-sizing: border-box;
border-radius: 50%;
.Checked{
display:flex;
justify-content:center;
align-items:center;
width:30px;
height:30px;
border-radius:50%;
background-color:${props=>props.value === props.check ? "#0055B8" : "transparent" };
}
}
`
const DateNon = styled.button`
padding:0px;
outline:none;
border:none;
background-color:transparent;
display:flex;
justify-content:center;
align-items:center;
width: calc(100% / 7);
height:40px;
box-sizing:border-box;
text-align:center;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
letter-spacing: -0.06em;
text-align: center;
color:#CCCCCC;
`

const DateOn = styled.button`
padding:0px;
outline:none;
border:none;
background-color:transparent;
display:flex;
justify-content:center;
align-items:center;
width: calc(100% / 7);
height:40px;
box-sizing:border-box;
text-align:center;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
letter-spacing: -0.06em;
text-align: center;
color:${props=>props.value === props.check ? "#fff" : "#3A3A3A" };
.Checked{
display:flex;
justify-content:center;
align-items:center;
width: 30px;
height:30px;
border-radius:50%;
background-color:${props=>props.value === props.check ? "#0055B8" : "transparent" };
}
`
const Weekend = styled.div`
margin-top:30px;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
letter-spacing: -0.06em;
text-align: center;
color:#3A3A3A;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
.day{
    display:flex;
justify-content:center;
align-items:center;
  width: calc(100% / 7);
  height:40px;
  text-align: center;
}
`
const Body = styled.div`

`
const MonthNow = styled.div`
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 26px;
letter-spacing: -0.06em;
text-align: center;
color:#3A3A3A;

`
const RightBtn = styled.div`
width:10px;
height:20px;
border:none;
background-color:transparent;
background-image:url(${RightBtnImage});
background-repeat:no-repeat;
background-size:100% auto;
background-position:center;
`
const LeftBtn = styled.div`
width:10px;
height:20px;
border:none;
background-color:transparent;
background-image:url(${LeftBtnImage});
background-repeat:no-repeat;
background-size:100% auto;
background-position:center;
`
const Header = styled.div`
width:100%;
padding:0px 15px;
box-sizing:border-box;
display:flex;
justify-content:space-between;
align-items:center;
`
const Layout = styled.div`
font-family: SpoqaHanSans;
margin-top:20px;
width:100%;
height:336px;
padding:0px 34px;
box-sizing:border-box;
min-height:100px;
`