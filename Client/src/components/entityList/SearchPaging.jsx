import React, {PropTypes} from 'react'

require('../../styles/modules/common/searchPaging.scss');

const SearchList = ({i18n, amount, page, before, after, getPage}) => {
	let pagesBefore = Math.ceil(before / page);
	let pagesAfter = Math.ceil(after / page);
	let pagesTotal = pagesBefore + 1 + pagesAfter;
	let currentPage = pagesBefore + 1;
	return (
		<div className="searchPaging">
			<button disabled={!amount || !pagesBefore}
							onClick={() => getPage(0)}>{i18n('App.paging.first')}</button>
			<button disabled={!amount || !pagesBefore}
							onClick={() => getPage(currentPage - 2)}>{i18n('App.paging.previous')}</button>

			<span className={"pagesInfo" + (!amount ? " disabled": "")}>
				<span className="current">{currentPage}</span><span
				className="delimiter">{i18n('App.paging.delimiter')}</span><span className="total">{pagesTotal}</span>
			</span>

			<button disabled={!amount || !pagesAfter}
							onClick={() => getPage(currentPage)}>{i18n('App.paging.next')}</button>
			<button disabled={!amount || !pagesAfter}
							onClick={() => getPage(pagesTotal - 1)}>{i18n('App.paging.last')}</button>
		</div>
	)
};

SearchList.propTypes = {
	i18n: PropTypes.func.isRequired,
	amount: PropTypes.number,
	page: PropTypes.number,
	before: PropTypes.number,
	after: PropTypes.number,
	getPage: PropTypes.func.isRequired
};

export default SearchList