import React, { useEffect, useState } from 'react'
import {
  ContainerWrapper,
  HeaderWrapper,
  LeftSideBar,
  FooterWrapper,
  ContentWrapper,
  CenterWrapper,
  Breadcrumb,
  LanguageChoice
} from './styled'
import PropTypes from 'prop-types'
import { SideBar } from 'organisms'
import i18next from 'i18next'
import { Constant } from 'utils'

const PrivateTemplate = ({ menuList, children, ...others }) => {
  const [path, setPath] = useState([])
  const [lang, setLang] = useState()
  useEffect(() => {
    const pathname = window.location.pathname
      .split('/')
      .filter(name => name !== '')
    setPath(pathname)
  }, [window.location.pathname])

  useEffect(() => {
    i18next.changeLanguage(i18next.language ? i18next.language : 'en')
    setLang(i18next.language ? i18next.language : 'en')
  }, [])

  return (
    <ContainerWrapper {...others}>
      <LeftSideBar>
        <SideBar menuList={menuList} />
      </LeftSideBar>
      <CenterWrapper>
        <HeaderWrapper>
          <Breadcrumb paths={path} />
          <LanguageChoice
            data={Constant.Languages}
            cleanable={false}
            value={lang}
            onChange={v => {
              setLang(v)
              i18next.changeLanguage(v)
            }}
          />
        </HeaderWrapper>
        <ContentWrapper>{children}</ContentWrapper>
      </CenterWrapper>
      <FooterWrapper />
    </ContainerWrapper>
  )
}
PrivateTemplate.propTypes = {
  menuList: PropTypes.any,
  children: PropTypes.any
}
export default React.memo(PrivateTemplate)
