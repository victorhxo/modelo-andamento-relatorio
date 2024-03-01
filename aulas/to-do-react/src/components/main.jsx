import { Component } from 'react';

import './main.css';
import Form from './Form';
import Tarefas from './Tarefas';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;

    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas !== prevState.tarefas) {
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }
  }

  handleSubmit = (evento) => {
    evento.preventDefault();

    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: ''
      });
    } else {
      novasTarefas[index] = novaTarefa;
      this.setState({
        tarefas: [...novasTarefas],
        index: -1
      });
    }
  };

  handleChange = (evento) => {
    this.setState({ novaTarefa: evento.target.value });
  };

  handleEdit = (evento, index) => {
    this.setState({
      index,
      novaTarefa: this.state.tarefas[index]
    });
  };

  handleDelete = (evento, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({ tarefas: [...novasTarefas] });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <Form
          novaTarefa={novaTarefa}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
