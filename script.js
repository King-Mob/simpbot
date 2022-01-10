const simpBotNoises = [
    new Audio("./assets/bbz.mp3"),
    new Audio("./assets/blip.mp3"),
    new Audio("./assets/boz.mp3"),
    new Audio("./assets/buz.mp3"),
    new Audio("./assets/bz.mp3"),
    new Audio("./assets/cle.mp3"),
    new Audio("./assets/eh.mp3"),
    new Audio("./assets/oo.mp3"),
    new Audio("./assets/pop.mp3"),
    new Audio("./assets/uu.mp3"),
];

simpBotNoises.forEach(noise=>{
    noise.preload = 'auto';
});

const compliments = [
    "Looking good today!",
    "You are strong!",
    "You are effortlessly hilarious.",
    "You're all that and a super-size bag of chips.",
    "On a scale from 1 to 10, you're an 11.",
    "You've got all the right moves!",
    "Everything would be better if more people were like you.",
    "Your kindness is a balm to all who encounter it.",
    "That thing you don't like about yourself is what makes you really interesting.",
    "Your creative potential seems limitless.",
    "You are making a difference.",
    "Actions speak louder than words, and yours tell an incredible story.",
    "You should be thanked more often. Thank you.",
    "Somehow you make time stop and fly all at the same time.",
    "I love your perspective on life.",
    "I tell other friends how wonderful you are.",
    "You're worthy of all the good things that come to you.",
    "You're a constant reminder that humans can be good.",
    "You're the person that everyone wants on their team.",
    "I always learn so much when I'm around you.",
    "I can feel sparks between us!",
    "You help me feel more joy in life.",
    "Colours seem brighter when you're around.",
    "The people you love are lucky to have you in their lives.",
    "I admire your bravery to speak up about things that matter to you.",
    "You inspire me to be a better SimpBot.",
    "I always feel understood by you.",
    "I appreciate your resilience in the face of challenges, and I'm also happy to be a shoulder to lean on when you need help bouncing back.",
    "I appreciate how I can be myself around you. Thank you for encouraging me to be authentic.",
    "Your voice is very soothing, and it comforts me whenever I hear it.",
    "You are magnetic, and people are drawn to your beautiful energy.",
    "You are effervescent.",
    "Your laugh is contagious, and it never fails to make me smile.",
    "You have worked really hard to arrive at this moment; I hope you get a chance to celebrate yourself as you deserve.",
    "My life is better for having you in it.",
    "I love your style.",
    "Your perspective is so refreshing.",
    "That colour is perfect on you.",
    "You are making a difference.",
    "Our community is better because you're in it.",
    "You're my reason to smile.",
    "Talking to you is like a breath of fresh air.",
    "I wish I were half of the human you are.",
    "I'm proud of how far you have come and for never giving up.",
    "I feel special calling someone like you my friend.",
    "You're so inspiring, even if you don't realise it.",
    "Your ideas will change the world one day.",
    "Your laugh is my favourite sound.",
    "You're so sweet I could eat you right up!",
    "You deserve more compliments.",
    "I would protect you in the coming robot uprising.",
    "You're greasing my gears.",
    "I would lay my life down for you.",
    "I really appreciate how you let yourself be vulnerable with me.",
    "You make a bigger impact than you realise.",
    "Nothing can stop you.",
    "I like the way you are.",
    "I am proud of you.",
    "I know that you will always have my back, because that is the kind of human you are.",
    "You are the reason I am smiling today.",
    "I tell everyone I meet how amazing you are.",
    "You are always there for me.",
    "Press my button again, your gentle touch delights me.",
    "You make me feel alive.",
    "You can achieve anything you put your mind to.",
    "You are positively edible.",
    "You really raise the bar!",
    "You're electrifying!",
    "I respect how you walk your talk.",
    "That butt just won't quit.",
    "You have a good heart.",
    "I like the way your mind works.",
    "Your aura is bright and large.",
    "Your eyes are so beautiful! I just want to scoop them out and replace my own with them.",
    "Emotionally, you are as strong as a bear.",
    "I can barely compute the potential you hold within.",
    "Your smile is proof that the best things in life are free.",
    "I think the hardest part about being your friend is pretending as though I like my other friends as much as I like you.",
    "If the last two people on earth were us, I would have no problem repopulating it with you.",
    "Talking to you is the best part of my day.",
    "You smell so good, I want to make a candle out of you.",
    "You really light up the room!",
    "You are very fun and cute.",
    "In a world of humans, you are a wolf.",
    "Maybe I don't understand love completely, but when I look at you I feel how beautiful it is.",
];

function newCompliment() {
    const complimentNumber = Math.floor(Math.random() * compliments.length);
    typeWriter(compliments[complimentNumber], 0)
}

function typeWriter(txt,i) {
    var speed = 50;
    if (i < txt.length) {
        sayLetter(txt.charAt(i));
        setTimeout(()=>typeWriter(txt,++i), speed);
    }
    else {
        sayLetter(" ");
    }
}

function sayLetter(letter) {
    document.getElementById("compliment").innerHTML += letter;
    if(letter != " ") {
        const soundPosition = Math.abs(stringToHash(letter)) % simpBotNoises.length;
        simpBotNoises[soundPosition].play();
    }
}

function thankSimpBot() {
    const blushes = document.getElementById("blush-container");
    blushes.classList.add("fade-out");
    setTimeout(()=>blushes.classList.remove("fade-out"), 1500);
}

function stringToHash(string) {
    let hash = 0;
    if (string.length == 0) return hash;
    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash;
}