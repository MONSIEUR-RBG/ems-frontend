import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {

  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const handleFirstName = (event) => setFirstName(event.target.value);

  const handleLastName = (event) => setLastName(event.target.value)

  const handleEmail = (event) => setEmail(event.target.value)
  const navigator = useNavigate();

  const saveEmployee=(event)=> {
    event.preventDefault();
    const employee = { firstName, lastName, email }
    console.log(employee);

    createEmployee(employee).then((response) => {
      console.log(response.data);
      navigator('/employees')
    })
  }
  return (
    <div className='container'>
      <br /> <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className='text-center'>Add Employee</h2>
          <div className="card-body">
            <form action="">
              <div className="form-group mb-2">
                <label htmlFor="" className="form-label">First Name:<input
                  type="text"
                  placeholder='Enter Employee First Name'
                  name='firstName'
                  className='from-control'
                  value={firstName}
                  onChange={handleFirstName}
                /></label>

              </div>
              <div className="form-group mb-2">
                <label htmlFor="" className="form-label">Last Name: <input
                  type="text"
                  placeholder='Enter Employee Last Name'
                  name='lastName'
                  className='from-control'
                  value={lastName}
                  onChange={handleLastName}
                /></label>

              </div>
              <div className="form-group mb-2">
                <label htmlFor="" className="form-label">Email: <input
                  type="text"
                  placeholder='Enter Employee  Email'
                  name='Email'
                  className='from-control'
                  value={email}
                  onChange={handleEmail}
                /></label>

              </div>
              <button className="btn btn-success" onClick={saveEmployee}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent