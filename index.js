const mongoose = require('mongoose');
const customer = require('./models/customer');
mongoose.Promise = global.Promise;

const db =mongoose.connect('mongodb://localhost:27017/customercli');

const Customer = require('./models/customer')

const AddCustomer = (customer) =>{
    Customer.create(customer).then(customer => {
        console.info('New Customer Added');
        mongoose.connection.close();
    });
} 

const FindCustomer = (name) =>{
    const search =new RegExp(name,'i');
    Customer.find({$or :[{firstname:search},{lastname:search}]})
    .then(customer =>{
        console.info(customer);
        console.info(`${customer.length}matches`);
        mongoose.connection.close();
    });
}

const UpdateCustomer = (_id, customer) => {
    Customer.updateOne({ _id }, customer)
      .then(customer => {
        console.info('Customer Updated');
        mongoose.connection.close();
      });
  }

  const RemoveCustomer = (_id) => {
    Customer.remove({ _id })
      .then(customer => {
        console.info('Customer Removed');
        mongoose.connection.close();
      });
  }

  const ListCustomers = () => {
    Customer.find()
      .then(customers => {
        console.info(customers);
        console.info(`${customers.length} customers`);
        mongoose.connection.close();
      });
  }

module.exports = {
    AddCustomer,
    FindCustomer,UpdateCustomer,
    RemoveCustomer,
    ListCustomers
}