import React, { Component } from "react";
import { Card, CardImg, CardText } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./services.css";
export default class Services extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.state = {
      id: this.props.id,
      Heading: this.props.heading,
      Pera: this.props.pera,
      img: this.props.img,
    };
    return (
      <div ref={this.state.id} className="col-4">
        <Link
          to={"/website/services/"+this.state.id}
          id="S_link"
          style={{ textDecoration: "none" }}
        >
          <div id="ser">
            <Card
              className="S_card"
              style={{
                padding: 10,
              }}
            >
              <div className="SH_img">
                <CardImg
                  src={this.props.img}
                  style={{ width: "36%" }}
                ></CardImg>
              </div>
              <div  id="S_BOX_HEADING">
                {this.state.Heading}
              </div>
             
            </Card>
          </div>
        </Link>
      </div>
    );
  }
}
