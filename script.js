document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu Toggle
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  navToggle.addEventListener('click', function () {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll'); // Add or remove no-scroll class
  });

  // Close the menu when clicking outside
  document.addEventListener('click', function (event) {
    if (!mobileMenu.contains(event.target) && !navToggle.contains(event.target)) {
      mobileMenu.classList.add('hidden');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll'); // Remove no-scroll when closing menu
    }
  });

  //hero section 
  const heroSection = document.querySelector('.hero-section');
const imagePaths = [
    'images/banner/ban1.jpg',
    'images/banner/ban2.jpg',
    'images/banner/ban3.jpg',
    'images/banner/ban4.jpg',
    'images/banner/ban5.jpg',
    'images/banner/ban6.jpg',
    'images/banner/ban7.jpg',
    'images/banner/ban8.jpg',
    'images/banner/ban9.jpg',
    'images/banner/ban10.jpg'
];

// Preload images
function preloadImage(src) {
    const img = new Image();
    img.src = src;
}

// Preload the first image
preloadImage(imagePaths[0]);

let currentIndex = 0;

function changeBackgroundImage() {
    heroSection.style.backgroundImage = `url('${imagePaths[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % imagePaths.length; // Loop back to the first image
}

// Change image every 4 seconds
setInterval(changeBackgroundImage, 4000);

// Donation Button
const donationButton = document.querySelector('.donation-button');
donationButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.open('https://docs.google.com/forms/d/e1FAIpQLSfmQHHjx6Icw0Qja1aa4zBmD9UIYDTmEm9H0cYzBz6VFkFnRA/viewform?usp=sf_link', '_blank'); 
});


  // Email Button
  const emailbutton = document.querySelector('.email-button');
  emailbutton.addEventListener('click', function (event) {

    console.log("email section")
    var recipients = "Cm@maharashtra.gov.in,cmpro@maharashtra.gov.in,dcm@maharashtra.gov.in,secy-road@nic.in,secy.cmd@krcl.co.in,ashwini.vaishnav@gmail.com,moeitoffice@gmail.com,vsomannavijayanagara@gmail.com,ravneetbittu@gmail.com,connect@mygov.nic.in,ravindrachavan.mla@gmail.com,narayanrane52@gmail.com,narayan.rane@sansad.nic.in,speakerrsn1@gmail.com,waikarravindra@gmail.com,secy.rb-mh@nic.in,pacollsin@gmail.com,home_transport5@maharashtra.gov.in,acs.transport@maharashtra.gov.in,officeofmr@gov.in,secy-road@nic.in,Collector.ratnagiri@maharashtra.gov.in,Collector.raigad@maharashtra.gov.in,officeofmr@gov.in,mosr@rb.railnet.gov.in,mos-railways@gov.in";
    var cc = "kesarkardeepak@gmail.com,udaysamant11@gmail.com,niranjanvdavkhare@gmail.com,secy.cmd@krcl.co.in,secgm@cr.railnet.gov.in,rrmrn@krcl.co.in,cpro@cr.railnet.gov.in,nnr23682@gmail.com,shekhargnikam@gmail.com,mla@rajupatilmns.com,rajan825@gmail.com,vnaik95@gmail.com,sureshgmhatre333@gmail.com";
    var bcc = "girishrane007@gmail.com,swaditerminus@gmail.com";
    var subject = "कोकणातील दळणवळणाचा गाभा असलेल्या महामार्ग आणि रेल्वे सुविधांबाबत तसेच कोकणकरांच्या पायाभुत सुविधाच्या संवैधानिक हक्कांसाठी  जनआंदोलन";
    var body = `प्रति,

    श्री एकनाथ शिंदे साहेब,
    मुख्यमंत्री,
    महाराष्ट्र राज्य.
    
    श्री नितीन गडकरी साहेब,
    केंद्रीय परिवहन मंत्री,
    
    श्री अश्विनी वैष्णव साहेब,
    केंद्रीय रेल्वे मंत्री
    
    विषय - कोकणातील दळणवळणाचा गाभा असलेल्या महामार्ग आणि रेल्वे सुविधांबाबत तसेच कोकणकरांच्या पायाभुत सुविधाच्या संवैधानिक हक्कांसाठी जनआंदोलन
    
    महोदय,
    
    आम्ही, कोकणप्रातांतील त्रस्त कोकणकर आपले या मेल मोहिमेद्वारे कोकणातील मुलभुत गरजांबाबत लक्ष वेधू इच्छितो की कोकण ही परशुरामाची पद पावणाने स्पर्शित झालेली देवभूमी असून येथील पर्यटन स्थळे ही जगप्रसिद्ध आहे. आपल्याला माहीत आहे की सिंधुदुर्ग जिल्हा हा देशातील पहिला पर्यटन जिल्हा जाहीर होऊन २५ वर्षाचा काळ लोटला पण पर्यटनाला हवी तशी उभारी किंवा पायाभुत सुविधा आजतागायत मिळाली नाही. याचे कारण पर्यटनासाठी गाभा असलेल्या सर्वोत्तम दळणवळणाची सुविधा.
    
    कोकणची जीवन वहिनी व शास्वत विकासासाठी आवश्यक असलेल्या मुंबई गोवा महामार्ग आणि कोकण रेल्वे.
    मुंबई गोवा महामार्ग हा गेली १७ वर्ष रखडला, गणेशोत्सव तोंडावर आला असूनही महामार्ग पूर्ण खड्ड्यात गेला आहे.
    कोकण रेल्वे हे महामंडळ असल्याने त्याला अर्थसंकल्पीय तरतूद ही होत नाही व त्यामुळे प्रवासी सुविधांचाही कमतरता आहे गाड्या व तिकिट कोटा मिळत नाही सबब ह्या महामंडळाचे भारतीय रेल्वेत विलीनीकरण करावे,
    निधी अभावी रखडलेले सावंतवाडी येथील नियोजित रेल्वे टर्मिनस गेली भूमिपूजन होऊन ९ वर्ष रखडले. तेही पूर्णत्वास नेऊन त्याचा तेथून मुंबईसाठी कायम नवीन गाड्या चालू कराव्यात.
    
    वरिल मागण्यासांठी गेली २ वर्ष सातत्याने प्रयास व प्रशासनाकडे पाठपुरावा करूनही कोकणकरांच्या हाती काहीच लागले नाही. त्यामुळे आम्ही समस्त कोकणवासी व कोकणवासीयांच्या सलंग्न संघटना १५ ऑगस्ट २०२४ स्वातंत्र्याचा ७८ व्या सोहळ्यादिवशी *मुंबई गोवा महामार्ग जन आक्रोश समिती यांचे माणगाव येथील आमरण उपोषण, कोकण रेल्वे प्रवासी संघटना-सावंतवाडी यांचे सावंतवाडी रेल्वे स्थानक येथील घंटानाद आंदोलन, आणि कोकण रेल्वे संघर्ष आणि समन्वय समिती सिंधुदुर्ग यांचे जिल्हाधिकारी कार्यालय सिंधुदुर्ग येथे होणारे लाक्षणिक उपोषणाला पाठिंबा देत आहोत.
    तरी आपण कोकणच्या शास्वत विकास व मुलभुत सोयीसुविंधासाठी कार्यरत होत कोकणकरांना न्याय द्याल हि अपेक्षा!
    
    आमच्या मागण्या खालील प्रमाणे,
    (कृपया तिन्ही PDF फाईल पहाव्यात.)
    
    1. मुंबई गोवा महामार्ग जनआक्रोश समिती: https://drive.google.com/file/d/1Knc4Cyl80u-fsPLThW38nBkfmm1KGunp/view?usp=sharing
    2. कोकण रेल्वे समन्वय व संघर्ष समिती-सिंधुदुर्ग: https://drive.google.com/file/d/1WqGZ-QzUWx_tR6ZBDaYPVaiCRoUPyOw8/view?usp=sharing
    3. कोकण रेल्वे प्रवासी संघटना, सावंतवाडी: https://drive.google.com/file/d/1Zp0Rduftyx9B2AOmht7UR7bxNxSfQ0XB/view?usp=sharing
    
    आपले विनीत,
    
    कोकणप्रांतातील त्रस्त कोकणकर
    (मुंबई ठाणे पालघर रायगड रत्नागिरी सिंधुदुर्ग)`;
      
      var emailLink = "mailto:" + encodeURIComponent(recipients) +
                      "?cc=" + encodeURIComponent(cc) +
                      "&bcc=" + encodeURIComponent(bcc) +
                      "&subject=" + encodeURIComponent(subject) +
                      "&body=" + encodeURIComponent(body);
  
      // Create temporary anchor element
      var tempLink = document.createElement('a');
      tempLink.setAttribute('href', emailLink);
  
      // Append anchor element to body
      document.body.appendChild(tempLink);
  
      // Trigger the email client
      tempLink.click();
  
      // Clean up
      document.body.removeChild(tempLink);  
  });

   //extra  Email Button
   const extraemailbutton = document.querySelector('.extra-email-button');
   extraemailbutton.addEventListener('click', function (event) {
     event.preventDefault();
   });

/*gallery section */

    const galleryGrid = document.getElementById('gallery-grid');
    const newsGrid = document.getElementById('news-grid');
    
    const galleryFolder = 'images/gallery/';
    const galleryImages = [];
    for (let i = 1; i <= 30; i++) {
        galleryImages.push(`FB_${i}.jpg`);
    }

    galleryImages.forEach(image => {
        const imgElement = document.createElement('a');
        imgElement.href = `${galleryFolder}${image}`;
        imgElement.className = 'gallery-item';
        
        const imageTag = document.createElement('img');
        imageTag.src = `${galleryFolder}${image}`;
        imageTag.alt = 'Gallery Image';
        imageTag.className = 'gallery-image';

        // Error handling for image loading
        imageTag.onerror = function() {
            this.src = 'images/placeholder.jpg'; // Fallback image
            this.alt = 'Image not available'; // Fallback alt text
        };

        imgElement.appendChild(imageTag);
        galleryGrid.appendChild(imgElement);
    });

    // Initialize Magnific Popup for gallery
    $('.gallery-item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    const newsFolder = 'images/news/';
    const newsImages = [];
    for (let i = 1; i <= 30; i++) {
        newsImages.push(`NW_${i}.jpg`);
    }

    newsImages.forEach(image => {
        const articleElement = document.createElement('a');
        articleElement.href = `${newsFolder}${image}`;
        articleElement.className = 'news-item';
        
        const imgElement = document.createElement('img');
        imgElement.src = `${newsFolder}${image}`;
        imgElement.alt = 'News Article';
        imgElement.className = 'news-image';

        // Error handling for image loading
        imgElement.onerror = function() {
            this.src = 'images/placeholder.jpg'; // Fallback image
            this.alt = 'Image not available'; // Fallback alt text
        };
        
        articleElement.appendChild(imgElement);
        newsGrid.appendChild(articleElement);
    });

    // Initialize Magnific Popup for news
    $('.news-item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

// representive grid 

const representatives = [
    { name: "ॲड. संदीप निंबाळकर", position: "अध्यक्ष", image: "images/representative/representative.png" },
    { name: "श्री. सागर तळवडेकर", position: "उपाध्यक्ष , सोशल मिडिया हेड", image: "images/representative/representative.png" },
    { name: "श्री. सागर नाणोसकर", position: "उपाध्यक्ष", image: "images/representative/representative.png" },
    { name: "श्री.विनायक गांवस", position: "उपाध्यक्ष", image: "images/representative/representative.png" },
    { name: "श्री. सिद्धेश सावंत", position: "उपाध्यक्ष", image: "images/representative/representative.png" },
    { name: "अॅड. श्री. नंदन वेंगुर्लेकर", position: "उपाध्यक्ष", image: "images/representative/representative.png" },
    { name: "अॅड. श्री. नकुल पार्सेकर", position: "उपाध्यक्ष", image: "images/representative/representative.png" },
    { name: "श्री. जगदीश मांजरेकर", position: "उपाध्यक्ष", image: "images/representative/representative.png" },
    { name: "श्री. रविंद्र ओगले", position: "खजिनदार", image: "images/representative/representative.png" },
    { name: "श्री. विहंग गोठोस्कर", position: "सहखजिनदार", image: "images/representative/representative.png" },
    { name: "मिहिर मठकर", position: "सचिव", image: "images/representative/representative.png" },
    { name: "अॅड. सी. सापली दुभाषी", position: "सहसचिव", image: "images/representative/representative.png" },
    { name: "श्री. भुषण बांदिवडेकर", position: "तालुका / ग्राम संपर्क , सोशल मिडिया हेड", image: "images/representative/representative.png" },
    { name: "सी. अर्चना घारे-परब", position: "महिला संघटना अध्यक्षा", image: "images/representative/representative.png" },
    { name: "श्री. बवन साळगावकर", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "श्री. भाई देऊलकर", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "श्री. अभिमन्यू लोंढे", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "श्री. रविंद्र बोंद्रे", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "श्री. समिर वंजारी", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "श्री. महेश परूळेकर", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "श्री. रफिक मेमन", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "श्री. बाळासाहेब बोर्डेकर", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "श्री. शेखर पाडगांवकर", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "श्री. पुंडलिक दळवी", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "श्री. सुभाष शिरसाट", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "श्री. हिदायतुल्ला खान", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "श्री. बाबल वाडकर", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "श्री. देव्या सुर्याजी", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "श्री. अमोल टेंबकर", position: "प्रेस मिडिया हेड", image: "images/representative/representative.png" },
    { name: "श्री. समिर घोंगे", position: "सोशल मिडिया हेड", image: "images/representative/representative.png" },
    { name: "श्री. चंद्रकांत बांदेकर", position: "शिष्टमंडळ अध्यक्ष", image: "images/representative/representative.png" },
    { name: "श्री. तेजस पोयेकर", position: "शिष्टमंडळ उपाध्यक्ष", image: "images/representative/representative.png" },
    { name: "श्री. केशव नाईक", position: "शिष्टमंडळ उपाध्यक्ष", image: "images/representative/representative.png" }
];

const representativeGrid = document.querySelector('.representative-grid');

representatives.forEach(representative => {
    const card = document.createElement('div');
    card.classList.add('representative-card');
    
    card.innerHTML = `
        <img src="${representative.image}" alt="${representative.name}" class="representative-image">
        <h3>${representative.name}</h3>
        <p>${representative.position}</p>
    `;
    
    representativeGrid.appendChild(card);
});

