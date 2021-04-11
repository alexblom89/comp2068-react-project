module.exports = router => {
    require('./routes/genres')(router);
    return router;
}