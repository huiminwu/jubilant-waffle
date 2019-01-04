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
    const $choicePD = $('.choicePD');
    const $PDZombie = $('.PDZombie');
    const $PDQuill = $('#PDQuill');
    const $PDRun = $('#PDRun');
    const $PDDodge = $('#PDDodge');
    const $choiceCD = $('.choiceCD');
    const $CDLocate = $('.CDLocate');
    const $CDRavine = $('#CDRavine');
    const $CDWillow = $('#CDWillow');
    const $choicePDQuill = $('.choicePDQuill');
    const $PDQuillZ = $('.PDQuillZ');
    const $PDQuillRun = $('#PDQuillRun');
    const $PDQuillAttack = $('#PDQuillAttack');
    const $choicePDRun = $('.choicePDRun');
    const $PDRunChest = $('.PDRunChest');
    const $PDRunLeave = $('#PDRunLeave');
    const $PDRunUnlock = $('#PDRunUnlock');
    const $choicePDDodge = $('.choicePDDodge');
    const $choiceCDRavine = $('.choiceCDRavine');
    const $CDRavineBridge = $('.CDRavineBridge');
    const $CDRavineRelocate = $('#CDRavineRelocate');
    const $CDRavineCross = $('#CDRavineCross');
    const $choiceCDWillow = $('.choiceCDWillow');
    const $CDWillowWind = $('.CDWillowWind');
    const $CDWillowCont = $('#CDWillowCont');
    const $CDWillowHouse = $('#CDWillowHouse');
    const $choiceCDRCross = $('.choiceCDRCross');
    const $CDRCrossChicken =  $('.CDRCrossChicken');
    const $CDRCrossEat = $('#CDRCrossEat');
    const $CDRCrossPet = $('#CDRCrossPet');
    const $choiceCDWCont = $('.choiceCDWCont');
    const $CDWArrive = $('.CDWArrive');
    const $CDWContN = $('#CDWContN');
    const $CDWContY = $('#CDWContY');
    const $choiceCDWHouse = $('.choiceCDWHouse');
    const $CDWBagel = $('.CDWBagel');
    const $CDWBagelN = $('#CDWBagelN');
    const $CDWBagelY = $('#CDWBagelY');
    const $choicePPQRun = $('.choicePPQRun');
    const $choicePPQAttack = $('.choicePPQAttack');
    const $PPQACandy = $('.PPQACandy');
    const $PPQAttackY = $('#PPQAttackY');
    const $PPQAttackN = $('#PPQAttackN');
    const $choicePPRLeave = $('.choicePPRLeave');
    const $PPRLPhoenix = $('.PPRLPhoenix');
    const $PPRLeaveLeave = $('#PPRLeaveLeave');
    const $PPRLeaveAttack = $('#PPRLeaveAttack');
    const $choicePPRUnlock = $('.choicePPRUnlock');
    const $PPRUZombies = $('.PPRUZombies');
    const $PPRUnlockY = $('#PPRUnlockY');
    const $PPRUnlockN = $('#PPRUnlockN');
    const $choiceCDRCrossEat = $('.choiceCDRCrossEat');
    const $choiceCDRCrossPet = $('.choiceCDRCrossPet');
    const $CDRCPBoss = $('.CDRCPBoss');
    const $Cfight = $('.Cfight');
    const $run = $('.run');
    const $choiceCDWContN = $('.choiceCDWContN');
    const $CDWCNBoss = $('.CDWCNBoss');
    const $choiceCDWContY = $('.choiceCDWContY');
    const $choiceCDWBagelN = $('.choiceCDWBagelN');
    const $CDWBNBoss = $('.CDWBNBoss');
    const $choiceCDWBagelY = $('.choiceCDWBagelY');
    const $choicePPQAttackY = $('.choicePPQAttackY');
    const $choicePPQAttackN = $('.choicePPQAttackN');
    const $PPQANBoss = $('.PPQANBoss');
    const $Pfight = $('.Pfight');
    const $choicePPRLeaveLeave = $('.choicePPRLeaveLeave');
    const $choicePPRLeaveAttack = $('.choicePPRLeaveAttack');
    const $choicePPRUnlockY = $('.choicePPRUnlockY');
    const $PPRUYBoss = $('.PPRUYBoss');
    const $PPRfight = $('#PPRfight');
    const $choicePPRUnlockN = $('.choicePPRUnlockN');
    const $choiceCfight = $('.choiceCfight');
    const $choicePfight = $('.choicePfight');
    const $choicePPRfight = $('.choicePPRfight');
    const $choicerun = $('.choicerun');




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
        $choicePDDodge.hide();
        $choicePPQRun.hide();
        $choiceCDRCrossEat.hide();
        $choiceCDWContY.hide();
        $choiceCDWBagelY.hide();
        $choicePPQAttackY.hide();
        $choicePPRLeaveLeave.hide();
        $choicePPRLeaveAttack.hide();
        $choicePPRUnlockN.hide();
        $choiceCfight.hide();
        $choicePfight.hide();
        $choicePPRfight.hide();
        $choicerun.hide();
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
    
    $CD.on('click', () => {
        $choiceC.hide();
        $choiceCD.show();
        $Cactions.hide();
        $CDLocate.show();
    }); 

    $PD.on('click', () => {
        $choiceP.hide();
        $choicePD.show();
        $Pactions.hide();
        $PDZombie.show();
    }); 

    $PDQuill.on('click', () => {
        $choicePD.hide();
        $choicePDQuill.show();
        $PDZombie.hide();
        $PDQuillAttack.show();
    }); 

    $PDRun.on('click', () => {
        $choicePD.hide();
        $choicePDRun.show();
        $PDZombie.hide();
        $PDRunChest.show();
    }); 

    $PDDodge.on('click', () => {
        $choicePD.hide();
        $choicePDDodge.show();
        $PDZombie.hide();
    }); 

    $CDRavine.on('click', () => {
        $choiceCD.hide();
        $choiceCDRavine.show();
        $CDLocate.hide();
        $CDRavineBridge.show();
    }); 

    $CDWillow.on('click', () => {
        $choiceCD.hide();
        $choiceCDWillow.show();
        $CDLocate.hide();
        $CDWillowWind.show();
    }); 

    $PDQuillRun.on('click', () => {
        $choicePDQuill.hide();
        $choiceiPDQRun.show();
        $PDQuillZ.hide();
    }); 

    $PDQuillAttack.on('click', () => {
        $choicePDQuill.hide();
        $choicePPQAttack.show();
        $PDQuillZ.hide();
        $PPQACandy.show();
    }); 

    $PDRunLeave.on('click', () => {
        $choicePDRun.hide();
        $choicePPRLeave.show();
        $PDRunChest.hide();
        $PPRLPhoenix.show();
    }); 

    $PDRunUnlock.on('click', () => {
        $choicePDRun.hide();
        $choicePPRUnlock.show();
        $PDRunChest.hide();
        $PPRUZombies.show();
    }); 

    $CDRavineRelocate.on('click', () => {
        $choiceCDRavine.hide();
        $choiceCDWillow.show();
        $CDRavineBridge.hide();
        $CDWillowWind.show();
    }); 

    $CDRavineCross.on('click', () => {
        $choiceCDRavine.hide();
        $choiceCDRCross.show();
        $CDRavineBridge.hide();
        $CDRCrossChicken.show();
    }); 

    $CDWillowCont.on('click', () => {
        $choiceCDWillow.hide();
        $choiceCDWCont.show();
        $CDWillowWind.hide();
        $CDWArrive.show();
    }); 

    $CDWillowHouse.on('click', () => {
        $choiceCDWillow.hide();
        $choiceCDWHouse.show();
        $CDWillowWind.hide();
        $CDWBagel.show();
    }); 

    $CDRCrossEat.on('click', () => {
        $choiceCDRCross.hide();
        $choiceCDRCrossEat.show();
        $CDRCrossChicken.hide();
    }); 

    $CDRCrossPet.on('click', () => {
        $choiceCDRCross.hide();
        $choiceCDRCrossPet.show();
        $CDRCrossChicken.hide();
        $CDRCPBoss.show();
    }); 

    $CDWContN.on('click', () => {
        $choiceCDWCont.hide();
        $choiceCDWContN.show();
        $CDWArrive.hide();
        $CDWCNBoss.show();
    }); 

    $CDWContY.on('click', () => {
        $choiceCDWCont.hide();
        $choiceCDWContY.show();
        $CDWArrive.hide();
    }); 

    $CDWBagelN.on('click', () => {
        $choiceCDWHouse.hide();
        $choiceCDWBagelN.show();
        $CDWBagel.hide();
        $CDWBNBoss.show();
    }); 

    $CDWBagelY.on('click', () => {
        $choiceCDWHouse.hide();
        $choiceCDWBagelY.show();
        $CDWBagel.hide();
    }); 

    $PPQAttackY.on('click', () => {
        $choicePPQAttack.hide();
        $choicePPQAttackY.show();
        $PPQACandy.hide();
    }); 

    $PPQAttackN.on('click', () => {
        $choicePPQAttack.hide();
        $choicePPQAttackN.show();
        $PPQACandy.hide();
        $PPQANBoss.show();
    }); 

    $PPRLeaveLeave.on('click', () => {
        $choicePPRLeave.hide();
        $choicePPRLeaveLeave.show();
        $PPRLPhoenix.hide();
    }); 

    $PPRLeaveAttack.on('click', () => {
        $choicePPrLeave.hide();
        $choicePPRLeaveAttack.show();
        $PPRLPhoenix.hide();
    }); 

    $PPRUnlockY.on('click', () => {
        $choicePPRUnlock.hide();
        $choicePPRUnlockY.show();
        $PPRUZombies.hide();
        $PPRUYBoss.show();
    }); 

    $PPRUnlockN.on('click', () => {
        $choicePPRUnlock.hide();
        $choicePPRUnlock.show();
        $PPRUZombies.hide();
    }); 

    $Cfight.on('click', () => {
        $choiceCDRCrossPet.hide();
        $CDRCPBoss.hide();
        $choiceCDWContN.hide();
        $CDWCNBoss.hide();
        $choiceCDWBagelN.hide();
        $CDWBNBoss.hide();
        $choiceCfight.show();
    });

    $Pfight.on('click', () => {
        $choicePPQAttackN.hide();
        $PPQANBoss.hide();
        $choicePfight.show();
    });

    $PPRfight.on('click', () => {
        $choicePPRUnlockY.hide();
        $PPRUYBoss.hide();
        $choicePPRfight.show();
    });
    
    $run.on('click', () => {
        $choicePPRUnlockY.hide();
        $PPRUYBoss.hide();
        $choicePPQAttackN.hide();
        $PPAANBoss.hide();
        $choiceCDWBagelN.hide();
        $choiceCDWContN.hide();
        $choiceCDRCrossPet.hide();
        $CDRCPBoss.hide();
        $CDWCNBoss.hide();
        $CDWBNBoss.hide();
        $choicerun.show();
    });
});
/*I copied and pasted these commented-out things, and then filled them in so I could work faster.*/
/* 
    $.on('click', () => {
        $.hide();
        $.show();
        $.hide();
        $.show();
    }); 
*/ 
//const $ = $('');
