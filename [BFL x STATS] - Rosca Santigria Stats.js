// Blood Sport Fighting League - Javascript //

/* TERP LORE: Before joining HYPE Guild and winning War 83 with PartisanHeroJINX, Rosca gained his modern combat roots in the 
Blood Sport Fighting League. In the league he was balanced fighter who focused on winning by submissions. He 
ended the league #4th in the Featherweight division and a record of 15 wins 10 losses.  

After winning over $2 million in fight money, Rosca decided to use some of that money for the guild and further use his
knowledge of Javascript to further bring his fighting stats to life. 
*/


// At the end -- comnsole.log() -- add any of the variables in between the parenthesis // 


// GOAL: To get all Blood Sport Fighting League stats in one place. Then we can take this to Web3. //


// PLAYER INFO - Basic information about the fighter. //


const playerInfo = {
    playerName: "Rosca Santigria",
    nickName: "Pistol",
    totalWins: 15,
    totalLosses: 10,
    fighterRank: 4,
    careerPoints: "$2,167,000",
}


// PLAYER BIO - Biological information about Rosca Santigria //

const playerBio = {
    hometown: "Philadelphia, PA",
    age: "28",
    height: "5 foot 10 inches",
    weight: "140",
    posture: "Demetrious Johnson",
    personality: "Georges St-Pierre",
}



// PLAYER OVERALL -- The overall stats for each category: Striking, Grappling, Fitness, Health //

const playerOverall = {
    striking: 55,
    grappling: 73,
    fitness: 81,
    health: 68,
}



// STRIKING STATS //

const strikingStats = {
    strikingSpeed: 58,
    power: 97,
    accuracy: 55,
    blocking: 50,
    headmovement: 49,
    footwork: 50,
    switchStance: 32,
    

}


// GRAPPLING STATS //

const grapplingStats = {
    clinchThrows: 30,
    clinchGrapple: 55,
    takeDown: 99,
    takedownDefense: 38,
    
    topGame: 100,
    bottomGame: 100,
    submissionOffense: 75,
    submissionDefense: 87, 
}


// FITNESS STATS -- How fit was Rosca wduring the fights?  //

const fitnessStats = {
    strikeStamina: 74,
    grappleStamina: 95, 
    endurance: 74,

}



// HEALTH STATS  -- Measures how well Rosca could fight against the opponents. The more health, the more durability.  //


const healthStats = {
    chinStrength: 100,
    bodyStrength: 54,
    legStrength: 50,
    toughness: 54,
    heart: 85,

}



// FIGHT STATISTICS -- How well did Rosca Perform fight wise in the BFL? //


const healthEvents = {
    stuns: 21,
    bodyHealthEvents: 2, 
    legHealthEvents: 2, 
    knockDowns: 16,

}

// STRIKES -- How well Rosca performed in striking the opponents //


const strikeS = {
    significantStrikesLanded: 499,
    significantStrikesThrown: 1161,
    totalStrikesLanded: 1232,
    totalStrikesThrown: 2892,
}


// TAKEDOWNS -- How well did Rosca take the opponents down and held them in ground contorl // 

const takeDowns = {
    takedownsSuccesful: 10,
    takedownsAttempted: 44,
    constrolSeconds: 1276,

}



// FIGHTS -- Describes how Rosca won the fights


const fights = {
    knockouts: 6,
    submissions: 9,
    decisions: 0,
}





// END OF RATINGS SECTION //


// MOVES -- Describes the moves Rosca used for fighting in the BFL - - Only moves lvl 2 and higher are counted //

const moves = {
    stocktonSlap: "lvl 2/5",
    coreClinchMoves: "lvl 4/5",
    
    singleLegTakedown: "lvl 3/5",
    doubleLegTakedown: "lvl 3/5",
    powerSingleLegTakedown: "lvl 3/5",
    powerDoubleLegTakedown: "lvl 3/5",
    imanariRoll: "lvl 2/5",

    armTriangle: "lvl 3/5",
    gogoplata: "2/5",
    guillotine: "3/5",
    kimura: "lvl 2/5",
    northSouthChoke: "lvl 2/5",
    omoplata: "lvl 2/5",
    rearNakedChoke: "lvl 2/5",
    triangle: "lvl 2/5",
    twister: "lvl 2/5",

    muayThaiCombos: "lvl 3/5",

    coreGroundMoves: "lvl 5/5",
    bjjTransitions: "lvl 5/5",
    bjjReversals: "lvl 5/5",
    bjjSweeps: "lvl 5/5",

    wrestlingTransitions: "lvl 4/5",
    wrestlingReversals: "lvl 3/5",
    wrestlingSweeps: "lvl 3/5,"

}


// END OF MOVES SECTION




// PERKS  SECTION  -- Perks are just a little boost to your abilities. Makes you fight like a champ. // 


// HEALTH PERKS //

const healthPerks = {
    wakeUpCall: "lvl 3/5",
    weatheringStorms: "lvl 2/5"
}


// GRAPPLING PERKS //

const grapplingPerks = {
    offTheBack: "lvl 4/5",
    groundAndPound: "lvl 4/5",
    
}

// FITNESS PERKS //

const fitnessPerks = {
    tapAlready: "lvl 4/5",
}