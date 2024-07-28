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
      <div ref={this.state.id} className="col-lg-6">
        <Link
          to={"/website/services/"+this.state.id}
          className="S_link"
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
              <Card.Title style={{ fontSize: 27 }}>
                {this.state.Heading}
              </Card.Title>
              <Card className="I_S_card" style={{ padding: 10, marginTop: 10 }}>
                <CardText id="ser_link">{this.state.Pera}</CardText>
              </Card>
            </Card>
          </div>
        </Link>
      </div>
    );
  }
}
