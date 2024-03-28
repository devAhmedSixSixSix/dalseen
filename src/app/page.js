import styles from "./page.module.css";
import { Col, Container, Row } from "react-bootstrap";
import ImageTextBlock from "./components/ImageTextBlock";
import Card from "./components/Card";
import MainTitleAndDescription from "./components/MainTitleAndDescription";
import Slider from "./components/Slider";
import FormOne from "./components/FormOne";
import InfoCard from "./components/InfoCard";

import saaedSubscriptions from "../../public/saaed_subscriptions.png";
import bg from "../../public/home-apps-bg.png";
import homeAppsImg from "../../public/home-apps-img.png";

import icon1 from "../../public/product-1.svg";
import icon2 from "../../public/product-2.svg";
import icon3 from "../../public/product-3.svg";
import icon4 from "../../public/product-4.svg";
import icon5 from "../../public/product-5.svg";
import icon6 from "../../public/product-6.svg";

import icon7 from "../../public/icon-service-1.svg";
import icon8 from "../../public/icon-service-2.svg";
import icon9 from "../../public/icon-service-3.svg";

import icon10 from "../../public/service-1.png";
import icon11 from "../../public/service-2.png";
import icon12 from "../../public/service-3.png";

import logo1 from "../../public/logo-1.png";
import logo2 from "../../public/logo-2.png";
import logo3 from "../../public/logo-3.png";
import logo4 from "../../public/logo-4.png";
import logo5 from "../../public/logo-5.png";
import logo6 from "../../public/logo-6.png";
import logo7 from "../../public/logo-7.png";
import RevealComponent from "./components/RevealComponent";

