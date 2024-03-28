// this component is used at [home, system design, wedsite design and programing, cloud hosting, saaed crm, saaed realestate, saaed erp, saaed rst, saaed pos, saaed pay] pages 

import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import CustomBTN from "./CustomBTN";
import logo1 from "../.../../../../public/logo-1 (1).png";
import logo2 from "../.../../../../public/logo-2 (1).png";
import CustomBTNTwo from "./CustomBTNTwo";
import RevealComponent from "./RevealComponent";

const ImageTextBlock = ({
  title,
  description,
  image,
  bg,
  oneBTN,
  bgImage,
  logos,
  threeBTN,
  threeBTNActive,
  descriptionFontColor,
}) => {
  const customBg = {
    backgroundColor: bg,
    backgroundImage: `url(${bgImage.src})`,
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
  };

  return (
    <section style={customBg}>
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col xs={12} lg={7}>
            <RevealComponent y={100} duration={500} delay={0} threshold={0.75}>
              <h2 className="h1 fw-bolder mt-5">{title}</h2>
            </RevealComponent>
            <RevealComponent
              y={100}
              duration={500}
              delay={200}
              threshold={0.25}
            >
              <p className={`${descriptionFontColor} my-5 fs-5`}>
                {description}
              </p>
            </RevealComponent>
            <RevealComponent y={100} duration={500} delay={300} threshold={0}>
              {oneBTN && <CustomBTN text="تصفح منتجاتنا" arrow={false} />}
            </RevealComponent>
            <RevealComponent
              y={100}
              duration={500}
              delay={300}
              threshold={0.75}
            >
              {logos && (
                <Row>
                  <Col>
                    <Image src={logo1} alt="Logo" className="w-100 h-100" />
                  </Col>
                  <Col>
                    <Image src={logo2} alt="Logo" className="w-100 h-100" />
                  </Col>
                </Row>
              )}
            </RevealComponent>
            {threeBTN && (
              
                <Row>
                  <Col xs={6} lg={4}>
                  <RevealComponent
                    y={100}
                    duration={500}
                    delay={300}
                    threshold={0.75}
                  >
                    <CustomBTNTwo
                      text="برمجة المواقع والتطبيقات"
                      active={threeBTNActive === "1" ? false : true}
                    />
                  </RevealComponent>
                  </Col>
                  <Col  xs={6} lg={4}>
                    <RevealComponent
                      y={100}
                      duration={500}
                      delay={400}
                      threshold={0.75}
                    >
                      <CustomBTNTwo
                        text="الاستضافة والخدمات السحابية"
                        active={threeBTNActive === "2" ? true : false}
                      />
                    </RevealComponent>
                  </Col>
                  <Col  xs={6} lg={4}>
                    <RevealComponent
                      y={100}
                      duration={500}
                      delay={500}
                      threshold={0.75}
                    >
                      <CustomBTNTwo
                        text="تصميم الانظمة"
                        active={threeBTNActive === "3" ? true : false}
                      />
                    </RevealComponent>
                  </Col>
                </Row>
                
              
            )}
          </Col>
          <Col
            xs={12}
            lg={5}
            className="d-flex align-items-center justify-content-center my-5"
          >
            <RevealComponent y={100} duration={500} delay={0} threshold={0.25}>
              <Image src={image} alt="test" className="w-100 h-100" />
            </RevealComponent>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ImageTextBlock;
