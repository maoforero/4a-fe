<template>
   <div class="main__ticketByID">
        <div class="container__ticketByID">
            <div class="container__ticketByID--inputData">
                <h3> Buscar Ticket </h3>
                <div class="ticketByID--inputDataID">
                    <img class="inputDataUserImg"  src="../../assets/ticket.png"/>
                    <input type="text" placeholder="ID:">
                </div>
                <div class="ticketByID--inputDataName">
                    <img class="inputDataPassImg" src="../../assets/name.png"/>
                    <input type="text" placeholder="Nombre Organizador:">
                </div>
            </div>
        </div>           
    </div>
</template>

<script>
    export default{
        name: "TicketByID",
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

.main__ticketById{
    height: auto;
    margin:45px;
    width: 100%;

}

.container__ticketByID{
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


.container__ticketByID--mainImage{
    align-items: center;
    background-color: rgba(39,174,96,1);
    border-radius: 25px;
    display:flex;
    justify-content:center;
    width:550px;
}

.mainImage{
    height: 200px;
    width: 350px;
}

.container__ticketByID--inputData{
    align-self:center;
    display: flex;
    flex-direction: column;
    height:fit-content;
    justify-content:center;
    margin:0 auto;
    width:28%;
}


.ticketByID--inputDataID, .tickets--inputDataName{
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

.ticketByID--inputDataID > input{
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

.ticketByID--inputDataName > input {
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

.ticketByID--buttons{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}

</style>
