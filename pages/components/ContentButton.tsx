const ContentButton = ({ link, img, title, detail }) => (
  <>
    <a href={link} className="content-button-link" target="_blank" rel="noopener">
      <div className="content-button">
        <div className="content-button-img">
          <img src={img} alt={title} />
        </div>
        <div className="content-button-text">
          <div className="content-button-text-title">{title}</div>
          <div className="content-button-text-detail">{detail}</div>
        </div>
      </div>
    </a>

    <style jsx>{`
        .content-button-link {
          text-decoration: none;
        }
        .content-button-link[href^="https://"] .content-button{
          box-shadow: 4px 4px 4px rgba(0, 0, 0, .7);
        }
        .content-button-link[href^="https://"] .content-button:hover{
          box-shadow: 8px 8px 8px rgba(0, 0, 0, .7);
          transform: translate(-1px, -1px);
        }
        .content-button-link[href^="https://"] .content-button:active{
          box-shadow: 0px 0px 0px rgba(0, 0, 0, .7);
          transform: translate(1px, 1px);
        }
        .content-button-link:not([href^="https://"]) .content-button{
          background: #DDDDDD;
          transform: translate(1px, 1px);
        }
        .content-button {
            background: #FFFFFF;
            width: 80%;
            max-width: 960px;
            height: 15rem;
            margin: 1rem auto;
            display: flex;
            border-radius: 8px;
            overflow: hidden;
        }
        .content-button-text {
            margin: 2rem;
            color: #333;
        }
        .content-button-text-title {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .content-button-text-detail {
          font-size: .8rem;
        }

        @media screen and (max-width:680px) {
          .content-button {
            flex-direction: column;
            align-items: center;
            width: 400px;
            max-width: calc(100% - 1rem);
          }
        }
    `}</style>
  </>
);
export default ContentButton;
