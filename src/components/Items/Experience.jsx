import React from 'react';

function Experience({ experience: { year, degree, content } }) {
  return (
    <div className="entry">
      <div className="title">
        <span>{year}</span>
      </div>
      <div className="body">
        <h4 className="mt-0">{degree}</h4>
        {content.includes('https://') ? (
          // eslint-disable-next-line react/jsx-no-target-blank
          <a style={{ color: '#888' }} target="_blank" href={content}>
            {'✓ Udemy certificate'}
          </a>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

export default Experience;
