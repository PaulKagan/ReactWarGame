import React from 'react'

export default function Conclusion(props) {
  return (
    <div id='conclusion'>
        <h1>Win/Lose</h1>
        <h1>{props.score.user}-{props.score.computer}</h1>
        <button id='again' onClick={() => props.setFinished(false)}>Again?</button>
    </div>
  )
}
