import {expect, jest, test} from '@jest/globals'
import {act, renderHook} from '@testing-library/react'
import {useLinkState} from '~/use-link-state.js'


jest.resetModules()

test('useLinkState', () => {
  const {result} = renderHook(() => useLinkState(0))
  expect(result.current[0]).toBe(0)

  act(() => {
    result.current[1](22)
  })

  expect(result.current[0]).toBe(22)

  act(() => {
    result.current[2]({currentTarget: {value: 33}})
  })

  expect(result.current[0]).toBe(33)
})
