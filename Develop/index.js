// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require ('./Develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the purpose of your readMe?',
        validate: input => {
            if (input){
                return true;
            } else {
                console.log ('Title needed, please enter');
                return false;
            }
        }
    },
    {
        type : 'input',
        name: 'description',
        message: 'A description for the readMe will be needed',
        validate: input => {
            if (input) {
                return true;
            }else {
                console.log ('Please enter a description');
            }
        }
    },
    {type: 'confirm',
    name: 'confirmTable',
    message: 'Is a table of content needed?',
    default: true
},
{
    type: 'input',
    name: 'installation',
    message: 'Will there be any installation neccessary?',
    validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please enter installation information');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'What are the usage information?',
    validate: input => {
        if (input) {
            return true;
        } else {
            console.log ('Enter information for any usage');
        }
    }
},
{
    type: 'list',
    name: 'license',
    message: 'What license wil be needed?',
    choices: [
        'None',
        'Apache license 2.0',
        'Boost Software License 1.0',
        'BSD 2-clause "Simplified" license',
        'BSD 3-clause "New" or "Revised" license',
        'Creative Commons Zero v1.0 Universal',
        'Do What The F*ck You Want To Public License',
        'Eclipse Public License 1.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU General Public License v3.0',
        'GNU Lesser General Public License v3.0',
        'MIT',
        'Mozilla Public License 2.0',
        'The Unlicense'  
    ]
},
{
    type: 'input',
    name: 'contribute',
    message: 'What are the contribution guidelines?',
    validate: input => {
        if (input) {
            return true;
        } else {
            console.log ('Pleaes enter any contrbutions guidelines');
            return false;
        }
    }
},
{
    type: 'input',
    mame: 'tests',
    message: 'Test instructions',
    validate: input => {
        if (input) {
            return true;
        }else{
            console.log ('Please enter any test information');
            return false
        }
    }
},
{
    type: 'input',
    name: 'username',
    message: 'What is your username for GitHub?',
    validate: input => {
        if (input) {
            return true;
        }else{
            console.log ('PLease enter username');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    validate: input => {
        if (input) {
            return true;
        }else{
            console.log('Please enter an emaail');
            return false;
        }
    }
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise ((resolve, reject) =>{
        fs.writeFole(fileName, data, error => {
            if (error) {
                reject (error);
                return;
            }
            resolve ({
                ok: true,
                message: 'file created'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions)
    .then (answers => {
        console.log (answers);
        return generateMarkdown (answers);
    })
    .then(pageMarkdown => {
        writeToFile ('./dist/README.md', pageMarkdown);
        console.log ('README.md has been created')
    })
    .catch((error) => {
        console.log (error);
    })
}

// Function call to initialize app
init();
