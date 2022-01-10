let screen = document.querySelector('.screen input');
let btns = document.querySelectorAll('.btn');

let btnText='';


btns.forEach((e)=>{
    e.addEventListener('click', ()=>{
        btnText = e.innerHTML;
        if(btnText == '=' && screen.value != '' ){
            screen.value = eval(screen.value);
        }else if(btnText == 'C'){
            btnText = '';
            screen.value = '';
        }else if(screen.value == '' && (btnText == '=' ||btnText == '+'||btnText == '-'||btnText == '/'||btnText == '*')){
            setTimeout(val, 1500);
            screen.value = 'Please perform a operation';
        }else if(btnText == 'DEL'){
            screen.value = (screen.value).slice(0,-1)
        }
        else{
            screen.value += btnText;
        }
    });
});

function val(){
    screen.value = '';
}