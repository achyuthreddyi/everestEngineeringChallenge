const readline = require('readline')

const rl = readline.createInterface(process.stdin, process.stdout)
rl.setPrompt('please input the package base price and number of test cases')
rl.prompt()
const input = {}
const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question(
      'Please enter the package id, package weight in kg, distance in kms, offer code ',
      answer => {
        console.log(`Thank you for your valuable feedback: ${answer}`)
        resolve()
      }
    )
  })
}

rl.on('line', line => {
  if (line === 'quit') rl.close()

  input.base_price = parseInt(line.split(' ')[0])
  input.no_of_testcases = parseInt(line.split(' ')[1])

  const main = async () => {
    await question1()
  }

  for (let i = 0; i < input.no_of_testcases; i++) {
    console.log(' i value ', i)
    main()
  }
}).on('close', () => process.exit(0))

console.log()
