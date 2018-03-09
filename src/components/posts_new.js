import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {


	renderTitleField(field) {
		return (

			<div>
				<input
				/*
				onChange={field.input.onChange}
				onFocus={field.input.onFocus}
				onBlur= {field.input.onBlur}
				*/
					{...field.input}
				}
				/>
			</div>

		);

	}
	render() {

		return (
			<form>
				<Field
					name="title"
					component={this.renderTitleField}
				/>
			</form>


		);

	}
}

export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew);