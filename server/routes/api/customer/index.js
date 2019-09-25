var express = require('express');
var router = express.Router();
var customers = [
    {
        id: 1,
        name: "들짐승",
        birthday: "111",
        gender: "남자",
        job: "회사원"
    },
    {
        id: 2,
        name: "흑두루미",
        birthday: "222",
        gender: "남자",
        job: "학생"
    },
    {
        id: 3,
        name: "흑우",
        birthday: "333",
        gender: "남자",
        job: "없음"
    }
];



router.get('/', function (req, res, next) {
    debugger;
    console.log('get list');
    res.send(customers);
});

router.get('/new', function (req, res, next) {
    res.render('index', { title: 'Add User Form' });
});

router.get('/:id', function (req, res, next) {
    res.send('a user. id: ' + req.params.id);
});

router.post('/', function (req, res, next) {
    var newCustomer = {
        id: req.body.id,
        name: req.body.name,
        birthday: req.body.birthday,
        gender: req.body.gender,
        job: req.body.job
    };
    customers.push(newCustomer);
    res.send('POST');
});

router.get('/:id/edit', function (req, res, next) {
    res.render('index', { title: 'Edit User Form' });
});

router.put('/:id', function (req, res, next) {
    res.send('update a user. id: ' + req.params.id + ' , name: ' + req.body.name);
});

router.delete('/:id', function (req, res, next) {
    //URI에 있는 값이 일케넘어옴 req.params.id

    const len = customers.length;
    var target = -1;
    for (var i = 0; i < len; i++) {
        if (customers[i].id == req.params.id) {
            target = i;
            break;

        }
    }
    customers.splice(target,1);
    
    res.send('deleted ' + target);
    
});


module.exports = router;