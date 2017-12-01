export function selectBook(book) {
	// selectbook is an action creator
	// it needs to return an action
	// which is an object with type property
	return {
		type: 'BOOK_SELECTED',
		payload: book,
	}
}
