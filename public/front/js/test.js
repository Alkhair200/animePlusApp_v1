
$(document).ready(function() {


    ///////////// sidebar////////////////////
    function toggleSidebar() {
        $(".button").toggleClass("active");
        $("main").toggleClass("move-to-left");
        $(".sidebar-item").toggleClass("active");
      }
    
      $(".button").on("click tap", function() {
        toggleSidebar();
      });
    
      $(document).keyup(function(e) {
        if (e.keyCode === 27) {
          toggleSidebar();
        }
      });
      ///////////// sidebar////////////////////



      if (document.querySelector('.dropdown-series')) {
            // dropdown container
    const dropdown = document.querySelector('.dropdown-series');

    // input
    const input = document.querySelector('input');

    // dropdown list elements
    const listOfOptions = document.querySelectorAll('.option');
    const body = document.body;

    // Functions

    // basic toggle (open/close) function
    // "classList.toggle(className)" toggles 'opened' class
    const toggleDropdown = (event) => {
    event.stopPropagation();
    dropdown.classList.toggle('opened');
    };
    // option selection from dropdown list
    // used "event.currentTarget" to specify the selected option
    // after option is chosen, its "textContent" value being copied to input's value
    const selectOption = (event) => {
    input.value = event.currentTarget.textContent;
    };

    // we want the dropdown list to close when clicked outside of it
    // ex: no option was selected
    // we do a simple check below
    // if dropdown list is in opened state
    // then remove the ".opened" class
    const closeDropdownFromOutside = () => {
    if (dropdown.classList.contains('opened')) {
    dropdown.classList.remove('opened');
    }
    };
    // Event Listeners
    // if we click anywhere on "body" and dropdown list opened
    // the dropdown will be closed
    body.addEventListener('click', closeDropdownFromOutside);
    // options selection
    listOfOptions.forEach((option) => {
    option.addEventListener('click', selectOption);
    });
    // dropdown toggle
    dropdown.addEventListener('click', toggleDropdown);
    
    
      }




    let defaults = {
      spaceBetween: 5,
      slidesPerView: 2
    };
    // call init function
    initSwipers(defaults);

    function initSwipers(defaults = {}, selector = ".swiper") {
      let swipers = document.querySelectorAll(selector);
      swipers.forEach((swiper) => {
        // get options
        let optionsData = swiper.dataset.swiper ?
          JSON.parse(swiper.dataset.swiper) : {};
        // combine defaults and custom options
        let options = {
          spaceBetween: 12,
          slidesPerView: 5,
          pagination: {
            el: ".swiper-pagination"
          },
          autoplay: false,
          // autoplay: { delay: "5000" },
          breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 6,
              spaceBetween: 10
            }
          }
        };
        new Swiper(swiper, options);
      });
    }

});