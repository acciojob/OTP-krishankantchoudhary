//your JS code here. If required.
let inputs=document.querySelectorAll(".code");
if(inputs.length>0){
	inputs[0].focus();
}

let Arrayinput=Array.from(inputs);
Arrayinput.forEach((input,index)=>{
	input.addEventListener("input",(e)=>{
		let value=e.target.value;
		value=value.replace(/\D/g,"").slice(0,1);
		e.target.value=value;

		if(value && index<inputs.length-1){
			inputs[index+1].focus();
		}
	});
	input.addEventListener("keydown",(e)=>{
		let key=e.key;
		if(key==="Backspace"){
			e.preventDefault();
		
		if(input.value!==""){
			input.value="";
		}
		else if(index>0){
			let previnput=inputs[index-1];
			previnput.value="";
			previnput.focus();
		}
		}
	})
	
})