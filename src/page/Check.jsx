import React, { useState } from 'react'



const Check = () => {
    const [input, setInput] = useState()
    const [even, SetEven] = useState(false)
    const [Odd, SetOdd] = useState(false)
    const [NonNumber, SetNonNumber] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault();



        switch (input % 2 === 0) {
            case true:
                SetEven(true)
                SetOdd(false)
                SetNonNumber(false)
                break;
            case false:
                SetEven(false)
                SetOdd(true)
                SetNonNumber(false)
                break;
            default:
                // SetEven(false)
                // SetOdd(false)
                SetNonNumber(true)
        }

        if (isNaN(input)) {

            SetNonNumber(true)
            SetEven(false)
            SetOdd(false)

        } else {
            console.log("Number");

        }

        // const check = typeof (Number(input))
        // console.log(typeof (input));

        // console.log(check);

        // if (check === typeof (input)) {
        //     console.log("Alo");
        //     SetNonNumber(true)
        // }
        // else {
        //     SetNonNumber(false)
        //     console("kol")
        // }


    }

    return (
        <div className=' flex flex-col items-center justify-center bg-gray-300'>
            <div className='flex justify-center items-center mt-[5vh] w-[100vw] m-4  bg-blue-200 h-[100%] '>
                <form action="" onSubmit={handleSubmit} className=''>
                    <input type="text"
                        value={(input)}
                        onChange={(e) => setInput(e.target.value)}
                        className='border-2 border-black mt-5 p-2 rounded-xl  text-2xl '
                    />
                    <button type='submit' className='mt-5 p-2 rounded-xl text-2xl md:m-3 bg-blue-400'>
                        Submit
                    </button>
                </form>
            </div>
            <div className='flex gap-[10vh] text-1xl mt-4'>
                {
                    even ?
                        < div className='row bg-green-400 p-3 rounded-lg'>
                            <table className='m-3'>
                                <thead className='font-bold'>Even Column</thead>
                                <tr>
                                    <th className='p-4'>Company</th>
                                    <th className='p-4'>Contact</th>
                                    <th className='p-4'>Country</th>
                                </tr>
                                <tr>
                                    <td className='p-4'>Alfreds </td>
                                    <td className='p-4'>Maria Anders</td>
                                    <td className='p-4'>Germany</td>
                                </tr>
                                <tr>
                                    <td className='p-4'>Centro </td>
                                    <td className='p-4'>Francisco Chang</td>
                                    <td className='p-4'>Mexico</td>
                                </tr>
                            </table>
                        </div> : ""
                }
                {
                    Odd ?
                        < div className='row bg-blue-400 p-3 rounded-lg'>
                            <table className='m-3'>
                                <thead className='font-bold'>Odd Column</thead>
                                <tr className='p-3 '>
                                    <th className='p-4'>Company</th>
                                    <th className='p-4'>Contact</th>
                                    <th className='p-4'>Country</th>
                                </tr>
                                <tr>
                                    <td className='p-4'>Alfreds </td>
                                    <td className='p-4'>Maria Anders</td>
                                    <td className='p-4'>Germany</td>
                                </tr>
                                <tr>
                                    <td className='p-4'>Centro </td>
                                    <td className='p-4'>Francisco Chang</td>
                                    <td className='p-4'>Mexico</td>
                                </tr>
                            </table>
                        </div> : ""

                }
                {
                    NonNumber ? <div className='row bg-red-400 p-3 rounded-lg'>Not Number</div> : ""
                }

            </div>



        </div >
    )
}

export default Check