import { Col, Container, Row } from "react-bootstrap";
import ImageTextBlock from "../components/ImageTextBlock";
import MainTitleAndDescription from "../components/MainTitleAndDescription";
import InfoCard from "../components/InfoCard";

import imageOne from "../../../public/home-header-img2.png";
import imageTwo from "../../../public/service-1-1.png";
import image1 from "../../../public/icon-1.png";
import CustomBTN from "../components/CustomBTN";
import bg from "../../../public/call-to-action-bg.png";
import RevealComponent from "../components/RevealComponent";
import Link from "next/link";

const page = () => {
  const customBG = {
    backgroundColor: bg,
    backgroundImage: `url(${bg.src})`,
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
  };

  return (
    <>
      {/* start cover */}
      <ImageTextBlock
        title="تصميم الأنظمة"
        description="اجمع التصميم الذكي والحل التقني في نظام واحد يسهّل سير أعمالك."
        descriptionFontColor="text-black-50"
        image={imageOne}
        bg="#F0F0F0"
        oneBTN={false}
        threeBTN={true}
        threeBTNActive="2"
        bgImage=""
        logos={false}
      />
      {/* end cover */}
      {/* start who we are */}

      <ImageTextBlock
        title="دار السعد"
        description="دار السعد شريكك التقني في رحلتك لتصميم النظام الأمثل الذي يتناسب مع أعمالك حيث نقوم بتحليل احتياجاتك والتحديات التي قد تواجه سير عملك مستقبلًا ثم نقدم الحلول المناسبة لها من خلال تصميم ذكي ونظام سلس وميسر لعمليات المنشأة. كما نقوم بربط ودمج الحلول المساعدة والمتكاملة من أدوات تسويقية وإدارية. أنظمتنا تشكل حلولاً جديرة بالثقة لمختلف الأعمال والشركات الصغيرة والمتوسطة والكبيرة وتضمن استخداماً أكفأ للموارد بما ينعكس إيجاباً على تقارير النتائج والعوائد المالية."
        descriptionFontColor="text-black-50"
        image={imageTwo}
        bg=""
        oneBTN={true}
        threeBTN={false}
        threeBTNActive=""
        bgImage=""
        logos={false}
      />
      {/* end who we are */}

      {/* start our servises */}
      <div style={customBG} className="py-5">
        <Container>
          <MainTitleAndDescription
            mainTitle="توفير المرونة في أنظمتنا وذلك لنجعلها يسيرة ومناسبة لجميع المستخدمين."
            description="تواصل معنا , و كن شريك نجاح مع دار السعد"
            textALignment="text-center"
            margin="m-auto"
          />
          <Row className="py-5">
            <Col xs={12} md={6}>
              <RevealComponent
                y={100}
                duration={500}
                delay={0}
                threshold={0.75}
              >
                <InfoCard
                  styling="d-flex align-items-start"
                  icon={image1}
                  title="ايجاد حلول متكاملة"
                  description="نقدم بين يديكم نظاماً فعالاً يسد احتياجاتكم وييسر عمليات منشأتكم باحترافية عالية تتوافق مع رؤيتكم إضافة إلى تقديم خدمات التدريب والدعم اللازمة لموظفيكم."
                />
              </RevealComponent>
            </Col>
            <Col xs={12} md={6}>
              <RevealComponent
                y={100}
                duration={500}
                delay={100}
                threshold={0.75}
              >
                <InfoCard
                  styling="d-flex align-items-start"
                  icon={image1}
                  title="تحليل النظم"
                  description="فهمنا الدقيق لمشكلات واحتياجات أعمال عملائنا يوفر لنا الأساس اللازم لتصميم وإنشاء نظام متكامل بحلول مبتكرة ومترابطة توفر الوقت والجهد على جميع وحدات منشأتكم."
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
          {/* end our servises */}
        </Container>
      </div>
    </>
  );
};

export default page;
