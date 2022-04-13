
import { Container ,Col, Button,Row} from "react-bootstrap";
import Logo from "../../assets/img/logo.png";

const Header = () => {

  return (
    <>
     


     <Container className="headerContainer">
     <div className="row headerRow">
       <Col md={6} className="ta-right">
        <img src={Logo} onClick={()=>window.location.href="https://ezpay.ir/charge"} className="logoImg"/>
       </Col>
       <Col md={6} className="ta-left">
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
