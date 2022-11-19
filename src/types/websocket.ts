export type TWSOrder = {
	_id: string;
	name: string;
	ingredients: ReadonlyArray<string>;
	status: 'created' | 'pending' | 'done';
	number: number;
	createdAt: string;
	updatedAt: string;
  };
