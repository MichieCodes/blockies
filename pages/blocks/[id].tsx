import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import {SIZES} from '~/constants'

import {
  BlockLabel,
  Button,
  Comment,
  JumboBlock,
  ModeSwitch,
  TextArea
} from '~/components'

const BlockDetail: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blockies - Untitled Block</title>
        <meta
          name="description"
          content="Blockies - Share your blocks of text and code!" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <StyledMain>
        <header>
          <div>
            <h2>Untitled Block</h2>
            <BlockLabel>Plain Text</BlockLabel>
          </div>
          <span>Updated 1 day ago</span>
        </header>
        <StyledJumboBlock />
        {/* <ModeSwitch /> */}
        <form>
          <TextArea id="comment" label="Leave a Comment" />
          <Button>Sumbit</Button>
        </form>
        <StyledCommentSection>
          <Comment />
          <Comment />
          <Comment />
        </StyledCommentSection>
      </StyledMain>
    </div>
  )
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;

  & > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${SIZES.s_xl};

    & > div {
      display: flex;
      align-items: center;
      gap: 2.6rem;

      h2 {
        font-size: 4rem;
        font-weight: 500;
      }
    }

    & > span {
      opacity: 0.8;
      font-size: 2.4rem;
    }
  }

  & > button {
    width: 100%;
  }

  & > form {
    display: flex;
    flex-direction: column;
    gap: ${SIZES.s_md};
    margin: ${SIZES.s_xl} 0;
  }
`

const StyledJumboBlock = styled(JumboBlock)`
  flex: unset;
  height: 45vh;
`

const StyledCommentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${SIZES.s_md};
`

export default BlockDetail
