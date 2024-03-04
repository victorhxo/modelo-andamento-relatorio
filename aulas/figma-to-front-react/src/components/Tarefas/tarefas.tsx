import Clipboard from '../../assets/clipboard.svg';

import './index.css';

function Tarefas() {
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
      <div className="empty">
        <img src={Clipboard} alt="icone de um caderno vazio" />
        <div>
          <p className="title">Você ainda não tem tarefas cadastradas</p>
          <p className="title-dois">
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tarefas;
