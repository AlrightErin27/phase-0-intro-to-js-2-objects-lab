//Question 1
let employee = {};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  employee = {
    name: `Sam`,
    streetAddress: `11 Broadway`,
  };
  return employee;
}

//Question 2
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, `name`, `Eli`);

//Question 3
function deleteFromEmployeeByKey(employee, key) {
  let { [key]: omit, ...res } = employee;
  return res;
}

//Question 4
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
