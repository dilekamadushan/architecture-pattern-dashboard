const analyzerLogic = (userInputs) => {
    console.log("at the start of logic function" + JSON.stringify(userInputs))

    const coordination = coordinationRecommendations(userInputs);
    const state = stateManagementRecommendations(userInputs)
    const deploy = deploymentRecommendations(userInputs)
    const dataStorage = dataStorageRecommendations(userInputs)
    const technology = technologyRecommendations(userInputs)

    return [coordination, state, deploy, dataStorage, technology]
};

const coordinationRecommendations = (userInput) => {
    const coordination = [];
    coordination.push(["1", "Server Side Discovery Pattern", "Uniform clients/Industrially recommended pattern"])

    if (userInput.frontEnds && userInput.frontEnds.length > 0) {
        console.log("bff pattern");
        coordination.push(["2", "Backend for Frontend (BFF) Pattern", "Multiple formats of client need different levels of data"])
    } else {
        console.log("default api gateway pattern");
        coordination.push(["2", "Api Gateway Pattern", "Ease of extension"])
    }

    return coordination;
}

const stateManagementRecommendations = (userInput) => {
    const recommendations = [];

    switch (userInput.domain) {
        case 0 || 2 || 3:
            recommendations.push([(recommendations.length+1).toString(), "Event Driven State Management", "High scalability, contracts can be abstracted into events"]);
            break;
        default:
            console.log("Domain is not known into state management");
    }
    switch (userInput.teamExperience) {
        case 0:
            console.log("team experience is low");
            recommendations.push([(recommendations.length+1).toString(), "Message oriented state patterns", "This should be used by an organization beginning the microservices journey, but it may not suit your needs as your approach becomes more mature"]);
            break;
        default:
            console.log("team experience is high", userInput.teamExperience);
            recommendations.push([(recommendations.length+1).toString(), "Event Sourcing", "Single source of truth(Recommended for banking systems)"]);
    }
    switch (userInput.boundaryContexts) {
        case 1:
            console.log("boundaryContexts");
            recommendations.push([(recommendations.length+1).toString(), "SAGA Event pattern is preferred", "Since transactions spanning among multiple services could be addressed by SAGA pattern"]);
            break;
        default:
            console.log("Not transactional");
    }

    if(userInput.commands){
        recommendations.push([(recommendations.length+1).toString(), "Event Sourcing", "CQRS Pattern could be used for high scalability and eventual consistency"]);
    }

    return recommendations;
}

const deploymentRecommendations = (userInput) => {
    const recommendations = [];

    if (userInput?.cost ===0 || userInput?.cost ===1) {
            recommendations.push(["1", "Serverless deployment", "Low cost, High Scalability, Low warm up time"]);
            console.log("low cost");
    }
    else {
        recommendations.push(["1", "Single instance per host(container) pattern", "High Scalability"]);
        console.log("medium cost");
    }

    return recommendations;
}

const dataStorageRecommendations = (userInput) => {
    const recommendations = [];

    switch (userInput.dataScalability) {
        case 1:
            recommendations.push([(recommendations.length+1).toString(), "Database per service pattern", "The success of this pattern hinges on effectively defining the bounded contexts in your application"]);
            break;
        default:
            recommendations.push([(recommendations.length+1).toString(), "Database cluster pattern", "All the microservices can use the same database, each microserive sees it as its own datastore "]);
    }
    switch (userInput.dataAcid) {
        case 2:
            recommendations.push([(recommendations.length+1).toString(), "SQL databases(MySQl, Postgress)", "Ensures ACID properties"]);
            break;
        default:

            console.log("not NoSQL");
    }
    return recommendations;
}

const technologyRecommendations = (userInput) => {
    const recommendations = [];

    switch (userInput.cost) {
        case 0:
            recommendations.push([(recommendations.length+1).toString(), "AWS Lambda, Serverless", "Low cost, High Scalability, Low warm up time"]);
            console.log("low cost");
            break;
        default:
            console.log("not lambda");
    }

    switch (userInput.databaseScalability) {
        case 1:
            recommendations.push([(recommendations.length+1).toString(), "No SQL databases(MongoDB, Cassandra)", "High vertical scalability"]);
            break;
        default:

            console.log("not NoSQL");
    }
    switch (userInput.databaseAcid) {
        case 1:
            recommendations.push([(recommendations.length+1).toString(), "SQL databases(MySQl, Postgress)", "Ensures ACID properties"]);
            break;
        default:

            console.log("not NoSQL");
    }

    if (userInput.events && userInput.events.length > 0) {
        recommendations.push([(recommendations.length+1).toString(), "Kafka, Kinesis", "Event driven communication"]);
    }

    return recommendations;
}


module.exports = {
    analyzerLogic
};
