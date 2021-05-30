import client2 from '../../Assets/cliente-2.png'
import barberShop from '../../Assets/barberShop.jpg'
import logoBarber from '../../Assets/logotipo_barbershop.svg'
import img from '../../Assets/imagem.png'
import './Dashboard.css'


export default function dashboard() {
  return (
    <div className="body">
      <div class="container-fluid">
        <div class="row">
          <div class="col-2 navProfile">
            <img src={client2} alt="perfil" className="foto-perfil" />
            <div class="nav-info">
              <small class="boas-vindas">Bem vindo(a)!</small>
              <h2 class="cliente">João Gomes</h2>
              <p class="email">gomes@mail.com</p>
              <ul class="list-group">
                <li class="nav-lista"><i class="fa fa-home fa-fw  menu"></i>Dashboard</li>
                <li class="nav-lista"><i class="fa fa-bell fa-fw  menu"></i>Notificações</li>
                <li class="nav-lista"><i class="fa fa-cog fa-fw  menu"></i>Preferências</li>
              </ul>
            </div>
          </div>
          <div class="col-7 px-lg-4">
            <div class="row barberInfo">
              <div class="col ">
                <img src={barberShop} alt="barberShop" class="barbershop"></img>
              </div>
              <div class="col">
                <div>
                <img src={logoBarber} alt="logoBarber" class="barberLogo"></img>
                <p class="welcome">
                  A Barbershop é uma barbearia com mais de 12 anos de serviços prestados e pode contar com os
                  melhores
                  profissionais de São Paulo para te atender.
                </p>
                <p class="endereço">
                  Avenida Sapopemba, 1020 | São Paulo - SP | Atendimento das 9h às 21h.
                </p>
                <button type="button" class="btn btn-warning btn-plus">Entrar em contato</button>
                </div>
              </div>
            </div>
            <div class="row disponiveis">
              <h2 class="prof">Profissionais Disponíveis</h2>
            </div>

            {/*Profissionais*/}
            <div class="row justify-content-around profissionais">

              {/*Profissional 1*/}
              <div class="col-4 professionalSchedule">
                <img src={img} alt="perfil" class="fotoPerfil"></img>
                <p class="h5">
                  Nome do Barbeiro
                </p>
                <p>
                  Especialidade do Barbeiro
                </p>
                <button type="button" class="btn btn-warning input-agenda"> <a
                  href="#">Verificar agenda</a></button>
              </div>

              {/*Profissional 2*/}
              <div class="col-4 professionalSchedule">
                <img src={img} alt="perfil" class="fotoPerfil"></img>
                <p class="h5">
                  Nome do Barbeiro
                </p>
                <p>
                  Especialidade do Barbeiro
                </p>
                <button type="button" class="btn btn-warning input-agenda"> <a
                  href="#">Verificar agenda</a></button>
              </div>

              {/*Profissional 3*/}
              <div class="col-4 professionalSchedule">
                <img src={img} alt="perfil" class="fotoPerfil"></img>
                <p class="h5">
                  Nome do Barbeiro
                </p>
                <p>
                  Especialidade do Barbeiro
                </p>
                <button type="button" class="btn btn-warning input-agenda"> <a
                  href="#">Verificar agenda</a></button>
              </div>

              {/*Profissional 4*/}
              <div class="col-4 professionalSchedule">
                <img src={img} alt="perfil" class="fotoPerfil"></img>
                <p class="h5">
                  Nome do Barbeiro
                </p>
                <p>
                  Especialidade do Barbeiro
                </p>
                <button type="button" class="btn btn-warning input-agenda"> <a
                  href="#">Verificar agenda</a></button>
              </div>

              {/*Profissional 5*/}
              <div class="col-4 professionalSchedule">
                <img src={img} alt="perfil" class="fotoPerfil"></img>
                <p class="h5">
                  Nome do Barbeiro
                </p>
                <p>
                  Especialidade do Barbeiro
                </p>
                <button type="button" class="btn btn-warning input-agenda"> <a
                  href="#">Verificar agenda</a></button>
              </div>

              {/*Profissional 6*/}
              <div class="col-4 professionalSchedule">
                <img src={img} alt="perfil" class="fotoPerfil"></img>
                <p class="h5">
                  Nome do Barbeiro
                </p>
                <p>
                  Especialidade do Barbeiro
                </p>
                <button type="button" class="btn btn-warning input-agenda"> <a
                  href="#">Verificar agenda</a></button>
              </div>

            </div>
          </div>
          <div class="col-3 agendamentos">
            <p class="h2 tituloAgendamento">Meus Agendamentos</p>
            <p class="h5 date">Amanhã</p>
            {/*<span>Agendamento 1</span>*/}
            <div class="row">
              <div class="col lista-agendamento">
                <p class="service">Corte Simples</p>
                <p class="service">08:00-08:30 AM</p>
                <div class="detalhe">
                  <img src={img} alt="" class="fotoAgendamento"></img>
                  <button type="button" class="btn btn-warning btnDeletar">Deletar</button>
                </div>
              </div>
            </div>
            {/*<span>Agendamento 2</span>*/}
            <div class="row">
              <div class="col lista-agendamento">
                <p class="service">Corte Simples</p>
                <p class="service">08:00-08:30 AM</p>
                <div class="detalhe">
                  <img src={img} alt="" class="fotoAgendamento"></img>
                  <button type="button" class="btn btn-warning btnDeletar">Deletar</button>
                </div>
              </div>
            </div>
            {/*<span>Agendamento 3</span>*/}
            <p class="h5">9 de março</p>
            <div class="row">
              <div class="col lista-agendamento">
                <p class="service">Corte Simples</p>
                <p class="service">08:00-08:30 AM</p>
                <div class="detalhe">
                  <img src={img} alt="" class="fotoAgendamento"></img>
                  <button type="button" class="btn btn-warning btnDeletar">Deletar</button>
                </div>
              </div>              
            </div>
            {/*<span>Agendamento 4</span>
            <p class="h5">8 de março</p>
            <div class="row">
              <div class="col lista-agendamento">
                <p class="service">Corte Simples</p>
                <p class="service">08:00-08:30 AM</p>
                <div class="detalhe">
                  <img src={img} alt="" class="fotoAgendamento"></img>
                  <button type="button" class="btn btn-warning btnDeletar">Deletar</button>
                </div>
              </div>              
            </div>*/}

          </div>
        </div>

      </div>
    </div>
  )
}