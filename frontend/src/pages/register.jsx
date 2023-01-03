import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
  const [formData, SetFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    SetFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className="heading">
        <hi>
          <FaUser /> Register
        </hi>
        <p> Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form control"
              id="name"
              name="name"
              value={name}
              placeholder="John Doe"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form control"
              id="email"
              name="email"
              value={email}
              placeholder="Example@email."
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter Password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form control"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
