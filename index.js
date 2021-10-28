var a=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
             "@","!","$","&","*","#","_","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
     var generator=document.getElementById('password')
    function random(){
            let index ="";
            for(let i=0;i<6;i++){
                    index += a[getRandomnumber()]
            }
            generator.textContent=index
    }
    function getRandomnumber(){
            return Math.floor(Math.random() * a.length)
    }