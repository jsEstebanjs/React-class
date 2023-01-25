import './index.css'
import React from 'react'

class Card extends React.Component{
    render() {
        return (
             <div>
                <h2>{this.props.name}</h2>
                <img  src={this.props.image} alt={`imagen de ${this.props.name}`} />
             </div>
        );
    }
}
export default Card