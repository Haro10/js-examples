function Leader(rank = 'high'){
    this.rankSalary = rank;
}

Leader.prototype.createPlan = function(){
    console.log('create a plan')
}

function TechLeader(rank){
    // if not have this keyword -> point to window
    Leader.call(this, rank);
}

const extend = (Child, Parent) => {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child;
}

extend(TechLeader, Leader);

// //Before reassign TechLeader.prototype.constructor = TeachLeader;
// //new TechLeader.prototype.constructor() = new TeachLeader;
// TechLeader.prototype = Object.create(Leader.prototype)

// //reassign constructor from Leader's constructor to TechLeader's constructor
// TechLeader.prototype.constructor = TechLeader;

TechLeader.prototype.reviewCode = function(){
    console.log('review code')
}

//Overriding createPlan method
TechLeader.prototype.createPlan = function(){
    //alo call the createPlan() of Leader (the parent objetc)
    Leader.prototype.createPlan.call(this)
    console.log('create a plan by techleader')
}

const tl1 = new TechLeader('fucking awesome rank');


//Use Class style of ES2015
// class Leader {
//     constructor(rank = 'high') {
//         this.rankSalary = rank;
//     }
//     createPlan() {
//         console.log('create a plan');
//     }
// }


// class TechLeader {
//     constructor(rank) {
//         // if not have this keyword -> point to window
//         Leader.call(this, rank);
//     }
//     // //Before reassign TechLeader.prototype.constructor = TeachLeader;
//     // //new TechLeader.prototype.constructor() = new TeachLeader;
//     // TechLeader.prototype = Object.create(Leader.prototype)
//     // //reassign constructor from Leader's constructor to TechLeader's constructor
//     // TechLeader.prototype.constructor = TechLeader;
//     reviewCode() {
//         console.log('review code');
//     }
//     //Overriding createPlan method
//     createPlan() {
//         //alo call the createPlan() of Leader (the parent objetc)
//         Leader.prototype.createPlan.call(this);
//         console.log('create a plan by techleader');
//     }
// }

// const extend = (Child, Parent) => {
//     Child.prototype = Object.create(Parent.prototype)
//     Child.prototype.constructor = Child;
// }

// extend(TechLeader, Leader);



// const tl1 = new TechLeader('fucking awesome rank');

