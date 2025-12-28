import { Link } from 'react-router-dom';
import { useGameStore } from '../store/GameStore';

const Pagination = () => {
	const currentPage = useGameStore((state) => state.currentPage);
	const totalPages = useGameStore((state) => state.totalPages);
	const selectedDataset = useGameStore((state) => state.selectedDataset);
	const setValue = useGameStore((state) => state.setValue);

	const maxPages = 7;
	let start = Math.max(0, currentPage - Math.floor(maxPages / 2));
	let end = start + maxPages;

	if (end > totalPages) {
		end = totalPages;
		start = Math.max(0, end - maxPages);
	}

	const pageLinks = [];
	for (let i = start; i < end; i++) {
		pageLinks.push(
			<Link
				key={i}
				to={`/${selectedDataset}/${i}`}
				tabIndex={0}
				aria-label={`Strona ${i}`}
				className={i === currentPage ? 'active' : ''}
				aria-current={i === currentPage ? 'page' : undefined}
				onClick={() => {
					setValue('currentPage', i);
				}}
			>
				{i}
			</Link>
		);
	}

	const prevPage = Math.max(0, currentPage - 1);
	const nextPage = Math.min(totalPages - 1, currentPage + 1);

	return (
		<div className="pagination">
			<Link
				to={`/${selectedDataset}/${prevPage}`}
				className={`pagination-prev ${currentPage === 0 ? 'disabled' : ''}`}
				aria-label="Poprzednia strona"
				aria-disabled={currentPage === 0}
				onClick={(e) => {
					if (currentPage === 0) {
						e.preventDefault();
						return;
					}
					setValue('currentPage', prevPage);
				}}
			>
				«
			</Link>
			{pageLinks}
			<Link
				to={`/${selectedDataset}/${nextPage}`}
				className={`pagination-next ${currentPage === totalPages - 1 ? 'disabled' : ''}`}
				aria-label="Nastepna strona"
				aria-disabled={currentPage === totalPages - 1}
				onClick={(e) => {
					if (currentPage === totalPages - 1) {
						e.preventDefault();
						return;
					}
					setValue('currentPage', nextPage);
				}}
			>
				»
			</Link>
		</div>
	);
};

export default Pagination;
