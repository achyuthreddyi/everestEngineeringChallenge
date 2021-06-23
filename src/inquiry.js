const inquirer = require('inquirer')

module.exports = {
  askQuestionsForDeliveryCost: () => {
    const deliveryCostquestions = [
      {
        name: 'pkgId',
        type: 'input',
        message: 'enter package Id',
        validate: function (value) {
          if (value.length) {
            return true
          } else {
            return 'Please enter the packageId'
          }
        },
      },
      {
        name: 'pkgWeightInKg',
        type: 'input',
        message: 'enter package Weight',
        validate: function (value) {
          if (value.length && typeof parseInt(value) == 'number') {
            return true
          } else {
            return 'Please enter the valid package Weight'
          }
        },
      },
      {
        name: 'distanceInKm',
        type: 'input',
        message: 'enter package Distance',
        validate: function (value) {
          if (value.length && typeof parseInt(value) == 'number') {
            return true
          } else {
            return 'Please enter the valid package Distance'
          }
        },
      },
      {
        name: 'offerCode',
        type: 'input',
        message: 'enter offercode ',
      },
    ]
    return inquirer.prompt(deliveryCostquestions)
  },
  askTypeFunction: () => {
    const questions = [
      {
        type: 'list',
        name: 'typeOfFunctionality',
        message: 'calculate delivery cost or delivery time for the packages',
        choices: [
          'calculate delivery cost',
          'calculate delivery time',
          'get all existing offercodes',
          'add new offercode',
        ],
        default: 'delivery cost',
      },
    ]
    return inquirer.prompt(questions)
  },
  askBaseCostNoofPkgs: () => {
    const questions = [
      {
        type: 'input',
        name: 'basePrice',
        message: 'Please Enter the base delivery cost',
        validate: function (value) {
          if (value.length) {
            return true
          } else {
            return 'Please enter the base delivery cost'
          }
        },
      },
      {
        type: 'input',
        name: 'noOfPackages',
        message: 'Please Enter the no of packages',
        validate: function (value) {
          if (value.length) {
            return true
          } else {
            return 'Please enter the no of packages'
          }
        },
      },
    ]
    return inquirer.prompt(questions)
  },
}
