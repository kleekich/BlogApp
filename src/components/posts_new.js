import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost} from '../actions';



class PostsNew extends Component {
	renderField(field) { 
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<div className={className}>
				<label> {field.label} </label>
				<input
					className="form-control"
					type="text"
					{...field.input}
				/>
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	onSubmit(values) {
		//this === component
		this.props.createPost(values);
	}

	render() {
		const { handleSubmit } = this.props; //this.props is provided on behalf of redux-form
		return (
			//handleSubmit is for redux-side handling such as validation, 
			//If it is ok, then, it calls onSubmit that we defined.
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="Title"
					name="title"//it is connect to in validate function errors.title
					component={this.renderField}
				/>
				<Field
					label="Categories"
					name="categories"
					component={this.renderField}
				/>
				<Field
					label="Post Content"
					name="content" 
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to='/' className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}


function validate(values) {
	//consol.log(values) -> {title: 'asdf', categories: 'asdf', content: 'asd'}

	const errors = {};

	//Validate the inputs from 'values'
	if (!values.title){
		errors.title = "Enter a title!";
	}
	if(!values.categories) {
		errors.categories = "Enter some categories";
	}
	if(!values.content){
		errors.content = "Enter some content";
	}	

	//If error is empty, the redux assumes that there is no error
	//If errors has *any* properties, redux form assumes form in invalid
	return errors;
}


//wired up reduxForm to PostsNew
export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(
	connect(null, { createPost })(PostsNew)
	);