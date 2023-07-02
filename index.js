const express = require("express");
const app = express();
const port = 3000;

let cors = require("cors");
app.use(cors());

const users = [
  {
    name: "Leanne Graham",
    img: "https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "http://hildegard.org",
  },
  {
    name: "Ervin Howell",
    img: "https://avatars.dicebear.com/v2/avataaars/Antonette.svg?options[mood][]=happy",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "http://anastasia.net",
  },
  {
    name: "Clementine Bauch",
    img: "https://avatars.dicebear.com/v2/avataaars/Samantha.svg?options[mood][]=happy",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "http://ramiro.info",
  },
  {
    name: "Patricia Lebsack",
    img: "https://avatars.dicebear.com/v2/avataaars/Karianne.svg?options[mood][]=happy",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    website: "http://kale.biz",
  },
  {
    name: "Chelsey Dietrich",
    img: "https://avatars.dicebear.com/v2/avataaars/Kamren.svg?options[mood][]=happy",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "http://demarco.info",
  },
  {
    name: "Mrs. Dennis Schulist",
    img: "https://avatars.dicebear.com/v2/avataaars/Leopoldo_Corkery.svg?options[mood][]=happy",
    email: "Karley_Dach@jasper.info",
    phone: "1-477-935-8478 x6430",
    website: "http://ola.org",
  },
  {
    name: "Kurtis Weissnat",
    img: "https://avatars.dicebear.com/v2/avataaars/Elwyn.Skiles.svg?options[mood][]=happy",
    email: "Telly.Hoeger@billy.biz",
    phone: "210.067.6132",
    website: "http://elvis.io",
  },
  {
    name: "Nicholas Runolfsdottir V",
    img: "https://avatars.dicebear.com/v2/avataaars/Maxime_Nienow.svg?options[mood][]=happy",
    email: "Sherwood@rosamond.me",
    phone: "586.493.6943 x140",
    website: "http://jacynthe.com",
  },
  {
    name: "Glenna Reichert",
    img: "https://avatars.dicebear.com/v2/avataaars/Delphine.svg?options[mood][]=happy",
    email: "Chaim_McDermott@dana.io",
    phone: "(775)976-6794 x41206",
    website: "http://conrad.com",
  },
  {
    name: "Clementina DuBuque",
    img: "https://avatars.dicebear.com/v2/avataaars/Moriah.Stanton.svg?options[mood][]=happy",
    email: "Rey.Padberg@karina.biz",
    phone: "024-648-3804",
    website: "http://ambrose.net",
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
