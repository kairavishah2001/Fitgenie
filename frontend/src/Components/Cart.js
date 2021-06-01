import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import Header from './Header';
import axios from 'axios';

class DisplayCart extends Component {
    constructor(props) {
        super(props);

        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(event) {
        // alert(event.target.id)
        axios.defaults.withCredentials = true;
<<<<<<< HEAD
        axios.get('http://194.195.115.31:5000/removeItem', { headers: { id: event.target.id } })
=======
        axios.get('http://fitgenie.ml:5000/removeItem', { headers: { id: event.target.id } })
>>>>>>> 8b67d70ae6452e2ecc31b8013d6fda7b0a5d05b8
            .then(response => {
                // alert(response.data.success);
                if (response.data.success) {
                    window.location.reload()
                }
            })
            .catch(err => {
                alert(err);
            })
    }

    render() {
        let renderList = this.props.result.map((rl) => {
            let totalPrice = rl.price * rl.quantity;
            return (
                <tr>
                    <td className="hidden pb-4 md:table-cell">
                        <a href="/">
                            <img src={rl.image} className="w-20 rounded" alt="Thumbnail" />
                        </a>
                    </td>
                    <td>
                        <p className="mb-2 md:ml-4">{rl.dishName}</p>
                        <small role="button" id={rl.dishId} onClick={this.removeItem}>Remove item</small>
                    </td>
                    <td className="justify-center md:justify-end md:flex mt-6">
                        <div className="w-20 h-10">
                            <div className="relative d-flex justify-content-center flex flex-row w-full h-8">
                                <span>{rl.quantity}</span>
                                {/* <input type="number" defaultValue={rl.quantity} className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" /> */}
                            </div>
                        </div>
                    </td>
                    <td className="hidden text-right md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                            &#8377; {rl.price}
                        </span>
                    </td>
                    <td className="text-right">
                        <span className="text-sm lg:text-base font-medium">
                            &#8377; {totalPrice}
                        </span>
                    </td>
                </tr>
            );
        })
        return (
            <>
                { renderList}
            </>
        );
    }
}

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: [],
        }
    }

    componentDidMount() {
        axios.defaults.withCredentials = true;
        axios.get('http://fitgenie.ml:5000/cart')
            .then(response => {
                if (response.data.success) {
                    this.setState({
                        result: response.data.data,
                    });
                }
            })
            .catch(err => {
                alert(err);
            })
    }

    render() {
        let displayCart =
            <div className="container">
                <div className='d-flex justify-content-center '>
                <a href='/eat' color="primary" className="text-decoration-none mt-2">Add Something</a>
                </div>
            </div>
        if (this.state.result.length !== 0) {
            displayCart = <div className="flex justify-center my-6">
                <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                    <div className="flex-1">
                        <table className="w-full text-sm lg:text-base" cellSpacing={0}>
                            <thead>
                                <tr className="h-12 uppercase">
                                    <th className="hidden md:table-cell" />
                                    <th className="text-left">Food</th>
                                    <th className="lg:text-right text-left pl-5 lg:pl-0">
                                        <span className="lg:hidden" title="Quantity">Qtd</span>
                                        <span className="hidden lg:inline">Quantity</span>
                                    </th>
                                    <th className="hidden text-right md:table-cell">Unit price</th>
                                    <th className="text-right">Total price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <DisplayCart result={this.state.result} />
                            </tbody>
                        </table>
                        <hr className="pb-6 mt-6" />
                        <div className="my-4 mt-6 -mx-2 lg:flex d-flex justify-content-center">
                            <div className="lg:px-2 lg:w-1/2">
                                {/* <div className="p-4 bg-gray-100 rounded-full"> */}
                                {/* <h1 className="ml-2 font-bold uppercase d-flex justify-content-center">Order Details</h1> */}
                                {/* </div> */}
                                <div className="p-4">
                                    {/* <p className="mb-6 italic">Shipping and additionnal costs are calculated based on values you have entered</p>
                                    <div className="flex justify-between border-b">
                                        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                            Subtotal
                                        </div>
                                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                            &#8377; {totalPrice}
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-4 border-b">
                                        <div className="flex lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-gray-800">
                                            <form action method="POST">
                                                <button type="submit" className="mr-2 mt-1 lg:mt-2">
                                                    <svg aria-hidden="true" data-prefix="far" data-icon="trash-alt" className="w-4 text-red-600 hover:text-red-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z" /></svg>
                                                </button>
                                            </form>
                                            Coupon "90off"
                                        </div>
                                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-green-700">
                                            -133,944.77€
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-4 border-b">
                                        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                            New Subtotal
                                        </div>
                                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                            14,882.75€
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-4 border-b">
                                        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                            Tax
                                        </div>
                                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                            2,976.55€
                                        </div>
                                    </div> */}
                                    {/* <div className="flex justify-between pt-4 border-b">
                                        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                            Total
                                        </div>
                                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                        &#8377; {totalPrice}
                                        </div>
                                    </div> */}
                                    <a href="/">
                                        <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                                            <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z" /></svg>
                                            <span className="ml-2 mt-5px">Procceed to checkout</span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        return (
            <div>
                <Header />
                {displayCart}

                {/* <div className="h-screen bg-gray-300">
                    <div className="py-12">
                        <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl">
                            <div className="md:flex ">
                                <div className="w-full p-4 px-5 py-5">
                                    <div className="md:grid md:grid-cols-3 gap-2 ">
                                        <div className="col-span-2 p-5">
                                            <h1 className="text-xl font-medium ">Shopping Cart</h1>
                                            <div className="flex justify-between items-center mt-6 pt-6">
                                                <div className="flex items-center"> <img alt="img1" src="https://i.imgur.com/EEguU02.jpg" width={60} className="rounded-full " />
                                                    <div className="flex flex-col ml-3"> <span className="md:text-md font-medium">Chicken momo</span> <span className="text-xs font-light text-gray-400">#41551</span> </div>
                                                </div>
                                                <div className="flex justify-center items-center">
                                                    <div className="pr-8 flex "> <span className="font-semibold">-</span> <input type="text" className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" defaultValue={1} /> <span className="font-semibold">+</span> </div>
                                                    <div className="pr-8 "> <span className="text-xs font-medium">&#8377; 10.50</span> </div>
                                                    <div> <i className="fa fa-close text-xs font-medium" /> </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center pt-6 mt-6 border-t">
                                                <div className="flex items-center"> <img alt="img2" src="https://i.imgur.com/Uv2Yqzo.jpg" width={60} className="rounded-full " />
                                                    <div className="flex flex-col ml-3 "> <span className="text-md font-medium w-auto">Spicy Mexican potatoes</span> <span className="text-xs font-light text-gray-400">#66999</span> </div>
                                                </div>
                                                <div className="flex justify-center items-center">
                                                    <div className="pr-8 flex"> <span className="font-semibold">-</span> <input type="text" className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" defaultValue={1} /> <span className="font-semibold">+</span> </div>
                                                    <div className="pr-8"> <span className="text-xs font-medium">&#8377; 10.50</span> </div>
                                                    <div> <i className="fa fa-close text-xs font-medium" /> </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center mt-6 pt-6 border-t">
                                                <div className="flex items-center"> <img alt="img2" src="https://i.imgur.com/xbTAITF.jpg" width={60} className="rounded-full " />
                                                    <div className="flex flex-col ml-3 "> <span className="text-md font-medium">Breakfast</span> <span className="text-xs font-light text-gray-400">#86577</span> </div>
                                                </div>
                                                <div className="flex justify-center items-center">
                                                    <div className="pr-8 flex"> <span className="font-semibold">-</span> <input type="text" className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" defaultValue={1} /> <span className="font-semibold">+</span> </div>
                                                    <div className="pr-8"> <span className="text-xs font-medium">&#8377; 10.50</span> </div>
                                                    <div> <i className="fa fa-close text-xs font-medium" /> </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center mt-6 pt-6 border-t">
                                                <div className="flex items-center"> <i className="fa fa-arrow-left text-sm pr-2" /> <span className="text-md font-medium text-blue-500">Continue Shopping</span> </div>
                                                <div className="flex justify-center items-end"> <span className="text-sm font-medium text-gray-400 mr-1">Subtotal:</span> <span className="text-lg font-bold text-gray-800 "> &#8377; 24.90</span> </div>
                                            </div>
                                        </div>
                                        <div className=" p-5 bg-gray-800 rounded overflow-visible"> <span className="text-xl font-medium text-gray-100 block pb-3">Card Details</span> <span className="text-xs text-gray-400 ">Card Type</span>
                                            <div className="overflow-visible flex justify-between items-center mt-2">
                                                <div className="rounded w-52 h-28 bg-gray-500 py-2 px-4 relative right-10"> <span className="italic text-lg font-medium text-gray-200 underline">VISA</span>
                                                    <div className="flex justify-between items-center pt-4 "> <span className="text-xs text-gray-200 font-medium">****</span> <span className="text-xs text-gray-200 font-medium">****</span> <span className="text-xs text-gray-200 font-medium">****</span> <span className="text-xs text-gray-200 font-medium">****</span> </div>
                                                    <div className="flex justify-between items-center mt-3"> <span className="text-xs text-gray-200">Giga Tamarashvili</span> <span className="text-xs text-gray-200">12/18</span> </div>
                                                </div>
                                                <div className="flex justify-center items-center flex-col"> <img alt="img2" src="https://img.icons8.com/color/96/000000/mastercard-logo.png" width={40} className="relative right-5" /> <span className="text-xs font-medium text-gray-200 bottom-2 relative right-5">mastercard.</span> </div>
                                            </div>
                                            <div className="flex justify-center flex-col pt-3"> <label className="text-xs text-gray-400 ">Name on Card</label> <input type="text" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="Giga Tamarashvili" /> </div>
                                            <div className="flex justify-center flex-col pt-3"> <label className="text-xs text-gray-400 ">Card Number</label> <input type="text" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="**** **** **** ****" /> </div>
                                            <div className="grid grid-cols-3 gap-2 pt-2 mb-3">
                                                <div className="col-span-2 "> <label className="text-xs text-gray-400">Expiration Date</label>
                                                    <div className="grid grid-cols-2 gap-2"> <input type="text" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="mm" /> <input type="text" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="yyyy" /> </div>
                                                </div>
                                                <div className> <label className="text-xs text-gray-400">CVV</label> <input type="text" className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4" placeholder="XXX" /> </div>
                                            </div> <button className="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600">Check Out</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}
