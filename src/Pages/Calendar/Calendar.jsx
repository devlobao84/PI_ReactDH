import client2 from '../../Assets/cliente-2.png'
import img from '../../Assets/imagem.png'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import imgCarrousel1 from '../../Assets/Carrousel-1.png'
import imgCarrousel2 from '../../Assets/Carrousel-2.png'
import imgCarrousel3 from '../../Assets/Carrousel-3.png'
import imgCarrousel4 from '../../Assets/Carrousel-4.png'
import prof1 from "../../Assets/funcionarios/alexandre-cunha.png";
import "./Calendar.css";


export default function calendar() {
  return (
    <div className="body">
      <div class="container-fluid">
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
                <li className="logout"><a className="fas fa-sign-out-alt logout" href="/login" role="button">
                    Sair
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-10 px-lg-4">
            <div className="row  carrousel bg-carrousel">
              <div className="col carrousel-professional">
                <img src={prof1} alt="barberShop" className="profilePhoto"></img>
                <h4 className="name-prof">Alexandre Cunha</h4>
                <small className="especialidade">
                  Especialista em corte
                </small>
                <br></br>
                <div> 
                  <a className="agendar" href="/dash/<%=barbeiro.id %>/checkout">Agendar</a>
                </div>
              </div>
              <div className="col carrousel-professional">
                <img src={imgCarrousel1} alt="carousel" className="carousel-img"></img>
                <p>Corte Total</p>
                <small>
                  Corte simples de cabelo com remoção total dos fios
                </small>
              </div>
              <div className="col carrousel-professional">
                <img src={imgCarrousel2} alt="carousel" className="carousel-img"></img>
                <p>Corte Simples</p>
                <small>
                  Corte simples de cabelo com remoção total dos fios
                </small>
              </div>
              <div className="col carrousel-professional">
                <img src={imgCarrousel3} alt="carousel" className="carousel-img"></img>
                <p>Corte na Tesoura</p>
                <small>
                  Corte simples de cabelo com remoção total dos fios
                </small>
              </div>
              <div className="col carrousel-professional">
                <img src={imgCarrousel4} alt="carousel" className="carousel-img"></img>
                <p>Corte Complexo</p>
                <small>
                  Corte simples de cabelo com remoção total dos fios
                </small>
              </div>
            </div>
            <div className="row schedule-area">
              <div className="col-8">
                <FullCalendar
                  plugins={[dayGridPlugin]}
                  initialView="dayGridMonth"
                  weekends={false}
                  events={[{ title: "event 1", date: "2021-05-25" },{ title: "event 2", date: "2019-04-02" },]}
                />
              </div>
              <div className="col-4 ScheduleList">
                <h3 className="Schedule-title">Agendamentos</h3>
                <div className="lista-agendamento-callendar">
                  <p cclassName="service">Corte Simples</p>
                  <p className="service">08:00-08:30 AM</p>
                  <div cclassName="detalhe">
                    <img src={img} alt="" className="fotoAgendamento"></img>
                    <button type="button" className="btn btn-warning btnDeletar">
                      Deletar
                    </button>
                  </div>
                </div>
                <div className="lista-agendamento-callendar">
                  <p className="service">Corte Simples</p>
                  <p className="service">08:00-08:30 AM</p>
                  <div className="detalhe">
                    <img src={img} alt="" className="fotoAgendamento"></img>
                    <button type="button" className="btn btn-warning btnDeletar">
                      Deletar
                    </button>
                  </div>
                </div>
                <div className="lista-agendamento-callendar">
                  <p className="service">Corte Simples</p>
                  <p className="service">08:00-08:30 AM</p>
                  <div className="detalhe">
                    <img src={img} alt="" className="fotoAgendamento"></img>
                    <button type="button" className="btn btn-warning btnDeletar">
                      Deletar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}