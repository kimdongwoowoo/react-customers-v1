var express = require('express');
var router = express.Router();
var customers = [
    {
        id: 1,
        name: "들짐승",
        birthday: "112345",
        gender: "남자",
        job: "회사원"
    },
    {
        id: 2,
        name: "흑두루미",
        birthday: "112345",
        gender: "남자",
        job: "학생"
    },
    {
        id: 3,
        name: "흑우",
        birthday: "112345",
        gender: "남자",
        job: "없음"
    }
];



router.get('/', function (req, res, next) {
    res.send('list of customers');
});

router.get('/new', function (req, res, next) {
    res.render('index', { title: 'Add User Form' });
});

router.get('/:id', function (req, res, next) {
    res.send('a user. id: ' + req.params.id);
});

router.post('/', function (req, res, next) {
    res.send('new user. name: ' + req.body.name);
});

router.get('/:id/edit', function (req, res, next) {
    res.render('index', { title: 'Edit User Form' });
});

router.put('/:id', function (req, res, next) {
    res.send('update a user. id: ' + req.params.id + ' , name: ' + req.body.name);
});

router.delete('/:id', function (req, res, next) {
    res.send('delete a user. id: ' + req.params.id);
});


module.exports = router;