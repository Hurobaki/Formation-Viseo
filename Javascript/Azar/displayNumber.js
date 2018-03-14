/*
for (let i = 0; i <= 10; i++) {
    (function (i) {
        setTimeout(() => {
            console.log(i);
        }, 1000 * i);
    })(i);
    // le i entre parenthèses que tu comprends pas, c'est l'appel direct de la fonction juste au dessus, eh oui !
} */

 for (let i = 0; i <= 10; i++) {
    let s = i;
        setTimeout(() => {
            console.log(s);
        }, 1000 * i);
} 
/* Ca ne marche pas avec var à cause de la portée qui en dehors du block
for (let i = 0; i <= 10; i++) {
    var s = i;
        setTimeout(() => {
            console.log(s);
        }, 1000 * i);
} */
