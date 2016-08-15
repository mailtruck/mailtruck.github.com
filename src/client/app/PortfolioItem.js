import React from 'react';
import Markdown from 'react-remarkable';

class PortfolioItem extends React.Component {
  buttonRenderer(buttonText, buttonUrl, i){
    return <a className="button" key={i} href={buttonUrl} target="_blank">View on {buttonText}</a>
  }

  render() {
    return (
      <div className="item">
        <article>
          <h3>{this.props.title}</h3>
          <img src={this.props.imgUrl} />

            <Markdown>{this.props.description}</Markdown>
          
          {this.props.buttons.map((item, i)=>this.buttonRenderer(item.label, item.url, i))}
        </article>



      </div>
    );
  }

}

export default PortfolioItem;
