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
    "कोकण रेल्वेचे भारतीय रेल्वेत विलीनीकरण करण्यास अधिवेशनात तारांकित प्रश्न उपस्थित करणे बाबत.",
    "सावंतवाडी टर्मिनस संदर्भात राज्य शासनाची भूमिका.",
    "सावंतवाडी टर्मिनस संदर्भात तारांकित प्रश्न उपस्थित करणे बाबत.",
    "कोकण रेल्वे संदर्भात अधिवेशनात आवाज उठवणे बाबत.",
    "कोकण रेल्वेच्या विलीनीकरणावर महाराष्ट्र शासनाची अधिकृत भूमिका स्पष्ट करावी.",
    "कोकण रेल्वे विलीनीकरणासंदर्भात राज्य शासनाने केंद्र सरकारला दिलेले पत्र आणि उत्तराची माहिती द्यावी.",
    "कोकण रेल्वेच्या पायाभूत सुविधा विकासासाठी महाराष्ट्र सरकारने कोणती तरतूद केली आहे?",
    "सावंतवाडी रेल्वे टर्मिनसच्या नामकरण व विकासासाठी राज्य शासनाने कोणती पावले उचलली आहेत?",
    "कोकण रेल्वेच्या वीर ते मडुरे दुहेरीकरणासाठी राज्य सरकारने निधी उपलब्ध करून दिला आहे का?",
    "कोकण रेल्वेच्या विलीनीकरणाआधी महाराष्ट्र शासनाने आपले समभाग केंद्र सरकारकडे सुपूर्द करावेत का?",
    "कोकण रेल्वेच्या विलीनीकरणासंदर्भात राज्याची भूमिका काय आहे?",
    "कोकण रेल्वे महामंडळाच्या स्वायत्ततेमुळे कोकणला होणाऱ्या वित्तीय नुकसानीबाबत चर्चा आवश्यक आहे.",
    "अमृत भारत स्थानक योजनेंतर्गत कोकण रेल्वे स्थानकांचा समावेश का नाही?",
    "कोकण रेल्वेचे भारतीय रेल्वेत विलीनीकरण लवकरात लवकर करण्यासंदर्भात अधिवेशनात चर्चा करावी."
  ];
  
  

  // Email Button
  const emailbutton = document.querySelector('.email-button');
  emailbutton.addEventListener('click', function (event) {
  
      console.log("email section");
  
      //var recipients = "officeofmr@gov.in,cm@maharashtra.gov.in,dcm@maharashtra.gov.in,dycm@maharashtra.gov.in,bagadeharibhau@gmail.com,Chairmanmls5@gmail.com,ministerwssd@gmail.com,cs@maharashtra.gov.in,psec.wssd@maharashtra.gov.in,acs.transport@maharashtra.gov.in,divcom.konkan@maharashtra.gov.in,collector.sindhudurg@maharashtra.gov.in,dycommr.enf1@gmail.com,cbawankule.min@gmail.com,cmpro@maharashtra.gov.in,prakash.sabale@nic.in,rdc.sindhudurg@maharashtra.gov.in,dyceosin@yahoo.com,ceozp.sindhudurg@maharashtra.gov.in,ambadasdanve79@gmail.com,press.secy@rb.nic.in,us.ca4@gov.in,edpg@rb.railnet.gov.in";
      var recipients = "ncpconnect.mumbai@gmail.com" ;
      //var cc = "office.mosrs@gov.in,aneesh.hegde@gov.in,narayanrane52@gmail.com,shripad.naik52@gov.in,aniket.tat@gmail.com,manishakayande@rediffmaill.com,neeilamgorhe@gmail.com,asmita.jagruti@gmail.com,uddhavthackeray@gmail.com,anildattatray@gmail.com,aamshyadada@gmail.com,misunilshinde@gmail.com,BHAIGIRKAR16@gmail.com,niranjandavkhare@gmail.com,pydmlaoffice@gmail.com,kolimahasangh@yahoo.com,dnyaneshwar.mhatre68@gmail.com,jayantpwp@gmail.com,Yogesh_kadam1986@outlook.com,mlamaheshchoughule@gmail.com,bjpofficemalad@yahoo.com,speakerrsn1@gmail.com,ravishethpatil158@gmail.com,officeofmlaatul@gmail.com,mandataimhatre@gmail.com,nnr23682@gmail.com,bharatilavekar@gmail.com,parag@maninfra.com,ashish.shelar@yahoo.com,ameetsatam@yahoo.com,sbhusara41@gmail.com,nawabmalikmla@gmail.com,gaikwad.varsha3@gmail.com,aminpatel186@gmail.com,abuasimazmi@hotmail.com,raissp132@gmail.com,mla@rajupatilmns.com,geetajainoffice@gmail.com,secy1-mls@mah.gov.in,shekhargnikam@gmail.com,sandipanbhumare@gmail.com,appabarne@gmail.com,nageshpatil4545@gmail.com,shahuchhatrapatikop@gmail.com,email@nitingadkari.org,nitin.gadkari@nic.in,jadhavprataprao25@gmail.com,rakshataikhadse@gmail.com,dramolkolhe80@gmail.com,dhairyasheelmane@gmail.com,sureshmhatre1701@gmail.com,murlidhar.mohol@gmail.com,sanjaydinapatil@gmail.com,hemantsavara@yahoo.co.in,officeofdrshrikantshinde.delhi@gmail.com,supriyassule@gmail.com,waikarravindra@gmail.com,mpmilind.deora@sansad.nic.in,dhairyashil.mprs@sansad.nic.in,pawars@sansad.nic.in,s.raut@sansad.nic.in,ambadasdanve79@gmail.com,anilkadam7711@gmail.com,vnaik95@gmail.com,press.secy@rb.nic.in,shivsenabhavan@gmail.com,Bjpmaha@gmail.com,vinodtawde@rediffmail.com,vinodstawde@gmail.com,spprabhu1@gmail.com,secretary@sureshprabhu.com,infokokanclub@gmail.com,k.gautam@nic.in,general@krcl.co.in,ibnlokmatsport@gmail.com ,mymahanagarweb@gmail.com,middaysocial@gmail.com , pratikriya@expressindia.com ,admin@freepressjournal.in ";
      var cc = " jayantrp@gmail.com,rohit.pawar@indialeader.com,rrp@rohitpawar.org,jitendra.awhad@yahoo.com";
      var bcc = "akhandkokanpravasiseva@gmail.com,swaditerminus@gmail.com";
      
      const randomIndex = Math.floor(Math.random() * subjects.length);
      const subject = subjects[randomIndex];
      
      var body = `आदरणीय महोदय,

आपल्या सोशल मीडिया प्लॅटफॉर्म मार्फत मिळालेल्या माहितीनुसार, आम्ही कोकणवासी आमच्या रेल्वे संदर्भातील समस्या आपल्यापर्यंत पोचवत आहोत. आपण या अधिवेशनात यावर सरकारचे लक्ष वेधावे ही विनंती.

महाराष्ट्र शासनाने पुढील प्रश्नांची उत्तरे देणे आवश्यक आहे, ते आपण सभागृहात विचारावेत, ही नम्र विनंती:
१. कोकण रेल्वेच्या विलीनीकरणाबाबत राज्य शासनाला कोणते पत्र प्राप्त झाले आहे का? असल्यास, त्याला काय उत्तर दिले?
२. कोकण रेल्वे विलीनीकरणाबाबत महाराष्ट्राची भूमिका काय?
३. विलीनीकरणाला विरोध असल्यास महाराष्ट्राने कोकण रेल्वेच्या वीर ते मडुरे दुहेरीकरणासाठी, परिपूर्ण सावंतवाडी टर्मिनससाठी व पायाभूत सुविधा विकासासाठी किमान १० हजार कोटींचा निधी देण्याची शासनाची तयारी आहे का?
४. विलीनीकरणासाठी इतर राज्ये तयार नसल्यास महाराष्ट्राने आपले समभाग केंद्राच्या स्वाधीन करून रोहा ते मडूरे मार्ग केंद्रीय रेल्वे मंत्रालयाला हस्तांतरित करावा.
५. सावंतवाडी रेल्वे टर्मिनसच्या नामकरण तथा विकासासाठी राज्यसरकार तर्फे काय तरतूद करण्यात आली आहे ?


तांत्रिक मुद्दे विशद करणारी 

मुंबई आणि मंगळुरु ही दोन बंदरे जोडण्याच्या दृष्टीने रोहा ते मंगळुरु दरम्यान नवीन ब्रॉडगेज मार्ग बांधण्यासाठी केंद्रीय रेल्वे मंत्रालय, महाराष्ट्र, गोवा, कर्नाटक आणि केरळ राज्य शासनांच्या संयुक्त विद्यमाने कोकण रेल्वे महामंडळाची स्थापना १९९० मध्ये करण्यात आली. १५ वर्षांनंतर किंवा सर्व देणी देऊन झाल्यावर यांपैकी जे आधी होईल तेव्हा हे महामंडळ भारतीय रेल्वेत विलीन होणे अपेक्षित होते. त्यानुसार वर्ष २००८-०९ मध्ये विलीनीकरण होण्याची शक्यता असताना केंद्र शासनाने सर्व देणी देऊन झाल्यावरही हे महामंडळ स्वतंत्रच राहील असे प्रथम आर्थिक पुनर्रचना प्रस्तावात ठरवले.

आदरणीय पंतप्रधान श्री. नरेंद्र मोदी यांच्या नेतृत्वाखाली २०१४ पासून भारतीय रेल्वेत आधुनिकीकरण व क्रांती सुरु असताना कोकण मात्र त्यापासून वंचित आहे. त्यामुळे आदरणीय पंतप्रधानांच्या प्रतिमेला धक्का बसतो. कोकण रेल्वे भारतीय रेल्वेचा भाग नसून स्वतंत्र महामंडळ असल्यामुळे हे घडते. केंद्रीय अर्थसंकल्पातून कोकण रेल्वेला निधी मिळत नाही. त्यांना पायाभूत सुविधांच्या सुधारणेसाठी लागणाऱ्या निधीकरिता राज्य शासनाकडून मिळालेला निधी व बाहेरील कर्जांवर अवलंबून राहावे लागते.

संपूर्ण देशात केंद्रीय रेल्वे मंत्रालयाच्या अर्थसंकल्पातून रेल्वे विकास प्रकल्प सुरु असताना केवळ स्वतंत्र महामंडळ असल्यामुळे कोकणाला त्याचा लाभ न देणे अन्यायकारक आहे. ६ ऑगस्ट, २०२३ ला आदरणीय पंतप्रधान श्री. नरेंद्र मोदी यांनी उदघाटन केलेल्या अमृत भारत स्थानक योजनेत कोकण रेल्वेच्या रत्नागिरी विभागातील (म्हणजेच महाराष्ट्रातील) एकाही स्थानकाचा समावेश नाही.

कोकण रेल्वे महामंडळाचे भारतीय रेल्वेत विलीनीकरण करण्याआधी ही कंपनी १००% मालकी हक्कांसहित केंद्र शासनाच्या अखत्यारित येणे आवश्यक आहे. त्यासाठी संबंधित राज्य शासनांनी त्यांचे समभाग केंद्रीय रेल्वे मंत्रालयाच्या स्वाधीन केले पाहिजेत असे खासदार श्री. कोटा श्रीनिवास पुजारी व खासदार श्री. धैर्यशील पाटील यांनी संसदेत विचारलेल्या प्रशांत उत्तर देताना केंद्रीय रेल्वे मंत्री श्री. अश्विनी वैष्णव यांनी सांगितले.

म्हणून, कोकण रेल्वेचे भारतीय रेल्वेत विलीनीकरण करण्याच्या प्रस्तावाला महाराष्ट्राच्या वतीने मान्यता मिळणे आवश्यक आहे. त्यासाठी गरज पडल्यास महाराष्ट्राच्या ताब्यात आता असलेले ३९६.५४२५ कोटी रुपयांचे समभाग कोणत्याही मोबदल्याची अपेक्षा न ठेवता केंद्रीय रेल्वे मंत्रालयाला सुपूर्द करावेत. ते केल्यानंतर कोकण रेल्वे केंद्र शासनाच्या ताब्यातील सार्वजनिक क्षेत्रातील उपक्रम न राहता ताबडतोब भारतीय रेल्वेत विलीन केले जाईल याबाबत केंद्रीय रेल्वे मंत्रालयाकडून लेखी हमी घ्यावी.

तरी, आपण याबाबतीत येत्या अधिवेशनात आवाज उठवावा ही नम्र विनंती.`;
  
  


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