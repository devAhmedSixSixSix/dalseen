// this component is used at [saaed pay] pages

const TextNumberCard = ({ text, number }) => {
  return (
    <div className="position-relative text-center mb-5">
      <h3
        className="position-absolute m-0 text-light"
        style={{
          fontSize: "90px",
          zIndex: "-1",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <span>{number}</span>
      </h3>
      <p className=" fw-semibold">{text}</p>
    </div>
  );
};

export default TextNumberCard;
