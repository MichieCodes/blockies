import React from 'react'
import styled from 'styled-components'

import {COLORS, SIZES} from '~/constants'
import {StyledBlockLabel} from './BlockLabel'

export function ModeSwitch() {
  return (
    <StyledModeSwitch>
      <h3>Mode:</h3>
      <span>
        <input
          id="normal"
          type="radio"
          value="normal"
          name="mode" />
        <StyledBlockLabel as="label" htmlFor="normal">Normal</StyledBlockLabel>
      </span>
      <span>
        <input
          id="diff"
          type="radio"
          value="diff"
          name="mode"
          defaultChecked={true} />
        <StyledBlockLabel as="label" htmlFor="diff">Diff</StyledBlockLabel>
      </span>
    </StyledModeSwitch>
  )
}

const StyledModeSwitch = styled.div`
  display: flex;
  gap: ${SIZES.s_sm};
  align-self: center;
  align-items: center;
  margin: ${SIZES.s_md} 0;

  h3 {
    font-size: 2.8rem;
    font-weight: 400;
  }
  
  span {
    display: flex;
    width: 11.5rem;
    text-align: center;

    & > label {
      width: 100%;
      opacity: 0.6;
      transition: opacity 0.15s ease-in-out;
    }
  }

  input {
    appearance: none;
    width: 0;
    height: 0;

    &:checked ~ label {
      opacity: 1;
    }
  }

  & ~ form {
    margin-top: 0;
  }
`

