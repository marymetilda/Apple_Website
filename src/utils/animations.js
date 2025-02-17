export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  aniamtionProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...aniamtionProps,
      ease: "power2.inout",
    },
    "<"
  );
  timeline.to(
    secondTarget,
    {
      ...aniamtionProps,
      ease: "power2.inout",
    },
    "<"
  );
};
