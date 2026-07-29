alert("NXT SCRIPT GELADEN");
// ===============================
// NXT NEXTGEN SYSTEM
// ===============================


// ===============================
// INTRO SYSTEM FIX
// ===============================


const introVideo = document.getElementById("introVideo");


let started = false;


function startSystem(){


    if(started) return;

    started = true;



    const intro =
    document.getElementById("intro");


    if(intro){

        intro.style.display="none";

    }



    const boot =
    document.getElementById("boot");


    if(boot){

        boot.style.display="flex";

    }



    startBoot();


}




if(introVideo){


    introVideo.onended = ()=>{

        startSystem();

    };



    introVideo.ontimeupdate = ()=>{


        if(
            introVideo.duration &&
            introVideo.currentTime >= introVideo.duration - 0.2
        ){

            startSystem();

        }


    };


}
    // Falls Handy das Video-Ende nicht erkennt

    setTimeout(()=>{


        startSystem();


    },10000);


}






// ===============================
// BOOT SYSTEM
// ===============================


function startBoot(){


    const terminal =
    document.getElementById("terminal");


    const bar =
    document.getElementById("bar");



    if(!terminal || !bar) return;




    const messages=[


        "> NXT Core startet...",


        "> Module werden geladen...",


        "> Verbindung wird aufgebaut...",


        "> Server wird geprüft...",


        "> System bereit"

    ];



    let i=0;




    const textTimer=setInterval(()=>{


        terminal.innerHTML += messages[i]+"<br>";

        i++;



        if(i>=messages.length){


            clearInterval(textTimer);


            loadBar();


        }



    },400);






    function loadBar(){


        let progress=0;



        const barTimer=setInterval(()=>{


            progress +=5;


            bar.style.width =
            progress+"%";



            if(progress>=100){


                clearInterval(barTimer);



                terminal.innerHTML +=
                "<br>> SYSTEM ONLINE 🚀";



                setTimeout(()=>{


                    const main =
                    document.getElementById("main");


                    if(main){

                        main.style.display="none";

                    }



                    const language =
                    document.getElementById("language");



                    if(language){

                        language.style.display="flex";

                    }



                },800);



            }



        },50);



    }



}

// ===============================
// STATUS ANZEIGE
// ===============================


setInterval(()=>{


    const cpu =
    document.getElementById("cpu");


    const ram =
    document.getElementById("ram");


    const signal =
    document.getElementById("signal");



    if(cpu){

        cpu.innerHTML =
        Math.floor(Math.random()*30+60);

    }



    if(ram){

        ram.innerHTML =
        Math.floor(Math.random()*40+40);

    }



    if(signal){

        signal.innerHTML =
        Math.floor(Math.random()*5+95);

    }



},700);








// ===============================
// SPRACHEN
// ===============================


