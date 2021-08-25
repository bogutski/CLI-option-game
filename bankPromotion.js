const inquirer = require('inquirer');

function bankPromotion() {
  return inquirer
    .prompt(
      [
        {
          type: 'list',
          message: 'Choose your action',
          name: 'actions',
          choices: [
            'Bank Success',
            'Bank Fail',
          ],
        },
      ])
    .then((answers) => {
      console.log(answers);
      return -2;
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}


module.exports = bankPromotion;
