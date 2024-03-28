import { Col, Container, Row } from "react-bootstrap";

import ImageTextCover from "../components/ImageTextCover";
import InfoCard from "../components/InfoCard";
import MainTitleAndDescription from "../components/MainTitleAndDescription";
import Card from "../components/Card";

import icon1 from "../../../public/icon-1.png";
import icon2 from "../../../public/icon-2.png";
import icon3 from "../../../public/icon-3.png";
import icon4 from "../../../public/icon-4.png";
import icon5 from "../../../public/icon-5.png";
import icon6 from "../../../public/icon-6.png";
import image1 from "../../../public/vision.png";
import image2 from "../../../public/mission.png";
import image3 from "../../../public/value.png";
import image4 from "../../../public/sector-1.png";
import image5 from "../../../public/sector-2.png";
import image6 from "../../../public/sector-3.png";
import image7 from "../../../public/sector-2.png";
import RevealComponent from "../components/RevealComponent";

const page = () => {
  return (
    <>
      {/* start cover */}
      <ImageTextCover title="من نحن" />
      {/* end cover */}
      <Container>
        {/* start why us */}
        <MainTitleAndDescription
          mainTitle="لماذا نحن شريكك التقني الأفضل؟"
          description={null}
          textALignment="text-center"
          margin="m-auto"
        />
        <Row className="g-4 pt-3">
          <Col xs={12} md={6} lg={4}>
            <RevealComponent
              y={100}
              duration={500}
              delay={100}
              threshold={0.75}
            >
              <InfoCard
                styling="d-flex align-items-start"
                icon={icon1}
                title="خدمات احترافية"
                description="نحرص على رضا عملائنا عبر تنفيذ أفضل الحلول التقنية."
              />
            </RevealComponent>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <RevealComponent
              y={100}
              duration={500}
              delay={200}
              threshold={0.75}
            >
              <InfoCard
                styling="d-flex align-items-start"
                icon={icon2}
                title="تقنيات حديثة"
                description="نضع آخر مستجدات التقنية بين يديك مع تحديثات مستمرة للأنظمة."
              />
            </RevealComponent>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <RevealComponent
              y={100}
              duration={500}
              delay={300}
              threshold={0.75}
            >
              <InfoCard
                styling="d-flex align-items-start"
                icon={icon3}
                title="دعم فني لجميع المراحل"
                description="دعم فني معك من البداية وعبر جميع المراحل."
              />
            </RevealComponent>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <RevealComponent
              y={100}
              duration={500}
              delay={400}
              threshold={0.75}
            >
              <InfoCard
                styling="d-flex align-items-start"
                icon={icon4}
                title="خدمات احترافية"
                description="نقدم لك حلول مبتكرة تتناسب مع نموذج عملك."
              />
            </RevealComponent>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <RevealComponent
              y={100}
              duration={500}
              delay={500}
              threshold={0.75}
            >
              <InfoCard
                styling="d-flex align-items-start"
                icon={icon5}
                title="خدمات احترافية"
                description="أنظمتنا مصممة خصيصاً لتلائم مختلف العمليات في مؤسستك."
              />
            </RevealComponent>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <RevealComponent
              y={100}
              duration={500}
              delay={600}
              threshold={0.75}
            >
              <InfoCard
                styling="d-flex align-items-start"
                icon={icon6}
                title="خدمات احترافية"
                description="نتيح لك ربط أنظمتنا مع خدمات أخرى لتحقيق التكامل."
              />
            </RevealComponent>
          </Col>
        </Row>
        {/* end why us */}
        {/* start our vision */}
        <Row className="my-5">
          <Col xs={12} md={6} lg={4}>
            <RevealComponent
              y={100}
              duration={500}
              delay={100}
              threshold={0.75}
            >
              <Card
                textAlignment="center"
                border={true}
                displayMore={false}
                icon={image1}
                shadow={false}
                title="رؤيتنا"
                description="أن نكون النموذج الأمثل للريادة التقنية في المنطقة."
              />
            </RevealComponent>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <RevealComponent
              y={100}
              duration={500}
              delay={200}
              threshold={0.75}
            >
              <Card
                textAlignment="center"
                border={true}
                displayMore={false}
                icon={image2}
                shadow={false}
                title="رسالتنا"
                description="تحقيق أبعد مدى يمكن أن تصل إليه التقنية في حل مشاكل مختلف الأعمال."
              />
            </RevealComponent>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <RevealComponent
              y={100}
              duration={500}
              delay={300}
              threshold={0.75}
            >
              <Card
                textAlignment="center"
                border={true}
                displayMore={false}
                icon={image3}
                title="قيمنا"
                shadow={false}
                description="قيمتنا تكمن في تقديم حلول استثنائية تدفعكم للنجاح وإلى المقدمة."
              />
            </RevealComponent>
          </Col>
        </Row>
        {/* end our vision */}

        {/* start our wide ranage of servises */}
        <MainTitleAndDescription
          mainTitle="نخدم قطاعات واسعة من الأعمال"
          description={null}
          textALignment="text-center"
          margin="m-auto"
        />
        <Row>
          <Col xs={12} md={6} lg={3} className="mb-5">
            <RevealComponent
              y={100}
              duration={500}
              delay={100}
              threshold={0.75}
            >
              <Card
                textAlignment="center"
                border={false}
                displayMore={false}
                titleFontColor="text-black-50"
                icon={image4}
                shadow={true}
                title="قطاع التعليم والتدريب"
                description=""
              />
            </RevealComponent>
          </Col>
          <Col xs={12} md={6} lg={3} className="mb-5">
            <RevealComponent
              y={100}
              duration={500}
              delay={200}
              threshold={0.75}
            >
              <Card
                textAlignment="center"
                border={false}
                displayMore={false}
                titleFontColor="text-black-50"
                icon={image5}
                shadow={true}
                title="قطاع بيع التجزئة"
                description=""
              />
            </RevealComponent>
          </Col>
          <Col xs={12} md={6} lg={3} className="mb-5">
            <RevealComponent
              y={100}
              duration={500}
              delay={300}
              threshold={0.75}
            >
              <Card
                textAlignment="center"
                border={false}
                displayMore={false}
                titleFontColor="text-black-50"
                shadow={true}
                icon={image6}
                title="قطاع المطاعم والمقاهي"
                description=""
              />
            </RevealComponent>
          </Col>
          <Col xs={12} md={6} lg={3} className="mb-5">
            <RevealComponent
              y={100}
              duration={500}
              delay={400}
              threshold={0.75}
            >
              <Card
                textAlignment="center"
                border={false}
                displayMore={false}
                titleFontColor="text-black-50"
                shadow={true}
                icon={image7}
                title="قطاع العقارات"
                description=""
              />
            </RevealComponent>
          </Col>
        </Row>
        {/* end our wide ranage of servises */}
      </Container>
    </>
  );
};

export default page;
