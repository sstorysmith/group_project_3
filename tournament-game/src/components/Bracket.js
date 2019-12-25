import React from 'react';

function Bracket(props) {
    const render = props.renderFromArray(props.generateBracket(parseInt(props.match.params.number)));
    return (
        <>
            {render}
        </>
    )

}

export default Bracket;