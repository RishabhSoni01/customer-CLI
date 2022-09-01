const program = require('commander');
//const { prompt } = require('inquirer');

const {
    AddCustomer,
    FindCustomer,
    UpdateCustomer,
    RemoveCustomer,
    ListCustomers
  } = require('./index');


{/*const questions = [
    {
      type: 'input',
      name: 'firstname',
      message: 'Customer First Name'
    },
    {
      type: 'input',
      name: 'lastname',
      message: 'Customer Last Name'
    },
    {
      type: 'input',
      name: 'phone',
      message: 'Customer Phone Number'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Customer Email Address'
    }
  ];
*/}
program
    .version('1.0.0')
    .description('Client Management System');

{/*program
  .help(`
Function                  Alias        Description
version                   v            To check the version of the customer-cli
client-cli add            a            To add new customes in the database
client-cli list           l            To check all the customes in the database
client-cli update [_ID]   u            To update details for specific customes in the database
client-cli remove [_ID]   r            To remove details for specific customes in the database
client-cli find [NAME]    f            To find a specific customes in the database
`)
*/}
program
    .command('add <firstname> <lastname> <phone> <email>')
    .alias('a')
    .description('Add a Customer')
    .action((firstname, lastname, phone, email)=>{
        AddCustomer({firstname,lastname, phone,email});
    });

{/*program
    .command('add')
    .alias('a')
    .description('Add New Customer')
    .action(()=>{
        prompt(questions).then(answers=>AddCustomer(answers));
    });
*/}

{/*program
    .command('find <name>')
    .alias('f')
    .description('find a Customer')
    .action(name=>FindCustomer(name));
*/}

{/*program
  .command('update <_id>')
  .alias('u')
  .description('Update a customer')
  .action(_id => {
    prompt(questions).then(answers => UpdateCustomer(_id, answers));
  });
*/}
program
    .command('update <_id>')
    .alias('u')
    .description('Update a Customer')
    .action((_id)=>{
        UpdateCustomer({_id});
    });

{/*program
  .command('remove <_id>')
  .alias('r')
  .description('Remove a customer')
  .action(_id => RemoveCustomer(_id));
*/}
program
  .command('list')
  .alias('l')
  .description('List all customers')
  .action(() => ListCustomers());


program.parse(process.argv)

