/* global runTest */
import {TestCase} from 'code-altimeter-js'
import {StringValidator} from '../js/Validator/StringValidator'
import '@flexio-oss/extended-flex-types'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'

const assert = require('assert')

export class StringValidatorTest extends TestCase {
  setUp() {
    this.validator = new StringValidator()
  }

  testValidateNotNull() {

    assert.ok(this.validator.validateNotNull(''))
    assert.ok(this.validator.validateNotNull('toto'))
    assert.ok(this.validator.validateNotNull(null) === false)
    assert.ok(this.validator.validateNotNull({}) === false)
    assert.ok(this.validator.validateNotNull(5) === false)
  }

  testValidateNotEmpty() {

    assert.ok(this.validator.validateNotEmpty('toto'))
    assert.ok(this.validator.validateNotEmpty('') === false)
    assert.ok(this.validator.validateNotEmpty(null) === false)
    assert.ok(this.validator.validateNotEmpty({}) === false)
    assert.ok(this.validator.validateNotEmpty(5) === false)
  }

  testValidateInRange() {

    assert.ok(this.validator.validateInRange('b', 'a', 'b'))
    assert.ok(this.validator.validateInRange('coucou', 'bibi', 'dudu'))
    assert.ok(this.validator.validateInRange('a', 'b', 'c') === false)
    assert.ok(this.validator.validateInRange('bibi', 'coucou', 'dudu') === false)
    assert.ok(this.validator.validateInRange(null) === false)
    assert.ok(this.validator.validateInRange(null, 'a', 'b') === false)
    assert.ok(this.validator.validateInRange({}, 'a', 'b') === false)
    assert.ok(this.validator.validateInRange(5, 'a', 'b') === false)
  }

  testValidateInEnumerated() {

    assert.ok(this.validator.validateInEnumerated(
      'toto',
      new globalFlexioImport.io.flexio.extended_flex_types
        .StringArrayBuilder()
        .values(['toto', 'tutu'])
        .build()
      )
    )

    assert.ok(
      this.validator.validateInEnumerated(
        'titi',
        new globalFlexioImport.io.flexio.extended_flex_types
          .StringArrayBuilder()
          .values(['toto', 'tutu'])
          .build()
      ) === false
    )

    assert.ok(
      this.validator.validateInEnumerated(
        'titi',
        new globalFlexioImport.io.flexio.extended_flex_types
          .StringArrayBuilder()
          .build()
      ) === false
    )

    assert.ok(
      this.validator.validateInEnumerated(
        '',
        new globalFlexioImport.io.flexio.extended_flex_types
          .StringArrayBuilder()
          .build()
      ) === false
    )

    assert.ok(
      this.validator.validateInEnumerated(
        null,
        new globalFlexioImport.io.flexio.extended_flex_types
          .StringArrayBuilder()
          .build()
      ) === false
    )

  }

  testValidateRegex() {
    assert(
      this.validator.validateRegex('toto', 'o')
    )

    assert(
      this.validator.validateRegex('https://ui.toto.fr/', '/$')
    )

    assert(
      this.validator.validateRegex('', '')
    )
    assert(
      this.validator.validateRegex(' ', '')
    )
    assert(
      this.validator.validateRegex('', ' ') === false
    )

    assert(
      this.validator.validateRegex('https://ui.toto.fr/', '^$') === false
    )

    assert(
      this.validator.validateRegex('toto', 'a') === false
    )

    assert(
      this.validator.validateRegex(null, '') === false
    )

  }
}

runTest(StringValidatorTest)
