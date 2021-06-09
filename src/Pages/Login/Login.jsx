import img from '../../Assets/ilustracao.svg'
import logo from '../../Assets/logo.svg'
import './Login.css'


export default function login() {
  return (
    <div className="body">
      <div class="container">
        <div class="row">
          <div className="col-7 welcome">
            <h1>Seja bem-vindo!</h1> <br></br>
            <p>
              Faça login com seu usuário e senha e aproveite ao máximo o
              sistema da Wally!
            </p>{" "}
            <br></br>
            <br></br>
            <img class="ilustra" src={img} alt="Ilustração"></img>
          </div>
          <div class="col-5 mw-100 div-form div-res">
            <div>
              <div class="cadastro">
                <span className="cadastro">Login</span>
              </div>
              <form action="/login" method="POST">
                <div className="row res-row">
                  <small
                    id="passwordHelpBlock"
                    class="form-text text-muted descricao"
                  >
                    Endereço de e-mail
                  </small>
                  <input
                    type="email"
                    id="inputPassword5"
                    class="form-control input-maior"
                    aria-describedby="passwordHelpBlock"
                    name="email"
                  ></input>
                  <small
                    id="passwordHelpBlock"
                    class="form-text text-muted descricao"
                  >
                    Senha
                  </small>
                  <input
                    type="password"
                    id="inputPassword5"
                    class="form-control input-maior"
                    aria-describedby="passwordHelpBlock"
                    name="senha"
                  ></input>
                  <small
                    id="passwordHelpBlock"
                    class="form-text text-muted descricao"
                  >
                    Manter Logado
                    <input type="checkbox" name="lembreLogado"></input>
                  </small>
                  <div>
                    <button type="submit" class="btn btn-warning input-maior">
                      Efetuar login
                    </button>
                  </div>
                  <div className="logo">
                    <img
                      src={logo}
                      alt="logo do site"
                      className="logotipo logo-res"
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