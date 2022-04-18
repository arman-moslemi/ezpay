
import { Container ,Col, Button,Row} from "react-bootstrap";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Questions from "../layouts/Questions";
import Icon1 from "../../assets/img/i1.png";
import Icon2 from "../../assets/img/i2.png";
import Icon3 from "../../assets/img/i3.png";
import Mtn from "../../assets/img/active-IRANCELL.png";
import Mci from "../../assets/img/mci.png";
import Rightel from "../../assets/img/rightel.png";
import Logo from "../../assets/img/logo.png";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {useParams ,useLocation } from "react-router-dom";
import { useEffect, useState ,useRef} from "react";
import { apiUrl } from "../../../../commons/inFormTypes";
const Success = () => {
    // const {factorNumber,processUid,statusCode,statusDesc,amount} = useParams();
    const search = useLocation().search;
    const FactorNumber = new URLSearchParams(search).get("factorNumber");
    const statusCode = new URLSearchParams(search).get("statusCode");
    const statusDesc = new URLSearchParams(search).get("statusDesc");
    const processUid = new URLSearchParams(search).get("processUid");
    // const amount = new URLSearchParams(search).get("amount");
    const amount =localStorage.getItem("amount")
    console.log(FactorNumber);
    console.log(statusCode);
    console.log(statusDesc);
    const [pin,setPin]=useState("")
    const verify=()=>{
   
      const axios = require("axios");
    
      axios
      .post(apiUrl + "verify",{
        processUid:processUid,
      })
    .then(function (response) {
    if (response.data.result == "true") {

    // alert("موفقیت آمیز")
    console.log(956)
    console.log(response.data)
    let userObj = JSON.parse(response.data.Data);
    console.log(userObj)
    console.log(userObj.transferInfo.transactionNumber)
      if(  localStorage.getItem("type")=="net"){
            buyInternet(userObj.transferInfo.transactionNumber)
         }
         else{

             buyCharge(userObj.transferInfo.transactionNumber)
         }
    
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
    const buyInternet=(tr)=>{
   
          const axios = require("axios");
        
          axios
          .post(apiUrl + "buy",{
            Username:37068,
          Password:6182,
          Type:  localStorage.getItem("opr")
          ,
          bundleId:localStorage.getItem("bundle"),
          amount:localStorage.getItem("amount"),
          cellNumber:localStorage.getItem("phone"),
          fact:localStorage.getItem("fact"),
          realFact:FactorNumber,
          transaction:tr
          })
        .then(function (response) {
        if (response.data.result == "true") {
            localStorage.setItem("opr","")
            localStorage.setItem("bundle","")
            localStorage.setItem("phone","")
            localStorage.setItem("type","")
            localStorage.setItem("amount","")
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
        const buyCharge=(tr)=>{
          const axios = require("axios");
          console.log(1548)
          if(localStorage.getItem("direct")!="DESIRE"){
            axios
            .post(apiUrl + "buyCharge",{
              Username:37068,
            Password:6182,
            Type:  localStorage.getItem("opr"),
            amount:localStorage.getItem("amount"),
            cellNumber:localStorage.getItem("phone"),
            chargeType:localStorage.getItem("direct"),
            fact:localStorage.getItem("fact"),
            realFact:FactorNumber,
            transaction:tr

            })
          .then(function (response) {
          if (response.data.result == "true") {
              localStorage.setItem("opr","")
              localStorage.setItem("direct","")
              localStorage.setItem("phone","")
              localStorage.setItem("type","")
              localStorage.setItem("amount","")
          // alert("موفقیت آمیز")
          
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
          else{
            axios
            .post(apiUrl + "buyCodeCharge",{
              Username:37068,
            Password:6182,
            Type:  localStorage.getItem("opr"),
            vtpcode:localStorage.getItem("vtp"),
         
            })
          .then(function (response) {
          if (response.data.result == "true") {
              localStorage.setItem("opr","")
              localStorage.setItem("direct","")
              localStorage.setItem("phone","")
              localStorage.setItem("type","")
              localStorage.setItem("vtp","")
          // alert("موفقیت آمیز")
          
          // console.log(userObj?.bundles
            console.log(555555)
            console.log(JSON.parse(response.data.Data))
            console.log(JSON.parse(response.data.Data)?.pin)
          setPin(JSON.parse(response.data.Data)?.pin)
          }
          else{
            let userObj = JSON.parse(response.data.Data);
          
            alert(userObj.description)
          
          }})
          .catch(function (error) {
          console.log(error);
          });
          }
       
        }
        useEffect(()=>{
            console.log(localStorage.getItem("type"))
            verify()
   
          },[])

    return (
        <>
         
        <Header/>
        <Container className="chargePageContainer">
            {/* {
                statusCode==0?
pin?
                <p>تراکنش موفقیت آمیز بود
                  کد:{pin}
                </p>
                :
                <div>

                  <p>تراکنش موفقیت آمیز بود </p>
                  <p>شماره فاکتور:{FactorNumber} </p>
                </div>
                :
                <p>تراکنش لغو شد</p>

            } */}
            <div className="modalDiv">
              <div className="blueBox">
                <button className="closeBtn">
                  X
                </button>
                <div className="blueflex">
                  <div>
                    {   statusCode==0?
                    
                    <p>
                      پرداخت موفق
                    </p>
                  :
                  <p>
                  پرداخت ناموفق
                </p>
                  }
                  </div>
                  {
                    localStorage.getItem("opr")=="0"?

                  <div className="lightBlue">
                    <img src={Mtn}/>
                  </div>
                    :
                    localStorage.getItem("opr")=="1"?
                    <div className="lightBlue">
                    <img src={Mci}/>
                  </div>
                    :
                    localStorage.getItem("opr")=="2"?
                    <div className="lightBlue">
                    <img src={Rightel}/>
                  </div>
                    :
                    null
                  }
                </div>
            </div>
            <div className="tableDiv">
                <div className="d-flex align-items-center pr-1 pl-1 justify-content-between rowPd">
                  {
                    localStorage.getItem("opr")=="0" &&  localStorage.getItem("type")=="net"?
                  <p className="tableHeader ta-right">
                    بسته ایرانسل
                  </p>
                  :
                  localStorage.getItem("opr")=="0" &&  localStorage.getItem("type")!="net"?
                  <p className="tableHeader ta-right">
                  شارژ ایرانسل
                </p>
                :
                null

                  }
                  {
                    localStorage.getItem("opr")=="1" &&  localStorage.getItem("type")=="net"?
                  <p className="tableHeader ta-right">
                    بسته همراه اول
                  </p>
                  :
                  localStorage.getItem("opr")=="1" &&  localStorage.getItem("type")!="net"?
                  <p className="tableHeader ta-right">
                  شارژ همراه اول
                </p>
                :
                null

                  }
                  {
                    localStorage.getItem("opr")=="2" &&  localStorage.getItem("type")=="net"?
                  <p className="tableHeader ta-right">
                    بسته رایتل
                  </p>
                  :
                  localStorage.getItem("opr")=="2" &&  localStorage.getItem("type")!="net"?
                  <p className="tableHeader ta-right">
                  شارژ رایتل
                </p>
                :
                null

                  }
                    {/* {
                     localStorage.getItem("type")=="net"?
                    <p className="tableHeader ta-left">
                    {localStorage.getItem("amountMain")} ریال
                  </p>
                  :
                  <p className="tableHeader ta-left">
                    {localStorage.getItem("amount")} ریال
                </p>
} */}
            <p className="tableHeader ta-left">
                    {amount} ریال
                </p>         
                </div>
                <div className="d-flex align-items-center pr-1 pl-1 justify-content-between rowPd gBack">
                  <p className="tableText ta-right">
                    شماره همراه
                  </p>
                  <p className="tableText ta-left">
                  {localStorage.getItem("phone")}
                                    </p>
                </div>
                <div className="d-flex align-items-center pr-1 pl-1 justify-content-between rowPd">
                  <p className="tableText ta-right">
                    نوع شارژ
                  </p>
                  {
                    pin?
<p className="tableText ta-left">
                    غیر مستقیم
                  </p>
                    :
<p className="tableText ta-left">
                    مستقیم
                  </p>
                  }
                  
                </div>
                <div className="d-flex align-items-center pr-1 pl-1 justify-content-between rowPd gBack">
                  {/* <p className="tableText ta-right">
                    زمان
                  </p>
                  <p className="tableText ta-left">
                    28/01/01 - 17:28
                  </p> */}
                  <p className="tableText ta-right">
                  کد شارژ
                  </p>
                  <p className="tableText ta-left">
                    {pin}
                                      </p>
                </div>
                <div className="d-flex align-items-center pr-1 pl-1 justify-content-between rowPd">
                  <p className="tableText ta-right">
                    کد رهگیری
                  </p>
                  <p className="tableText ta-left">
                  {FactorNumber}                  </p>
                </div>
                <div className="d-flex align-items-center pr-1 pl-1 justify-content-between rowPd gBack">
                  <p className="tableText ta-right">
                    پرداخت از
                  </p>
                  <p className="tableText ta-left">
                ایزی پی </p>
                </div>
            </div>
            <img src={Logo} className="modalLogo"/>
            <p className="logoText">
              پرداخت امن با ایزی پی
            </p>
            </div>
        </Container>
        <Questions/>

    <Footer/>
    </>
    )
}

export default Success;
