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
        <div className=' flex flex-col items-center justify-center'>
            <div className='flex justify-center items-center mt-[5vh] w-[70vw]  bg-blue-200 h-[10vh] '>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text"
                        value={(input)}
                        onChange={(e) => setInput(e.target.value)}
                        className='border-2 border-black p-2 rounded-xl p-3 text-2xl '
                    />
                    <button type='submit' className='m-10 p-3 rounded-xl bg-blue-400'>
                        Submit
                    </button>
                </form>
            </div>
            <div className='flex gap-[10vh] text-3xl mt-4'>
                {
                    even ?
                        < div className='row bg-green-400 p-3 rounded-lg'>
                            <table>
                                <thead>Even Column</thead>

                            </table>
                        </div> : ""
                }
                {
                    Odd ?
                        < div className='row bg-blue-400 p-3 rounded-lg'><table>
                            <thead>Odd Column</thead>
                        </table></div> : ""

                }
                {
                    NonNumber ? <div className='row bg-red-400 p-3 rounded-lg'>Not Number</div> : ""
                }

            </div>



        </div >
    )
}

export default Check