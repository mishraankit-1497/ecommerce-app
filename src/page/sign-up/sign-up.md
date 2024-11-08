# useState -> [state, setState]
1. Initial state
2. When form is filled then we are updating the state.
3. When signup component useState hook sets the initial state in the memoized state queue
4. ![alt text](image.png)

# useEffect -> (() => {}, [dependencies])
1. Mounting phase
    1. Runs once after the initial render
    2. If dependencies are not provided i.e second argument of useEffect as empty array [].
2. Updating phase
    1. Runs only if dependencies are changed
    2. (() => {}, [emailChanged,passwordChanged])
3. Cleanup phase (optional phase)
    1. If the useEffect() return another function, the function will act as a clean for that effect.
    2. (() => {
        return () => {
            // body for cleanup
        }
    }, [dependencies])
4. Unmounting phase
    1. When component we need to remove from ReactDOM
    2. Any cleanup from the effect runs if defined

    Component mounts
            |
    useEffect initialized
            |
    Effect runs based on dependencies
        Every render (no dependency)
        Once ([emptyArray])
        On dependency change ([specificDependencies])
          |
    Cleanup (if applicable)
        Runs before the next render or unmount
          |
    Component unmount
        Effect cleanup executes if applicable
            
