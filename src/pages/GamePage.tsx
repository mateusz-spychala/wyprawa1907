import Game from '../components/Game';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';
import dziennik29Data from '../data/dziennik29.json';
import dziennik29PrzebudzenieData from '../data/dziennik29Przebudzenie.json';
import dziennik29ZapomnienieData from '../data/dziennik29Zapomnienie.json';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header.tsx';
import { useGameStore, type IKey, type DatasetName } from '../store/GameStore.tsx';

const VALID_DATASETS: DatasetName[] = ['dziennik29', 'dziennik29Przebudzenie', 'dziennik29Zapomnienie'];

const GamePage = () => {
	const { dataset, pageId } = useParams();
	const totalPages = useGameStore((state) => state.totalPages);
	const selectedDataset = useGameStore((state) => state.selectedDataset);
	const setValue = useGameStore((state) => state.setValue);
	const setDataset = useGameStore((state) => state.setDataset);
	const setSelectedDataset = useGameStore((state) => state.setSelectedDataset);
	const navigate = useNavigate();

	const datasetsLoaded = useRef(false);

	// Load datasets only once on mount
	useEffect(() => {
		if (!datasetsLoaded.current) {
			setDataset('dziennik29', dziennik29Data as Array<IKey>);
			setDataset('dziennik29Przebudzenie', dziennik29PrzebudzenieData as Array<IKey>);
			setDataset('dziennik29Zapomnienie', dziennik29ZapomnienieData as Array<IKey>);
			datasetsLoaded.current = true;
		}
	}, [setDataset]);

	// Handle routing and dataset selection
	useEffect(() => {
		if (!datasetsLoaded.current) return;

		// Handle dataset from URL or redirect to default
		if (dataset && VALID_DATASETS.includes(dataset as DatasetName)) {
			if (dataset !== selectedDataset) {
				setSelectedDataset(dataset as DatasetName);
			}
		} else {
			// Redirect to default dataset if URL is invalid or missing
			navigate(`/${selectedDataset}/${pageId || '0'}`, { replace: true });
			return;
		}

		// Update current page
		const id = Number(pageId);
		if (!isNaN(id) && id >= 0 && id < totalPages) {
			setValue('currentPage', id);
		} else {
			setValue('currentPage', 0);
		}
	}, [dataset, pageId, selectedDataset, totalPages, setSelectedDataset, setValue, navigate]);

	return (
		<>
			<Header />
			<Game />
			<Footer />
		</>
	);
};

export default GamePage;
