import mysql from "mysql2/promise"
import { NextResponse } from "next/server";
import whiteDom from "./whiteList";


const connection = await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT
})

export async function POST(request) {
    try {

        const Cdata = await request.json()
        var EmailC = Cdata.Email
        console.log(EmailC);
        
        let emailValid;
        let erro;
        if (EmailC.length !== 0) {

            var sql2 = "select Email from ClientReg;"

            const [results, fields] = await connection.query(sql2)


            var emailCheckCount = 0

            results.map((data, Index) => {
                if (data.Email === Cdata.Email) {
                    emailCheckCount = emailCheckCount + 1
                }
            })


            var Status = "";
            console.log(EmailC.length);
            
            if (emailCheckCount === 0) {

                if (EmailC.length < 320 && EmailC.length !== 0) {
                    
                    if (!(EmailC).match(/^[a-zA-Z0-9][a-zA-Z0-9._%+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) &&  EmailC.split("@")[0].length!==0) {
                        Status = "Invalied Email"
                        emailValid = false
                        erro = 100

                    }


                    else if (((EmailC.split("@"))[0])[(((EmailC.split("@"))[0]).length) - 1] === "." || EmailC[0] === "@") {
                        Status = "Invalied Email"
                        erro = 100
                        emailValid = false
                    } else if ((EmailC.split("@"))[0].length < 2) {
                        Status = "Invalied Email"
                        erro = 100
                        emailValid = false
                    } else if (!isNaN((EmailC.split("@"))[0][0])) {
                        Status = "Invalied Email"
                        erro = 100
                        emailValid = false
                    }
                    else {
                        var WDCount = 0
                        whiteDom.map((data, index) => {
                            if (((EmailC.split("@"))[1]) === data) {
                                WDCount = WDCount + 1
                            }
                        })
                        if (WDCount === 0) {
                            erro = 200
                            emailValid = true

                        } else {
                            emailValid = false
                            Status = "Email white listed Email"
                            erro = 102
                        }
                    }
                } else {
                    emailValid = false
                    Status = "Invalied Email"
                    erro = 102
                }
            } else {
                emailValid = false
                erro = 101
                Status = "Email already exist"
            }

            if (emailValid) {
                var sql = "INSERT INTO `ClientReg` ( `Email`) VALUES('" + Cdata.Email + "'); "
                const [results, fields] = await connection.query(sql)
                Status = "Your Action Updated"
            }
        }else{
            erro = 103
            Status = "Please fill the field"
        }
        return NextResponse.json({ status: Status, error: erro })
    } catch (error) {
        return NextResponse.json({ err: "400" })
    }
}