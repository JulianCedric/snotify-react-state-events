import React from 'react';

class SongItem extends React.Component {
    
    state = {
        likes: 0
    }

    handleLikesClick = () => {
        this.setState({likes: this.state.likes + 1})
    }

    render(){
    // console.log(this.props)
        return (
            <tr>
                <td>{this.props.title}</td>
                <td>{this.props.artist}</td>
                <td><button onClick={this.handleLikesClick}>Play Now</button></td>
                <td><button onClick={this.handleLikesClick}>Add to Queue</button></td>
                <td onClick={this.handleLikesClick}>{this.props.favorite ? "💚" : "♡"}</td>
                <td>Likes: {this.state.likes}</td>
            </tr>
        )
    }
}

export default SongItem;