import React, { useState } from 'react';

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);
  // ...

  function handleToggleClick() {
    setIsToggled(!isToggled);
  }

  return (
    <div>
      <button onClick={handleToggleClick}>Toggle</button>
      {isToggled ? <p>Toggle is on</p> : <p>Toggle is off</p>}
    </div>
  );
  
}
export default Toggle ; 

