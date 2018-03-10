import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';


class PostsShow extends Component{
	//it is called automatically once the component was render to the DOM.
	componentDidMount() {
		//We avoid fetching data twice for the post 
		if(!this.props.posts){
			//We need to get id by accessing URL/provided by react-router
			const { id } = this.props.match.params;
			this.props.fetchPost(id);
		}

	}

	onDeleteClick() {
		const { id } = this.props.match.params;
		this.props.deletePost(id, () => {
			//This callback function is passed to deletePost action
			this.props.history.push('/');
		});
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
				<button 
					className="btn btn-danger pull-xs-right"
					onClick={this.onDeleteClick.bind(this)}
				>
				Delete</button>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories} </h6>
				<p>{post.content}</p>
				
			</div>
		);
	}
}
//ownProps is prop's object that is going to component above.
function mapStateToProps( { posts }, ownProps){
	//We want to pass only single post that we are interested in
	return { post: posts[ownProps.match.params.id]};

}

export default connect(mapStateToProps, { fetchPost , deletePost })(PostsShow);