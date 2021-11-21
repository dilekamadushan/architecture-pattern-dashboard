const XMLParser = require('react-xml-parser');

// Assume xmlText contains the example XML
const xmlText = '<?xml version=\'1.0\' encoding=\'utf-8\'?>\n' +
    '<Library>\n' +
    '   <Books count=\'1\'>\n' +
    '       <Book id=\'1\'>\n' +
    '           <Name>Me Before You</Name>\n' +
    '           <Author>Jojo Moyes</Author>\n' +
    '       </Book>\n' +
    '   </Books>\n' +
    '   <Music count=1>\n' +
    '       <CD id=\'2\'>\n' +
    '           <Name>Houses of the Holy</Name>\n' +
    '           <Artist>Led Zeppelin</Artist>\n' +
    '       </CD>\n' +
    '   </Music>\n' +
    '</Library>'

const userInputXMLTwo = '<?xml version=\'1.0\' encoding=\'utf-8\'?>\n' +
    '<UserInput>\n' +
    '    <Domain>0ffff</Domain>\n' +
    '    <NumberOfServices>10</NumberOfServices>\n' +
    '    <NumberOfUsers>0</NumberOfUsers>\n' +
    '    <Scalability>1</Scalability>\n' +
    '    <Cost>0</Cost>\n' +
    '    <TeamExperience>0</TeamExperience>\n' +
    '    <DevelopmentComplexity>0</DevelopmentComplexity>\n' +
    '    <FrontEndApplications>\n' +
    '        <FrontEnd>Mobile</FrontEnd>\n' +
    '        <FrontEnd>Web</FrontEnd>\n' +
    '    </FrontEndApplications>\n' +
    '    <Events>\n' +
    '    </Events>\n' +
    '</UserInput>\n';

export const readUserInputXml = (userInputXML)=>{
    const userInputJson={}
    console.log("Start of the userinput xml function", userInputXML)
    if(userInputXML==='') return '';
    const xml = new XMLParser().parseFromString(userInputXML);

    const domain = xml.getElementsByTagName("Domain");
    userInputJson.domain = domain[0]['value'];

    const numberOfServices = xml.getElementsByTagName("NumberOfServices");
    userInputJson.numberOfServices = numberOfServices[0]['value'];

    const numberOfUsers = xml.getElementsByTagName("NumberOfUsers");
    userInputJson.numberOfUsers = numberOfUsers[0]['value'];

    const scalability = xml.getElementsByTagName("Scalability");
    userInputJson.scalability = scalability[0]['value'];

    const cost = xml.getElementsByTagName("Cost");
    userInputJson.cost = cost[0]['value'];

    const teamExperience = xml.getElementsByTagName("TeamExperience");
    userInputJson.teamExperience = teamExperience[0]['value'];

    const developmentComplexity = xml.getElementsByTagName("DevelopmentComplexity");
    userInputJson.developmentComplexity = developmentComplexity[0]['value'];

    const frontEnds = xml.getElementsByTagName("FrontEnd");
    userInputJson.frontEnds = [];
    frontEnds.forEach(frontEnd => {
        userInputJson.frontEnds.push(frontEnd['value']);
    })
    const events = xml.getElementsByTagName("Event");
    userInputJson.events = [];
    events.forEach(event => {
        userInputJson.events.push(event['value']);
    })

    const transactional = xml.getElementsByTagName("Transactional");
    userInputJson.transactional = transactional[0] && transactional[0]['value'];

    const dataScalability = xml.getElementsByTagName("DataScalability");
    userInputJson.dataScalability = dataScalability[0] && dataScalability[0]['value'];

    const dataAcid = xml.getElementsByTagName("DataAcid");
    userInputJson.dataAcid = dataAcid[0] && dataAcid[0]['value'];

    console.log("Final JSON", JSON.stringify(userInputJson));
    return userInputJson;

}
export const readXML = ()=>{
    console.log("Start of the xml function")
    const xml = new XMLParser().parseFromString(xmlText);
    console.log(xml);
    console.log("Printing the name books")
    const books = xml.getElementsByTagName('Books');
    console.log(books);
    books.forEach(book => {
        console.log("Printing each book", book)
        const children = book.getElementsByTagName('Book');
        console.log("Printing book", children);
        children.forEach(child =>{
            const names = child.getElementsByTagName('Name')
            console.log("Printing names", names)
        })


    })
    console.log("Printing name tags")
    console.log(xml.getElementsByTagName('Name'));
}
