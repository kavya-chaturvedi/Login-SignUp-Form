import React from 'react'


export default function Alert(props) {
  return (
    props.alertText && <>
      <div className="card container text-bg-success p-3" style={{width:'100%', align:'center'}}>
  <div className="card-header">
    {props.greetText}
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>{props.alertText}</p>
    </blockquote>
  </div>
</div>
    </>
  )
}
