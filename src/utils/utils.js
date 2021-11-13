const analyzerLogic = (userInputs)=>{
    console.log("at the start of logic function"+JSON.stringify(userInputs))

    const coordination = coordinationRecommendations(userInputs);
    const state = stateManagementRecommendations(userInputs)
    const deploy = deploymentRecommendations(userInputs)

    return [coordination,state, deploy]
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
/* tableData={[
                  ["1", "Event Driven State Management", "High scalability, contracts can be abstracted into events"],
                  ["2", "Event Sourcing", "Single source of truth(Recommended for banking systems)"],
                ]}*/
const stateManagementRecommendations = (userInput)=>{
    const recommendations = [];

    switch (userInput.domain){
        case 0||2||3:
            recommendations.push( ["1", "Event Driven State Management", "High scalability, contracts can be abstracted into events"]);
            break;
        default:
            recommendations.push( ["1", "Event Driven State Management", "High scalability, contracts can be abstracted into events"]);
    }
    switch (userInput.teamExperience){
        case 0:
            recommendations.push( ["2", "Message oriented state patterns", "This should be used by an organization beginning the microservices journey, but it may not suit your needs as your approach becomes more mature"]);
            break;
        default:
            recommendations.push( ["2", "Event Sourcing", "Single source of truth(Recommended for banking systems)"]);
    }

    return recommendations;
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

module.exports = {
    analyzerLogic
};
