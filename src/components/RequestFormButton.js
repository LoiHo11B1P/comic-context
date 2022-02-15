import React, { useContext } from "react";
import StylesContext from "./StylesContext"

function RequestFormButton() {
  const buttonStyling = React.useContext(StylesContext)

  return (
    <div>
      <button style={buttonStyling}>
        Click Here!
      </button>
      <input type="submit" value="Submit" style={buttonStyling}></input>

    </div>
  );
}  

export default RequestFormButton;