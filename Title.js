import React from 'react';

function Title(props)
{
    let small=props.small
    let back= props.back
return(
   <div style={{fontSize:(!small)? "20px" : "10px",backgroundColor:(!back)? "red": "white" }}>
      {props.label}
     


   </div> 
);


} 
export default Title;