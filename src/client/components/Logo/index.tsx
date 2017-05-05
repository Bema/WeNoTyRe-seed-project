import * as React from 'react'
import * as classNames from 'classnames'

// tslint:disable-next-line:no-var-requires
const logoSvg = require('assets/logo/logo.svg')

const svgHtml = {
  __html: logoSvg
}

interface ILogoProps {
  className?: string
}

const logo = ({ className }: ILogoProps) => (
  <div
    className={ classNames('logo', className) }
    dangerouslySetInnerHTML={ svgHtml }
  />
)

export default logo
