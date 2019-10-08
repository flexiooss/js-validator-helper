/* global runTest */
import {TestCase} from 'code-altimeter-js'
import {NumberValidator} from '../js/Validator/NumberValidator'
import '@flexio-oss/extended-flex-types'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'

const assert = require('assert')

export class NumberValidatorTest extends TestCase {
  setUp() {
    this.validator = new NumberValidator()
  }

  testValidateNotNull() {

    assert.ok(this.validator.validateNotNull(0))
    assert.ok(this.validator.validateNotNull(-5))
    assert.ok(this.validator.validateNotNull(null) === false)
    assert.ok(this.validator.validateNotNull('') === false)
    assert.ok(this.validator.validateNotNull('5') === false)
  }

  testValidateNotEmpty() {

    assert.ok(this.validator.validateNotNull(0))
    assert.ok(this.validator.validateNotNull(-5))
    assert.ok(this.validator.validateNotNull(null) === false)
    assert.ok(this.validator.validateNotNull('') === false)
    assert.ok(this.validator.validateNotNull('5') === false)
  }

  testValidateInRange() {

    assert.ok(this.validator.validateInRange(2, 1, 3))
    assert.ok(this.validator.validateInRange(0, -1, 1))
    assert.ok(this.validator.validateInRange(0, 0, 1))
    assert.ok(this.validator.validateInRange(0, 1, 2) === false)
    assert.ok(this.validator.validateInRange('bibi', 1, 3) === false)
    assert.ok(this.validator.validateInRange(null) === false)
    assert.ok(this.validator.validateInRange(null, 2, 4) === false)
    assert.ok(this.validator.validateInRange({}, 0, 4) === false)
    assert.ok(this.validator.validateInRange(5, 'a', 'b') === false)

  }

  testValidateInEnumerated() {

    assert.ok(this.validator.validateInEnumerated(
      4,
      new globalFlexioImport.io.flexio.extended_flex_types
        .NumberArrayBuilder()
        .values([1, 4])
        .build()
      ), '1'
    )

    assert.ok(this.validator.validateInEnumerated(
      2,
      new globalFlexioImport.io.flexio.extended_flex_types
        .NumberArrayBuilder()
        .values([2])
        .build()
      ),
      '2.a'
    )

    assert.ok(this.validator.validateInEnumerated(
      0,
      new globalFlexioImport.io.flexio.extended_flex_types
        .NumberArrayBuilder()
        .values([0])
        .build()
      ),
      '2.b'
    )

    assert.ok(
      this.validator.validateInEnumerated(
        0,
        new globalFlexioImport.io.flexio.extended_flex_types
          .NumberArrayBuilder()
          .values([1, 2])
          .build()
      ) === false,
      '3'
    )

    assert.ok(
      this.validator.validateInEnumerated(
        2,
        new globalFlexioImport.io.flexio.extended_flex_types
          .NumberArrayBuilder()
          .build()
      ) === false,
      '4'
    )

    assert.ok(
      this.validator.validateInEnumerated(
        '',
        new globalFlexioImport.io.flexio.extended_flex_types
          .NumberArrayBuilder()
          .build()
      ) === false,
      '5'
    )

    assert.ok(
      this.validator.validateInEnumerated(
        null,
        new globalFlexioImport.io.flexio.extended_flex_types
          .NumberArrayBuilder()
          .build()
      ) === false,
      '6'
    )

  }

  testValidateRegex() {
    assert.throws(() => {
        this.validator.validateRegex('toto', '')
      }
    )

  }
}

runTest(NumberValidatorTest)
