const db = require('../db/config');

const Director = {};

Director.findAll = () => {
  return db.query('SELECT * FROM directors');
}

Director.findById = (id) => {
  // console.log(db)
  return db.oneOrNone(`SELECT * FROM directors WHERE id = $1`, [id])
}


module.exports = Director;
