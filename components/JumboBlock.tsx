import React from 'react'
import styled from 'styled-components'

import {COLORS, SIZES, STYLES} from '~/constants'

import {WindowControls} from './WindowControls'

export function JumboBlock() {
  return (
    <StyledJumboBlock>
      <WindowControls />
    </StyledJumboBlock>
  )
}

const StyledJumboBlock = styled.div`
  flex: 1;
  width: 100%;
  padding: ${SIZES.s_md};
  border-radius: ${SIZES.s_md};
  background-color: ${COLORS.darkest_blue};
  box-shadow: ${STYLES.shadow};
`
