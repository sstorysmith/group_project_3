import React from 'react';

function draw(size) {
  if (size === 1) {
    let indent = ''
    for (let i = 0; i < size; i++) {
      // indent+= 't'
      indent+= '\u00A0';
    }
    let indent2 = indent.substring(0, size - 1);
    return <span><br />{indent}Undecided size={size}, <br />Name {indent2}VS Name</span>
  }
  else {
    let indent = ''
    for (let i = 0; i < size; i++) {
      // indent+= 't'
      indent+= '\u00A0';
    }
    let indent2 = indent.substring(0, size - 1);
    console.log(indent2)
    return <span><br />{indent}Undecided size={size}, (<br />{draw(size-1)}<br /> {indent2}VS {draw(size-1)})</span>
  }
}

function App() {
  return (
    <div>
      {draw(3)}
    </div>
  );
}

export default App;
