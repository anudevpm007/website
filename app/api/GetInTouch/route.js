import mysql from "mysql2/promise";
import { NextResponse } from "next/server";
import whiteDom from "./whiteList";

const connection = await mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
});

var error = "";
var status = "";

export async function POST(request) {
  var count = 0;

  try {
    var E = "";
    var ClientData = await request.json();
    console.log(ClientData);
    var email = ClientData[1];
    var phone = ClientData[2];
    console.log("email: ", email, ", phone: ", phone);
    if (phone.length < 5 || phone.length >= 15) {
      error = "The entered number is wrong";
      E = "P";
    } else {
      error = "";
      E = "";
      console.log(
        "Output: ",
        email.match(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
        )
      );
      if (
        email.match(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
        )
      ) {
        whiteDom.map((data, index) => {
          if (data === email.split("@")[1]) {
            count = count + 1;
          }
        });

        if (count === 0) {
          try {
            console.log("Hello world");
            
            const [result, field] = await connection.query("SELECT Phone, Email FROM registration;");
            console.log("from Db",result);
            var Ecount = 0
            var Pcount = 0
            result.map((data,index)=>{
              if(data.Email===email){
                Ecount = Ecount + 1;
              }
              if(data.Phone == phone){
                Pcount = Pcount + 1;
              }
            })

            console.log("Phone: ",Pcount,"Email: ",Ecount);
            

            if(Ecount== 0 && Pcount == 0){
              
              console.log(error);
              try {
                var Insert_SQL = "INSERT INTO `registration` ( `Name`, `Email`, `Phone`, `Company`, `Discreption`) VALUES ( '"+ClientData[0]+"', '"+ClientData[1]+"', '"+ClientData[2]+"', '"+ClientData[3]+"', '"+ClientData[4]+"');"
                const [result, field] = await connection.query(Insert_SQL);
                console.log(result);
                error = "You are action update";
                E = "C";
              } catch (error) {
                error = "Something breaking the process";
                E = "C";
              }
              
            }else if(Ecount !== 0){
              if(Pcount !== 0){
                error = "The entered Phone number and Email are already used";
                E = "EP";
              }else{
                error = "The entered Email is already used";
                E = "E";
              }
            }else if(Pcount !== 0){
              error = "The entered Phone number is already used";
              E = "P";
            }
            
          } catch (error) {
            console.log(error);
            
          }
        } else {
          error = "This email is not acceptable";
          E = "E";
        }
      } else {
        error = "The entered Email is wrog";
        E = "E";
      }
    }

    return NextResponse.json({ status: error, Alpha: E });
  } catch (err) {
    return NextResponse.json({ status: 404 });
  }
}
