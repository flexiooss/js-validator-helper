import {Validator} from './Validator'
import {isNull, isString} from '@flexio-oss/assert'

export class StringValidator extends Validator {
  /**
   *
   * @param {string} value
   * @return {boolean}
   */
  validateNotNull(value) {
    return isString(value) && !isNull(value)
  }

  /**
   *
   * @param {string} value
   * @return {boolean}
   */
  validateNotEmpty(value) {
    return this.validateNotNull(value) && value !== ''
  }

  /**
   *
   * @param {string} value
   * @param {string} rangeStart
   * @param {string} rangeEnd
   * @return {boolean}
   */
  validateInRange(value, rangeStart, rangeEnd) {
    return isString(value) && value >= rangeStart && value <= rangeEnd
  }

  /**
   *
   * @param {string} value
   * @param {StringArray} enumeratedValues
   * @return {boolean}
   */
  validateInEnumerated(value, enumeratedValues) {
    return isString(value) && enumeratedValues.indexOf(value, 0) > -1
  }

  /**
   *
   * @param {string} value
   * @param {string} regex
   * @return {boolean}
   */
  validateRegex(value, regex) {
    return isString(value) && new RegExp(regex).test(value)
  }
}