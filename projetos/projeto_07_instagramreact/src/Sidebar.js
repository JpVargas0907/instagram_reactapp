export default function Sidebar() {
  return (
    <div class="sidebar">
      <Usuario nomePerfil="catacomics" nomeUsuario="Catana" imagemPerfil="assets/img/catanacomics.svg" />

      <Sugestoes />

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>

  );
}

function Usuario(props) {
  return (
    <div class="usuario">
      <img src={props.imagemPerfil} alt="" />
      <div class="texto">
        <strong>{props.nomePerfil}</strong>
        {props.nomeUsuario}
      </div>
    </div>
  );
}

function Sugestoes() {
  const sugestoes = [
    {
      nomeUsuario: "João Paulo",
      imagemPerfil: "assets/img/catanacomics.svg"
    },
    {
      nomeUsuario: "Ana",
      imagemPerfil: "assets/img/catanacomics.svg"
    },
    {
      nomeUsuario: "João Paulo",
      imagemPerfil: "assets/img/catanacomics.svg"
    },
    {
      nomeUsuario: "João Paulo",
      imagemPerfil: "assets/img/catanacomics.svg"
    },
    {
      nomeUsuario: "João Paulo",
      imagemPerfil: "assets/img/catanacomics.svg"
    },
  ];

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestoes.map(sugestao =>
        <div class="sugestao">
          <div class="usuario">
            <img src={sugestao.imagemPerfil} alt="" />
            <div class="texto">
              <div class="nome">{sugestao.nomeUsuario}</div>
              <div class="razao">Segue você</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>
      )}
    </div>

  );
}