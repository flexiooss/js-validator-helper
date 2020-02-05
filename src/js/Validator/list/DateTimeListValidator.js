import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {ListValidator} from './ListValidator'

/**
 * @implements {Validator}
 */
export class DateTimeListValidator extends ListValidator {
  /**
   *
   * @param {StringArray} value
   * @return {boolean}
   */
  validateType(value) {
    return value instanceof globalFlexioImport.io.flexio.flex_types.arrays
      .DateTimeArray
  }

}
