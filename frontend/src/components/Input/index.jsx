import React from 'react'
import { ItemContainer, InputContainer, InputText} from './styles'
const Input = ({lefticon, name, ...rest}) => {
  return (
    <InputContainer>
        {lefticon ? (<ItemContainer>{lefticon}</ItemContainer>) : null}
        <InputText {...rest} />
    </InputContainer>
  )
}

export { Input }