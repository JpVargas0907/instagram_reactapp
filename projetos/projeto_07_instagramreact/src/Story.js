export default function Stories() {
  const usuarios = [{
    nome: "9gag",
    imagemPerfil: "assets/img/9gag.svg"
  },
  {
    nome: "meowed",
    imagemPerfil: "assets/img/meowed.svg"
  },
  {
    nome: "barked",
    imagemPerfil: "assets/img/barked.svg"
  },
  {
    nome: "nathanwpylestrangeplanet",
    imagemPerfil: "assets/img/nathanwpylestrangeplanet.svg"
  },
  {
    nome: "respondeai",
    imagemPerfil: "assets/img/respondeai.svg"
  },
  {
    nome: "wawawicomics",
    imagemPerfil: "assets/img/wawawicomics.svg"
  },
  {
    nome: "memeriagourmet",
    imagemPerfil: "assets/img/memeriagourmet.svg"
  },
  {
    nome: "meowed",
    imagemPerfil: "assets/img/9gag.svg"
  }
  ];

  return (
    <div class="stories">
      {usuarios.map(usuario =>
        <div class="story">
          <div class="imagem">
            <img src= {usuario.imagemPerfil} />
          </div>
          <div class="usuario">
            {usuario.nome}
          </div>
        </div>
      )}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}