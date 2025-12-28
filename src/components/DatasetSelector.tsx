import { useGameStore } from '../store/GameStore';
import type { DatasetName } from '../store/GameStore';
import { useNavigate } from 'react-router-dom';

type ValidDatasetName = Exclude<DatasetName, ''>;

const DATASET_DISPLAY_NAMES: Record<ValidDatasetName, string> = {
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
		if (newDataset === '') return; // Don't do anything if "Wybierz zestaw" is selected
		setSelectedDataset(newDataset as ValidDatasetName);
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
				<option value="">Wybierz zestaw</option>
				{(Object.keys(DATASET_DISPLAY_NAMES) as ValidDatasetName[]).map((dataset) => (
					<option key={dataset} value={dataset}>
						{DATASET_DISPLAY_NAMES[dataset]}
					</option>
				))}
			</select>
		</div>
	);
};
