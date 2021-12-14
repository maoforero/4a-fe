<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;500&display=swap" rel="stylesheet">

    <div class="container__mainContent">
        <div class="main__ContentBanner">
            <div class="container__mainBanner">
                <img class="mainBanner" src="../../assets/events_banner3.jpg" alt="banner principal, imagen promicional" />
            </div>
            <h1 class="mainTitle">EVENTOS </h1>
        </div>
        <div class="container__mainInfo">
            <div class="mainInfo_search">
                <h6 id="searchTitlee">Filtro de busqueda: </h6>
                <div class="mainInfo_search--idEvent">
                    <p>Buscar por ID</p>
                    <input type="text" placeholder="ID evento">
                </div>
                <div class="mainInfo_search--idName">
                    <p>Buscar por nombre</p>
                    <input type="text" placeholder="Evento">
                </div>
            </div>
            <div class="mainInfo_result">
                <h6 id="ResultTitle">Resultados:</h6>
            
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "events",
        data: function() {},
        methods:{},
        created: function (){}
    }
</script>

<style>

*{
    box-sizing: border-box;
    font-family: 'Oswald', sans-serif;
    margin: 0;
    padding: 0;
}

.container__mainContent{
    display:flex;
    flex-direction:column;
    height:fit-content;
}

.main__ContentBanner{
    height:100vh;
    display:flex;
    flex-direction: column;
}

.mainTitle{
    height:100px;
}

.container__mainBanner{
    height:100%;
    overflow:hidden;
    object-fit: fill;
    width:100%;
}

.container__mainBanner img{
    position:bottom;
    width:100%;
}

.mainTitle{
    align-self:center;
    color:white;
    display:flex;
    font-size:350px;
    font-family: 'Oswald', sans-serif;
    margin:0 auto;
    position: absolute;
    
}

.container__mainInfo{
    background-color:#f8f8f7;
    height:fit-content;
    margin:0 auto;
    width: 80vw;
}

.mainInfo_search{
    display:flex;
    flex-direction:column;
    height:fit-content;
}

#searchTitlee{
    font-size:50px;
    margin:25px 0 10px 65px;
}

.mainInfo_search--idEvent, .mainInfo_search--idName {
    font-size:28px;
    margin:25px 0 10px 65px;
}

.mainInfo_search--idEvent > input, .mainInfo_search--idName > input{
    border:none;
    font-size:21px;
    height:53px;
    margin-top: 10px;
    padding: 10px;
    width:200px;
}

#ResultTitle{
    font-size:50px;
    margin:25px 0 10px 65px;
}
</style>