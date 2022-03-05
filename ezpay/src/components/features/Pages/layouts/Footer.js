
import { Container ,Col, Button,Row} from "react-bootstrap";
import Logo from "../../assets/img/logo.png";
import Enamad from "../../assets/img/enamad.png";
import Samandehi from "../../assets/img/samandehi.png";
const Footer = () => {

  return (
    <>
     
    
     <Container className="FooterContainer" fluid>
      <Container className="d-flex justify-content-end">
      
      
        <div className="footerIconBox">
        <img src={Samandehi} className="w60"/>
        </div>
        <div className="footerIconBox">
        <img src={Enamad}/>
        </div>
        <div className="footerIconBox">
        <img src={Logo}/>
        </div>
      </Container>
      </Container>
  
    </>
  );
};
export default Footer;
