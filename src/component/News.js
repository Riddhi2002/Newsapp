import React, { Component } from "react";
import NewItem from "./NewItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let URL =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3cd62d605ff84db1ae6adc979f07a356&pageSize=totalResults";
    let data = await fetch(URL);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let URL = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3cd62d605ff84db1ae6adc979f07a356&page=${
        this.state.page + 1
      }&pageSize=totalResults`;
      console.log(URL);
      let data = await fetch(URL);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
      });
    }
  };

  handlePreviousClick = async () => {
    let URL = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3cd62d605ff84db1ae6adc979f07a356&page=${
      this.state.page - 1
    }&pageSize=totalResults`;
    console.log(URL);
    let data = await fetch(URL);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
    });
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h2>NewsApp- Catch all the HeadLines Here</h2>
          <div className="row my-3">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewItem
                    title={element.title ? element.title.slice(0, 45) : " "}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : " "
                    }
                    imgURL={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://img.etimg.com/thumb/msid-93068268,width-1070,height-580/photo.jpg"
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handlePreviousClick}
              disabled={this.state.page <= 1}
            >
              &larr;Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
              }
            >
              Next&rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
