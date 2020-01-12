import React from 'react';

function Card(props) {
    const {img} = props;
    console.log(props)

    return (
        <div class="card" style={{width: "18 rem"}}>
             <img src={img} class="card-img-top" alt="..."/>
        </div>
        )
}

export default Card;