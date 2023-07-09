const ContentButton = ({ link, img, title, detail }) => (
  <>
    <a href={link} className="content-button-link" target="_blank" rel="noopener noreferrer">
      <div className="content-button-img">
        <img src={img} alt={title} />
      </div>
      <div className="content-button-text">
        <div className="content-button-text-title">{title}</div>
        <div className="content-button-text-detail">{detail}</div>
      </div>
    </a>

    <style jsx>{`
        .content-button-link {
          margin: 1rem;
          text-decoration: none;
          width: 640px;
          height: 520px;
          flex-shrink: 0;
          border-radius: 8px;
          border: 4px solid rgba(255, 255, 255, 0.90);
          background: #FFF;
          box-shadow: 2px 4px 4px 2px rgba(0, 0, 0, 0.20);
          display: block;
          overflow: hidden;
          padding-bottom: 1rem;
        }
        .content-button-link:hover {
          transition-duration: 250ms;
          transform: translate(-1px, -1px);
        }
        .content-button-link:active {
          transition-duration: 0ms;
          transform: translate(1px, 1px);
          filter: brightness(0.9);
        }
        .content-button-img {
          width: 100%;
        }
        .content-button-img > img {
          width: 100%;
        }
        .content-button-text {
          color: #333;
        }
        .content-button-text-title {
          font-size: 1.2rem;
          margin: 1rem;
          font-weight: bold;
          color: #111;
        }
        .content-button-text-detail {
          font-size: .5rem 1rem;
          margin: 1rem;
          color: #333;
        }

        @media screen and (max-width:680px) {
          .content-button-link {
            width: 400px;
            max-width: 100vw;
            height: inherit;
            margin: 1rem auto;
          }
        }
    `}</style>
  </>
);
export default ContentButton;
