import React from 'react';

function Wrapper ({children}) {
  const style = {
    border: '10px solid red',
    padding: '16px',
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Wrapper;