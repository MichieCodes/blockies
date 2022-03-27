import React from 'react'
import styled from 'styled-components'

import {COLORS, SIZES} from '~/constants'

interface StyledDotProps {
  color: 'red' | 'yellow' | 'green'
}

export function WindowControls() {
  return (
    <StyledWindowControls>
      <StyledDot color="red" />
      <StyledDot color="yellow" />
      <StyledDot color="green" />
    </StyledWindowControls>
  )
}

const StyledWindowControls = styled.div`
  display: flex;
  gap: ${SIZES.s_md};
`

const StyledDot = styled.button<StyledDotProps>`
  cursor: pointer;
  width: 1.6rem;
  height: 1.6rem;
  border: 0;
  border-radius: 50%;
  background-color: ${(props) => COLORS[props.color]};
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`
