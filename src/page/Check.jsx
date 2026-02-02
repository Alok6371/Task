// import React, { useState } from 'react'

// const Check = () => {
//     const [input, setInput] = useState("")
//     const [even, SetEven] = useState(false)
//     const [Odd, SetOdd] = useState(false)
//     const [NonNumber, SetNonNumber] = useState(false)

//     const [evenColumnValue, setevenColumnValue] = useState([])
//     const [OddColumnValue, setOddColumnValue] = useState([])
//     const [nonNumberValue, setNonNumberValue] = useState([])

//     const handleSubmit = (e) => {
//         e.preventDefault()

//         const num = Number(input)

//         if (isNaN(num)) {
//             SetNonNumber(true)
//             SetEven(false)
//             SetOdd(false)

//             setNonNumberValue([
//                 ...nonNumberValue,
//                 { id: Date.now(), input }
//             ])
//         }
//         else if (num % 2 === 0) {
//             SetEven(true)
//             SetOdd(false)
//             SetNonNumber(false)

//             setevenColumnValue([
//                 ...evenColumnValue,
//                 { id: Date.now(), input: num }
//             ])
//         }
//         else {
//             SetEven(false)
//             SetOdd(true)
//             SetNonNumber(false)

//             setOddColumnValue([
//                 ...OddColumnValue,
//                 { id: Date.now(), input: num }
//             ])
//         }

//         setInput("")
//     }

//     return (
//         <div className='flex flex-col items-center justify-center bg-gray-300'>
//             <form onSubmit={handleSubmit} className='m-3'>
//                 <input
//                     type="text"
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     className='border-2 border-black mt-5 p-2 rounded-xl text-2xl'
//                 />
//                 <button type='submit' className='mt-5 p-2 rounded-xl text-2xl md:m-3 bg-blue-400'>
//                     Submit
//                 </button>
//             </form>

//             <div className='flex gap-10 mt-4'>

//                 {even ? (
//                     <div className='bg-green-400 p-3 rounded-lg'>
//                         <h3>Even</h3>
//                         {evenColumnValue.map((item) => (
//                             <h3 key={item.id}>{item.input}</h3>
//                         ))}
//                     </div>
//                 ) : ""}

//                 {Odd ? (
//                     <div className='bg-blue-400 p-3 rounded-lg'>
//                         <h3>Odd</h3>
//                         {OddColumnValue.map((item) => (
//                             <h3 key={item.id}>{item.input}</h3>
//                         ))}
//                     </div>
//                 ) : ""}

//                 {NonNumber && (
//                     <div className='bg-red-400 p-3 rounded-lg'>
//                         <h3>Non Number</h3>
//                         {nonNumberValue.map((item) => (
//                             <h3 key={item.id}>{item.input}</h3>
//                         ))}
//                     </div>
//                 )}

//             </div>
//         </div>
//     )
// }

// export default Check


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
            setEven(false)
            setOdd(false)

            setNanValue([
                ...naNValue, {
                    input
                }
            ])

        }
        else if (num % 2 === 0) {
            setEven(true)
            setOdd(false)
            setNonNumber(false)

            setEvenValue([
                ...evenValue, {
                    input
                }
            ])
        } else {
            setEven(false)
            setOdd(true)
            setNonNumber(false)

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

        if (input === "") {
            setEven(true)
            setOdd(true)
            setNonNumber(true)
        }
    }


    return (
        <div className=' flex flex-col justify-center items-center'>
            <div className='  mt-10'>
                <form action="" onSubmit={handleSubmit}
                    className=' '
                >
                    <h1>If want to Show all data then Click only Submit</h1>
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
            <div className='flex gap-5'>
                {
                    even ? (
                        <div>
                            <h3 className='font-bold'>Even Column Data</h3>
                            {
                                evenValue.map((item, index) => (
                                    <h3 key={index}>{item.input}</h3>
                                ))
                            }
                        </div>
                    ) : ""
                }
                {
                    odd ? (
                        <div>
                            <h3 className='font-bold'>Odd Column Data</h3>
                            {
                                oddValue.map((item, index) => (
                                    <h3 key={index}>{item.input}</h3>
                                ))
                            }
                        </div>
                    ) : ""
                }
                {
                    nonNumber ? (
                        <div>
                            <h3 className='font-bold'>Not Number Column Data</h3>
                            {
                                naNValue.map((item, index) => (
                                    <h3 key={index}>{item.input}</h3>
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