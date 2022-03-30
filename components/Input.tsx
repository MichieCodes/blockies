import React from 'react'
import styled from 'styled-components'

import {COLORS, SIZES} from '~/constants'

export interface DropdownOption {
  title: string,
  value: string
}

type InputProps<T extends React.ElementType> =
  React.ComponentPropsWithRef<T> & {label: string}
type DropdownProps = InputProps<'select'> & {options: DropdownOption[]}

export function Input({id, label, ...props} : InputProps<'input'>) {
  return (
    <StyledInputGroup>
      <StyledInputLabel htmlFor={id}>
        {label}
      </StyledInputLabel>
      <StyledInput id={id} {...props} />
    </StyledInputGroup>
  )
}

export function TextArea({id, label, ...props} : InputProps<'textarea'>) {
  return (
    <StyledInputGroup>
      <StyledInputLabel htmlFor={id}>
        {label}
      </StyledInputLabel>
      <StyledTextArea as="textarea" id={id} {...props} />
    </StyledInputGroup>
  )
}

export function Dropdown({id, label, options, ...props} : DropdownProps) {
  return (
    <StyledSelectGroup>
      <StyledInputLabel htmlFor={id}>
        {label}
      </StyledInputLabel>
      <StyledSelect as="select" {...props}>
        {options.map((option) => 
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        )}
      </StyledSelect>
    </StyledSelectGroup>
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
const StyledInput = styled.input`
  padding: 1.25rem 1.875rem;
  font-family: Ubuntu, sans-serif;
  font-size: 2.2rem;
  border: 3px solid ${COLORS.light_blue};
  border-radius: ${SIZES.s_md};
  color: ${COLORS.text_light};
  background-color: ${COLORS.transparent_darkest_blue};
`

const StyledTextArea = styled(StyledInput)`
  resize: vertical;
`

const StyledSelectGroup = styled(StyledInputGroup)`
  position: relative;

  &::after {
    content: '🞃';
    position: absolute;
    right: 2rem;
    bottom: 1.55rem;
    font-size: 2.6rem;
    color: ${COLORS.light_saturated_blue};
  }
`
const StyledSelect = styled(StyledInput)`
  appearance: none;
`
