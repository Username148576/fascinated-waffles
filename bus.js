import axios from 'axios';
import jsSHA from 'jssha';
import url from'url';

const getAuthorizationHeader = function() {
	var AppID = 'e05be185a29147f7b37c4343bedae576';
	var AppKey = '1BySzX0HVXNpZgE-4znpiKBW8TE';
	var GMTString = new Date().toGMTString();
	var ShaObj = new jsSHA('SHA-1', 'TEXT');
	ShaObj.setHMACKey(AppKey, 'TEXT');
	ShaObj.update('x-date: ' + GMTString);
	var HMAC = ShaObj.getHMAC('B64');
	var Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
	return { 'Authorization': Authorization, 'X-Date': GMTString};
}

function get_busTime(data)
{
	let busTime;
	if(data.EstimateTime!=null){
		if(data.EstimateTime<=60)busTime="即將進站";
		else busTime=data.EstimateTime/60+"分鐘後";
	}
	else if(data.StopStatus===2)busTime="不停靠";
	else if(data.StopStatus===3)busTime="末班駛離";
	else if(data.StopStatus===1){
		let busHour=(data.NextBusTime[11]-'0')*10+(data.NextBusTime[12]-'0');
		let busMinute=(data.NextBusTime[14]-'0')*10+(data.NextBusTime[15]-'0');
		busTime="未發車 預預估到達時間("+busHour.toString().padStart(2, '0')+':'+busMinute.toString().padStart(2, '0')+")";
	}
	return busTime;
}

async function state(parame)
{
	const APIBASE = "https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/Taoyuan/PassThrough/Station"
	let data = {
		"$select":  "StopStatus,EstimateTime,RouteName,NextBusTime",
		"$filter":  "(RouteUID eq 'TAO3220' or RouteUID eq 'TAO133') and Direction eq 1 or (RouteUID eq 'TAO3221' or RouteUID eq 'TAO1730') and Direction eq 0",
		"$orderby": "RouteName/En",
		"$top": "30",
		"$format":  "JSON",
	}
	let URL = url.parse( `${APIBASE}/${parame.id}`, true );
	URL.query = data;
	let Url=url.format(URL);
	console.log(Url);
	const output=[];
	const response = await axios.get(Url, { 
		headers: getAuthorizationHeader(),
	})
	console.log(response.data);
	response.data.forEach((doc)=>{
		let busTime=get_busTime(doc);
		output.push({
	  		route : doc.RouteName.Zh_tw,
	  		time : busTime,
		});
	})
	console.log(output);
	return output;
}

async function route(parame){
	const APIBASE = "https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/Taoyuan"
	let str="Direction eq "+ parame.dir;
	let data = {
		"$select":  "StopStatus,EstimateTime,StopName,NextBusTime",
		"$filter":  str,
		"$orderby": "StopSequence",
		"$format":  "JSON",
	}
	let URL = url.parse( `${APIBASE}/${parame.id}`, true );
	URL.query = data;
	let Url=url.format(URL);
	console.log(Url);

	const output=[];
	const response = await axios.get(Url, { 
		headers: getAuthorizationHeader(),
	})
	console.log(response.data);
	response.data.forEach((doc)=>{
		let busTime=get_busTime(doc);
		output.push({
	  		state : doc.StopName.Zh_tw,
	  		time : busTime,
		});
	})
	console.log(output);
	return output;
}

async function second(){
	station_id=[235,1351];
	const APIBASE = "https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/Taoyuan/PassThrough/Station"
	let data = {
		"$select":  "StopStatus,EstimateTime,RouteName,NextBusTime,StopName",
		"$filter":  "(RouteUID eq 'TAO3220' or RouteUID eq 'TAO133') and Direction eq 1 or (RouteUID eq 'TAO3221' or RouteUID eq 'TAO1730') and Direction eq 0",
		"$orderby": "RouteName/En",
		"$top": "2",
		"$format":  "JSON",
	}
	const output=[];
	for(i=0;i<station_id.length;i++){
		let URL = url.parse( `${APIBASE}/${station_id[i]}`, true );
		URL.query = data;
		let Url=url.format(URL);
		console.log(Url);
		const response = await axios.get(Url, { 
			headers: getAuthorizationHeader(),
		})
		console.log(response.data);
		let busTime1=get_busTime(response.data[0]);
		let busTime2=get_busTime(response.data[1]);
		output.push({
			stateEn : response.data[0].StopName.En,
			state : response.data[0].StopName.Zh_tw,
	  		route1 : response.data[0].RouteName.Zh_tw,
	  		time1 : busTime1,
			route2 : response.data[1].RouteName.Zh_tw,
			time2 : busTime2
		});
	}
	console.log(output);
	return output;
}

export default {
	state,
	route,
	second
};