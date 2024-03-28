import { Col, Container, Row } from "react-bootstrap";
import ImageTextBlock from "../components/ImageTextBlock";
import MainTitleAndDescription from "../components/MainTitleAndDescription";
import InfoCard from "../components/InfoCard";
import imageOne from "../../../public/home-header-img2.png";
import imageTwo from "../../../public/service-1-1.png";
import image1 from "../../../public/icon-20.png";
import image2 from "../../../public/icon-2.png";
import image3 from "../../../public/icon-22.png";
import CustomBTN from "../components/CustomBTN";
import bg from "../../../public/call-to-action-bg.png";
import RevealComponent from "../components/RevealComponent";

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
        title="الاستضافة والخدمات السحابية"
        description="كفاءة الأداء والمرونة في الإدارة بسرعة وأمان مع خدماتنــا السحـــابية"
        image={imageOne}
        bg="#F0F0F0"
        oneBTN={false}
        threeBTN={true}
        threeBTNActive="2"
        bgImage=""
        logos={false}
      />
      {/* start cover */}
      {/* start who we are */}
      <ImageTextBlock
        title="في دار السعد"
        description="كفاءة الأداء والمرونة في الإدارة بسرعة وأمان مع خدماتنــا السحـــابية نوفر لكم خدمة التخزين السحابي عبر شبكة من الخوادم عالية السرعة مع توفير الحماية والأمان لبياناتك، باستخدام أحدث التقنيات التي تجعل منتجك يخدم عملاء أكثر دون تراجع في الأداء."
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
            mainTitle="تقدم خدمة الاستضافة والخدمات السحابية مع أنظمتنا"
            description="دعم فني - حماية وأمان - نسخ احتياطي - استعادة البيانات - سعة تخزينية"
            textALignment="text-center"
            margin="m-auto"
          />
          <Row className="py-5">
            <Col xs={12} md={6} lg={4}>
              <RevealComponent
                y={100}
                duration={500}
                delay={0}
                threshold={0.75}
              >
                <InfoCard
                  styling="d-flex align-items-start"
                  icon={image1}
                  title="سيرفرات عالية السرعة"
                  description="خدماتنا السحابية تعمل على سيرفرات عالية السرعة تضمن لك تلبية احتياجات جميع مستخدمي منتجك الرقمي في وقت واحد بكفاءة عالية."
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
                  icon={image2}
                  title="حماية للبيانات"
                  description="استضافة نظامك وتشغيله تتم في بيئة سحابية آمنة مع كامل الاستقرار لبياناتك."
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
                  icon={image3}
                  title="أحدث التقنيات"
                  description="خدماتنا مواكبة لأحدث التقنيات في مجال الحوسبة السحابية لندعم منتجاتكم الرقمية بأفضل أداء."
                />
              </RevealComponent>
            </Col>
            <RevealComponent y={100} duration={500} delay={0} threshold={0.75}>
              <div className="text-center">
                <CustomBTN text="ابدأ الان" arrow={true} />
              </div>
            </RevealComponent>
          </Row>
          {/* end our servises */}
        </Container>
      </div>
    </>
  );
};

export default page;
