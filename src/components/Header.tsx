import { Link } from 'react-router-dom';
import whiteLogo from '../assets/whiteLogo.png';
import { useGameStore } from '../store/GameStore';
import type { DatasetName } from '../store/GameStore';
import { DatasetSelector } from './DatasetSelector';

const DATASET_DISPLAY: Record<DatasetName, { subtitle?: string; showLogo: boolean }> = {
	wyprawa1907_ZakazaneKopalnie: { showLogo: true },
	dziennik29_Przebudzenie: { subtitle: 'Przebudzenie', showLogo: false },
	dziennik29_WersjaPierwsza: { subtitle: 'Wersja Pierwsza', showLogo: false },
	dziennik29_Zapomnienie: { subtitle: 'Zapomnienie', showLogo: false },
};

const getBrandContent = (dataset: DatasetName) => {
	const config = DATASET_DISPLAY[dataset];
	
	if (config.showLogo) {
		return (
			<>
				<img src={whiteLogo} alt="Wyprawa 1907 Zakazane Kopalnie" />
			</>
		);
	}

	return (
		<>
			<span className="line">
				<h2>D</h2>
				<h3>ziennik</h3>
				<h2>29</h2>
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
				<Link className="brand" to={`/${selectedDataset}/0`} aria-label="Strona główna">
					{getBrandContent(selectedDataset)}
				</Link>
				<DatasetSelector />
			</div>
		</header>
	);
};

export default Header;
