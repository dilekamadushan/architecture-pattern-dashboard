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

    if (userInput.frontEnds === undefined) {
        console.log("front ends undefined");
        coordination.push(["2", "Api Gateway Pattern", "Ease of extension"])
    } else if (userInput.frontEnds.length > 0) {
        console.log("bff pattern");
        coordination.push(["2", "Backend for Frontend (BFF) Pattern", "Multiple formats of client need different levels of data"])
    } else {
        console.log("default api gateway pattern");
        coordination.push(["2", "Api Gateway Pattern", "Ease of extension"])
    }

    return coordination;
}
/* tableData={[
                  ["1", "Event Driven State Management", "High scalability, contracts can be abstracted into events"],
                  ["2", "Event Sourcing", "Single source of truth(Recommended for banking systems)"],
                ]}*/
const stateManagementRecommendations = (userInput) => {
    const recommendations = [];

    switch (userInput.domain) {
        case "0" || "2" || "3":
            recommendations.push([recommendations.length+1, "Event Driven State Management", "High scalability, contracts can be abstracted into events"]);
            break;
        default:
            console.log("Domain is not known into state management");
    }
    switch (userInput.teamExperience) {
        case "0":
            console.log("team experience is low");
            recommendations.push([recommendations.length+1, "Message oriented state patterns", "This should be used by an organization beginning the microservices journey, but it may not suit your needs as your approach becomes more mature"]);
            break;
        default:
            console.log("team experience is high");
            recommendations.push([recommendations.length+1, "Event Sourcing", "Single source of truth(Recommended for banking systems)"]);
    }
    switch (userInput.transactional) {
        case "1":
            console.log("Transactional");
            recommendations.push([recommendations.length+1, "SAGA Event pattern is preferred", "Since transactions spanning among multiple services could be addressed by SAGA pattern"]);
            break;
        default:
            console.log("Not transactional");
    }

    return recommendations;
}

const deploymentRecommendations = (userInput) => {
    const recommendations = [];

    switch (userInput.cost) {
        case "0":
            recommendations.push(["1", "Serverless deployment", "Low cost, High Scalability, Low warm up time"]);
            console.log("low cost");
            break;
        default:
            recommendations.push(["1", "Single instance per host(container) pattern", "High Scalability"],
                ["2", "Serverless deployment", "Low cost, High Scalability, Low warm up time"]);
            console.log("medium cost");
    }

    return recommendations;
}

const technologyRecommendations = (userInput) => {
    const recommendations = [];

    switch (userInput.cost) {
        case "0":
            recommendations.push([recommendations.length+1, "AWS Lambda, Serverless", "Low cost, High Scalability, Low warm up time"]);
            console.log("low cost");
            break;
        default:
            console.log("not lambda");
    }

    switch (userInput.dataScalability) {
        case "1":
            recommendations.push([recommendations.length+1, "No SQL databases(MongoDB, Cassandra)", "High vertical scalability"]);
            break;
        default:

            console.log("not NoSQL");
    }
    switch (userInput.dataAcid) {
        case "1":
            recommendations.push([recommendations.length+1, "SQL databases(MySQl, Postgress)", "Ensures ACID properties"]);
            break;
        default:

            console.log("not NoSQL");
    }

    if (userInput.events && userInput.events.length > 0) {
        recommendations.push([recommendations.length+1, "Kafka, Kinesis", "Event driven communication"]);
    }

    return recommendations;
}

const dataStorageRecommendations = (userInput) => {
    const recommendations = [];

    switch (userInput.dataScalability) {
        case "1":
            recommendations.push([recommendations.length+1, "Database per service pattern", "The success of this pattern hinges on effectively defining the bounded contexts in your application"]);
            break;
        default:
            recommendations.push([recommendations.length+1, "Database cluster pattern", "All the microservices can use the same database, each microserive sees it as its own datastore "]);
    }
    switch (userInput.dataAcid) {
        case "1":
            recommendations.push([recommendations.length+1, "SQL databases(MySQl, Postgress)", "Ensures ACID properties"]);
            break;
        default:

            console.log("not NoSQL");
    }
    return recommendations;
}

module.exports = {
    analyzerLogic
};
