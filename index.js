const employee = {
    name: "Ricardo",
    streetAddress: "Home"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    const desNewEmployee = employee;
    desNewEmployee[key] = value;
    return desNewEmployee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newerEmployee = { ...employee};
    newerEmployee[key] = undefined
    return newerEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const evenNewerEmployee = employee;
    evenNewerEmployee[key] = undefined
    return evenNewerEmployee;
}