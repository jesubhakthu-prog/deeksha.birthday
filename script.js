/* =====================================================
   DOM ELEMENTS
===================================================== */

const menu = document.getElementById("menu");

const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");
const scene5 = document.getElementById("scene5");
const scene6 = document.getElementById("scene6");
const scene7 = document.getElementById("scene7");
const scene8 = document.getElementById("scene8");
const scene9 = document.getElementById("scene9");
const scene10 = document.getElementById("scene10");
const scene11 = document.getElementById("scene11");
const scene12 = document.getElementById("scene12");

const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continueBtn");
const storyBtn = document.getElementById("storyBtn");
const photo1Btn = document.getElementById("photo1Btn");
const photo2Btn = document.getElementById("photo2Btn");
const photo3Btn = document.getElementById("photo3Btn");
const photo4Btn = document.getElementById("photo4Btn");
const questionBtn = document.getElementById("questionBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const cake = document.getElementById("cake");
const letterBtn = document.getElementById("letterBtn");
const endBtn = document.getElementById("endBtn");

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const progressBar = document.getElementById("progressBar");

/* =====================================================
   MUSIC
===================================================== */

let musicPlaying = false;

musicBtn.addEventListener("click",function(){

    if(musicPlaying){

        bgMusic.pause();

        musicBtn.innerHTML="🔇 Music OFF";

    }

    else{

        bgMusic.play();

        musicBtn.innerHTML="🔊 Music ON";

    }

    musicPlaying=!musicPlaying;

});

/* =====================================================
   SCENE CHANGE
===================================================== */

function changeScene(current,next){

    current.classList.remove("active");

    next.classList.add("active");

}

/* =====================================================
   PROGRESS BAR
===================================================== */

function updateProgress(value){

    progressBar.style.width=value+"%";

}

/* =====================================================
   START GAME
===================================================== */

startBtn.addEventListener("click",function(){

    bgMusic.play().catch(()=>{});

    musicPlaying=true;

    menu.classList.remove("active");

    scene1.classList.add("active");

    updateProgress(10);

});

/* =====================================================
   SCENE NAVIGATION
===================================================== */

continueBtn.addEventListener("click",function(){

    changeScene(scene1,scene2);

    updateProgress(20);

});

storyBtn.addEventListener("click",function(){

    changeScene(scene2,scene3);

    updateProgress(30);

});

photo1Btn.addEventListener("click",function(){

    changeScene(scene3,scene4);

    updateProgress(40);

});

photo2Btn.addEventListener("click",function(){

    changeScene(scene4,scene5);

    updateProgress(50);

});

photo3Btn.addEventListener("click",function(){

    changeScene(scene5,scene6);

    updateProgress(60);

});

photo4Btn.addEventListener("click",function(){

    changeScene(scene6,scene7);

    updateProgress(70);

});

questionBtn.addEventListener("click",function(){

    changeScene(scene7,scene8);

    updateProgress(80);

});

letterBtn.addEventListener("click",function(){

    changeScene(scene9,scene10);

    updateProgress(100);

});
/* =====================================================
   YES / NO GAME
===================================================== */

let yesScale = 1;

const noMessages = [

    "Are you sure? 🥺",
    "Think Again ❤️",
    "Catch Me 😜",
    "Too Slow 😂",
    "Hehe 🤭",
    "Impossible 😆",
    "Still Trying? 😂",
    "Click YES ❤️"

];

let noCount = 0;

noBtn.addEventListener("mouseover",function(){

    const x = Math.random()*400-200;

    const y = Math.random()*250-125;

    noBtn.style.transform =
    `translate(${x}px,${y}px) scale(${1-noCount*0.08})`;

    yesScale += 0.15;

    yesBtn.style.transform =
    `scale(${yesScale})`;

    noBtn.innerHTML =
    noMessages[noCount % noMessages.length];

    noCount++;

});

/* =====================================================
   YES BUTTON
===================================================== */

yesBtn.addEventListener("click",function(){

    launchConfetti();

    let count = 0;

    const fireworks = setInterval(function(){

        launchFirework();

        count++;

        if(count>=10){

            clearInterval(fireworks);

        }

    },700);

    setTimeout(function(){

        changeScene(scene8,scene9);

        updateProgress(90);

    },1200);

});

/* =====================================================
   CAKE SURPRISE
===================================================== */

let cakeClicks = 0;

cake.addEventListener("click",function(){

    cake.style.transform="scale(1.25)";

    setTimeout(function(){

        cake.style.transform="scale(1)";

    },250);

    launchConfetti();

    cakeClicks++;

    if(cakeClicks==1){

        alert("🎂 Make a Birthday Wish ❤️");

    }

    if(cakeClicks==5){

        alert("💖 Secret Unlocked!\n\nI Love You Forever ❤️");

    }

});

/* =====================================================
   CONFETTI
===================================================== */

function launchConfetti(){

    const colors=[

        "#ff1493",
        "#ff69b4",
        "#ffc0cb",
        "#ffffff",
        "#ffd700",
        "#87cefa"

    ];

    for(let i=0;i<180;i++){

        const confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.top="-20px";

        confetti.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        confetti.style.animationDuration=
        (2+Math.random()*2)+"s";

        document.body.appendChild(confetti);

        setTimeout(function(){

            confetti.remove();

        },4000);

    }

}

/* =====================================================
   FIREWORKS
===================================================== */

function launchFirework(){

    const colors=[

        "#ff1493",
        "#ff69b4",
        "#ffd700",
        "#00d4ff",
        "#ffffff",
        "#00ff99"

    ];

    const centerX=Math.random()*window.innerWidth;

    const centerY=Math.random()*window.innerHeight*0.6;

    for(let i=0;i<60;i++){

        const firework=document.createElement("div");

        firework.className="firework";

        firework.style.left=centerX+"px";

        firework.style.top=centerY+"px";

        firework.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        const angle=Math.random()*Math.PI*2;

        const distance=80+Math.random()*120;

        firework.style.setProperty(

            "--x",

            Math.cos(angle)*distance+"px"

        );

        firework.style.setProperty(

            "--y",

            Math.sin(angle)*distance+"px"

        );

        document.body.appendChild(firework);

        setTimeout(function(){

            firework.remove();

        },1500);

    }

}
/* =====================================================
   LETTER
===================================================== */

const envelope = document.getElementById("envelope");
const flap = document.querySelector(".envelopeFlap");
const letterPaper = document.querySelector(".letterPaper");
const letterText = document.getElementById("letterText");

/* =====================================================
   LETTER MESSAGE
===================================================== */

const message = `

Happy Birthday, My Dearest Deeksha ❤️🎂

Today is one of the most special days of the year because it's the day the most beautiful person in my life was born. I wanted to give you something that wasn't bought from a shop, something that couldn't be wrapped in gift paper. So I made this little journey for you, filled with our memories, because every memory with you is more valuable to me than any expensive gift.

Before you came into my life, I never imagined someone could care about me the way you do. You didn't just become a part of my life—you became my happiness, my comfort, my peace, and my biggest strength.

You know about my chronic liver disease. Many people only see the illness, but you always see the person behind it. Every time you ask me, "Did you take your medicines?" or "Did you eat on time?" or "How are you feeling today?", I don't just hear questions. I feel your love, your concern, and your care. Sometimes the way you look after me reminds me of my own mom. That feeling is impossible to explain with words. It makes me feel safe, loved, and important.

Whenever I'm tired, worried, or afraid about my health, your words make me stronger. You have no idea how much your care means to me. Even on the hardest days, just knowing that someone like you is thinking about me gives me hope.

Thank you for accepting me with all my imperfections. Thank you for staying beside me even when life isn't easy. Thank you for making me smile when I forget how to smile myself.

I know you love me, even though you don't always say it openly. I understand why. I know you're afraid that your parents may not accept our relationship, and I respect your feelings. I never want you to feel forced or rushed.

But I want you to know something from the bottom of my heart.

Love built on honesty, patience, respect, and trust is worth believing in. I truly hope that one day we'll be able to speak to our families with confidence and maturity. I hope they'll see the love, respect, and care we have for each other. I believe that with time, understanding, and patience, many things that seem impossible today can become possible tomorrow.

Please don't lose hope because of fear. Instead, let's keep believing in our future together.

For me, you are not just my girlfriend.

You are the person I dream about when I think of my future.

You are the one I want to laugh with, celebrate with, grow old with, and spend my entire life with.

When I imagine my future, you're always there in every dream.

Every success feels more meaningful if I can share it with you.

Every difficulty feels lighter if you're beside me.

Every day becomes brighter because you're a part of it.

You have changed my life in ways you may never fully realize.

Your smile makes my bad days better.

Your happiness makes me happy.

Your tears make me want to protect you.

Your dreams become my dreams.

Your pain becomes my pain.

Seeing you happy is one of the greatest blessings I could ever ask for.

I promise that no matter what life brings, I will always respect you, support you, listen to you, and stand beside you. I want to be the person who encourages you to chase your dreams, celebrates every achievement, and comforts you whenever life becomes difficult.

I don't expect life to be perfect.

I only hope that we can face every challenge together, hand in hand.

If we stay together, we'll create thousands of new memories, celebrate countless birthdays, laugh at silly moments, overcome difficult times, and build a life filled with love, trust, and understanding.

Today is your birthday, so forget every worry for a while and just smile.

Smile because you deserve happiness.

Smile because you're deeply loved.

Smile because you're incredibly special.

Smile because you make someone's world brighter every single day.

Thank you for loving me.

Thank you for believing in me.

Thank you for caring for me.

Thank you for accepting me just the way I am.

Thank you for being the most beautiful chapter of my life.

I don't know what tomorrow holds, but I know one thing for certain...

No matter where life takes us, my respect, gratitude, and love for you will always remain.

I pray that this birthday brings you endless happiness, good health, success, peace, and beautiful memories. May every wish you make today come true, and may your smile never fade because it's one of the most precious things in my life.

Happy Birthday once again, my beautiful Deeksha.

I love you today.

I love you tomorrow.

I will keep loving you with all my heart.

Forever and always.

❤️ Happy Birthday, My Love. ❤️

`;

/* =====================================================
   TYPEWRITER
===================================================== */

const words = message.split(" ");

let wordIndex = 0;

function typeWriter(){

    if(wordIndex < words.length){

        letterText.innerHTML += words[wordIndex] + " ";

        wordIndex++;

        letterPaper.scrollTop = letterPaper.scrollHeight;

        setTimeout(typeWriter,150);

    }

}

/* =====================================================
   OPEN ENVELOPE
===================================================== */

function openEnvelope(){

    flap.style.transform = "rotateX(180deg)";

    setTimeout(function(){

        letterPaper.style.bottom = "20px";

    },800);

    setTimeout(function(){

        wordIndex = 0;

        letterText.innerHTML = "";

        typeWriter();

    },1800);

}

/* =====================================================
   READ LETTER
===================================================== */

letterBtn.addEventListener("click",function(){

    changeScene(scene9,scene10);

    openEnvelope();

});

/* =====================================================
   CONTINUE TO SLIDESHOW
===================================================== */

endBtn.addEventListener("click",function(){

    startMemorySlideshow();

});
/* =====================================================
   MEMORY SLIDESHOW
===================================================== */

const memoryImage = document.getElementById("memoryImage");
const memoryCaption = document.getElementById("memoryCaption");

const memories = [

{
    image:"images/photo1.jpeg",
    text:"The day this picture was taken became one of my favorite memories. ❤️"
},

{
    image:"images/photo2.jpeg",
    text:"Every smile of yours makes my world brighter. 🌸"
},

{
    image:"images/photo3.jpeg",
    text:"Every moment spent with you is a blessing. 💖"
},

{
    image:"images/photo4.jpeg",
    text:"These memories will stay in my heart forever. ✨"
},

{
    image:"images/photo5.jpeg",
    text:"Happy Birthday, Deeksha. I love every memory we've created together. ❤️"
}

];

let memoryIndex = 0;

function startMemorySlideshow(){

    memoryIndex = 0;

    changeScene(scene10,scene11);

    showMemory();

}

function showMemory(){

    if(memoryIndex >= memories.length){

        setTimeout(function(){

            changeScene(scene11,scene12);

            launchConfetti();

        },3000);

        return;

    }

    memoryImage.style.opacity = "0";
    memoryCaption.style.opacity = "0";

    setTimeout(function(){

        memoryImage.src = memories[memoryIndex].image;

        memoryCaption.innerHTML =
        memories[memoryIndex].text;

        memoryImage.style.opacity = "1";
        memoryCaption.style.opacity = "1";

        memoryIndex++;

        setTimeout(showMemory,4000);

    },800);

}

/* =====================================================
   FLOATING HEARTS
===================================================== */

setInterval(createHeart,500);

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="💖";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=
    (20+Math.random()*20)+"px";

    document.body.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },8000);

}

