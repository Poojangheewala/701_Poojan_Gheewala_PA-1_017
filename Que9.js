const mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'employee'
});

const selectAllEmployees = () => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM empTB", (err, result, fields) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        })
    })
}

con.connect((err) => {
    if (err) {
        console.log("error: " + err)
    } else {

        //inserting record in employee table
        con.query("INSERT INTO empTB (name,email,age) values('XYZ','XYZ@hmail.com',22)", (err, result) => {
            if (err) {
                console.log("error: " + err)
            } else {
                console.log("record inserted")
            }
        })

        //getting all data from employee table using promise based approach
        selectAllEmployees().then(result => {
            console.log(result)
        }).catch(err => {
            console.log("error: " + err)
        })
    }
})