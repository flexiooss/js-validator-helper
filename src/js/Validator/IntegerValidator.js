import {isInteger} from '@flexio-oss/assert'
import {NumberValidator} from './NumberValidator'

/**
 * @implements {Validator}
 */
export class IntegerValidator extends NumberValidator {
  /**
   *
   * @param {Number} value
   * @return {boolean}
   */
  validateType(value) {
    return isInteger(value)
  }

}
