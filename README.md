# Convert functional component to class-base one

1. useState => constructor to build state object
2. useEffect => component life cycle
   - useEffect with dependency [] => componentDidMount
   - useEffect with dependency [some variable] => componentDidUpdate
   - useEffect with return => componentWillUnmount
3. useContext => static contextType = {ContextObject}, one class-base component can only link to one context.
4. ErrorBoundary can only be used with class-base component, because it need "componentDidCatch" or "getDerivedStateFromError".
