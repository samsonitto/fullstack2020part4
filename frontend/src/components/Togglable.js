import React, { useState, useImperativeHandle } from 'react'
import Button from './Button'

const Togglable = React.forwardRef((props, ref) => {
  const [ visible, setVisible ] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenHidden = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <Button handleClick={toggleVisibility} text={props.buttonLabel} />
      </div>
      <div style={showWhenHidden}>
        {props.children}
        <Button handleClick={toggleVisibility} text={'Cancel'} />
      </div>
    </div>
  )
})

export default Togglable