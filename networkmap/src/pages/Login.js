import React from 'react'

const Login = () => {
  return (
    <form>
      <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <div className="form-floating">
        <input type="email" className="form-control" id="Email" placeholder="name@example.com"/>
        <label htmlFor="Email">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="pwd" placeholder="Password"/>
        <label htmlFor="pwd">Password</label>
      </div>

      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> Remember me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>
  )
}

export default Login