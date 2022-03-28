import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import styled from 'styled-components'

import {COLORS, SIZES} from '../constants'

interface MainLayoutProps {
  children: React.ReactNode
}

const _isActive = (targetPath : string) => 
  (path : string) => path === targetPath

const NAV_LINKS = [
  {
    title: 'Create',
    path: '/',
    isActive: _isActive('/')
  },
  {
    title: 'Edit',
    path: '/edit',
    isActive: _isActive('/edit')
  },
  {
    title: 'Blocks',
    path: '/blocks',
    isActive: _isActive('/blocks')
  }
]

export function MainLayout({children} : MainLayoutProps) {
  const {pathname} = useRouter();

  return (
    <StyledMainLayout>
      <StyledHeader>
        <Link href="/" passHref>
          <a><StyledSiteTitle>Blockies</StyledSiteTitle></a>
        </Link>

        <nav>
          {NAV_LINKS.map((link) => 
            <Link key={link.title} href={link.path} passHref>
              <StyledNavLink
                active={link.isActive(pathname)}>
                {link.title}
              </StyledNavLink>
            </Link>
          )}
        </nav>
      </StyledHeader>

      {children}
    </StyledMainLayout>
  )
}

const StyledMainLayout = styled.div`
  padding: ${SIZES.s_xl} 12.8rem;
  background: ${COLORS.background_gradient};
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${SIZES.s_xl};

  nav {
    display: flex;
    align-items: center;
    gap: ${SIZES.s_lg};
    font-size: 3rem;
  }
` 

const StyledSiteTitle = styled.h1`
  font-size: 5rem;
  font-weight: 700;
`

const StyledNavLink = styled.a<{active: boolean}>`
  font-weight: ${(props) => props.active ? 700 : 400};
  opacity: ${(props) => props.active ? 1 : 0.8};
  transition: opacity 0.15s ease-in-out;

  &:hover {
    opacity: 1;
  }
`
