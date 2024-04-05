// This function is used to display the seating chart for the user to select their seats.
function showSectionImage(sectionId) {
    // This object maps section IDs to the paths of their corresponding images.
    const sectionImageMap = {
        "section101": "/images/seating-images/section101.png",
        "section102": "/images/seating-images/section102.png",
        "section103": "/images/seating-images/section103.png",
        "section104": "/images/seating-images/section104.png",
        "section105": "/images/seating-images/section105.png",
        "section106": "/images/seating-images/section106.png",
        "section-200": "/images/seating-images/section200.png",
        "section-201": "/images/seating-images/section201.png",
        "section-202": "/images/seating-images/section202.png",
        "section-203": "/images/seating-images/section203.png",
        "section-204": "/images/seating-images/section204.png",
        "section-205": "/images/seating-images/section205.png",
        "section-206": "/images/seating-images/section206.png",
    };

    // Get the image path for the given section ID.
    const sectionImage = sectionImageMap[sectionId];
    if (sectionImage) {
        // Open a new popup window.
        const popupWindow = window.open("", "Section Image", "width=2000,height=1000,channelmode=yes,fullscreen=yes,scrollbars=no");

        // Write the image and script to the popup window's document.
        popupWindow.document.write(`
            <style>
                @keyframes fadeIn {
                    0% {opacity: 0;}
                    100% {opacity: 1;}
                }
                .fade-in {
                    animation: fadeIn 3s ease-in-out;
                }
            </style>
            <div style="text-align:center;">
                <img src="${sectionImage}" alt="Section Image" style="max-width:100%; height:auto;">
                <p class="fade-in" style="font-size:40px; font-family:Papyrus; font-weight:bold; color:#333; word-spacing:10px; margin-top:10px;">Click anywhere on the screen to close this window.</p>
            </div>
            <script>
                // Add an event listener to the document that closes the window when the document is clicked.
                document.addEventListener('click', function() {
                    window.close();
                });
            </script>
        `);
    }
}


const vipBtn = document.getElementById('vip-experience-btn');
const vipSlideOut = document.getElementById('vip-slide-out'); 

vipBtn.addEventListener('click', function() {
    vipSlideOut.style.display = 'block';
    vipSlideOut.style.animation = 'slideIn 1s forwards';
});

const exitBtn = document.getElementById('vip-exit-button');

exitBtn.addEventListener('click', function() {
    vipSlideOut.style.animation = 'slideOut 1s forwards';
    setTimeout(() => {
        vipSlideOut.style.display = 'none';
    }, 1000);
});