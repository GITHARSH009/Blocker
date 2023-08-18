const createstyle=(image)=>{
    return `<style>
    *{
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
    }
    .main{
        background:linear-gradient(rgba(113, 10, 113, 0.96),rgba(18, 18, 190, 0.892));
        background-position: cover;
        background-repeat: none;
        height: 100%;
        width: 100%;
        position: fixed;
    }
    .content{
        background: url(${image});
        width: 64%;
        height: 66%;
        box-shadow: 0 0 1.1rem aqua;
        border-radius: 5px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        margin-inline: auto;
        margin-top: 5rem;
        text-align: center;
        padding-inline: auto;
        padding-top: 7rem;
    }
    .content h1{
        font-size: 2.4rem;
        color: aqua;
        font-weight: bolder;
    }
    .content h3{
        margin-top: 1.3rem;
        font-size: 1.8rem;
        color:rgb(0, 250, 54);
        font-weight: bolder;
       backdrop-filter: blur(11px);
    }    
    </style>`;
};

const createhtml=()=>{
   return `<div class="main">
   <div class="content">
   <h1>Error 404 👻👻</h1>
   <h3>Get Back To Work 🔥🔥</h3>
   </div>`;
};

switch(window.location.hostname){
    case "www.youtube.com":
        document.head.innerHTML=createstyle("https://i.pinimg.com/originals/f9/13/57/f9135788c6aeeec438abb986f283936c.gif");
        document.body.innerHTML=createhtml();
    break;
    case "www.facebook.com":
        document.head.innerHTML=createstyle("https://cdn.dribbble.com/users/2459439/screenshots/5314041/gamerpeople1_3.gif");
        document.body.innerHTML=createhtml();
    break;
    case "www.netflix.com":
        document.head.innerHTML=createstyle("https://i.pinimg.com/originals/f9/13/57/f9135788c6aeeec438abb986f283936c.gif");
        document.body.innerHTML=createhtml();
    break;
    case "www.whatsapp.com":
        document.head.innerHTML=createstyle("https://cdn.dribbble.com/users/2459439/screenshots/5314041/gamerpeople1_3.gif");
        document.body.innerHTML=createhtml();
    break;
    case "web.whatsapp.com":
        document.head.innerHTML=createstyle("https://i.pinimg.com/originals/f9/13/57/f9135788c6aeeec438abb986f283936c.gif");
        document.body.innerHTML=createhtml();
    break;
    case "www.instagram.com":
        document.head.innerHTML=createstyle("https://i.pinimg.com/originals/f9/13/57/f9135788c6aeeec438abb986f283936c.gif");
        document.body.innerHTML=createhtml();
    break;
    case "www.jiocinema.com":
        document.head.innerHTML=createstyle("https://i.pinimg.com/originals/f9/13/57/f9135788c6aeeec438abb986f283936c.gif");
        document.body.innerHTML=createhtml();
    break;
    case "www.qorno.com":
        document.head.innerHTML=createstyle("https://i.pinimg.com/originals/f9/13/57/f9135788c6aeeec438abb986f283936c.gif");
        document.body.innerHTML=createhtml();
    break;
    case "www.theyarehuge.com":
        document.head.innerHTML=createstyle("https://i.pinimg.com/originals/f9/13/57/f9135788c6aeeec438abb986f283936c.gif");
        document.body.innerHTML=createhtml();
    break;
    case "www.pornktube.club":
        document.head.innerHTML=createstyle("https://i.pinimg.com/originals/f9/13/57/f9135788c6aeeec438abb986f283936c.gif");
        document.body.innerHTML=createhtml();
    break;
}