import Plus from '../../assets/plus.svg';

import './index.css';

function Form() {
  return (
    <form>
      <div className="form">
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar
          <img src={Plus} alt="icone de adicionar tarefa" />
        </button>
      </div>
    </form>
  );
}
export default Form;
