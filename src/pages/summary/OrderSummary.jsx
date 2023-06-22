import { useState } from "react";
import React from "react";

const OrderSummary = () => {
  const [isChecked, setIsChecked] = useState(false);
 
  function myFunction() {
    setIsChecked(isChecked===true? false:true);
    
  }
  return (
    <div>
      <input type="checkbox" id="myCheck" checked={isChecked}  onClick={myFunction}/>
      <button type="button" class="btn btn-lg btn-danger" data-toggle="popover" data-content="We won't be giving you any ice cream sundae">
        Terms and conditions
        </button>
       <button id="text" enabled={isChecked}></button>
    </div>
  );
};


export default OrderSummary;
