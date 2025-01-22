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


const subjects = [
    "सावंतवाडी टर्मिनसचे उद्घाटन आपल्या हस्ते व्हावे ही कोकणवासियांची भावना",
    "कोकणवासीयांची विनंती: सावंतवाडी टर्मिनसचे उद्घाटन आपल्या हस्ते करा",
    "आपल्या हस्ते सावंतवाडी टर्मिनसचे उद्घाटन होणे गरजेचे",
    "सावंतवाडी टर्मिनस उद्घाटनाबाबत आपली उपस्थिती हवी",
    "कोकणवासीयांचे स्वप्न पूर्ण करा: सावंतवाडी टर्मिनसचे उद्घाटन",
    "सावंतवाडी टर्मिनसचे काम पूर्ण होऊन उद्घाटन आपल्या हस्ते व्हावे",
    "कोकणवासीयांची इच्छा: सावंतवाडी टर्मिनसचे उद्घाटन आपल्या उपस्थितीत व्हावे",
    "सावंतवाडी टर्मिनसच्या उद्घाटनासाठी कोकणवासीय आपली वाट पाहत आहेत",
    "आपण केलेल्या शिलान्यासाचे फळ सावंतवाडी टर्मिनसचे उद्घाटन व्हावे",
    "सावंतवाडी टर्मिनस: कोकणवासीयांसाठी एक ऐतिहासिक क्षण",
    "टर्मिनसचे उद्घाटन आपल्या हस्ते होणे कोकणवासीयांसाठी अभिमानाचा क्षण",
    "कोकणवासीयांना दिलेला शब्द पूर्ण करा: सावंतवाडी टर्मिनस",
    "सावंतवाडी टर्मिनसचे उद्घाटन आणि कोकणवासीयांचा आनंद",
    "आपल्या हस्ते सावंतवाडी टर्मिनसचे उद्घाटन करून इतिहास रचा",
    "सावंतवाडी टर्मिनसच्या उद्घाटनासाठी आपल्या मार्गदर्शनाची गरज",
];

  // Email Button
