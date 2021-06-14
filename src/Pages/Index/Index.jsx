import ilustracao from "../../Assets/ilustracao.svg";
import logo from "../../Assets/logo.svg";
import "./Index.css";

export default function index() {
  return (
    <div className="body">
      <div className="container">
        <div className="row">
          <div className="col-7 welcome">
            <h1>Seja bem-vindo!</h1> <br></br>
            <p>
              Antes de tudo, efetue seu login. <br></br>
              Caso você ainda não possua um cadastro, pode criar um!
            </p>
            <img className="ilustra" src={ilustracao} alt="Illustração"></img>
          </div>
          <div className="col-5 mw-100 div-form div-res">
            <div>
              <div className="cadastro">
                <span className="cadastro">Cadastre-se</span>
                {/*<span>Login</span>*/}
              </div>
              <form action="/login" method="POST">
                <div className="row res-row">
                  <div className="col formulario">
                    <small id="passwordHelpBlock" className="descricao">
                      Nome
                    </small>
                    <input
                      type="text"
                      name="nome"
                      className="form-control input-nome"
                      placeholder="Nome"
                    ></input>
                  </div>
                  <div className="col">
                    <small id="passwordHelpBlock" className="descricao">
                      Sobrenome
                    </small>
                    <input
                      type="text"
                      name="sobrenome"
                      className="form-control input-sobrenome"
                      placeholder="Sobrenome"
                    ></input>
                  </div>
                  <small
                    id="passwordHelpBlock"
                    className="form-text text-muted descricao"
                  >
                    Endereço de e-mail
                  </small>
                  <input
                    type="email"
                    name="email"
                    id="inputPassword5"
                    className="form-control input-maior"
                    placeholder="E-mail"
                    aria-describedby="passwordHelpBlock"
                  ></input>
                  <small
                    id="passwordHelpBlock"
                    className="form-text text-muted descricao"
                  >
                    Senha
                  </small>
                  <input
                    type="password"
                    name="senha"
                    id="inputPassword5"
                    className="form-control input-maior"
                    placeholder="Senha"
                    aria-describedby="passwordHelpBlock"
                  ></input>
                  <small
                    id="passwordHelpBlock"
                    className="form-text text-muted descricao"
                  >
                    Confirmar senha
                  </small>
                  <input
                    type="password"
                    id="inputPassword5"
                    className="form-control input-maior"
                    placeholder=" Confirmar senha"
                    aria-describedby="passwordHelpBlock"
                  ></input>
                  <div className="buttons">
                    <button type="submit" class="btn btn-warning btn-create">
                      Criar nova conta
                    </button>
                    <button type="text" class="btn btn-warning btn-account">
                      Já tenho conta
                    </button>
                  </div>
                  <div className="logo">
                    <img
                      src={logo}
                      alt="logo do site"
                      className="logotipo"
                    ></img>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
