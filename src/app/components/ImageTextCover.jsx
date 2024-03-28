// this component is used at [contact, about] pages 

import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import image from "../../../public/header-img.png";
import simpleHeaderBg from "../../../public/simple-header-bg.png"; 

const ImageTextCover = ({ title }) => {
  const headerStyle = {
    backgroundImage: `url(${simpleHeaderBg.src})`,
    backgroundSize: "cover",
  };

  return (
    <header style={headerStyle}>
      <div>
        <Container>
          <Row className="d-flex align-items-center">
            <Col xs={4}>
              <h2 className="h1 text-white fade-up">{title}</h2>
            </Col>
            <Col xs={8} className="d-flex align-items-center justify-content-center">
              <Image src={image} alt="test" className="w-100 h-100 fade-up" />
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default ImageTextCover;

