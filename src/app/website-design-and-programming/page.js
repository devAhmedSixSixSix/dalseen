import { Col, Container, Row } from "react-bootstrap";
import ImageTextBlock from "../components/ImageTextBlock";
import MainTitleAndDescription from "../components/MainTitleAndDescription";
import InfoCard from "../components/InfoCard";

import imageOne from "../../../public/home-header-img2.png";
import imageTwo from "../../../public/service-1-1.png";
import image1 from "../../../public/icon-1.png";
import CustomBTN from "../components/CustomBTN";
import RevealComponent from "../components/RevealComponent";
import Link from "next/link";

const page = () => {
  return (
    <>
      {/* start cover */}
      <ImageTextBlock
        title="برمجة وتصميم المواقع"
        description="احصل على تطبيقات، مواقع إلكترونية فعّالة للغاية من خلال فريق مطوّر ومحترف."
        descriptionFontColor="text-black-50"
        image={imageOne}
        bg="#F0F0F0"
        oneBTN={false}
        threeBTN={true}
        threeBTNActive=""
        bgImage=""
        logos={false}
      />
      {/* end cover */}
      {/* start web designing */}
      <ImageTextBlock
        title="برمجة وتصميم المواقع"
        description="نقدم جميع خدمات تصميم وبرمجة المواقع والمتاجر الإلكترونية المختلفة بكفاءة عالية ، بحيث نقوم بتحليل خدمتك وجمهورها المستهدف وتخطيط للموقع ومن ثم بناء شاشات بتصاميم وهوية بصرية جذّابة وتجربة مستخدم مبهرة ، وربطها مع بنية برمجية داخلية من أحدث التقنيات البرمجية، كما نزودك بلوحة نحكم تسهل عليك إدارة عمليات تطبيقك وتفاعلاته مع مستخدمية."
        descriptionFontColor="text-black-50"
        image={imageTwo}
        bg=""
        oneBTN={true}
        threeBTN={false}
        threeBTNActive="1"
        bgImage=""
        logos={false}
      />
      {/* end web designing */}
      {/* start give us ideas */}
      <MainTitleAndDescription
        mainTitle="سلمنا الفكرة"
        description="وتسلّمها منّا متكاملة من جميع النواحي التي تجعلك الاختيار الأول لعميلك المستهدف."
        textALignment="text-center"
        margin="m-auto"
      />
      <Container>
        <Row className="py-5">
          <Col xs={12} md={6} lg={3}>
            <RevealComponent y={100} duration={500} delay={0} threshold={0.75}>
              <InfoCard
                styling="d-flex align-items-start"
                icon={image1}
                title="تجربة مستخدم ممتازة UX/UI"
                description="تجربة المستخدم فنٌ نمتاز به ! اترك لنا مهمة تخطيط وتنفيذ موقع جذاب بتجربة سلسة ورائعة."
              />
            </RevealComponent>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <RevealComponent
              y={100}
              duration={500}
              delay={100}
              threshold={0.75}
            >
              <InfoCard
                styling="d-flex align-items-start"
                icon={image1}
                title="الحماية والدعم الفني"
                description="نكفل لك الحماية والأمان لموقعك والنسخ الاحتياطي الدوري لبياناتك إضافة إلى تقديم خدمات الدعم الفني."
              />
            </RevealComponent>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <RevealComponent
              y={100}
              duration={500}
              delay={200}
              threshold={0.75}
            >
              <InfoCard
                styling="d-flex align-items-start"
                icon={image1}
                title="كفاءة عالية"
                description="احترافنا في استخدام أحدث التقنيات يمكننا من ضمان تسليم تطبيقات ذات كفاءة عالية تنال رضى عملاءنا.."
              />
            </RevealComponent>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <RevealComponent
              y={100}
              duration={500}
              delay={300}
              threshold={0.75}
            >
              <InfoCard
                styling="d-flex align-items-start"
                icon={image1}
                title="التقارير والاحصائيات"
                description="لوحات التحكم تعرض تقارير وإحصاءات مفصلة تيسر مراقبة العمليات وإدارة التطبيق أو الموقع بسلاسة وسهولة.."
              />
            </RevealComponent>
          </Col>
        </Row>
        <RevealComponent y={100} duration={500} delay={0} threshold={0.75}>
          <div className="text-center">
            <Link href="/contact">
            <CustomBTN text="ابدأ الان" arrow={true} />
            </Link>
          </div>
        </RevealComponent>
        {/* end give us ideas */}
      </Container>
    </>
  );
};

export default page;
