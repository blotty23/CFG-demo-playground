const Button = ({message = "La la la"}) => {
    const clicked = () => {
        console.log("you clicked me!")
    }

    return (
        <button className="button" onClick={clicked}>
            <h2 className='button__text'> 
            {message}
            </h2>
        </button>
    )
}

export default Button