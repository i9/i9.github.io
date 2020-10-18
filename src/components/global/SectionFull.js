import React from "react"

export default function Section({ children, secHeight, bgColor, extraMargin }) {
  return (
    <div
      className="sec-outer"
      style={{ background: `${bgColor}`, marginTop: `${extraMargin}` }}
    >
      <div className={secHeight}>
        <div className="container-fluid p-0">{children}</div>
      </div>
    </div>
  )
}

Section.defaultProps = {
  secHeight: "sec-lg",
  bgColor: { background: "transparent" },
}
