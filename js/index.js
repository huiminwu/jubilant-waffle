$(document).ready(() => {
  /* These variables connecet the HTML elements to Java Script*/
    const $intro = $('.intro');
    const $choiceY = $('.choiceY');
    const $Y = $('#Y');
    const $choice1 = $('.choice1');
    const $choice2Y = $('.choice2Y');
    const $N = $('.N');
    const $choiceN = $('.choiceN');
    const $restart = $('.restart');
    const $YP = $('#YP');
    const $choiceYP = $('.choiceYP');
    const $choiceNC = $('.choiceNC'); 
    const $choice2YP = $('.choice2YP');
    const $YPC = $('#YPC');
    const $NC = $('#NC');
    const $choiceYPC = $('.choiceYPC');
    const $R = $('#R');
    const $C = $('#C');
    const $P = $('#P');
    const $choiceClass = $('#choiceClass');
    const $choiceR = $('.choiceR');
    const $returnClass = $('.returnClass');
    const $choiceC = $('.choiceC');
    const $Cactions = $('.Cactions');
    const $choiceP = $('.choiceP');
    const $Pactions = $('.Pactions');
    const $choicePactions = $('.choicePactions');
    const $choiceCactions = $('.choiceCactions');
    const $PD = $('#PD');
    const $CD = $('#CD');

     /*These function hide and show different HTML elements when other elements are clicked. This allows the player to go down different paths.*/
    $Y.on('click', () => {
        $intro.hide();
        $choiceY.show();
        $choice1.hide();
        $choice2Y.show();
    });
      
    $N.on('click', () => {
        $intro.hide();
        $choiceY.hide();
        $choiceN.show();
    });
      
    $YP.on('click', () => {
        $choiceY.hide();
        $choiceYP.show();
        $choice2Y.hide();
        $choice2YP.show();
    });
  
    $restart.on('click', () => {
        $choiceN.hide();
        $choiceNC.hide();
        $intro.show();
        $choice1.show();
    });

    $NC.on('click', () => {
        $choiceYP.hide();
        $choiceNC.show();
        $choice2YP.hide();
    });

    $YPC.on('click', () => {
        $choiceYP.hide();
        $choiceYPC.show();
        $choice2YP.hide();
        $choiceClass.show();
    });

    $R.on('click', () => {
        $choiceYPC.hide();
        $choiceR.show();
        $choiceClass.hide();
    });

    $returnClass.on('click', () => {
        $choiceR.hide();
        $choiceP.hide();
        $choiceC.hide();
        $choiceYPC.show();
        $choicePactions.hide();
        $choiceCactions.hide();
        $choiceClass.show();
    });

    $C.on('click', () => {
        $choiceYPC.hide();
        $choiceC.show();
        $choiceClass.hide();
        $Cactions.show();
    });

    $P.on('click', () => {
        $choiceYPC.hide();
        $choiceP.show();
        $choiceClass.hide();
        $Pactions.show();
    });
    
});
/*I copied and pasted these commented-out things, and then filled them in so I could work faster.*/
/* $.on('click', () => {
    $.hide();
    $.show();
    $.hide();
  }); */ 
//const $ = $('');
