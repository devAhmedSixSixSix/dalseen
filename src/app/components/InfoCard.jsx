// this component is used at [home, about, cloud hosting, system design, website design and programing, saaed crm, saaed realstate saaed erp, saaed rst, saaed pos] pages 

import Image from "next/image";

const InfoCard = ({ styling, title, description, icon }) => {
  return (
    <div className={` mb-5 mt-3`}>
      <figure className={`${styling} mb-3`}>
        <Image src={icon} alt="text" width={50} height={80} className="h-50 py-2" />
        <figcaption className="mx-3">
          <h5 className="py-2">{title}</h5>
          <p className="text-black-50">{description}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default InfoCard;
