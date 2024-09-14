import React, {useCallback, useState} from 'react'
import Child from './Child'

function Parent() {
  
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState([]);
 

    const increment1 = () => {
        setCounter1(counter1 + 1);
    }

   //useCalback hook
    const fun = useCallback(() => {
        console.log("Ahnaf Hasnain's Era")
    }, [counter2]);
  
  return (

    <div>
      <h4>Parent Component</h4>
      <div>
          <h1>Button  1</h1>
          <button onClick={increment1}>Click Here</button>
          <br />
          <span>{counter1}</span>
          <br />
          {/* <span>{EvenOdd ? "This is Even Number" : "This is Odd Number"}</span> */}
      </div>

      <Child counter2={counter2} fun={fun} />
      
    </div>
  )
}

export default Parent