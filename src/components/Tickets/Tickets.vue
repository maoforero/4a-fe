<template>
   <div class="main__tickets">
        <div class="container__tickets">
            <div class="container__tickets--inputData">
                <h3> Crear Boletas </h3>
                <div class="tickets--inputDataUser">
                    <img class="inputDataUserImg"  src="../../assets/ticket.png"/>
                    <input type="text" placeholder="Tipo">
                </div>

                <div class="tickets--inputDataPass">
                    <img class="inputDataPassImg" src="../../assets/precio.png"/>
                    <input type="float" placeholder="Precio">
                </div>

                <div class="tickets--inputDataPass">
                    <img class="inputDataPassImg" src="../../assets/name.png"/>
                    <input type="text" placeholder="Nombre">
                </div>

                <div class="tickets--inputDataPass">
                    <img class="inputDataPassImg" src="../../assets/home.png"/>
                    <input type="text" placeholder="Dirección">
                </div>

                <div class="tickets--inputDataPass">
                    <img class="inputDataPassImg" src="../../assets/calendar.png"/>
                    <input type="Date" placeholder="Fecha">
                </div>

                <div class="tickets--inputDataPass">
                    <img class="inputDataPassImg" src="../../assets/time.png"/>
                    <input type="Time" placeholder="Hora">
                </div>

                <div class="tickets--inputDataPass">
                    <img class="inputDataPassImg" src="../../assets/world.png"/>
                    <input type="text" placeholder="País">
                </div>

                <div class="tickets--inputDataPass">
                    <img class="inputDataPassImg" src="../../assets/city.png"/>
                    <input type="text" placeholder="Ciudad">
                </div>

                <div class="tickets--inputDataPass">
                    <img class="inputDataPassImg" src="../../assets/organizer.png"/>
                    <input type="text" placeholder="Organizador">
                </div>

                <div class="tickets--buttons">
                    <div class="tickets--buttonsSession">
                        <button class="buttonsSession--tickets">Generar Boletas</button> 
                    </div>
                </div>
<<<<<<< HEAD

                <div class="mainImage">
                    <img class="mainImage"  src="../../assets/boleta.png" alt="">
                </div>

=======
                <div class="container__tickets--mainImage">
                    <img class="mainImage"  src="../../assets/boleta.png" alt="">
                </div>
>>>>>>> e4aca04ba64f71b1feaddcba0cc631ea1f1211ff
            </div>
        </div>           
    </div>
</template>

<script>
    export default{
        name: "Tickets",
        data: function () {},
        methods: {},
        created: function () {} 
    }

</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Tahoma
}

.main__tickets{
    height: auto;
    margin:45px;
    width: 100%;

}

.container__tickets{
    background-color:#F3F4ED;
    border: none;
    border-radius:25px;
    display: flex;
    height: 800px;
    justify-content: space-between;
    margin: auto;
    width: 840px;
}

/* imagen principal*/


.container__tickets--mainImage{
    align-items: center;
    background-color: rgba(39,174,96,1);
    border-radius: 25px;
    display:flex;
    justify-content:center;
<<<<<<< HEAD
    width:550px;
=======
    width:200px;
>>>>>>> e4aca04ba64f71b1feaddcba0cc631ea1f1211ff
}



.mainImage{
    height: 200px;
    width: 350px;
}


.container__tickets--inputData{
    align-self:center;
    display: flex;
    flex-direction: column;
    height:fit-content;
    justify-content:center;
    margin:0 auto;
    width:28%;
}


.tickets--inputDataUser, .tickets--inputDataPass{
    display: flex;
    flex-direction: row;
    height: fit-content;
    padding: 5px
}

.inputDataUserImg, .inputDataPassImg {
    align-self:center;
    border: 1px solid #6E7C7C;
    border-radius: 3px;
    display:flex;
    height:35px;
    justify-self:center;
    padding:6px;
    width:35px;
}

.tickets--inputDataUser > input{
    align-self: center;
    border: 1px solid  #6E7C7C;
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

.tickets--inputDataPass > input {
    align-self: center;
    border: 1px solid  #6E7C7C;
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

.tickets--buttons{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}

.tickets--buttonsSession{
    align-items:center; 
    display: flex;
    height:40px;
    justify-content:center;
    margin-left: 7px;
    width: 91%;
}

.tickets--buttonsSession > label{
    align-items:center;
    display:flex;
    justify-content:center;
}

.buttonsSession--remember > input{
    align-self: center;
    margin-right:2px;
}

.buttonsSession--tickets{
    background-color: #2ecc71;
    border: none;
    border-radius: 3px;
    border-bottom: 5px solid #27ae60;
    color: #FFF;
    cursor:pointer;
    float: left;
    font-size: 14px;
    font-weight:bold;
    height:43px;
    text-decoration: none;
    text-shadow: 0px -2px #27ae60;
    -webkit-transition: all 0.1s;
    transition: all 0.1s;
    width:170px;
}

.buttonsSession--tickets:hover, .buttonsSession--login:active {
    border-bottom: 1px solid #2ecc71;
    -webkit-transform: translate(0px,5px);
    -ms-transform: translate(0px,5px);
    transform: translate(0px,5px);
}

.tickets--buttonsLinks{
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    margin:13px 0 0 7px;
    width:91%
}

.tickets--buttonsLinks > p {
    color: rgba(24,179,2,1);
    cursor:pointer;
}
<<<<<<< HEAD

.tickets--buttonsLinks > p > a{
    font-size: 13px;
}

.tickets--buttonsLinks > p > a:hover{
    text-decoration: underline;
}

/* Buttons Social Media*/

.tickets--socialMedia{
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top:25px;
    justify-content: center;
}

.tickets--socialMedia > p {
    font-size: 12px;
    margin-bottom:10px;
    color: rgba(24,179,2,1);
    cursor:pointer;
}

.tickets--socialMedia > p:hover{
    text-decoration: underline;
}

.tickets--socialMedia > button {
    background-color: #2ecc71;
    border-radius: 3px;
    border: none;
    border-bottom: 5px solid #27ae60;
    color: #FFF;
    cursor:pointer;
    font-size: 14px;
    height: 28px;
    margin-top:9px;
    transition: all 0.1s;
    text-decoration: none;
    text-shadow: 0px -2px #27ae60;
    -webkit-transition: all 0.1s;
    width: 90%
}

.tickets--socialMedia > button:hover, .login--socialMedia > button:active {
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
=======
>>>>>>> e4aca04ba64f71b1feaddcba0cc631ea1f1211ff
</style>
