function Leader(){}

Leader.prototype.createPlan = function(){
    console.log('create a plan')
}

function TechLeader(){}

TechLeader.prototype = Object.create(Leader.prototype)
TechLeader.prototype.reviewCode = function(){
    console.log('review code')
}

const tl1 = new TechLeader();
