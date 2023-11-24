import React, {useState} from 'react'

function UseStateWithArray() {
    const [nums, setNums] = useState([1,2,3])
    const addNums = () => {
        // To solve this problem,  
// we need to return to the spread operator and  spread the values of the current nums array  
// into the one we want to put in the  state, and then add the number 4.
        setNums([...nums, nums.length + 1])
    }

    const removeNum = () => {
        setNums(
            // метод возращает массив из всех лементов которые тру. второй аргумент это индекс
            nums.filter((item, idx) => {
                // вернуть все элементы в котрых индекс не равен длине массива -1 
                return idx !== nums.length - 1;
            })
        )
    }

//     As I click it, you can see, the nums array  is being updated, but there’s no re-render!
// React hasn’t detected any  changes as the nums array  
// is still referencing the same place in memory
    const buggyPushNums = () => {
        nums.push(nums.length + 1);
        setNums(nums);
        console.log(nums);
    }

  return (
    <div>
        <button onClick={addNums}>Add Item</button>
        <button onClick={buggyPushNums}>Add Buggy Item</button>
        <button onClick={removeNum}>remove Item</button>
        <ul>
            {nums.map(num => <li key={num}>{num}</li>)}
        </ul>
    </div>
  )
}

export default UseStateWithArray

// First, the array we pass as an argument to  the setter function, always overwrites the old one.
// If you want to add a value to the array,  spread the existing array into the one you’re  
// pushing into the state with the new value. If you  want to remove items, use the filter function.
// Second, never update the state directly or  use impure functions like push() or pop().  
// Doing so could lead to bugs and no re-renders.  
// Rather, use pure functions like map,  filter, reduce or spread operator  
// that return a copy of an existing array and  therefore are a safe way of updating the state.
