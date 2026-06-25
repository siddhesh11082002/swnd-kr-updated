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

// Preload ALL images in the array for a smooth slideshow
imagePaths.forEach(preloadImage);

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
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfmQHHjx6Icw0Qja1aa4zBmD9UIYDTmEm9H0cYzBz6VFkFnRA/viewform?usp=sf_link', '_blank'); 
});
const subjects = [
    "सावंतवाडी रेल्वे टर्मिनस (प्रस्तावित लोकमान्य मधु दंडवते रेल्वे टर्मिनस) चे प्रलंबित काम व नवीन कोचिंग केअर कॉम्प्लेक्स मंजूर करणे बाबत.",
    "सावंतवाडी रेल्वे टर्मिनसचा अमृत भारत स्थानक योजनेत समावेश करणे बाबत.",
    "सावंतवाडी टर्मिनस प्रकल्पाची सद्यस्थिती व आंतरविभागीय समन्वयाअभावी प्रकल्पाला येत असलेला विलंब बाबत.",
    "सावंतवाडी टर्मिनसला 'लोकमान्य मधु दंडवते टर्मिनस' नाव देण्याच्या राज्य शासनाच्या निर्णयाची अंमलबजावणी करणे बाबत.",
    "सावंतवाडी टर्मिनसच्या दुसऱ्या टप्प्याची पूर्तता व अतिरिक्त रेल्वे रुळ, फलाट, ROB मंजूर करणे बाबत.",
    "सावंतवाडी स्थानकावर लांब पल्ल्याच्या गाड्यांना थांबा देण्याबाबत (मंगळुरू, मडगाव, गोवा, एर्नाकुलम, तिरुवनंतपुरम एक्सप्रेस).",
    "मुंबई-सावंतवाडी, वसई-सावंतवाडी, पुणे-कल्याण-सावंतवाडी, नांदेड-सावंतवाडी, मनमाड-सावंतवाडी या नवीन गाड्यांचे नियोजन करणे बाबत.",
    "सावंतवाडी टर्मिनस प्रकल्पाला राज्याचा 'एकात्मिक पायाभूत सुविधा प्रकल्प' दर्जा व MITRA योजनेत समावेश करणे बाबत.",
    "सावंतवाडी स्थानकावर MTDC व KRCL यांच्यातील रेल हॉटेल (बजेट हॉटेल) प्रकल्पासाठी सामंजस्य करार पूर्ण करणे बाबत.",
    "सावंतवाडी टर्मिनस प्रकल्पासाठी तिलारी आंतरराज्य धरणातून ५.४६ कोटींची पाणीपुरवठा योजना व चांदा ते बांदा, सिंधुरत्न समृद्धी योजनेतील ७.२० कोटींच्या सुविधांची अंमलबजावणी करणे बाबत.",
    "सावंतवाडी टर्मिनस प्रकल्पाला केंद्राच्या 'गती शक्ती' (PMGS-NMP) योजनेत समावेश करणे बाबत.",
    "सावंतवाडी टर्मिनसच्या भूमिपूजनाला ११ वर्षे पूर्ण झाल्यानिमित्त प्रकल्पाला गती देण्यासाठी कालबद्ध कृती आराखडा तयार करणे बाबत.",
    "गणेशोत्सवाच्या पार्श्वभूमीवर सावंतवाडी टर्मिनसला गती देऊन प्रवाशांची गैरसोय टाळण्यासाठी उपाययोजना करणे बाबत.",
    "सावंतवाडी रेल्वे टर्मिनसच्या विकासासाठी केंद्र व राज्य शासनाच्या विभागांनी परस्पर समन्वयाने कार्यवाही करणे बाबत."
];

