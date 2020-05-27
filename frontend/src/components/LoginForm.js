import React from 'react'
import Input from './Input'
import Button from './Button'

const LoginForm = (props) => (
  <form onSubmit={props.handleLogin}>
    <div>
      username
      <Input
        type="text"
        value={props.username}
        name="Username"
        handleOnChange={({ target }) => props.setUsername(target.value)}
      />
    </div>
    <div>
      password
      <Input
        type="password"
        value={props.password}
        name="Password"
        handleOnChange={({ target }) => props.setPassword(target.value)}
      />
    </div>
    <Button type="submit" text="Login" />
  </form>      
)

export default LoginForm