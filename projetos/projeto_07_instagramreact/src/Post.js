export default function Posts() {
  const posts = [{
    nomeUsuario: "9gag",
    imagemPerfil: "assets/img/9gag.svg",
    imagemPost: "assets/img/gato-telefone.svg"
  },
  {
    nomeUsuario: "9gag",
    imagemPerfil: "assets/img/9gag.svg",
    imagemPost: "assets/img/gato-telefone.svg"
  },
  {
    nomeUsuario: "9gag",
    imagemPerfil: "assets/img/9gag.svg",
    imagemPost: "assets/img/gato-telefone.svg"
  }
  ];

  function likePost(elemento){
    elemento.classList.toogle(".liked");
    console.log("Agora deveria estar vermelho");
  };

  return (
    <div class="posts">
      {posts.map(post =>
        <div class="post">
          <div class="topo">
            <div class="usuario">
              <img src={post.imagemPerfil} alt="" />
              {post.nomeUsuario}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img onClick = {() => likePost(this)} src={post.imagemPost} alt="" />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon onClick = {() => likePost(this)} name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src="assets/img/respondeai.svg" alt="" />
              <div class="texto">
                Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  );
}
