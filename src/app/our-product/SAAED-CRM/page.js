import { Col, Container, Row } from "react-bootstrap";

import ImageTextBlock from "../../components/ImageTextBlock";
import MainTitleAndDescription from "../../components/MainTitleAndDescription";
import InfoCard from "../../components/InfoCard";

import image1 from "../../../../public/product-2-1.png";
import icon1 from "../../../../public/icon-15.png";
import icon2 from "../../../../public/icon-16.png";
import icon3 from "../../../../public/icon-17.png";
import icon4 from "../../../../public/icon-18.png";
import icon5 from "../../../../public/icon-19.png";
import CustomBTN from "@/app/components/CustomBTN";
import RevealComponent from "@/app/components/RevealComponent";
const page = () => {
  return (
    <div>
      {/* start cover */}
      <ImageTextBlock
        title="SAAED CRM | إدارة علاقات العملاء"
        description="اضمن رضا عملائك عبر إداراتنا الفعالة لجميع مراحل رحلة العميل."
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
      {/* start featuers */}
      <Container>
        <MainTitleAndDescription
          mainTitle="إدارة علاقات العملاء | SAAED CRM"
          description="يمكنك نظامنا من إدارة جميـــع العمليـــات المتعلقـــة بالعملاء حيث يسهل لك تخزيـــن وتنظيـــم ســـجلات ومعلومـــات العملاء الحاليين والمحتملين، وتســـيير المشاريع والمهام المتعلقـــة بهـــم في المؤسســـة، وإدارة أدوار الموظفين فيها."
          textALignment="text-center"
          margin="m-auto"
        />
        <div className="text-center mt-5">
          <CustomBTN text="ابدأ الان" arrow={true} />
        </div>
        <MainTitleAndDescription
          mainTitle="مميزات النـظام"
          description=""
          textALignment="text-center"
          margin="m-auto"
        />
        <Row className="pb-5">
          <Col xs={12} md={6} lg={4}>
            <RevealComponent y={100} duration={500} delay={0} threshold={0.75}>
              <InfoCard
                styling="text-center"
                icon={icon1}
                title="إدارة العملاء"
                description="
              تخزين وتنظيم جهات الاتصال
              فرز العملاء حسب أغراض المبيعات والتسويق       
              تحديث تلقائي لاشتراكات العملاء
خريطة حرارية لمناطق تمركز العملاء"
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
                icon={icon2}
                title="المبيعات"
                description="إدارة الدفعات المالية والعقود
ملخص الموقف المالي للمبيعات
إصدار عروض الأسعار
إصدار ومتابعة الفواتير"
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
                icon={icon3}
                title="إدارة المشاريع"
                description="إنشاء المشاريع وإضافة الموظفين
              تمكين العميل من متابعة سير المشروع
              إدارة تذاكر الدعم الفني ومتابعتها
              إدارة المصروفات و الدعم الفني"
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
                icon={icon4}
                title="التسويق"
                description="تحليل البيانات وتوظيفها في أنشطة
تسهيل إعادة الاستهداف
تحديث تلقائي لاشتراكات العملاء
ربط مع المنصات لإرسال العروض
"
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
                icon={icon5}
                title="المواعيد والاجتماعات"
                description="جداول زمنية مع تلخيص يومي،
دعوات تلقائية وفق الجدول
تنبيهات تذكيرية بالمواعيد والاجتماعات
إدارة المناسبات ومواعيد التسليم"
              />
            </RevealComponent>
          </Col>
          <Col xs={12} md={6} lg={4}></Col>
        </Row>
        {/* end featuers */}
      </Container>
    </div>
  );
};

export default page;
