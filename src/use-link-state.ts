import {useCallback, useState} from 'react'


export interface HasCTarget<T> {
  currentTarget: {
    value: T
  }
}

type StateUpdater<S> = ReturnType<typeof useState<S>>[1]
export type StateLinker<S> = (ev: HasCTarget<S>) => void

export function useLinkState<S>(initialValue: S|(() => S)): [S, StateUpdater<S>, StateLinker<S>]
export function useLinkState<S=undefined>(): [S|undefined, StateUpdater<S|undefined>, StateLinker<S>]
export function useLinkState<S>(initialValue?: S|(() => S)): [S|undefined, StateUpdater<S|undefined>, StateLinker<S>] {
  const [state, setState] = useState<S|undefined>(initialValue)
  const linkState = useCallback((ev: HasCTarget<S>) => {
    setState(ev.currentTarget.value)
  }, [])

  return [state, setState, linkState]
}
