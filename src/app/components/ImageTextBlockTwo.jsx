// this component is used at [saaed pos] pages 

import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import image from "../../../public/product-3-2.png";
import ImageTextBlockTwoCard from "./ImageTextBlockTwoCard";
import CustomBTN from "./CustomBTN";
import RevealComponent from "./RevealComponent";
import Link from "next/link";

const ImageTextBlockTwo = () => {
  return (
    <section>
      <Container>
        <Row className="d-flex align-items-center">
          <Col xs={12} md={6}>
            <RevealComponent y={100} duration={500} delay={0} threshold={0.75}>
              <h2 className="mb-5">نقطة بيع متنقلة</h2>
            </RevealComponent>
            <Row className="m-0 p-0">
              <Col xs={6}>
                <RevealComponent y={100} duration={500} delay={100} threshold={0.75}>
                  <ImageTextBlockTwoCard text="طابعة مدمجة" />
                </RevealComponent>
              </Col>
              <Col xs={6}>
                <RevealComponent y={100} duration={500} delay={200} threshold={0.75}>
                  <ImageTextBlockTwoCard text="طابعة مدمجة" />
                </RevealComponent>
              </Col>
              <Col xs={6}>
                <RevealComponent y={100} duration={500} delay={300} threshold={0.75}>
                  <ImageTextBlockTwoCard text="إدارة المُنتجات" />
                </RevealComponent>
              </Col>
              <Col xs={6}>
                <RevealComponent y={100} duration={500} delay={400} threshold={0.75}>
                  <ImageTextBlockTwoCard text="نظام اندرويد" />
                </RevealComponent>
              </Col>
            </Row>
            <RevealComponent y={100} duration={500} delay={0} threshold={0.75}>
              <div className="mt-4">
                <Link href="/contact">
              <CustomBTN text="ابدأ الان" arrow={true} />
              </Link>
              </div>
            </RevealComponent>
          </Col>
          <Col xs={12} md={6} className="d-flex align-items-center justify-content-center p-0 mt-5">
              <Image src={image} alt="test" className="w-50" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ImageTextBlockTwo;

