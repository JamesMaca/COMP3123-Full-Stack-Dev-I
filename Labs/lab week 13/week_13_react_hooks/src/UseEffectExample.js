import React, {useEffect, useState, useMemo, useCallback} from 'react'
import UseCallBackExample from './UseCallBackExample'

export default function UseEffectExample() {

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [c, setC] = useState(0)

    console.log('*** Render() called ***')

    const callUseEffect = () => {
        console.log('1 - useEffect() called everytime render() is called')
    }

    useEffect(callUseEffect)

    useEffect(() => {
        console.log('2 - useEffect() called only once')
    }, [])

    useEffect(() => {
        console.log('3 - useEffect() called when A chancges ')
    }, [a])

    useEffect(() => {
        console.log('4 - useEffect() called when B chancge ')
    }, [b])

    useEffect(() => {
        console.log('5 - useEffect() called when A or B chancge ')
    }, [a, b])

    useEffect(() => {
        console.log('6 - useEffect() called when component 6 is mounted')
        return () => {
            console.log('7 - useEffect() called when component 6 is mounted')
        }
    }, [a])

    const complexLogicFunction = () => {
        console.log('Complex logic function called')
        return a + c
    }

    const result = useMemo(complexLogicFunction, [a, c])

    const myCallBackFunction = () => {
        setA(a + 1)
        console.log("callback function called : " + a)
    }

    const myCallBackFunctionHandler = useCallback(myCallBackFunction, [a])

    return (
        <div>
            <h2>useEffect() Example</h2>
            <button onClick={() => setA(a + 1)}>Click Me - A</button>
            <br />
            <button onClick={() => setB(b + 1)}>Click Me - B</button>
            <br />
            <button onClick={() => setC(c + 0)}>Click Me - C</button>
            <br />
            <UseCallBackExample handler={myCallBackFunctionHandler} />
            <br />
            <button onClick={() => myCallBackFunctionHandler()}>update A with callback</button>
        </div>
    )
}
