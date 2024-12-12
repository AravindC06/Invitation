// Store the translations in an object
const translations = {
    english: {
        invite: "WE INVITE YOU TO",
        celebrate: "CELEBRATE",
        opening: "OUR SHOP OPENING!",
        date: "Aug 26, 2024",
        honour: "Honour us with your presence",
        backHeader1: "Shop",
        backHeader2: "Opening Invitation",
        message: "Our store, formerly located in Ramakrishnapuram, has now moved to L.G.B. Nagar, opposite Canara Bank. We invite you to visit us at our new location. Your continued love and support mean a lot to us.",
        place: 'Venue',
        address:"New Metro Tailor (Opp to Canara Bank), L.G.B Nagar, Sivanandha Puram, Saravanampatti, Coimbatore-35.",
        time: 'Timing',
        gratitude: "With Gratitude,",
        shopName: "New Metro Tailor",
        ownerName: "ChinnaDurai",
        btnText: "அ",
        buttonText1: "Show more!",
        buttonText2: "Show more!"
    },
    tamil: {
        invite: "நாங்கள் உங்களை",
        celebrate: "அழைக்கிறோம்",
        opening: "எங்கள் கடைத் திறப்புகஂகு!",
        date: "ஆகஸ்ட் 26, 2024",
        honour: "உங்கள் வருகையால் நாங்கள் கௌரவப்படுகிறோம்",
        backHeader1: "கடை",
        backHeader2: "திறக்கும் அழைப்பு",
        message: "ராமகிருஷ்ணாபுரத்தில் சேயில்பட்டுவந்த எங்கள் கடை தற்போது புதிதாக எல்.ஜி.பி நகர் கனரா வங்கி எதிரிலஂ மாற்றப்பட்டுளஂளது. மீண்டும் தஙஂகளினஂ அன்புமஂ, ஆதரவுமஂ தருமாறு கேடஂடுகஂகொளஂகிறோமஂ!",
        place:'இடம்',
        address:'நியூ மெட்ரோ டெய்லர் (கனரா வங்கிக்கு எதிரே), எல்.ஜி.பி நகர், சிவானந்த புரம், சரவணம்பட்டி, கோயம்புத்தூர்-35',
        time:'நேரம்',
        gratitude: "நன்றியுடன்,",
        shopName: "நியூ மெட்ரோ டெய்லர்",
        ownerName: "சின்னதுரை",
        btnText: "A",
        buttonText1: "அடுத்தது",
        buttonText2: "அடுத்தது"
    }
};

let currentLanguage = 'english';

function switchLanguage() {
    currentLanguage = (currentLanguage === 'english') ? 'tamil' : 'english';
    
    // Update text based on the selected language
    document.querySelector(".title.lettering:nth-child(1)").textContent = translations[currentLanguage].invite;
    document.querySelector(".title.lettering:nth-child(2)").textContent = translations[currentLanguage].celebrate;
    document.querySelector(".title.lettering:nth-child(3)").textContent = translations[currentLanguage].opening;
    document.querySelector(".opening-date").textContent = translations[currentLanguage].date;
    document.querySelector(".honour").textContent = translations[currentLanguage].honour;
    
    // Update both .back-content-header elements
    const backHeaders = document.querySelectorAll(".back-content-header");
    if (backHeaders.length >= 2) {
        backHeaders[0].textContent = translations[currentLanguage].backHeader1;
        backHeaders[1].textContent = translations[currentLanguage].backHeader2;
    }
    
    document.querySelector(".shop-message span").textContent = translations[currentLanguage].message;
    document.querySelector(".place").textContent = translations[currentLanguage].place;
    document.querySelector(".time").textContent = translations[currentLanguage].time;
    document.querySelector(".footer-back:nth-child(1)").textContent = translations[currentLanguage].gratitude;
    document.querySelector(".footer-back:nth-child(3)").textContent = translations[currentLanguage].shopName;
    document.querySelector(".footer-back:nth-child(2)").textContent = translations[currentLanguage].ownerName;
    document.getElementById("translate-btn").textContent = translations[currentLanguage].btnText;
    
    // Call toggleText to update button text based on the current language
    toggleText();
}


// Add event listener to the button
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("translate-btn").addEventListener("click", switchLanguage);
});

function toggleText() {
    var text = translations[currentLanguage].buttonText1;
    if (!flipped) {
        animate(".title span");
        button.toggleClass('invert', !flipped).text(text);
    } else {
        animate(".footer-back span");
        text = translations[currentLanguage].buttonText2;
        button.toggleClass('outvert', !flipped).text(text);
    }
}