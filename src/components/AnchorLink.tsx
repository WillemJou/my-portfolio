type AnchorLinkProps = {
  title: string
  anchor: string
  className: string
}

export const AnchorLink = ({ title, anchor, className }: AnchorLinkProps) => {
  return (
    <div className="anchorlink-container">
      <a className={className} href={anchor}>
        <h3 className="title sub-title-2">{title}</h3>
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
