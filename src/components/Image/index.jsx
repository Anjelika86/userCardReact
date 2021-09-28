import { Component } from "react";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = { isError: false };
  }
  imageHandler = () => {
    this.setState({ isError: true });
  };

  render() {
    const { src, alt, title } = this.props;
    const { isError } = this.state;
    const initails = alt
      .trim()
      .split(" ")
      .map((word) => word[0])
      .join(" ");

    return (
      <div className="imgWrapper">
        {src !== null && !isError ? (
          <img
            className="img"
            src={src}
            alt={alt}
            title={title}
            onError={this.imageHandler}
          />
        ) : (
          <div className="initails">{initails}</div>
        )}
      </div>
    );
  }
}
export default Image;
