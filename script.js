// ===============================
// NXT NEXTGEN SYSTEM
// ===============================


// INTRO VIDEO

const introVideo = document.getElementById("introVideo");


if(introVideo){

    introVideo.onended = ()=>{


        let intro = document.getElementById("intro");


        intro.style.opacity="0";


        setTimeout(()=>{


            intro.style.display="none";


            let boot =
            document.getElementById("boot");


            if(boot){

                boot.style.display="flex";

            }


            startBoot();


        },500);


    };

}






// ===============================
// BOOT SYSTEM
// ===============================



function startBoot(){


    let terminal =
    document.getElementById("terminal");


    let bar =
    document.getElementById("bar");



    if(!terminal || !bar){

        return;

    }



    let messages=[


        "> NXT Core startet...",


        "> Module werden geladen...",


        "> Community Verbindung aufgebaut...",


        "> Server Status geprüft...",


        "> System bereit"

    ];



    let i=0;



    let bootText=setInterval(()=>{


        terminal.innerHTML +=
        messages[i]+"<br>";



        i++;



        if(i >= messages.length){


            clearInterval(bootText);


            loadBar();


        }



    },250);






    function loadBar(){


        let progress=0;



        let timer=setInterval(()=>{


            progress += 10;



            bar.style.width =
            progress+"%";



            if(progress>=100){



                clearInterval(timer);



                terminal.innerHTML +=
                "<br>> ONLINE 🚀";



                setTimeout(()=>{


                    document.getElementById("main").style.display="none";


                    let language =
                    document.getElementById("language");



                    if(language){

                        language.style.display="flex";

                    }



                },600);



            }



        },30);



    }


}






// ===============================
// STATUS ANZEIGE
// ===============================


setInterval(()=>{


    let cpu=document.getElementById("cpu");

    let ram=document.getElementById("ram");

    let signal=document.getElementById("signal");



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
// SPRACH SYSTEM
// ===============================


const languages = {


de:{

welcome:"📜 Willkommen bei [NXT] NextGen",

intro:"Bevor du Zugriff auf den Server erhältst, lies dir bitte unsere Regeln sorgfältig durch.",

rulesTitle:"⚔️ Unsere Regeln",


rules:[

["🤝 Respekt","Behandle alle Mitglieder freundlich und respektvoll."],

["💬 Kein Drama","Diskussionen sind willkommen – Beleidigungen, Provokationen oder unnötiger Streit nicht."],

["📢 Kein Spam","Keine Werbung, kein Flooding und kein Missbrauch von Erwähnungen."],

["🎮 Fair Play","Cheats, Hacks oder Exploits sind nicht erlaubt."],

["📂 Kanäle nutzen","Bitte nutze die passenden Kanäle und halte den Server übersichtlich."],

["🛡️ Teamentscheidungen","Den Anweisungen des Serverteams ist Folge zu leisten."],

["🌟 Hab Spaß!","Unterstütze deine Mitglieder und hilf dabei, [NXT] NextGen zu stärken."]

],


warning:"⚠️ WICHTIG<br><br>Nachdem du die Regeln gelesen hast, gehe bitte auf unserem Discord in den Kanal:<br><br>#✅-verifizierung<br><br>und bestätige dich dort."


},




en:{

welcome:"📜 Welcome to [NXT] NextGen",

intro:"Before you get access to the server, please read our rules carefully.",

rulesTitle:"⚔️ Our Rules",


rules:[

["🤝 Respect","Treat all members with respect."],

["💬 No Drama","Arguments, insults and unnecessary conflicts are not allowed."],

["📢 No Spam","No advertising or flooding."],

["🎮 Fair Play","Cheats, hacks and exploits are forbidden."],

["📂 Channels","Use the correct channels."],

["🛡️ Team Decisions","Follow the team instructions."],

["🌟 Have Fun!","Help build the [NXT] NextGen community."]

],


warning:"⚠️ IMPORTANT<br><br>After reading the rules go to Discord:<br><br>#✅-verification<br><br>and verify yourself."

},




ru:{

welcome:"📜 Добро пожаловать в [NXT] NextGen",

intro:"Перед доступом к серверу прочитайте правила.",

rulesTitle:"⚔️ Наши правила",


rules:[

["🤝 Уважение","Относитесь ко всем участникам уважительно."],

["💬 Без конфликтов","Оскорбления и провокации запрещены."],

["📢 Без спама","Реклама и флуд запрещены."],

["🎮 Честная игра","Читы и хаки запрещены."],

["📂 Каналы","Используйте правильные каналы."],

["🛡️ Команда","Следуйте решениям администрации."],

["🌟 Веселитесь","Помогайте сообществу."]

],


warning:"⚠️ ВАЖНО<br><br>Перейдите в Discord и подтвердите доступ."

},




fr:{

welcome:"📜 Bienvenue chez [NXT] NextGen",

intro:"Veuillez lire attentivement nos règles.",

rulesTitle:"⚔️ Nos règles",


rules:[

["🤝 Respect","Respectez tous les membres."],

["💬 Pas de conflit","Les insultes sont interdites."],

["📢 Pas de spam","Pas de publicité ni flood."],

["🎮 Fair Play","Les cheats sont interdits."],

["📂 Salons","Utilisez les bons salons."],

["🛡️ Équipe","Respectez les décisions."],

["🌟 Amusez-vous","Aidez la communauté."]

],


warning:"⚠️ IMPORTANT<br><br>Allez sur Discord et vérifiez votre accès."

},




es:{

welcome:"📜 Bienvenido a [NXT] NextGen",

intro:"Lee nuestras reglas cuidadosamente.",

rulesTitle:"⚔️ Nuestras reglas",


rules:[

["🤝 Respeto","Trata a todos con respeto."],

["💬 Sin drama","No insultos ni conflictos."],

["📢 Sin spam","No publicidad ni flood."],

["🎮 Juego limpio","No cheats ni hacks."],

["📂 Canales","Usa los canales correctos."],

["🛡️ Equipo","Sigue las instrucciones."],

["🌟 Diviértete","Ayuda a la comunidad."]

],


warning:"⚠️ IMPORTANTE<br><br>Verifica tu acceso en Discord."

}


};





// ===============================
// SPRACHE AUSWÄHLEN
// ===============================


function selectLanguage(lang){


    let text =
    languages[lang];



    if(!text){

        console.log("Sprache fehlt");

        return;

    }



    let rulesText =
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


    `;



    let warning =
    document.querySelector(".warning");



    if(warning){

        warning.innerHTML =
        text.warning;

    }



    document.getElementById("language").style.display="none";


    let rules =
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


    let rules =
    document.getElementById("rules");


    let loading =
    document.getElementById("discordLoading");



    if(rules){

        rules.style.display="none";

    }



    if(loading){


        loading.style.display="flex";



        setTimeout(()=>{


            loading.style.display="none";


            let discord =
            document.getElementById("discordPage");



            if(discord){

                discord.style.display="flex";

            }



        },1200);



    }

    else{


        let discord =
        document.getElementById("discordPage");



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
// BUTTON ANIMATION
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
// SICHERHEITSCHECK
// ===============================


// Falls Seite neu geladen wird
// und Elemente versteckt bleiben


window.onload=()=>{


    let discord =
    document.getElementById("discordPage");


    if(discord){

        discord.style.display="none";

    }



};

