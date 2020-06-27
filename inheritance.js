function Leader(){}

Leader.prototype.createPlan = function(){
    console.log('create a plan')
}

function TechLeader(){}

//Before reassign TechLeader.prototype.constructor = TeachLeader;
//new TechLeader.prototype.constructor() = new TeachLeader;
TechLeader.prototype = Object.create(Leader.prototype)

//reassign constructor from Leader's constructor to TechLeader's constructor
TechLeader.prototype.constructor = TechLeader;

TechLeader.prototype.reviewCode = function(){
    console.log('review code')
}

const tl1 = new TechLeader();
