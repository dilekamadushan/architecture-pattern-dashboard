import React, {useContext, useEffect, useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "@material-ui/core/Button";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import FormControl from '@material-ui/core/FormControl';
import { useHistory } from 'react-router-dom';

import { analyzerService } from "../../services";
import {AppContext} from "../../Contexts/AppContext";
import CustomTabs from "../../components/CustomTabs/CustomTabs";
import BugReport from "@material-ui/icons/BugReport";
import Tasks from "../../components/Tasks/Tasks";
import {bugs, server, website, clientApplications} from "../../variables/general";


const styles = {
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
  formControl: {
    paddingTop: 5,
    minWidth: 350,
  },
  segmentControl: {
    paddingTop: 25,
  }
};

const useStyles = makeStyles(styles);

export default function Design() {
  const { setAnalyzedResults } = useContext(AppContext);
  const classes = useStyles();
  const history = useHistory();

  const[information, setInformation] = useState({
    domain:'',
    size: '',
    cost: '',
    noOfServices: '',
    noOfUsers: '',
    scalability: '',
    company:'',
    name: 'hai',
    labelWidth: 0,
  })

  useEffect(async() => {
    const requestOptions = {
      method: 'GET',
    };

    //await fetch('http://localhost:9000', requestOptions);
  }, []);

  const handleChange = event => {
    console.log(JSON.stringify({...information, [event.target.name]:event.target.value}))
    setInformation({...information, [event.target.name]:event.target.value})
  };

  const submit = () => {
    alert('clicked')
    analyzerService.createEngagement(information).then(data=> {
      alert(JSON.stringify(data))
      setAnalyzedResults({name:"Hello World"})
      history.push(`/admin/dashboard`)
    }).catch(()=>{
      setAnalyzedResults({name:"Hello World"})
      history.push(`/admin/dashboard`)
    });
  }

  return (
    <div>

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Enter Information about the services</h4>
              <p className={classes.cardCategoryWhite}>Complete information</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel style={{ color: "#3e16c9", minWidth:'100px' }}>Select Domain</InputLabel>
                    <Select
                        value={information.domain}
                        onChange={handleChange}
                        inputProps={{
                          name: 'domain',
                          id: 'domain',
                        }}
                    >
                      {/*<MenuItem selected={true} value="0">hhhhhhhhhhhhhhh
                      </MenuItem>*/}
                      <MenuItem selected={true} value={0}>Restaurant/Food/Orders</MenuItem>
                      <MenuItem value={1}>Health Care</MenuItem>
                      <MenuItem value={2}>E-Commerce</MenuItem>
                      <MenuItem value={2}>Banking</MenuItem>
                      <MenuItem value={2}>ERP</MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel style={{ color: "#3e16c9", minWidth:'100px' }}>Number of Services</InputLabel>
                    <Select
                        value={information.noOfServices}
                        onChange={handleChange}
                        inputProps={{
                          name: 'noOfServices',
                          id: 'noOfServicesId',
                        }}
                    >
                      {/*<MenuItem selected={true} value="0">hhhhhhhhhhhhhhh
                      </MenuItem>*/}
                      <MenuItem selected={true} value={0}>0-5</MenuItem>
                      <MenuItem value={1}>5-20</MenuItem>
                      <MenuItem value={2}>20-50</MenuItem>
                      <MenuItem value={3}>More than 50</MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem  className={classes.segmentControl} xs={12} sm={12} md={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel style={{ color: "#3e16c9", minWidth:'100px' }}>Daily Users Expected</InputLabel>
                    <Select
                        value={information.noOfUsers}
                        onChange={handleChange}
                        inputProps={{
                          name: 'noOfUsers',
                          id: 'noOfUsersId',
                        }}
                    >
                      <MenuItem selected={true} value={0}>0-100</MenuItem>
                      <MenuItem value={1}>100-1000</MenuItem>
                      <MenuItem value={2}>1000-10000</MenuItem>
                      <MenuItem value={2}>More than 10000</MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>

              </GridContainer>
              <GridContainer style={{ paddingTop:'50px' }}>

                <GridItem className={classes.segmentControl} xs={12} sm={12} md={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel style={{ color: "#3e16c9", minWidth:'100px' }}>Scalability</InputLabel>
                    <Select
                        value={information.scalability}
                        onChange={handleChange}
                        inputProps={{
                          name: 'scalability',
                          id: 'noOfUsersId',
                        }}
                    >
                      <MenuItem selected={true} value={0}>Low</MenuItem>
                      <MenuItem value={1}>Medium</MenuItem>
                      <MenuItem value={2}>High</MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem className={classes.segmentControl} xs={12} sm={12} md={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel style={{ color: "#3e16c9", minWidth:'100px' }}>Cost</InputLabel>
                    <Select
                        value={information.cost}
                        onChange={handleChange}
                        inputProps={{
                          name: 'cost',
                          id: 'noOfUsersId',
                        }}
                    >
                      <MenuItem selected={true} value={0}>Low</MenuItem>
                      <MenuItem value={1}>Medium</MenuItem>
                      <MenuItem value={2}>High</MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem className={classes.segmentControl} xs={12} sm={12} md={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel style={{ color: "#3e16c9", minWidth:'100px' }}>Development Team Experience</InputLabel>
                    <Select
                        value={information.cost}
                        onChange={handleChange}
                        inputProps={{
                          name: 'cost',
                          id: 'noOfUsersId',
                        }}
                    >
                      <MenuItem selected={true} value={0}>Low</MenuItem>
                      <MenuItem value={1}>Medium</MenuItem>
                      <MenuItem value={2}>High</MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
              </GridContainer>
              <GridContainer style={{ paddingTop:'50px' }}>
                <GridItem className={classes.segmentControl} xs={12} sm={12} md={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel style={{ color: "#3e16c9", minWidth:'100px' }}>Development Complexity</InputLabel>
                    <Select
                        value={information.cost}
                        onChange={handleChange}
                        inputProps={{
                          name: 'cost',
                          id: 'noOfUsersId',
                        }}
                    >
                      <MenuItem selected={true} value={0}>Low</MenuItem>
                      <MenuItem value={1}>Medium</MenuItem>
                      <MenuItem value={2}>High</MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
             {/* <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                  <CustomInput
                    labelText="Lamborghini Mercy I'm in that two seat Lambo."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                    }}
                  />
                </GridItem>
              </GridContainer>*/}

              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <FormControl className={classes.formControl}>
                  <InputLabel style={{ color: "#AAAAAA" }}>Select Size</InputLabel>
                  <Select
                      value={information.size}
                      onChange={handleChange}
                      inputProps={{
                        name: 'size',
                        id: 'age-simple',
                      }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomTabs
                      title="Tasks:"
                      headerColor="primary"
                      tabs={[
                        {
                          tabName: "Bugs",
                          tabIcon: BugReport,
                          tabContent: (
                              <Tasks
                                  checkedIndexes={[0]}
                                  tasksIndexes={[0, 1]}
                                  tasks={clientApplications}
                              />
                          ),
                        }
                      ]}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button onClick={submit}  color="primary">Analyze</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
