import React, { useState } from "react";

export default function Posts() {
  const posts = [{
    nomeUsuario: "uzumaki_naruto",
    imagemPerfil: "assets/img/narutin.jpeg",
    imagemPost: "assets/img/narutoxgaara.jpg",
    ultimaCurtida: "assets/img/respondeai.svg",
    ultimaCurtidaPerfilNome: "respondeai",
    quantidadeCurtidas: 1.129, 
    legendaUsuario: "Melhor do Mundo graças ao Deus pai!"
  },
  {
    nomeUsuario: "9gag",
    imagemPerfil: "assets/img/9gag.svg",
    imagemPost: "assets/img/gato-telefone.svg",
    ultimaCurtida: "assets/img/filomoderna.svg",
    ultimaCurtidaPerfilNome: "filomoderna",
    quantidadeCurtidas: 100.129, 
    legendaUsuario: "RECEBAAAA!!!"
  },
  {
    nomeUsuario: "meowed",
    imagemPerfil: "assets/img/meowed.svg",
    imagemPost: "assets/img/gato-telefone.svg",
    ultimaCurtida: "assets/img/nathanwpylestrangeplanet.svg",
    ultimaCurtidaPerfilNome: "mamaefalei",
    quantidadeCurtidas: 10.329, 
    legendaUsuario: "Fofinho!!!"
  }
  ];

  return (
    <div class="posts">
      {posts.map(post =>
        <Post nomeUsuario = {post.nomeUsuario} imagemPerfil = {post.imagemPerfil} imagemPost = {post.imagemPost} ultimaCurtida = {post.ultimaCurtida} quantidadeCurtidas = {post.quantidadeCurtidas} ultimaCurtidaPerfilNome = {post.ultimaCurtidaPerfilNome} legendaUsuario = {post.legendaUsuario} />
      )}
    </div>
  );

}

function Post(props) {

  let [isLiked, setIsLiked] = React.useState(false);

  return (
  <div class="post">
    <div class="topo">
      <div class="usuario">
        <img src={props.imagemPerfil} alt="" />
        {props.nomeUsuario}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div class="conteudo">
      <img onClick={() => setIsLiked(!isLiked)} src={props.imagemPost} alt="" />
    </div>

    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon onClick={() => setIsLiked(!isLiked)} name={isLiked ? "heart" : "heart-outline"}></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src={props.ultimaCurtida} alt="" />
        <div class="texto">
          Curtido por <strong>{props.ultimaCurtidaPerfilNome}</strong> e <strong>outras {props.quantidadeCurtidas} pessoas</strong>
        </div>
      </div>

      <div class="legenda">
        <strong>{props.nomeUsuario} </strong> {props.legendaUsuario}
      </div>
    </div>
  </div>
  );
}