import React from 'react'
import styled, {css, Keyframes, keyframes} from 'styled-components'

import {COLORS, SIZES, STYLES} from '~/constants'

import {useAnimation} from '~/hooks'

import {Portal} from './Portal'
import {WindowControls} from './WindowControls'
import {Button} from './Button'

export interface ModalButtonProps {
  title: string,
  action: (cb: () => void) => void
}

interface ModalProps {
  title: string,
  size?: 'lg' | 'sm',
  buttons?: ModalButtonProps[],
  isStatic?: boolean,
  children: React.ReactNode,
  close: () => void
}

type AnimationKeyframes = {animation?: Keyframes}
type StyledModalProps = Pick<ModalProps, 'size'> & AnimationKeyframes

export function Modal({title, size = 'lg', buttons, isStatic, children, close} : ModalProps) {
  const OverlayAnimation = useAnimation<HTMLDivElement>(
    KeyframeFadeIn,
    KeyframeFadeOut
  )
  const ModalAnimation = useAnimation<HTMLDivElement>(
    KeyframeSlideIn,
    KeyframeSlideOut
  )
  const canClose = OverlayAnimation.completed === KeyframeFadeOut.getName()

  const onClose = React.useCallback(() => {
    OverlayAnimation.leave()

    setTimeout(ModalAnimation.leave, 100)
  }, [])  

  React.useEffect(() => {
    OverlayAnimation.enter()

    setTimeout(ModalAnimation.enter, 100)
  }, [])

  React.useEffect(() => {
    canClose && setTimeout(close, 50)
  }, [canClose, close])

  return (
    <Portal>
      <StyledOverlay
        ref={OverlayAnimation.element}
        animation={OverlayAnimation.animation}
        isStatic={isStatic}
        onClick={!isStatic ? onClose : undefined}>
      </StyledOverlay>

      <StyledModal
        size={size}
        animation={ModalAnimation.animation}>
        <header>
          <WindowControls />
          <h2>{title}</h2>
        </header>

        <main>
          {children}
        </main>

        {!!buttons?.length &&
          <section>
            {buttons.map((button) => 
              <Button
                key={button.title}
                onClick={() => button.action(onClose)}>
                {button.title}
              </Button>
            )}
          </section>
        }
      </StyledModal>
    </Portal>
  )
}

export const StyledOverlay = styled.div<
  AnimationKeyframes & Pick<ModalProps, 'isStatic'>
>`
  cursor: ${(props) => props.isStatic ? 'default' : 'pointer'};
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  ${(props) => props.animation && css`
    animation: ${props.animation} 0.3s ease-in-out forwards;
  `}
`

const StyledModal = styled.div<StyledModalProps>`
  position: fixed;
  width: ${(props) => props.size === 'sm' ? 35 : 45}vw;
  top: 50%;
  left: 50%;
  padding: ${SIZES.s_md};
  border-radius: ${SIZES.s_md};
  background-color: ${COLORS.dark_blue};
  box-shadow: ${STYLES.shadow};
  transform: translate(-50%, -50%);
  opacity: 0;
  ${(props) => props.animation && css`
    animation: ${props.animation} 0.3s ease-in-out forwards;
  `}

  header {
    display: flex;
    justify-content: center;
    position: relative;
    margin-bottom: ${SIZES.s_xl};

    & > div {
      position: absolute;
      left: 0;

      & > button {
        transition: unset;
      }
    }

    & > h2 {
      font-size: ${(props) => props.size === 'sm' ? 3.45 : 3.75}rem;
      font-weight: 700;
    }
  }

  main {
    & ~ section {
      margin-top: ${SIZES.s_xl};
    }
  }

  section {
    display: flex;
    justify-content: space-between;

    button {
      width: 20ch;

      &:only-child {
        width: 100%;
      }
    }
  }
` 

const KeyframeFadeIn = keyframes`  
  from {opacity: 0;}
  to {opacity: 1;}
`
const KeyframeFadeOut = keyframes`  
  from {opacity: 1;}
  to {opacity: 0;}
` 

const KeyframeSlideIn = keyframes`  
  from {
    opacity: 0;
    transform: translate(-50%, -45%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`
const KeyframeSlideOut = keyframes`  
  from {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
  to {
    opacity: 0;
    transform: translate(-50%, -45%);
  }
`
