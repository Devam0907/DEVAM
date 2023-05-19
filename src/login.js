import React,{useState} from 'react'

import login from './login'
function Login(){
    
    const[text,setText]=useState()
    const hc=(e)=>{
        console.log(e.target.value)
        setText(e.target.value)
    }
    return(
        
      <section
  className="h-100 gradient-form"
  style={{ backgroundColor: "transparent" }}
>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">
                <div className="text-center">
                  <img src="TECHNISHAL.jpg" style={{ width: 185 }} alt="logo" />
                  <h4 className="mt-1 mb-5 pb-1">TECH NISHAL TEAM</h4>
                </div>
                <form method="POST" action="mmm.html">
                  <input type="Create new" />
                  <p>Please login to your account</p>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form2Example11"
                      className="form-control"
                      placeholder="Phone number or email address "
                      onChange={(e)=> hc(e)}

                    />
                    <label className="form-label" htmlFor="form2Example11">
                      Username :{text}
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form2Example22"
                      className="form-control"
                      onChange={(e)=> hc(e)}
                    />
                    <label className="form-label" htmlFor="form2Example22">
                      Password :{text}
                    </label>
                  </div>
                  <div className="text-center pt-1 mb-5 pb-1">
                    <button
                      className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                      type="button"
                    >
                      Log in
                    </button>
                    <a className="text-muted" href="#!">
                      Forgot password?
                    </a>
                  </div>
                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <button type="button" className="btn btn-outline-danger">
                      Create new
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">We are more than just a company</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
    )
}
export default Login
