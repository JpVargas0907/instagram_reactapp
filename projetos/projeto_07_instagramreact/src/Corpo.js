import Story from "./Story";
import Post from "./Post";
import Sidebar from "./Sidebar";

export default function Corpo(){
    return (
    <div class = "corpo">
        <div class = "esquerda">
            <div class="stories">
                <Story imagem = "assets/img/9gag.svg" usuario ="9gag"/>
                <Story imagem = "assets/img/meowed.svg" usuario ="meowed"/>
                <Story imagem = "assets/img/barked.svg" usuario ="barked"/>
                <Story imagem = "assets/img/nathanwpylestrangeplanet.svg" usuario ="nathanwpylestrangeplanet"/>
                <Story imagem = "assets/img/wawawicomics.svg" usuario ="wawawicomics"/>
                <Story imagem = "assets/img/respondeai.svg" usuario ="respondeai"/>
                <Story imagem = "assets/img/filomoderna.svg" usuario ="filomoderna"/>
                <Story imagem = "assets/img/memeriagourmet.svg" usuario ="memeriagourmet"/>

                <div class="setinha">
                  <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>

            <div class = "posts">
                <Post imagemUsuario = "assets/img/meowed.svg" nomeUsuario = "meowed" imagemPost = "assets/img/gato-telefone.svg"/>
                <Post imagemUsuario = "assets/img/meowed.svg" nomeUsuario = "meowed" imagemPost = "assets/img/gato-telefone.svg"/>
                <Post imagemUsuario = "assets/img/meowed.svg" nomeUsuario = "meowed" imagemPost = "assets/img/gato-telefone.svg"/>
            </div> 
        </div>
        <Sidebar />

        <div class="fundo-mobile">
        <ion-icon name="home"></ion-icon>
        <ion-icon name="search-outline"></ion-icon>
        <ion-icon name="add-circle-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
        </div>
    </div>
    );
}

