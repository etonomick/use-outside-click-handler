# useOutsideClickHandler

Simple React hook to listen for outside clicks that I made mostly for my side Next.js projects.

## Usage

Installation
```
npm install use-outside-click-handler
```

Example
```js
const { useRef } = require('react')
const outsideClick = require('react-use-outside-click-handler')

export default function Index() {
    
    const ref = useRef()

    outsideClick(ref, () => {
        alert('Click outside div')
    })

    return (
        <div ref={ref} onClick={() => alert('Click inside div')}>Click</div>
    )

}

```