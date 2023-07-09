const HeaderIcon = ({ href, img, title, content, ...rest }) => (
  <>
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {/* <img src={img} alt={title} /> */}
      <span className="link-icon">●</span>
      <span className="link-text">{content}</span>
    </a>
    <style jsx>{`
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        margin-left: 64px;
        color: rgba(0, 0, 0, 0.65);
      }
      a:hover {
        filter: brightness(0.7);
        transform: translate(-1px, -1px);
        color: rgba(0, 0, 0, 0.75);
      }
      a:active {
        filter: brightness(0.6);
        transform: translate(1px, 1px);
        color: rgba(0, 0, 0, 0.75);
      }
      .link-icon {
        padding-right: 0.2em;
        font-size: 3em;
        transform: translate(0, 5px);
      }
      .link-text, .link-icon {
        font-family: Nerko One;
        font-size: 4rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

      @media screen and (max-width:680px) {
        a {
          margin-left: 8px;
        }
        .link-text, .link-icon {
          font-size: 2rem;
        }
      }
    `}</style>
  </>
);
export default HeaderIcon;
