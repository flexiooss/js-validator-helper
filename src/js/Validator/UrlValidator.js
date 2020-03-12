import {Validator} from './Validator'
import {isNull, isString, isRegex} from '@flexio-oss/assert'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'

/**
 * @implements {Validator}
 */
export class UrlValidator extends Validator {
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
    if(isNull(value)){
      return true
    }
    return this.validateType(rangeStart) && this.validateType(rangeEnd) && this.validateType(value) && value >= rangeStart && value <= rangeEnd
  }

  /**
   *
   * @param {string} value
   * @param {StringArray} enumeratedValues
   * @return {boolean}
   */
  validateInEnumerated(value, enumeratedValues) {
    if(isNull(value)){
      return true
    }
    return enumeratedValues instanceof globalFlexioImport.io.flexio.flex_types.arrays
      .StringArray && this.validateType(value) && enumeratedValues.indexOf(value, 0) > -1
  }

  /**
   *
   * @param {string} value
   * @param {RegExp} regex
   * @return {boolean}
   */
  validateRegex(value, regex) {
    if(isNull(value)){
      return true
    }
    return isRegex(regex) && this.validateType(value) && regex.test(value)
  }
}
