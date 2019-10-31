import {Validator} from './Validator'
import {isNull, isString, isRegex} from '@flexio-oss/assert'
import {TypeCheck} from '@flexio-oss/extended-flex-types'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'

/**
 * @implements {Validator}
 */
export class StringListValidator extends Validator {
  /**
   *
   * @param {StringArray} value
   * @return {boolean}
   */
  validateType(value) {
    return value instanceof globalFlexioImport.io.flexio.flex_types.arrays
      .StringArray
  }

  /**
   *
   * @param {StringArray} value
   * @return {boolean}
   */
  validateNotNull(value) {
    return this.validateType(value) && !isNull(value)
  }

  /**
   *
   * @param {StringArray} value
   * @return {boolean}
   */
  validateNotEmpty(value) {
    return this.validateNotNull(value) && value.length > 0
  }

  /**
   *
   * @param {StringArray} value
   * @param {string} rangeStart
   * @param {string} rangeEnd
   * @return {boolean}
   */
  validateInRange(value, rangeStart, rangeEnd) {
    return this.validateType(rangeStart) && this.validateType(rangeEnd) && this.validateType(value) && value >= rangeStart && value <= rangeEnd
  }

  /**
   *
   * @param {StringArray} value
   * @param {StringArray} enumeratedValues
   * @return {boolean}
   */
  validateInEnumerated(value, enumeratedValues) {
    return TypeCheck.isStringArray(enumeratedValues) && this.validateType(value) && enumeratedValues.indexOf(value, 0) > -1
  }

  /**
   *
   * @param {StringArray} value
   * @param {RegExp} regex
   * @return {boolean}
   */
  validateRegex(value, regex) {
    return isRegex(regex) && this.validateType(value) && regex.test(value)
  }
}
