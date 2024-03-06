import Clipboard from '../../assets/clipboard.svg';
import Uncheck from '../../assets/uncheck.svg';
import Trashcan from '../../assets/trashcan.svg';

import './index.css';

interface Tarefa {
  id: number;
  nome: string;
}

function Tarefas() {
  const tarefas: Tarefa[] = [];

  tarefas.push({
    id: 1,
    nome: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  });
  tarefas.push({
    id: 2,
    nome: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  });
  tarefas.push({
    id: 3,
    nome: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  });
  tarefas.push({
    id: 4,
    nome: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  });
  tarefas.push({
    id: 5,
    nome: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  });

  return (
    <div>
      <div className="container">
        <section>
          <span className="titulo-criadas">Tarefas criadas</span>
          <span className="contador-criadas">0</span>
        </section>
        <section>
          <span className="titulo-concluidas">Concluídas</span>
          <span className="contador-concluidas">0 de 0</span>
        </section>
      </div>
      {tarefas.length === 0 ? (
        <div className="empty">
          <img src={Clipboard} alt="icone de um caderno vazio" />
          <div>
            <p className="title">Você ainda não tem tarefas cadastradas</p>
            <p className="title-dois">
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        </div>
      ) : (
        <div>
          {tarefas.map((tarefa, index) => (
            <div className="tasks" key={index}>
              <div className="left-content">
                <button>
                  <img
                    src={Uncheck}
                    alt="icone de um check para selecionar tarefa concluida"
                  />
                </button>
                <p className="task-text">{tarefa.nome}</p>
              </div>
              <button>
                <img
                  src={Trashcan}
                  alt="icone de uma lixeira para deletar tarefa"
                />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Tarefas;
