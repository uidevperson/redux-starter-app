import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class BookDetail extends Component {
	render() {
		// return early if reducer state is null on start up
		if (!this.props.book){
			return (
				<div>Select a book</div>
			);
		}

		return (
			<div>
				<h3>Details for:</h3>
				<div>Title: {this.props.book.title}</div>
				<div>No. of pages: {this.props.book.pages}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	// whatever is returned
	// will show up as props inside bookdetail
	return {
		book: state.activeBook,
	};
}

// promote bookdetail from a component to a container
// it needs to know about this new dispatch method selectBook
// Make it available as a prop
export default connect(mapStateToProps)(BookDetail);