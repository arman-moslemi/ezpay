
import { Container ,Col, Button,Row} from "react-bootstrap";
import Logo from "../../assets/img/logo.png";
import Banner from "../../assets/img/banner.png";
const Header = () => {

  return (
    <>
     


     <Container className="headerContainer">
     <div className="row headerRow">
       <Col md={2} className="ta-right">
        <img src={Logo} onClick={()=>window.location.href="https://ezpay.ir/charge"} className="logoImg"/>
       </Col>
       <Col md={8} >
          <img src={Banner} className="banner"/>
       </Col>
       <Col md={2} className="ta-left">
        <Button onClick={()=>window.location.href="https://app.ezpay.ir"} className="downloadBtn fontWeightBold">
          اپلیکیشن ایزی پی
        </Button>
       </Col>
     </div>
     
      </Container>
  
    </>
  );
};
export default Header;
