let employee = {};
[employee.name, employee.streetAddress] = "name", "streetAddress";
function  updateEmployeeWithKeyAndValue(employee, key, value) {
    let updtEmployee = {...employee};
    updtEmployee[key] = value;
    return updtEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    let removeEmployee = {...employee};
    delete removeEmployee[key];
    return removeEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
 
  