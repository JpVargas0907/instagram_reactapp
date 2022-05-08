export default function Sidebar (){
    return (
        <div class = "sidebar">
            <div class="usuario">
              <img src="assets/img/catanacomics.svg" alt=""/>
              <div class="texto">
                <strong>catanacomics</strong>
                Catana
              </div>
            </div>
            
            <div class = "sugestoes">
              <div class="titulo">
                Sugestões para você
              <div>Ver tudo</div>
              </div> 

              <Sugestao imagemPerfil = "assets/img/catanacomics.svg" nome = "Beto" />
              <Sugestao imagemPerfil = "assets/img/catanacomics.svg" nome = "Beto" />
              <Sugestao imagemPerfil = "assets/img/catanacomics.svg" nome = "Beto" />
              <Sugestao imagemPerfil = "assets/img/catanacomics.svg" nome = "Beto" />
            </div>

            <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>

    );
}

function Sugestao(props){
  return (
    <div class="sugestao">
    <div class="usuario">
      <img src={props.imagemPerfil} alt=""/>
      <div class="texto">
        <div class="nome">{props.nome}</div>
        <div class="razao">Segue você</div>
      </div>
    </div>

    <div class="seguir">Seguir</div>
  </div>
  );
}