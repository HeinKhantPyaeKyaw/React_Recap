import { useState } from "react";
import "../styles/StateAssignmentOne.css"

function StateAssignmentOne(){
    const [count,setCount] = useState(0);
    const clickHandler =()=>{
        setCount(count+1);
    }
    return(
        <div className="StateAssignmentOne">
           
        <section>
        <button onClick={clickHandler}>
            {count}
        </button>
        </section>
        </div>
    )
}
export default StateAssignmentOne;