import {Validator} from './Validator'
import {isNull, isBoolean} from '@flexio-oss/assert'

export class BooleanValidator extends Validator {
  /**
   *
   * @param {boolean} value
   * @return {boolean}
   */
  validateNotNull(value) {
    return isBoolean(value) && !isNull(value)
  }

  /**
   *
   * @param {boolean} value
   * @return {boolean}
   */
  validateNotEmpty(value) {
    return this.validateNotNull(value)
  }

  /**
   *
   * @param {boolean} value
   * @param {Number} rangeStart
   * @param {Number} rangeEnd
   * @return {boolean}
   */
  validateInRange(value, rangeStart, rangeEnd) {
    throw new Error('BooleanValidator: no regex for `validateRegex`')
  }

  /**
   *
   * @param {boolean} value
   * @param {NumberArray} enumeratedValues
   * @return {boolean}
   */
  validateInEnumerated(value, enumeratedValues) {
    throw new Error('BooleanValidator: no regex for `validateRegex`')
  }

  /**
   *
   * @param {string} value
   * @param {RegExp} regex
   * @return {boolean}
   */
  validateRegex(value, regex) {
    throw new Error('BooleanValidator: no regex for `validateRegex`')
  }
}
