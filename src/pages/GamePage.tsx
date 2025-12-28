import Game from '../components/Game';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';
import wyprawa1907_ZakazaneKopalnieData from '../data/wyprawa1907_ZakazaneKopalnie.json';
import dziennik29_PrzebudzenieData from '../data/dziennik29_Przebudzenie.json';
import dziennik29_WersjaPierwszaData from '../data/dziennik29_WersjaPierwsza.json';
import dziennik29_ZapomnienieData from '../data/dziennik29_Zapomnienie.json';
import { useParams } from 'react-router-dom';
import Header from '../components/Header.tsx';
import { useGameStore, type IKey, type DatasetName } from '../store/GameStore.tsx';

const VALID_DATASETS: ValidDatasetName[] = ['wyprawa1907_ZakazaneKopalnie', 'dziennik29_Przebudzenie', 'dziennik29_WersjaPierwsza', 'dziennik29_Zapomnienie'];

type ValidDatasetName = Exclude<DatasetName, ''>;

const GamePage = () => {
	const { dataset, pageId } = useParams();
	const totalPages = useGameStore((state) => state.totalPages);
	const selectedDataset = useGameStore((state) => state.selectedDataset);
	const setValue = useGameStore((state) => state.setValue);
	const setDataset = useGameStore((state) => state.setDataset);
	const setSelectedDataset = useGameStore((state) => state.setSelectedDataset);

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

		// Handle dataset from URL
		if (dataset && VALID_DATASETS.includes(dataset as ValidDatasetName)) {
			const validDataset = dataset as ValidDatasetName;
			const targetPage = Number(pageId);
			const validPage = !isNaN(targetPage) && targetPage >= 0 ? targetPage : 0;

			if (validDataset !== selectedDataset) {
				// When switching datasets or initializing from URL, pass the target page
				setSelectedDataset(validDataset, validPage);
			} else if (totalPages > 0) {
				// Update current page when navigating within same dataset
				if (validPage < totalPages) {
					setValue('currentPage', validPage);
				} else {
					setValue('currentPage', 0);
				}
			}
		} else if (!dataset || dataset === '') {
			// No dataset in URL - stay on empty state to show "Wybierz zestaw"
			// Don't redirect, let user select
		}
		// navigate is stable from React Router and doesn't need to be in deps
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dataset, pageId, selectedDataset, totalPages, setSelectedDataset, setValue]);

	return (
		<>
			<Header />
			<Game />
			<Footer />
		</>
	);
};

export default GamePage;
