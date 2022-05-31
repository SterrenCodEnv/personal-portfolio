import React from "react";

function SectionHeading({ title }) {
  return (
    <>
      <h2 className="section-title">{title}</h2>
      <div className="spacer" data-height="50"></div>
    </>
  );
}

export default SectionHeading;
