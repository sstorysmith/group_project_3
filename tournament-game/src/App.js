import React from 'react';

function draw(size) {
  if (size === 0) {
    return `Size=${size} Name \n`
  }
  else {
    return <span><br />Parent size={size}, <br />{draw(size-1)}-{draw(size-1)}</span>
  }
}

function App() {
  return (
    <div>
      <p>{draw(4)}</p>
    </div>
  );
}

export default App;
