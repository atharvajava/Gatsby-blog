import React from "react"

import Navigation from "./navigation"

interface Props {
  location: Location
  children?: any
}

const Layout = ({ location, children }: Props) => {
  // @ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <React.Fragment>
      <Navigation />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://atharvapandey.com">Atharva Pandey</a>
        </footer>
      </div>
    </React.Fragment>
  )
}

export default Layout
