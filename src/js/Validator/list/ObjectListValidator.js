import {Validator} from '../Validator'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {ListValidator} from './ListValidator'

/**
 * @implements {Validator}
 */
export class ObjectListValidator extends ListValidator {
  /**
   *
   * @param {ObjectArray} value
   * @return {boolean}
   */
  validateType(value) {
    return value instanceof globalFlexioImport.io.flexio.flex_types.arrays
      .ObjectArray
  }
}
