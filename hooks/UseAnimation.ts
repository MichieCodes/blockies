import React from 'react'
import {Keyframes} from 'styled-components';

export function useAnimation<T extends HTMLElement>(
  enterAnimation : Keyframes,
  leaveAnimation ?: Keyframes
) {
  const element = React.useRef<T>(null)
  const [completed, setCompleted] = React.useState<string|undefined>()
  const [animation, setAnimation] = React.useState<Keyframes|undefined>()

  const enter = React.useCallback(() => {
    setAnimation(enterAnimation)
  }, [enterAnimation])

  const leave = React.useCallback(() => {
    setAnimation(leaveAnimation)
  }, [leaveAnimation])

  const toggle = React.useCallback(() => {
    setAnimation((currentAnimation) => 
      (!currentAnimation || currentAnimation === leaveAnimation)
        ? enterAnimation
        : leaveAnimation
    )
  }, [enterAnimation, leaveAnimation])

  React.useEffect(() => {
    if(!element.current) return

    const onAnimationEnd = (e : AnimationEvent) => {
      setCompleted(e.animationName)
    }

    element.current.addEventListener(
      'animationend',
      onAnimationEnd
    )

    return () => 
      element.current?.removeEventListener(
        'animationend',
        onAnimationEnd
      )
  }, [element.current])

  return {element, animation, completed, enter, leave, toggle}
}
