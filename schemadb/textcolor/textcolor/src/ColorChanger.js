import React,{ Component } from 'react';
class ColorChanger extends Component{
constructor(props){
super(props);
this.state={
textColor:'black',
fontSize:'18px',
fontStyle:'normal',
textDecoration:'none'
};
this.watermarkStyle={
position:'absolute',
top:'50%',
left:'50%',
transform:'translate(-50%,-50%)',
zIndex:'-1',
opacity:'0.3',
fontFamily:'Arial,sans-serif',
fontSize:'50px',
fontStyle:'Normal',
color:'grey',
};
}
handleColorChange=(event) =>{
this.setState({textColor:event.target.value});
};
handleSizeChange=(event)=>{
this.setState({fontSize:event.target.value});
};
handleStyleChange=(event)=>{
this.setState({fontStyle:event.target.value});
};
handleDecorationChange=(event)=>{
this.setState({textDecoration:event.target.value});
};
render(){
const{textColor,fontSize,fontStyle,textDecoration}=this.state;
return(
<div style={{textAlign:'center',marginTop:'50px'}}>
<div style={this.watermarkStyle}>Bindu sree</div>
<label htmlFor="colorPicker">Select text color:</label>
<input
type="color"
id="colorPicker"
value={textColor}
onChange={this.handleColorChange}/>
<label htmlFor="fontSize">Select font size:</label>
<input
type="number"
id="fontSize"
value={parseInt(fontSize)}
onChange={this.handleSizeChange}/>
<label htmlFor="fontStyle">Select font style:</label>
<select id="fontStyle" value={fontStyle} onChange={this.handleStyleChange}>
    <option value="normal">Normal</option>
    <option value="italic">Italic</option>
</select>
<label htmlFor="textDecoration">Select text decoration:</label>
<select id="textDecoration" value={textDecoration} onChange={this.handleDecorationChange}>
<option value="none">None</option>
    <option value="underline">UnderLine</option>
    <option value="overline">OverLine</option>
    <option value="line-through">Line through</option>
    </select>
    <div style={{color:textColor,marginTop:'20px',fontFamily:"Arial, sans-serif",fontSize:fontSize,fontStyle:fontStyle,textDecoration:textDecoration}}>
    <h1>Its your choice ,see the Magic!</h1>
    </div>
    </div>);
}
}
export default ColorChanger;