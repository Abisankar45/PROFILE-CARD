/* FLOATING SKILLS */
const skills = [
  "./images/HTML5.png",
  "./images/CSS3.png",
  "./images/JS.png",
  "./images/Python.png",
  "./images/React.png",
  "./images/Oracle.png",
  "./images/ChatGPT.png",
];

const orbit = document.getElementById("orbit");
const total = skills.length;
const radius = 120;

skills.forEach((src, i) => {
  const angle = ((2 * Math.PI) / total) * i;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  const div = document.createElement("div");
  div.className = "skill";
  div.style.left = 130 + x + "px"; // Center at 130
  div.style.top = 130 + y + "px"; // Center at 130
  div.style.position = "absolute";
  div.style.transform = "translate(-50%, -50%)";

  const img = document.createElement("img");
  img.src = src;
  img.style.width = "30px";
  img.style.height = "30px";

  div.appendChild(img);
  orbit.appendChild(div);
});

/* ROLE ROTATION */
const roles = [
  "Web Developer",
  "Front-End Developer",
  "React.js Developer",
  "Freelancer",
];
let index = 0;

const roleElement = document.getElementById("roleText");
if (roleElement) {
  setInterval(() => {
    index = (index + 1) % roles.length;
    roleElement.textContent = roles[index];

    // Add fade animation
    roleElement.style.opacity = "0.5";
    setTimeout(() => {
      roleElement.style.opacity = "1";
    }, 150);
  }, 3000);
}
