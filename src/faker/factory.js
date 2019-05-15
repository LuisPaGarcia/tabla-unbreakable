import faker from 'faker';
function fakeData(quantity = 10) {
	return [
		Array(quantity)
			.fill()
			.map((x, i) => i)
			.map(() => ({
				id: faker.random.number(),
				nombre: faker.name.findName(),
				email: faker.internet.email(),
				card: faker.lorem.words()
			})),
		['id', 'nombre', 'email', 'card']
	];
}
export { fakeData };
