import { Col, Container, Row } from "react-bootstrap";

import ImageTextBlock from "../../components/ImageTextBlock";
import MainTitleAndDescription from "../../components/MainTitleAndDescription";
import InfoCard from "../../components/InfoCard";
import Slider from "@/app/components/Slider";
import TextNumberCard from "@/app/components/TextNumberCard";
import ImageTextBlockFour from "@/app/components/ImageTextBlockFour";
import RevealComponent from "@/app/components/RevealComponent";

import bg from "../../../../public/product-page-header-bg.png";
import image1 from "../../../../public/product-6-1.png";
import image2 from "../../../../public/product-6-1.png";
import icon1 from "../../../../public/icon-25.png";
import icon2 from "../../../../public/icon-26.png";
import icon3 from "../../../../public/icon-27.png";

import logo1 from "../../../../public/crm.png";
import logo2 from "../../../../public/cashir.png";
import logo3 from "../../../../public/erp.png";
import logo4 from "../../../../public/learning.png";
import logo5 from "../../../../public/Saaed-Store.png";
import logo6 from "../../../../public/Real-Estate-Management.png";

const page = () => {
  const sliderIcons = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <div>
      {/* start cover */}
      <ImageTextBlock
        title="SAAEDPAY | نظام السعد للمدفوعات"
        description="نقدم لكم حلول دفع مرنة ومتعددة الميزات"
        descriptionFontColor="text-white"
        image={image1}
        bg=""
        oneBTN={false}
        threeBTN={false}
        threeBTNActive=""
        bgImage={bg}
        logos={false}
      />
      {/* start cover */}
      {/* start featerus */}
      <Container>
        <MainTitleAndDescription
          mainTitle="حول أي جهاز إلى نقطة دفع متنقلة وبدون معاملات مطولة"
          description=""
          textALignment="text-center"
          margin="m-auto"
        />
        <Row>
          <Col xs={12} md={4}>
            <RevealComponent y={100} duration={500} delay={0} threshold={0.75}>
              <InfoCard
                styling="text-center"
                icon={icon1}
                title="قنوات دفع مرنة"
                description={null}
              />
            </RevealComponent>
          </Col>
          <Col xs={12} md={4}>
            <RevealComponent
              y={100}
              duration={500}
              delay={100}
              threshold={0.75}
            >
              <InfoCard
                styling="text-center"
                icon={icon2}
                title="عمليـــــــات آمنــــــة"
                description={null}
              />
            </RevealComponent>
          </Col>
          <Col xs={12} md={4}>
            <RevealComponent
              y={100}
              duration={500}
              delay={200}
              threshold={0.75}
            >
              <InfoCard
                styling="text-center"
                icon={icon3}
                title="تكاليــــــف ميسرة"
                description={null}
              />
            </RevealComponent>
          </Col>
        </Row>
        <MainTitleAndDescription
          mainTitle="ابدأ استقبال دفعاتك المالية بـ 3 خطوات بسيطة"
          description={null}
          textALignment="text-center"
          margin="m-auto"
        />
        <Row className="py-5 my-5">
          <Col xs={12} md={4} className="mb-5">
            <RevealComponent y={100} duration={500} delay={0} threshold={0.75}>
              <TextNumberCard text="ارسل مستنداتك" number="01" />
            </RevealComponent>
          </Col>
          <Col xs={12} md={4} className="mb-5">
            <RevealComponent
              y={100}
              duration={500}
              delay={100}
              threshold={0.75}
            >
              <TextNumberCard text="دعنا نسجل معلوماتك" number="02" />
            </RevealComponent>
          </Col>
          <Col xs={12} md={4} className="mb-5">
            <RevealComponent
              y={100}
              duration={500}
              delay={200}
              threshold={0.75}
            >
              <TextNumberCard text="استقبل مدفوعاتك" number="03" />
            </RevealComponent>
          </Col>
        </Row>
      </Container>
      <ImageTextBlockFour image={image2} />
      <Container>
        <MainTitleAndDescription
          mainTitle="احصل على كفاءة الأداء القصوى من خلال دمج المدفوعات مع أنظمتنا الأخرى"
          description={null}
          textALignment="text-center"
          margin="m-auto"
        />
        {/* end featerus */}
        {/* start slider */}
        <Slider data={sliderIcons} />
        {/* start slider */}
      </Container>
    </div>
  );
};

export default page;
