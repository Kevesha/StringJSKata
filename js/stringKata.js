function stringKata(){
    let add = function(number){
        if(number===""){
            return 0;
        }
        var separators = [',', '\n','[',']','{','}',';','/'];
        newNumber = number.split(new RegExp(separators.join('|'), 'g'));
        if(newNumber.length>1){
            let i;
            let sum=0;
            for(i=0;i<newNumber.length;i++){
                if(parseInt(newNumber[i])>0&&parseInt(newNumber[i])<1001){
                    sum = sum + parseInt(newNumber[i]);
                }
            }
            return sum;
        }
        return parseInt(newNumber[0]);
    }
    return {
        returnProduct:  add 
    };
}