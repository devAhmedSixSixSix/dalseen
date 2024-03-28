// this component is used at [cloud hosting, system design, website design and programing] pages 

import Button from 'react-bootstrap/Button';


const CustomBTNTwo = ({text, active}) => {
    console.log(active)
    const bgGreen = {
        backgroundColor: "#34AC72",
        color:"#fff",
        fontSize: "13px",

    }
    const bgWhite = {
        backgroundColor: "#fff",
        color:"#000",
        fontSize: "13px",
    }
  return (
    <div>
        <Button
            variant="outline-success"
            style={active?bgGreen:bgWhite} className="p-2 mx-2 mb-3 w-100 border-1 rounded">
            {text}
        </Button>
    </div>
  )
}

export default CustomBTNTwo
