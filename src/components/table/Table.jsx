//@ts-check
import React, { Component } from 'react';
import { Icon, Menu, Table, Input } from 'semantic-ui-react';
import { fakeData } from '../../faker/factory';
import { swipper } from '../../faker/swipper';
const [data, headers] = fakeData(1000);
console.log(headers, Object.assign([], headers).splice(-1, 1));
class TablaUnbreakable extends Component {
	state = {
		data,
		filtrado: [],
		headers: { ...swipper(headers) }
	};

	busqueda = (query, columna) => {
		let resultado = this.state.data.filter((o) => {
			return o[columna]
				.toString()
				.toLowerCase()
				.includes(query.toLowerCase());
		});
		return resultado;
	};

	cambiaTitulo = (e, { name, value }) => {
		var bus = this.busqueda(value, name);
		this.setState((state) => {
			let headers = state.headers;
			return {
				headers: { ...headers, [name]: value },
				filtrado: bus
			};
		});
	};

	header = () => (
		<Table.Header>
			<Table.Row>
				<Table.HeaderCell colSpan={headers.length - 1} />
				<Table.HeaderCell>
					{this.state.filtrado.length} de {this.state.data.length}
				</Table.HeaderCell>
			</Table.Row>
			<Table.Row>
				{headers.map((h) => (
					<Table.HeaderCell key={h}>
						<Input name={h} fluid onChange={this.cambiaTitulo} value={this.state.headers[h]} />
					</Table.HeaderCell>
				))}
			</Table.Row>
			<Table.Row>
				{headers.map((h) => (
					<Table.HeaderCell key={h}>{h}</Table.HeaderCell>
				))}
			</Table.Row>
		</Table.Header>
	);

	content = () => {
		let data = this.state.filtrado.length > 0 ? this.state.filtrado : this.state.data;
		return (
			<Table.Body>
				{data.map((line, i) => (
					<Table.Row key={line.id + '-' + i}>
						<Table.Cell>{line.id}</Table.Cell>
						<Table.Cell>{line.nombre}</Table.Cell>
						<Table.Cell>{line.email}</Table.Cell>
						<Table.Cell>{line.card}</Table.Cell>
					</Table.Row>
				))}
			</Table.Body>
		);
	};

	footer = () => (
		<Table.Footer>
			<Table.Row>
				<Table.HeaderCell colSpan={headers.length}>
					<Menu floated="right" pagination>
						<Menu.Item as="a" icon>
							<Icon name="chevron left" />
						</Menu.Item>
						<Menu.Item as="a">1</Menu.Item>
						<Menu.Item as="a">2</Menu.Item>
						<Menu.Item as="a">3</Menu.Item>
						<Menu.Item as="a">4</Menu.Item>
						<Menu.Item as="a" icon>
							<Icon name="chevron right" />
						</Menu.Item>
					</Menu>
				</Table.HeaderCell>
			</Table.Row>
		</Table.Footer>
	);

	render() {
		console.log(this.state.headers);
		return (
			<Table celled>
				{this.header()}
				{this.content()}
				{this.footer()}
			</Table>
		);
	}
}

export { TablaUnbreakable };
