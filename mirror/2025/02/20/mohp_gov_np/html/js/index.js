
	document.addEventListener("DOMContentLoaded", function(){
        

    /////// Prevent closing from click inside dropdown
  document.querySelectorAll('.dropdown-menu').forEach(function(element){
    element.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  })


  // make it as accordion for smaller screens
  if (window.innerWidth < 992) {

    // close all inner dropdowns when parent is closed
    document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
      everydropdown.addEventListener('hidden.bs.dropdown', function () {
        // after dropdown is hidden, then find all submenus
          this.querySelectorAll('.submenu').forEach(function(everysubmenu){
            // hide every submenu as well
            everysubmenu.style.display = 'none';
          });
      })
    });
    
    document.querySelectorAll('.dropdown-menu a').forEach(function(element){
      element.addEventListener('click', function (e) {
  
          let nextEl = this.nextElementSibling;
          if(nextEl && nextEl.classList.contains('submenu')) {	
            // prevent opening link if link needs to open dropdown
            e.preventDefault();
            console.log(nextEl);
            if(nextEl.style.display == 'block'){
              nextEl.style.display = 'none';
            } else {
              nextEl.style.display = 'block';
            }

          }
      });
    })
  }
  // end if innerWidth

}); 
// DOMContentLoaded  end


/***
 * for anthem
 */
window.addEventListener("click", (e) => {
    if(e.target.id !== "flag"){
        document.getElementById("anthem").pause()
    }else{
        document.getElementById("anthem").play()
        // alert("click anywhere to stop")
        // const flag = document.getElementById("flag").
        // addEventListener("click", () => {
        // })
    }
})



// home modal
window.addEventListener("load", () => {
  
  // English Modals
  const modal0 = document.getElementById("homeModal0")
  if(modal0){
    modal0.style.display = 'block'
    modal0.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    modal0.classList.add("show")
    const btn = document.querySelector('.close0')
      btn.addEventListener('click', () => {
        modal0.style.display = 'none'
      })
    // })
  }

  const modal1 = document.getElementById("homeModal1")
  if(modal1){
    modal1.style.display = 'block'
    modal1.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    modal1.classList.add("show")
    const btn = document.querySelector('.close1')
      btn.addEventListener('click', () => {
        modal1.style.display = 'none'
      })
  }

  const modal2 = document.getElementById("homeModal2")
  if(modal2){
    modal2.style.display = 'block'
    modal2.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    modal2.classList.add("show")
    const btn = document.querySelector('.close2')
      btn.addEventListener('click', () => {
        modal2.style.display = 'none'
      })
  }

  const modal3 = document.getElementById("homeModal3")
  if(modal3){
    modal3.style.display = 'block'
    modal3.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    modal3.classList.add("show")
    const btn = document.querySelector('.close3')
      btn.addEventListener('click', () => {
        modal3.style.display = 'none'
      })
  }

  const modal4 = document.getElementById("homeModal4")
  if(modal4){
    modal4.style.display = 'block'
    modal4.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    modal4.classList.add("show")
    const btn = document.querySelector('.close4')
      btn.addEventListener('click', () => {
        modal4.style.display = 'none'
      })
  }
 


  // Nepali Modals
  const modal0np = document.getElementById("homeModal0np")
  if(modal0np){
    modal0np.style.display = 'block'
    modal0np.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    modal0np.classList.add("show")
    const btn = document.querySelector('.close0np')
      btn.addEventListener('click', () => {
        modal0np.style.display = 'none'
      })
    // })
  }

  const modal1np = document.getElementById("homeModal1np")
  if(modal1np){
    modal1np.style.display = 'block'
    modal1np.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    modal1np.classList.add("show")
    const btn = document.querySelector('.close1np')
      btn.addEventListener('click', () => {
        modal1np.style.display = 'none'
      })
  }

  const modal2np = document.getElementById("homeModal2np")
  if(modal2np){
    modal2np.style.display = 'block'
    modal2np.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    modal2np.classList.add("show")
    const btn = document.querySelector('.close2np')
      btn.addEventListener('click', () => {
        modal2np.style.display = 'none'
      })
  }

  const modal3np = document.getElementById("homeModal3np")
  if(modal3np){
    modal3np.style.display = 'block'
    modal3np.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    modal3np.classList.add("show")
    const btn = document.querySelector('.close3np')
      btn.addEventListener('click', () => {
        modal3np.style.display = 'none'
      })
  }

  const modal4np = document.getElementById("homeModal4np")
  if(modal4np){
    modal4np.style.display = 'block'
    modal4np.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
    modal4np.classList.add("show")
    const btn = document.querySelector('.close4np')
      btn.addEventListener('click', () => {
        modal4np.style.display = 'none'
      })
  }



})



// for time
const realTIme = document.getElementById("reaTime")

if(realTIme){

  let today = new Date();

  let month = today.getMonth();
      year = today.getFullYear();
     date = today.getDate();
     day = today.getDay();
  
  var months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
  ]
  var days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
  ]
  
  let textMonth = months[month]
  let textDay = days[day]
  
  
  let currentDate = `${textDay} - ${textMonth} ${date} ${year}`
  realTIme.innerText = currentDate
}



// lowBand
const lowBand = document.getElementById("lowBand")
let lowBandToggle = false;

lowBand.addEventListener("click", (e) => {
  lowBandToggle = !lowBandToggle 
  if(lowBandToggle){
    let flag = document.querySelector("#flag")  
    
    
      const allImg = document.querySelectorAll('Img').forEach(img => {
        if(img.className !== "noRemove"){
          img.src = ['']
          lowBand.innerText = 'Normal Bandwidth'
        }
      })
    
  }else{
    window.location.reload()
  }
  

})

// lowBand.addEventListener("click", () => {
//   let flag = document.querySelector("#flag")
//   const allImg = document.querySelectorAll('Img').forEach(img => {
//     img.parentNode.removeChild(img)
//   })
  
// })





// for forms and tables
$(document).ready(function () {
    $('#example').DataTable();
    
});


$(function () {
  $('#main_navbar').bootnavbar();
})

// hightlight-slider
$('.hightlight-slider').slick({
  dots: false,
  loop: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 700,
  
});


// hero-slider
$('.hero-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 900,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// smart health initiatives slider
$('.smart-health').slick({
  dots: true,
  infinite: false,
  arrows:false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 745,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 486,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
				
// video section slider
$('.videos').slick({
    dots: true,
    infinite: false,
    arrows:false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 745,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 486,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});
