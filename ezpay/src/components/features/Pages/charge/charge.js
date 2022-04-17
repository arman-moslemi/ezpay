
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
import LeftImg from "../../assets/img/leftImg.svg";
import ChargeSlider from "../layouts/ChargeSlider";
import { useEffect, useState ,useRef} from "react";
import { apiUrl } from "../../../../commons/inFormTypes";
import { Link } from "react-router-dom";

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
const [charge,setCharge]=useState("")
const [vtp,setVtp]=useState(0)
const [chargeType,setChargeType]=useState(0)

const dargahCharge=()=>{
  console.log(document.getElementById("phone")?.value)
  var ss=""
   ss=direct=="DIRECT"?document.getElementById("phone")?.value:"";
  localStorage.setItem("opr",operator)
  localStorage.setItem("direct",direct)
  localStorage.setItem("phone",direct=="DIRECT"?ss:"code")
  localStorage.setItem("type","charge")
  localStorage.setItem("vtp",vtp)
  localStorage.setItem("amount",charge)
console.log(89456)
console.log(charge)
console.log(operator)
    const axios = require("axios");
  
    axios
    .post(apiUrl + "dargah",{
      Username:37068,
    Password:6182,
    // amount:charge,
    amount:(parseInt( charge)*98)/100,

    cellNumber:ss,
       chargeType:direct,
       Type:operator,
       payType:"شارژ",
    })
  .then(function (response) {
  if (response.data.result == "true") {
  
  // alert("موفقیت آمیز")
  localStorage.setItem("fact",response.data.FactorNumber)

  let userObj = JSON.parse(response.data.Data);
  console.log(77)
  console.log(userObj)
  console.log(userObj.paymentLink)
  window.open(userObj.paymentLink);
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
  
const dargahNet=()=>{
  console.log(document.getElementById("phone2").value)
  var ss=document.getElementById("phone2").value
  localStorage.setItem("opr",operator)
localStorage.setItem("bundle",bundle)
localStorage.setItem("phone",ss)
localStorage.setItem("type","net")
localStorage.setItem("amount",amount)

    const axios = require("axios");
  
    axios
    .post(apiUrl + "dargah",{
      Username:37068,
    Password:6182,
    amount:(parseInt( amount)*98)/100,
    cellNumber:ss,
       bundleId:bundle,
       payType:"بسته"

    })
  .then(function (response) {
  if (response.data.result == "true") {
  
  // alert("موفقیت آمیز")
  
  // console.log(userObj?.bundles
  localStorage.setItem("fact",response.data.FactorNumber)

  let userObj = JSON.parse(response.data.Data);
  window.open(userObj.paymentLink);

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

//   axios
//   .post(apiUrl + "buy",{
//     Username:37068,
//   Password:6182,
//   Type:operator,
//   bundleId:bundle,
//   amount:amount,
//   cellNumber:ss
//   })
// .then(function (response) {
// if (response.data.result == "true") {

// alert("موفقیت آمیز")

// // console.log(userObj?.bundles
//   // console.log(JSON.stringify(response.data.Data)?.bundles)

// }
// else{
//   let userObj = JSON.parse(response.data.message);
// console.log(userObj)
//   alert(userObj.description)
// }})
// .catch(function (error) {
// console.log(error);
// });
}
const buyCharge=()=>{
  const axios = require("axios");
  console.log(document.getElementById("phone").value)
  var ss=document.getElementById("phone").value
  localStorage.setItem("opr",operator)
localStorage.setItem("direct",direct)
localStorage.setItem("phone",ss)
//   axios
//   .post(apiUrl + "buyCharge",{
//     Username:37068,
//   Password:6182,
//   Type:operator,
//   amount:charge,
//   cellNumber:ss,
//   chargeType:direct
//   })
// .then(function (response) {
// if (response.data.result == "true") {

// alert("موفقیت آمیز")

// // console.log(userObj?.bundles
//   // console.log(JSON.stringify(response.data.Data)?.bundles)

// }
// else{
//   let userObj = JSON.parse(response.data.message);

//   alert(userObj.description)

// }})
// .catch(function (error) {
// console.log(error);
// });
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
    <Container  className="chargePageContainer">
{page==1?

<div className="whiteBox">
<div className="row boxRow">
<Col md={6}>
  <p className="colText">
  شارژ سیم‌کارت و بسته اینترنت
با تخفیف همیشگی
  </p>
<div className="mRow">
<div onClick={()=>setPage(2)}>
   <div className="innerWhiteBox">
     <img src={Icon2} id="Icon2"/>
     <p>شارژ سیم کارت</p>
   </div>
  </div>
  <div onClick={()=>setPage(2)}>
   <div className="innerWhiteBox">
   <img src={Icon3}  id="Icon3"/>
   <p>
     بسته اینترنت
   </p>
   </div>
  </div>
</div>
</Col>
<Col md={6}>
  <img src={LeftImg} className="leftImg"/>
</Col>
  {/* <Col onClick={()=>setPage(2)} md={4}>
   <div className="innerWhiteBox">
   <img src={Icon1}  id="Icon1"/>
   <p>
     پرداخت قبض
   </p>
   </div>
  </Col> */}
</div>
</div>


:

<div className="whiteBox pd30">
<Tabs>
<TabList  className="over">
  <Tab>شارژ سیم کارت</Tab>
  <Tab>بسته اینترنت</Tab>
  {/* <Tab>پرداخت قبض</Tab> */}
</TabList>

<TabPanel >
<div className="d-des-flex justify-content-start align-items-center pdtop30 pdbottom30 borderBottom d-res-block">
    <div className="rowTitleDiv">
      <p>
        یکی از روش های شارژ را انتخاب کنید : 
      </p>
    </div>
    <div className="d-flex over">
      <Link onClick={()=>setDirect("DIRECT")} to={""}className='text-link'>
    <div  className={direct=="DIRECT"?"tabBox w200 tabBoxActiveMain":"tabBox w200"} >
    <p className={direct=="DIRECT"?"tabBoxActive":"tabBoxText"}>
        شارژ مستقیم
      </p>
    </div>
      </Link>
      <Link onClick={()=>setDirect("DESIRE")}  to={""}className='text-link'>

    <div className={direct=="DESIRE"?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
      <p className={direct=="DESIRE"?"tabBoxActive":"tabBoxText"}>
       دریافت کد شارژ
      </p>
    </div>
    </Link>
    </div>
  </div>
  {
    direct=="DESIRE"?
null
    :
    <div className="d-des-flex justify-content-start align-items-center pdtop30 pdbottom30 borderBottom d-res-block2">
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
  }
 
  <div className="d-des-flex justify-content-start align-items-center pdtop30 pdbottom30 borderBottom d-res-block">
    <div className="rowTitleDiv">
      <p>
        در صورت ترابرد اپراتور را تغییر دهید : 
      </p>
    </div>
    <div className="d-flex over">
    <Link onClick={()=>setOperator(0)}  to={""}className='text-link'>
    <div  className={operator==0?"tabBox w200 tabBoxActiveMain":"tabBox w200"} >
      <img src={Irancell}/>
      <p className={operator==0?"tabBoxActive":"tabBoxText"}>
        ایرانسل
      </p>
    </div>
    </Link>
    <Link onClick={()=>setOperator(1)} to={""}className='text-link'>
    <div  className={operator==1?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
      <img src={Mci}/>
      <p className={operator==1?"tabBoxActive":"tabBoxText"}>
       همراه اول
      </p>
    </div>
    </Link>
    <Link onClick={()=>setOperator(2)}  to={""}className='text-link'>

    <div  className={operator==2?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
      <img src={Rightel}/>
      <p className={operator==2?"tabBoxActive":"tabBoxText"}>
        رایتل
      </p>
    </div>
    </Link>
    <Link onClick={()=>setOperator(3)}  to={""}className='text-link'>

    <div  className={operator==3?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
      <img src={Taliya}/>
      <p className={operator==3?"tabBoxActive":"tabBoxText"}>
        تالیا
      </p>
    </div>
    </Link>
    </div>
  </div>
  <div className="d-des-flex justify-content-start align-items-center pdtop30 pdbottom30 borderBottom d-res-block">
    <div className="rowTitleDiv">
      <p>
       مبلغ شارژ را انتخاب کنید : 
      </p>
    </div>
    <div className="d-flex over">
    {/* <div className="tabBox pdLR15 w127 tabBoxActiveMain">
      <p className="tabBoxActive">
        1 هزارتومان
      </p>
    </div> */}
        <Link onClick={()=>{setCharge("20000");
    operator==0?
    setVtp(28)
    :operator==1?
    setVtp(23)
    :
   setVtp(50)}}  to={""}className='text-link'>

    <div  className={charge=="20000"?"tabBox pdLR15 w127 tabBoxActiveMain":"tabBox pdLR15 w127"}>
    <p className={charge=="20000"?"tabBoxActive":"tabBoxText"}>
       2 هزارتومان
      </p>
    </div>
    </Link>
    <Link onClick={()=>{setCharge("50000"); operator==0?
    setVtp(29)
    :operator==1?
    setVtp(22)
    :setVtp(51)}} to={""}className='text-link'>

    <div  className={charge=="50000"?"tabBox pdLR15 w127 tabBoxActiveMain":"tabBox pdLR15 w127"}>
      <p className={charge=="50000"?"tabBoxActive":"tabBoxText"}>
        5 هزارتومان
      </p>
    </div>
</Link>
<Link onClick={()=>{setCharge("100000"); operator==0?
    setVtp(30)
    :operator==1?
    setVtp(10)
    :setVtp(52)}} to={""}className='text-link'>

    <div  className={charge=="100000"?"tabBox pdLR15 w127 tabBoxActiveMain":"tabBox pdLR15 w127"}>
    <p className={charge=="100000"?"tabBoxActive":"tabBoxText"}>
       10 هزارتومان
      </p>
    </div>
    </Link>
    <Link onClick={()=>{setCharge("200000"); operator==0?
    setVtp(31)
    :operator==1?
    setVtp(5)
    :setVtp(53)}}  to={""}className='text-link'>

    <div  className={charge=="200000"?"tabBox pdLR15 w127 tabBoxActiveMain":"tabBox pdLR15 w127"}>
    <p className={charge=="200000"?"tabBoxActive":"tabBoxText"}>
        20 هزارتومان
      </p>
    </div>
    </Link>
    {/* <div onClick={()=>{setCharge("500000"); operator==0?
    setVtp(29)
    :operator==1?
    setVtp(22)
    :setVtp(51)}} className={charge=="500000"?"tabBox pdLR15 w127 tabBoxActiveMain":"tabBox pdLR15 w127"}>
    <p className={charge=="500000"?"tabBoxActive":"tabBoxText"}>
       50 هزارتومان
      </p>
    </div> */}
    </div>
  </div>
  <div className="d-des-flex justify-content-start align-items-center pdtop30 pdbottom30 d-res-block">
    <div className="rowTitleDiv">
      <p>
       نوع شارژ را انتخاب کنید : 
      </p>
    </div>
    <div className="d-flex over">
    <Link onClick={()=>setChargeType(0)}  to={""}className='text-link'>

    <div className={chargeType==0?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
    <p className={chargeType==0?"tabBoxActive":"tabBoxText"}>
        شارژ عادی
      </p>
    </div>
    </Link>
    <Link onClick={()=>setChargeType(1)}  to={""}className='text-link'>

    <div className={chargeType==1?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
      <p className={chargeType==1?"tabBoxActive":"tabBoxText"}>
       شارژ شگفت انگیز
      </p>
    </div>
    </Link>
    </div>
  </div>
  <div className="d-flex justify-content-end">
    {/* <Button onClick={()=>buyCharge()} className="payBtn"> */}
    <Button onClick={()=>dargahCharge()} className="payBtn">
      پرداخت
    </Button>
  </div>
</TabPanel>
<TabPanel>

<div className="d-des-flex justify-content-start align-items-center pdtop30 pdbottom30 borderBottom d-res-block2">
    <div className="rowTitleDiv">
      <p>
       شماره تلفن همراه خود را وارد کنید : 
      </p>
    </div>
    <div className="d-flex over">
    
    <div className="tabBox pdCustom">
    <input id="phone2"    />
      <Phone/>
    
    </div>
    </div>
  </div>
  <div className="d-des-flex justify-content-start align-items-center pdtop30 pdbottom30 borderBottom d-res-block">
    <div className="rowTitleDiv">
      <p>
        در صورت ترابرد اپراتور را تغییر دهید : 
      </p>
    </div>
    <div className="d-flex over">
    <Link onClick={()=>setOperator(0)}  to={""}className='text-link'>
    <div  className={operator==0?"tabBox w200 tabBoxActiveMain":"tabBox w200"} >
      <img src={Irancell}/>
      <p className={operator==0?"tabBoxActive":"tabBoxText"}>
        ایرانسل
      </p>
    </div>
    </Link>
    <Link onClick={()=>setOperator(1)} to={""}className='text-link'>
    <div  className={operator==1?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
      <img src={Mci}/>
      <p className={operator==1?"tabBoxActive":"tabBoxText"}>
       همراه اول
      </p>
    </div>
    </Link>
    <Link onClick={()=>setOperator(2)}  to={""}className='text-link'>

    <div  className={operator==2?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
      <img src={Rightel}/>
      <p className={operator==2?"tabBoxActive":"tabBoxText"}>
        رایتل
      </p>
    </div>
    </Link>
    <Link onClick={()=>setOperator(3)}  to={""}className='text-link'>

    <div  className={operator==3?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
      <img src={Taliya}/>
      <p className={operator==3?"tabBoxActive":"tabBoxText"}>
        تالیا
      </p>
    </div>
    </Link>
    </div>
  </div>
  <div className="d-des-flex justify-content-start align-items-center pdtop30 pdbottom30 borderBottom d-res-block2">
    <div className="rowTitleDiv">
      <p>
       نوع سیم کارت خود را انتخاب کنید : 
      </p>
    </div>
    <div className="d-flex over">
    <Link onClick={()=>setSime(0)}  to={""}className='text-link'>

    <div  className={sim==0?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
    <p className={sim==0?"tabBoxActive":"tabBoxText"}>
        دائمی
      </p>
    </div>
    </Link>
    <Link onClick={()=>setSime(1)}  to={""}className='text-link'>

    <div  className={sim==1?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
      <p className={sim==1?"tabBoxActive":"tabBoxText"}>
       اعتباری
      </p>
    </div>
    </Link>
    <Link onClick={()=>setSime(2)}  to={""}className='text-link'>

    <div  className={sim==2?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
    <p className={sim==2?"tabBoxActive":"tabBoxText"}>
       دیتا
      </p>
    </div>
    </Link>
    <Link onClick={()=>setSime(3)}  to={""}className='text-link'>

    <div  className={sim==3?"tabBox w200 tabBoxActiveMain":"tabBox w200"}>
    <p className={sim==3?"tabBoxActive":"tabBoxText"}>
       TD-LTE
      </p>
    </div>
    </Link>
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
        <Link onClick={()=>setTime(0)}  to={""}className='text-link'>

    <div onClick={()=>setTime(0)} className={time==0?"tabBox w97 margin2 tabBoxActiveMain":"tabBox w97 margin2"}>
    <p className={time==0?"tabBoxActive":"tabBoxText"}>
      روزانه
      </p>
    </div>
    </Link>
    <Link onClick={()=>setTime(1)}  to={""}className='text-link'>

    <div  className={time==1?"tabBox w97 margin2 tabBoxActiveMain":"tabBox w97 margin2"}>
    <p className={time==1?"tabBoxActive":"tabBoxText"}>
     هفتگی
      </p>
    </div>
    </Link>
    <Link onClick={()=>setTime(2)}  to={""}className='text-link'>

    <div   className={time==2?"tabBox w97 margin2 tabBoxActiveMain":"tabBox w97 margin2"}>
    <p className={time==2?"tabBoxActive":"tabBoxText"}>
      ماهانه
      </p>
    </div>
    </Link>
    <Link onClick={()=>setTime(3)}  to={""}className='text-link'>

    <div  className={time==3?"tabBox w97 margin2 tabBoxActiveMain":"tabBox w97 margin2"}>
    <p className={time==3?"tabBoxActive":"tabBoxText"}>
      بلند مدت
      </p>
    </div>
    </Link>
  
 </Col>
  </div>
  
  <div className="d-flex justify-content-end">
    {/* <Button onClick={()=>buyInternet()} className="payBtn"> */}
    <Button onClick={()=>dargahNet()} className="payBtn">
      پرداخت
    </Button>
  </div>
</TabPanel>
{/* <TabPanel>
  <h2>Any content 2</h2>
</TabPanel> */}
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
