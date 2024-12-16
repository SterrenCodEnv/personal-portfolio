import React from "react";

function Testimonial({
  testimonial: { content, authorImage, authorName, authorStatus, authorProfile },
}) {
  const maxLength = 420;
  const truncatedContent =
    content.length > maxLength
      ? `${content.substring(0, maxLength)}...`
      : content;

  return (
    <div className="testimonial-item">
      <span className="symbol">
        <i className="fas fa-quote-left"></i>
      </span>
      <p>
        {truncatedContent}
        {content.length > maxLength && (
          <a
            href="https://www.linkedin.com/in/sterrenjuan/details/recommendations/?detailScreenTabIndex=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <br />
            <b>SEGUIR LEYENDO</b>
          </a>
        )}
      </p>
      <hr/>
      <a
        href={authorProfile}
        target="_blank"
        rel="noopener noreferrer"
        className="author-link"
      >
        <div className="testimonial-details">
          <div className="thumb">
            <img src={authorImage} alt="customer-name" />
          </div>
          <div className="info">
            <h4>{authorName}</h4>
            <span>{authorStatus}</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Testimonial;
