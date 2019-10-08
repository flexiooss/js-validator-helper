/**
 * @interface
 */
export class ValueObjectValidator {
  /**
   *
   * @param {Object} object
   * @return {boolean}
   */
  isValid(object) {
    throw new Error('Should be override')
  }

}