export default function Home() {
  const customBgForOurProducts = {
    backgroundColor: "#F6F6F8",
  };

  const sliderIcons = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {/* start cover */}
        <ImageTextBlock
          title="احصل على حلول تقنية متكاملة"
          description="متخصصون في بناء أنظمة تقنية بأدوات متكاملة تنمي أعمالك، تزيد مبيعاتك، وتدير مختلف العمليات الإدارية والتشغيلية في منشأتك بسلاسة."
          descriptionFontColor="text-black-50"
          image={saaedSubscriptions}
          bg="#F0F0F0"
          oneBTN={true}
          bgImage=""
          logos={false}
        />
        {/* end cover */}

        {/* start our products */}

        <div style={customBgForOurProducts} className="pb-5 custom-bg">
          <Container>
            <MainTitleAndDescription
              mainTitle="منتجاتنا"
              description="تعرّف على حلولنا المرنة المصممة خصيصاً لتناسب أعمالك"
              textALignment="text-center"
              margin="m-auto"
            />
            <Row className="g-4 pb-5">
              <Col xs={12} md={6} lg={4}>
                <RevealComponent
                  y={100}
                  duration={500}
                  delay={0}
                  threshold={0.75}
                >
                  <Card
                    textAlignment="center"
                    displayMore={true}
                    border={false}
                    className="h-100"
                    titleFontColor="text-black"
                    shadow={true}
                    icon={icon1}
                    title="SAAED REALESTATE | نظام السعد العقاري"
                    description="قم بإدارة جميع عقاراتك الآن من لوحة تحكم واحدة."
                  />
                </RevealComponent>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <RevealComponent
                  y={100}
                  duration={500}
                  delay={100}
                  threshold={0.75}
                >
                  <Card
                    textAlignment="center"
                    displayMore={true}
                    border={false}
                    titleFontColor="text-black"
                    shadow={true}
                    className="h-100"
                    icon={icon2}
                    title="SAAED CRM | إدارة علاقات العملاء"
                    description="اضمن رضا عملائك عبر إداراتنا الفعالة لجميع مراحل رحلة العميل."
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
                    displayMore={true}
                    border={false}
                    className="h-100"
                    titleFontColor="text-black"
                    shadow={true}
                    icon={icon3}
                    title="SAAED POS | نقاط البيع"
                    description="نقدم لك نقطة بيع عالية الأداء تسهل لك إدارة المبيعات والمشتريات بكفاءة"
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
                    displayMore={true}
                    border={false}
                    className="h-100"
                    shadow={true}
                    titleFontColor="text-black"
                    icon={icon4}
                    title="SAAED RST | نظام إدارة المطاعم والمقاهي"
                    description="إدارة جميع عمليات مطعمك من مكان واحد وبكفاءة عالية"
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
                  <Card
                    textAlignment="center"
                    displayMore={true}
                    border={false}
                    titleFontColor="text-black"
                    className="h-100"
                    icon={icon5}
                    shadow={true}
                    title="SAAEDPAY | نظام السعد للمدفوعات"
                    description="نقدم لكم حلول دفع مرنة ومتعددة الميزات"
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
                  <Card
                    textAlignment="center"
                    displayMore={true}
                    titleFontColor="text-black"
                    border={false}
                    className="h-100"
                    shadow={true}
                    icon={icon6}
                    title="SAAED ERP | نظام السعد للمؤسسات"
                    description="احصل على آلية إدارة سلسة لجميع موارد وعمليات شركتك ."
                  />
                </RevealComponent>
              </Col>
            </Row>
          </Container>
        </div>
        {/* end our products */}
        {/* start our sloutions */}
        <Container>
          <MainTitleAndDescription
            mainTitle="حلول متكاملة وخيارات لا محدودة"
            description={null}
            textALignment="text-center"
            margin="m-auto"
          />
          <Row className="pt-5 g-4">
            <Col xs={12} md={6} lg={4}>
              <RevealComponent
                y={100}
                duration={500}
                delay={0}
                threshold={0.75}
              >
                <InfoCard
                  styling="d-flex align-items-start"
                  title="خدمة احترافية"
                  description="نحرص على رضا عملائنا عبر تنفيذ أفضل الحلول التقنية."
                  icon={icon7}
                />
              </RevealComponent>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <RevealComponent
                y={100}
                duration={500}
                delay={100}
                threshold={0.75}
              >
                <InfoCard
                  styling="d-flex align-items-start"
                  title="تقنيات حديثة"
                  description="آخر مستجدات التقنية بين يديك."
                  icon={icon8}
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
                  title="دعم فني لجميع المراحل"
                  description="دعم فني معك من البداية وعبر جميع المراحل."
                  icon={icon9}
                />
              </RevealComponent>
            </Col>
          </Row>
          {/* end our sloutions */}
          {/* start our servises */}
          <Row className="g-3 mb-5">
            <MainTitleAndDescription
              mainTitle="خدماتنا"
              description={null}
              textALignment="text-center"
              margin="m-auto"
            />
            <Col xs={12} md={6} lg={4}>
              <RevealComponent
                y={100}
                duration={500}
                delay={0}
                threshold={0.75}
              >
                <Card
                  textAlignment="end"
                  displayMore={true}
                  titleFontColor="text-black"
                  border={false}
                  icon={icon10}
                  shadow={true}
                  title="خدمات برمجة المواقع والتطبيقات"
                  description="اطلق موقعك أو تطبيقك الإلكتروني الآن بجودة تصميم عالية وبنية برمجية قوية."
                />
              </RevealComponent>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <RevealComponent
                y={100}
                duration={500}
                delay={100}
                threshold={0.75}
              >
                <Card
                  textAlignment="end"
                  displayMore={true}
                  titleFontColor="text-black"
                  border={false}
                  icon={icon11}
                  shadow={true}
                  title="خدمة الإستـضافة السحابية"
                  description="كفاءة الأداء والمرونة في الإدارة بسرعة وأمان مع خدماتنــا السحـــابية."
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
                  textAlignment="end"
                  titleFontColor="text-black"
                  displayMore={true}
                  border={false}
                  shadow={true}
                  icon={icon12}
                  title="خدمات تصميم الأنظمة"
                  description="اجمع التصميم الذكي والحل التقني في نظام واحد يسهّل سير أعمالك."
                />
              </RevealComponent>
            </Col>
          </Row>
          {/* end our servises */}
        </Container>
        {/* start manage business */}
        <ImageTextBlock
          title="إدارة أعمالك من أي جهاز وفي أي مكــان"
          description="بإمكانك متابعة أعمالك على أي جهاز تملكه، فأنظمتنا تعمل على جميع الأجهزة والمنصـات بنفس الكفاءة"
          descriptionFontColor="text-black-50"
          image={homeAppsImg}
          oneBTN={false}
          bg={null}
          bgImage={bg}
          logos={true}
        />
        {/* end manage business */}
        {/* start slider */}
        <Container>
          <MainTitleAndDescription
            mainTitle="عملائنا"
            description={null}
            textALignment="text-center"
            margin="m-auto"
          />
          <Slider data={sliderIcons} />
          {/* end slider */}
          {/* start form */}
          <MainTitleAndDescription
            mainTitle="انضم إلى الشريك التقني الأمثل لأعمالك"
            description="نقدم لعملائنا منتجات وخدمات رقمية ذكية مصممة لتسهل مختلف العمليات في المشاريع التجارية وتضمن لهم الاستمرارية والأداء المرن."
            textALignment="text-center"
            margin="m-auto"
          />
          <RevealComponent y={100} duration={500} delay={300} threshold={0.75}>
            <FormOne />
          </RevealComponent>
          {/* end form */}
        </Container>
      </div>
    </main>
  );
}
