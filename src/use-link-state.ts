import {type Dispatch, type SetStateAction, useCallback, useState} from 'react'


export interface ValueTarget {
  currentTarget: {
    value: string
  }
}

export interface CheckedTarget {
  currentTarget: {
    checked: boolean
  }
}

type StateUpdater<S> = Dispatch<SetStateAction<S>>
type HookReturn<S, T> = [S, StateUpdater<S>, (ev: T) => void]


export function useLinkState(initialValue: string|(() => string) = ''): HookReturn<string, ValueTarget> {

  const [state, setState] = useState<string>(initialValue)

  const linkState = useCallback((ev: ValueTarget) => {
    setState(ev.currentTarget.value)
  }, [])

  return [state, setState, linkState]
}


export function useLinkNumberState(initialValue: number|(() => number) = 0): HookReturn<number, ValueTarget> {

  const [state, setState] = useState<number>(initialValue)

  const linkState = useCallback((ev: ValueTarget) => {
    const numberValue = Number(ev.currentTarget.value)
    setState(Number.isNaN(numberValue) ? 0 : numberValue)
  }, [])

  return [state, setState, linkState]
}


export function useLinkCheckedState(initialValue: boolean|(() => boolean) = false): HookReturn<boolean, CheckedTarget> {

  const [state, setState] = useState<boolean>(initialValue)

  const linkState = useCallback((ev: CheckedTarget) => {
    setState(ev.currentTarget.checked)
  }, [])

  return [state, setState, linkState]
}
