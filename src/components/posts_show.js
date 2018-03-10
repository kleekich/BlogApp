import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions';

class PostsShow extends Component{
	//it is called automatically once the component was render to the DOM.
	componentDidMount() {
		//We need to get id by accessing URL/provided by react-router
		const { id } = this.props.match.params;
		this.props.fetchPost(id);
	}

	render() {
		//this.props === ownProps
		
		const { post } = this.props;

		if(!post) {
			return <div>Loading....</div>;
		}

		return(
			<div>
				<Link to="/">Back to List</Link>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories} </h6>
				<p>{post.content}</p>
				<button className="btn btn-danger">Delete</button>
			</div>
		);
	}
}
//ownProps is prop's object that is going to component above.
function mapStateToProps( { posts }, ownProps){
	//We want to pass only single post that we are interested in
	return { post: posts[ownProps.match.params.id]};

}

export default connect(mapStateToProps, { fetchPost })(PostsShow);