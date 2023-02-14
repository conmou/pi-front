import React, { useEffect, useState } from 'react';
import './App.css';
import { CartesianAxis, CartesianGrid, Legend, Line, LineChart, XAxis, YAxis, Tooltip, BarChart, Bar} from 'recharts';
//import { Tooltip } from 'chart.js';

// const data = [
//   { name: "2017", react: 32, angular: 37, vue: 60 },
//   { name: "2018", react: 42, angular: 42, vue: 54 },
//   { name: "2019", react: 51, angular: 41, vue: 54 },
//   { name: "2020", react: 60, angular: 37, vue: 28 },
//   { name: "2021", react: 51, angular: 31, vue: 27 },
//   { name: "2022", react: 95, angular: 44, vue: 49 },
// ];

class App extends React.Component {
	// Constructor
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			DataisLoaded: false
		};
	}
	
	componentDidMount() {
		fetch("http://localhost:5001/min")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
		// fetch("http://localhost:5001/min")
		// 	.then((res) => res.json())
		// 	.then((json) => {
		// 		this.setState({
		// 			items: json,
		// 			DataisLoaded: true
		// 		});
		// 	})
		// Promise.all([fetch('http://localhost:5001/min'),fetch('http://localhost:5001/date')])
		// 	.then(([res1,res2]) => {
		// 		this.setState({
		// 			items: json,
		// 			DataisLoaded: true
		// 		});
		// 	})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return 
			<div>
				<h1> no no conmou </h1> 
			</div>  ;
		// const sort = items.sort(sortData)
		return [
			<div className = "App"  >
				<h1> get api success </h1> {
				items.map((item) => (
				<ol key = { item.id } >
					temp: { item.temp },
					hunidity: { item.hunidity},
					date: { item.date },
					time: {item.time}
				</ol>
				))
				}
					<BarChart className='Bar' width={600} height={300} data={ items } >
						<Bar dataKey="temp" fill="#91B493" stroke='#91B493' strokeWidth={3}/>
						<Bar dataKey='hunidity' fill="#FFCA29" stroke='#FFCA29' strokeWidth={3}/>
						<CartesianGrid stroke='#D7C4BB' strokeDasharray="5 5" strokeWidth={2}/>
						<XAxis dataKey='time' stroke='#D7C4BB' strokeWidth={5}/>
						<YAxis type="number" domain={[0, 50]} stroke='#D7C4BB' strokeWidth={5}/>
						<Tooltip/>
						<Legend/>
					</BarChart>
				<div className="Chart">
					<LineChart width={600} height={300} data={ items } >
						<Line type="monotone" dataKey='temp' stroke='#91B493' strokeWidth={3}/>
						<Line type="monotone" dataKey='hunidity' stroke='#FFCA29' strokeWidth={3}/>
						<CartesianGrid stroke='#D7C4BB' strokeDasharray="5 5" strokeWidth={2}/>
						<XAxis dataKey='date' stroke='#D7C4BB' strokeWidth={5}/>
						<YAxis type="number" domain={[0, 100]} stroke='#D7C4BB' strokeWidth={5}/>
						<Tooltip/>
						<Legend/>
					</LineChart>
				</div>
				<div className='textDiv'>
					<p className='Temptext'>溫度：{items[items.length-1].temp}</p>
					<p className='Humtext'>濕度：{items[items.length-1].hunidity}</p>
				</div>
			</div>
		];
  }
}

		// fetch('http://localhost:5001/).then(res=>
        //     return res.json()
        //   })
        //     .then(data=>{
        //       data.forEach(user=>{
        //         const Tm=${user.temp}
        //         const Hm=${user.hunidity}
        //         document.querySelector('div .TemDataText').insertAdjacentHTML('beforeend',Tm)
        //         document.querySelector('div .HumDataText').insertAdjacentHTML('beforeend',Hm)
        //       })
        //     })
        //     .catch(error=>console.log(error))

export default App;
