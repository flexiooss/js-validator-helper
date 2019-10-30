import {Validator} from './Validator'
import {isNull, isString, isRegex} from '@flexio-oss/assert'
import {TypeCheck} from '@flexio-oss/extended-flex-types'

/**
 * @implements {Validator}
 */
export class StringValidator extends Validator {
  /**
   *
   * @param {string} value
   * @return {boolean}
   */
  validateType(value) {
    return isString(value)
  }

  /**
   *
   * @param {string} value
   * @return {boolean}
   */
  validateNotNull(value) {
    return this.validateType(value) && !isNull(value)
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
    return this.validateType(rangeStart) && this.validateType(rangeEnd) && this.validateType(value) && value >= rangeStart && value <= rangeEnd
  }

  /**
   *
   * @param {string} value
   * @param {StringArray} enumeratedValues
   * @return {boolean}
   */
  validateInEnumerated(value, enumeratedValues) {
    return TypeCheck.isStringArray(enumeratedValues) && this.validateType(value) && enumeratedValues.indexOf(value, 0) > -1
  }

  /**
   *
   * @param {string} value
   * @param {RegExp} regex
   * @return {boolean}
   */
  validateRegex(value, regex) {
    return isRegex(regex) && this.validateType(value) && regex.test(value)
  }
}
