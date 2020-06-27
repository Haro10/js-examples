/*
  Favor composition  over Inheritance
*/
const mustRestructure = {
    restructure: function (){
        console.log('restructure all things')
    }
}

const mustHaveAtomicBomb = {
    createAtommicBom: function(){
        console.log('create Atombombs')
    }
}

const doCheatToTakeEverything = {
    cheat: function(){
        console.log('cheating to take eveything')
    }
}

const Conuntry1 = function(){}

Object.assign(Conuntry1.prototype, mustRestructure, mustHaveAtomicBomb)

const Conuntry2 = function(){}

Object.assign(Conuntry2.prototype, mustRestructure, doCheatToTakeEverything)