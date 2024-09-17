const express = require("express");
const app = express();
var cors = require('cors');
const sql = require("mysql");
const { v4 } = require('uuid')


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const db = sql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "clintdata"
})



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.post("/", (req, res) => {
    const { email } = req.body;
    
    const qr = 'INSERT INTO `register`(`email`) VALUES (\'' + email + '\')'
    const qr1 = 'SELECT COUNT(*) AS count FROM register WHERE email = \'' + email + '\'';

    db.query(qr1, (error, result) => {
        console.log(result[0].count);

        if (error) {
            res.status(501);
        } else if (result[0].count !== 0) {

            console.log("email exist");

        }
        else if (result[0].count === 0) {
            db.query(qr, (err, result, fields) => {
                if (err) {
                    res.status(500);
                    console.log("not Success");
                    console.log("not Success" + err);
                    return;
                };
                console.log("Success");
                res.status(200);

            })



        } else {
            res.status(500);
        }
    })

    console.log(qr);

})

app.post("/book", (req, res) => {
    const { name, email, phone, company } = req.body;
    const qr = 'INSERT INTO `booknow`( `name`, `email`, `phone`, `company`, `token`) VALUES (\'' + name + '\',\'' + email + '\',\'' + phone + '\',\'' + company + '\',\')'
    const qr1 = 'SELECT COUNT(*) AS count FROM booknow WHERE email = \'' + email + '\'';
    const qr2 = 'SELECT COUNT(*) AS count FROM booknow WHERE token = \'' + phone + '\'';

    db.query(qr1, (error, result) => {
        console.log(result[0].count);

        if (error) {
            res.status(501);
        } else if (result[0].count !== 0) {

            console.log("email exist");

        }
        else if (result[0].count === 0) {
            // db.query(qr, (err, result, fields) => {
            //     if (err) {
            //         res.status(500);
            //         console.log("not Success");
            //         console.log("not Success"+err);
            //         return;
            //     };
            //     console.log("Success");
            //     res.status(200);

            // })
            db.query(qr2, (error, result) => {
                console.log(result[0].count);

                if (error) {
                    res.status(501);
                } else if (result[0].count !== 0) {

                    console.log("phone exist");

                }
                else if (result[0].count === 0) {
                    db.query(qr, (err, result, fields) => {
                        if (err) {
                            res.status(500);
                            console.log("not Success");
                            console.log("not Success"+err);
                            return;
                        };
                        console.log("Success");
                        res.status(200);

                    })



                } else {
                    res.status(500);
                }
            })



        } else {
            res.status(500);
        }
    })

    console.log(qr);

})

const PORT = process.env.PORT || 8000;

app.listen(PORT);





