let video = document.getElementById("introVideo");


video.onended = () => {

    document.getElementById("intro").style.display = "none";

    document.getElementById("boot").style.display = "block";

    startBoot();

};





function startBoot(){

    let terminal = document.getElementById("terminal");

    let bar = document.getElementById("bar");


    let text = [

        "> System startet...",
        "> Module werden geladen...",
        "> Netzwerk wird geprüft...",
        "> Verbindung hergestellt..."

    ];


    let i = 0;


    let boot = setInterval(()=>{


        terminal.innerHTML += text[i] + "<br>";

        i++;


        if(i >= text.length){

            clearInterval(boot);

            loadBar();

        }


    },600);





    function loadBar(){

        let p = 0;


        let timer = setInterval(()=>{


            p++;

            bar.style.width = p + "%";



            if(p >= 100){


                clearInterval(timer);


                terminal.innerHTML +=
                "<br>> SYSTEM ONLINE";



                setTimeout(()=>{


                    document.getElementById("main").style.display = "none";


                    document.getElementById("language").style.display = "block";



                },1500);


            }


        },40);


    }


}








// Status Anzeige

setInterval(()=>{


    document.getElementById("cpu").innerHTML =
    Math.floor(Math.random()*40+50);



    document.getElementById("ram").innerHTML =
    Math.floor(Math.random()*50+30);



    document.getElementById("signal").innerHTML =
    Math.floor(Math.random()*10+90);



},500);








// MATRIX EFFECT

let canvas = document.getElementById("matrix");

let ctx = canvas.getContext("2d");



function resize(){


    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;


}


resize();


window.onresize = resize;




let chars = "0123456789ABCDEF";

let size = 18;

let columns = Math.floor(canvas.width / size);

let drops = [];



for(let i = 0; i < columns; i++){

    drops[i] = 0;

}





function matrix(){


    ctx.fillStyle = "rgba(0,0,0,.12)";


    ctx.fillRect(

        0,

        0,

        canvas.width,

        canvas.height

    );



    ctx.fillStyle = "#b000ff";


    ctx.font = size + "px monospace";




    for(let i = 0; i < drops.length; i++){



        let text =
        chars[Math.floor(Math.random()*chars.length)];



        ctx.fillText(

            text,

            i * size,

            drops[i] * size

        );



        drops[i]++;



        if(drops[i] * size > canvas.height){

            drops[i] = 0;

        }


    }


}



setInterval(matrix,50);






