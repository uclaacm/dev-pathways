import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Typed from "typed.js";

const TypingAnimation = ({words}) => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: words,
      typeSpeed: 35,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      typed.destroy();  
    };
  }, [words]);

  return <span ref={typeTarget} />;
};

TypingAnimation.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string),
};

export default TypingAnimation;