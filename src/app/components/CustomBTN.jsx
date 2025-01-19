// this component is used at all of the pages 

import Button from 'react-bootstrap/Button';
import { IoIosArrowRoundBack } from "react-icons/io";


const CustomBTN = ({text, arrow}) => {
    const bg = {
        backgroundColor: "#34AC72"
    }
  return (
    <div>
        <Button
            style={bg} className="py-2 border-0 pe-3 rounded-pill fw-bold">
              {text} {arrow ? <IoIosArrowRoundBack size={32}/> : null}</Button>
    </div>
  )
}

export default CustomBTN
