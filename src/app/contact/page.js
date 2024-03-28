import { Col, Container, Row } from "react-bootstrap";
import ImageTextCover from "../components/ImageTextCover";
import ContactInfoCard from "../components/ContactInfoCard";
import FormTwo from "../components/FormTwo";

const page = () => {
  return (
    <div>
      {/* start cover */}
      <ImageTextCover title="إتصل بنا" />
      {/* end cover */}

      <Container>
        {/* start contact info */}
        <Row className="py-5 my-5">
          <Col sm={12} lg={8}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29686.230792135793!2d39.14799800000001!3d21.555501!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3daaef3b0b6b7%3A0x2c1f6c325e169278!2sAl%20Shoubasi%2C%20Ar%20Rawdah%2C%20Jeddah%2023431%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1676956332730!5m2!1sen!2sus"
              width="100%"
              height="350px"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col sm={12} lg={4} className="mt-5">
            <ContactInfoCard
              title="ابقى على تواصل"
              description="الهاتف : 0126491000"
            />
            <ContactInfoCard
              title="البريد الالكتروني"
              description="info@darsaaed.com"
            />
            <ContactInfoCard title="جدة" description="الروضة شارع الشباسي" />
          </Col>
        </Row>
        {/* end contact info */}
        {/* start form */}
        <FormTwo />
        {/* end form */}
      </Container>
    </div>
  );
};

export default page;
