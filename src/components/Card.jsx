import React from 'react'

export default function Card(props) {



  const suitColor = (suit) => {
    if (suit == "♥" || suit == "♦") {
      return 'red';
    }
    return 'black';

  }


  return (
    <div className='card' style={{color: suitColor(props.suit)}}>
      <span>{props.suit}</span>
      <span>{props.rank}</span>
    </div>
  )
}
