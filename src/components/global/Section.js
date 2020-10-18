import React from "react";

export default function Section({ children, secHeight, bgColor, extraMargin }) {
  return (
    <div
      className="sec-outer"
      style={{ background: `${bgColor}`, margin: `${extraMargin}` }}
    >
      <div className={secHeight}>
        <div className="container">{children}</div>
      </div>
    </div>
  );
}

Section.defaultProps = {
  secHeight: "sec-lg",
  bgColor: { background: "transparent" }
};
