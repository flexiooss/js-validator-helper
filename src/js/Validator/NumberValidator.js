import {Validator} from './Validator'
import {isNull, isNumber} from '@flexio-oss/assert'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'

/**
 * @implements {Validator}
 */
export class NumberValidator extends Validator {
  /**
   *
   * @param {Number} value
   * @return {boolean}
   */
  validateType(value) {
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
   * @param {string} rangeStart
   * @param {string} rangeEnd
   * @return {boolean}
   */
  validateInRange(value, rangeStart, rangeEnd) {
    return this.validateType(value) && value >= parseFloat(rangeStart) && value <= parseFloat(rangeEnd)
  }

  /**
   *
   * @param {Number} value
   * @param {StringArray} enumeratedValues
   * @return {boolean}
   */
  validateInEnumerated(value, enumeratedValues) {
    return enumeratedValues instanceof globalFlexioImport.io.flexio.flex_types.arrays
      .StringArray && this.validateType(value) && enumeratedValues.mapTo(new globalFlexioImport.io.flexio.flex_types.arrays.FloatArray(), v => parseFloat(v)).includes(value)
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
