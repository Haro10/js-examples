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

const mixin = (objectTarget, ...items) => {
    Object.assign(objectTarget, ...items)
}

const Country1 = function(){}

mixin(Country1.prototype, mustRestructure, mustHaveAtomicBomb)
// Object.assign(Country1.prototype, mustRestructure, mustHaveAtomicBomb)

const Country2 = function(){}
mixin(Country2.prototype, mustRestructure, mustHaveAtomicBomb)
// Object.assign(Country2.prototype, mustRestructure, doCheatToTakeEverything)