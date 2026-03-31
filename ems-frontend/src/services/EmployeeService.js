import axios from "axios";
const BASE_REST_API_URL = 'http://localhost:8080/api/employees'
const listEmployees = () => axios.get(BASE_REST_API_URL);
export const createEmployee = (employee)=>axios.post(BASE_REST_API_URL,employee);
export default listEmployees;