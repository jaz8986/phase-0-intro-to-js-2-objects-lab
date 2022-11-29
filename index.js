const employee = {name: "Sam",
streetAddress: "11 Broadway"}

function updateEmployeeWithKeyAndValue (employee, key, value) {
    const copyOfEmployee = {...employee}
    copyOfEmployee[key] = value
    return copyOfEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey (employee, name) { 
    const copyOfEmployee = {...employee}
    delete copyOfEmployee.name
    return copyOfEmployee
}

deleteFromEmployeeByKey(employee, "name")

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name
    return employee
}

destructivelyDeleteFromEmployeeByKey(employee, "name")