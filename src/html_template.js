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
        <h4>${Manager.getName()}</h4>
    </header>
    <ul>
        <li>${Manager.getId()}</li>
        <li>Email:<a href="gmail.com">${Manager.getEmail()}</a></li>
        <li>Office Number:${Manager.getofficeNum()}</li>
    </ul>
</section>`
};

const engineerCard = (Engineer) => {
    return `
    <section class="card">
    <header>${Engineer.getRole()}
    <h4>${Engineer.getName()}</h4>
    </header> 
    <ul>
        <li>${Engineer.getId()}</li>
        <li>Email: <a href="gmail.com">${Engineer.getEmail()}</a></li>
        <li>Github:<a href="SandlinBen">${Engineer.getGithub()}</a></li>
    </ul>
</section>`
};
 
const internCrad = (Intern) => {
    return `
    <section class="card">
    <header>${Inter.getRole()}
     <h4>${Intern.getName}</h4></header>
    <ul>
        <li>${Intern.getId()}</li>
        <li>Email:<a href="gmail.com">${Intern.getEmail()}</a></li>
        <li>School:${Intern.getSchool()}</li>
    </ul>
</section>`
}

module.exports = pageHTML;