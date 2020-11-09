import React, { Fragment } from 'react'
import styled from "styled-components"
function CalcDate({SelectedItem}) {
    const periodData = SelectedItem.filter((data)=>Number(data.id)===2)[0] ? SelectedItem.filter((data)=>Number(data.id)===2)[0].period : SelectedItem.filter((data)=>Number(data.id)!==2)[0].period
    
const tomorrow = new Date()
const calcD = new Date()
tomorrow.setDate(tomorrow.getDate()+1)
calcD.setDate(calcD.getDate()+((periodData ? periodData*7 : 1 )))
const period = String(calcD).split(" ")
const tom = String(tomorrow).split(" ")

function get_week(date) {
    if(date==="Sun"){
        return "일"
    }
    else if(date==="Mon"){
        return "월"
    }
    else if(date==="Tue"){
        return "화"
    }
    else if(date==="Wed"){
        return "수"
    }
    else if(date==="Thr"){
        return "목"
    }
    else if(date==="Fri"){
        return "금"
    }
    else if(date==="Sat"){
        return "토"
    }
}
function get_month(date) {
    if(date==="Jan"){
        return "1"
    }
    else if(date==="Feb"){
        return "2"
    }
    else if(date==="Mar"){
        return "3"
    }
    else if(date==="Apr"){
        return "4"
    }
    else if(date==="May"){
        return "5"
    }
    else if(date==="Jun"){
        return "6"
    }
    else if(date==="Jul"){
        return "7"
    }
    else if(date==="Aug"){
        return "8"
    }
    else if(date==="Sep"){
        return "9"
    }
    else if(date==="Oct"){
        return "10"
    }
    else if(date==="Nov"){
        return "11"
    }
    else if(date==="Dec"){
        return "12"
    }
}
function get_day(date) {
    const day = date.split("")
    if(day[0]==="0"){
return day[1]
    }else{
        return day.join("")
    }
}

    return (
        <Fragment>
        <DateInfo>
        <div className="next">
        <div className="nextTitle">다음 결제 예정일</div>
        <div className="nextDate">{get_month(tom[1])}월 {get_day(tom[2])}일 {get_week(tom[0])}요일</div>
        </div>
        <div className="after">
        <div className="afterTitle">이후 결제 예정일</div>
        <div className="afterDate">{get_month(period[1])}월 {get_day(period[2])}일 {get_week(period[0])}요일</div>
        </div>
        </DateInfo>
        </Fragment>
    )
}

export default CalcDate
const DateInfo = styled.div`
margin-top:39px;
width:100%;
padding:23px 26px;
box-sizing:border-box;
border-top:1px solid #EFEFEF;
.next{
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:7px;
.nextTitle{
font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: 20px;
letter-spacing: -0.06em;
text-align: left;
color:#979797;

}.nextDate{
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 21px;
letter-spacing: -0.06em;
text-align: right;
color:#0055B8;

}
}
.after{
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    .afterTitle{
font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: 20px;
letter-spacing: -0.06em;
text-align: left;
color:#979797;

}.afterDate{
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 21px;
letter-spacing: -0.06em;
text-align: right;
color:#3A3A3A;

}
    
}
`

