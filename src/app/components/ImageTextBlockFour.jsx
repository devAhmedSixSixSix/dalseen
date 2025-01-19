// this component is used at [saaed pay] pages 

import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import MainTitleAndDescription from "./MainTitleAndDescription";
import CustomBTN from "./CustomBTN";
import RevealComponent from "./RevealComponent";
import Link from "next/link";

const ImageTextBlockFour = ({ image }) => {
  return (
    <section>
      <Container>
        <Row className="d-flex align-items-center">
          <Col xs={12} lg={6}>
            <RevealComponent y={100} duration={500} delay={0} threshold={0.75}>
              <MainTitleAndDescription
                mainTitle={"الحل الأمثل لمشاكل\nمدفوعات الشبكة"}
                description={null}
                textALignment="text-end"
                margin=""
              />
            </RevealComponent>
            <RevealComponent y={100} duration={500} delay={100} threshold={0.75}>
            <Link href="/contact">
              <CustomBTN text="ابدأ الان" arrow={true} />
              </Link>
            </RevealComponent>
          </Col>
          <Col xs={12} lg={6} className="d-flex align-items-center justify-content-center">
            <RevealComponent y={100} duration={500} delay={200} threshold={0.75}>
              <Image src={image} alt="test" className="w-100 h-100" />
            </RevealComponent>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ImageTextBlockFour;

