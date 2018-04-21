const router = require('express').Router();
const pool = require('../modules/pool');

//GET REFLECTIONS
router.get('/', (req,res) => {
    console.log('GET /reflections');
    let queryText = `SELECT * FROM reflection ORDER BY id DESC;`;
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

//POST Reflection
router.post('/', (req,res) => {
    let reflection = req.body;
    console.log('POST /reflections', reflection);
    let queryText = `INSERT INTO "reflection" ("topic", "description")
                      VALUES ($1, $2);`;
    pool.query(queryText, [reflection.topic, reflection.description])
        .then((result) => {
            console.log('successful POST /reflections');
            res.sendStatus(200); 
        })
        .catch((error) => {
            console.log('error in POST /reflections', error);
            res.sendStatus(500)
        })  
})

//DELETE reflection
router.delete('/:id', (req,res) => {
    let id = req.params.id; 
    console.log('DELETE /reflections', id);
    let queryText = `DELETE FROM reflection WHERE id = ${id};`;
    pool.query(queryText)
        .then((result) => {
            console.log('successful DELETE /reflections');
            res.sendStatus(200); 
        })
        .catch((error) => {
            console.log('error in DELETE /reflections', error);
            res.sendStatus(500)
        })  
})

//PUT reflection
router.put('/:id', (req,res) => {
    let id = req.params.id; 
    console.log('PUT /reflections', id);
    let queryText = `UPDATE reflection SET bookmarked = NOT bookmarked WHERE id = ${id};`;
    pool.query(queryText)
        .then((result) => {
            console.log('successful PUT /reflections,', result);
            res.sendStatus(200); 
        })
        .catch((error) => {
            console.log('error in PUT /reflections', error);
            res.sendStatus(500)
        })  
})



module.exports = router;