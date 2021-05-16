  //Nav 
        window.addEventListener('scroll', function () {
            let header = document.querySelector('header');
            let windowPosition = window.scrollY > 0;
            header.classList.toggle('scrolling-active', windowPosition);
        })
   
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-list');
        const navList = document.querySelectorAll('.nav-list li');
       
        burger.addEventListener('click',()=>{
            //Toggle nav
            nav.classList.toggle('nav-active');
        
        //Burger Animation
        burger.classList.toggle('toggle');
        });
}
    navSlide();
    //End Nav

    //Read More button
    var i=0;
    function read(){
        if (!i) {
            document.getElementById("more").style.display ="inline";
            document.getElementById("dots").style.display ="none";
            document.getElementById("read").innerHTML="Read less";
            i=1;
        }
        else{
            document.getElementById("more").style.display ="none";
            document.getElementById("dots").style.display ="inline";
            document.getElementById("read").innerHTML="Read more";
            i=0;
        }
    }


      //Gallery
       $(".gallery").magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery:{
        enabled: true
      }
    });

       window.addEventListener('scroll', () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        if(Math.ceil(scrolled) === scrollable) {
            alert('You\'ve reached the bottom!')
        }
       });

       //show modal
       const toggleModal = () => {
        document.querySelector('.modal')
         .classList.toggle('modal--hiden');
       };

       document.querySelector('#show-modal')
         .addEventListener('click', toggleModal);
       document.querySelector('#explore')
         .addEventListener('submit', (event) => {
            event.preventDefault();
            toggleModal();
         });

  document.querySelector('modal__close-bar span')
    .addEventListener('click', toggleModal);
    
        function openForm(){
            document.getElementById("myOverlay").style.display ="block";
        };

        function closeForm(){
            document.getElementById("myOverlay").style.display ="none";
        };
    
