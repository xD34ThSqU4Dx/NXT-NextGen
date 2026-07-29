// ===============================
// NXT NEXTGEN SYSTEM OPTIMIZED
// ===============================


// ===============================
// INTRO VIDEO
// ===============================


const introVideo =
document.getElementById("introVideo");



if(introVideo){


    introVideo.onended = ()=>{


        const intro =
        document.getElementById("intro");



        if(intro){


            intro.style.opacity="0";


            setTimeout(()=>{


                intro.style.display="none";


                const boot =
                document.getElementById("boot");



                if(boot){

                    boot.style.display="flex";

                }



                startBoot();



            },500);


        }


    };


}


    };


}







// ===============================
// BOOT SYSTEM
// ===============================


function startBoot(){



    const terminal =
    document.getElementById("terminal");


    const bar =
    document.getElementById("bar");



    if(!terminal || !bar){

        return;

    }



    const messages=[


        "> NXT Core gestartet...",


        "> Module geladen...",


        "> Verbindung geprüft...",


        "> Sicherheitssystem aktiv...",


        "> SYSTEM ONLINE 🚀"


    ];



    let index=0;



    const textTimer=setInterval(()=>{


        terminal.innerHTML +=
        messages[index]+"<br>";



        index++;



        if(index >= messages.length){



            clearInterval(textTimer);


            loadProgress();


        }



    },220);







    function loadProgress(){


        let progress=0;



        const progressTimer=setInterval(()=>{


            progress+=10;



            bar.style.width =
            progress+"%";



            if(progress>=100){


                clearInterval(progressTimer);



                setTimeout(()=>{


                    document.getElementById("main").style.display="none";



                    const language =
                    document.getElementById("language");



                    if(language){


                        language.style.display="flex";


                    }



                },400);



            }



        },20);



    }



}

// ===============================
// STATUS ANZEIGE
// ===============================


let statusTimer;



function startStatus(){



    if(statusTimer){

        return;

    }



    statusTimer=setInterval(()=>{


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
            Math.floor(Math.random()*35+45);

        }



        if(signal){

            signal.innerHTML =
            Math.floor(Math.random()*5+95);

        }



    },1500);



}



startStatus();







// ===============================
// SPRACH SYSTEM
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
"Unterstütze die Community und hilf dabei, [NXT] NextGen stärker zu machen."]


],



warning:

"⚠️ WICHTIG<br><br>Nachdem du die Regeln gelesen hast, gehe auf Discord in den Kanal:<br><br>#✅-verifizierung<br><br>und bestätige dich dort."

},







en:{


welcome:"📜 Welcome to [NXT] NextGen",


intro:"Before you get access to the server, please read our rules carefully.",


rulesTitle:"⚔️ Our Rules",



rules:[


["🤝 Respect",
"Treat all members with respect."],


["💬 No Drama",
"Insults and unnecessary conflicts are not allowed."],


["📢 No Spam",
"No advertising or flooding."],


["🎮 Fair Play",
"Cheats, hacks and exploits are forbidden."],


["📂 Channels",
"Use the correct channels."],


["🛡️ Team Decisions",
"Follow the team instructions."],


["🌟 Have Fun!",
"Help build the [NXT] NextGen community."]


],



warning:

"⚠️ IMPORTANT<br><br>Go to Discord:<br><br>#✅-verification<br><br>and verify yourself."

},







ru:{


welcome:"📜 Добро пожаловать в [NXT] NextGen",


intro:"Перед доступом к серверу прочитайте правила.",


rulesTitle:"⚔️ Наши правила",



rules:[


["🤝 Уважение",
"Относитесь ко всем участникам уважительно."],


["💬 Без конфликтов",
"Оскорбления и провокации запрещены."],


["📢 Без спама",
"Реклама и флуд запрещены."],


["🎮 Честная игра",
"Читы и хаки запрещены."],


["📂 Каналы",
"Используйте правильные каналы."],


["🛡️ Команда",
"Следуйте решениям администрации."],


["🌟 Веселитесь",
"Помогайте сообществу."]


],



warning:

"⚠️ ВАЖНО<br><br>Перейдите в Discord и подтвердите доступ."

},

   // ===============================
