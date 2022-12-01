import React, { useEffect, useState } from "react";
export default function withHover(Element, url) {
  return (props) => {
    const [isHover, setIsHover] = useState(false);

    return (
      <Element
        {...props}
        isHover={isHover}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      />
    );
  };
}
