// import mysql from "mysql2/promise"
// import { NextResponse } from "next/server";



// const connection = await mysql.createConnection({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE_NAME,
// })


// // export async function POST(request) {
// //     try {
// //         var sql = "SELECT * FROM ClientSideData;"
// //         const [results, fields] = await connection.query(sql)
// //         const Cdata = await request.json()
// //         console.log("FRom Client side:",Cdata);
// //         return NextResponse.json({status:"200"})
// //     } catch (error) {
// //         return NextResponse.json({status:"400"})
// //     }
// // }