import React from 'react'
import loading from "../../utilities/loading.svg"
function Spinner() {
  return (
      <div className=" flex justify-center" >
          <img src={loading} alt="loading"/>
      </div>
  )
}

export default Spinner