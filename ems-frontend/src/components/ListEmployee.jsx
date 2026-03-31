import React, { useEffect, useState } from "react";
import listEmployees from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";


const ListEmployee = () => {
const [employees, setEmployees] = useState([]);
 const navigator = useNavigate()
 function addNewEmployee(){
  navigator("/add-employee")
 }
useEffect(() => {
  listEmployees()
    .then((res) => {
      setEmployees(res.data);
    })
    .catch((error) => console.error(error));
}, []);

  // const dummyData = [
  //   {
  //     id: 1,
  //     firstName: "John ",
  //     lastName: " Doe",
  //     email: "Johndohoes@gmail.com",
  //   },
  //   {
  //     id: 2,
  //     firstName: "Jane ",
  //     lastName: " Doe",
  //     email: "Janedoes@gmail.com",
  //   },
  //   {
  //     id: 3,
  //     firstName: "koffi ",
  //     lastName: " Kouma",
  //     email: "martin@gmail.com",
  //   },
  //   {
  //     id: 4,
  //     firstName: "Martinez ",
  //     lastName: " sancho",
  //     email: "sanchez@gmail.com",
  //   },
  // ];
  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <button className="btn btn-primary mb-2" onClick={addNewEmployee}>Add New Employee</button>
      <table className="table table-striped table-border">
        <thead>
          <tr>
            <th>Employee ID</th>
          <th>Employee first Name</th>
          <th>Employee last Name</th>
          <th>Employee email ID</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;
