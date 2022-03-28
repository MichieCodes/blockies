import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

import {COLORS, SIZES, STYLES} from '~/constants'

import {WindowControls} from './WindowControls'
import {BlockLabel} from './BlockLabel'

export function BlockCard() {
  return (
    <StyledBlockCard>
      <StyledHeader>
        <WindowControls />
        <BlockLabel>
          Plain Text
        </BlockLabel>
      </StyledHeader>
      <Link href="/blocks/block-id">
        <a>
          <h2>Untitled Block</h2>
          <span>1 day ago • 3 comments</span>
        </a>
      </Link>
    </StyledBlockCard>
  )
}

const StyledBlockCard = styled.article`
  width: 100%;
  padding: ${SIZES.s_md};
  border-radius: ${SIZES.s_md};
  background-color: ${COLORS.darkest_blue};
  box-shadow: ${STYLES.shadow};

  & > a {
    display: flex;
    flex-direction: column;

    & > h2 {
      cursor: pointer;
      margin: 1rem 0;
      font-size: 3rem;
      font-weight: 700;
      transition: opacity 0.15s ease-in-out;

      &:hover {
        opacity: 0.8;
      }
    }

    & > span {
      font-size: 2.2rem;
      font-weight: 400;
      opacity: 0.8;
    }
  }
`
 
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
