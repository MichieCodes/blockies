import React from 'react'
import styled from 'styled-components'

import {COLORS, SIZES} from '~/constants'

interface BlockLabelProps {
  children: React.ReactNode
}

export function BlockLabel({children} : BlockLabelProps) {
  return (
    <StyledBlockLabel>
      {children}
    </StyledBlockLabel>
  )
}

export const StyledBlockLabel = styled.span`
  padding: ${SIZES.s_xs} ${SIZES.s_md};
  font-size: 2rem;
  font-weight: 500;
  border-radius: ${SIZES.s_md};
  color: ${COLORS.text_light};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  background-image: ${COLORS.button_gradient}; 
`
