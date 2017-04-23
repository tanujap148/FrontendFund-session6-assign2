var arr = [32,159,64];
function myFunction(){
	var i;
	for(i=0;i<arr.length-1;i++){
		if(arr[i]>arr[0])
		arr[0] = arr[i];
	}	
	console.log(arr[0]);
	document.getElementById("myId").innerHTML=arr[0];
}