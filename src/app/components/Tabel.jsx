// this component is used at [saaed rst, saaed pos] pages 

import { IoMdCheckmark } from "react-icons/io";

const Tabel = ({ title, bgColor, roundedCournerValues, data }) => {
    const customBgColorAndBorderRadiues = {
    backgroundColor: bgColor,
    color: "#fff",
    borderRadius: roundedCournerValues,
  };
  return (
    <section>
      <h2
        className="text-center mb-0 py-3 custom-taple-border"
        style={customBgColorAndBorderRadiues}
      >
        {title}
      </h2>
      <div className="mt-4">
        <ul className="list-unstyled">
          {data.map((item, index) => (
            <li key={index} className="d-flex align-items-center mb-4 gap-2 me-4">
              <IoMdCheckmark size={28} style={{color: "#34AC72"}}/>
              <p className="mb-0 h5 fw-medium">{item} </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tabel;
