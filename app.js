const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const content3 = document.getElementById('content3');

const developImgContainer = document.querySelector('.develop-img-container');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {

  var image = document.getElementById("develop-image");

  if (document.documentElement.scrollTop < 6950) {
    // image.src = imageSource1;
    developImgContainer.innerHTML = '<img src="img/vs-read-me.jpg" alt="" width="1000" height="550">';
  } 
  else if (
    document.documentElement.scrollTop > 7620) {
    // image.src = imageSource2;
    developImgContainer.innerHTML = '<img src="img/vs-extensions.png" alt="" width="1000" height="550">';
  } 
  else {
    // image.src = imageSource3;
    developImgContainer.innerHTML = '<img src="img/vs-issues.jpg" alt="" width="1000" height="550">';
  }
}

// Code Section

var count=0;
var pos=document.querySelector(".nav2"); 
const val1=pos.offsetTop;
var chk=true;
console.log(val1);

document.addEventListener('scroll',function(e){
    count=count+1;

    var pos=document.querySelector(".nav2"); 
    console.log(pos.offsetTop);
    console.log(val1);
  
    console.log($(".navbar-nav").scroll());

    if (pos.offsetTop > val1){
      
      if (chk===true)
      {
        chk=false;
      console.log($(".navbar-nav").scrollTop());
            const list1 = document.createElement('li');
            const ulist = document.querySelector('#navbar-nav');
            list1.className="nav-item disappear";
            list1.innerHTML=`
            <button class="btn nav2-btn nav-link mx-auto">
            <span class="btnlet"><b>Sign up</b></span>
            </button>
            `;
            // document.querySelector(".btn").style.transition="all 2s";
            ulist.append(list1);
            console.log(list1);
            // document.querySelector(".btn").style.display="block";
          document.querySelector(".btn").style.display="block";
      }
        
       
    } 
    else 
    {
        res=document.querySelectorAll(".disappear");
        document.querySelector(".disappear").style.display="none";
        
        console.log($(".navbar-nav").scrollTop());
        console.log('Helloooooooo');
        location.reload();   
    }
    // location.reload(); 
});


// document.addEventListener('scroll',function(e){
  // res=document.querySelector(".card1")
  // console.log(res.offsetTop);
// });

// Secure Section
// animation to hide and show
const items = document.querySelectorAll('li');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return ( 
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};


const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
    else{
      item.classList.remove('show');
    }
  });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);




// COLLABORATE SECTION

const items1 = document.querySelectorAll('.move');


// const isInViewport = el => {
//   const rect = el.getBoundingClientRect();
//   return ( 
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// };


const run1 = () =>
  items1.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show1');
    }
    else{
      item.classList.remove('show1');
    }
  });

// Events
window.addEventListener('load', run1);
window.addEventListener('resize', run1);
window.addEventListener('scroll', run1);

// Community section
const items4 = document.querySelectorAll('.pop');

// const isInViewport = el => {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// };

const run3 = () =>
    items4.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('show3');
        }
        else {
            item.classList.remove('show3');
        }
    });

// Events
window.addEventListener('load', run3);
window.addEventListener('resize', run3);
window.addEventListener('scroll', run3);

// Header Card

const items5 = document.querySelectorAll('.h-card');

// const isInViewport = el => {
//   const rect = el.getBoundingClientRect();
//   return ( 
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// };


const run5 = () =>
  items5.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show5');
    }
    else{
      item.classList.remove('show5');
    }
  });

// Events
window.addEventListener('load', run5);
window.addEventListener('resize', run5);
window.addEventListener('scroll', run5);

// Smooth Scrolling
// Add smooth scrolling
$('#nav-2 a').on('click', function (e) {
  // Check for hash value
  if(this.hash !== '') {
    // Prevent the default behaviour
    e.preventDefault();

    // Store the hash
    const hash = this.hash;
    
    // Animate smooth scroll
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function() {
      // Add hash to url after scroll
      window.location.hash = hash;
    });
  }
});