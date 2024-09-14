import React, { useMemo, useState } from 'react'


function Memo() {
    
    const [counter1, setCounter1]= useState(0);
    const [counter2, setCounter2]= useState(0);

  const increment1 = ( )=> {
      setCounter1(counter1 + 1);
  }

  const increment2 = ( )=> {
    setCounter2(counter2 + 1);
  }


  //Checking purpose
//    function Even() {
    
//     console.log('This event take time');
//      let i = 0;
//      while (i <= 1000000000) i++; 

//     return counter1 % 2 === 0;

//   }

    const EvenOdd = useMemo(()=> {
        console.log('This event take time');
        let i = 0;
        while(i <= 1000000000) i++; 
   
       return counter1 % 2 === 0;
       
    }, [counter1])
    

    return (
      <div>

        <div>
          <h1>Button - 1</h1>
          <button onClick={increment1}>Click Here</button>
          <br />
          <span>{counter1}</span>
          <br />
          <span>{EvenOdd ? "This is Even Number" : "This is Odd Number"}</span>
        </div>

        <div>
          <h1>Button - 2</h1>
          <button onClick={increment2}>Click Me</button>
          <div>{counter2}</div>
        </div>
      </div>
    );
}

export default Memo;