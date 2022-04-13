import { FaCheckCircle } from "react-icons/fa";


function Alert({type, text}) {
  return (
    <div className={`alert alert-${type}`}><FaCheckCircle /> <span>{text}</span></div>

  )
}

export default Alert