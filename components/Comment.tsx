import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import {COLORS, SIZES} from '~/constants'
import {IComment} from '~/models'

dayjs.extend(relativeTime)

export function Comment({comment} : {comment : IComment}) {
  return (
    <StyledComment>
      <header>
        <div>
          <StyledProfile>KM</StyledProfile>
          <h4>{comment.user}</h4>
        </div>
        <span>{dayjs(comment.updated_at).fromNow()}</span>
      </header>
      <p>
        {comment.content}
      </p>
    </StyledComment>
  )
}

const StyledComment = styled.div`
  padding: ${SIZES.s_md};
  border: 2px solid ${COLORS.light_blue};
  border-radius: ${SIZES.s_md};
  color: ${COLORS.text_light};
  background-color: ${COLORS.transparent_darkest_blue};

  & > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    & > div {
      display: flex;
      align-items: center;
      gap: 1rem;

      & > h4 {
        font-size: 2.4rem;
        font-weight: 400;
      }
    } 

    & > span {
      font-size: 1.8rem;
      opacity: 0.8;
    }
  }

  & > p {
    font-size: 1.8rem;
  }

  &:nth-child(3n + 1) > header > div > span {
    background-color: ${COLORS.red};
  }
  &:nth-child(3n + 2) > header > div > span {
    background-color: ${COLORS.yellow};
  }
  &:nth-child(3n + 3) > header > div > span {
    background-color: ${COLORS.green};
  }
`

const StyledProfile = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4.5rem;
  height: 4.5rem;
  font-size: 2rem;
  font-weight: 700;
  border-radius: 50%;
`
