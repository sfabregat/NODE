var os=require('os');
console.log('Memoria: '+os.freemem()+' bytes');
var vector=[];
for (var i = 0; i < 1000000; i++) {
	vector.push("1");
}

console.log('Memoria: '+os.freemem()+' bytes');