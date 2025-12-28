import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

export interface IKey {
	answer: string;
	key: string;
	tip?: string;
	answerDescription?: string;
	error?: string;
}

export type DatasetName = 'wyprawa1907_ZakazaneKopalnie' | 'dziennik29_Przebudzenie' | 'dziennik29_WersjaPierwsza' | 'dziennik29_Zapomnienie' | '';

interface IGameData {
	currentPage: number;
	keys: Array<IKey>;
	totalPages: number;
	result: string;
	correctAnswer: boolean;
	selectedDataset: DatasetName;
	datasets: Record<Exclude<DatasetName, ''>, Array<IKey>>;
}

const initialState: IGameData = {
	currentPage: 0,
	keys: [],
	totalPages: 0,
	result: '',
	correctAnswer: false,
	selectedDataset: '',
	datasets: {
		wyprawa1907_ZakazaneKopalnie: [],
		dziennik29_Przebudzenie: [],
		dziennik29_WersjaPierwsza: [],
		dziennik29_Zapomnienie: [],
	},
};

interface IGameStore extends IGameData {
	setDataset: (datasetName: Exclude<DatasetName, ''>, data: Array<IKey>) => void;
	setSelectedDataset: (datasetName: Exclude<DatasetName, ''>, initialPage?: number) => void;
	setValue: <K extends keyof IGameStore>(key: K, value: IGameStore[K]) => void;
	reset: () => void;
}

export const useGameStore = create<IGameStore>()(
	devtools(
		immer((set) => ({
			...initialState,
			setDataset: (datasetName, data) => {
				set((draft) => {
					draft.datasets[datasetName] = data;
				});
			},
			setSelectedDataset: (datasetName, initialPage = 0) => {
				set((draft) => {
					draft.selectedDataset = datasetName;
					draft.keys = draft.datasets[datasetName];
					draft.totalPages = draft.datasets[datasetName].length;
					draft.currentPage = initialPage;
					draft.result = '';
					draft.correctAnswer = false;
				});
			},
			setValue: (key, value) => {
				set((draft) => {
					(draft[key] as typeof value) = value;
				});
			},
			reset: () => {
				set({ ...initialState });
			},
		}))
	)
);
