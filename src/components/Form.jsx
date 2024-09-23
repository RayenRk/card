
import { useState } from "react"

const Form = () => {

    // const titleImp = useRef()
    // const yearImp = useRef()

    // const [data, setData] = useState(null)

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const title = titleImp.current.value
    //     const year = yearImp.current.value

    //     setData({ titleImp: title, yearImp: year })

    //     titleImp.current.value = ""
    //     yearImp.current.value = ""

    // }

    // return (
    //     <div>
    //         <form onSubmit={handleSubmit}>
    //             <div>
    //                 <label>Title</label>
    //                 <input type="text" ref={titleImp} />
    //             </div>

    //             <div>
    //                 <label>Year</label>
    //                 <input type="text" ref={yearImp} />
    //             </div>
    //             <button type='submit'>Click me</button>
    //         </form>

    //         {!data ? <h3>No Data ...</h3> : <div>
    //             {data.titleImp}<br />
    //             {data.yearImp}
    //         </div>}
    //     </div>
    // )

    const [titleImp, setTitleImp] = useState("")
    const [yearImp, setYearImp] = useState("")
  
    const handleSubmit = (e) => {
      e.preventDefault()
  
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input type="text" value={titleImp} onChange={e => setTitleImp(e.target.value)} />
          </div>
  
          <div>
            <label>Year</label>
            <input type="text" value={yearImp} onChange={e => setYearImp(e.target.value)} />
          </div>
          <button type='submit'>Click me</button>
        </form>
  
        {(!titleImp.length === 0 && yearImp.length === 0) ? <h3>No Data ...</h3> : <div>
          {titleImp}<br />
          {yearImp}
        </div>}
      </div>
    )


}

export default Form