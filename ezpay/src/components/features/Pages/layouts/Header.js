
import { Container ,Col, Button,Row} from "react-bootstrap";
import Logo from "../../assets/img/logo.png";
import Banner from "../../assets/img/banner.svg";
import Banner2 from "../../assets/img/banner2.svg";
const Header = () => {

  return (
    <>
     


     <Container className="headerContainer">
  <div className="headerRow">
  <div className="row">
       <Col md={2} className="ta-right">
        <img src={Logo} onClick={()=>window.location.href="https://ezpay.ir/charge"} className="logoImg hoverCursor"/>
       </Col>
       <Col md={8} >
          <img src={Banner2} className="banner"/>
       </Col>
       <Col md={2} className="ta-left">
        <Button onClick={()=>window.location.href="https://app.ezpay.ir"} className="downloadBtn fontWeightBold">
          اپلیکیشن ایزی پی
        </Button>
       </Col>
     </div>
  </div>
     <div className="headerRowRes">
     <div className="row" style={{display:'flex',alignItems:'center'}}>
       <Col md={6} className="ta-right">
        <img src={Logo} onClick={()=>window.location.href="https://ezpay.ir/charge"} className="logoImg"/>
       </Col>
       
       <Col md={6} className="ta-left">
        <Button onClick={()=>window.location.href="https://app.ezpay.ir"} className="downloadBtn fontWeightBold">
          اپلیکیشن ایزی پی
        </Button>
       </Col>
       <Col md={12} >
          <img src={Banner2} className="banner"/>
       </Col>
     </div>
     </div>
      </Container>
  
    </>
  );
};
export default Header;
