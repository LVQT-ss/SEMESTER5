// import React, { Component } from 'react'

// export default class Count extends Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//     }
//     render() {
//         return (
//             <div>
//                 CountClassCom
//                 <p>Count:{this.state.count} </p>
//                 <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Click</button>
//             </div>
//         )
//     }
// }
import React, { useState } from 'react'

export default function Count() {
    const [count, setCount] = useState(0)
    return (
        <div> count function com
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}
