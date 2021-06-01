import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header';
import cookie from 'react-cookies';
import { Redirect } from 'react-router';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: '',
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            weight: '',
            gender: '',
            height: '',
            bloodGroup: '',
            imageUrl: cookie.load('cookie').imageUrl,
            redirectVar: false,
            workoutType: '',
            date: '',
            time: '',
            imageWorkout: 'https://cdn.discordapp.com/attachments/802068802732425227/848872254607851550/deafaultSched.gif',
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            redirectVar: true
        })
    }

    componentDidMount() {
        axios.defaults.withCredentials = true;
        axios.get('http://fitgenie.ml:5000/profile')
            .then(response => {
                if (response.data.success) {
                    this.setState({
                        userId: response.data.data[0].userId,
                        firstName: response.data.data[0].firstName,
                        lastName: response.data.data[0].lastName,
                        email: response.data.data[0].email,
                        age: response.data.data[0].age,
                        weight: response.data.data[0].weight,
                        height: response.data.data[0].height,
                        bloodGroup: response.data.data[0].bloodGroup,
                    });
                }
            })
            .catch(err => {
                alert(err);
            })
        axios.defaults.withCredentials = true;
        axios.get('http://fitgenie.ml:5000/getUserSchedule')
            .then(response => {
                if (response.data.success && response.data.data.length !== 0) {
                    this.setState({
                        workoutType: response.data.data[0].workType,
                        date: response.data.data[0].date,
                        time: response.data.data[0].time,
                        imageWorkout: response.data.data[0].image,
                    });
                }
            })
            .catch(err => {
                alert(err);
            })
    }

    render() {
        let displayTime, displaySchedule;
        if (this.state.redirectVar) {
            return (
                <Redirect to="/care" />
            )
        }
        if (this.state.time === 'slot1') {
            displayTime = <p>Time: 9am - 12pm</p>
        } else if (this.state.time === 'slot2') {
            displayTime = <p>Time: 3pm - 6pm</p>
        } else {
            displayTime = <p>Time: 6pm - 9pm</p>
        }

        if (this.state.workoutType === '') {
            displaySchedule =
                <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
                    <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white mx-6 lg:mx-0">
                        <div className="p-4 md:p-12 text-center lg:text-left">
                            {/* Image for mobile view*/}
                            <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style={{ backgroundImage: `url(${this.state.imageWorkout})` }} />
                            {/* <h1 className="text-3xl font-bold pt-8 lg:pt-0">{this.state.workoutType}</h1> */}
                            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25" />
                            <span style={{ color: '#047857' }} className="fa fa-calendar mr-2" />Today's Schedule
                    <p className="mt-2"><strong>Nothing is scheduled</strong></p>
                            <a href="/schedule"><button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                                Book Now
                        </button>
                            </a>
                        </div>
                        {/* Use https://simpleicons.org/ to find the svg for your preferred product */}
                        
                    </div>
                    <div className="w-full lg:w-2/5">
                            <img alt="Excercise_Photo" style={{ width: '80%', height: '80%' }} src={this.state.imageWorkout} className="lg:rounded-lg shadow-2xl hidden lg:block" />
                        </div>
                </div>
        } else {
            displaySchedule =
                <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
                    <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white mx-6 lg:mx-0">
                        <div className="p-4 md:p-12 text-center lg:text-left">
                            {/* Image for mobile view*/}
                            <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style={{ backgroundImage: `url(${this.state.imageWorkout})` }} />
                            <h1 className="text-3xl font-bold pt-8 lg:pt-0">{this.state.workoutType}</h1>
                            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25" />
                            <span style={{ color: '#047857' }} className="fa fa-calendar mr-2" />Today's Schedule
                <p className="mt-2 text-sm">Date: {this.state.date}</p>
                            <p className="text-sm">{displayTime}</p>
                            <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full" onClick={this.handleClick}>
                                Get in Touch
                </button>
                        </div>
                        {/* Use https://simpleicons.org/ to find the svg for your preferred product */}
                    </div>

                    <div className="w-full lg:w-2/5">
                        <img alt="Excercise_Photo" style={{ width: '80%', height: '80%' }} src={this.state.imageWorkout} className="lg:rounded-lg shadow-2xl hidden lg:block" />
                    </div>
                </div>
        }
        return (
            <div>
                <Header />
                <img className="img-fluid" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/d4c7f869-682e-4df4-ba10-729c49042ce1.png" alt="emnem" />
                <div className="container">
                    <div className="row mt-2">
                        <div>
                            {displaySchedule}
                        </div>
                    </div>

                </div>
                <div className="row mt-2">
                    <div>
                        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
                            {/*Main Col*/}
                            <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white mx-6 lg:mx-0">
                                <div className="p-4 md:p-12 text-center lg:text-left">
                                    {/* Image for mobile view*/}
                                    <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" style={{ backgroundImage: `url(${this.state.imageUrl})` }} />
                                    <h1 className="text-3xl font-bold pt-8 lg:pt-0">{this.state.firstName} {this.state.lastName}</h1>
                                    <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25" />
                                    <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" /></svg> Your progress</p>
                                    <p className="text-sm">Age: {this.state.age}</p>
                                    <p className="text-sm">BloodGroup: {this.state.bloodGroup}</p>
                                    <p className="text-sm">Height: {this.state.height} cm</p>
                                    <p className="text-sm">Weight: {this.state.weight} kg</p>
                                    <p className="text-sm">Email: {this.state.email}</p>
                                    <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full" onClick={this.handleClick}>
                                        Get in Touch
                                        </button>
                                </div>
                                {/* Use https://simpleicons.org/ to find the svg for your preferred product */}
                            </div>
                            <div className="w-full lg:w-2/5">
                                <img alt="Profile_Pic" style={{ width: '80%', height: '80%' }} src={cookie.load("cookie").imageUrl} className="lg:rounded-lg shadow-2xl hidden lg:block" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
