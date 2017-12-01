import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class BookDetail extends Component {
	render() {
		return (
			<div>Book Detail</div>
		);
	}
}

function mapStateToProps(state) {
	// whatever is returned
	// will show up as props inside booklist
	return {
		book: state.activeBook,
	};
}
// Anything returned from this function will end up as props
// on the booklist container
// function mapDispatchToProps(dispatch){
// 	// whenever selectBook is called
// 	// the result should be passed to
// 	// all of our reducers
// 	return bindActionCreators({selectBook: selectBook}, dispatch);
// }
// promote booklist from a component to a container
// it needs to know about this new dispatch method selectBook
// Make it available as a prop
export default connect(mapStateToProps)(BookDetail);