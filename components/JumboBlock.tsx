import React from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
import '@uiw/react-textarea-code-editor/dist.css'

import {COLORS, SIZES, STYLES} from '~/constants'

import {WindowControls} from './WindowControls'

interface JumboBlockProps {
  readOnly?: boolean,
  content?: string,
  syntax?: string,
  className?: string,
  onChange?: (value: string) => void
}

const CodeEditor = dynamic(
  () => import('@uiw/react-textarea-code-editor').then((mod) => mod.default),
  {ssr: false}
)

export function JumboBlock({readOnly, content, syntax = 'plain text', className, onChange} : JumboBlockProps) {
  return (
    <StyledJumboBlock className={className}>
      <WindowControls />

      <section>
        <CodeEditor
          autoFocus
          language={syntax}
          placeholder="Enter Block Text Here..."
          value={content}
          disabled={readOnly}
          padding={0}
          style={{
            position: 'absolute',
            width: '100%',
            fontFamily: 'Inconsolata, SFMono-Regular, SF Mono, Consolas, monospace',
            fontSize: '2.25rem',
            fontWeight: 500,
            letterSpacing: '0.03rem',
            backgroundColor: "transparent",
          }}
          onChange={(e : React.ChangeEvent<HTMLTextAreaElement>) =>
            onChange?.(e.target.value)
          } />
      </section>
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

  section {
    position: relative;
    margin-top: ${SIZES.s_md};
    height: calc(100% - 2 * ${SIZES.s_md});
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: ${SIZES.s_md};
    }

    &::-webkit-scrollbar-track {
      background-color: ${COLORS.transparent}; 
    }
     
    &::-webkit-scrollbar-thumb {
      border-radius: 1rem;
      background-color: ${COLORS.light_saturated_blue}; 
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: ${COLORS.light_blue}; 
    }
  }
`
