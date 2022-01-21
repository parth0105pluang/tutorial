// Every file is a module by default
// Modules - Encapsulated Code (Only share minimum)
const names = require('./names')
const sayHi = require("./utility")
require('./alternate')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

