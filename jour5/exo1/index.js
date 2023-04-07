const pug = require("pug");
const menuItems = [
  { path: "/", title: "Home", isActive: true },
  { path: "/about-me", title: "About", isActive: false },
  { path: "/references", title: "References", isActive: false },
  { path: "/contact-me", title: "Contact", isActive: false },
];

const indexHtml = pug.renderFile("layout.pug", { menuItems, pretty: true });

console.log(indexHtml);
