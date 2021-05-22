// TODO: Start JQuery

//   start menu section
$(".icon__humberger").click(function () {
  $(this).toggleClass("active")
  if ($(this).hasClass("active")) {
    $(".list__links_menu").toggleClass("active")
    $(".menu__section").css({
      top: "0",
      transition: "top 0.5s ease-in-out",
      opacity: "1",
    })
  } else {
    $(".menu__section").css({
      top: "-105%",
      transition: " all 0.2s ease-in-out",
      opacity: "0",
    })
    $(".list__links_menu").removeClass("active")
  }
})
$(".menu__section").click(function () {
  $(".menu__section").css({
    top: "-105%",
    transition: " all 0.2s ease-in-out",
    opacity: "0",
  })
  $(".icon__humberger").removeClass("active")
  $(".list__links_menu").removeClass("active")
})

// TODO: Start GSAP Aniamtion

// const tl = gsap.timeline({ defaults: { ease: "power1.out" } })
// tl.to(".links_menu", {
//   y: "0%",
//   duration: 0.5,
//   delay: 0.5,
//   stagger: 0.1,
//   onUpdate: function () {
//     console.log("its update")
//   },
// })

//TODO: Logo Writer
var logo = document.getElementById("logo")
var i = 0
var x = 0
var txt = "IBRAHIM MOAMEN"
var txt2 = "Welcome to my Portofolio"
var speed = 50

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("logo").innerHTML += txt.charAt(i)
    i++
    setTimeout(typeWriter, speed)
  }
}
setTimeout(typeWriter, 1800)

//TODO: Say Welcome Writer
function typeWriterr() {
  if (x < txt2.length) {
    document.getElementById("intro2").innerHTML += txt2.charAt(x)
    x++
    setTimeout(typeWriterr, speed)
  }
}
setTimeout(typeWriterr, 2500)

//TODO: Career Writer
function careerWriter() {
  var app = document.getElementById("intro")

  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 50,
  })

  typewriter
    .start()
    .typeString(" Iam A Front End Web Developer")
    .pauseFor(2500)
    .deleteChars(13)
    .typeString("with React Library")
    .pauseFor(2500)
    .deleteAll(1)
}
setTimeout(careerWriter, 3500)

//TODO:  Weave SVG Rotate
window.addEventListener("scroll", function () {
  let value = window.scrollY * 0.7
  let weave = document.querySelector(".weave")
  weave.style.transform = `rotateX(${value > 180 ? 180 : value}deg)`
})

// TODO: Hidden Weave When Scroll

window.addEventListener("scroll", function () {
  let weave = document.querySelector(".weave")
  let navbar = document.querySelector(".nav__bar")
  let x = window.scrollY

  if (x >= 100) {
    weave.style.opacity = "0"
    weave.style.visibility = "hidden"
  } else {
    weave.style.opacity = "1"
    weave.style.visibility = "visible"
  }
})

// TODO: Scroll Top = Hidden Navbar

let prevOffsect = window.pageYOffset
window.addEventListener("scroll", function () {
  let navbar = document.querySelector("nav")
  let currenOffset = window.pageYOffset
  if (prevOffsect < currenOffset) {
    navbar.style.top = "-70px"
    navbar.style.transition = " top 0.3s linear"
  } else {
    navbar.style.top = "0"
    navbar.style.transition = " top 0.3s linear"
  }
  prevOffsect = currenOffset
})

// TODO: Just a Test Function for scrollY and pageYOffset and they are equal but better to use pageYOffset Because scrollY is not supporting on all browser

function Test() {
  window.addEventListener("scroll", function () {
    let n = window.scrollY
    let z = window.pageYOffset
    console.log(`scrollY is ${n} and pageYOffset is ${z}`)
  })
}

// TODO: Filter and Print Project Items

let projects = [
  {
    id: 1,
    link: "https://ibrahimmoamen100.github.io/EL-BADR-GROUP-2020/#",
    title: "Shopping Cart",
    details: "website for selling computer hardware",
    lang: "all HTML CSS javascript",
    img1: "app1.png",
    img2: "app2.png",
  },
  {
    id: 2,
    link: "https://ibrahimmoamen100.github.io/Collection-Icons-App/",
    title: "Favorite Links",
    details: "web application for collection your best website",
    lang: "all HTML CSS react",
    img1: "app1.png",
    img2: "app2.png",
  },
  {
    id: 3,
    link: "https://ibrahimmoamen100.github.io/Collection-Icons-App/",
    title: "Favorite ",
    details: "web application for collection your best website",
    lang: "all HTML CSS react",
    img1: "app1.png",
    img2: "app2.png",
  },
]
let projectSection = document.querySelector(".container__projects")

function fitlerFunction(lang = "all") {
  let fitlerProj = projects.filter((proj) => proj.lang.includes(`${lang}`))

  let drowProjects = fitlerProj.map((proj) => {
    return `
    <div class="item__project">
    <div class="img__project">
      <img src="./img/${proj.img2}">
      <img src="./img/${proj.img1}" alt="">
    </div>
    <div class="detail__project">
      <h1>${proj.title}</h1>
      <span>${proj.details}</span>
      <a href="${proj.link}" target="_blank">Show Project</a>
    </div>
  </div>  
  `
  })
  projectSection.innerHTML = drowProjects
}
fitlerFunction((lang = "all"))

// TODO: Add Class Active to fitler buttons

let filterButtons = document.querySelectorAll(".project__filter button")
for (button of filterButtons) {
  console.log(button)
  button.addEventListener("click", (e) => {
    button.classList.remove("active")
    console.log(button)
    let buttonClicked = e.target
    buttonClicked.classList.add("active")
  })
}
// let all = document.querySelector(".all")
// let web = document.querySelector(".front")
// let front = document.querySelector(".front")

// all.addEventListener("click", () => {
//   this.classList.add("active")
//   web.classList.remove("active")
//   front.classList.remove("active")
// })
