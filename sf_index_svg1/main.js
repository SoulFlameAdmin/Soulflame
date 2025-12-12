gsap.registerPlugin(ScrollTrigger);

// защото SVG е inline → директно го взимаме
const svg = document.querySelector("svg");
if (!svg) {
    console.error("SVG not found. Inline SVG missing.");
}

// helper
function $(selector) {
    return svg.querySelector(selector);
}

// helper (multiple)
function $all(selector) {
    return svg.querySelectorAll(selector);
}

let speed = 100;
let height = svg.getBBox().height;

/* INITIAL SETUP */
gsap.set($("#h2-1"), { opacity: 0 });
gsap.set($("#bg_grad"), { attr: { cy: "-50" } });
gsap.set([$("#dinoL"), $("#dinoR")], { y: 80 });
gsap.set($("#dinoL"), { x: -10 });

/* MEDIA FIX */
const mm = gsap.matchMedia();
mm.add("(max-width: 1922px)", () => {
    gsap.set([$("#cloudStart-L"), $("#cloudStart-R")], { x: 10, opacity: 1 });
});

/* SCENE 1 */
let scene1 = gsap.timeline();
ScrollTrigger.create({
    animation: scene1,
    trigger: ".scrollElement",
    start: "top top",
    end: "45% 100%",
    scrub: 3
});

// Hills
scene1.to($("#h1-1"), { y: 3 * speed, x: speed }, 0);
scene1.to($("#h1-2"), { y: 2.6 * speed, x: -0.6 * speed }, 0);
scene1.to($("#h1-3"), { y: 1.7 * speed, x: 1.2 * speed }, 0.03);

/* Clouds */
let clouds = gsap.timeline();
ScrollTrigger.create({
    animation: clouds,
    trigger: ".scrollElement",
    start: "top top",
    end: "70% 100%",
    scrub: 1
});

clouds.to($("#cloud1"), { x: 500 }, 0);
clouds.to($("#cloud2"), { x: 1000 }, 0);

/* SUN */
let sun = gsap.timeline();
ScrollTrigger.create({
    animation: sun,
    trigger: ".scrollElement",
    start: "1% top",
    end: "2150 100%",
    scrub: 2
});

sun.fromTo($("#bg_grad"), { attr: { cy: "-50" } }, { attr: { cy: "330" } }, 0);

/* SCENE 2 */
let scene2 = gsap.timeline();
ScrollTrigger.create({
    animation: scene2,
    trigger: ".scrollElement",
    start: "15% top",
    end: "40% 100%",
    scrub: 3
});

scene2.fromTo($("#h2-1"), { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0);

/* SCENE 3 */
let scene3 = gsap.timeline();
ScrollTrigger.create({
    animation: scene3,
    trigger: ".scrollElement",
    start: "70% 50%",
    end: "bottom 100%",
    scrub: 3
});

scene3.fromTo($("#h3-1"), { y: 300 }, { y: -550 }, 0);
scene3.fromTo($("#stars"), { opacity: 0 }, { opacity: 0.5 }, 0);

window.onbeforeunload = () => window.scrollTo(0, 0);
