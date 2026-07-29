/* =========================
   NXT NEXTGEN STYLE
========================= */


*{
    box-sizing:border-box;
}


html,body{

    margin:0;

    width:100%;

    height:100%;

    background:#050008;

    color:#fff;

    font-family:monospace;

    overflow:hidden;

}



body::before{

    content:"";

    position:fixed;

    inset:0;

    background:
    radial-gradient(circle at top,#4b0082,transparent 45%),
    radial-gradient(circle at bottom,#150020,transparent 50%);

    z-index:-1;

}



/* =========================
   INTRO
========================= */


#intro{

    position:fixed;

    inset:0;

    display:flex;

    justify-content:center;

    align-items:center;

    background:#000;

    z-index:999;

}



#intro video{

    width:70%;

    max-width:900px;

    max-height:65vh;

    object-fit:contain;

    border-radius:20px;

    box-shadow:
    0 0 40px #b000ff;

}





/* =========================
   BOOTSCREEN
========================= */


#boot{

    height:100vh;

    display:flex;

    justify-content:center;

    align-items:center;

}




#main{

    width:85%;

    max-width:750px;

    padding:30px;

    background:rgba(0,0,0,.9);

    border:2px solid #b000ff;

    border-radius:20px;

    box-shadow:

    0 0 30px #b000ff;

    animation:fadeIn .8s;

}



h1{

    text-align:center;

    color:white;

    font-size:38px;

    text-shadow:

    0 0 15px #b000ff;

}



.status{

    display:flex;

    gap:15px;

    margin-top:25px;

}



.card{

    flex:1;

    padding:15px;

    text-align:center;

    border:1px solid #b000ff;

    border-radius:12px;

    background:rgba(176,0,255,.1);

}

 
/* =========================
   TERMINAL
========================= */


#terminal{

    margin-top:25px;

    min-height:130px;

    padding:15px;

    background:#000;

    border:1px solid #b000ff;

    border-radius:10px;

    color:#d98cff;

    line-height:1.6;

    box-shadow:

    inset 0 0 20px rgba(176,0,255,.3);

}





/* =========================
   LADEBALKEN
========================= */


#progress{

    width:100%;

    height:22px;

    margin-top:25px;

    border:2px solid #b000ff;

    border-radius:20px;

    overflow:hidden;

    background:#000;

}



#bar{

    width:0%;

    height:100%;

    background:

    linear-gradient(
    90deg,
    #7000ff,
    #e000ff
    );

    box-shadow:

    0 0 20px #b000ff;

    transition:.15s;

}





/* =========================
   SPRACHE
========================= */


#language{

    position:fixed;

    inset:0;

    z-index:20;

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    background:#050008;

    text-align:center;

}



#language h2{

    font-size:32px;

    text-shadow:

    0 0 20px #b000ff;

}





button{

    width:280px;

    margin:10px;

    padding:15px;

    background:#08000d;

    color:white;

    border:2px solid #b000ff;

    border-radius:12px;

    font-family:monospace;

    font-size:18px;

    cursor:pointer;

    transition:.3s;

}



button:hover{

    background:#b000ff;

    color:#000;

    transform:translateY(-3px);

    box-shadow:

    0 0 25px #b000ff;

}






/* =========================
   REGELN
========================= */


#rules{

    position:fixed;

    top:50%;

    left:50%;

    transform:translate(-50%,-50%);

    z-index:30;

    width:85%;

    max-width:850px;

    height:85vh;

    padding:30px;

    background:rgba(0,0,0,.95);

    border:2px solid #b000ff;

    border-radius:20px;

    box-shadow:
    0 0 35px #b000ff;

    overflow-y:auto;

    animation:rulesOpen .5s ease;

}



#rules::-webkit-scrollbar{

    width:10px;

}



#rules::-webkit-scrollbar-thumb{

    background:#b000ff;

    border-radius:10px;

}




#nxtGif{

    display:block;

    width:280px;

    max-width:80%;

    margin:0 auto 25px;

    border-radius:15px;

    box-shadow:

    0 0 25px #b000ff;

}





#rulesText{

    text-align:left;

}




#rulesText h2{

    text-align:center;

    font-size:28px;

    text-shadow:

    0 0 15px #b000ff;

}




#rulesText h4{

    color:#d98cff;

    margin-bottom:5px;

}



#rulesText p{

    line-height:1.6;

}





.warning{

    margin-top:30px;

    padding:20px;

    border:1px solid #b000ff;

    border-radius:12px;

    background:

    rgba(176,0,255,.1);

}

 
/* =========================
   DISCORD SEITE
========================= */


#discordPage{

    position:fixed;

    inset:0;

    z-index:40;

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    text-align:center;

    padding:30px;

    background:#050008;

}




#discordPage h2{

    font-size:32px;

    text-shadow:

    0 0 20px #b000ff;

}




#discordPage p{

    max-width:500px;

    color:#ddd;

    line-height:1.6;

}





#discordGif{

    width:300px;

    max-width:80%;

    margin-bottom:25px;

    border-radius:20px;

    box-shadow:

    0 0 35px #b000ff;

}





#discordPage button{

    width:300px;

    margin-top:25px;

}







/* =========================
   DISCORD LOADING
========================= */


#discordLoading{

    position:fixed;

    inset:0;

    z-index:50;

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    background:#000;

    color:white;

    font-size:22px;

}




#discordLoading::after{

    content:"";

    width:50px;

    height:50px;

    margin-top:25px;

    border:4px solid #333;

    border-top-color:#b000ff;

    border-radius:50%;

    animation:spin 1s linear infinite;

}






/* =========================
   ANIMATIONEN
========================= */


.glitchFade{

    animation:fadeScale .8s;

}



@keyframes fadeScale{

    from{

        opacity:0;

        transform:scale(.9);

        filter:blur(10px);

    }


    to{

        opacity:1;

        transform:scale(1);

        filter:blur(0);

    }

}





@keyframes spin{

    from{

        transform:rotate(0deg);

    }


    to{

        transform:rotate(360deg);

    }

}




@keyframes fadeIn{

    from{

        opacity:0;

        transform:translateY(30px);

    }


    to{

        opacity:1;

        transform:translateY(0);

    }

}







/* =========================
   HANDY
========================= */


@media(max-width:700px){


    #intro video{

        width:95%;

        max-height:50vh;

    }



    #main{

        width:92%;

        padding:20px;

    }



    h1{

        font-size:28px;

    }



    .status{

        flex-direction:column;

    }



    #rules{

        width:95%;

        height:85vh;

        padding:20px;

    }



    #rulesText h2{

        font-size:22px;

    }



    button{

        width:90%;

        max-width:320px;

    }


}
    
