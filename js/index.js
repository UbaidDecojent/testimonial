gsap.set(".testimonial", {scale:0.7});
gsap.timeline().from(".testimonial",{duration: 1, opacity:0})
  // .from(".text",{opacity:0,scale:0, ease: "back"})
  .from(".img",{y:110, stagger:0.1, duration:0.8, opacity:0, ease:"back" })