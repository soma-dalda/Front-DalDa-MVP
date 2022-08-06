import React from 'react'

function Title({ children }: React.PropsWithChildren) {
  return <h3>{children}</h3>
}

export default React.memo(Title)
