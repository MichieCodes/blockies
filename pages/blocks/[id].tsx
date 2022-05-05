import React, {MouseEventHandler} from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import {SIZES} from '~/constants'
import {IBlock, IComment} from '~/models'
import {fetchApi, getBaseUrl} from '~/utils'

import {
  BlockLabel,
  Button,
  Comment,
  JumboBlock,
  TextArea
} from '~/components'

dayjs.extend(relativeTime)

const BlockDetail: NextPage<{block : IBlock}> = ({block}) => {
  const [comment, setComment] = React.useState('')
  const [newComments, setNewComments] = React.useState<IComment[]>([])
  const allComments = React.useMemo(() => [
      ...(block?.comments || []), ...newComments
  ], [block?.comments, newComments])

  const onSubmit : MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault()

    const commentData = {
      block_id: block.id,
      user: 'KoolMongoose',
      content: comment
    }

    const data : IComment = await fetchApi(
      '/api/comments',
      'POST',
      commentData
    )

    if(!data) {
      alert('[ERROR] Could not submit comment. Please try again')
      return
    }

    setNewComments((currentNewComments) => 
      [...currentNewComments, data]
    )
    setComment('')
  }                                            

  return (
    <div>
      <Head>
        <title>Blockies - {block?.title || 'View'}</title>
        <meta
          name="description"
          content="Blockies - Share your blocks of text and code!" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <StyledMain>
        <header>
          <div>
            <h2>{block?.title}</h2>
            <BlockLabel>{block.syntax[0].toUpperCase() + block.syntax.slice(1)}</BlockLabel>
          </div>
          <span>Updated {dayjs(block.updated_at)?.fromNow()}</span>
        </header>
        <StyledJumboBlock
          readOnly
          syntax="javascript"
          content={block?.content[0]} />
        <form>
          <TextArea
            id="comment"
            label="Leave a Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)} />
          <Button onClick={onSubmit}>Sumbit</Button>
        </form>
        <StyledCommentSection>
          {allComments.map((comment) => 
            <Comment key={comment.id} comment={comment} />
          )}
        </StyledCommentSection>
      </StyledMain>
    </div>
  )
}

export const getServerSideProps : GetServerSideProps = async ({params, req}) => {
  const block = await fetch(`${getBaseUrl(req)}/api/blocks/${params!.id}`)
    .then((data) => data.json()).catch(() => null)

  if(!block) { 
    return {
      redirect: {
        permanent: false,
        destination: "/404"
      },
      props:{}
    }
  }

  return {
    props: {
      block
    }
  }
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
