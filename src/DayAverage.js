import React, { useEffect, useState } from 'react';
import './App.css';
import { CartesianAxis, CartesianGrid, Legend, Line, LineChart, XAxis, YAxis, Tooltip, BarChart, Bar, ResponsiveContainer, ComposedChart, Area} from 'recharts';
//import { Tooltip } from 'chart.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DarkMode from "./DarkMode"
import { Link } from 'react-router-dom';

function Day () {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5001/day")
        .then(res => res.json())
        .then(json => {
			setIsLoaded(true)
          	setItems(json)
			},
			// Note: it's important to handle errors here
			// instead of a catch() block so that we don't swallow
			// exceptions from actual bugs in components.
			(error) => {
			  setIsLoaded(true);
			  setError(error);
			}
		)
    },[])
	const list = items[4];
	// const temp = list['temp'];
	// console.log(temp);
	// console.log(list['temp']);
	let temp = 0;
	let humidity = 0;
	for(const key in list){
		// console.log(key,list[key]);
		if( key == 'temp' ){
			temp = list[key];
		}
		if( key == 'hunidity' ){
			humidity = list[key];
		}
	}
	
	console.log(temp);
	console.log(humidity);
        return [
            // <div class="container" className="App">
                <div class="row justify-content-end">
                    <div class="col-4">
                        <DarkMode />
                    </div>
                    <div class="col-4">
                        <Link to="/min"><button className='minBtn'>即時資料</button></Link>
                        <Link to="/day"><button className='dayBtn'>歷史資料</button></Link>
                    </div>
                </div>,
				<div className='showbg'>
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
									{/* <p >{ items[items.length-1].temp }</p> */}
									<p className='Ttext'> { temp } </p>
									<p className='Tunit'>°C</p>
								</div>
							</div>
							<hr className="hr"/>
							<div>
								<p className='Htitle'>Humidity</p>
								<div class='d-flex justify-content-around'>
									{/* <img src={require('./image/humidity.png')} width="140" height="140" /> */}
									<div id='Himg'></div>
									{/* <p className='Htext'>{ items[items.length-1].hunidity }</p> */}
									<p className='Htext'> { humidity } </p>
									<p className='Hunit'>％</p>
								</div>
							</div>
						</div>
						<div class="col-md-8">
							<ResponsiveContainer width="100%" height="100%">
								<ComposedChart  data={items} >
									<CartesianGrid id='chart' strokeDasharray="5 5" strokeWidth={2}/>
									<XAxis id='chartX' dataKey="date" />
									<YAxis id='chartYt' unit='°C' yAxisId="left-axis" dataKey='temp' domain={[0, 50]} />
									<YAxis id='chartYh' unit='％' yAxisId="right-axis" dataKey='hunidity' domain={[0, 100]} orientation='right'/>
									<Tooltip separator='=' />
									<Legend />
									<Bar id='chartB' yAxisId="left-axis" dataKey="temp" barSize={30} fill='#ECDBC8'/>
									{/* <Bar id='chartB' yAxisId="left-axis" dataKey="temp" barSize={30} fill='#FFDEA5'/> */}
									<Line id='chartL' yAxisId="right-axis" type="monotone" dataKey="hunidity" strokeWidth={4}/>
								</ComposedChart>
							</ResponsiveContainer>
						</div>
					</div>
				</div>
            // </div>
        ]
}

export default Day;