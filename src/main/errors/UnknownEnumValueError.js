'use strict'

const { IllegalArgumentError } = require('@ballistagroup/error-support')

module.exports = IllegalArgumentError.subclass({ name: 'UnknownEnumValueError' })
