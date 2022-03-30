import type { GetServerSideProps, NextPage } from 'next'
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
import {IBlock} from '~/models'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const BLOCK_TEXT = `Libero nunc consequat interdum varius sit amet mattis. Quisque id diam vel quam elementum pulvinar etiam non. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Turpis egestas integer eget aliquet nibh praesent tristique magna. Id velit ut tortor pretium. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Et ligula ullamcorper malesuada proin libero nunc consequat. Justo nec ultrices dui sapien eget mi proin.

Et malesuada fames ac turpis. Lorem mollis aliquam ut porttitor. Ac auctor augue mauris augue neque. Vel risus commodo viverra maecenas accumsan lacus. Mauris nunc congue nisi vitae suscipit tellus mauris a. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. In pellentesque massa placerat duis ultricies lacus sed.

Tincidunt id aliquet risus feugiat in ante metus dictum at. Duis convallis convallis tellus id interdum velit laoreet. Urna nunc id cursus metus. Consequat mauris nunc congue nisi vitae. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Turpis egestas pretium aenean pharetra.

Molestie at elementum eu facilisis sed odio. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Volutpat consequat mauris nunc congue nisi vitae suscipit. Cursus metus aliquam eleifend mi in nulla posuere. Nisl vel pretium lectus quam id. At consectetur lorem donec massa sapien faucibus. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Metus dictum at tempor commodo. Turpis egestas integer eget aliquet.`

const BlockDetail: NextPage<{block : IBlock}> = ({block}) => {
  console.log(block)
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
        {/* <ModeSwitch /> */}
        <form>
          <TextArea id="comment" label="Leave a Comment" />
          <Button>Sumbit</Button>
        </form>
        <StyledCommentSection>
          {block?.comments?.map((comment) => 
            <Comment key={comment.id} comment={comment} />
          )}
        </StyledCommentSection>
      </StyledMain>
    </div>
  )
}

export const getServerSideProps : GetServerSideProps = async ({params, req}) => {
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
  const block = await fetch(`${baseUrl}/api/blocks/${params!.id}`)
    .then((data) => data.json()).catch(() => null)

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
