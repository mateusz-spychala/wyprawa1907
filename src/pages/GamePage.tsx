import Game from '../components/Game';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';
import wyprawa1907_ZakazaneKopalnieData from '../data/wyprawa1907_ZakazaneKopalnie.json';
import dziennik29_PrzebudzenieData from '../data/dziennik29_Przebudzenie.json';
import dziennik29_WersjaPierwszaData from '../data/dziennik29_WersjaPierwsza.json';
import dziennik29_ZapomnienieData from '../data/dziennik29_Zapomnienie.json';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header.tsx';
import { useGameStore, type IKey, type DatasetName } from '../store/GameStore.tsx';

const VALID_DATASETS: DatasetName[] = ['wyprawa1907_ZakazaneKopalnie', 'dziennik29_Przebudzenie', 'dziennik29_WersjaPierwsza', 'dziennik29_Zapomnienie'];

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
			setDataset('wyprawa1907_ZakazaneKopalnie', wyprawa1907_ZakazaneKopalnieData as Array<IKey>);
			setDataset('dziennik29_Przebudzenie', dziennik29_PrzebudzenieData as Array<IKey>);
			setDataset('dziennik29_WersjaPierwsza', dziennik29_WersjaPierwszaData as Array<IKey>);
			setDataset('dziennik29_Zapomnienie', dziennik29_ZapomnienieData as Array<IKey>);
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
