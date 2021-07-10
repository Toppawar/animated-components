import React, { useState } from 'react'

import { CustomForm, CustomInput, CustomButton } from './SearchField.style'

const SearchField = () => {

    const [isActive, setIsActive] = useState(false)
    const [text, setText] = useState("")

    return (
        <CustomForm method="post" isActive={isActive}>
            <CustomInput type="text" isActive={isActive} value={isActive ? text : ""} onChange={(event) => setText(event.target.value)}/>
            <CustomButton type="button"onClick={() => setIsActive(!isActive)} isActive={isActive}/>
        </CustomForm>
    )
}

export default SearchField;