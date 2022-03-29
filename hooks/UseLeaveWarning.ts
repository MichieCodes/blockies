import React from 'react'
import {useRouter} from 'next/router'

const WARNING_TEXT = 'Are you sure you want to leave?'

export function useLeaveWarning(message : string = WARNING_TEXT, enabled : boolean = true) {
  const router = useRouter()

  React.useEffect(() => {
    if (!enabled) return

    const onClose = (e : BeforeUnloadEvent) => {
      e.preventDefault()

      return (e.returnValue = message)
    }

    const onLeave = () => {
      if(window.confirm(message)) return

      router.events.emit('routeChangeError')
      throw '[ABORT] change route'
    }

    window.addEventListener('beforeunload', onClose)
    router.events.on('routeChangeStart', onLeave)

    return () => {
      window.removeEventListener('beforeunload', onClose)
      router.events.off('routeChangeStart', onLeave)
    }
  }, [message, enabled])
}
