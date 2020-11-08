import React, { Fragment,useEffect,useState } from 'react'
import styled  from 'styled-components'
import LeftBtnImage from "../../Icon/Cal_left.png"
import RightBtnImage from "../../Icon/Cal_right.png"
function Calender() {
    useEffect(() => {
        renderCalendar()
    }, [])
let date = new Date();
let dates = []
const [DD, setDD] = useState([])
const [Count, setCount] = useState(0)
const [year_, setyear_] = useState(0)
const [month_, setmonth_] = useState(0)
const renderCalendar = () => {
    /////////
const calYear = date.getFullYear();
const calMonth = date.getMonth();
setyear_(calYear)
setmonth_(calMonth)
const prevLast = new Date(calYear, calMonth, 0);
const thisLast = new Date(calYear, calMonth + 1, 0);

const PLDate = prevLast.getDate();
const PLDay = prevLast.getDay();

const TLDate = thisLast.getDate();
const TLDay = thisLast.getDay();

const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1);
const nextDates = [];

if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push("");
  }
dates =  prevDates.concat(thisDates, nextDates);
setDD(dates)
/////////
}

// renderCalendar()

console.log(dates)
const prevMonth = () => {
    let date = new Date();
    setCount(Count-1)
    date.setMonth(date.getMonth() - Math.abs(Count));
      /////////
const calYear = date.getFullYear();
const calMonth = date.getMonth();
setyear_(calYear)
setmonth_(calMonth)
const prevLast = new Date(calYear, calMonth, 0);
const thisLast = new Date(calYear, calMonth + 1, 0);

const PLDate = prevLast.getDate();
const PLDay = prevLast.getDay();

const TLDate = thisLast.getDate();
const TLDay = thisLast.getDay();

const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1);
const nextDates = [];

if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push("");
  }
dates =  prevDates.concat(thisDates, nextDates);
console.log(dates)
setDD(dates)
/////////
  }

  const nextMonth = () => {
    let date = new Date();
    setCount(Count+1)
    date.setMonth(date.getMonth() + Count);
     /////////
const calYear = date.getFullYear();
const calMonth = date.getMonth();
setyear_(calYear)
setmonth_(calMonth)
const prevLast = new Date(calYear, calMonth, 0);
const thisLast = new Date(calYear, calMonth + 1, 0);

const PLDate = prevLast.getDate();
const PLDay = prevLast.getDay();

const TLDate = thisLast.getDate();
const TLDay = thisLast.getDay();

const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1);
const nextDates = [];

if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push("");
  }
dates =  prevDates.concat(thisDates, nextDates);
console.log(dates)
setDD(dates)
/////////
  }

let renderDates = DD.map((v)=>{
    return(
        <Fragment>
        <Date_>{v}</Date_>
        </Fragment>
    )
})

console.log(Count)

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
        <div class="day">일</div>
        <div class="day">월</div>
        <div class="day">화</div>
        <div class="day">수</div>
        <div class="day">목</div>
        <div class="day">금</div>
        <div class="day">토</div>
        </Weekend>
        <Dates_>
        {renderDates}
        </Dates_>
        </Body>
    </Layout>
        </Fragment>
    )
}

export default Calender
const Dates_ = styled.div`
width:100%;
display: flex;
justify-content:space-between;
flex-flow: row wrap;
`
const Date_ = styled.div`
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
color:#3A3A3A;

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
padding:0px 34px;
box-sizing:border-box;
min-height:100px;
`