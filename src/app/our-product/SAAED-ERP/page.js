import { Col, Container, Row } from "react-bootstrap";

import ImageTextBlock from "../../components/ImageTextBlock";
import MainTitleAndDescription from "../../components/MainTitleAndDescription";
import InfoCard from "../../components/InfoCard";
import ImageTextBlockThree from "@/app/components/ImageTextBlockThree";
import Card from "@/app/components/Card";
import bg from "../../../../public/product-page-header-bg.png";

import image1 from "../../../../public/product-6-1.png";
import image3 from "../../../../public/sector-5.png";
import image4 from "../../../../public/sector-6.png";
import image5 from "../../../../public/sector-7.png";
import image6 from "../../../../public/sector-8.png";
import icon1 from "../../../../public/icon-13.png";
import icon2 from "../../../../public/icon-9.png";
import icon3 from "../../../../public/icon-12.png";
import icon4 from "../../../../public/icon-10.png";
import icon5 from "../../../../public/icon-8.png";
import icon6 from "../../../../public/icon-7.png";
import CustomBTN from "@/app/components/CustomBTN";
import RevealComponent from "@/app/components/RevealComponent";
import Link from "next/link";

const page = () => {
  return (
    <div>
      {/* start cover */}
      <ImageTextBlock
        title="إدارة موارد المؤسسات أصبحت أسهل مع SAAED ERP"
        description="احصل على آلية إدارة سلسة لجميع موارد وعمليات شركتك ."
        descriptionFontColor="text-white"
        image={image1}
        bg=""
        oneBTN={false}
        threeBTN={false}
        threeBTNActive=""
        bgImage={bg}
        logos={false}
      />
      {/* end cover */}
      {/* start features */}
      <Container>
        <MainTitleAndDescription
          mainTitle="إدارة موارد المؤسسات أصبحت أسهل مع SAAED ERP"
          description="يتيح لك نظامنا إدارة مختلف موارد وأقسام الشركة ويسهل مراقبة وضبط آليات عمل المؤسسة حيث يشمل عمليات مختلفة من إدارة الموارد البشرية وقسم المالية والمحاسبة وإدارة المخازن والمشتريات وسلاسل الإمداد وإدارة علاقات العملاء والمبيعات وإدارة المشاريع والأصول الثابتة . كما يمكنك من اصدار تقارير تفصيلية عن جميع العمليات المجراة في الشركة ومتابعة آخر المستجدات من أي جهاز."
          textALignment="text-center"
          margin="m-auto"
        />
        <div className="text-center my-5">
        <Link href="/contact">
              <CustomBTN text="ابدأ الان" arrow={true} />
              </Link>
        </div>
        <Row>
          <Col xs={12} sm={6} md={4} lg={2}>
            <RevealComponent y={100} duration={500} delay={0} threshold={0.75}>
              <InfoCard
                styling="text-center"
                icon={icon1}
                title="إدارة موارد بشرية"
                description={null}
              />
            </RevealComponent>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <RevealComponent
              y={100}
              duration={500}
              delay={100}
              threshold={0.75}
            >
              <InfoCard
                styling="text-center"
                icon={icon2}
                title="مشتريات وسلاسل الإمداد"
                description={null}
              />
            </RevealComponent>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <RevealComponent
              y={100}
              duration={500}
              delay={200}
              threshold={0.75}
            >
              <InfoCard
                styling="text-center"
                icon={icon3}
                title="تقارير تفصيلية"
                description={null}
              />
            </RevealComponent>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <RevealComponent
              y={100}
              duration={500}
              delay={300}
              threshold={0.75}
            >
              <InfoCard
                styling="text-center"
                icon={icon4}
                title="إدارة الأصول الثابتة"
                description={null}
              />
            </RevealComponent>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <RevealComponent
              y={100}
              duration={500}
              delay={400}
              threshold={0.75}
            >
              <InfoCard
                styling="text-center"
                icon={icon5}
                title="أدوات محاسبية"
                description={null}
              />
            </RevealComponent>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <RevealComponent
              y={100}
              duration={500}
              delay={500}
              threshold={0.75}
            >
              <InfoCard
                styling="text-center"
                icon={icon6}
                title="إدارة علاقات العملاء"
                description={null}
              />
            </RevealComponent>
          </Col>
        </Row>

        <MainTitleAndDescription
          mainTitle="مميزات النـظام"
          description={null}
          textALignment="text-center"
          margin="m-auto"
        />
        <ImageTextBlockThree />
        <MainTitleAndDescription
          mainTitle="نوظف البيانـات لضمان أفضل إدارة لمنشأتك أفضل استخدام لمواردك"
          description={null}
          textALignment="text-center"
          margin="m-auto"
        />
        <Row className="py-5">
          <Col xs={12} md={6} lg={3} className="mb-5">
            <RevealComponent y={100} duration={500} delay={0} threshold={0.75}>
              <Card
                textAlignment="center"
                border={false}
                shadow={true}
                displayMore={false}
                titleFontColor="text-black-50"
                icon={image3}
                title="تحليل البيانات لتسهيل اتخاذ قرارات إدارية أدق"
                description={null}
              />
            </RevealComponent>
          </Col>
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
                shadow={true}
                icon={image4}
                title="احتساب الأرباح المتوقعة"
                description={null}
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
                shadow={true}
                titleFontColor="text-black-50"
                icon={image5}
                title="تحليل اهتمامات وسلوكيات العملاء الشرائية"
                description={null}
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
                title="إحصائيات بيانية للمبيعات مع تحديد مناطق الربح والخسارة"
                description={null}
              />
            </RevealComponent>
          </Col>
        </Row>
        {/* start features */}
      </Container>
    </div>
  );
};

export default page;
