const fs = require('fs');

exports.getHomePage = (req, res) => {
    let query = "SELECT * FROM `student` ORDER BY id ASC";


    db.query(query, (err, result) => {
        if (err) {
            res.redirect('/');
        }

        res.render('index.ejs', {
            title: "Welcome to Tekup | View Student",
            student: result
        });
    });
};
