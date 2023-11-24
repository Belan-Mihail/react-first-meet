import React, { useState } from 'react'

function UseStateWithObjects() {
    const [name, setName] = useState({ firstName: "", lastName: "" });

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({
                        ...name,
                        firstName: e.target.value
                    })}
                />
                <input
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({
                        ...name,
                        lastName: e.target.value
                    })}
                />
                <h2>{JSON.stringify(name)}</h2>


                {/* So, remember that when updating the state based  on the previous state using the useState hook,  
rather than just passing the setter function  the new value to go in the state,  
instead you should pass it an arrow function  that takes the previous value as a parameter  
and returns the new value based on the previous. */}
                <button onClick={() => setName(name => ({...name, lastName: 'bbb'}))}>Click me</button>
                <p>{name.lastName}</p>
                {/* <p>{setName(name => ({...name, lastName: update}))}</p> */}
            </form>
        </div>
    )
}

export default UseStateWithObjects