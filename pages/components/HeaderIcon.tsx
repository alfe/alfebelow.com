const HeaderIcon = ({ href, img, title, content }) => (
  <>
    <a href={href} target="_blank" rel="noopener noreferrer">
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
    `}</style>
  </>
);
export default HeaderIcon;
