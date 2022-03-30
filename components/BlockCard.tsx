import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import {COLORS, SIZES, STYLES} from '~/constants'

import {WindowControls} from './WindowControls'
import {BlockLabel} from './BlockLabel'
import {IBlockListItem} from '~/models'

dayjs.extend(relativeTime)

export function BlockCard({block} : {block : IBlockListItem}) {
  return (
    <StyledBlockCard>
      <StyledHeader>
        <WindowControls />
        <BlockLabel>
          {block.syntax[0].toUpperCase() + block.syntax.slice(1)}
        </BlockLabel>
      </StyledHeader>
      <Link href={`/blocks/${block.id}`}>
        <a>
          <h2>{block.title}</h2>
          <span>
            {dayjs(block.updated_at).fromNow()} • {block.comment_count} comments
          </span>
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
