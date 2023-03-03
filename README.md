@whitetrefoil/use-link-state
============================

A tiny helper to link useState & events.

Usage
-----

```tsx
import {useLinkState} from '@whitetrefoil/use-link-state'


const MyElem = () => {
  const [val, setVal, linkVal] = useLinkState('')
  return (
    <input type="text" value={val} onChange={linkVal}/>
  )
}
```
