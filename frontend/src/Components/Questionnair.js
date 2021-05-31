import React, { Component } from 'react';
import { Form, Label, Button,Input } from 'reactstrap';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class Questionnair extends Component {
    render() {
        return (
            <div className="container">
                <Form className="row">
                    <Label>
                        <strong>What do you do for a living?</strong>
                    </Label>
                    
                    <Input type="text" style={{borderColor: "#D37B22", width:"40%"}}></Input>
                    <Label className="mt-3">
                       <strong> What's the activity level at your job? </strong><br/>
                        <Label >None (steady only):
                            <input onChange={this.handleInputChange} className="ml-2 mt-3" type="radio" style={{border: "100px solid #90DDD0"}} name="jobActivity" value="jobActivityLow" />
                        </Label><br />

                        <Label>Moderate (light activity such as walking):
                        <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" name="jobActivity" value="jobActivityMed" />
                        </Label><br />
                        
                        
                        <Label>High (heavy labor, very active) :
                                    <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" name="jobActivity" value="jobActivityHigh" />
                        </Label><br />
                    </Label>

                    <Label className="mt-3">
                        <strong>Do you work days, afternoon or nights?</strong><br/>
                        <Label >Day:
                            <input onChange={this.handleInputChange} className="ml-2 mt-3" type="radio" name="workTime" value="workTimeDay" />
                        </Label><br />

                        <Label>Afternoon:
                        <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" name="workTime" value="workTimeAfternoon" />
                        </Label><br />
                        
                        
                        <Label>Night:
                                    <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" name="workTime" value="workTimeNight" />
                        </Label><br />
                    </Label>

                    <Label className="mt-3">
                        <strong>Are you experiencing any stresses or motivational problems?</strong><br/>
                        <Label >Yes:
                            <input onChange={this.handleInputChange} className="ml-2 mt-3" type="radio" name="stress" value="stressYes" />
                        </Label><br />

                        <Label>No:
                        <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" name="stress" value="stressNo" />
                        </Label><br />
                        
                    </Label>

                    <Label className="mt-3">
                        <strong>Has anyone of your immediate family developed heart disease before the age of 60?</strong><br/>
                        <Label >Yes:
                            <input onChange={this.handleInputChange} className="ml-2 mt-3" type="radio" name="stress" value="stressYes" />
                        </Label><br />

                        <Label>No:
                        <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" name="stress" value="stressNo" />
                        </Label><br />
                        
                    </Label>
                    
                    <Label className="mt-3">
                        <strong>Do you suffer from diabetes, asthma, high or low blood pressure?</strong><br/>
                        <Label >Yes:
                            <input onChange={this.handleInputChange} className="ml-2 mt-3" type="radio" name="stress" value="stressYes" />
                        </Label><br />

                        <Label>No:
                        <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" name="stress" value="stressNo" />
                        </Label><br />
                    </Label>

                    <Label>
                        <strong>If yes please list:</strong>
                    </Label>
                    
                    <Input type="text" style={{borderColor: "#D37B22", width:"40%"}}></Input>
                
                    <Label className="mt-3">
                        <strong>Are you a current cigarette smoker?</strong><br/>
                        <Label >Yes:
                            <input onChange={this.handleInputChange} className="ml-2 mt-3" type="radio" name="stress" value="stressYes" />
                        </Label><br />

                        <Label>No:
                        <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" name="stress" value="stressNo" />
                        </Label><br />
                    </Label>

                    <Label className="mt-3">
                        <strong>Your current diet could be best characterized as:</strong><br/>
                        <Label >Low-fat:
                            <input onChange={this.handleInputChange} className="ml-2 mt-3" type="radio" value="stressYes" />
                        </Label><br />

                        <Label>Low-carb:
                        <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" value="stressNo" />
                        </Label><br />
                        
                        <Label>High-protein:
                        <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" value="stressNo" />
                        </Label><br />

                        <Label>Vegetarian/Vegan:
                        <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" value="stressNo" />
                        </Label><br />

                        <Label>No special diet:
                        <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" value="stressNo" />
                        </Label><br />
                    </Label>

                    <Label className="mt-3">
                        <strong>Your current diet could be best characterized as:</strong><br/>
                        <Label >Low-fat:
                            <input onChange={this.handleInputChange} className="ml-2 mt-3" type="radio" value="stressYes" />
                        </Label><br />

                        <Label>Low-carb:
                        <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" value="stressNo" />
                        </Label><br />
                        
                        <Label>High-protein:
                        <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" value="stressNo" />
                        </Label><br />

                        <Label>Vegetarian/Vegan:
                        <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" value="stressNo" />
                        </Label><br />

                        <Label>No special diet:
                        <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" value="stressNo" />
                        </Label><br />
                    </Label>
                    <Label className="mt-3">
                        <strong>Please rate your motivational level to do what it takes for reach your goal.</strong><br/></Label>
                    <Rater total={5} rating={0} interactive={true}/>
                </Form>
            </div>
        );
    }
}

export default Questionnair;
