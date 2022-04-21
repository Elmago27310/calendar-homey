'use strict'

const moment = require('../lib/moment-datetime')

const hasOffset = num => num > 0 || num < 0

describe('Offset not set', () => {
  test('When nothing is present', () => {
    const result = moment()
    expect(hasOffset(result.utcOffset())).toBeFalsy()
  })

  test('When only a date is present', () => {
    const result = moment({ date: new Date() })
    expect(hasOffset(result.utcOffset())).toBeFalsy()
  })

  test('When only a ISO-string is present', () => {
    const result = moment({ date: new Date().toISOString() })
    expect(hasOffset(result.utcOffset())).toBeFalsy()
  })

  test('When an epoch and a format is present', () => {
    const result = moment({ date: new Date().getTime(), format: 'x' })
    expect(hasOffset(result.utcOffset())).toBeFalsy()
  })
})

describe('Offset set', () => {
  test('When only timezone present', () => {
    const result = moment({ timezone: 'Europe/Oslo' })
    expect(hasOffset(result.utcOffset())).toBeTruthy()
  })

  test('When timezone and date is present', () => {
    const result = moment({ timezone: 'Europe/Oslo', date: new Date() })
    expect(hasOffset(result.utcOffset())).toBeTruthy()
  })

  test('When timezone and an ISO-string is present', () => {
    const result = moment({ timezone: 'Europe/Oslo', date: new Date().toISOString() })
    expect(hasOffset(result.utcOffset())).toBeTruthy()
  })

  test('When timezone, an epoch and a format is present', () => {
    const result = moment({ timezone: 'Europe/Oslo', date: new Date().getTime(), format: 'x' })
    expect(hasOffset(result.utcOffset())).toBeTruthy()
  })
})
