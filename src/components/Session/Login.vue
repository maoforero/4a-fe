<template>
    <div class="main__login">
        <div class="container__login">
            <div class="container__login--inputData">
                <div class="login--inputDataUser">
                    <img class="inputDataUserImg"  src="../../assets/user.png"/>
                    <input type="text" placeholder="Usuario">
                </div>
                <div class="login--inputDataPass">
                    <img class="inputDataPassImg" src="../../assets/key.png"/>
                    <input type="password" placeholder="Contraseña">
                </div>
                <div class="login--buttons">
                    <div class="login--buttonsSession">
                        <label class="buttonsSession--remember" for=""><input type="checkbox">Recordarme</label>
                        <button class="buttonsSession--login">Iniciar Sesion</button> 
                    </div>
                    <div class="login--buttonsLinks">
                        <p><a>Registrarme</a></p>
                        <p><a>Recuperar contraseña</a></p>
                    </div>
                </div>
                <hr class="line">
                <div class="login--socialMedia">
                    <p>Iniciar sesión con:</p>
                    <button class="socialMedia--buttonGoogle">Google</button>
                    <button class="socialMedia--buttonTwitter">Twitter</button>
                    <button class="socialMedia--buttonFacebook">Facebook</button>
                </div>
            </div>
            <div class="container__login--mainImage">
                <img class="mainImage"  src="../../assets/secureLogin.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Tahoma
}

.main__login{
    height: 100vh;
    width: 100%;

}

.container__login{
    background-color:#F3F4ED;
    border: none;
    border-radius:25px;
    display: flex;
    height: 550px;
    justify-content: space-between;
    margin: auto;
    width: 840px;
}

/* imagen principal*/


.container__login--mainImage{
    align-items: center;
    background-color: rgba(24,179,2,1);
    border-radius: 25px;
    display:flex;
    justify-content:center;
    width:550px;
}



.mainImage{
    height: 430px;
    width: 430px;
}


.container__login--inputData{
    align-self:center;
    display: flex;
    flex-direction: column;
    justify-content:center;
    margin:0 auto;
    width:28%;
}


.login--inputDataUser, .login--inputDataPass{
    display: flex;
    flex-direction: row;
    height: fit-content;
    padding: 5px
}

.inputDataUserImg, .inputDataPassImg {
    align-self:center;
    border: 1px solid black;
    border-radius: 3px;
    display:flex;
    height:35px;
    justify-self:center;
    padding:6px;
    width:35px;
}

.login--inputDataUser > input{
    align-self: center;
    border: 1px solid black;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    font-size:1.2rem;
    height: 35px;
    justify-self: center;
    margin: 5px;
    padding-left:5px;
    width: 85%;
}

.login--inputDataPass > input {
    align-self: center;
    border: 1px solid black;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    font-size:1.2rem;
    height: 35px;
    justify-self: center;
    margin: 5px;
    padding-left:5px;
    width: 85%;
}

.login--buttons{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}

.login--buttonsSession{
    align-items:center; 
    display: flex;
    height:40px;
    justify-content:space-between;
    margin-left: 7px;
    width: 91%;
}

.buttonsSession--remember > input{
    align-self: center;
    margin-right:2px;
}

.buttonsSession--login{
    background-color: #2ecc71;
    border: none;
    border-radius: 3px;
    border-bottom: 5px solid #27ae60;
    color: #FFF;
    cursor:pointer;
    float: left;
    font-size: 12px;
    height:30px;
    text-decoration: none;
    text-shadow: 0px -2px #27ae60;
    -webkit-transition: all 0.1s;
    transition: all 0.1s;
    width:100px;
}

.buttonsSession--login:hover, .buttonsSession--login:active {
    border-bottom: 1px solid #2ecc71;
    -webkit-transform: translate(0px,5px);
    -ms-transform: translate(0px,5px);
    transform: translate(0px,5px);
}

.login--buttonsLinks{
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    margin:13px 0 0 7px;
    width:91%
}

.login--buttonsLinks > p {
    color: rgba(24,179,2,1);
    cursor:pointer;
}

.login--buttonsLinks > p > a{
    font-size: 12px;
}

.login--buttonsLinks > p > a:hover{
    text-decoration: underline;
}

/* Buttons Social Media*/

.login--socialMedia{
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top:5px;
    justify-content: center;
}

.login--socialMedia > p {
    font-size: 12px;
    margin-bottom:10px;
}

.login--socialMedia > button {
    background-color: #2ecc71;
    border-radius: 3px;
    border: none;
    border-bottom: 5px solid #27ae60;
    color: #FFF;
    cursor:pointer;
    font-size: 12px;
    height: 28px;
    margin-top:9px;
    transition: all 0.1s;
    text-decoration: none;
    text-shadow: 0px -2px #27ae60;
    -webkit-transition: all 0.1s;
    width: 90%
}

.login--socialMedia > button:hover, .login--socialMedia > button:active {
    -webkit-transform: translate(0px,5px);
    -ms-transform: translate(0px,5px);
    transform: translate(0px,5px);
    border-bottom: 1px solid #2ecc71;
}

.line{
    background-color: #000;
    border-radius:5px;
    height: 3px;
    margin-top:15px;
}

</style>