import React, { useState } from "react";
import "./Slide.css"
import { Card, CardHeader, CardText } from "react-bootstrap";

var j = 0;
export default function Slide() {
    var datas = [[{id:1,heading:"Slider Heading 1",Sub_heading:"Slider Sub Heading 1",img:require("./image/img1.jpg")}, {id:2,heading:"Slider Heading 2",Sub_heading:"Slider Sub Heading 2",img:require("./image/im2.jpg")}, {id:3 , heading:"Slider Heading 3",Sub_heading:"Slider Sub Heading 3",img:require("./image/img1.jpg")}], [{id:4 ,heading:"Slider Heading 4",Sub_heading:"Slider Sub Heading 4",img:require("./image/img1.jpg")}, {id:5 ,heading:"Slider Heading 5",Sub_heading:"Slider Sub Heading 5",img:require("./image/img1.jpg")}, { id:6 ,heading:"Slider Heading 6",Sub_heading:"Slider Sub Heading 6",img:require("./image/img1.jpg")}], [{ id:7,heading:"Slider Heading 7",Sub_heading:"Slider Sub Heading 7",img:require("./image/img1.jpg")}, {id:8 ,heading:"Slider Heading 8",Sub_heading:"Slider Sub Heading 8",img:require("./image/img1.jpg")}, {id:9 ,heading:"Slider Heading 9",Sub_heading:"Slider Sub Heading 9",img:require("./image/img1.jpg")}], [{id:10 ,heading:"Slider Heading 10",Sub_heading:"Slider Sub Heading 10",img:require("./image/img1.jpg")}, {id:11 ,heading:"Slider Heading 11",Sub_heading:"Slider Sub Heading 11",img:require("./image/img1.jpg")}, {id:12 ,heading:"Slider Heading 12",Sub_heading:"Slider Sub Heading 12",img:require("./image/img1.jpg")}]];
    const len= datas.length
    var [data, setData] = useState([{id:1,heading:"Slider Heading 1",Sub_heading:"Slider Sub Heading 1",img:require("./image/img1.jpg")}, {id:2, heading:"Slider Heading 2",Sub_heading:"Slider Sub Heading 2",img:require("./image/im2.jpg")}, {id:3,heading:"Slider Heading 3",Sub_heading:"Slider Sub Heading 3",img:require("./image/img1.jpg")}])

    const pre = () => {

        j = j - 1;
        console.log(j)
        if (j < 0) {
            data = []
            j = len-1;
            console.log("min");
            console.log(datas[j]);
            setData(data[0] = datas[j])
        } else if (j >= 0) {
            data[0] = []
            console.log(datas[j]);
            setData(data = datas[j])
        }
    }

    const Next = () => {
        console.log(len);
        
        j = j + 1;
        if (j > len-1) {
            console.log("max");
            data[0] = []
            console.log("data: " + data.toString)
            j = 0;
            setData(data = datas[j])
            console.log(datas[j]);
        } else if (j <= len-1) {
            data[0] = []
            console.log(datas[j]);
            setData(data = datas[j])
        }
    }

    return (
        <div >
            <div id="Slide_box" className="row">
                <div id="slider_1" className="col-1">
                    <button onClick={pre}>
                    <img alt="IMG" src={require("./image/next.png")}/>
                    </button>
                </div>
                <div id="slider_2" className="col-12">
                    <div key={"blogs"} id="blog_list" className="row">
                        {
                            data.map((res) => {

                                return (
                                    <Card key={res.id} id="blog_list_boxs" className="col-3">
                                        <img src={res.img} alt="N?A" className="back_blog_img" />
                                        <CardHeader  className="back_blog_head" ><h3>{res.heading}</h3></CardHeader>
                                        <CardText  className="back_blog_subH" >{res.heading}</CardText>
                                        
                                    </Card>
                                );
                            })
                        }
                    </div>
                </div>
                <div id="slider_3" className="col-1">
                    <button onClick={Next}>
                        <img alt="IMG" src={require("./image/next.png")}/>
                    </button>
                </div>
            </div>

        </div>
    );
}