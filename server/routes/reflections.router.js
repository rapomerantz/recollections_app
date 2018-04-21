const router = require('express').Router();
const pool = require('../modules/pool');

//GET REFLECTIONS
router.get('/', (req,res) => {
    console.log('GET /reflections');
    let queryText = `SELECT * FROM reflection;`;
    pool.query(queryText)
        .then((result) => {
            // console.log('successful GET /tasks');
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error in /reflections GET', error);
            res.sendStatus(500)
        })  
})



module.exports = router;