import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo-hor.svg"

const Footer = () => {
  const bg = {
    backgroundColor: "#FAFAFC"
  }

  return (
    <footer className="mt-5 py-5" style={bg}>
      <Container>
        <Row>
          <Col xs={12} lg={4} className="py-5">
            <Link href="/">
              <Image src={Logo} alt="Logo" className="w-50 h-50" />
            </Link>
            <p className="mt-3" style={{maxWidth:"400px"}}>
              متخصصون في بناء أنظمة تقنية بأدوات متكاملة تنمي أعمالك، تزيد
              مبيعاتك، وتدير مختلف العمليات الإدارية والتشغيلية في منشأتك
              بسلاسة.
            </p>
          </Col>
          <Col xs={12} lg={4} className="py-5">
            <ul className="list-unstyled">
              <li className="mb-4">
                <h6>خدماتنا</h6>
              </li>
              <li className="mb-2">
                <Link href="/website-design-and-programming" className="text-black-50 fw-medium text-decoration-none">
                  برمجة المواقع والتطبيقات
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/cloud-hosting" className="text-black-50 fw-medium text-decoration-none">
                  الاستضافة والخدمات السحابية
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/systems-design" className="text-black-50 fw-medium text-decoration-none">
                  تصميم الأنظمة
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} lg={4} className="py-5">
            <ul className="list-unstyled">
              <li className="mb-4">
                <h6>عن دار السعد</h6>
              </li>
              <li className="mb-2">
                <Link href="/about-us" className="text-black-50 fw-medium text-decoration-none">
                  من نحن
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="text-black-50 fw-medium text-decoration-none">
                  إتصل بنا
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
