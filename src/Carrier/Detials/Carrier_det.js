import React from 'react'
import Carrier_data from '../Data/Data_Carrier';

export default function Carrier_det() {
  var url = window.location.pathname;
  var urls = url.split("/");
  const urlid = urls[urls.length - 1];
  console.log(Carrier_data.length);
  var i = 0;
  while(Carrier_data.length>i){
    if(Carrier_data[i].id==urlid){
      console.log(i);
      break;
    }
    i = i + 1;
  }

  console.log("final i:"+i);
  
  
  return (
    <div>{Carrier_data[i].heading}</div>
  )
}
