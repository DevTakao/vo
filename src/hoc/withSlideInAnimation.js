import { useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const withSlideInAnimation = (WrappedComponent) => {
  const WithSlideInAnimation = (props) => {
    const ref = useRef(null);
    const [slideIn, setSlide] = useSpring(() => ({
      transform: "translateX(-100%)",
      config: { duration: 500 },
      from: { transform: "translateX(0)" },
    }));

    useEffect(() => {
      const handleScroll = () => {
        if (ref.current.getBoundingClientRect().top < window.innerHeight) {
          setSlide({ transform: "translateX(0%)" });
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <animated.section ref={ref} style={slideIn}>
        <WrappedComponent {...props} />
      </animated.section>
    );
  };

  return WithSlideInAnimation;
};

export default withSlideInAnimation;
