import React from 'react'
import styled from 'styled-components'

import {COLORS, SIZES} from '~/constants'

export function Comment() {
  return (
    <StyledComment>
      <header>
        <div>
          <StyledProfile>KM</StyledProfile>
          <h4>KindManatee</h4>
        </div>
        <span>1 day ago</span>
      </header>
      <p>
        Vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione volup sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam
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
