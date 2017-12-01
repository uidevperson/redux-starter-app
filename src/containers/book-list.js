import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component {

	renderList(){
	console.log(this.props);
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item">
				{book.title}
				</li>
			);
		});
	}

	render(){
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	console.log(state);
	// whatever is returned
	// will show up as props inside booklist
	return {
		books: state.books,
		test: state.test
	};
}

export default connect(mapStateToProps)(BookList);