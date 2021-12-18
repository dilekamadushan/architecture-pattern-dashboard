import React, {useContext, useEffect} from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import {readUserInputXml} from "../../xml/xmlReader";

import { bugs, website, server } from "variables/general.js";

import {analyzerLogic} from "../../utils/utils"

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import {AppContext} from "../../Contexts/AppContext";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const { analyzedResults, userInputs, userInputXml } = useContext(AppContext);
  const classes = useStyles();
  console.log("Xml input from user", JSON.stringify(userInputXml));
  const transformedInput = readUserInputXml(userInputXml);
  const data = analyzerLogic(transformedInput||userInputs)

  useEffect(async() => {

  }, []);
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Coordination Pattern</h4>
              <p className={classes.cardCategoryWhite}>
                Following service discovery patten is recommended
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableHead={["ID", "Pattern", "Reason"]}
                tableData={data[0]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>State Management Patterns</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "Pattern", "Reason"]}
                  tableData={data[1]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Deployment Patterns</h4>
              <p className={classes.cardCategoryWhite}>
                Following deployment patterns are recommended
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["ID", "Pattern", "Reason"]}
                tableData={data[2]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Data Storage Patterns</h4>
              <p className={classes.cardCategoryWhite}>
                Following technologies are recommended
              </p>
            </CardHeader>
            <CardBody>
              <Table
                  tableHeaderColor="info"
                  tableHead={["ID", "Pattern", "Reason"]}
                  tableData={data[3]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Technologies</h4>
              <p className={classes.cardCategoryWhite}>
                Following technologies are recommended
              </p>
            </CardHeader>
            <CardBody>
              <Table
                  tableHeaderColor="info"
                  tableHead={["ID", "Technology", "Reason"]}
                  tableData={data[4]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
