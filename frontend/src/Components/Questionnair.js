import React, { Component } from 'react';
import { Form, Label, Input } from 'reactstrap';

class Questionnair extends Component {
    render() {
        return (
            <div>
                <div className="flex h-screen bg-gray-200 items-center justify-center  mt-32 mb-32">
                    <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
                        <div className="flex justify-center py-4">
                            <img style={{ width: '10%', height: '10%' }} src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png" alt="Logo" />
                        </div>
                        <div className="flex justify-center">
                            <div className="flex">
                                <h1 className="text-gray-600 font-bold md:text-2xl text-xl">Kashvi is suggesting</h1>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 mt-5 mx-7">
                            <strong className="ml-1 text-dark">What's the activity level?</strong>
                            <select style={{ borderColor: '#1C85B7' }} className="py-2 px-3 rounded-lg border-2 border-warning-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                                <option value="high">High</option>
                                <option value="moderate">Moderate</option>
                                <option value='none'>None</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-1 mt-5 mx-7">
                            <strong className="ml-1 text-dark">Any aliments?</strong>
                            <div className="md:w-2/3">
                                <div>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox text-indigo-600" defaultChecked />
                                        <span className="ml-2">Option 1</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox text-green-500" defaultChecked />
                                        <span className="ml-2">Option 2</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox text-pink-600" defaultChecked />
                                        <span className="ml-2">Option 3</span>
                                    </label>
                                </div>
                                <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
                            </div>

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                            <div className="grid grid-cols-1">
                                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Input 2</label>
                                <input style={{ borderColor: '#1C85B7' }} className="py-2 px-3 rounded-lg border-2 border-warning-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="text" placeholder="Input 2" />
                            </div>
                            <div className="grid grid-cols-1">
                                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Input 3</label>
                                <input style={{ borderColor: '#1C85B7' }} className="py-2 px-3 rounded-lg border-2 border-warning-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="text" placeholder="Input 3" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 mt-5 mx-7">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Selection</label>
                            <select style={{ borderColor: '#1C85B7' }} className="py-2 px-3 rounded-lg border-2 border-warning-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-1 mt-5 mx-7">
                            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Another Input</label>
                            <input style={{ borderColor: '#1C85B7' }} className="py-2 px-3 rounded-lg border-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" type="text" placeholder="Another Input" />
                        </div>

                        <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
                            <button className="bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">Save</button>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <Form className="row">
                        <Label>
                            <strong>What do you do for a living?</strong>
                        </Label>

                        <Input type="text" style={{ borderColor: "#D37B22", width: "40%" }}></Input>
                        <Label className="mt-3">
                            <strong> What's the activity level at your job? </strong><br />
                            <Label >None (steady only):
                            <input onChange={this.handleInputChange} className="ml-2 mt-3" type="radio" style={{ border: "100px solid #90DDD0" }} name="jobActivity" value="jobActivityLow" />
                            </Label><br />

                            <Label>Moderate (light activity such as walking):
                        <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" name="jobActivity" value="jobActivityMed" />
                            </Label><br />


                            <Label>High (heavy labor, very active) :
                                    <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" name="jobActivity" value="jobActivityHigh" />
                            </Label><br />
                        </Label>

                        <Label className="mt-3">
                            <strong>Do you work days, afternoon or nights?</strong><br />
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
                            <strong>Are you experiencing any stresses or motivational problems?</strong><br />
                            <Label >Yes:
                            <input onChange={this.handleInputChange} className="ml-2 mt-3" type="radio" name="stress" value="stressYes" />
                            </Label><br />

                            <Label>No:
                        <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" name="stress" value="stressNo" />
                            </Label><br />

                        </Label>

                        <Label className="mt-3">
                            <strong>Has anyone of your immediate family developed heart disease before the age of 60?</strong><br />
                            <Label >Yes:
                            <input onChange={this.handleInputChange} className="ml-2 mt-3" type="radio" name="stress" value="stressYes" />
                            </Label><br />

                            <Label>No:
                        <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" name="stress" value="stressNo" />
                            </Label><br />

                        </Label>

                        <Label className="mt-3">
                            <strong>Do you suffer from diabetes, asthma, high or low blood pressure?</strong><br />
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

                        <Input type="text" style={{ borderColor: "#D37B22", width: "40%" }}></Input>

                        <Label className="mt-3">
                            <strong>Are you a current cigarette smoker?</strong><br />
                            <Label >Yes:
                            <input onChange={this.handleInputChange} className="ml-2 mt-3" type="radio" name="stress" value="stressYes" />
                            </Label><br />

                            <Label>No:
                        <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" name="stress" value="stressNo" />
                            </Label><br />
                        </Label>

                        <Label className="mt-3">
                            <strong>Your current diet could be best characterized as:</strong><br />
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
                            <strong>Your current diet could be best characterized as:</strong><br />
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
                            <strong>Please rate your motivational level to do what it takes for reach your goal.</strong><br /></Label>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Questionnair;
