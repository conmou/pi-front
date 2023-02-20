import React, { useEffect, useState } from 'react';
import './App.css';
import { CartesianAxis, CartesianGrid, Legend, Line, LineChart, XAxis, YAxis, Tooltip, BarChart, Bar, ResponsiveContainer, ComposedChart, Area} from 'recharts';
//import { Tooltip } from 'chart.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DarkMode from "./DarkMode"

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
		//fetch("https://pi-backend-bt5mbx1ej-conmou.vercel.app/min")
		fetch("http://localhost:5001/min")
			.then(res => res.json())
			.then(json => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
			.then(e => {
				console.log("error", e)
			})
			console.log(this.state)
	}
	
	render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return 
            <div>
                <h1> no no conmou </h1> 
            </div>  ;
        // const sort = items.sort(sortData)
		// for (let index = 0; index < items.length; index++) {
		// 	const element = items[index];
		// 	// items.forEach(element => {
		// 	// 	element
		// 	// });
		// 	return <ol key = { element.id } >
		// 	temp: { element.temp },
		// 	hunidity: { element.hunidity},
		// 	date: { element.date },
		// 	TS: {element.TS},
		// 	min: {element.time}
		// 	</ol>
		// }

        return [
            <div class="container" className="App">
				<DarkMode />
				<div  className='showbg'>
					<div class="row" className="content">
						<h4>T&H</h4>
						<h4>T&H</h4>
					</div>
					<div class="row">
						<div class="col-md-4">
							<div >
								{/* <img src='image/heat.png'/> */}
								<p className='Ttitle'>Temperature</p>
								<div class='d-flex justify-content-around'>
									{/* <img src={require('./image/heat.png')} width="140" height="140"/> */}
									<div id='Timg'></div>
									<p className='Ttext'>{items[items.length-1].temp}</p>
									<p className='Tunit'>°C</p>
								</div>
							</div>
							<hr className="hr"/>
							<div>
								<p className='Htitle'>Humidity</p>
								<div class='d-flex justify-content-around'>
									<div id='Himg'></div>
									{/* <img src={require('./image/humidity.png')} width="140" height="140" /> */}
									<p className='Htext'>{items[items.length-1].hunidity}</p>
									<p className='Hunit'>％</p>
								</div>
							</div>
						</div>
						<div class="col-md-8">
							<ResponsiveContainer width="100%" height="100%">
								<ComposedChart  data={items} >
									<CartesianGrid id='chart' strokeDasharray="5 5" strokeWidth={2}/>
									<XAxis id='chartX' dataKey="time" />
									<YAxis id='chartYt' unit='°C' yAxisId="left-axis" dataKey='temp' domain={[0, 50]} />
									<YAxis id='chartYh' unit='％' yAxisId="right-axis" dataKey='hunidity' domain={[0, 100]} orientation='right'/>
									<Tooltip separator='=' />
									<Legend />
									<Bar id='chartB' yAxisId="left-axis" dataKey="temp" barSize={30} fill='#F3BE97'/>
									{/* <Bar id='chartB' yAxisId="left-axis" dataKey="temp" barSize={30} fill='#FFDEA5'/> */}
									<Line id='chartL' yAxisId="right-axis" type="monotone" dataKey="hunidity" strokeWidth={4}/>
								</ComposedChart>
							</ResponsiveContainer>
						</div>
					</div>
				</div>
            </div>
        ];
  }
}

export default App;

// function App() {
// 	return (
// 	  <div className="App">
// 		<nav>
// 		  <a href="/">Home</a>
// 		  <a href="/">Projects</a>
// 		  <a href="/">About</a>
// 		  <a href="/">Contact</a>
// 		  <DarkMode />
// 		</nav>
// 		<h1>Hello World</h1>
// 		<div id="image"></div>
// 		<p>
// 		  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget
// 		  scelerisque neque, quis scelerisque erat. Quisque venenatis molestie
// 		  sapien, dapibus viverra nulla hendrerit eget. Pellentesque egestas
// 		  ultrices accumsan. Ut ac magna vel ex maximus ultricies. Nulla facilisi.
// 		  Suspendisse gravida sem eu odio mattis ullamcorper. Curabitur feugiat
// 		  ipsum vel vulputate ultricies.
// 		</p>
// 		<p>
// 		  Praesent pulvinar faucibus risus in iaculis. Sed erat felis, pretium sit
// 		  amet ultricies non, porta et lacus. Curabitur a urna mi. Sed eleifend
// 		  sed erat eget viverra. Quisque sit amet purus viverra massa posuere
// 		  congue. Suspendisse efficitur venenatis enim, id hendrerit enim ultrices
// 		  sed. Nam sed dapibus nisi.
// 		</p>
// 	  </div>
// 	)
//   }
//   export default App

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