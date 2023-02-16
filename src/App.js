import React, { useEffect, useState } from 'react';
import './App.css';
import { CartesianAxis, CartesianGrid, Legend, Line, LineChart, XAxis, YAxis, Tooltip, BarChart, Bar, ResponsiveContainer, ComposedChart, Area} from 'recharts';
//import { Tooltip } from 'chart.js';

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
		fetch("https://pi-backend-bt5mbx1ej-conmou.vercel.app/min")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
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
                    TS: {item.TS},
					min: {item.time}
                </ol>
                ))
                }

        <ComposedChart width={1000} height={400} data={items} margin={{top: 20,right: 20,bottom: 20,left: 20,}}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="time" scale="band" />
          <YAxis domain={[0, 100]}/>
          <Tooltip />
          <Legend />
          <Bar dataKey="temp" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="hunidity" stroke="#ff7300" />
        </ComposedChart>

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

export default App;


// render() {
// 	const { DataisLoaded, items } = this.state;
// 	// const date = new Date(timestamp);
// 	//     // console.log(date.getDay())
// 	// time = {
// 	//     nanoseconds: 0,
// 	//     seconds: date
// 	// }
// 	// const limit = new Date(time.seconds*1000);
// 	// options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// 	// limit.toLocaleDateString(undefined, options);
// 	// list2 = limit.toLocaleString("zh-TW");

// 	if (!DataisLoaded) return 
// 		<div>
// 			<h1> no no conmou </h1> 
// 		</div>  ;
// 	// const sort = items.sort(sortData)
// 	return [
// 		<div className = "App"  >
// 			<h1> get api success </h1> {
// 			items.map((item) => (
// 				<ol key = { item.id } >
// 					temp: { item.temp },
// 					hunidity: { item.hunidity},
// 					TS: {item.TS}
// 				</ol>
// 			))
// 			}
// 			<div className="Chart">
// 				<LineChart width={600} height={300} data={ items } >
// 					<Line type="monotone" dataKey='temp' stroke='#91B493' strokeWidth={3}/>
// 					<Line type="monotone" dataKey='hunidity' stroke='#FFCA29' strokeWidth={3}/>
// 					<CartesianGrid stroke='#D7C4BB' strokeDasharray="5" strokeWidth={2}/>
// 					<XAxis dataKey='date' stroke='#D7C4BB' strokeWidth={5}/>
// 					<YAxis type="number" domain={[0, 100]} stroke='#D7C4BB' strokeWidth={5}/>
// 					<Tooltip/>
// 					<Legend/>
// 				</LineChart>
// 			</div>
// 			<div className='textDiv'>
// 				<p className='Temptext'>溫度：{items[items.length-1].temp}</p>
// 				<p className='Humtext'>濕度：{items[items.length-1].hunidity}</p>
// 			</div>
// 		</div>
// 	];
// }
// }
// {/* <BarChart className='Bar' width={600} height={300} data={ items } >
// 					<LineChart width={600} height={300} data={ items } >
// 						<Line dataKey='hunidity' fill="#FFCA29" stroke='#FFCA29' strokeWidth={3}/>
// 					</LineChart>
// 					<Bar dataKey="temp" fill="#91B493" stroke='#91B493' strokeWidth={3}/>
// 					<CartesianGrid stroke='#D7C4BB' strokeDasharray="5 5" strokeWidth={2}/>
// 					<XAxis dataKey='time' stroke='#D7C4BB' strokeWidth={5}/>
// 					<YAxis type="number" domain={[0, 50]} stroke='#D7C4BB' strokeWidth={5}/>
// 					<Tooltip/>
// 					<Legend/>
// 				</BarChart>
			// <div className="Chart">
			// 	<LineChart width={600} height={300} data={ items } >
			// 		<Line type="monotone" dataKey='temp' stroke='#91B493' strokeWidth={3}/>
			// 		<Line type="monotone" dataKey='hunidity' stroke='#FFCA29' strokeWidth={3}/>
			// 		<CartesianGrid stroke='#D7C4BB' strokeDasharray="5 5" strokeWidth={2}/>
			// 		<XAxis dataKey='date' stroke='#D7C4BB' strokeWidth={5}/>
			// 		<YAxis type="number" domain={[0, 100]} stroke='#D7C4BB' strokeWidth={5}/>
			// 		<Tooltip/>
			// 		<Legend/>
			// 	</LineChart>
			// </div> */}

// 	// fetch('http://localhost:5001/).then(res=>
// 	//     return res.json()
// 	//   })
// 	//     .then(data=>{
// 	//       data.forEach(user=>{
// 	//         const Tm=${user.temp}
// 	//         const Hm=${user.hunidity}
// 	//         document.querySelector('div .TemDataText').insertAdjacentHTML('beforeend',Tm)
// 	//         document.querySelector('div .HumDataText').insertAdjacentHTML('beforeend',Hm)
// 	//       })
// 	//     })
// 	//     .catch(error=>console.log(error))