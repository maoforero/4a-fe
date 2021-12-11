<template>
    <div class="main__login">
        <div class="container__login">
            <div class="container__login--inputData">
                <div class="login--inputDataUser">
                    <img class="inputDataUserImg"  src="../../assets/user.png"/>
                    <input type="text">
                </div>
                <div class="login--inputDataPass">
                    <img class="inputDataPassImg" src="../../assets/key.png"/>
                    <input type="password">
                </div>
                <div class="login--buttons">
                    <div class="login--buttonsSession">
                        <label class="buttonsSession--remember" for=""><input type="checkbox">Recordarme</label>
                        <button class="buttonsSession--login">Iniciar Sesion</button> 
                    </div>
                    <div class="login--buttonsLinks"></div>
                </div>
                <div class="login--socialMedia">
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
}

.main__login{
    height: 100vh;
    width: 100%;

}

.container__login{
    border: 1px solid black;
    display: flex;
    height: 550px;
    margin: auto;
    padding: 20px;
    width: fit-content;
}

/* imagen principal*/

.mainImage{
    height: 430px;
    width: 430px;
}


.container__login--inputData{
    aling-content: center;
    display: flex;
    flex-direction: column;
    width:auto
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
    padding:2px;
    width:35px
}

.login--inputDataUser > input{
    align-self: center;
    border: 1px solid black;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    height: 35px;
    justify-self: center;
    margin: 5px;
    width: auto
}

.login--inputDataPass > input {
    align-self: center;
    border: 1px solid black;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    height: 35px;
    justify-self: center;
    margin: 5px;
    width: auto
}

.login--buttons{

}

.login--socialMedia{
    display: flex;
    flex-direction: column;
    height: 100px;
}


/* Buttons Social Media*/

.login--socialMedia{
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.login--socialMedia > button {
    height: 60px;
    width: 90%

}

</style>