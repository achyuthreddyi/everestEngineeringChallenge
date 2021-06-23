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
          'Calculate delivery cost',
          'Calculate delivery time',
          'Get all existing offercodes',
          'Add new offercode',
          'Exit',
        ],
        default: 'Calculate delivery cost',
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
          if (value.length && typeof parseInt(value) == 'number') {
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
          if (value.length && typeof parseInt(value) == 'number') {
            return true
          } else {
            return 'Please enter the no of packages'
          }
        },
      },
    ]
    return inquirer.prompt(questions)
  },
  askVehicleDetails: () => {
    const questions = [
      {
        type: 'input',
        name: 'noOfVehicles',
        message: 'Please Enter the Number of vehicles',
        validate: function (value) {
          if (value.length && typeof parseInt(value) == 'number') {
            return true
          } else {
            return 'Please enter the  Number of vehicles'
          }
        },
      },
      {
        type: 'input',
        name: 'maxSpeed',
        message: 'Please Enter the maximum speed of vehicle',
        validate: function (value) {
          if (value.length && typeof parseInt(value) == 'number') {
            return true
          } else {
            return 'Please enter the maximum speed of vehicle'
          }
        },
      },
      {
        type: 'input',
        name: 'maxCarriableCapacity',
        message: 'Please Enter the maximum carriable capacity of vehicle',
        validate: function (value) {
          if (value.length && typeof parseInt(value) == 'number') {
            return true
          } else {
            return 'Please enter maximum carriable capacity of vehicle'
          }
        },
      },
    ]
    return inquirer.prompt(questions)
  },
  askNewOfferDetails: () => {
    const questions = [
      {
        type: 'input',
        name: 'offerId',
        message: 'Please Enter the Id of the offer you would give,',
        validate: function (value) {
          if (value.length) {
            return true
          } else {
            return 'Please Enter the Id of the offer you would give'
          }
        },
      },
      {
        type: 'input',
        name: 'discount',
        message: 'Please Enter the discount',
        validate: function (value) {
          if (value.length && typeof parseInt(value) == 'number') {
            return true
          } else {
            return 'Please enter the discount'
          }
        },
      },
      {
        type: 'input',
        name: 'minWeight',
        message: 'Please Enter the minimum weight of the package',
        validate: function (value) {
          if (value.length && typeof parseInt(value) == 'number') {
            return true
          } else {
            return 'Please enter minimum weight of the package'
          }
        },
      },
      {
        type: 'input',
        name: 'maxWeight',
        message: 'Please Enter the maximum weight of the package',
        validate: function (value) {
          if (value.length && typeof parseInt(value) == 'number') {
            return true
          } else {
            return 'Please enter maximum weight of the package'
          }
        },
      },
      {
        type: 'input',
        name: 'minDistance',
        message: 'Please Enter the minimum distance of the package',
        validate: function (value) {
          if (value.length && typeof parseInt(value) == 'number') {
            return true
          } else {
            return 'Please enter minimum distance of the package'
          }
        },
      },
      {
        type: 'input',
        name: 'maxDistance',
        message: 'Please Enter the maximum distance of the package',
        validate: function (value) {
          if (value.length && typeof parseInt(value) == 'number') {
            return true
          } else {
            return 'Please enter maximum distance of the package'
          }
        },
      },
    ]
    return inquirer.prompt(questions)
  },
}
