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
const timelineText = gsap.timeline();
timelineText.from(".content-text", {
  duration: 1.5,
  x: "50vh",
  y: 0,
  ease: "power",
});

// text content for section Two
const timelineTextTwo = gsap.timeline();
timelineTextTwo.from(".content-text-2", {
  duration: 1.5,
  x: "50%",
  y: 0,
  ease: "power",
});

//Text content for Section Three
const timelineTextThree = gsap.timeline();
timelineTextThree.from(".content-text-3", {
  duration: 1.5,
  x: "50vh",
  y: 0,
  ease: "power",
});

//image For Section One
const timeline = gsap.timeline();
timeline.from(".tire1", {
  duration: 1.5,
  x: "-100vh",
  y: "100%",
  rotate: 10,
  ease: "power1",
});

//Image for Section Two
const imgSectionTwo = gsap.timeline();
imgSectionTwo.from(".tire2", {
  duration: 1.5,
  x: "-50vh",
  y: "50vh",
  rotate: -5,
  ease: "power1",
});

//image for Section Three
const imgSectionThree = gsap.timeline();
imgSectionThree.from(".tire3", {
  duration: 1.5,
  x: "-100vh",
  y: "100%",
  rotate: 10,
  ease: "power1",
});

//get Sections
const sectionOne = document.querySelector(".first-section");
const sectionTwo = document.querySelector(".second-section");
const sectionThree = document.querySelector(".third-section");

window.onscroll = () => {
  // play and reverse section One
  if (window.scrollY >= sectionOne.offsetTop) {
    timelineText.play();
    timeline.play();
  } else {
    timelineText.reverse();
    timeline.reverse();
  }
  // play and reverse section Two
  if (window.scrollY >= sectionTwo.offsetTop) {
    timelineTextTwo.play();
    imgSectionTwo.play();
  } else {
    timelineTextTwo.reverse();
    imgSectionTwo.reverse();
  }
  // play and Reverse Section Three
  if (window.scrollY >= sectionThree) {
    timelineTextThree.play();
    imgSectionThree.play();
  } else {
    timelineTextThree.reverse();
    imgSectionThree.reverse();
  }
};

const svg = document.querySelector(".svg-content");
setTimeout(() => {
  svg.innerHTML = ``;
}, 3000);

var typed3 = new Typed("#typed3", {
  strings: [
    "My strings are: <i>strings</i> with",
    "My strings are: <strong>HTML</strong>",
    "My strings are: Chars &times; &copy;",
  ],
  typeSpeed: 0,
  backSpeed: 0,
  smartBackspace: true, // this is a default
  loop: true,
});
