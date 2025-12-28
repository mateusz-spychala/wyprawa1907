import { useGameStore } from '../store/GameStore';
import type { DatasetName } from '../store/GameStore';
import { useNavigate } from 'react-router-dom';

const DATASET_DISPLAY_NAMES: Record<DatasetName, string> = {
	wyprawa1907_ZakazaneKopalnie: 'Zakazane Kopalnie',
	dziennik29_Przebudzenie: 'Przebudzenie',
	dziennik29_WersjaPierwsza: 'Wersja Pierwsza',
	dziennik29_Zapomnienie: 'Zapomnienie',
};

export const DatasetSelector = () => {
	const selectedDataset = useGameStore((state) => state.selectedDataset);
	const setSelectedDataset = useGameStore((state) => state.setSelectedDataset);
	const navigate = useNavigate();

	const handleDatasetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const newDataset = event.target.value as DatasetName;
		setSelectedDataset(newDataset);
		navigate(`/${newDataset}/0`);
	};

	return (
		<div className="dataset-selector">
			<label htmlFor="dataset-select">Wybierz zestaw:</label>
			<select
				id="dataset-select"
				value={selectedDataset}
				onChange={handleDatasetChange}
			>
				{(Object.keys(DATASET_DISPLAY_NAMES) as DatasetName[]).map((dataset) => (
					<option key={dataset} value={dataset}>
						{DATASET_DISPLAY_NAMES[dataset]}
					</option>
				))}
			</select>
		</div>
	);
};
