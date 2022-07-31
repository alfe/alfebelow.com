const SlideItem = ({ link, title, detail }) => (
  <>
    <li>
      <a href={link} target="_blank" rel="noopener">
        {title}
      </a> - {detail}
    </li>

    <style jsx>{`
      li {
        color: #FFFFFF;
      }
      li a {
        color: #cfd5ff;
      }
      li a:hover {
        color: #FFFFFF;
      }
    `}</style>
  </>
);

export default SlideItem;
