const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const blog = [
    {
      title: "India won",
      snippet:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,ipsam eveniet numquam deleniti tempore cum qui, ex voluptatem temporibus excepturi magni magnam.",
    },
    {
      title: "Australia won",
      snippet:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,ipsam eveniet numquam deleniti tempore cum qui, ex voluptatem temporibus excepturi magni magnam.",
    },
    {
      title: "Philippines won",
      snippet:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,ipsam eveniet numquam deleniti tempore cum qui, ex voluptatem temporibus excepturi magni magnam.",
    },
    {
      title: "USA won",
      snippet:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,ipsam eveniet numquam deleniti tempore cum qui, ex voluptatem temporibus excepturi magni magnam.",
    },
  ];
  res.render("index", { title: "Portfolio", blog });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/about-us", (req, res) => {
  res.status(301).redirect("/about");
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

app.get("/create/blog", (req, res) => {
  res.render("create", { title: "Blogpost" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "Error" });
});

app.listen(port, () => console.log(`server running on port ${port}`));
