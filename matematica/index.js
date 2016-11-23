var operation=function(){
const PI =3.141592;
this.operadors={
	op1:0,
	op2:0
};
this.suma=function(op1,op2){
	var result=op1+op2;
	this.operadors={
		op1:op1,
		op2:op2
	}
	console.log(op1+" + "+op2+" es igual a: "+result);
	return this.operadors;
};
this.resta=function(op1,op2){
	var result=op1-op2;
	console.log(op1+" - "+op2+" es igual a: "+result);
}
this.multiplicacion=function(op1,op2){
	var result=op1*op2;
		console.log(op1+" X "+op2+" es igual a: "+result);

}
this.division=function(op1,op2){
	var result=op1/op2;
	this.operadors={
		op1:op1,
		op2:op2
	}
	console.log(op1+" / "+op2+" es igual a: "+result);	
}
this.pi=function(){
	console.log("Numero PI es igual a : "+PI);
}
}
module.exports=Oper;