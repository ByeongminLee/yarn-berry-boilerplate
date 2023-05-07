module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'component_name',
        message: 'What is the component name?',
      },
    ];
    return inquirer.prompt(questions).then(answers => {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { component_name } = answers;
      const name =
        component_name.charAt(0).toUpperCase() + component_name.slice(1);
      return { name };
    });
  },
};
