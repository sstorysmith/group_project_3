import React from 'react';

function draw(size, stage=0) {
  const rounds = ["Finals", "Semi-Finals", "Quarter-finals", "Octafinals", "Round 2", "Round 1"];
  console.log('Stage', stage, stage % 2);
  if (size === 1) {
    return <span className='col'><div className='row'>{rounds[stage]},</div><div className='col'>[Name VS Name]</div></span>
  }
  else {
    // {(stage % 2 === 0) ? 'col' : 'row'}
    // {(stage % 2 === 0) ? 'row' : 'col'}
    return (<span className='col'>
      <div className='row'>{rounds[stage]}, [</div><br />{draw(size-1, stage + 1)}
      <span className='row'>VS</span> 
      {draw(size-1, stage + 1)}{(size - 1 !== 1) ? ']' : ''}
    </span>)
  }
}

function rowByRow(size, stage=0) {
  if (stage === 0) {
    return (
    <div className='container'>
      <div className='row align-content-center'>
        <div className='col text-center'>
          Winner
        </div>
      </div>
      {rowByRow(size, stage + 1)}
    </div>)
  }
  else if (stage === size) {

    let participants = [];
    for (let i = 1; i <= (size * 2); i++) {
      participants.push(<div className='col text-center'>Name</div>)
    }

    return (
      <div className='row align-content-center'>
        {participants}
      </div>
    )
  }
  else {

    let round = [];
    for (let i = 1; i <= (size * 2); i++) {
      round.push(<div className='col text-center'>Winner</div>)
    }    return (
      <div className='row align-content-center'>
        {round}
      </div>
    )
  }
}

function App() {
  return (<div>
    {rowByRow(2)}
    </div>
  );
}

export default App;