// WEITERE SPRACHEN
// ===============================


languages.fr={


welcome:"📜 Bienvenue chez [NXT] NextGen",


intro:"Veuillez lire attentivement nos règles avant d'accéder au serveur.",


rulesTitle:"⚔️ Nos règles",


rules:[


["🤝 Respect",
"Respectez tous les membres."],


["💬 Pas de conflit",
"Les insultes et provocations sont interdites."],


["📢 Pas de spam",
"Pas de publicité ni de flood."],


["🎮 Fair Play",
"Les cheats et hacks sont interdits."],


["📂 Salons",
"Utilisez les bons salons."],


["🛡️ Équipe",
"Respectez les décisions de l'équipe."],


["🌟 Amusez-vous",
"Aidez la communauté [NXT] NextGen."]


],


warning:

"⚠️ IMPORTANT<br><br>Allez sur Discord :<br><br>#✅-verification<br><br>et confirmez votre accès."

};








languages.es={


welcome:"📜 Bienvenido a [NXT] NextGen",


intro:"Lee nuestras reglas antes de acceder al servidor.",


rulesTitle:"⚔️ Nuestras reglas",


rules:[


["🤝 Respeto",
"Trata a todos los miembros con respeto."],


["💬 Sin drama",
"No insultos ni conflictos innecesarios."],


["📢 Sin spam",
"No publicidad ni flood."],


["🎮 Juego limpio",
"No cheats, hacks ni exploits."],


["📂 Canales",
"Utiliza los canales correctos."],


["🛡️ Equipo",
"Sigue las instrucciones del equipo."],


["🌟 Diviértete",
"Ayuda a fortalecer la comunidad."]


],


warning:

"⚠️ IMPORTANTE<br><br>Entra en Discord:<br><br>#✅-verificacion<br><br>y confirma tu acceso."

};








// ===============================
// SPRACHE AUSWÄHLEN
// ===============================


function selectLanguage(lang){



    const text =
    languages[lang];



    if(!text){

        console.error("Sprache nicht gefunden");

        return;

    }




    const rulesText =
    document.getElementById("rulesText");



    const warning =
    document.querySelector(".warning");



    if(!rulesText){

        return;

    }






    rulesText.innerHTML = `


    <h2>${text.welcome}</h2>


    <p>${text.intro}</p>


    <h3>${text.rulesTitle}</h3>



    ${text.rules.map(item=>`


        <h4>${item[0]}</h4>


        <p>${item[1]}</p>


    `).join("")}



    <div class="warning">

    ${text.warning}

    </div>



    `;







    const language =
    document.getElementById("language");



    const rules =
    document.getElementById("rules");




    if(language){


        language.style.display="none";


    }




    if(rules){



        rules.style.display="block";


        rules.scrollTop=0;


        rules.classList.remove("glitchFade");


        void rules.offsetWidth;


        rules.classList.add("glitchFade");



    }




}

// ===============================
// DISCORD ÜBERGANG
// ===============================


function goDiscord(){



    const rules =
    document.getElementById("rules");



    const loading =
    document.getElementById("discordLoading");



    const discord =
    document.getElementById("discordPage");




    if(rules){


        rules.style.display="none";


    }




    if(loading){



        loading.style.display="flex";



        setTimeout(()=>{



            loading.style.display="none";



            if(discord){


                discord.style.display="flex";


            }



        },1000);



    }

    else{


        if(discord){


            discord.style.display="flex";


        }


    }


}








// ===============================
// DISCORD BUTTON
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



            },100);



        });



    });



});








// ===============================
// FEHLERSCHUTZ
// ===============================



window.addEventListener("load",()=>{



    const discord =
    document.getElementById("discordPage");



    const loading =
    document.getElementById("discordLoading");



    // nur verstecken wenn Startzustand


    if(discord && !discord.dataset.open){


        discord.style.display="none";


    }



    if(loading){


        loading.style.display="none";


    }



});
