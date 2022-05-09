export default function Stories() {
  const usuarios = [{
    nome: "9gag",
    imagemPerfil: "assets/img/9gag.svg"
  },
  {
    nome: "meowed",
    imagemPerfil: "assets/img/9gag.svg"
  },
  {
    nome: "meowed",
    imagemPerfil: "assets/img/9gag.svg"
  },
  {
    nome: "meowed",
    imagemPerfil: "assets/img/9gag.svg"
  },
  {
    nome: "meowed",
    imagemPerfil: "assets/img/9gag.svg"
  },
  {
    nome: "meowed",
    imagemPerfil: "assets/img/9gag.svg"
  },
  {
    nome: "meowed",
    imagemPerfil: "assets/img/9gag.svg"
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