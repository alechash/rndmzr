# Rndmzr
Rndmzr is an NPM library for generating random data.

# Installation

Install:
`npm install rndmzr --save`

Then you can use the library:
```javascript
const rndmzr = require('rndmzr')

console.log(rndmzr.number({
    // options
}))
```

# Docs

## Random Number
Usage:
`rndmzr.number({ /** options */ })`

Options:
floor: true|false (_optional_, default is false)
min: Number (_optional_, default is 0)
max: Number (_optional_, default is 1)


## Random Name
Usage:
`rndmzr.name({ /** options */ })`

Options:
type: String (_optional_, can be a random string containing "f", "m", and "l", for each letter it will return a name and space (f=first,m=middle,l=last name), default is f)
