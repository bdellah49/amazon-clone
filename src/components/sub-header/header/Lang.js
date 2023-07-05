import React from 'react'
import '../styles/lang.css'
import { AiOutlineArrowDown } from "react-icons/ai";

function Lang({language}) {
  return (
    <div className="lang">
      {language}
      <AiOutlineArrowDown/>
    </div>
  )
}

export default Lang