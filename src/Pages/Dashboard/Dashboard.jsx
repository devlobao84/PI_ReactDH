import client2 from '../../Assets/cliente-2.png'
import barberShop from '../../Assets/barberShop.jpg'
import logoBarber from '../../Assets/logotipo_barbershop.svg'
import prof1 from '../../Assets/funcionarios/alexandre-cunha.png'
import prof2 from '../../Assets/funcionarios/alvaro-dias.png'
import prof3 from '../../Assets/funcionarios/jennifer-suzan.png'
import prof4 from '../../Assets/funcionarios/jennifer-suzan.png'
import prof5 from '../../Assets/funcionarios/alexandre-cunha.png'
import prof6 from '../../Assets/funcionarios/alexandre-cunha.png'
import './Dashboard.css'


export default function dashboard() {
  return (
    <div className="body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 navProfile">
            <img src={client2} alt="perfil" className="foto-perfil" />
            <div className="nav-info">
              <small className="boas-vindas">Bem vindo(a)!</small>
              <h2 className="cliente">João Gomes</h2>
              <p className="email">gomes@mail.com</p>
              <ul className="list-group">
                <li className="nav-lista"><i className="fa fa-home fa-fw  menu"></i>Dashboard</li>
                <li className="nav-lista"><i className="fa fa-bell fa-fw  menu"></i>Notificações</li>
                <li className="nav-lista"><i class="fa fa-cog fa-fw  menu"></i>Preferências</li>
              </ul>
            </div>
          </div>
          <div className="col-7 px-lg-4">
            <div className="row barberInfo">
              <div className="col ">
                <img src={barberShop} alt="barberShop" className="barbershop"></img>
              </div>
              <div className="col">
                <div>
                <img src={logoBarber} alt="logoBarber" className="barberLogo"></img>
                <p className="welcome">
                  A Barbershop é uma barbearia com mais de 12 anos de serviços prestados e pode contar com os
                  melhores
                  profissionais de São Paulo para te atender.
                </p>
                <div>
                    <button type="button" class="btn btn-warning btn-plus contact">Entrar em contato</button>
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
                <p className="h5">
                  Alexandre Cunha
                </p>
                <p>
                  Especialidade do Barbeiro
                </p>
                <button type="button" className="btn btn-warning input-agenda"> <a
                  href="#">Verificar agenda</a></button>
              </div>

              {/*Profissional 2*/}
              <div className="col-4 professionalSchedule">
                <img src={prof2} alt="perfil" className="fotoPerfil"></img>
                <p className="h5">
                  Nome do Barbeiro
                </p>
                <p>
                  Especialidade do Barbeiro
                </p>
                <button type="button" className="btn btn-warning input-agenda"> <a
                  href="#">Verificar agenda</a></button>
              </div>

              {/*Profissional 3*/}
              <div className="col-4 professionalSchedule">
                <img src={prof3} alt="perfil" className="fotoPerfil"></img>
                <p className="h5">
                  Nome do Barbeiro
                </p>
                <p>
                  Especialidade do Barbeiro
                </p>
                <button type="button" className="btn btn-warning input-agenda"> <a
                  href="#">Verificar agenda</a></button>
              </div>            
            
            </div>
          </div>
          <div className="col-3 agendamentos">
            <p className="h2 tituloAgendamento">Meus Agendamentos</p>
            <p className="h5 date">Amanhã</p>
            {/*<span>Agendamento 1</span>*/}
            <div className="row">
              <div className="col lista-agendamento">
                <p className="service">Corte Simples</p>
                <p className="service">08:00-08:30 AM</p>
                <div className="detalhe">
                  <img src={prof1} alt="" className="fotoAgendamento"></img>
                  <button type="button" className="input-agendamento">Verificar agenda</button>
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
                  <button type="button" className="input-agendamento">Verificar agenda</button>
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
                  <button type="button" className="input-agendamento">Verificar agenda</button>
                </div>
              </div>              
            </div>
            
          </div>
        </div>
      </div>      
      <div>
        <footer className="footer">
          <p className="endereço">
          Avenida Sapopemba, 1020 - São Paulo - SP | &copy; Copyright - Todos os Diretos Reservados - 2021  
          </p>
          <p className="cnpj">
          CNPJ: 010.0100/0001-01 | Atendimento das 9h às 21h.
          </p>          
        </footer>
      </div>
    </div>
  )
}