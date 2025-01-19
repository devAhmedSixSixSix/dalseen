import { Col, Container, Row } from "react-bootstrap";
import { PiInfo } from "react-icons/pi";

import ImageTextBlockTwo from "../../components/ImageTextBlockTwo";
import ImageTextBlock from "../../components/ImageTextBlock";
import MainTitleAndDescription from "../../components/MainTitleAndDescription";
import InfoCard from "../../components/InfoCard";
import Tabel from "@/app/components/Tabel";
import bg from "../../../../public/product-page-header-bg.png";
import image1 from "../../../../public/product-3-1.png";
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
  const tapleOneItems = [
    "نظام نقطة بيع",
    "إدارة مشتريات وموردين",
    "إدارة مبيعات",
    "إدارة مخزون",
    "تقارير مفصلة",
    "إدارة المستخدمين",
    "إدارة بيانات العملاء",
    "إدارة المصاريف",
  ];
  const tapleTwoItems = [
    "منصـة خاصـة ( متجر الكتروني)",
    "تطبيق جرد المخزون",
    "ربط مع الأنظمة الخارجية",
    "تطبيق متجر للاندرويد والايفون",
    "دفع شبكة",
    "إدارة الموارد البشرية",
    "النظام المحاسبي المطور",
    "إدارة علاقات العملاء",
    "النظام المحاسبي البسيط",
    "النظام المحاسبي المطور",
    "إدارة المهام والإشعارات",
    "إدارة التصنيع",
    "الصيانة",
    "إدارة الحملات الاعلانية",
    "قائمة اصناف إلكترونـية",
  ];
  return (
    <div>
      {/* start cover */}
      <ImageTextBlock
        title="SAAED POS | نقاط البيع"
        description="نقدم لك نقطة بيع عالية الأداء تسهل لك إدارة المبيعات والمشتريات بكفاءة"
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
      {/* start featuers */}
      <Container>
        <MainTitleAndDescription
          mainTitle="ادعم جهاز نقطة البيع بنظام يخدمك في جميع عملياتك."
          description="الفوترة، الأمان، والمرونة في جهاز واحد"
          textALignment="text-center"
          margin="m-auto"
        />
        <Row className="py-5">
          <Col xs={12} sm={6} md={4} lg={2}>
            <RevealComponent y={100} duration={500} delay={0} threshold={0.75}>
              <InfoCard
                styling="text-center"
                icon={icon1}
                title="إدارة مبيعات"
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
                title="إدارة مخزون"
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
                title="يدعم تعدد الفروع"
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
                title="إدارة مشتريات وموردين"
                description={null}
              />
            </RevealComponent>
          </Col>
        </Row>
        {/* end featuers */}
      </Container>
      {/* start specification */}
      <Container className="px-0">
        <MainTitleAndDescription
          mainTitle="نظام نقاط البيع"
          description={null}
          textALignment="text-center"
          margin="m-auto"
        />
        <Row
          style={{
            backgroundColor: "#F5F4F4",
            borderRadius: "15px 15px 0 0",
          }}
          className="m-0"
        >
          <Col className="p-0" xs={12} sm={6}>
            <Tabel
              title="Saaed REST"
              bgColor="#34AC72"
              roundedCournerValues="0px 15px 0px 0"
              data={tapleOneItems}
            />
          </Col>
          <Col className="p-0" xs={12} sm={6}>
            <Tabel
              title="خيارات إضافية"
              bgColor="#DCA737"
              roundedCournerValues="15px 0 0px 0"
              data={tapleTwoItems}
            />
          </Col>
          <div className="text-center py-5">
          <Link href="/contact">
              <CustomBTN text="ابدأ الان" arrow={true} />
              </Link>
          </div>
        </Row>
        <p className="text-center py-5">
          <PiInfo size={22} className="ms-2" />
          الأسعار لا تشمل رسوم التسجيل في متجر Google Play و App Store
        </p>
      </Container>
      {/* end specification */}
      {/* strat how the pos device look */}
      <ImageTextBlockTwo />
      {/* strat how the pos device look */}
    </div>
  );
};

export default page;
