


import React, { useState } from 'react'

const Check = () => {

    const [input, setInput] = useState()

    const [odd, setOdd] = useState(true)
    const [even, setEven] = useState(true)
    const [nonNumber, setNonNumber] = useState(true)


    const [evenValue, setEvenValue] = useState([])
    const [oddValue, setOddValue] = useState([])
    const [naNValue, setNanValue] = useState([])

    const num = Number(input)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isNaN(num)) {
            setNonNumber(true)
            // setEven(false)
            // setOdd(false)

            setNanValue([
                ...naNValue, {
                    input
                }
            ])

        }
        else if (num % 2 === 0) {
            setEven(true)
            // setOdd(false)
            // setNonNumber(false)

            setEvenValue([
                ...evenValue, {
                    input
                }
            ])
        } else {
            setOdd(true)
            // setEven(false)
            // setNonNumber(false)

            setOddValue([
                ...oddValue, {
                    input
                }
            ])
        }
        setInput("")
        // setEven(true)
        // setOdd(true)
        // setNonNumber(true)

    }
    const handleShow = () => {
        if (input === "") {
            setEven(true)
            setOdd(true)
            setNonNumber(true)
        }
        return
    }


    return (
        <div className=' flex flex-col justify-center items-center'>
            <div className='  mt-10'>
                <form action="" onSubmit={handleSubmit}
                    className=' '
                >
                    <input type="text"
                        className='p-3 text-3xl border-2 border-black rounded-lg'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type='submit ' className='bg-green-400 m-3 text-2xl p-4 rounded-lg'>
                        Submit
                    </button>


                </form>
            </div>
            <div className='flex gap-5 '>
                {
                    even ? (
                        <div className='bg-blue-300 rounded-lg p-3'>
                            <h3 className='font-bold'>Even Column Data</h3>
                            {
                                evenValue.map((item, index) => (
                                    <h3 className='text-2xl text-center' key={index}>{item.input}</h3>
                                ))
                            }
                        </div>
                    ) : ""
                }
                {
                    odd ? (
                        <div className='bg-blue-300 rounded-lg p-3'>
                            <h3 className='font-bold'>Odd Column Data</h3>
                            {
                                oddValue.map((item, index) => (
                                    <h3 className='text-2xl text-center' key={index}>{item.input}</h3>
                                ))
                            }
                        </div>
                    ) : ""
                }
                {
                    nonNumber ? (
                        <div className='bg-blue-300 rounded-lg p-3'>
                            <h3 className='font-bold'>Not Number Column Data</h3>
                            {
                                naNValue.map((item, index) => (
                                    <h3 className='text-2xl text-center' key={index}>{item.input}</h3>
                                ))
                            }
                        </div>
                    ) : ""
                }
            </div>
        </div>
    )
}

export default Check