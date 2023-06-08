var buttons=document.querySelectorAll(".btn button");
           let op1=null; let op2=null; let operator=null;
           var result;
           let div=document.querySelector('.display p');

            for( let i=0;i<buttons.length;i++){
            buttons[i].addEventListener('click',function(){
            
            buttons[i].classList.add('animate');
            setTimeout(function(){
                buttons[i].classList.remove('animate');
            },200);
            var btn=buttons[i].textContent;
          
            if(btn=='='){
                
                if(op1==null || op2==null){
                    op1=null;
                    op2=null;
                    operator=null;
                    div.innerText="ERROR!";
                    return;
                }
            
                result=eval(op1+" "+operator+" "+op2);
                div.innerText=result;
                op1=result;
                op2=null;
                operator=null;
                return;
            }
            else if(btn=='/' || btn=='*' || btn=='-' || btn=='+' ){
                if(op1==null){
                    op1=null;
                    op2=null;
                    operator=null;
                    div.innerText="ERROR!";
                    return;
                }
                operator=btn;
                div.innerText="";
                console.log(op1,operator);
                return;
            
            }
            else if(btn=='+/-'){
                if(div.innerText=="ERROR!"){
                    op1=null;
                    op2=null;
                    operator=null;
                    div.innerText="";
                }
                if(op1==null)
                div.innerText='-';
                else if(op2==null && op1!=null && operator!=null)
                div.innerText='-';
                else{
                    op1=null;
                    op2=null;
                    operator=null;
                    div.innerText="ERROR!";
                }
                return;

            }
            else if(btn=='AC'){
                div.innerText="";
                op1=null;
                op2=null;
                operator=null;
                return;
            }
            else if(btn=='%'){
                if(div.innerText=="ERROR!"){
                    op1=null;
                    op2=null;
                    operator=null;
                    div.innerText="ERROR!";
                }
                if(operator!=null || op1==null){
                    op1=null;
                    op2=null;
                    operator=null;
                    div.innerText="ERROR!";
                    return;
                }
                op1=eval(op1/100);
                console.log(op1);
                div.innerText=op1;
                return;
            }
            else{
                if(div.innerText=="ERROR!"){
                    op1=null;
                    op2=null;
                    operator=null;
                    div.innerText="";
                }
                if(op1==result && operator==null){
                    op1=null;
                    op2=null;
                    operator=null;
                    div.innerText="";
                }
                div.innerText+=btn;
                if(operator==null){
                    op1=div.innerText;
                }
                else{
                    op2=div.innerText;
                }
                return;
            }

});
}