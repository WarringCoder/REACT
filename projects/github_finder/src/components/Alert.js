import React from 'react'

const Alert = (props) => {
  return (
    props.error !== null && (
            <div className={`alert alert-${props.error.type} error`}>
                { props.error.msg }
            </div>
    )
  )
}

export default Alert