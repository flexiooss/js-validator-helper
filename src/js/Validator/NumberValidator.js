import {Validator} from './Validator'
import {isNull, isNumber} from '@flexio-oss/assert'
import {TypeCheck} from '@flexio-oss/extended-flex-types'

/**
 * @implements {Validator}
 */
export class NumberValidator extends Validator {
  /**
   *
   * @param {Number} value
   * @return {boolean}
   */
  validateType(value){
    return isNumber(value)
  }

  /**
   *
   * @param {Number} value
   * @return {boolean}
   */
  validateNotNull(value) {
    return this.validateType(value) && !isNull(value)
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
    return this.validateType(rangeStart) && this.validateType(rangeEnd) && this.validateType(value) && value >= rangeStart && value <= rangeEnd
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
