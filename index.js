const inquirer=require('inquirer');
const fs=require('fs');
const Manager=require('./Lib/Manager');
const Engineer=require('./Lib/Engineer');
const Intern=require('./Lib/Intern');
const generateSite=require('./src/template');
const team=[];


const createManager=[
    {
        type: 'input',
        message: 'Enter your name:',
        name: 'managerName',
        validate: (value)=>{
            if (value) {
                return true;
            } else {
                return 'I demand you answer the question';
            }
        },
    },
    {
        type: 'input',
        message: 'Enter your employee ID number:',
        name: 'managerId',
        validate:(value)=>{
            if (value) {
                return true;
            } else {
                return 'I demand you answer the question';
            }
        },
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'managerEmail',
        validate:(value)=>{
            if (value) {
                return true;
            } else {
                return 'I demand you answer the question';
            }
        },
    },
    {
        type: 'input',
        message: 'Enter your office number:',
        name: 'officeNumber',
        validate:(value)=>{
            if (value) {
                return true;
            } else {
                return 'I demand you answer the question';
            }
        },
    },
];
const addEmployee=[
    {
        type: 'list',
        message: 'Would you like to add another employee?',
        choices: ['Add Engineer', 'Add Intern', 'finish building my team'],
        name: 'menu',
    },
];
const createEngineer=[
    {
        type: 'input',
        message: 'Enter the engineer\'s name:',
        name: 'engineerName',
        validate: (value)=>{
            if (value) {
                return true;
            } else {
                return 'I demand you answer the question';
            }
        },
    },
    {
        type: 'input',
        message: 'Enter is the engineer\'s employee ID number:',
        name: 'engineerId',
        validate:(value)=>{
            if (value) {
                return true;
            } else {
                return 'I demand you answer the question';
            }
        },
    },
    {
        type: 'input',
        message: 'Enter the engineer\'s employee email address:',
        name: 'engineerEmail',
        validate: (value)=>{
            if (value) {
                return true;
            } else {
                return 'I demand you answer the question';
            }
        },
    },
    {
        type: 'input',
        message: 'Enter the engineer\'s GitHub username:',
        name: 'engineerGithub',
        validate: (value)=>{
            if (value) {
                return true;
            } else {
                return 'I demand you answer the question';
            }
        },
    },
];
const createIntern=[
    {
        type: 'input',
        message: 'Enter the intern\'s name:',
        name: 'internName',
        validate: (value)=>{
            if (value) {
                return true;
            } else {
                return 'I demand you answer the question';
            }
        },
    },
    {
        type: 'input',
        message: 'Enter the intern\'s employee ID number:',
        name: 'internId',
        validate: (value)=>{
            if (value) {
                return true;
            } else {
                return 'I demand you answer the question';
            }
        },
    },
    {
        type: 'input',
        message: 'Enter the intern\'s email address:',
        name: 'internEmail',
        validate: (value)=>{
            if (value) {
                return true;
            } else {
                return 'I demand you answer the question';
            }
        },
    },
    {
        type: 'input',
        message: 'Enter the intern\'s school name:',
        name: 'internSchool',
        validate: (value)=>{
            if (value) {
                return true;
            } else {
                return 'I demand you answer the question';
            }
        },
    },
];
function Done() {
    const fileName='team';
    fs.writeFile('./dist/generate.html',generateSite(team), function (err) {if(err) {throw err;}
        console.log('🎆✅👌 Team\'s basic info webpage generated 👌✅🎆')});
}
function buildIntern() {
    inquirer.prompt(createIntern).then(function (answers) {
        const intern=new Intern(
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.internSchool
        );
        team.push(intern);
        menu();
    });
}
function buildEngineer() {
    inquirer.prompt(createEngineer).then(function (answers) {
        const engineer=new Engineer(
            answers.engineerName,
            answers.engineerId,
            answers.engineerEmail,
            answers.engineerGithub
        );
        teamMembers.push(engineer);
        promptMenu();
    });
}
function menu() {
    inquirer.prompt(addEmployee).then(function (userChoice) {
        switch (userChoice.menu) {
            case 'Engineer':
                buildEngineer();
                break;
            case 'Intern':
                buildIntern();
                break;
            default:
                Done();
        }
    });
}
function buildManager() {
    inquirer.prompt(createManager).then(function (answers) {
        const manager=new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.officeNumber
        );
        team.push(manager);
        menu();
    });
}
buildManager();