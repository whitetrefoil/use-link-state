import {act, renderHook} from '@testing-library/react'
import {describe, expect, test} from 'vitest'
import {useLinkCheckedState, useLinkNumberState, useLinkState} from '~/use-link-state.js'


describe('useLinkState', () => {
  test('normal', () => {
    const {result} = renderHook(() => useLinkState('a'))
    expect(result.current[0]).toBe('a')

    act(() => {
      result.current[1]('bb')
    })

    expect(result.current[0]).toBe('bb')

    act(() => {
      result.current[2]({currentTarget: {value: 'ccc'}})
    })

    expect(result.current[0]).toBe('ccc')
  })

  test('empty initial value', () => {
    const {result} = renderHook(() => useLinkState())
    expect(result.current[0]).toBe('')

    act(() => {
      result.current[1]('bb')
    })

    expect(result.current[0]).toBe('bb')

    act(() => {
      result.current[2]({currentTarget: {value: 'ccc'}})
    })

    expect(result.current[0]).toBe('ccc')
  })
})

describe('useLinkNumberState', () => {
  test('normal', () => {
    const {result} = renderHook(() => useLinkNumberState(1))
    expect(result.current[0]).toBe(1)

    act(() => {
      result.current[1](2)
    })

    expect(result.current[0]).toBe(2)

    act(() => {
      result.current[2]({currentTarget: {value: '3'}})
    })

    expect(result.current[0]).toBe(3)

    act(() => {
      result.current[2]({currentTarget: {value: 'a'}})
    })

    expect(result.current[0]).toBe(0)
  })

  test('empty initial value', () => {
    const {result} = renderHook(() => useLinkNumberState())
    expect(result.current[0]).toBe(0)

    act(() => {
      result.current[1](2)
    })

    expect(result.current[0]).toBe(2)

    act(() => {
      result.current[2]({currentTarget: {value: '3'}})
    })

    expect(result.current[0]).toBe(3)

    act(() => {
      result.current[2]({currentTarget: {value: 'a'}})
    })

    expect(result.current[0]).toBe(0)
  })
})

describe('useLinkCheckedState', () => {
  test('normal', () => {
    const {result} = renderHook(() => useLinkCheckedState(true))
    expect(result.current[0]).toBe(true)

    act(() => {
      result.current[1](false)
    })

    expect(result.current[0]).toBe(false)

    act(() => {
      result.current[2]({currentTarget: {checked: true}})
    })

    expect(result.current[0]).toBe(true)
  })

  test('empty initial value', () => {
    const {result} = renderHook(() => useLinkCheckedState())
    expect(result.current[0]).toBe(false)

    act(() => {
      result.current[1](true)
    })

    expect(result.current[0]).toBe(true)

    act(() => {
      result.current[2]({currentTarget: {checked: false}})
    })

    expect(result.current[0]).toBe(false)
  })
})
