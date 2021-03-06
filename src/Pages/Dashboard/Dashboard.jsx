import client2 from "../../Assets/cliente-2.png";
import barberShop from "../../Assets/barberShop.jpg";
import logoBarber from "../../Assets/logotipo_barbershop.svg";
import prof1 from "../../Assets/funcionarios/alexandre-cunha.png";
import prof2 from "../../Assets/funcionarios/alvaro-dias.png";
import prof3 from "../../Assets/funcionarios/jennifer-suzan.png";
import "./Dashboard.css";

export default function dashboard() {
  return (
    <div className="body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 navProfile">
            <img src={client2} alt="perfil" className="foto-perfil border-profile" />
            <div className="nav-info">
              <small className="boas-vindas">Bem vindo(a)!</small>
              <h2 className="cliente">João Gomes</h2>
              <p className="email">gomes@mail.com</p>
              <ul className="list-group">
                <li className="nav-lista">
                  <i className="fa fa-home fa-fw  menu"></i>Dashboard
                </li>
                <li className="nav-lista">
                  <i className="fa fa-bell fa-fw  menu"></i>Notificações
                </li>
                <li className="nav-lista">
                  <i class="fa fa-cog fa-fw  menu"></i>Preferências
                </li>
                <li className="logout">
                  <a
                    className="fas fa-sign-out-alt logout"
                    href="/login"
                    role="button"
                  >
                    Sair
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-7 px-lg-4">
            <div className="row barberInfo">
              <div className="col">
                <div className="logoBarbe">
                  <img src={logoBarber} alt="logoBarber" className="barberLogo"></img>
                </div>
              </div>

              <div>
                <div className="shopBarbe">
                  <img
                    src={barberShop}
                    alt="barberShop"
                    className="barbershop"
                  ></img>
                  <div></div>
                  <div className="col">
                    <div>
                      <p className="welcome">
                        A Barbershop é uma barbearia com mais de 12 anos de
                        serviços prestados e pode contar com os melhores
                        profissionais de São Paulo para te atender.
                      </p>
                    </div>
                    <div className="contato">
                      <a className="contact" href="" role="button">
                        Entrar em contato
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row disponiveis">
              <h2 className="prof">Profissionais Disponíveis</h2>
            </div>

            {/*Profissionais*/}
            <div className="row justify-content-around profissionais">
              {/*Profissional 1*/}
              <div className="col-4 professionalSchedule">
                <img src={prof1} alt="perfil" className="fotoPerfil"></img>
                <h5>Alexandre Cunha</h5>
                <p className="especialidade">Cabelo e barba</p>
                <a className="input-agenda" href="" role="button">
                  Verificar agenda
                </a>
              </div>

              {/*Profissional 2*/}
              <div className="col-4 professionalSchedule">
                <img src={prof2} alt="perfil" className="fotoPerfil"></img>
                <h5>Alvaro Dias</h5>
                <p className="especialidade">Aplque e Dread</p>
                <a className="input-agenda" href="" role="button">
                  Verificar agenda
                </a>
              </div>

              {/*Profissional 3*/}
              <div className="col-4 professionalSchedule">
                <img src={prof3} alt="perfil" className="fotoPerfil"></img>
                <h5>Jennifer Suzan</h5>
                <p className="especialidade">Corte e Aplique</p>
                <a className="input-agenda" href="" role="button">
                  Verificar agenda
                </a>
              </div>
            </div>
          </div>
          <div className="col-3 agendamentos">
            <p className="h2 tituloAgendamento">Meus Agendamentos</p>
            <p className="h5 date">Amanhã</p>

            <div className="mostly-customized-scrollbar">
              {/*<span>Agendamento 1</span>*/}
              <div className="row">
                <div className="col lista-agendamento">
                  <p className="service">Corte Simples</p>
                  <p className="service">08:00-08:30 AM</p>
                  <div className="detalhe">
                    <img src={prof1} alt="" className="fotoAgendamento"></img>
                    <button type="button" className="input-agendamento">
                      Cancelar agendamento
                    </button>
                  </div>
                </div>
              </div>
              {/*<span>Agendamento 2</span>*/}
              <div className="row">
                <div className="col lista-agendamento">
                  <p className="service">Corte Simples</p>
                  <p className="service">08:00-08:30 AM</p>
                  <div className="detalhe">
                    <img src={prof2} alt="" className="fotoAgendamento"></img>
                    <button type="button" className="input-agendamento">
                      Cancelar agendamento
                    </button>
                  </div>
                </div>
              </div>
              {/*<span>Agendamento 3</span>*/}
              <p className="h5">9 de março</p>
              <div className="row">
                <div className="col lista-agendamento">
                  <p className="service">Corte Simples</p>
                  <p class="service">08:00-08:30 AM</p>
                  <div className="detalhe">
                    <img src={prof3} alt="" className="fotoAgendamento"></img>
                    <button type="button" className="input-agendamento">
                      Cancelar agendamento
                    </button>
                  </div>
                </div>
              </div>
              {/*<span>Agendamento 4</span>*/}
              <p className="h5">10 de março</p>
              <div className="row">
                <div className="col lista-agendamento">
                  <p className="service">Corte Simples</p>
                  <p class="service">08:00-08:30 AM</p>
                  <div className="detalhe">
                    <img src={prof3} alt="" className="fotoAgendamento"></img>
                    <button type="button" className="input-agendamento">
                      Cancelar agendamento
                    </button>
                  </div>
                </div>
              </div>
              {/*<span>Agendamento 5</span>*/}
              <p className="h5">10 de março</p>
              <div className="row">
                <div className="col lista-agendamento">
                  <p className="service">Corte Simples</p>
                  <p class="service">08:00-08:30 AM</p>
                  <div className="detalhe">
                    <img src={prof3} alt="" className="fotoAgendamento"></img>
                    <button type="button" className="input-agendamento">
                      Cancelar agendamento
                    </button>
                  </div>
                </div>
              </div>
              {/*<span>Agendamento 6</span>*/}
              <p className="h5">10 de março</p>
              <div className="row">
                <div className="col lista-agendamento">
                  <p className="service">Corte Simples</p>
                  <p class="service">08:00-08:30 AM</p>
                  <div className="detalhe">
                    <img src={prof3} alt="" className="fotoAgendamento"></img>
                    <button type="button" className="input-agendamento">
                      Cancelar agendamento
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
