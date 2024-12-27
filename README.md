@whitetrefoil/use-link-state
============================

A tiny helper to link useState & events.

Usage
-----

```tsx
import {useLinkCheckedState, useLinkNumberState, useLinkState} from '@whitetrefoil/use-link-state'


const MyElem = () => {
  const [val, setVal, linkVal] = useLinkState() // or `useLinkState('default value')`
  const [num, setNum, linkNum] = useLinkNumberState()  // or `useLinkNumberState(123)`
  const [checked, setChecked, linkChecked] = useLinkCheckedState()  // or `useLinkCheckedState(true)`, default is `false`

  return (
    <>
      <input type="text" value={val} onChange={linkVal}/>
      <input type="number" value={num} onChange={linkNum}/>
      <input type="checkbox" checked={checked} onChange={linkChecked}/>
    </>
  )
}
```
