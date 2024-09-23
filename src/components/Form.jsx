import React, { useRef, useState } from 'react'

function Form() {

    const titleImp = useRef()
    const yearImp = useRef()

    const [data, setData] = useState(null)

    const handleSubmit () =>{
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" ref={titleImp} />
                </div>

                <div>
                    <label>Year</label>
                    <input type="text" ref={yearImp} />
                </div>
                <button type='submit'>Click me</button>
            </form>
        </div>
    )
}

export default Form