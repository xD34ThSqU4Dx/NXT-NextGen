/* =========================
   NXT NEXTGEN OPTIMIZED STYLE
========================= */


*{
    box-sizing:border-box;
}


html,body{

    margin:0;

    width:100%;

    height:100%;

    background:#050008;

    color:white;

    font-family:monospace;

    overflow:hidden;

}




body::before{

    content:"";

    position:fixed;

    inset:0;

    background:
    radial-gradient(circle at top,#3b0066,transparent 45%),
    radial-gradient(circle at bottom,#100018,transparent 50%);

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

    background:black;

    z-index:999;

}



#intro video{

    width:75%;

    max-width:850px;

    max-height:65vh;

    object-fit:contain;

    border-radius:18px;

    box-shadow:
    0 0 25px #b000ff;

}







/* =========================
   BOOT
========================= */


#boot{

    height:100vh;

    display:flex;

    align-items:center;

    justify-content:center;

}




#main{

    width:85%;

    max-width:750px;

    padding:25px;

    background:rgba(0,0,0,.9);

    border:2px solid #b000ff;

    border-radius:18px;

    box-shadow:

    0 0 20px #b000ff;

}






h1{

    text-align:center;

    font-size:36px;

    text-shadow:

    0 0 15px #b000ff;

}







.status{

    display:flex;

    gap:12px;

    margin-top:20px;

}




.card{

    flex:1;

    padding:12px;

    text-align:center;

    border:1px solid #b000ff;

    border-radius:10px;

    background:

    rgba(176,0,255,.08);

       }

 
/* =========================
   TERMINAL
========================= */


#terminal{

    margin-top:20px;

    min-height:120px;

    padding:15px;

    background:#000;

    border:1px solid #b000ff;

    border-radius:10px;

    color:#d98cff;

    line-height:1.5;

    overflow:hidden;

}







/* =========================
   LADEBALKEN
========================= */


#progress{

    width:100%;

    height:20px;

    margin-top:20px;

    border:2px solid #b000ff;

    border-radius:15px;

    overflow:hidden;

    background:#000;

}





#bar{

    width:0%;

    height:100%;

    background:#b000ff;

    box-shadow:

    0 0 15px #b000ff;

    transition:.1s;

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

    font-size:30px;

    margin-bottom:25px;

    text-shadow:

    0 0 15px #b000ff;

}







button{

    width:280px;

    margin:8px;

    padding:14px;

    background:#08000d;

    color:white;

    border:

    2px solid #b000ff;

    border-radius:12px;

    font-family:monospace;

    font-size:17px;

    cursor:pointer;

}







button:hover{

    background:#b000ff;

    color:black;

    box-shadow:

    0 0 20px #b000ff;

}







/* =========================
   REGELN
========================= */


#rules{

    position:fixed;

    top:50%;

    left:50%;


    transform:

    translate(-50%,-50%);


    width:85%;

    max-width:850px;

    height:85vh;


    padding:25px;


    background:

    rgba(0,0,0,.96);


    border:2px solid #b000ff;


    border-radius:18px;


    z-index:30;


    overflow-y:auto;


    box-shadow:

    0 0 25px #b000ff;


}







#rules::-webkit-scrollbar{

    width:8px;

}



#rules::-webkit-scrollbar-thumb{

    background:#b000ff;

    border-radius:10px;

}







#nxtGif{

    display:block;

    width:220px;

    max-width:75%;

    margin:

    0 auto 20px;


    border-radius:15px;

}

/* =========================
   REGEL TEXT
========================= */


#rulesText{

    text-align:left;

}



#rulesText h2{

    text-align:center;

    font-size:26px;

    text-shadow:

    0 0 12px #b000ff;

}



#rulesText h3{

    text-align:center;

    margin-top:25px;

    color:white;

}



#rulesText h4{

    color:#d98cff;

    margin-top:22px;

    margin-bottom:5px;

}



#rulesText p{

    line-height:1.5;

    color:#ddd;

}







/* =========================
   WARNUNG / VERIFIZIERUNG
========================= */


.warning{

    margin-top:25px;

    padding:18px;


    border:

    1px solid #b000ff;


    border-radius:12px;


    background:

    rgba(176,0,255,.08);


    line-height:1.5;

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


    padding:25px;


    background:#050008;


}







#discordPage h2{

    font-size:30px;


    text-shadow:


    0 0 15px #b000ff;


}



#discordPage p{

    max-width:500px;


    line-height:1.6;


    color:#ddd;


}







#discordGif{

    width:220px;


    max-width:70%;


    margin-bottom:20px;


    border-radius:15px;

}







#discordPage button{


    width:300px;


    margin-top:20px;


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


    background:black;


    color:white;


    font-size:20px;


}





#discordLoading::after{


    content:"";


    width:45px;


    height:45px;


    margin-top:20px;


    border:

    4px solid #333;


    border-top-color:#b000ff;


    border-radius:50%;


    animation:spin .8s linear infinite;


}

/* =========================
   ANIMATIONEN
========================= */


.glitchFade{

    animation:fadeIn .5s ease;

}



@keyframes fadeIn{


    from{

        opacity:0;

        transform:scale(.97);

    }


    to{

        opacity:1;

        transform:scale(1);

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








/* =========================
   HANDY OPTIMIERUNG
========================= */


@media(max-width:700px){



    #intro video{

        width:95%;

        max-height:45vh;

    }




    #main{

        width:92%;

        padding:18px;

    }





    h1{

        font-size:28px;

    }





    .status{

        flex-direction:column;

    }





    #rules{

        width:95%;

        height:82vh;

        padding:18px;

    }





    #rulesText h2{

        font-size:22px;

    }





    #nxtGif{

        width:180px;

    }





    #discordGif{

        width:180px;

    }





    #language h2{

        font-size:25px;

    }





    button{

        width:90%;

        max-width:320px;

        font-size:16px;

    }



}







/* =========================
   PERFORMANCE
========================= */


video,
img{

    max-width:100%;

}




#rules,
#discordPage,
#main{

    will-change:auto;

}
