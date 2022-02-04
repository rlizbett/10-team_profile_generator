const Manager = require("../lib/Manager");

const pageHTML = function (employeeMembers) {
    return `
    <!DOCTYPE html>
<html>

<head>
    <title>My Team Demo</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" type="text/css" href="./dist/style.css" />
</head>

<body>
    <header>
        <h1>My Team!</h1>
    </header>

    <div>
        <main>
            <div class="products">
            ${employeeList(employeeMembers)}
            </div>
        </main>
    </div>
</body>
</html>`
}

const employeeList = (employeeArray) => {
    var str = "";
    for (i = 0; i < employeeArray.length; i++) {
        if (employeeArray[i].getRole() == "Manager") {
            str += managerCard(employeeArray[i])

        }
        else if (employeeArray[i].getRole() == "Intern") {
            str += internCard(employeeArray[i])

        }
        else {
            str += engineerCard(employeeArray[i])
        }
    }
    return str;
}

const managerCard = (Manager) => { 
    return `
    <section class="card">
    <header>
        ${Manager.getRole()}
        <h4>${Manager.ManagerName}</h4>
    </header>
    <ul>
        <li>${Manager.ManagerId}</li>
        <li>Email:<a href="gmail.com">${Manager.ManagerEmail}</a></li>
        <li>Office Number:${Manager.ManagerOffNum}</li>
    </ul>
</section>`
};

const engineerCard = (Engineer) => {
    return `
    <section class="card">
    <header>${Engineer.getRole()}
    <h4>${Engineer.EngineerName}</h4>
    </header> 
    <ul>
        <li>${Engineer.EngineerId}</li>
        <li>Email: <a href="gmail.com">${Engineer.EngineerEmail}</a></li>
        <li>Github:<a href="SandlinBen">${Engineer.EngineerGithub}</a></li>
    </ul>
</section>`
};
 
const internCard = (Intern) => {
    return `
    <section class="card">
    <header>${Intern.getRole()}
     <h4>${Intern.InternName}</h4></header>
    <ul>
        <li>${Intern.InternId}</li>
        <li>Email:<a href="gmail.com">${Intern.InternEmail}</a></li>
        <li>School:${Intern.InternSchool}</li>
    </ul>
</section>`
}

module.exports = pageHTML;