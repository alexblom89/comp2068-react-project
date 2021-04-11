const { 
    index, show, create, update, destroy 
} = require('../controllers/movies');

module.exports = router => {
    router.get('/people', index);
    router.get('/people/:id', show);
    router.post('/people', create);
    router.put('/genres', update);
    router.delete('/genres', destroy);
}