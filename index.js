var inquirer = require("inquirer")
var mysql = require("mysql2")
var db = mysql.createConnection({
    host:"localhost",
    port:3306, 
    user:"root",
    password:"password"
}) 
db.connect(function(){
    start()
})
function start(){
//view all departments, view all roles, view all employees, add a department, 
//add a role, add an employee, and update an employee role
inquirer.prompt({
    type:"list", 
    name:"menu",
    message:"choose the following option",
    choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
})
.then(respond => {
    if (respond.menu==="view all departments") {
        viewDepartments()
    }
    if (respond.menu==="view all roles") {
        viewRoles()
    }
    if (respond.menu==="view all employees") {
        viewEmployees
    }
    if (respond.menu==="add a department") {
        addDepartment
    }
    if (respond.menu==="add a role") {
        addRole
    }
    if (respond.menu==="add an employee") {
        addEmployee 
    }
    if (respond.menu==="update employee role") {
        updateEmployee
    }
})
}
function viewDepartments(){

}
function viewRoles(){

}
function viewEmployees(){

}
function addDepartment(){

}
function addRole(){

}
function addEmployee(){

}
function updateEmployee(){
    
}