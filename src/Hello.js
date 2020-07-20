import React from 'react';


function Hello ({color, name, isSpecial}) {
  return (
  <div style={{color: color}}>
    {isSpecial && <b>*</b>}Hello {name}
  </div>
  )
}

Hello.defaultProps = {
  name : 'noname',
  color: 'blue'
}

export default Hello;