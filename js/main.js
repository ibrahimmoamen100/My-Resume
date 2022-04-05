// TODO: Start JQuery

//   start menu section
$(".icon__humberger").click(function () {
  $(this).toggleClass("active")
  if ($(this).hasClass("active")) {
    $(".list__links_menu").toggleClass("active")
    $(".menu__section").css({
      transform: "translate(0%, 0%)",
      transition: " all 0.5s ease-out",
      opacity: "1",
      borderEndStartRadius: "0%",
    })
  } else {
    $(".menu__section").css({
      transform: "translate(105%, -105%)",
      transition: " all 0.5s ease-in-out",
      opacity: "0",
      borderEndStartRadius: "100%",
    })
    $(".list__links_menu").removeClass("active")
  }
})
$(".menu__section").click(function () {
  $(".menu__section").css({
    transform: "translate(105%, -105%)",
    transition: " all 0.2s ease-in-out",
    borderEndStartRadius: "100%",

    opacity: "0",
  })
  $(".icon__humberger").removeClass("active")
  $(".list__links_menu").removeClass("active")
})

$(".project__filter button").click(function (e) {
  $(this).siblings(".project__filter button").removeClass("active")
  $(e.target).addClass("active")
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
setTimeout(typeWriterr, 2000)

//TODO: Career Writer
function careerWriter() {
  var app = document.getElementById("intro")

  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 100,
  })

  typewriter
    .start()
    .typeString("Front End Web Developer")
    .pauseFor(2500)
    // .deleteChars(9)
    .typeString(" | React JS Library")
    .pauseFor(2500)
    .deleteAll(50)
}
setTimeout(careerWriter, 4000)

//TODO:  Weave SVG Rotate
window.addEventListener("scroll", function () {
  let value = window.scrollY * 0.7
  let weave = document.querySelector(".weave")
  // weave.style.transform = `rotateX(${value > 180 ? 180 : value}deg)`
})

// TODO: Hidden Weave When Scroll

window.addEventListener("scroll", function () {
  let weave = document.querySelector(".weave")
  let navbar = document.querySelector(".nav__bar")
  let x = window.scrollY

  // if (x >= 100) {
  //   weave.style.opacity = "0"
  //   weave.style.visibility = "hidden"
  // } else {
  //   weave.style.opacity = "1"
  //   weave.style.visibility = "visible"
  // }
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
    title: "EL BADR GROUP",
    details: "Website for Selling Computer Hardware",
    lang: "all HTML CSS javascript",
    img1: "elbadr2.png",
    img2: "elbadr.png",
    wow: "bounceInLeft",
    wowDelay: "0.03s",
  },
  {
    id: 2,
    link: "https://ibrahimmoamen100.github.io/Collection-Icons-App/",
    title: "Favourite Links",
    details: "Web Application for Collecting your Favorite Website",
    lang: "all HTML CSS javascript",
    img1: "app1.png",
    img2: "app2.png",
    wow: "bounceInUp",
    wowDelay: "0.05s",
  },
  {
    id: 3,
    link: "https://ibrahimmoamen100.github.io/Shopping-Cart/",
    title: "Simple Shopping Cart ",
    details: "Simple Shopping Cart Task Using Vanilla Javascript ",
    lang: "all HTML CSS javascript",
    img1: "shopping1.png",
    img2: "shopping3.png",
    wow: "bounceInRight",
    wowDelay: "0.03s",
  },
  {
    id: 4,
    link: "https://facebook-clone-ib-moamen.netlify.app/",
    title: "Facebook Clone ",
    details: "Simple Interface About Facebook with Full Responsive Display",
    lang: "all HTML CSS react",
    img1: "facebook1.png",
    img2: "facebook2.png",
    wow: "bounceInLeft",
    wowDelay: "0.05s",
  },
  {
    id: 5,
    link: "https://ibrahimmoamen100.github.io/SA-Attack/",
    title: "Sudden Attack",
    details: "Website About First Personal Shooter Game ",
    lang: "all HTML CSS javascript",
    img1: "sa2.png",
    img2: "sa1.png",
    wow: "bounceInUp",
    wowDelay: "0.05s",
  },
  {
    id: 6,
    link: "https://ibrahimmoamen100.github.io/developer-community/index.html",
    title: "Developer Community",
    details: "Website for Developer Communtiy",
    lang: "all HTML CSS javascript",
    img1: "developer-com2.png",
    img2: "developer-com.png",
    wow: "bounceInRight",
    wowDelay: "0.03s",
  },
  {
    id: 7,
    link: "https://we-internet.netlify.app/",
    title: "WE Internet",
    details: "Telecom Egypt Website Clone",
    lang: "all HTML CSS react",
    img1: "we-inernet.jpg",
    img2: "we-inernet 2.jpg",
    wow: "bounceInRight",
    wowDelay: "0.03s",
  },
]
let projectSection = document.querySelector(".container__projects")

function fitlerFunction(lang = "all") {
  let fitlerProj = projects.filter((proj) => proj.lang.includes(`${lang}`))

  let drowProjects = fitlerProj.map((proj) => {
    return `
    <div class="item__project wow ${proj.wow}" data-wow-delay='${proj.wowDelay}'>
    <div class="img__project">
      <img src="./img/${proj.img2}">
      <img src="./img/${proj.img1}" alt="">
    </div>
    <div class="detail__project">
      <h1>${proj.title}</h1>
      <span>${proj.details}</span>
      <a href="${proj.link}" target="_blank"> <span>Show Project<span/></a>
    </div>
  </div>  
  `
  })
  projectSection.innerHTML = drowProjects.join("")
}
fitlerFunction((lang = "all"))

//TODO: Add Class Active to fitler buttons

const resumeBtn = document.querySelector(".my__resume")

// window.addEventListener("scroll", () => {
//   const btnResume = resumeBtn.getBoundingClientRect()
//   console.log(btnResume)
//   if (btnResume.top < 0) {
//     console.log("yes its smaller then zero")
//     resumeBtn.style.animation = "scrolly 0.8s ease-in-out 0s 1 both"
//   } else if (window.scrollY == 0) {
//     resumeBtn.style.animation = "none"
//     resumeBtn.style.position = "relative"
//   }
// })

let skillSection = document.querySelector(".skills")
let numbers = document.querySelectorAll(".prograss_num__skill")

let spans = document.querySelectorAll(".bm_detail__skill_prograss")
let started = false

window.addEventListener("scroll", () => {
  if (window.scrollY >= skillSection.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width
    })
  } else {
    spans.forEach((span) => {
      span.style.width = "0px"
    })
  }
})

let startCount = (el) => {
  let goal = el.dataset.number

  let counter = setInterval(() => {
    el.textContent++

    if (el.textContent == goal) {
      clearInterval(counter)
    }
  }, 1000 / goal)
}

window.addEventListener("scroll", () => {
  if (window.scrollY >= skillSection.offsetTop) {
    if (!started) numbers.forEach((el) => startCount(el))
    started = true
  }
})

// title about section
let titleSectionAbout = document.querySelector(".title__section_about")
let about = document.querySelector(".about")
window.addEventListener("scroll", () => {
  let value = window.scrollY

  titleSectionAbout.style.left = (2.2 * value) / 100 + "%"
})

// title skill section

let titleSkill = document.querySelector(".title__section_skill")
window.addEventListener("scroll", () => {
  value = window.scrollY
  titleSkill.style.left = (2.5 * value) / 100 + "%"
})
