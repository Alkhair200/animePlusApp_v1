$(document).ready(function () {

    const countries = [
        { name: "USA", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 },
        { name: "India", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 },
        { name: "Argentina", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 },
        { name: "Armenia", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 },
        { name: "Argentina", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 },
        { name: "Armenia", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 },
        { name: "Argentina", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 },
        { name: "Armenia", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 },
        { name: "Vietnam", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 },
        { name: "Vietnam", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 },
        { name: "Vietnam", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 },
        { name: "Vietnam", imageURL: "https://i.pinimg.com/474x/13/86/11/1386111b12db25a96ab4e8f2c1121057.jpg", year: 2019 }
    ];

    const searchInput = document.querySelector(".search-input");
    const suggestionsPanel = document.querySelector(".suggestions");
    const themeToggleButtons = document.querySelectorAll(".theme-toggle-button");
    const body = document.querySelector("body");
    const mobileMenu = document.querySelector("#mobile-menu");
    const mobileMenuCloseButton = document.querySelector(".close-nav-button");


    themeToggleButtons.forEach(themeToggleButton => {
        themeToggleButton.addEventListener("click", (e) => {
            e.preventDefault();
            body.classList.toggle("light");
        });
    })


    $('.border-right').hover(function () {
        $(this).find('span').eq(0).animate({

            width: '100%'

        }, 300);

    }, function () {

        $(this).find('span').eq(0).animate({

            width: 0

        }, 300)

    });

});
