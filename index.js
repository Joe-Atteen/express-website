const express = require("express");
const path = require("path");

// const handleHomeRequest = (req, res) => {
//   const homepage = path.join(__dirname, "public", "index.html");
//   res.sendFile(homepage);
// };

// const handleAboutRequest = (req, res) => {
//   const aboutpage = path.join(__dirname, "public", "about.html");
//   res.sendFile(aboutpage);
// };

// const handleContactRequest = (req, res) => {
//   const contactpage = path.join(__dirname, "public", "contact.html");
//   res.sendFile(contactpage);
// };

// const handleServicesRequest = (req, res) => {
//   const servicespage = path.join(__dirname, "public", "services.html");
//   res.sendFile(servicespage);
// };

// const styleSheet = (req, res) => {
//   const style = path.join(__dirname, "public", "style.css");
//   res.sendFile(style);
// };

// const middleware = (req, res, next) => {
//   console.log("This is the middleware");
//   next();
// };

const server = express();

// server.use(middleware);
server.use(express.static(path.join(__dirname, "public")));
// server.get(styleSheet);
// server.get("/services", handleServicesRequest);
// server.get("/contact", handleContactRequest);
// server.get("/about", handleAboutRequest);
// server.get("/", middleware, handleHomeRequest);

server.listen(5000, "localhost", () => {
  console.log("Server Ready!");
});
