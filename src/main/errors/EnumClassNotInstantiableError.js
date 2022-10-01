'use strict'

const { IllegalStateError } = require('@ballistagroup/error-support')

module.exports = IllegalStateError.subclass({ name: 'EnumClassNotInstantiableError' })
