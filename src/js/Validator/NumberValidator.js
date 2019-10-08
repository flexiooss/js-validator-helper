import {Validator} from './Validator'
import {isNull, isNumber} from '@flexio-oss/assert'

export class NumberValidator extends Validator {
  /**
   *
   * @param {string} value
   * @return {boolean}
   */
  validateNotNull(value) {
    return isNumber(value) && !isNull(value)
  }

  /**
   *
   * @param {string} value
   * @return {boolean}
   */
  validateNotEmpty(value) {
    return this.validateNotNull(value)
  }

  /**
   *
   * @param {string} value
   * @param {string} rangeStart
   * @param {string} rangeEnd
   * @return {boolean}
   */
  validateInRange(value, rangeStart, rangeEnd) {
    return isNumber(value) && value >= rangeStart && value <= rangeEnd
  }

  /**
   *
   * @param {string} value
   * @param {StringArray} enumeratedValues
   * @return {boolean}
   */
  validateInEnumerated(value, enumeratedValues) {
    return isNumber(value) && enumeratedValues.indexOf(value, 0) > -1
  }

  /**
   *
   * @param {string} value
   * @param {string} regex
   * @return {boolean}
   */
  validateRegex(value, regex) {
    return isNumber(value) && new RegExp(regex).test(value)
  }
}
