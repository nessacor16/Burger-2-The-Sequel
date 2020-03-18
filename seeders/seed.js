/*
INSERT INTO burgers (burger_name) VALUES ('The Regular Burger and Cheese');
INSERT INTO burgers (burger_name) VALUES ('Mushroom Overload Burger');
INSERT INTO burgers (burger_name) VALUES ('The Missing Link Burger');
*/
const {db, Burgers} = require ('../models');

const seed = async () => {
  await db.sync({force: true}) //sync to your database!

  const bg1 = await Burgers.create({
    burger_name: 'Ultimate mushroom, onion, cheese burger deluxe',
  })
  const bg2 = await Burgers.create({
    burger_name: 'Mac & Cheese Overload Burger',
  })
  db.close() //close your db connection else the connection stays alive else your process hangs.
  console.log('Seed Successful!') //Have a prompt to let you know everything is working correctly!
}

seed() //