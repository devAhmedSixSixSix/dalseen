// this component is used at [ <ImageTextBlockTwo />, <ImageTextBlockThree /> ] component 

import { CiCircleCheck } from "react-icons/ci";

const ImageTextBlockTwoCard = ({ text }) => {
  return (
    <li className="list-unstyled d-flex align-items-center mb-2">
      <CiCircleCheck className="ms-2" size={28} />
      <p className="m-0 text-black-50">{text}</p>
    </li>
  );
};

export default ImageTextBlockTwoCard;
