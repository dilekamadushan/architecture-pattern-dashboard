import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import GridItem from "../../components/Grid/GridItem";
import Table from "../../components/Table/Table";
import XMLInput from "../../../src/assets/img/xml-input.png"

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function InfoPage() {
  const classes = useStyles();
  return (
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>XML Tags Available</h4>
            <p className={classes.cardCategoryWhite}>
              Following service discovery patten is recommended
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="info"
              tableHead={["Tag Name", "Values", "Description"]}
              tableData={[
                ["<Domain>", "0 - Restaurant/Food/Orders, 1-Health Care, 2- E-Commerce, 3 - Banking, 4- ERP, 5 - Other", "The business domain of your enterprise system"],
                ["<NumberOfServices>", "0 - Small, 1- Medium, 2 - Large ", "The number of services in the system"],
                ["<NumberOfUsers>", "0 - Small(0-100), 1- Medium(100-1000), 2 - Large, 3 - (1000-10000) - Very Large(Greater than 10000) ", "The number of users expected in the system"],
                ["<Scalability>", "0 - Low, 1- Medium, 2 - Large ", "A measure of the scalability of the system"],
                ["<Cost>", "0 - Low, 1- Medium, 2 - Large ", "A measure of the expected budget allowed for the system"],
                ["<TeamExperience>", "0 - Low, 1- Medium, 2 - High ", "A measure of how experienced your engineering team is"],
                ["<DevelopmentComplexity>", "0 - Low, 1- Medium, 2 - High ", "How much development compexity your team is most comfortable with"],
                ["<FrontEndApplications>", "0 - Low, 1- Medium, 2 - High ", "A measure of how experienced your engineering team is"],
                ["<Event>", "", "If your application uses any events"],
                ["<Command>", "", "If your application has events of type command"],
                ["<BoundaryContext>", "", "If your application domain can be divided into multiple dboundary contexts"],
                ["<TeamExperience>", "0 - Low, 1- Medium, 2 - High ", "A measure of how experienced your engineering team is"],
                ["<Data>", "", "Information related to the data layer"],
                ["<Transactional>", "0-Not transactional, 1- transactional", "Whether the application has transactions"],
                ["<Acid>", "0-Not Acid, 1- Acid", "Whether the data layer should support ACIDIC properties"]

              ]}
            />
          </CardBody>
        </Card>
        <Card>
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>Example XML Input</h4>
            <p className={classes.cardCategoryWhite}>
              Sample XML Input
            </p>
          </CardHeader>
          <CardBody>
            <img src={XMLInput} alt={"XML Input"}/>

          </CardBody>
        </Card>
      </GridItem>
  );
}
