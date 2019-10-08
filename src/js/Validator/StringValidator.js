import {Validator} from './Validator'
import {isNull, isString, isRegex} from '@flexio-oss/assert'
import {TypeCheck} from '@flexio-oss/extended-flex-types'

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
    return isString(rangeStart) && isString(rangeEnd) && isString(value) && value >= rangeStart && value <= rangeEnd
  }

  /**
   *
   * @param {string} value
   * @param {StringArray} enumeratedValues
   * @return {boolean}
   */
  validateInEnumerated(value, enumeratedValues) {
    return TypeCheck.isStringArray(enumeratedValues) && isString(value) && enumeratedValues.indexOf(value, 0) > -1
  }

  /**
   *
   * @param {string} value
   * @param {RegExp} regex
   * @return {boolean}
   */
  validateRegex(value, regex) {
    return isRegex(regex) && isString(value) && regex.test(value)
  }
}
