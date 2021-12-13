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
                <div class="mainInfo_search--idEvent">
                    <input type="text" placeholder="ID evento">
                </div>

                <div class="mainInfo_search--idEvent">
                    <input type="text" placeholder="ID evento">
                </div>
            </div>
            <div class="mainInfo_result"></div>
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



.main__ContentBanner{
    display:flex;
    flex-direction: column;
}

.container__mainContent{
    height:100%
}

.mainTitle{
    height:100px;
}

.container__mainBanner{
    height:50vh;
    overflow:hidden;
    width:100%;
}

.container__mainBanner img{
    height:fit-content;
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
    height:200px;
}

.mainInfo_search{
    height:200px;
}

</style>