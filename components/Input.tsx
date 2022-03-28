import React from 'react'
import styled from 'styled-components'

import {COLORS, SIZES} from '~/constants'

type InputProps = React.ComponentPropsWithRef<'input'> & {label: string}

export function Input({id, label, ...props} : InputProps) {
  return (
    <StyledInputGroup>
      <StyledInputLabel htmlFor={id}>
        {label}
      </StyledInputLabel>
      <StyledInputBase id={id} {...props} />
    </StyledInputGroup>
  )
}

const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${SIZES.s_sm};
`
const StyledInputLabel = styled.label`
  align-self: flex-start;
  font-size: 2.6rem;
`
const StyledInputBase = styled.input`
  padding: ${SIZES.s_sm} ${SIZES.s_md};
  font-family: Ubuntu, sans-serif;
  font-size: 2.2rem;
  border: 3px solid ${COLORS.light_blue};
  border-radius: ${SIZES.s_md};
  color: ${COLORS.text_light};
  background-color: ${COLORS.transparent_darkest_blue};
`
