import React from 'react'

// Our hook
const useDebounce = (value, delay) => {
  // State and setters for debounce value
  const [debounceValue, setDebounceValue] = React.useState(value)

  React.useEffect(
    () => {
      // Set debounceValue to value (passed in) after the specified delay
      const handler = setTimeout(() => {
        setDebounceValue(value)
      }, delay)

      // Return a cleanup function that will be called every time ...
      // ... useEffect is re-called. useEffect will only be re-called ...
      // ... if value changes (see the inputs array below).
      // This is how we prevent debounceValue from changing if value is ...
      // ... changed within the delay period. Timeout gets cleared and restarted.
      // To put it in context, if the user is typing within our app's ...
      // ... search box, we don't want the debounceValue to update until ...
      // ... they've stopped typing for more than 500ms.
      return () => {
        clearTimeout(handler)
      }
    },
    // Only re-call effect if value changes
    // You could also add the "delay" var to inputs array if you ...
    // ... need to be able to change that dynamically.
    [value]
  )

  return debounceValue
}

export default useDebounce
