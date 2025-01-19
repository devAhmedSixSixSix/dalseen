"use client"
// this component is used at [home, about, saaed erp] pages 

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

const Card = ({ icon, title, description, textAlignment, displayMore, border, shadow, titleFontColor, target = "#" }) => {
    const customShadow = {
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px"
    }
    const customBorder = {
        border: "solid 8px #eee",
        width: "50%",
        height: "50%",
        margin: "auto",
        padding: "30px 40px",
        borderRadius: "20px"
    }

    const customTextGreenColor = {
        color: "#34AC72",
    }
    return (
        <article style={shadow ? customShadow : null} className={`text-${textAlignment} bg-white my-3 px-4 h-100 position-relative rounded rounded-2`}>
            <section style={border ? customBorder : null} className="d-flex align-items-center justify-content-center py-4 mt-3">
                <Image src={icon} alt={title} className="w-100" />
            </section>
            <main>
                <header>
                    <h6 className={`fw-bolder my-4 ${titleFontColor}`}>{title}</h6>
                </header>
                <p className="text-black-50 mb-5">{description}</p>
            </main>
            {displayMore && (
                <Link href={target}>
                    <footer className="position-absolute fw-bold" style={{
                        ...customTextGreenColor,
                        cursor: "pointer",
                        left: "20px",
                        bottom: "10px",
                    }}>
                        عرض المزيد <IoIosArrowRoundBack size={26} />
                    </footer>
                </Link>
            )}
        </article>
    )
}

export default Card;
