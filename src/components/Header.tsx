import { Link } from 'react-router-dom';
import { useGameStore } from '../store/GameStore';
import type { DatasetName } from '../store/GameStore';
import { DatasetSelector } from './DatasetSelector';

const DATASET_DISPLAY: Record<DatasetName, { title: string; subtitle: string }> = {
	'': { title: '', subtitle: '' },
	wyprawa1907_ZakazaneKopalnie: { title: 'Wyprawa 1907', subtitle: 'Zakazane Kopalnie' },
	dziennik29_Przebudzenie: { title: 'Dziennik 29', subtitle: 'Przebudzenie' },
	dziennik29_WersjaPierwsza: { title: 'Dziennik 29', subtitle: 'Wersja Pierwsza' },
	dziennik29_Zapomnienie: { title: 'Dziennik 29', subtitle: 'Zapomnienie' },
};

const getBrandContent = (dataset: DatasetName) => {
	const config = DATASET_DISPLAY[dataset];
	
	if (!config.title) return null;
	
	return (
		<>
			<span className="line">
				<h2>{config.title}</h2>
			</span>
			<h4 className="subtitle">{config.subtitle}</h4>
		</>
	);
};

const Header = () => {
	const selectedDataset = useGameStore((state) => state.selectedDataset);

	return (
		<header className="header">
			<div className="nav">
				{selectedDataset ? (
					<Link className="brand" to={`/${selectedDataset}/0`} aria-label="Strona główna">
						{getBrandContent(selectedDataset)}
					</Link>
				) : (
					<div className="brand">
						<span className="line">
							<h2>Wybierz zestaw gry</h2>
						</span>
					</div>
				)}
				<DatasetSelector />
			</div>
		</header>
	);
};

export default Header;
