const ul = document.getElementsByTagName('ul')[0]
const articleBox = document.querySelectorAll('.article-box')[1]
const h4 = document.getElementsByTagName('h4')[0]

function toggleUl(e) {
    if(e.target == h4){
        articleBox.classList.toggle('ul');
        ul.classList.toggle('ul-2')
        
        
    }
}

addEventListener('click',toggleUl)