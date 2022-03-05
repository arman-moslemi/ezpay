
import { Container ,Col, Button,Row} from "react-bootstrap";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Questions from "../layouts/Questions";
import Icon1 from "../../assets/img/i1.png";
import Icon2 from "../../assets/img/i2.png";
import Icon3 from "../../assets/img/i3.png";
const Charge = () => {

  return (
    <>
     
    <Header/>
    <Container className="chargePageContainer">
    <div className="whiteBox">
       <div className="row boxRow">
         <Col md={4}>
          <div className="innerWhiteBox">
            <img src={Icon2} id="Icon2"/>
            <p>شارژ سیم کارت</p>
          </div>
         </Col>
         <Col md={4}>
          <div className="innerWhiteBox">
          <img src={Icon3}  id="Icon3"/>
          <p>
            بسته اینترنت
          </p>
          </div>
         </Col>
         <Col md={4}>
          <div className="innerWhiteBox">
          <img src={Icon1}  id="Icon1"/>
          <p>
            پرداخت قبض
          </p>
          </div>
         </Col>
       </div>
       </div>
       <Questions/>
       
    </Container>
    <Footer/>
    </>
  );
};
export default Charge;
