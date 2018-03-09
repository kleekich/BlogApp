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
			</div>

		);

	}

	render() {
		return (
			<form>
				<Field
					label="Title"
					name="title"
					component={this.renderField}
				/>
				<Field
					label="Tags"
					name="tags"
					component={this.renderField}
				/>
			</form>


		);

	}
}

export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew);