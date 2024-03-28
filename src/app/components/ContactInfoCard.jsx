// this component is used at [contact] pages 

const ContactInfoCard = ({ title, description }) => {

  return (
    <section className="d-flex">
      <div style={{
          width: "10px",
          height: "10px",
          backgroundColor: "#34AC72",
          borderRadius: "50%",
          margin:"10px 0px 0px 10px"
      }}></div>
      <div>
        <header>
          <h4 className="fw-bolder">{title}</h4>
        </header>
        <p className="text-black-50">{description}</p>
      </div>
    </section>
  )
}

export default ContactInfoCard;