const emailbutton = document.querySelector('.email-button');
emailbutton.addEventListener('click', function (event) {

    console.log("email section");

    var recipients = "officeofmr@gov.in,cm@maharashtra.gov.in,dcm@maharashtra.gov.in,dycm@maharashtra.gov.in,bagadeharibhau@gmail.com,Chairmanmls5@gmail.com,ministerwssd@gmail.com,cs@maharashtra.gov.in,psec.wssd@maharashtra.gov.in,acs.transport@maharashtra.gov.in,divcom.konkan@maharashtra.gov.in,collector.sindhudurg@maharashtra.gov.in,dycommr.enf1@gmail.com,cbawankule.min@gmail.com,cmpro@maharashtra.gov.in,prakash.sabale@nic.in,rdc.sindhudurg@maharashtra.gov.in,dyceosin@yahoo.com,ceozp.sindhudurg@maharashtra.gov.in,ambadasdanve79@gmail.com,press.secy@rb.nic.in,us.ca4@gov.in,edpg@rb.railnet.gov.in";
    var cc = "office.mosrs@gov.in,aneesh.hegde@gov.in,narayanrane52@gmail.com,shripad.naik52@gov.in,aniket.tat@gmail.com,manishakayande@rediffmaill.com,neeilamgorhe@gmail.com,asmita.jagruti@gmail.com,uddhavthackeray@gmail.com,anildattatray@gmail.com,aamshyadada@gmail.com,misunilshinde@gmail.com,BHAIGIRKAR16@gmail.com,niranjandavkhare@gmail.com,pydmlaoffice@gmail.com,kolimahasangh@yahoo.com,dnyaneshwar.mhatre68@gmail.com,jayantpwp@gmail.com,Yogesh_kadam1986@outlook.com,mlamaheshchoughule@gmail.com,bjpofficemalad@yahoo.com,speakerrsn1@gmail.com,ravishethpatil158@gmail.com,officeofmlaatul@gmail.com,mandataimhatre@gmail.com,nnr23682@gmail.com,bharatilavekar@gmail.com,parag@maninfra.com,ashish.shelar@yahoo.com,ameetsatam@yahoo.com,aadtti7@yahoo.co.in,sbhusara41@gmail.com,nawabmalikmla@gmail.com,gaikwad.varsha3@gmail.com,aminpatel186@gmail.com,abuasimazmi@hotmail.com,raissp132@gmail.com,mla@rajupatilmns.com,geetajainoffice@gmail.com,secy1-mls@mah.gov.in,shekhargnikam@gmail.com,sandipanbhumare@gmail.com,appabarne@gmail.com,nageshpatil4545@gmail.com,shahuchhatrapatikop@gmail.com,email@nitingadkari.org,nitin.gadkari@nic.in,jadhavprataprao25@gmail.com,rakshataikhadse@gmail.com,dramolkolhe80@gmail.com,dhairyasheelmane@gmail.com,sureshmhatre1701@gmail.com,murlidhar.mohol@gmail.com,sanjaydinapatil@gmail.com,hemantsavara@yahoo.co.in,officeofdrshrikantshinde.delhi@gmail.com,supriyassule@gmail.com,waikarravindra@gmail.com,mpmilind.deora@sansad.nic.in,dhairyashil.mprs@sansad.nic.in,pawars@sansad.nic.in,s.raut@sansad.nic.in,ambadasdanve79@gmail.com,anilkadam7711@gmail.com,vnaik95@gmail.com,press.secy@rb.nic.in,shivsenabhavan@gmail.com,Bjpmaha@gmail.com,vinodtawde@rediffmail.com,vinodstawde@gmail.com,spprabhu1@gmail.com,secretary@sureshprabhu.com,infokokanclub@gmail.com,k.gautam@nic.in,general@krcl.co.in,ibnlokmatsport@gmail.com ,mymahanagarweb@gmail.com,middaysocial@gmail.com , pratikriya@expressindia.com ,admin@freepressjournal.in ";    var bcc = "akhandkokanpravasiseva@gmail.com,swaditerminus@gmail.com";
    
    const randomIndex = Math.floor(Math.random() * subjects.length);
    const subject = subjects[randomIndex];
    
    var body = `प्रति,
श्री देवेंद्र सरिता गंगाधरराव फडणवीस यांसी,
मुख्यमंत्री महाराष्ट्र राज्य.

विषय : सावंतवाडी टर्मिनसचे उद्घाटन आपल्या हस्ते व्हावे ही आम्हा सर्वांची भावना.

आदरणीय देवेंद्रजी,


स.न.वी.वी.

आम्ही तमाम कोकणवासीय आपणास आठवण आणि विनंती करू इच्छितो की सन २०१४ मध्ये आपण महाराष्ट्राचे मुख्यमंत्री म्हणून विराजमान झालात तेव्हा. तत्कालीन रेल्वेमंत्री मा.श्री. सुरेश प्रभू व तत्कालीन पालकमंत्री मा.श्री.दिपक केसरकर तसेच अनेक मान्यवरांच्या उपस्थितीत २७ जून २०१५ रोजी सावंतवाडी टर्मिनसचा शिलान्यास केला होतात.
कोकणी जनतेला खूप आनंद आणि तुमचा अभिमान वाटावा असा हा दिवस होता,  मुंबईस्थित कोकणी माणसे सुखावली होती, परंतु आपल्याला सांगू इच्छितो की आजतागायत या सावंतवाडी टर्मिनसचे काम पूर्ण झालेले नाही.
आपण आपल्या टर्मिनस भूमिपूजना वेळेच्या भाषणात ह्या टर्मिनस चे उद्घाटनाला मी येणार आणि आपल्याच हस्तेच या टर्मिनस चे उद्घाटन होईल असे संबोधिले होते, ते शब्द आज ही मला आठवतात.

देवेंद्रजी, काळ लोटला.. बघता बघता २०२५ सालात आपण सर्वांनी पदार्पण केले आणि तो क्षण पुन्हा आला, आपण पुन्हा या राज्याचे बहुमताने मुख्यमंत्री झालात.

पुन्हा त्या टर्मिनसच्या भूमिपूजनाचा सोहळा माझ्या डोळ्यांसमोर उभा ठाकला, पुन्हा एक हळूच ती आशा जागृत झाली, मनाला सावंतवाडी टर्मिनसचे वेध पुन्हा लागले.

देवा भाऊ, आपण शिलान्यास केलेले सावंतवाडी टर्मिनसचा कोनशिलाला आपली वाट बघतोय, त्या कोनशिलेला आपण न्याय द्याल का..?
टर्मिनस प्रेमी जनता आपली जिवाच्या आकांताने आपल्याला साद घालत आहे, आपण त्यांना द्याल का साथ..?

भाऊ, कोकण रेल्वे महामंडळ या सावंतवाडी टर्मिनसला पूर्ण विसरून गेलाय, म्हणतोय टर्मिनस ला आलेला निधी माघारी गेला म्हणून.
परंतु देवेंद्र जी, आता कोकणी जनता या महामंडळाला नारळ देण्यावर ठाम झालाय, आपण कराल का मदत..? ह्या रेल्वे महामंडळातील महाराष्ट्र राज्याचा हिस्सा द्याल का केंद्राला..? हे महामंडळ होईल का भारतीय रेल्वे चा भाग..?

आपली दूरदृष्टी नेते अशी ओळख आहे, समृध्दीने ते दाखवून ही दिलेय. तशीच जबाबदारी आपण आमच्या छोट्याश्या सावंतवाडी टर्मिनसची देखील घ्यावी अशी आम्हा कोकणी जनतेची इच्छा आपण कराल का पूर्ण.?
या टर्मिनसची अपूर्ण कामे पूर्ण होऊन सदर टर्मिनसचे उद्घाटन हे आपल्या हस्ते व्हावे कदाचित हेच त्या विधात्याला मान्य असावे.
 
आपण सावंतवाडी टर्मिनसला प्राध्यापक मधु दंडवते यांचे नाव द्याल यात काही दुमत नक्कीच नाही.
कोकण रेल्वे चे शिल्पकार म्हणून त्यांना योग्य तो सन्मान आपण नाकी द्याला.


एक ध्येय वेडा सेवक,
सावंतवाडी टर्मिनस प्रेमी.`;


    var emailLink = "mailto:" + encodeURIComponent(recipients) +
                    "?cc=" + encodeURIComponent(cc) +
                    "&bcc=" + encodeURIComponent(bcc) +
                    "&subject=" + encodeURIComponent(subject) +
                    "&body=" + encodeURIComponent(body);

    // Construct the mailto link
    emailLink = `mailto:${encodeURIComponent(recipients)}?cc=${encodeURIComponent(cc)}&bcc=${encodeURIComponent(bcc)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Debugging: Log the link
    console.log("CC:", cc);
    console.log("Generated email link:", emailLink);


  // Create and click the temporary link
  try {
    const tempLink = document.createElement('a');
    tempLink.href = emailLink;  
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    console.log("Email client triggered");
} catch (error) {
    console.error("Failed to trigger email client:", error);
}
    // Clean up
    document.body.removeChild(tempLink);
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
// });

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
});