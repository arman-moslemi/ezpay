
import { Container ,Col, Button,Row} from "react-bootstrap";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Questions from "../layouts/Questions";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Irancell from "../../assets/img/irancell.png";
import Taliya from "../../assets/img/taliya.png";
import Mci from "../../assets/img/mci.png";
import Rightel from "../../assets/img/rightel.png";
import Phone from "../../assets/icon/Phone";
import ChargeSlider from "../layouts/ChargeSlider";
const ChargeInner = () => {

  return (
    <>
     
    <Header/>
    <Container className="chargePageContainer">
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
        <div className="tabBox w200 tabBoxActiveMain">
          <p className="tabBoxActive">
            شارژ مستقیم
          </p>
        </div>
        <div className="tabBox w200">
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
        <input placeholder=""/>
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
        <div className="tabBox w200">
          <img src={Irancell}/>
          <p className="tabBoxText">
            ایرانسل
          </p>
        </div>
        <div className="tabBox w200 tabBoxActiveMain">
          <img src={Mci}/>
          <p className="tabBoxActive">
           همراه اول
          </p>
        </div>
        <div className="tabBox w200">
          <img src={Rightel}/>
          <p className="tabBoxText">
            رایتل
          </p>
        </div>
        <div className="tabBox w200">
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
        <div className="tabBox pdLR15 w127 tabBoxActiveMain">
          <p className="tabBoxActive">
            1 هزارتومان
          </p>
        </div>
        <div className="tabBox pdLR15 w127">
          <p className="tabBoxText">
           2 هزارتومان
          </p>
        </div>
        <div className="tabBox pdLR15 w127 tabBoxActiveMain">
          <p className="tabBoxActive">
            5 هزارتومان
          </p>
        </div>
        <div className="tabBox pdLR15 w127">
          <p className="tabBoxText">
           10 هزارتومان
          </p>
        </div>
        <div className="tabBox pdLR15 w127 tabBoxActiveMain">
          <p className="tabBoxActive">
            20 هزارتومان
          </p>
        </div>
        <div className="tabBox pdLR15 w127">
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
        <Button className="payBtn">
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
        <input placeholder=""/>
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
        <div className="tabBox w200">
          <img src={Irancell}/>
          <p className="tabBoxText">
            ایرانسل
          </p>
        </div>
        <div className="tabBox w200 tabBoxActiveMain">
          <img src={Mci}/>
          <p className="tabBoxActive">
           همراه اول
          </p>
        </div>
        <div className="tabBox w200">
          <img src={Rightel}/>
          <p className="tabBoxText">
            رایتل
          </p>
        </div>
        <div className="tabBox w200">
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
        <div className="tabBox w200 tabBoxActiveMain">
          <p className="tabBoxActive">
            دائمی
          </p>
        </div>
        <div className="tabBox w200">
          <p className="tabBoxText">
           اعتباری
          </p>
        </div>
        <div className="tabBox w200">
          <p className="tabBoxText">
           دیتا
          </p>
        </div>
        <div className="tabBox w200">
          <p className="tabBoxText fontUnset">
           TD-LTE
          </p>
        </div>
        </div>
      </div>
      <div className="row d-flex justify-content-start align-items-center pdtop30 pdbottom30">
       <Col md={7} className="chargeSliderDiv pd0">
        <ChargeSlider/>
       </Col>
     <Col md={5} className="pd0 d-flex justify-content-start align-items-center pdtop30 pdbottom30 borderBottom">
     
       <div className="tabBox w97 margin2">
          <p className="tabBoxText">
          ساعتی
          </p>
        </div>
        <div className="tabBox w97 margin2">
          <p className="tabBoxText">
          روزانه
          </p>
        </div>
        <div className="tabBox w97 margin2">
          <p className="tabBoxText">
          کوتاه مدت
          </p>
        </div>
        <div className="tabBox w97 margin2">
          <p className="tabBoxText">
          ماهانه
          </p>
        </div>
        <div className="tabBox w97 margin2">
          <p className="tabBoxText">
          بلند مدت
          </p>
        </div>
      
     </Col>
      </div>
      
      <div className="d-flex justify-content-end">
        <Button className="payBtn">
          پرداخت
        </Button>
      </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
       </div>
       <Questions/>
       
    </Container>
    <Footer/>
    </>
  );
};
export default ChargeInner;
