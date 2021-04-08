const data = require('./data.js')

const name = (options) => {
    const type = options ? options.type : 'f'

    var string = ''

    for (i = 0; i < type.length; i++) {
        if (type[i] == 'f') {
            string = string + data.name.first[Math.floor(Math.random() * data.name.first.length)] + ' '
        }
        if (type[i] == 'm') {
            string = string + data.name.middle[Math.floor(Math.random() * data.name.middle.length)] + ' '
        }
        if (type[i] == 'l') {
            string = string + data.name.last[Math.floor(Math.random() * data.name.last.length)] + ' '
        }
    }

    return string.trim()
}

const number = (options) => {
    const min = Number(options && options.min ? options.min : 0)
    const max = Number(options && options.max ? options.max : 1)
    const floor = options && options.floor ? options.floor : false
    const number = Math.random() * (max - min + 1) + min;

    if (floor) {
        return Math.floor(number)
    } else {
        return number
    }
}

module.exports = {
    name,
    number
}