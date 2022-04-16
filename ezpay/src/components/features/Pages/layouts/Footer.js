
import { Container ,Col, Button,Row} from "react-bootstrap";
import Logo from "../../assets/img/logo.png";
import Enamad from "../../assets/img/enamad.png";
import Samandehi from "../../assets/img/samandehi.png";
import Phone from "../../assets/icon/FooterPhone.js";
import Email from "../../assets/icon/Email.js";
import Address from "../../assets/icon/Address.js";
import Twitter from "../../assets/img/twitter.png";
import Facebook from "../../assets/img/facebook.png";
import Telegram from "../../assets/img/telegram.png";
import Instagram from "../../assets/img/instagram.png";
import Playstore from "../../assets/img/playstore.png";
import Bazar from "../../assets/img/bazar.png";
import Pwa from "../../assets/img/pwa.png";
import Myket from "../../assets/img/myket.png";
import Talia from "../../assets/img/talia.png";
import Rightel from "../../assets/img/rightel-f.png";
import Mci from "../../assets/img/mci-f.png";
import Mtn from "../../assets/img/mtn.png";
const Footer = () => {

  return (
    <>
     
    
     <Container className="FooterContainer desktopFooter" fluid>
      <Container className="d-flex align-items-center" fluid>
      <div className="footerFirstCol">
        <p className="footerTitle">
          اطلاعات تماس
        </p>
        <br/>
        <div className="d-flex align-items-center">
          <Phone/>
          <p className="footerDetail">
            02143617
          </p>
        </div>
        <div className="d-flex align-items-center">
          <Email/>
          <p className="footerDetail">
            info@ezpay.ir
          </p>
        </div>
        <div className="d-flex align-items-center">
          <Address/>
          <p className="footerDetail">
          تهران، میدان هفت تیر،خیابان قائم مقام فراهانی،میدان شعاع،خیابان هجدهم،پلاک 21 
          </p>
        </div>
      </div>
      <div className="footerSecondCol ta-center mt5">
        <div className="d-flex justify-content-center mb-3">
        <img src={Twitter} className="footerIcon"/>
        <img src={Instagram} className="footerIcon"/>
        <img src={Telegram} className="footerIcon"/>
        <img src={Facebook} className="footerIcon"/>
        
        </div>
        <p className="footerDetail ta-center" style={{marginRight:0}}>
        تمامی حقوق مادی و معنوی این وب‌سایت متعلق به ایزی پی می‌باشد.
        </p>
      </div>
      <div className="footerThirdCol">
      <p className="footerTitle">
          دانلود اپلیکیشن
        </p>
        <div className="d-flex justify-content-between mt-4">
          <img src={Playstore} className="dlIcon"/>
          <img src={Bazar} className="dlIcon"/>
          
        </div>
        <div className="d-flex justify-content-between">
        <img src={Pwa} className="dlIcon"/>
          <img src={Myket} className="dlIcon"/>
        </div>
        </div>
        <div className="footerFourthCol">
        <div className="d-flex justify-content-center mt-2">
          <img src={Mtn} className="simIcon"/>
          <img src={Rightel} className="simIcon mr25"/>
        </div>
        <div className="d-flex justify-content-center">
          <img src={Mci} className="simIcon"/>
          <img src={Talia} className="simIcon mr10"/>
        </div>
        </div>
      </Container>
      </Container>
      <Container className="FooterContainer responsiveFooter" fluid>
      <Container className="" fluid>
    <div className="d-flex">
    <div className="resFooterFirstCol ta-right">
      <p className="footerTitle">
          دانلود اپلیکیشن
        </p>
        
          <img src={Playstore} className="dlIcon"/>
          <br/>
          <img src={Bazar} className="dlIcon"/>
          <br/>
        
       
        <img src={Pwa} className="dlIcon"/>
        <br/>
          <img src={Myket} className="dlIcon"/>
        <br/>


      </div>
      <div className="resFooterSecondCol ta-right">
        
      <p className="footerTitle">
          اطلاعات تماس
        </p>
        <br/>
        <div className="d-flex align-items-center mb-3">
          <Phone/>
          <p className="footerDetail">
            02143617
          </p>
        </div>
        <div className="d-flex align-items-center mb-3">
          <Email/>
          <p className="footerDetail">
            info@ezpay.ir
          </p>
        </div>
        <div className="d-flex align-items-center">
          <Address/>
          <p className="footerDetail">
          تهران، میدان هفت تیر،خیابان قائم مقام فراهانی،میدان شعاع،خیابان هجدهم،پلاک 21 
          </p>
        </div>


     
      </div>
    </div>
      <div className="d-flex mt-5">
      <div className="resFooterThirdCol">
      <div className="shareRow mb-3">
        <img src={Twitter} className="footerIcon"/>
        <img src={Instagram} className="footerIcon"/>
        
        </div>
        <div className="shareRow mb-3">
        <img src={Telegram} className="footerIcon"/>
        <img src={Facebook} className="footerIcon"/>
        
        </div>
        <p className="footerDetail ta-right" style={{marginRight:0}}>
        تمامی حقوق مادی و معنوی این وب‌سایت متعلق به ایزی پی می‌باشد.
        </p>
        </div>
        <div className="resFooterFourthCol ta-left">
        <div className="d-flex justify-content-center">
          <img src={Mtn} className="simIcon"/>
          <img src={Rightel} className="simIcon mr25"/>
        </div>
        <div className="d-flex justify-content-center">
          <img src={Mci} className="simIcon"/>
          <img src={Talia} className="simIcon mr10"/>
        </div>
        </div>
      </div>
      </Container>
      </Container>
    </>
  );
};
export default Footer;
