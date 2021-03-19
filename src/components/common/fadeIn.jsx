import React from "react";

import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    fadeInSectionBottom: {
      opacity: 0,
      transform: "translateY(20vh)",
      visibility: "hidden",
      transition: "opacity 0.3s ease-out, transform 0.6s ease-out",
      willChange: "opacity, visibility",
    },
    fadeInSectionRight: {
      opacity: 0,
      transform: "translateX(20vh)",
      visibility: "hidden",
      transition: "opacity 0.3s ease-out, transform 0.6s ease-out",
      willChange: "opacity, visibility",
    },
    fadeInSectionTop: {
      opacity: 0,
      transform: "translateY(-20vh)",
      visibility: "hidden",
      transition: "opacity 0.3s ease-out, transform 0.6s ease-out",
      willChange: "opacity, visibility",
    },
    fadeInSectionLeft: {
      opacity: 0,
      transform: "translateX(-20vh)",
      visibility: "hidden",
      transition: "opacity 0.3s ease-out, transform 0.6s ease-out",
      willChange: "opacity, visibility",
    },
    isVisible: {
      opacity: 1,
      transform: "none",
      visibility: "visible",
    },
  })
);

const FadeInSectionTop = (props) => {
  const classes = useStyles();
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    //@ts-ignore
    observer.observe(domRef.current);
    //@ts-ignore
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => domRef && domRef.current && observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      //@ts-ignore
      className={`${classes.fadeInSectionTop} ${
        isVisible ? classes.isVisible : ""
        //@ts-ignore
      }`}
      //@ts-ignore>
      ref={domRef}
    >
      {props.children}
    </div>
  );
};
const FadeInSectionBottom = (props) => {
  const classes = useStyles();
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    //@ts-ignore
    observer.observe(domRef.current);
    //@ts-ignore
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => domRef && domRef.current && observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      //@ts-ignore
      className={`${classes.fadeInSectionBottom} ${
        isVisible ? classes.isVisible : ""
        //@ts-ignore
      }`}
      //@ts-ignore>
      ref={domRef}
    >
      {props.children}
    </div>
  );
};
const FadeInSectionLeft = (props) => {
  const classes = useStyles();
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    //@ts-ignore
    observer.observe(domRef.current);
    //@ts-ignore
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => domRef && domRef.current && observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      //@ts-ignore
      className={`${classes.fadeInSectionLeft} ${
        isVisible ? classes.isVisible : ""
        //@ts-ignore
      }`}
      //@ts-ignore>
      ref={domRef}
    >
      {props.children}
    </div>
  );
};
const FadeInSectionRight = (props) => {
  const classes = useStyles();
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    //@ts-ignore
    observer.observe(domRef.current);
    //@ts-ignore
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => domRef && domRef.current && observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      //@ts-ignore
      className={`${classes.fadeInSectionRight} ${
        isVisible ? classes.isVisible : ""
        //@ts-ignore
      }`}
      //@ts-ignore>
      ref={domRef}
    >
      {props.children}
    </div>
  );
};
export {
  FadeInSectionBottom,
  FadeInSectionLeft,
  FadeInSectionRight,
  FadeInSectionTop,
};
