import { useState } from "react";


const ButtonWithState = () => {

const [counter, setCounter] = useState(0)

const onClickHandler = () => {
    console.log("IM BEING CALLED")
    setCounter((oldValueOfState) => oldValueOfState + 1)
    
}

return (
    <>
        <button onClick={onClickHandler}>
             {"The counter value is now " + counter}
        </button>
    </>
)

}

export default ButtonWithState