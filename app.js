document.addEventListener('DOMContentLoaded',()=>{
    iniciarApp();
})


function iniciarApp(){
    const body = document.querySelector('body')
    setTimeout(()=>{
        body.style.overflowY = 'scroll';
    },1300)
    

   consultarDiv();

    window.addEventListener('scroll',()=>{

        const tours = document.querySelector('.tours')
        const altura = consultarAltura(tours);
       
        const plane = document.querySelector('.container-plane')
        if(altura<=-56){
            plane.classList.add('mover-avion')
        }
    })

    
   
    aparecerSocialMedia();
    navegacionSmooth();
}

function navegacionSmooth(){
    const smooths = document.querySelectorAll('.smooth');
    smooths.forEach(smooth=>{
        if(smooth){
            smooth.addEventListener('click',(e)=>{
                e.preventDefault()
                const href = e.target.attributes.href.value;
                const section = document.querySelector(href);
                section.scrollIntoView({behavior:'smooth'})
           
                
            });
        }
        return;
    })

}


function consultarAltura(container){

        return container.getBoundingClientRect().top
   
   
}

function aparecerSocialMedia(){
    const flecha = document.querySelector('.container-arrow');
    const socials = document.querySelectorAll('.container-social-media a')
    flecha.addEventListener('click',()=>{

        socials.forEach((social)=>{
            social.classList.toggle('aparecer')
            social.style.width='fit-content';
            if(social.style.opacity==1){
                social.style.opacity=0;
                flecha.style.transform = 'rotate(-90deg)'
                return;
            }
            
            social.style.opacity=1;
            flecha.style.transform = 'rotate(450deg)'
        })

    })
}

function consultarDiv(){
    
    const containerNav = document.querySelector('.container-nav');
    const containerText= document.querySelector('.container-text')
    const containerImgs = document.querySelector('.containerg-imgs')
    aparecerDiv(containerNav,0);
    aparecerDiv(containerText,1000)
    aparecerDiv(containerImgs,1300)


}

function aparecerDiv(element,time){
 
    setTimeout(()=>{
        element.classList.add('aparecer')
    },time)

}