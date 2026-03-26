import React from 'react'

const ListEmployee = () => {
    const dummyData = [
        {
            "id": 1,
            "firstName": 'John ',
            "lastName": ' Doe',
            "email": 'Johndohoes@gmail.com',
        },
        {
            "id": 2,
            "firstName": 'Jane ',
            "lastName": ' Doe',
            "email": 'Janedoes@gmail.com'
        },
        {
            "id": 3,
            "firstName": 'koffi ',
            "lastName": ' Kouma',
            "email": 'martin@gmail.com'
        },
        {
            "id": 4,
            "firstName": 'Martinez ',
            "lastName": ' sancho',
            "email": 'sanchez@gmail.com'
        },

    ]
    return (
        <div className='container'>
             <h2 className='text-center'>List of Employees</h2>
        <table className='table table-striped table-border'>
            <thead>
                <th>Employee ID</th>
                <th>Employee first Name</th>
                <th>Employee last Name</th>
                <th>Employee email ID</th>
            </thead>
            <tbody>
                 {dummyData.map((employee)=>
                 <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                 </tr>
                 
                 )}
            </tbody>
       </table>
        </div>
       

    )
}

export default ListEmployee