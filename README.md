# Rndmzr
Rndmzr is an NPM library for generating random data.

# Installation

Install:<br>
`npm install rndmzr --save`

Then you can use the library:<br>
```javascript
const rndmzr = require('rndmzr')

console.log(rndmzr.number({
    // options
}))
```

# Docs

## Random Number
Usage:<br>
`rndmzr.number({ /** options */ })`

Options:<br>
floor: true|false (_optional_, default is false)<br>
min: Number (_optional_, default is 0)<br>
max: Number (_optional_, default is 1)


## Random Name
Usage:<br>
`rndmzr.name({ /** options */ })`

Options:<br>
type: String (_optional_, can be a random string containing "f", "m", and "l", for each letter it will return a name and space (f=first,m=middle,l=last name), default is f)
