"use client";
import { useEffect } from "react";

import axios from "axios";

export default function page() {
  axios.get("api/posts").then(
    (res)=>{
      console.log(res.data);
      
    }
  )
  return (
    <div>page</div>
  )
}
