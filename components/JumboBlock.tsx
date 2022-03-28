import React from 'react'
import styled from 'styled-components'

import {COLORS, SIZES, STYLES} from '~/constants'

import {WindowControls} from './WindowControls'

interface JumboBlockProps {
  className?: string
}

export function JumboBlock({className} : JumboBlockProps) {
  return (
    <StyledJumboBlock className={className}>
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
