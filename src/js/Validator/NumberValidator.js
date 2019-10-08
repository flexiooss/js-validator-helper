import {Validator} from './Validator'
import {isNull, isNumber} from '@flexio-oss/assert'
import {TypeCheck} from '@flexio-oss/extended-flex-types'

export class NumberValidator extends Validator {
  /**
   *
   * @param {Number} value
   * @return {boolean}
   */
  validateNotNull(value) {
    return isNumber(value) && !isNull(value)
  }

  /**
   *
   * @param {Number} value
   * @return {boolean}
   */
  validateNotEmpty(value) {
    return this.validateNotNull(value)
  }

  /**
   *
   * @param {Number} value
   * @param {Number} rangeStart
   * @param {Number} rangeEnd
   * @return {boolean}
   */
  validateInRange(value, rangeStart, rangeEnd) {
    return isNumber(rangeStart) && isNumber(rangeEnd) && isNumber(value) && value >= rangeStart && value <= rangeEnd
  }

  /**
   *
   * @param {Number} value
   * @param {NumberArray} enumeratedValues
   * @return {boolean}
   */
  validateInEnumerated(value, enumeratedValues) {
    return TypeCheck.isNumberArray(enumeratedValues) && isNumber(value) && enumeratedValues.includes(value)
  }

  /**
   *
   * @param {string} value
   * @param {RegExp} regex
   * @return {boolean}
   */
  validateRegex(value, regex) {
    throw new Error('NumberValidator: no regex for `validateRegex`')
  }
}