/* =====================================================
   SAKURA PETALS
===================================================== */

setInterval(createPetal,700);

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML="🌸";

    petal.style.left=Math.random()*100+"vw";

    petal.style.fontSize=
    (18+Math.random()*15)+"px";

    petal.style.animationDuration=
    (6+Math.random()*4)+"s";

    document.body.appendChild(petal);

    setTimeout(function(){

        petal.remove();

    },10000);

}

/* =====================================================
   CURSOR HEARTS
===================================================== */

document.addEventListener("mousemove",function(e){

    const heart=document.createElement("div");

    heart.className="cursorHeart";

    heart.innerHTML="💖";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    document.body.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },800);

});

/* =====================================================
   CLICK SPARKLES
===================================================== */

document.addEventListener("click",function(e){

    for(let i=0;i<10;i++){

        const sparkle=document.createElement("div");

        sparkle.className="sparkle";

        sparkle.innerHTML="✨";

        sparkle.style.left=e.clientX+"px";

        sparkle.style.top=e.clientY+"px";

        const x=(Math.random()*160)-80;

        const y=(Math.random()*160)-80;

        sparkle.style.setProperty("--x",x+"px");

        sparkle.style.setProperty("--y",y+"px");

        document.body.appendChild(sparkle);

        setTimeout(function(){

            sparkle.remove();

        },900);

    }

});