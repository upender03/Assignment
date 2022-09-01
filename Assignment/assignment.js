(function(){
    function pairInteger(num){
        for(let i=0;i<num;i++) {
			for(let j=0;j<num;j++) {
				if(((i*i)+(j*j))==num) {
					console.log(i+" "+j);
				}
			}
		}
    }
    pairInteger(10);

})();