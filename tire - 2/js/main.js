// .from(
//   ".content-text",
//   {
//     duration: 1.5,
//     x: "50vh",
//     y: 0,
//     ease: "power",
//   },
//   "-=2"
// )
// .from(
//   ".tire2",
//   {
//     duration: 1.5,
//     delay: 0,
//     x: "-50vh",
//     y: "50vh",
//     rotate: -5,
//     ease: "power1",
//   },
//   "-=2"
// );
// .from(
//   ".content-text-2",
//   {
//     duration: 1.5,
//     delay: 0,
//     x: "50vh",
//     y: 0,
//     ease: "power",
//   },
//   "-=2"
// );

//text content for section One
// gsap.registerPlugin(ScrollTrigger);
// const timelineText = gsap.timeline();
// timelineText.from(".section-one-heading", {
//   duration: 1.3,
//   x: "200vh",
//   y: 0,
//   ease: "power",
// });

// // text content for section Two
// const timelineTextTwo = gsap.timeline();
// timelineTextTwo.from(".section-two-heading", {
//   duration: 1.5,
//   x: "110%",
//   y: 0,
//   ease: "power",
// });

// //Text content for Section Three
// // const timelineTextThree = gsap.timeline();
// // timelineTextThree.from(".section-one-heading", {
// //   duration: 1.5,
// //   x: "200vh",
// //   y: 0,
// //   ease: "power",
// // });

// //image For Section One
// const timeline = gsap.timeline();
// timeline.from(".tire-one-image", {
//   duration: 1.5,
//   x: "-200vh",
//   y: "80vh",
//   rotate: -90,
//   ease: "power3",
// });

// // Image for Section Two
// const imgSectionTwo = gsap.timeline();
// imgSectionTwo.from(".image-two", {
//   duration: 1,
//   x: "-150%",
//   y: "55vh",
//   rotate: -60,
//   ease: "power1",
// });

// //image for Section Three
// const imgSectionThree = gsap.timeline();
// imgSectionThree.from(".tire-three-image", {
//   scrollTrigger: {
//     trigger: ".image-two",
//     toggleActions: "restart none none none ",
//   },
//   duration: 1,
//   x: "-10%",
//   y: "100%",
//   rotate: -70,
//   ease: "power1",
// });

// gsap.fromTo(
//   "#cursor",
//   { autoAlpha: 0, x: -20 },
//   { autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1) }
// );

// let tween = gsap.to("#text", {
//   text: {
//     value:
//       "this is a custom text written to show my easy approaches to make the typewriting easy!",
//   },
//   duration: 5,
//   delay: 1,
//   ease: "none",
// });

// document.querySelector("#restart").onclick = () => tween.restart();
// document.querySelector("#pause").onclick = () => tween.pause();
// document.querySelector("#resume").onclick = () => tween.resume();

// // get Sections
// const sectionOne = document.querySelector(".first");
// const sectionTwo = document.querySelector(".second-section");
// const sectionThree = document.querySelector(".third-section");

// window.onscroll = () => {
//   // play and reverse section One
//   if (window.scrollY < sectionOne.offsetTop) {
//     timelineText.play();
//     timeline.play();
//   } else {
//     timelineText.reverse(1);
//     timeline.reverse();
//   }
//   // play and reverse section Two
//   if (window.scrollY >= sectionTwo.offsetTop) {
//     timelineTextTwo.play();
//     imgSectionTwo.play();
//   } else {
//     timelineTextTwo.reverse();
//     imgSectionTwo.reverse();
//   }
//   // play and Reverse Section Three
//   if (window.scrollY >= sectionThree) {
//     timelineTextThree.play();
//     imgSectionThree.play();
//   } else {
//     timelineTextThree.reverse();
//     imgSectionThree.reverse();
//   }
// };

// const svg = document.querySelector(".svg-content");
// setTimeout(() => {
//   svg.innerHTML = ``;
// }, 3000);

// var typed3 = new Typed("#typed3", {
//   strings: [
//     "My strings are: <i>strings</i> with",
//     "My strings are: <strong>HTML</strong>",
//     "My strings are: Chars &times; &copy;",
//   ],
//   typeSpeed: 0,
//   backSpeed: 0,
//   smartBackspace: true, // this is a default
//   loop: true,
// });

gsap.registerPlugin(ScrollTrigger);

// section One Animation
gsap.from(".section-one-heading", {
  scrollTrigger: {
    trigger: ".section-one-heading",
    toggleActions: "restart none restart none",
  },
  duration: 2.5,
  x: "105%",
});

// Section Two Animation Header
gsap.from(".section-two-heading", {
  scrollTrigger: {
    trigger: ".passenger-animate-two",
    toggleActions: "restart none restart none",
  },
  duration: 1.5,
  x: "110%",
  y: 0,
  rotate: 0,
});

//Section Three Animation Header
gsap.from(".heading-three", {
  scrollTrigger: {
    trigger: ".section-three",
    toggleActions: "restart none restart none",
  },
  x: "90%",
  y: 0,
  rotation: 0,
  duration: 1.8,
});

//Image For Section One
gsap.from(".tire-one-image", {
  scrollTrigger: {
    trigger: ".tire-one-image",
    toggleActions: "restart none restart none",
  },
  duration: 2.5,
  x: "-60%",
  y: "60%",
  rotate: -20,
});

//image For Section Two
gsap.from(".image-two", {
  scrollTrigger: {
    trigger: ".passenger-animate-two",
    toggleActions: "restart none restart none",
  },
  duration: 1.5,
  x: "-60%",
  y: "60%",
  rotate: -20,
});

// Image For Section Three
// gsap.from(".tire-three-image", {
//   scrollTrigger: {
//     trigger: ".tire-three-image",
//     toggleActions: "restart none reverse none",
//   },
//   duration: 1.5,
//   x: "-60%",
//   y: "60%",
//   rotate: -20,
// });