const languages = {



de:{


welcome:"📜 Willkommen bei [NXT] NextGen",

intro:"Bevor du Zugriff auf den Server erhältst, lies dir bitte unsere Regeln sorgfältig durch.",


rulesTitle:"⚔️ Unsere Regeln",


rules:[


["🤝 Respekt",
"Behandle alle Mitglieder freundlich und respektvoll."],


["💬 Kein Drama",
"Diskussionen sind willkommen – Beleidigungen, Provokationen oder unnötiger Streit nicht."],


["📢 Kein Spam",
"Keine Werbung, kein Flooding und kein Missbrauch von Erwähnungen."],


["🎮 Fair Play",
"Cheats, Hacks oder Exploits sind nicht erlaubt."],


["📂 Kanäle nutzen",
"Bitte nutze die passenden Kanäle und halte den Server übersichtlich."],


["🛡️ Teamentscheidungen",
"Den Anweisungen des Serverteams ist Folge zu leisten."],


["🌟 Hab Spaß!",
"Unterstütze deine Mitglieder und hilf dabei, [NXT] NextGen zu einer starken Community zu machen."]


],


warning:
"⚠️ WICHTIG<br><br>Nachdem du die Regeln gelesen hast, gehe bitte auf unserem Discord in den Kanal:<br><br>#✅-verifizierung<br><br>und bestätige dich dort."


},





en:{


welcome:"📜 Welcome to [NXT] NextGen",

intro:"Before you get access to the server, please read our rules carefully.",


rulesTitle:"⚔️ Our Rules",


rules:[


["🤝 Respect",
"Treat all members with kindness and respect."],


["💬 No Drama",
"Insults, provocations and unnecessary conflicts are not allowed."],


["📢 No Spam",
"No advertising, flooding or mention abuse."],


["🎮 Fair Play",
"Cheats, hacks and exploits are forbidden."],


["📂 Channels",
"Use the correct channels."],


["🛡️ Team Decisions",
"Follow the server team's instructions."],


["🌟 Have Fun!",
"Help build the [NXT] NextGen community."]


],


warning:
"⚠️ IMPORTANT<br><br>After reading the rules go to Discord:<br><br>#✅-verification<br><br>and verify yourself."


},





ru:{


welcome:"📜 Добро пожаловать в [NXT] NextGen",

intro:"Перед доступом к серверу внимательно прочитайте правила.",


rulesTitle:"⚔️ Наши правила",


rules:[


["🤝 Уважение",
"Относитесь ко всем участникам с уважением."],


["💬 Без конфликтов",
"Оскорбления и провокации запрещены."],


["📢 Без спама",
"Реклама и флуд запрещены."],


["🎮 Честная игра",
"Читы и хаки запрещены."],


["📂 Каналы",
"Используйте правильные каналы."],


["🛡️ Команда",
"Следуйте решениям команды."],


["🌟 Хорошей игры!",
"Помогайте сообществу."]


],


warning:
"⚠️ ВАЖНО<br><br>Перейдите в Discord и подтвердите доступ."


},





fr:{


welcome:"📜 Bienvenue chez [NXT] NextGen",

intro:"Veuillez lire attentivement nos règles.",


rulesTitle:"⚔️ Nos règles",


rules:[


["🤝 Respect",
"Respectez tous les membres."],


["💬 Pas de conflit",
"Les insultes sont interdites."],


["📢 Pas de spam",
"Pas de publicité ni flood."],


["🎮 Fair Play",
"Les cheats sont interdits."],


["📂 Salons",
"Utilisez les bons salons."],


["🛡️ Équipe",
"Respectez les décisions."],


["🌟 Amusez-vous!",
"Aidez la communauté."]


],


warning:
"⚠️ IMPORTANT<br><br>Allez sur Discord et vérifiez votre accès."


},





es:{


welcome:"📜 Bienvenido a [NXT] NextGen",

intro:"Lee nuestras reglas cuidadosamente.",


rulesTitle:"⚔️ Nuestras reglas",


rules:[


["🤝 Respeto",
"Trata a todos con respeto."],


["💬 Sin drama",
"No insultos ni conflictos."],


["📢 Sin spam",
"No publicidad ni flood."],


["🎮 Juego limpio",
"No cheats ni hacks."],


["📂 Canales",
"Usa los canales correctos."],


["🛡️ Equipo",
"Sigue las instrucciones."],


["🌟 Diviértete!",
"Ayuda a la comunidad."]


],


warning:
"⚠️ IMPORTANTE<br><br>Verifica tu acceso en Discord."


}


};


// ===============================
// SPRACHE AUSWÄHLEN
// ===============================


function selectLanguage(lang){


    const text = languages[lang];


    if(!text){

        console.log("Sprache nicht gefunden");

        return;

    }




    const rulesText =
    document.getElementById("rulesText");



    if(!rulesText){

        console.log("rulesText fehlt");

        return;

    }





    rulesText.innerHTML = `


    <h2>${text.welcome}</h2>


    <p>${text.intro}</p>


    <h3>${text.rulesTitle}</h3>



    ${text.rules.map(rule=>`


        <h4>${rule[0]}</h4>

        <p>${rule[1]}</p>


    `).join("")}



    <div class="warning">

    ${text.warning}

    </div>



    <br>


    <button onclick="goDiscord()">

    🚀 Weiter zu Discord

    </button>



    `;





    const language =
    document.getElementById("language");



    if(language){

        language.style.display="none";

    }






    const rules =
    document.getElementById("rules");



    if(rules){


        rules.style.display="block";


        rules.scrollTop=0;


        rules.classList.add("glitchFade");


    }



}








// ===============================
// WEITER ZU DISCORD
// ===============================



function goDiscord(){



    const rules =
    document.getElementById("rules");


    const loading =
    document.getElementById("discordLoading");



    if(rules){

        rules.style.display="none";

    }




    if(loading){



        loading.style.display="flex";



        setTimeout(()=>{



            loading.style.display="none";



            const discord =
            document.getElementById("discordPage");



            if(discord){

                discord.style.display="flex";

            }



        },1500);



    }

    else{


        const discord =
        document.getElementById("discordPage");



        if(discord){

            discord.style.display="flex";

        }


    }



}









// ===============================
// DISCORD BEITRETEN
// ===============================



function joinDiscord(){


    window.location.href =

    "https://discord.com/invite/9k5QrjW3Tn";


}








// ===============================
// BUTTON EFFEKT
// ===============================



document.addEventListener("DOMContentLoaded",()=>{


    document.querySelectorAll("button")
    .forEach(button=>{


        button.addEventListener("click",()=>{


            button.style.transform="scale(.95)";



            setTimeout(()=>{


                button.style.transform="scale(1)";


            },120);



        });



    });



});







// ===============================
// CACHE TEST
// ===============================


// verhindert alte Zustände nach Reload


window.addEventListener("load",()=>{


    const rules =
    document.getElementById("rules");


    const discord =
    document.getElementById("discordPage");



    if(rules){

        rules.style.display="none";

    }



    if(discord){

        discord.style.display="none";

    }



});
