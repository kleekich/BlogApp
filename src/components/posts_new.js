import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {


	renderField(field) {
		return (


			<div className="form-group">
				<label> {field.label} </label>
				<input
				className="form-control"
				type="text"
				/*
				onChange={field.input.onChange}
				onFocus={field.input.onFocus}
				onBlur= {field.input.onBlur}
				*/
					{...field.input}
				
				/>
				{field.meta.error}
			</div>

		);

	}

	render() {
		return (
			<form>
				<Field
					label="Title"
					name="title"//it is connect to in validate function errors.title
					component={this.renderField}
				/>
				<Field
					label="Tags"
					name="tags"
					component={this.renderField}
				/>
				<Field
					label="Post Content"
					name="tags" 
					component={this.renderField}
				/>
			</form>


		);

	}
}


function validate(values) {
	//consol.log(values) -> {title: 'asdf', categories: 'asdf', content: 'asd'}

	const errors = {};

	//Validate the inputs from 'values'
	if (!values.title){
		errors.title = "Enter a title that is at least 3 characters!";
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

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(PostsNew);