import React from 'react';

class PortfolioItem extends React.Component {
  buttonRenderer(buttonText, buttonUrl, i){
    return <a key={i} href={buttonUrl} target="_blank">View on {buttonText}</a>
  }

  render() {
    return (
      <div className="item">
        <article>
          <h3>{this.props.title}</h3>
          <img src={this.props.imgUrl} />
          <p>
            {this.props.description}
          </p>
          {this.props.buttons.map((item, i)=>this.buttonRenderer(item.label, item.url, i))}
        </article>



      </div>
    );
  }

}

export default PortfolioItem;
