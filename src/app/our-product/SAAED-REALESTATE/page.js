import { Col, Container, Row } from "react-bootstrap";

import ImageTextBlock from "../../components/ImageTextBlock";
import MainTitleAndDescription from "../../components/MainTitleAndDescription";
import InfoCard from "../../components/InfoCard";

import image1 from "../../../../public/product-1-1.png";
import icon from "../../../../public/icon-11.png";
import CustomBTN from "@/app/components/CustomBTN";
import RevealComponent from "@/app/components/RevealComponent";
import Link from "next/link";

const page = () => {
  return (
    <div>
      {/* start cover */}
      <ImageTextBlock
        title="SAAED REALESTATE | نظام السعد العقاري"
        description="قم بإدارة جميع عقاراتك الآن من لوحة تحكم واحدة."
        descriptionFontColor="text-black-50"
        image={image1}
        bg="#f5f5f5"
        oneBTN={false}
        threeBTN={false}
        threeBTNActive=""
        bgImage=""
        logos={false}
      />
      {/* end cover */}
      {/* start features */}
      <Container>
        <MainTitleAndDescription
          mainTitle="نظام السعد العقاري | SAAED REALESTATE"
          description="يضم نظامنا العقاري جميع المعاملات العقارية من بيانات وتفاصيل العقار إلى العقود وتفاصيل الدفعات المالية كما يسهل سير الاتفاقيات والتوثيق بين طرفي العقود، ويساعدك على متابعة العمليات والتقارير إلكترونياً بأمان واحترافية عالية."
          textALignment="text-center"
          margin="m-auto"
        />
        <div className="text-center my-5">
          <Link href="/contact">
              <CustomBTN text="ابدأ الان" arrow={true} />
              </Link>
        </div>
        <MainTitleAndDescription
          mainTitle="مميزات النـظام"
          description=""
          textALignment="text-center"
          margin="m-auto"
        />
        <Row className="mt-4">
          <Col xs={12} md={6} lg={4}>
            <RevealComponent y={100} duration={500} delay={0} threshold={0.75}>
              <InfoCard
                styling="text-center"
                icon={icon}
                title="ادارة العقارات"
                description="يقوم النظام بفرز وترتيب بيانات العقارات و يتيح لك متابعة وإدارة جميع المستأجرين والعقود."
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
                styling="text-center"
                icon={icon}
                title="إدارة العقود والدفعات"
                description="يمكن النظام طرفي العقد من متابعة سير عقد الإيجار، ومتابعة المستحقات المالية."
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
                styling="text-center"
                icon={icon}
                title="إدارة خدمات المستأجرين"
                description="بإمكان المستأجر اختيار العقار المناسب له، ومتابعة حالات الدفع، والتواصل مع المالك بخصوص أي إصلاحات أو إشكالات."
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
                styling="text-center"
                icon={icon}
                title="إدارة موظفين"
                description="قسم خاص بإدارة بيانات وشؤون موظفيك مع مسيرات رواتب وإدارة الحضور والانصراف والاجازات."
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
                styling="text-center"
                icon={icon}
                title="تقارير دورية"
                description="استعرض جميع البيانات المتعلقة بالفواتير والايصالات وحالات عقود العملاء وتقارير المبيعات."
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
                styling="text-center"
                icon={icon}
                title="لوحة تحكم"
                description="احصل على التحكم التام في عرض وترتيب البيانات الخاصة بعقاراتك مع ملخص للوضع الحالي للطلبات والعقود."
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
