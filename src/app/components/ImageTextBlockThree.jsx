// this component is used at [saaed erp] pages 

import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import image from "../../../public/product-6-2.png";
import ImageTextBlockTwoCard from "./ImageTextBlockTwoCard";
import CustomBTN from "./CustomBTN";
import RevealComponent from "./RevealComponent";

const ImageTextBlockThree = () => {
  return (
    <section>
      <Container>
        <Row className="d-flex align-items-center">
          <Col xs={12} lg={6}>
            <RevealComponent y={100} duration={500} delay={0} threshold={0.75}>
              <ImageTextBlockTwoCard text="أتمتة أعمال و أنشطة المؤسسة و الحد من المخاطر التشغيلية." />
            </RevealComponent>
            <RevealComponent y={100} duration={500} delay={100} threshold={0.75}>
              <ImageTextBlockTwoCard text="ربط أقسام المؤسسة المختلفة بقاعدة بيانات مركزية." />
            </RevealComponent>
            <RevealComponent y={100} duration={500} delay={200} threshold={0.75}>
              <ImageTextBlockTwoCard text="تكامل و ربط النظام ببعض الانظمة الاخرى مثل نقاط البيع ، تطبيقات الهواتـف الذكيـة وغيرها." />
            </RevealComponent>
            <RevealComponent y={100} duration={500} delay={300} threshold={0.75}>
              <ImageTextBlockTwoCard text="سهولة الاستخدام ومتابعة تقارير سير العمل من أي جهاز" />
            </RevealComponent>
            <div className="mt-5">
              <RevealComponent y={100} duration={500} delay={400} threshold={0.75}>
                <CustomBTN text="ابدأ الان" arrow={true} />
              </RevealComponent>
            </div>
          </Col>
          <Col xs={12} lg={6} className="d-flex align-items-center justify-content-center mt-5">
            <RevealComponent y={100} duration={500} delay={0} threshold={0.25}>
              <Image src={image} alt="test" className="w-100" />
            </RevealComponent>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ImageTextBlockThree;

