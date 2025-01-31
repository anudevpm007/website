import mysql from "mysql2/promise"
import { NextResponse } from "next/server";



const connection = await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
})

export async function POST(request) {
    try {
        var sqlshow = "SELECT Email,Phone,Code FROM ClientSideData;"
        const [results, fields] = await connection.query(sqlshow)
        const Cdata = await request.json()
        var resp = []
        var phoneCheckIndex = []
        var emailCheckIndex = []
        results.map((data, index) => {
            if (Cdata.Email === data.Email) {
                emailCheckIndex.push(index)
            }

            if (Cdata.Phone === data.Phone) {
                if (Cdata.Code === data.Code) {
                    phoneCheckIndex.push(index)
                }
            }


        })

        var EmailC = Cdata.Email + "";
        let emailValid;
        if (phoneCheckIndex.length !== 0) {
            resp.push("P")
            if (emailCheckIndex.length !== 0) {

                resp.push("E")
            }
            if (!(EmailC).match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)) {
                resp.push("EW")
                emailValid = false
                console.log("entered")

            } else if (((EmailC.split("@"))[0])[(((EmailC.split("@"))[0]).length) - 1] === "." || EmailC[0] === ".") {
                resp.push("EW")
                emailValid = false
            } else {
                emailValid = true
            }

        } else if (emailCheckIndex.length !== 0) {
            resp.push("E")
        }

        if (!(EmailC).match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)) {
            resp.push("EW")
            emailValid = false
        } else {
            emailValid = true
        }



        if (phoneCheckIndex.length === 0 && emailCheckIndex.length === 0 && emailValid === true) {
            resp.push("200")
            var sqlAdd = "INSERT INTO `ClientSideData` (`Name`, `Email`, `Phone`,`Code`, `Company`, `Designation`) VALUES('" + Cdata.Name + "','" + Cdata.Email + "','" + Cdata.Phone + "','" + Cdata.Code + "','" + Cdata.ComName + "','" + Cdata.Des + "')";
            try {
                const [results, fields] = await connection.query(sqlAdd)
                resp.push("301")
                console.log("response :", resp);

            } catch (error) {
                resp.push("502")
                console.log("response :", resp);

            }


        }
        console.log(resp)

        return NextResponse.json({ status: resp })
    } catch (error) {
        console.log("From route page error:", error);
        return NextResponse.json({ Err: error })
    }
}