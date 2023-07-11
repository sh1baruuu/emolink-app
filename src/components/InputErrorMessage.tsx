import React from "react"

const InputErrorMessage: React.FC<{message:string}> = ({message}) =>{


    return (
        <>
            { message && (
                <p className="errorMessage">
                    {/* <FontAwesomeIcon className="errorIcon" icon={errorIcon} size='lg' shake /> */}
                    {message}
                </p>
            )}
        </>
    )
}

export default InputErrorMessage