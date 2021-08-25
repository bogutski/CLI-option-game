const inquirer = require('inquirer');

function stockBuy() {
  return inquirer
    .prompt(
      [
        {
          type: 'list',
          message: 'Choose your action',
          name: 'actions',
          choices: [
            'Success',
            'Fail',
          ],
        },
      ])
    .then((answers) => {
      console.log(answers);
      return 20;
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}


module.exports = stockBuy;