// Email Button
const emailbutton = document.querySelector('.email-button');
emailbutton.addEventListener('click', function (event) {

    console.log("email section");

var recipients = [
    "Cm@maharashtra.gov.in",
    "cmofficemh@nic.in",
    "dcm@maharashtra.gov.in",
    "dycm@maharashtra.gov.in",
    "mr@rb.railnet.gov.in",
    "crb@rb.railnet.gov.in",
    "narayanrane52@gmail.com",
    "narayan.rane@mpls.sansad.in",
    "nareshmhaske.mp@sansad.nic.in",
    "waikarravindra@gmail.com",
    "cs@maharashtra.gov.in",
    "sec.cm@maharashtra.gov.in",
    "acs.transport@maharashtra.gov.in",
    "divcom.konkan@maharashtra.gov.in",
    "piyush.goyal@gov.in",
    "sunil.tatkare7@gmail.com",
    "sd.patil@mpls.sansad.in",
    "gaikwad.varsha3@gmail.com",
    "shrikant.shinde@sansad.nic.in",
    "ceo-mitra@mah.gov.in",
    "Sagar.kadu@gov.in",
    "officeofmr@gov.in",
    "mosr@rb.railnet.gov.in",
    "office.mosrs@gov.in",
    "secy.rb-mh@nic.in",
    "mi@rb.railnet.gov.in",
    "MD@maharashtratourism.gov.in",
    "anil.desai@sansad.nic.in",
    "niranjanvdavkhare@gmail.com",
    "psjathar03@gmail.com",
    "ashish.shelar@yahoo.com",
    "kesarkardeepak@gmail.com",
    "nnr23682@gmail.com",
    "Cmd@krcl.co.in",
    "cpro@krcl.co.in",
    "collector.sindhudurg@maharashtra.gov.in",
    "Sulbhagaikwad142@gmail.com",
    "hemantsavara5@gmail.com",
    "Snehadubepandit.jansampark@gmail.com",
    "sanjaypotnis1@gmail.com",
    "anild0205@gmail.com",
    "amdarmaheshsawant@gmail.com",
    "anantbnaroffice@gmail.com",
    "mlarajannaik@gmail.com",
    "ravindrachavan.mla@gmail.com",
    "mlakumarailani141@gmail.com",
    "sureshmhatre1701@gmail.com",
    "mp.medha@sansad.nic.in",
    "Medhakulkarnibjp@gmail.com",
    "shrikantshinde87@yahoo.in",
    "supriyassule@gmail.com",
    "spofficemail@yahoo.com",
    "advanilparab.office@gmail.com",
    "sanjay_upadhyay@outlook.com",
    "info@ravindraphatak.com",
    "mipravindarekar@gmail.com",
    "arvindsawantg@gmail.com",
    "ADV.MADHAVI@gmail.com",
    "milind.k.narvekar@gmail.com",
    "rautsanjay61@gmail.com",
    "min.transport@maharashtra.gov.in",
    "officeofmlaatul@gmail.com",
    "reachnileshrane@gmail.com"
].join(", ");

    var cc = "us-public@pmo.gov.in, edpsu@rb.railnet.gov.in, edpgmr@rb.railnet.gov.in, edpg@rb.railnet.gov.in, general@krcl.co.in";

    var bcc = "swaditerminus@gmail.com>";

    const randomIndex = Math.floor(Math.random() * subjects.length);
    const subject = subjects[randomIndex];

    var body = `प्रति,माननीय मुख्यमंत्री, महाराष्ट्र राज्य.माननीय रेल्वे मंत्री, भारत सरकार.माननीय खासदार, आमदार (कोकण विभाग).माननीय प्रधान सचिव, महाराष्ट्र राज्य.माननीय व्यवस्थापक, रेल्वे बोर्ड, भारत सरकार.माननीय व्यवस्थापकीय संचालक, कोकण रेल्वे महामंडळ.माननीय व्यवस्थापकीय संचालक, महाराष्ट्र पर्यटन विकास महामंडळ.
        विषय - सावंतवाडी रेल्वे टर्मिनस(प्रस्तावित लोकमान्य मधु दंडवते रेल्वे टर्मिनस) चे प्रलंबित काम, नव्याने कोचिंग केअर कॉम्प्लेक्स मंजूर करणे. तसेच अमृत भारत स्थानक योजनेत' समावेश आणि नवीन गाड्यांच्या मंजुरीबाबत - सविस्तर सूक्ष्मनियोजन व कृती आराखडा. संदर्भ - दिनांक २७ जून २०१५ रोजी सावंतवाडी रेल्वे टर्मिनस प्रकल्पाचा भूमिपूजन सोहळा.आदरणीय महोदय,सस्नेह जयमहाराष्ट्र..! दक्षिण कोकणचे आणि पर्यायाने राज्याचे एक प्रमुख पर्यटन आणिव्यावसायिक प्रवेशद्वार असलेल्या सावंतवाडी रेल्वे स्थानकाचे रूपांतर अत्याधुनिकटर्मिनसमध्ये करण्याची प्रक्रिया गेल्या दशकभरापासून विविध टप्प्यांत सुरू आहे. त्यालाच अनुसरून कोकणासाठी प्रस्तावित या सावंतवाडी रेल्वे टर्मिनसचा भूमिपूजन सोहळ्याला आज ११ वर्षे पूर्ण झाली आहेत.२६ मे २०२६रोजी राज्य मंत्रिमंडळाने या टर्मिनसला कोकण रेल्वेचे शिल्पकार 'लोकमान्य मधूदंडवते' यांचे नाव देण्याचा जो ऐतिहासिक निर्णय घेतला आहे, त्याबद्दलसमस्त कोकणवासीयांच्या वतीने शासनाचे मनःपूर्वक आभार. परंतु, याप्रकल्पाच्या सद्यस्थितीचे तांत्रिक आणि प्रशासकीय विश्लेषण केले असता असेनिदर्शनास येते की, हा प्रकल्प विविध शासकीय विभागांमध्ये विभागला गेला असून,आंतरविभागीयसमन्वयाच्या पूर्ण अभावामुळे आणि लालफितीच्या कारभारामुळे कोट्यवधी रुपयांचा निधीउपलब्ध असूनही प्रकल्पाची गती अत्यंत निराशाजनक आहे. या प्रकल्पाला गती देण्यासाठी आणि संपूर्ण कोकणवासीयांच्यावाढत्या प्रवासी गरजा पूर्ण करण्यासाठी, या संपूर्ण प्रकल्पाचेसूक्ष्म नियोजन (Micro-planning) करून केंद्र सरकार आणि राज्य सरकार यांच्याअखत्यारीत येणाऱ्या कामांचे वर्गीकरण खालीलप्रमाणे करण्यात आले आहे. संबंधितप्रशासकीय विभागांनी आपापल्या जबाबदाऱ्या प्राधान्याने पूर्ण कराव्यात ही विनंती. A. केंद्र शासनाच्या / रेल्वे मंत्रालयाच्या / कोकण रेल्वेच्या अधीन असणारीप्राधान्य कामे (Actionable Points for Central Govt / Ministry ofRailways & KRCL) :- १. सावंतवाडी टर्मिनसच्या दुसऱ्या टप्प्याची (Phase2) पूर्तता करणेतसेच याठिकाणी या टर्मिनस प्रकल्पाची क्षमता वाढवण्यासाठी अतिरिक्त रेल्वे रुळ, फलाट आणि ROB मंजूर करणे.२. या प्रकल्पाचा समावेश केंद्राच्या महत्त्वाकांक्षी 'गती शक्ती'(PMGS-NMP) योजनेत समावेशकरणे.३. सावंतवाडी येथे रेल्वेचे 'कोचिंग केअर कॉम्प्लेक्स'(Coach Care Complex) मंजूर करणे, जेणेकरून मुंबई साठी केवळ कोकण मर्यादित गाड्यासोडण्यात येतील.४. सावंतवाडी स्थानकाचा 'अमृत भारत स्टेशन योजनेत'समावेश करणे.५. मागच्या वर्षी प्रमाणे यंदाच्या गणेशोत्सवात देखील केवळ कोकण मर्यादित गाड्या (मुंबई ते रत्नागिरी / सावंतवाडी) सोडण्याचे नियोजन करणे.६. सावंतवाडी स्थानकावर लांब पल्ल्याच्या गाड्यांना थांबा देण्याबाबत कार्यवाही करणे.A. १२१३३/१२१३४ सीएसएमटी-मंगळुरू एक्सप्रेस (CSMT -MangaloreExpress)B. २२२२९/२२२३० मुंबई-मडगाव वंदे भारत एक्सप्रेस (CSMT -MadgaonVB Express)C. १२४४९/५० गोवा संपर्क क्रांती एक्सप्रेस (GoaSampark Kranti Express)D. २२६५५/५६ एर्नाकुलम - निझामुद्दीन एक्सप्रेस (Ernakulam- Nizamuddin Express)E. २२६५३/५४ तिरुवनंतपुरम - निझामुद्दीन एक्सप्रेस (Thiruvananthapuram- Nizamuddin Express) ७. सावंतवाडी स्थानकाचे नामांतर 'लोकनेते मधु दंडवते टर्मिनस सावंतवाडी ' असे होण्यासाठी महाराष्ट्र राज्य सरकारने पाठवलेल्या प्रस्तावावर कार्यवाही करणे.८. कोकणी जनतेच्या सुलभ आणि सोयीस्कर प्रवासासाठी मुंबई - सावंतवाडी, वसई - सावंतवाडी, पुणे - कल्याण - सावंतवाडी, नांदेड - सावंतवाडी तसेच कुंभमेळ्याच्या पार्श्वभूमीवर मनमाड ते सावंतवाडी आदी गाड्यांचे नियोजन करणे.
B. महाराष्ट्र राज्य शासनाच्या अधीन असणारी प्राधान्य कामे (Actionable Points for State Govt of Maharashtra) :- सावंतवाडी टर्मिनस या प्रकल्पाला राज्याचा 'एकात्मिक पायाभूत सुविधा प्रकल्प' म्हणून अधिकृत दर्जा देणे तसेच हा प्रकल्प मित्रा (MITRA) या राज्य अभिसरणाकडे वर्ग करणे. महाराष्ट्र पर्यटन विकास महामंडळ (MTDC) आणि कोकण रेल्वे महामंडळ यांच्यातील सावंतवाडी स्थानकावर प्रस्तावित रेल हॉटेल (बजेट हॉटेल) प्रकल्पा संदर्भातील सामंजस्य कराराची पूर्तता करणे. सावंतवाडी रेल्वे टर्मिनस प्रकल्पाकरिता अत्यावश्यक असलेल्या तिलारी आंतरराज्य धरणातून ५.४६ कोटींच्या पाणीपुरवठा योजनेला प्रशासकीय मान्यता देण्यात यावी किंवा सदर प्रकल्पाला इतर योजनेतून पाणीपुरवठा करण्यात यावा. सावंतवाडी स्थानकात विविध प्रवासी सुविधांसाठी चांदा ते बांदा योजना' व सिंधुरत्न समृद्धी योजनेच्या अंतर्गत ७.२० कोटींच्या अतिरिक्त सुविधांच्या (माननीय जिल्हाधिकारी,सिंधुदुर्ग यांचे कडे प्रलंबित असलेल्या) प्रस्तावाची अंमलबजावणी करणे. वर नमूद केलेल्या सूक्ष्म नियोजनानुसार, केंद्र आणिराज्य शासनाच्या संबंधित विभागांनी परस्पर समन्वयाने (Inter-departmentalcoordination) कालबद्ध कृती आराखडा तयार करावा आणि वर्षानुवर्षे प्रलंबितअसलेल्या या प्रकल्पाला मूर्त स्वरूप द्यावे, ही नम्र विनंती. येत्या काही महिन्यांवर कोकणवासीयांचा आणि चाकरमान्यांचासर्वात मोठा 'गणेशोत्सव' येऊन ठेपला आहे. या काळात प्रवाशांची होणारीगैरसोय टाळण्यासाठी आणि कोकणच्या विशेषतः सिंधुदुर्ग जिल्ह्याच्या पर्यटनाला चालनादेण्यासाठी आपल्या स्तरावरून या प्रकल्पांना निश्चितच गती मिळेल, असा आम्हालापूर्ण विश्वास आहे. आपण या विषयात तातडीने लक्ष घालून सावंतवाडी रेल्वेटर्मिनसच्या कामाला गती द्यावी ही नम्र विनंती, जेणेकरून लाखो कोकणी जनतेलात्याचा फायदा होईल.

आपले विनीत,`;

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

        // Clean up inside the block where tempLink exists
        document.body.removeChild(tempLink);
        console.log("Email client triggered");
    } catch (error) {
        console.error("Failed to trigger email client:", error);
    }
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