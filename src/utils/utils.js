const analyzerLogic = (userInputs)=>{
    console.log("at the start of logic function"+JSON.stringify(userInputs))

    const deploy = deploymentRecommendations(userInputs)
    const state = stateManagementRecommendations(userInputs)

    const coordination = coordinationRecommendations(userInputs);

    return [coordination,deploy,state]
};

const coordinationRecommendations = (userInput)=>{
    const coordination = [];
    coordination.push( ["1", "Server Side Discovery Pattern", "Uniform clients/Industrially recommended pattern"])

    if(userInput.frontends === undefined  ){
        coordination.push( ["2", "Api Gateway Pattern", "Ease of extension"])
    }
    else if(userInput.frontends.length>0   ){
        coordination.push( ["2", "Backend for Frontend (BFF) Pattern", "Multiple formats of client need different levels of data"])
    }
    else{
        coordination.push( ["2", "Api Gateway Pattern", "Ease of extension"])
    }

    return coordination;
}

const deploymentRecommendations = (userInput)=>{
    const recommendations = [];

    switch (userInput.cost){
        case 0:
            recommendations.push( ["1", "Serverless deployment", "Low cost, High Scalability, Low warm up time"]);
            break;
        default:
            recommendations.push( ["1", "Single instance per host(container) pattern", "High Scalability"],
                ["2", "Serverless deployment", "Low cost, High Scalability, Low warm up time dileka"]);
    }

    return recommendations;
}

const stateManagementRecommendations = (userInput)=>{
    const recommendations = [];

    switch (userInput.cost){
        case 0:
            recommendations.push( ["1", "Serverless deployment", "Low cost, High Scalability, Low warm up time"]);
            break;
        default:
            recommendations.push( ["1", "Single instance per host(container) pattern", "High Scalability"],
                ["2", "Serverless deployment", "Low cost, High Scalability, Low warm up time"]);
    }

    return recommendations;
}

module.exports = {
    analyzerLogic
};
