/* eslint-disable n/handle-callback-err */
/* eslint-disable no-unused-vars */
const http = require('http')
const fs = require('fs')

let homeContent = ''
let projectContent = ''
let regestrationContent = ''

const args = require('minimist')(process.argv.slice(1))

fs.readFile('home.html', (err, data) => {
  if (err) {
    throw err
  }
  homeContent = data
})

fs.readFile('project.html', (err, project) => {
  if (err) {
    throw err
  }
  projectContent = project
})

fs.readFile('registration.html', (err, reg) => {
  if (err) {
    throw err
  }
  regestrationContent = reg
})
http.createServer((request, response) => {
  const url = request.url
  response.writeHeader(200, { 'Content-Type': 'text/html' })
  switch (url) {
    case '/registration':
      response.write(regestrationContent)
      response.end()
      break
    case '/project':
      response.write(projectContent)
      response.end()
      break
    default:
      response.write(homeContent)
      response.end()
      break
  }
}).listen(args.port)
