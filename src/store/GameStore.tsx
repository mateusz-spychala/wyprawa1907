import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

export interface IKey {
	answer: string;
	key: string;
	tip: string;
	error?: string;
}

export type DatasetName = 'dziennik29' | 'dziennik29Przebudzenie' | 'dziennik29Zapomnienie';

interface IGameData {
	currentPage: number;
	keys: Array<IKey>;
	totalPages: number;
	result: string;
	correctAnswer: boolean;
	selectedDataset: DatasetName;
	datasets: Record<DatasetName, Array<IKey>>;
}

const initialState: IGameData = {
	currentPage: 0,
	keys: [],
	totalPages: 0,
	result: '',
	correctAnswer: false,
	selectedDataset: 'dziennik29',
	datasets: {
		dziennik29: [],
		dziennik29Przebudzenie: [],
		dziennik29Zapomnienie: [],
	},
};

interface IGameStore extends IGameData {
	setDataset: (datasetName: DatasetName, data: Array<IKey>) => void;
	setSelectedDataset: (datasetName: DatasetName) => void;
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
			setSelectedDataset: (datasetName) => {
				set((draft) => {
					draft.selectedDataset = datasetName;
					draft.keys = draft.datasets[datasetName];
					draft.totalPages = draft.datasets[datasetName].length;
					draft.currentPage = 0;
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
