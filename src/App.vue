<template>
    <header>
        <div id="container__header">
            <div id="container__icon">
                <img class="icono_navBar"  src="./assets/movie-frame.png" alt="logo de premiere">
                <span id="icon__span">Premiere</span>
            </div>
            <nav id="container__menu">
                <ul id="menu--list">
                    <li class="list--option"><a href="">Inicio</a></li>
                    <li class="list--option"><a href="">Eventos</a></li>
                    <li class="list--option"><a href="">Tickets</a></li>
                    <li class="list--option"><a href="">Ventas</a></li>
                    <li class="list--option"><a href="">Perfil</a></li>
                </ul>
            </nav>
        </div>
    </header>
    
    <router-view></router-view>
    
    <footer>
        <div class="cointer__footer__description">
            <div class="footer__description--logo">
                <img src="https://www.misiontic2022.gov.co/746/channels-645_logo_misiontic.png" alt="logo mision tic">
            </div>
            <div class="footer__description__info">
                <p>Web development project for MisionTic2022. Universidad Nacional de Colombia. </p>
            </div>
        </div>
        <div class="cointer__footer__team">
            <h6>Members</h6>
            <a href="" class="footer__team--profile">Forero Mauro</a>
            <a href="" class="footer__team--profile">Herrera Nicolle</a>
            <a href="" class="footer__team--profile">Paula</a>
        </div>
        <div class="cointer__footer__media">
            <h6>Social Media</h6>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">Bitbucket</a>
        </div>
    </footer>
</template>

<script>
  export default{
      name: "App",
      data: function() {},
      methods:{
        LoadLogin(){
          this.$router.push({name: "login"})
        }

      },
      created: function (){
        this.LoadLogin()
      }
  }
</script>

<style>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Tahoma;
    height:100%
}

#app{
  display:flex;
  flex-direction: column;
  height:100%;
  justify-content:space-between;
}

html{
    background-color: #DDDDDD ;
    height:100%;
}

/* Header CSS */
header{
    background-color: #DDDDDD;
    border-radius: 0 0 9px 9px;
    height:fit-content;
    position: sticky;
    top: 0;
    z-index: 6;
}

#container__header{
    display: flex;
    flex-direction: row;
    height:fit-content;
    justify-content: space-between;
}

#container__icon{
    align-items: center;
    display: flex;
    flex-direction: row;
    height:fit-content;
    margin: 20px 65px 20px 65px;
    width: 250px;
}

.icono_navBar{
  width:37px;
}

#container__icon span{
    color: #000;
    font-size: 21px;
    font-weight: bold;
    margin-left:9px;
}


#container__menu{
    align-items: center;
    display: flex;
    height:fit-content;
    justify-content: center;
    margin: 20px 65px 20px 65px;
}

#menu--list{
    align-items: center;
    display: flex;
    justify-content: center;
    list-style: none;
}

#menu--list li a{
    color: #000;
    font-size: 19px;
    margin-left: 25px;
    padding: 15px;
    text-decoration: none;
}

#menu--list li a:hover {
    color:  #27ae60;
}

/* Footer */

footer{
    background-color: #27ae60;
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: space-around;
    height: 20%;
    width: 100%;
}

footer div.cointer__footer__description{
    height:fit-content;
    margin: 20px 0 10px 25px;
    padding: 10px;
    width: 25vw;
}

.footer__description--logo img{
    height: 125px;
    padding: 5px;
    width: auto;
}

.footer__description__info{
    display:flex;
    margin-top: 5px;
    
}

.footer__description__info p{
    color: white;
    text-align: justify;
    font-size: 16px;
    width: 35vh;
}

footer div.cointer__footer__team{
    display: flex;
    flex-direction: column;
    height:fit-content;
    margin: 65px 0 10px 45px;
    width: 15vw;
}

footer div.cointer__footer__team h6{
    color: white;
    font-size: 25px;
}

footer div.cointer__footer__team a{
    color: white;
    font-size: 16px;
    margin-top:3px;
    text-decoration: none;
}

footer div.cointer__footer__media{
    display: flex;
    flex-direction: column;
    font-size: 16px;
    height:fit-content;
    margin: 65px 0 10px 45px;
    width: 15vw;
}

footer div.cointer__footer__media h6{
    color: white;
    font-size: 25px;
}

footer div.cointer__footer__media a{
    color: white;
    font-size: 16px;
    margin-top:3px;
    text-decoration: none;
}
</style>