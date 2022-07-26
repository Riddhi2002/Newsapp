import React, { Component } from "react";

export class NewItem extends Component {
  render() {
    let { title, description, imgURL, newsUrl } = this.props;
    return (
      <>
        <div className="container">
          <div className="card my-3" style={{ width: "18rem" }}>
            <img src={imgURL} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-dark"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewItem;
