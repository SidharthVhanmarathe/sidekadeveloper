import { hover } from '@testing-library/user-event/dist/hover'
import React, { useRef,useEffect } from 'react'

function EventPropagation() {
const ref=useRef();



  return (
<>
<div className='text-center' onClick={(e)=>
  {
    alert("Div called"+e.currentTarget + e.target+this.target)}}  style={{border:"1px solid blue"}} >
<br></br>
    <form className='form' onClick={(e)=>
      {
        alert("form called"+e.currentTarget + e.target +this.target)}} style={{border:"1px solid red"}}>
        <button  onClick={(e)=>
          {
            alert("button called"+ e.currentTarget + e.target+this.target)}} className='button'>
          {/* <span>Submit</span> */}
          submit
          </button>
    </form>
    <br></br>
</div>



<div className='text-center' onClick={(e)=>
  {e.stopPropagation();
    alert("Div called")}}  style={{border:"1px solid blue"}} >
<br></br>
    <form className='form' onClick={(e)=>
      {e.stopPropagation();
        alert("form called")} } style={{border:"1px solid red"}}>
        <button  onClick={(e)=>
          {
            e.stopPropagation();
            alert("button called")}} className='capturebutton'>
          submit
          </button>
    </form>
    <br></br>
</div>


<br>
</br>

<div>





<div ref={ref} onClick={(ev)=>
{
  if(ev.target.tagName==="SPAN")
  {
    window.location.href +='/'+ev.target.className;
  }
  console.log(ev.target);
}}  className='dailygadgets'>
  <span className="mobile"  >Mobile</span>
  <span className="bluetooth">Bluetooth</span>
  <span className="cycle">Cycle</span>
  <span className="laptop">Laptop</span>
  <span className="wristwatch">Wrist Watch</span>
  <span className='charger'>Charger</span>
</div>

</div>
</>
  )
}

export default EventPropagation