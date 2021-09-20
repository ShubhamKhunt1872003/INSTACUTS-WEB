var back = document.querySelectorAll('.sec9-toggle-main'); 
var  tem = document.querySelectorAll('.sec9-toogle-hidden');
var btn = document.querySelectorAll('.button');

for(let i=0;i<back.length;i++)
{
    btn[i].addEventListener('click',() =>{
        if(tem[i].style.display === 'none')
        {
            tem[i].style.display = 'block';
            back[i].style.background = "#EDF1F6";
            btn[i].innerHTML ="-";
        }
        else
        {
            tem[i].style.display = 'none';
            back[i].style.background = "#FBFBFB"
            btn[i].innerHTML ="+";
        }
    }); 
}
