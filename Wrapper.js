import React from 'react';
import Photo from './cat.jpg';
import Title from './Title';

function Wrapper ()
{
return(
<div>
<Photo src={Photo}/>
<Title back label="my name here"/>
  <Title small  label="my job here" />  
</div>

);

}
export default Wrapper; 