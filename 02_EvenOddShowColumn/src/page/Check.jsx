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
        <div className=''>
            <div className='flex justify-center items-center mt-[5vh]  bg-blue-200 h-[10vh] '>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text"
                        value={(input)}
                        onChange={(e) => setInput(e.target.value)}
                        className='border-2 border-black p-2 rounded-xl '
                    />
                    <button type='submit' className='m-10 p-2 rounded-xl bg-blue-400'>
                        Submit
                    </button>
                </form>
            </div>
            <div className='flex gap-[10vh]'>
                {
                    even ?
                        < div className='row bg-green-400'>Even Column</div> : ""
                }
                {
                    Odd ?
                        < div className='row bg-red-400'>Odd Column</div> : ""

                }
                {
                    NonNumber ? <div>Not Number</div> : ""
                }

            </div>



        </div >
    )
}

export default Check