
import { Container ,Col, Button,Row} from "react-bootstrap";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Questions from "../layouts/Questions";
import Icon1 from "../../assets/img/i1.png";
import Icon2 from "../../assets/img/i2.png";
import Icon3 from "../../assets/img/i3.png";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Irancell from "../../assets/img/irancell.png";
import Taliya from "../../assets/img/taliya.png";
import Mci from "../../assets/img/mci.png";
import Rightel from "../../assets/img/rightel.png";
import Phone from "../../assets/icon/Phone";
import ChargeSlider from "../layouts/ChargeSlider";
import { useEffect, useState ,useRef} from "react";
import { apiUrl } from "../../../../commons/inFormTypes";
const Charge = () => {
const [page,setPage]=useState(1)
const [phone,setPhone]=useState("")
const [phone2,setPhone2]=useState("")
const [operator,setOperator]=useState(0)
const [sim,setSime]=useState(0)
const [box,setBox]=useState([])
const [time,setTime]=useState(0)
const [bundle,setBundle]=useState(0)
const [amount,setAmount]=useState(0)
const [direct,setDirect]=useState("DIRECT")
const [charge,setCharge]=useState("20000")

const dargah=()=>{
  console.log(document.getElementById("phone2").value)
  var ss=document.getElementById("phone2").value
    const axios = require("axios");
  
    axios
    .post(apiUrl + "dargah",{
      Username:37068,
    Password:6182,
    amount:amount,
    cellNumber:ss
    })
  .then(function (response) {
  if (response.data.result == "true") {
  
  // alert("موفقیت آمیز")
  
  // console.log(userObj?.bundles
    // console.log(JSON.stringify(response.data.Data)?.bundles)
  
  }
  else{
    let userObj = JSON.parse(response.data.message);
  console.log(userObj)
    alert(userObj.description)
  }})
  .catch(function (error) {
  console.log(error);
  });
  }
const buyInternet=()=>{
console.log(document.getElementById("phone2").value)
var ss=document.getElementById("phone2").value
  const axios = require("axios");

  axios
  .post(apiUrl + "buy",{
    Username:37068,
  Password:6182,
  Type:operator,
  bundleId:bundle,
  amount:amount,
  cellNumber:ss
  })
.then(function (response) {
if (response.data.result == "true") {

alert("موفقیت آمیز")

// console.log(userObj?.bundles
  // console.log(JSON.stringify(response.data.Data)?.bundles)

}
else{
  let userObj = JSON.parse(response.data.message);
console.log(userObj)
  alert(userObj.description)
}})
.catch(function (error) {
console.log(error);
});
}
const buyCharge=()=>{
  const axios = require("axios");
  console.log(document.getElementById("phone").value)
  var ss=document.getElementById("phone").value
  axios
  .post(apiUrl + "buyCharge",{
    Username:37068,
  Password:6182,
  Type:operator,
  amount:charge,
  cellNumber:ss,
  chargeType:direct
  })
  // .get(apiUrl + "Gettest")
.then(function (response) {
if (response.data.result == "true") {

alert("موفقیت آمیز")

// console.log(userObj?.bundles
  // console.log(JSON.stringify(response.data.Data)?.bundles)

}
else{
  let userObj = JSON.parse(response.data.message);

  alert(userObj.description)

}})
.catch(function (error) {
console.log(error);
});
}
const mainSlider=()=>{
  const axios = require("axios");

    axios
        .post(apiUrl + "bundleList",{
          Username:37068,
        Password:6182,
        Type:operator
        })
        // .get(apiUrl + "Gettest")
    .then(function (response) {
      if (response.data.result == "true") {

        let userObj = JSON.parse(response.data.Data);
         setBox(userObj?.bundles)

console.log(userObj?.bundles);
        // console.log(JSON.stringify(response.data.Data)?.bundles)

    }
    else{
      console.log(response.data.result)

    }})
    .catch(function (error) {
      console.log(error);
    });



}
useEffect(()=>{
  mainSlider()
},[operator])
// const setPhone2(e.target.value)(e) => {
//   console.log(e.target.value)
//   setPhone2(e.target.value);
// }

  return (
    <>
     
    <Header/>
    <Container className="chargePageContainer">
{page==1?

<div className="whiteBox">
<div className="row boxRow">
  <Col onClick={()=>setPage(2)} md={4}>
   <div className="innerWhiteBox">
     <img src={Icon2} id="Icon2"/>
     <p>شارژ سیم کارت</p>
   </div>
  </Col>
  <Col onClick={()=>setPage(2)} md={4}>
   <div className="innerWhiteBox">
   <img src={Icon3}  id="Icon3"/>
   <p>
     بسته اینترنت
   </p>
   </div>
  </Col>
  <Col onClick={()=>setPage(2)} md={4}>
   <div className="innerWhiteBox">
   <img src={Icon1}  id="Icon1"/>
   <p>
     پرداخت قبض
   </p>
   </div>
  </Col>
</div>
</div>


:

<div className="whiteBox pd30">
<Tabs>
<TabList>
  <Tab>شارژ سیم کارت</Tab>
  <Tab>بسته اینترنت</Tab>
  <Tab>پرداخت قبض</Tab>
</TabList>

<TabPanel>
  <div className="d-flex justify-content-start align-items-center pdtop30 pdbottom30 borderBottom">
    <div className="rowTitleDiv">
      <p>
        یکی از روش های شارژ را انتخاب کنید : 
      </p>
    </div>
    <div className="d-flex">
    <div onClick={()=>setDirect("DIRECT")} className={direct=="DIRECT"?"tabBox w200 tabBoxActiveMain":"tabBox w200"} >
      <p className="tabBoxActive">
        شارژ مستقیم
      </p>
    </div>
    <div onClick={()=>setDirect("UNDIRECT")} className={direct=="UNDIRECT"?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
      <p className="tabBoxText">
       دریافت کد شارژ
      </p>
    </div>
    </div>
  </div>
  <div className="d-flex justify-content-start align-items-center pdtop30 pdbottom30 borderBottom">
    <div className="rowTitleDiv">
      <p>
       شماره تلفن همراه خود را وارد کنید : 
      </p>
    </div>
    <div className="d-flex">
    
    <div className="tabBox pdCustom">
    <input id="phone"    />
      <Phone/>
    
    </div>
    </div>
  </div>
  <div className="d-flex justify-content-start align-items-center pdtop30 pdbottom30 borderBottom">
    <div className="rowTitleDiv">
      <p>
        در صورت ترابرد اپراتور را تغییر دهید : 
      </p>
    </div>
    <div className="d-flex">
    <div onClick={()=>setOperator(0)} className={operator==0?"tabBox w200 tabBoxActiveMain":"tabBox w200"} >
      <img src={Irancell}/>
      <p className="tabBoxText">
        ایرانسل
      </p>
    </div>
    <div onClick={()=>setOperator(1)} className={operator==1?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
      <img src={Mci}/>
      <p className="tabBoxActive">
       همراه اول
      </p>
    </div>
    <div onClick={()=>setOperator(2)} className={operator==2?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
      <img src={Rightel}/>
      <p className="tabBoxText">
        رایتل
      </p>
    </div>
    <div onClick={()=>setOperator(3)} className={operator==3?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
      <img src={Taliya}/>
      <p className="tabBoxText">
        تالیا
      </p>
    </div>
    </div>
  </div>
  <div className="d-flex justify-content-start align-items-center pdtop30 pdbottom30 borderBottom">
    <div className="rowTitleDiv">
      <p>
       مبلغ شارژ را انتخاب کنید : 
      </p>
    </div>
    <div className="d-flex">
    {/* <div className="tabBox pdLR15 w127 tabBoxActiveMain">
      <p className="tabBoxActive">
        1 هزارتومان
      </p>
    </div> */}
    <div onClick={()=>setCharge("20000")} className={charge=="20000"?"tabBox pdLR15 w127 tabBoxActiveMain":"tabBox pdLR15 w127"}>
      <p className="tabBoxText">
       2 هزارتومان
      </p>
    </div>
    <div onClick={()=>setCharge("50000")} className={charge=="50000"?"tabBox pdLR15 w127 tabBoxActiveMain":"tabBox pdLR15 w127"}>
      <p className="tabBoxActive">
        5 هزارتومان
      </p>
    </div>
    <div onClick={()=>setCharge("100000")} className={charge=="100000"?"tabBox pdLR15 w127 tabBoxActiveMain":"tabBox pdLR15 w127"}>
      <p className="tabBoxText">
       10 هزارتومان
      </p>
    </div>
    <div onClick={()=>setCharge("200000")} className={charge=="200000"?"tabBox pdLR15 w127 tabBoxActiveMain":"tabBox pdLR15 w127"}>
      <p className="tabBoxActive">
        20 هزارتومان
      </p>
    </div>
    <div onClick={()=>setCharge("500000")} className={charge=="500000"?"tabBox pdLR15 w127 tabBoxActiveMain":"tabBox pdLR15 w127"}>
      <p className="tabBoxText">
       50 هزارتومان
      </p>
    </div>
    </div>
  </div>
  <div className="d-flex justify-content-start align-items-center pdtop30 pdbottom30">
    <div className="rowTitleDiv">
      <p>
       نوع شارژ را انتخاب کنید : 
      </p>
    </div>
    <div className="d-flex">
    <div className="tabBox w200 tabBoxActiveMain">
      <p className="tabBoxActive">
        شارژ عادی
      </p>
    </div>
    <div className="tabBox w200">
      <p className="tabBoxText">
       شارژ شگفت انگیز
      </p>
    </div>
    </div>
  </div>
  <div className="d-flex justify-content-end">
    <Button onClick={()=>buyCharge()} className="payBtn">
      پرداخت
    </Button>
  </div>
</TabPanel>
<TabPanel>

  <div className="d-flex justify-content-start align-items-center pdtop30 pdbottom30 borderBottom">
    <div className="rowTitleDiv">
      <p>
       شماره تلفن همراه خود را وارد کنید : 
      </p>
    </div>
    <div className="d-flex">
    
    <div className="tabBox pdCustom">
    <input id="phone2"    />
      <Phone/>
    
    </div>
    </div>
  </div>
  <div className="d-flex justify-content-start align-items-center pdtop30 pdbottom30 borderBottom">
    <div className="rowTitleDiv">
      <p>
        در صورت ترابرد اپراتور را تغییر دهید : 
      </p>
    </div>
    <div className="d-flex">
    <div onClick={()=>setOperator(0)} className={operator==0?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
      <img src={Irancell}/>
      <p className="tabBoxText">
        ایرانسل
      </p>
    </div>
    <div onClick={()=>setOperator(1)} className={operator==1?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
      <img src={Mci}/>
      <p className="tabBoxActive">
       همراه اول
      </p>
    </div>
    <div onClick={()=>setOperator(2)} className={operator==2?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
      <img src={Rightel}/>
      <p className="tabBoxText">
        رایتل
      </p>
    </div>
    <div  onClick={()=>setOperator(3)} className={operator==3?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
      <img src={Taliya}/>
      <p className="tabBoxText">
        تالیا
      </p>
    </div>
    </div>
  </div>
  <div className="d-flex justify-content-start align-items-center pdtop30 pdbottom30 borderBottom">
    <div className="rowTitleDiv">
      <p>
       نوع سیم کارت خود را انتخاب کنید : 
      </p>
    </div>
    <div className="d-flex">
    <div onClick={()=>setSime(0)} className={sim==0?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
      <p className="tabBoxActive">
        دائمی
      </p>
    </div>
    <div onClick={()=>setSime(1)} className={sim==1?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
      <p className="tabBoxText">
       اعتباری
      </p>
    </div>
    <div onClick={()=>setSime(2)} className={sim==2?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
      <p className="tabBoxText">
       دیتا
      </p>
    </div>
    <div onClick={()=>setSime(3)} className={sim==3?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
      <p className="tabBoxText fontUnset">
       TD-LTE
      </p>
    </div>
    </div>
  </div>
  <div className="row d-flex justify-content-start align-items-center pdtop30 pdbottom30">
   <Col md={7} className="chargeSliderDiv pd0">
    <ChargeSlider bundle={bundle} setAmount={setAmount} setBundle={setBundle} data={time==0?box.daily:time==1?box.weekly:time==2?box.monthly:time==3?box.annual:null}/>
   </Col>
 <Col md={5} className="pd0 d-flex justify-content-start align-items-center pdtop30 pdbottom30 borderBottom">
 
   {/* <div onClick={()=>setTime(0)} onCa className="tabBox w97 margin2">
      <p className="tabBoxText">
      ساعتی
      </p>
    </div> */}
    <div onClick={()=>setTime(0)} className={time==0?"tabBox w97 margin2 tabBoxActiveMain":"tabBox w97 margin2"}>
      <p className="tabBoxText">
      روزانه
      </p>
    </div>
    <div onClick={()=>setTime(1)}  className={time==1?"tabBox w97 margin2 tabBoxActiveMain":"tabBox w97 margin2"}>
      <p className="tabBoxText">
     هفتگی
      </p>
    </div>
    <div onClick={()=>setTime(2)}  className={time==2?"tabBox w97 margin2 tabBoxActiveMain":"tabBox w97 margin2"}>
      <p className="tabBoxText">
      ماهانه
      </p>
    </div>
    <div onClick={()=>setTime(3)}  className={time==3?"tabBox w97 margin2 tabBoxActiveMain":"tabBox w97 margin2"}>
      <p className="tabBoxText">
      بلند مدت
      </p>
    </div>
  
 </Col>
  </div>
  
  <div className="d-flex justify-content-end">
    <Button onClick={()=>buyInternet()} className="payBtn">
      پرداخت
    </Button>
  </div>
</TabPanel>
<TabPanel>
  <h2>Any content 2</h2>
</TabPanel>
</Tabs>
   </div>

}
   




       <Questions/>
       
    </Container>
    <Footer/>
    </>
  );
};
export default Charge;
