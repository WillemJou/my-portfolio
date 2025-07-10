import { useContext } from 'react'
import { LanguageContext } from '../globals/languages'

type AnchorLinkProps = {
  titleFr: string
  titleEn: string
  anchor: string
}

export const AnchorLink = ({ titleEn, titleFr, anchor }: AnchorLinkProps) => {
  const languages = useContext(LanguageContext)
  const stateLanguage = languages.language
  return (
    <div className="anchorlink-container">
      <a className="upper-link " href={anchor}>
        <h3 className="title sub-title-4">
          {' '}
          {stateLanguage === 'en' ? titleEn : titleFr}
        </h3>
        <svg
          className="arrow-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32">
          <path d="M24.59 16.59L17 24.17V4h-2v20.17l-7.59-7.58L6 18l10 10l10-10z"></path>
        </svg>
      </a>
    </div>
  )
}
