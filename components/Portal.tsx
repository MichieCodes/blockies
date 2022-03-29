import React from 'react'
import {createPortal} from 'react-dom'

interface PortalProps {
  children: React.ReactNode
}

export function Portal({children} : PortalProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  return mounted
    ? createPortal(children, document.querySelector("#modal-area")!)
    : null
}
