const route = '127.0.0.1:8080';

function createButton(height,width,text,id=""){
    const h = `${parseInt(height)}px`;
    const w = `${parseInt(width)}px`;
    const t = `${text.toString()}`;
    const newButton = document.createElement("button");

    newButton.style.height = h;
    newButton.style.width = w;
    newButton.textContent = t;
    newButton.id = id;
    return(newButton);
}


function ariName(){
    const name = document.createElement('div');
    name.textContent = 'ari argyropoulou';
    console.log(name);
    document.body.appendChild(name);
}

async function simpleFetchText(){
    const response = await fetch('/text');
    const data = await response.text();
    return(data);
}

async function openBox(e){
    e.target.textContent = (await simpleFetchText()).toString();
}

function main(){
    
    document.body.append(createButton(100,100,"Aris Box","arisBox"));
    const mainButton = document.querySelector('#arisBox');
    mainButton.addEventListener("click",(e)=>{openBox(e)});
    
}

main();