import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class PostsIndex extends Component {

	//React-life cyle method call When this component is ready to be rendered
	componentDidMount() {
		this.props.fetchPosts();
	}


	render() {
		return (

			<div>
				Posts Index
			</div>

		);
	}
}

export default connect(null, { fetchPosts })(PostsIndex);