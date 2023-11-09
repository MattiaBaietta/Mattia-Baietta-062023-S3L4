/*
        Creare h2 da 1 a 90 all'avvio della pagina
        Creare un array con i numeri da 1 a 90
        creare un array vuoto per salvare i numeri estratti
        Creare un bottone randomicamente mi selezioni una casella della tabella controlli se è presente nel secondo array e la nel secondo array
        aggiungere agli elementi una classe per evidenziarli
        \\extra
        creare un textbox + bottone per dare la possibilità di scegliere quante cartelle da 15 l'utente voglia
        creare un array per ogni per cartella + 15 h3 controllando che non siano ripetuti per cartella

  */
let numeriestratti=[] //array numeri estratti
let celletombola=[] //array numeri tra cui poter estrarre
let cartelle=[[]]
const posbutton=document.getElementById("NumeroRandom") //posizione bottone per generare il numero random
console.log(posbutton)
let caselle=90 //num totale caselle

2
function PopolaArrayCelle(n){
    for(let i=1;i<=n;i++)
    {
        celletombola.push(parseInt(i))
    }
}
PopolaArrayCelle(caselle)
console.log(celletombola)

const generanumero= function(){
        const numrandom=Math.floor(Math.random()*90)
        if(numeriestratti.includes(numrandom)){
            window.alert("il numero: "+numrandom +" è già stato estratto")
        }
        else{
            numeriestratti.push(numrandom)
            console.log(numeriestratti)
        }
        let casellahighlight=document.getElementById(numrandom)
        casellahighlight.classList.add("bordo")
                
}




const creaCelle = function(numeroCaselle){
    const divtombola=document.getElementById("Tombola")
    for(let i=0;i<numeroCaselle;i++)
    {
        const contenitorecasella=document.createElement("div")
        contenitorecasella.id=celletombola[i]
        const casella=document.createElement("h2")
        casella.innerText=celletombola[i]

        divtombola.appendChild(contenitorecasella)
        contenitorecasella.appendChild(casella)
    }
}
creaCelle(caselle)

posbutton.addEventListener("click", generanumero)

const creacartelle = function(){
        const buttoncartelle=document.getElementById("GenCartelle")
        buttoncartelle.addEventListener("click",function(){
        const numCartelle=document.getElementById("NumCartelle")
        const posizionecartelle=document.getElementById("CartelleGenerate")
        let provacartella=[]
        console.log(numCartelle.value)
        for(let i=0;i<numCartelle.value;i++)
        {
            const contenitorecartelle=document.createElement("div")
            posizionecartelle.appendChild(contenitorecartelle)
            provacartella[i]=[]
            
            
            
            for(let i2=0;i2<15;i2++)
            {       
                
                contenitorecartelle.classList.add("divcartelle")
                const contenitorecasella=document.createElement("div")
                const casella=document.createElement("h2")
                let n1cartelle=Math.floor(Math.random()*90)
                contenitorecasella.classList=n1cartelle
                if(provacartella[i].includes(n1cartelle))
                {  
                    i2--

                }else{
                provacartella[i].push(n1cartelle)
                console.log(provacartella[i][i2])
                casella.innerText=n1cartelle
                contenitorecartelle.appendChild(contenitorecasella)
                contenitorecasella.appendChild(casella)
                }   
             }   
                
        }

        }
        
    )
}

creacartelle()
//<div id="CartelleGenerate">