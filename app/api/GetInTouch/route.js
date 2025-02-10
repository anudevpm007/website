import mysql from "mysql2/promise"
import { NextResponse } from "next/server";



const connection = await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT
})

var error = ""
var status = "";

export async function POST(request) {
    
    try {
        
        var ClientData = await request.json()
        console.log(ClientData);
        var Cdata = ClientData
        var sql0 = "select Email, Phone from ClientSideData;"
       
        console.log(sql0);

        try {
            var EmailAvailCount = 0
            var PhoneAvailCount = 0
            const [result] = await connection.query(sql0);
            console.log(result);
            result.map((data,index)=>{
                if(data.Email === Cdata[1]){
                    EmailAvailCount = EmailAvailCount+1

                    
                }

                if(data.Phone===Cdata[2]){
                    PhoneAvailCount = PhoneAvailCount+1
                }
            })

            console.log(EmailAvailCount,PhoneAvailCount);
            

            if(EmailAvailCount!==0||PhoneAvailCount!==0){
                if(EmailAvailCount!==0&&PhoneAvailCount!==0){
                    error = "The Entered Email and Phone is already Registared"
                }else{
                    if(EmailAvailCount!==0){
                        error ="The Entered Email is already Registared"
                    }
    
                    else {
                        error ="The Entered Phone is already Registared"
                    }
                }
            }else if(EmailAvailCount===0 && PhoneAvailCount===0){
                var sql1 = "INSERT INTO `ClientSideData` (`Name`, `Email`, `Phone`, `Company`,`Designation`) VALUES('" + Cdata[0] + "', '" + Cdata[1] + "', '" + Cdata[2] + "', '" + Cdata[3] + "', '" + Cdata[4] + "');"
                const [result] = await connection.query(sql1);
                status = "You are registered in Astraliva"
            }

            

        } catch (error) {
            var error = "Something Wrong with Registration process please try later"
        }
        
        return NextResponse.json({
            Servererror: error,
            ServerStatus: status
        })
    } catch (error) {
        var status = "";
         var error = "Something Wrong with Registration process please try later"
        return NextResponse.json({
            Servererror: error,
            ServerStatus: status
        })
    }

}