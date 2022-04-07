import React from 'react'

function Button(props) {
  const { onClick, children, className, sx, disabled, icon, type  ='button' } = props
  return (
    <button
      type={type}
      style={sx}
      onClick={onClick}
      disabled={disabled}
      className={`button-default ${!!className ? className : ''}`}>
      {icon ? <span className="icon-style">{!!icon && icon}</span> : <></>}
      {children}
    </button>
  )
}

export default Button