const languages = {


de:{

welcome:"📜 Willkommen bei [NXT] NextGen",

intro:"Bevor du Zugriff auf den Server erhältst, lies dir bitte unsere Regeln sorgfältig durch.",

rulesTitle:"⚔️ Unsere Regeln",

respectTitle:"🤝 Respekt",
respect:"Behandle alle Mitglieder freundlich und respektvoll.",

dramaTitle:"💬 Kein Drama",
drama:"Diskussionen sind willkommen – Beleidigungen, Provokationen oder unnötiger Streit nicht.",

spamTitle:"📢 Kein Spam",
spam:"Keine Werbung, kein Flooding und kein Missbrauch von Erwähnungen.",

fairTitle:"🎮 Fair Play",
fair:"Cheats, Hacks oder Exploits sind nicht erlaubt.",

channelTitle:"📂 Kanäle nutzen",
channel:"Bitte nutze die passenden Kanäle und halte den Server übersichtlich.",

teamTitle:"🛡️ Teamentscheidungen",
team:"Den Anweisungen des Serverteams ist Folge zu leisten.",

funTitle:"🌟 Hab Spaß!",
fun:"Unterstütze deine Gildenkollegen und hilf dabei, [NXT] NextGen zu einer starken Community zu machen.",

warning:"⚠️ WICHTIG<br><br>Nachdem du die Regeln gelesen hast, gehe bitte auf unserem Discord in den Kanal:<br><br>#✅-verifizierung<br><br>und bestätige dich dort, um Zugriff auf alle Bereiche von [NXT] NextGen zu erhalten."

},




en:{

welcome:"📜 Welcome to [NXT] NextGen",

intro:"Before you get access to the server, please read our rules carefully.",

rulesTitle:"⚔️ Our Rules",

respectTitle:"🤝 Respect",
respect:"Treat all members with kindness and respect.",

dramaTitle:"💬 No Drama",
drama:"Discussions are welcome – insults, provocations or unnecessary arguments are not.",

spamTitle:"📢 No Spam",
spam:"No advertising, flooding or abuse of mentions.",

fairTitle:"🎮 Fair Play",
fair:"Cheats, hacks or exploits are not allowed.",

channelTitle:"📂 Use Channels",
channel:"Please use the correct channels and keep the server organized.",

teamTitle:"🛡️ Team Decisions",
team:"Follow the instructions of the server team.",

funTitle:"🌟 Have Fun!",
fun:"Support your guild members and help make [NXT] NextGen a strong community.",

warning:"⚠️ IMPORTANT<br><br>After reading the rules, please go to our Discord channel:<br><br>#✅-verification<br><br>and verify yourself to access all areas of [NXT] NextGen."

},




ru:{

welcome:"📜 Добро пожаловать в [NXT] NextGen",

intro:"Перед получением доступа к серверу внимательно прочитайте правила.",

rulesTitle:"⚔️ Наши правила",

respectTitle:"🤝 Уважение",
respect:"Относитесь ко всем участникам дружелюбно и уважительно.",

dramaTitle:"💬 Без конфликтов",
drama:"Обсуждения разрешены, оскорбления и провокации запрещены.",

spamTitle:"📢 Без спама",
spam:"Реклама, флуд и злоупотребление упоминаниями запрещены.",

fairTitle:"🎮 Честная игра",
fair:"Читы, хаки и эксплойты запрещены.",

channelTitle:"📂 Использование каналов",
channel:"Используйте подходящие каналы и поддерживайте порядок.",

teamTitle:"🛡️ Решения команды",
team:"Следуйте указаниям администрации.",

funTitle:"🌟 Хорошей игры!",
fun:"Помогайте участникам и развивайте сообщество [NXT] NextGen.",

warning:"⚠️ ВАЖНО<br><br>После прочтения правил перейдите в Discord-канал:<br><br>#✅-верификация<br><br>и подтвердите себя."

},




fr:{

welcome:"📜 Bienvenue chez [NXT] NextGen",

intro:"Avant d'accéder au serveur, veuillez lire attentivement nos règles.",

rulesTitle:"⚔️ Nos règles",

respectTitle:"🤝 Respect",
respect:"Traitez tous les membres avec respect.",

dramaTitle:"💬 Pas de conflit",
drama:"Les discussions sont autorisées, les insultes et provocations ne le sont pas.",

spamTitle:"📢 Pas de spam",
spam:"Pas de publicité, flood ou abus de mentions.",

fairTitle:"🎮 Fair Play",
fair:"Les cheats, hacks et exploits sont interdits.",

channelTitle:"📂 Utiliser les salons",
channel:"Utilisez les bons salons et gardez le serveur organisé.",

teamTitle:"🛡️ Décisions de l'équipe",
team:"Respectez les décisions de l'équipe.",

funTitle:"🌟 Amusez-vous !",
fun:"Aidez vos membres et développez la communauté [NXT] NextGen.",

warning:"⚠️ IMPORTANT<br><br>Après avoir lu les règles, rendez-vous sur Discord :<br><br>#✅-verification<br><br>et validez votre accès."

},




es:{

welcome:"📜 Bienvenido a [NXT] NextGen",

intro:"Antes de obtener acceso al servidor, lee nuestras reglas cuidadosamente.",

rulesTitle:"⚔️ Nuestras reglas",

respectTitle:"🤝 Respeto",
respect:"Trata a todos los miembros con respeto.",

dramaTitle:"💬 Sin drama",
drama:"Las discusiones están permitidas, los insultos no.",

spamTitle:"📢 Sin spam",
spam:"No publicidad, flood ni abuso de menciones.",

fairTitle:"🎮 Juego limpio",
fair:"Los trucos, hacks y exploits están prohibidos.",

channelTitle:"📂 Uso de canales",
channel:"Utiliza los canales adecuados y mantén el servidor organizado.",

teamTitle:"🛡️ Decisiones del equipo",
team:"Sigue las instrucciones del equipo.",

funTitle:"🌟 ¡Diviértete!",
fun:"Ayuda a tus compañeros y fortalece la comunidad [NXT] NextGen.",

warning:"⚠️ IMPORTANTE<br><br>Después de leer las reglas, entra al canal de Discord:<br><br>#✅-verificacion<br><br>y confirma tu acceso."

}


};






// Regeln -> Discord

// Sprache auswählen und Regeln übersetzen

function selectLanguage(lang){


    let text = languages[lang];


    let rules = document.getElementById("rulesText");



    // Überschriften

    rules.querySelector("h2").innerHTML =
    text.welcome;


    rules.querySelector("p").innerHTML =
    text.intro;


    rules.querySelector("h3").innerHTML =
    text.rulesTitle;



    // Einzelne Regeln

    let titles = rules.querySelectorAll("h4");

    let desc = rules.querySelectorAll("h4 + p");



    titles[0].innerHTML = text.respectTitle;
    desc[0].innerHTML = text.respect;


    titles[1].innerHTML = text.dramaTitle;
    desc[1].innerHTML = text.drama;


    titles[2].innerHTML = text.spamTitle;
    desc[2].innerHTML = text.spam;


    titles[3].innerHTML = text.fairTitle;
    desc[3].innerHTML = text.fair;


    titles[4].innerHTML = text.channelTitle;
    desc[4].innerHTML = text.channel;


    titles[5].innerHTML = text.teamTitle;
    desc[5].innerHTML = text.team;


    titles[6].innerHTML = text.funTitle;
    desc[6].innerHTML = text.fun;



    // Warnhinweis

    document.querySelector(".warning").innerHTML =
    text.warning;




    // Wechsel zur Regel-Seite

    document.getElementById("language").style.display="none";


    document.getElementById("rules").style.display="block";


}

function goDiscord(){


    document.getElementById("rules").style.display="none";


    let loading =
    document.getElementById("discordLoading");


    loading.style.display="flex";



    setTimeout(()=>{


        loading.style.display="none";


        document.getElementById("discordPage").style.display="flex";



    },2500);



}








// Discord Button

function joinDiscord(){


    window.location.href =
    "https://discord.com/invite/9k5QrjW3Tn";


}
