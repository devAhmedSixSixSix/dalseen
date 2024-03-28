// this component is used at all of pages 

const MainTitleAndDescription = ({ mainTitle, description, textALignment, margin }) => {
  return (
    <section className={`${textALignment} pt-5`}>
        <h2 className="pt-4">{mainTitle}</h2>
        <span className={`d-block bg-success rounded ${margin} my-3`} style={{
            width: "80px",
            height: "5px"
        }}></span>
        <p>{description}</p>
    </section>
  )
}

export default MainTitleAndDescription;
