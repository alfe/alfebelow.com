const HeaderIcon = ({ href, img, title, content, ...rest }) => (
  <>
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      <img src={img} alt={title} />
      <span className="link-text">{content}</span>
    </a>
    <style jsx>{`
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        margin-left: 64px;
      }
      a:hover {
        filter: brightness(0.7);
      }
      a:active {
        filter: brightness(0.6);
      }
      .link-text {
        font-family: 'Futura';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
        margin-top: 0.25rem;
        margin-left: 1rem;
      }

      @media screen and (max-width:680px) {
        a {
          margin-left: 8px;
        }
      }
    `}</style>
  </>
);
export default HeaderIcon;
