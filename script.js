$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

// Attack button on click, decrease HP and AP
    // Separate functions for ease
// HP and AP cannot be negative
// Update Attack button
// Update Hit Point button
// If FF runs out of HP, replace walk class with dead class
// If you run out of AP, replace walk class w/ jump

function onReady() {
    $('.attack-btn.star-fire').on('click', decreaseStarFirePoints);
    $('.attack-btn.dragon-blade').on('click', decreaseDragonBladePoints);
    $('.attack-btn.entangle').on('click', decreaseEntanglePoints);
    $('.attack-btn.arcane-sceptre').on('click', decreaseArcaneScepterPoints);
    // $('body').on('click', '., deadFungus);
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

let fungusHitPoint = 100;
let attackPoint = 100;

function decreaseStarFirePoints () {
    fungusHitPoint -= 25;
    $('.hp-text').text(fungusHitPoint);
    if (fungusHitPoint  <= 0) {
        $('.hp-text').text('0');
        deadFungus();
        return fungusHitPoint;
    } 
    attackPoint -= 33;
    $('.ap-text').text(attackPoint);
    if (attackPoint <= 0) {
        $('.ap-text').text('0');
        jumpFungus ();
        return attackPoint;
    } 
}

function decreaseDragonBladePoints () {
    fungusHitPoint -= 47;
    $('.hp-text').text(fungusHitPoint);
    if (fungusHitPoint  <= 0) {
        $('.hp-text').text('0');
        deadFungus();
        return fungusHitPoint;
    } 
    attackPoint -= 38;
    $('.ap-text').text(attackPoint);
    if (attackPoint  <= 0) {
        $('.ap-text').text('0');
        jumpFungus ();
        return attackPoint;
    } 
}

function decreaseEntanglePoints () {
    fungusHitPoint -= 9;
    $('.hp-text').text(fungusHitPoint);
    if (fungusHitPoint  <= 0) {
        $('.hp-text').text('0');
        deadFungus();
        return fungusHitPoint;
    } 
    attackPoint -= 23;
    $('.ap-text').text(attackPoint);
    if (attackPoint  <= 0) {
        $('.ap-text').text('0');
        jumpFungus ();
        return attackPoint;
    } 
}

function decreaseArcaneScepterPoints () {
    fungusHitPoint -= 14;
    $('.hp-text').text(fungusHitPoint);
    if (fungusHitPoint <= 0) {
        $('.hp-text').text('0');
        deadFungus();
        return fungusHitPoint;
    } 
    attackPoint -= 12;
    $('.ap-text').text(attackPoint);
    if (attackPoint  <= 0) {
        $('.ap-text').text('0');
        jumpFungus ();
        return attackPoint;
    } 
}

function deadFungus () {
    $('.freaky-fungus.walk').removeClass("walk");
    $('.freaky-fungus').addClass("dead");
    return; 
}

function jumpFungus () {
    $('.freaky-fungus.walk').removeClass("walk");
    $('.freaky-fungus').addClass("jump");
    return; 
}

// function decreaseArcaneScepterBars () {
//     $('#hp-meter').append (`
    
//     `)

// }

