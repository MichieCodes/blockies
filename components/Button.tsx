import React from 'react'
import styled from 'styled-components'

import {COLORS, SIZES} from '~/constants'

type ButtonProps = React.ComponentPropsWithRef<'button'>

export function Button(props: ButtonProps) {
  return (
    <StyledButton {...props} />
  )
}

const StyledButton = styled.button`
  cursor: pointer;
  padding: 1.3rem ${SIZES.s_md};
  font-family: Ubuntu, sans-serif;
  font-size: 3rem;
  font-weight: 500;
  border: 0;
  border-radius: ${SIZES.s_md};
  color: ${COLORS.text_light};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  background-image: ${COLORS.button_gradient};
  transition: opacity 0.15s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`
