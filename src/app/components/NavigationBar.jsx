"use client"
import Image from "next/image";
import Link from 'next/link'
import Logo from "../../../public/logo-hor.svg"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CustomBTN from "./CustomBTN";

function NavigationBar() {
  return (
    <>
        <Navbar expand={'md'} className="bg-white py-3">
          <Container>
          <Navbar.Brand as={Link} href="/" style={{width:"125px", margin:"0px 0px 0px 40px "}}>
              <Image src={Logo} alt="Logo" className="w-100 h-100"/> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} className="border-0" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  <Image src={Logo} alt="Logo" className="w-50 h-50"/> 
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link as={Link} href="/" className="fw-medium">الرئيسية</Nav.Link>
                  <Nav.Link as={Link} href="/about-us" className="fw-medium">من نحن</Nav.Link>
                  <NavDropdown
                    title="الخدمات "
                  id={`offcanvasNavbarDropdown-expand-md`}
                  className="fw-medium w-auto"
                  >
                    <NavDropdown.Item as={Link} href="/website-design-and-programming" >برمجة المواقع والتطبيقات</NavDropdown.Item>
                    <hr/>
                  <NavDropdown.Item as={Link} href="/cloud-hosting">الاستضافة والخدمات السحابية</NavDropdown.Item>
                    <hr/>
                  
                    <NavDropdown.Item as={Link} href="/systems-design">تصميم الانظمة</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="المنتجات "
                  id={`offcanvasNavbarDropdown-expand-md`}
                  className="fw-medium"
                  >
                  <NavDropdown.Item as={Link} href="/our-product/SAAED-POS">
                    SAAED POS | نقاط البيع</NavDropdown.Item>
                    <hr/>
                  <NavDropdown.Item as={Link} href="/our-product/SAAED-CRM">SAAED CRM | إدارة علاقات العملاء</NavDropdown.Item>
                    <hr/>
                  <NavDropdown.Item as={Link} href="/our-product/SAAED-RST">
                    SAAED RST | نظام إدارة المطاعم والمقاهي
                  </NavDropdown.Item>
                    <hr/>
                  <NavDropdown.Item as={Link} href="/our-product/SAAED-PAY">SAAEDPAY | نظام السعد للمدفوعات</NavDropdown.Item>
                    <hr/>
                  <NavDropdown.Item as={Link} href="/our-product/SAAED-ERP">SAAED ERP | نظام السعد للمؤسسات</NavDropdown.Item>
                    <hr/>
                    <NavDropdown.Item  href="/our-product/SAAED-REALESTATE">SAAED REALESTATE | نظام السعد العقاري</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} href="#" className="fw-medium">المتجر</Nav.Link>
                <Nav.Link as={Link} href="/contact" className="fw-medium">أتصل بنا</Nav.Link>
                </Nav>
                  <CustomBTN text="ابدأ الان" arrow={true} />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

    </>
  );
}

export default NavigationBar;