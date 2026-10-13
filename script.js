/* ==========================================================
   FRAGWN — Main JavaScript
   Languages: English, Hindi, Gujarati, Telugu
   Features:
   - Language selection with saved preferences
   - Mobile navigation
   - Service selection
   - Request and professional modals
   - Form validation
   - Google Forms integration
   - Home cleaning and maintenance categories
   ========================================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* ================= CONFIGURATION ================= */

    const GOOGLE_FORM_URL =
        "https://docs.google.com/forms/d/e/1FAIpQLSeKli-kCCy97xU-GU5us0HFtTlPfk-3mDAErvTawRrGYW3YqA/viewform";

    const SERVICES = [
        { id: "electrician", en: "Electrician", hi: "इलेक्ट्रीशियन", gu: "ઇલેક્ટ્રિશિયન", te: "ఎలక్ట్రీషియన్", icon: "⚡" },
        { id: "plumber", en: "Plumber", hi: "प्लंबर", gu: "પ્લમ્બર", te: "ప్లంబర్", icon: "🔧" },
        { id: "ac-repair", en: "AC Repair", hi: "AC मरम्मत", gu: "AC રિપેર", te: "ఏసీ మరమ్మతు", icon: "❄️" },
        { id: "mobile-repair", en: "Mobile Repair", hi: "मोबाइल मरम्मत", gu: "મોબાઇલ રિપેર", te: "మొబైల్ మరమ్మతు", icon: "📱" },
        { id: "laptop-repair", en: "Laptop Repair", hi: "लैपटॉप मरम्मत", gu: "લેપટોપ રિપેર", te: "ల్యాప్‌టాప్ మరమ్మతు", icon: "💻" },
        { id: "home-cleaning", en: "Home Cleaning", hi: "घर की सफाई", gu: "ઘરની સફાઈ", te: "ఇంటి శుభ్రత", icon: "🧹" },
        { id: "photographer", en: "Photographer", hi: "फोटोग्राफर", gu: "ફોટોગ્રાફર", te: "ఫోటోగ్రాఫర్", icon: "📸" },
        { id: "tutor", en: "Tutor", hi: "ट्यूटर", gu: "ટ્યુટર", te: "ట్యూటర్", icon: "📚" },
        { id: "appliance-repair", en: "Appliance Repair", hi: "घरेलू उपकरण मरम्मत", gu: "ઘરેલુ ઉપકરણ રિપેર", te: "గృహోపకరణాల మరమ్మతు", icon: "🧺" },
        { id: "vehicle-service", en: "Vehicle Service", hi: "वाहन सर्विस", gu: "વાહન સર્વિસ", te: "వాహన సర్వీసింగ్", icon: "🚗" },
        { id: "graphic-designer", en: "Graphic Designer", hi: "ग्राफिक डिजाइनर", gu: "ગ્રાફિક ડિઝાઇનર", te: "గ్రాఫిక్ డిజైనర్", icon: "🎨" },
        { id: "video-editor", en: "Video Editor", hi: "वीडियो एडिटर", gu: "વિડિયો એડિટર", te: "వీడియో ఎడిటర్", icon: "🎬" },
        { id: "other", en: "Other Services", hi: "अन्य सेवाएँ", gu: "અન્ય સેવાઓ", te: "ఇతర సేవలు", icon: "➕" }
    ];

    const HOME_SERVICES = [
        { en: "Deep Home Cleaning", hi: "गहरी घरेलू सफाई", gu: "ઘરની ઊંડી સફાઈ", te: "ఇంటిని పూర్తిగా శుభ్రపరచడం" },
        { en: "Bathroom Cleaning", hi: "बाथरूम की सफाई", gu: "બાથરૂમની સફાઈ", te: "బాత్రూమ్ శుభ్రత" },
        { en: "Kitchen Cleaning", hi: "रसोई की सफाई", gu: "રસોડાની સફાઈ", te: "వంటగది శుభ్రత" },
        { en: "Sofa and Carpet Cleaning", hi: "सोफा और कालीन की सफाई", gu: "સોફા અને કાર્પેટની સફાઈ", te: "సోఫా మరియు కార్పెట్ శుభ్రత" },
        { en: "Plumbing Maintenance", hi: "प्लंबिंग रखरखाव", gu: "પ્લમ્બિંગ જાળવણી", te: "ప్లంబింగ్ నిర్వహణ" },
        { en: "Electrical Maintenance", hi: "बिजली संबंधी रखरखाव", gu: "ઇલેક્ટ્રિકલ જાળવણી", te: "విద్యుత్ నిర్వహణ" },
        { en: "AC Maintenance", hi: "AC रखरखाव", gu: "AC જાળવણી", te: "ఏసీ నిర్వహణ" },
        { en: "General Home Repairs", hi: "सामान्य घरेलू मरम्मत", gu: "ઘરની સામાન્ય મરામત", te: "సాధారణ గృహ మరమ్మతులు" }
    ];

    /* ================= TRANSLATIONS ================= */

    const translations = {

        en: {
            nav: {
                home: "Home",
                categories: "Services",
                howitworks: "How it works",
                forpros: "For Professionals",
                about: "About",
                contact: "Contact"
            },

            hero: {
                title: "Every Service You Need. One Trusted Place.",
                subtitle: "Discover local professionals for everyday repairs, home services, and more. Tell us what you need, and let FRAGWN help you get started.",
                ctaPrimary: "Find a Service",
                ctaSecondary: "Become a Professional"
            },

            categories: {
                title: "Our Services",
                intro: "Explore our service categories and find the help you need."
            },

            request: {
                modalTitle: "Request a Service",
                name: "Full Name",
                phone: "Phone Number",
                service: "Service Required",
                location: "Location / Pincode",
                details: "Describe Your Problem",
                submit: "Submit Request",
                note: "You will be redirected to our Google Form to submit your request.",
                success: "Opening the FRAGWN service request form.",
                error: "Please complete all required fields."
            },

            howworks: {
                title: "How It Works",
                step1: {
                    title: "Choose a Service",
                    text: "Choose the service you need."
                },
                step2: {
                    title: "Tell Us What You Need",
                    text: "Enter your location and explain your requirements."
                },
                step3: {
                    title: "Connect With a Professional",
                    text: "Submit your request so we can begin the connection process."
                }
            },

            pros: {
                title: "Grow Your Business With FRAGWN",
                intro: "Connect with potential customers and help people discover your services.",
                join: "Join as a Professional",
                modalTitle: "Professional Registration",
                name: "Full Name",
                phone: "Phone Number",
                service: "Service Category",
                area: "Service Area",
                description: "Professional Description",
                submit: "Submit Registration",
                note: "Registration does not guarantee approval.",
                success: "Opening the registration form.",
                error: "Please complete all required fields."
            },

            future: {
                title: "Home Cleaning and Maintenance",
                intro: "Our planned home services include:"
            },

            about: {
                title: "About FRAGWN",
                mission: "<strong>Our Mission:</strong> To make everyday local services simple, transparent, and trustworthy.",
                what: "<strong>What We Do:</strong> FRAGWN connects customers with local professionals for repairs, cleaning, tutoring, creative work, and more.",
                why: "<strong>Why FRAGWN:</strong> Find the services you need without searching through dozens of different providers.",
                vision: "<strong>Our Vision:</strong> Make finding a reliable local professional as easy as ordering a coffee."
            },

            contact: {
                title: "Contact Us",
                name: "Full Name",
                email: "Email Address",
                message: "Your Message",
                submit: "Send Message",
                error: "Please complete the required fields.",
                emailError: "Please enter a valid email address."
            },

            general: {
                close: "Close",
                selectService: "Select a service",
                required: "This field is required.",
                other: "Other"
            }
        },

        hi: {
            nav: {
                home: "होम",
                categories: "सेवाएँ",
                howitworks: "कैसे काम करता है",
                forpros: "पेशेवरों के लिए",
                about: "हमारे बारे में",
                contact: "संपर्क"
            },

            hero: {
                title: "आपकी हर सेवा, एक भरोसेमंद जगह पर।",
                subtitle: "रोज़मर्रा की मरम्मत और घरेलू सेवाओं के लिए स्थानीय पेशेवर खोजें। अपनी ज़रूरत बताएँ और FRAGWN के साथ शुरुआत करें।",
                ctaPrimary: "सेवा खोजें",
                ctaSecondary: "पेशेवर बनें"
            },

            categories: {
                title: "हमारी सेवाएँ",
                intro: "हमारी सेवाओं को देखें और अपनी ज़रूरत के अनुसार सहायता पाएँ।"
            },

            request: {
                modalTitle: "सेवा का अनुरोध करें",
                name: "पूरा नाम",
                phone: "फ़ोन नंबर",
                service: "आवश्यक सेवा",
                location: "स्थान / पिनकोड",
                details: "अपनी समस्या बताएँ",
                submit: "अनुरोध भेजें",
                note: "अनुरोध जमा करने के लिए आपको हमारे Google फ़ॉर्म पर भेजा जाएगा।",
                success: "FRAGWN का सेवा अनुरोध फ़ॉर्म खोला जा रहा है।",
                error: "कृपया सभी आवश्यक फ़ील्ड भरें।"
            },

            howworks: {
                title: "यह कैसे काम करता है",
                step1: {
                    title: "सेवा चुनें",
                    text: "अपनी ज़रूरत की सेवा चुनें।"
                },
                step2: {
                    title: "अपनी ज़रूरत बताएँ",
                    text: "अपना स्थान और आवश्यकता का विवरण भरें।"
                },
                step3: {
                    title: "पेशेवर से जुड़ें",
                    text: "अपना अनुरोध जमा करें ताकि संपर्क प्रक्रिया शुरू हो सके।"
                }
            },

            pros: {
                title: "FRAGWN के साथ अपना व्यवसाय बढ़ाएँ",
                intro: "संभावित ग्राहकों से जुड़ें और अपनी सेवाओं को अधिक लोगों तक पहुँचाएँ।",
                join: "पेशेवर के रूप में जुड़ें",
                modalTitle: "पेशेवर पंजीकरण",
                name: "पूरा नाम",
                phone: "फ़ोन नंबर",
                service: "सेवा श्रेणी",
                area: "सेवा क्षेत्र",
                description: "पेशेवर विवरण",
                submit: "पंजीकरण भेजें",
                note: "पंजीकरण से स्वीकृति की गारंटी नहीं मिलती।",
                success: "पंजीकरण फ़ॉर्म खोला जा रहा है।",
                error: "कृपया सभी आवश्यक फ़ील्ड भरें।"
            },

            future: {
                title: "घर की सफाई और रखरखाव",
                intro: "हमारी नियोजित घरेलू सेवाओं में शामिल हैं:"
            },

            about: {
                title: "FRAGWN के बारे में",
                mission: "<strong>हमारा मिशन:</strong> रोज़मर्रा की स्थानीय सेवाओं को सरल, पारदर्शी और भरोसेमंद बनाना।",
                what: "<strong>हम क्या करते हैं:</strong> FRAGWN ग्राहकों को मरम्मत, सफाई, ट्यूशन और अन्य सेवाओं के लिए स्थानीय पेशेवरों से जोड़ता है।",
                why: "<strong>FRAGWN क्यों:</strong> अलग-अलग प्रदाताओं को खोजने में समय बचाएँ।",
                vision: "<strong>हमारा दृष्टिकोण:</strong> भरोसेमंद स्थानीय पेशेवर ढूँढना कॉफ़ी ऑर्डर करने जितना आसान बनाना।"
            },

            contact: {
                title: "संपर्क करें",
                name: "पूरा नाम",
                email: "ईमेल पता",
                message: "आपका संदेश",
                submit: "संदेश भेजें",
                error: "कृपया आवश्यक फ़ील्ड भरें।",
                emailError: "कृपया सही ईमेल पता दर्ज करें।"
            },

            general: {
                close: "बंद करें",
                selectService: "सेवा चुनें",
                required: "यह फ़ील्ड आवश्यक है।",
                other: "अन्य"
            }
        },

        gu: {
            nav: {
                home: "હોમ",
                categories: "સેવાઓ",
                howitworks: "કેવી રીતે કાર્ય કરે છે",
                forpros: "પ્રોફેશનલ્સ માટે",
                about: "અમારા વિશે",
                contact: "સંપર્ક"
            },

            hero: {
                title: "તમારી દરેક સેવા, એક વિશ્વસનીય જગ્યાએ.",
                subtitle: "રોજિંદા સમારકામ અને ઘરેલુ સેવાઓ માટે સ્થાનિક પ્રોફેશનલ્સ શોધો. તમારી જરૂરિયાત જણાવો અને FRAGWN સાથે શરૂઆત કરો.",
                ctaPrimary: "સેવા શોધો",
                ctaSecondary: "પ્રોફેશનલ બનો"
            },

            categories: {
                title: "અમારી સેવાઓ",
                intro: "અમારી સેવાઓ જુઓ અને તમારી જરૂરિયાત મુજબ મદદ મેળવો."
            },

            request: {
                modalTitle: "સેવા માટે વિનંતી કરો",
                name: "પૂરું નામ",
                phone: "ફોન નંબર",
                service: "જરૂરી સેવા",
                location: "સ્થાન / પિનકોડ",
                details: "તમારી સમસ્યા જણાવો",
                submit: "વિનંતી મોકલો",
                note: "વિનંતી સબમિટ કરવા માટે તમને અમારા Google Form પર મોકલવામાં આવશે.",
                success: "FRAGWNનું સેવા વિનંતી ફોર્મ ખોલવામાં આવી રહ્યું છે.",
                error: "કૃપા કરીને તમામ જરૂરી વિગતો ભરો."
            },

            howworks: {
                title: "આ કેવી રીતે કાર્ય કરે છે",
                step1: {
                    title: "સેવા પસંદ કરો",
                    text: "તમને જરૂરી સેવા પસંદ કરો."
                },
                step2: {
                    title: "તમારી જરૂરિયાત જણાવો",
                    text: "તમારું સ્થાન અને જરૂરિયાતની વિગતો દાખલ કરો."
                },
                step3: {
                    title: "પ્રોફેશનલ સાથે જોડાઓ",
                    text: "સંપર્ક પ્રક્રિયા શરૂ કરવા માટે તમારી વિનંતી સબમિટ કરો."
                }
            },

            pros: {
                title: "FRAGWN સાથે તમારો વ્યવસાય વધારો",
                intro: "સંભવિત ગ્રાહકો સાથે જોડાઓ અને તમારી સેવાઓ વધુ લોકો સુધી પહોંચાડો.",
                join: "પ્રોફેશનલ તરીકે જોડાઓ",
                modalTitle: "પ્રોફેશનલ નોંધણી",
                name: "પૂરું નામ",
                phone: "ફોન નંબર",
                service: "સેવાની શ્રેણી",
                area: "સેવા વિસ્તાર",
                description: "પ્રોફેશનલ વિગતો",
                submit: "નોંધણી મોકલો",
                note: "નોંધણીથી મંજૂરીની ખાતરી મળતી નથી.",
                success: "નોંધણી ફોર્મ ખોલવામાં આવી રહ્યું છે.",
                error: "કૃપા કરીને તમામ જરૂરી વિગતો ભરો."
            },

            future: {
                title: "ઘરની સફાઈ અને જાળવણી",
                intro: "આગળ ઉમેરવાની અમારી ઘરેલુ સેવાઓમાં સામેલ છે:"
            },

            about: {
                title: "FRAGWN વિશે",
                mission: "<strong>અમારું મિશન:</strong> રોજિંદી સ્થાનિક સેવાઓને સરળ, પારદર્શક અને વિશ્વસનીય બનાવવી.",
                what: "<strong>અમે શું કરીએ છીએ:</strong> FRAGWN ગ્રાહકોને સમારકામ, સફાઈ, ટ્યુશન અને અન્ય સેવાઓ માટે સ્થાનિક પ્રોફેશનલ્સ સાથે જોડે છે.",
                why: "<strong>FRAGWN શા માટે:</strong> વિવિધ સેવા પ્રદાતાઓ શોધવામાં તમારો સમય બચાવો.",
                vision: "<strong>અમારું વિઝન:</strong> વિશ્વસનીય સ્થાનિક પ્રોફેશનલ શોધવાનું કોફી મંગાવવા જેટલું સરળ બનાવવું."
            },

            contact: {
                title: "અમારો સંપર્ક કરો",
                name: "પૂરું નામ",
                email: "ઈમેલ સરનામું",
                message: "તમારો સંદેશ",
                submit: "સંદેશ મોકલો",
                error: "કૃપા કરીને જરૂરી વિગતો ભરો.",
                emailError: "કૃપા કરીને માન્ય ઈમેલ સરનામું દાખલ કરો."
            },

            general: {
                close: "બંધ કરો",
                selectService: "સેવા પસંદ કરો",
                required: "આ વિગતો ભરવી જરૂરી છે.",
                other: "અન્ય"
            }
        },

        te: {
            nav: {
                home: "హోమ్",
                categories: "సేవలు",
                howitworks: "ఎలా పనిచేస్తుంది",
                forpros: "నిపుణుల కోసం",
                about: "మా గురించి",
                contact: "సంప్రదించండి"
            },

            hero: {
                title: "మీకు కావలసిన ప్రతి సేవ ఒకే నమ్మకమైన చోట.",
                subtitle: "రోజువారీ మరమ్మతులు మరియు గృహ సేవల కోసం స్థానిక నిపుణులను కనుగొనండి. మీ అవసరాన్ని తెలియజేసి FRAGWNతో ప్రారంభించండి.",
                ctaPrimary: "సేవను కనుగొనండి",
                ctaSecondary: "నిపుణుడిగా చేరండి"
            },

            categories: {
                title: "మా సేవలు",
                intro: "మా సేవలను పరిశీలించి మీ అవసరానికి తగిన సహాయం పొందండి."
            },

            request: {
                modalTitle: "సేవ కోసం అభ్యర్థించండి",
                name: "పూర్తి పేరు",
                phone: "ఫోన్ నంబర్",
                service: "కావలసిన సేవ",
                location: "ప్రాంతం / పిన్‌కోడ్",
                details: "మీ సమస్యను వివరించండి",
                submit: "అభ్యర్థన పంపండి",
                note: "మీ అభ్యర్థనను సమర్పించడానికి Google Formకు మళ్లించబడతారు.",
                success: "FRAGWN సేవా అభ్యర్థన ఫారమ్ తెరవబడుతోంది.",
                error: "దయచేసి అవసరమైన వివరాలన్నీ నమోదు చేయండి."
            },

            howworks: {
                title: "ఇది ఎలా పనిచేస్తుంది",
                step1: {
                    title: "సేవను ఎంచుకోండి",
                    text: "మీకు అవసరమైన సేవను ఎంచుకోండి."
                },
                step2: {
                    title: "మీ అవసరాన్ని తెలియజేయండి",
                    text: "మీ ప్రాంతం మరియు అవసరాల వివరాలను నమోదు చేయండి."
                },
                step3: {
                    title: "నిపుణుడితో కనెక్ట్ అవ్వండి",
                    text: "కనెక్షన్ ప్రక్రియ ప్రారంభించడానికి మీ అభ్యర్థనను సమర్పించండి."
                }
            },

            pros: {
                title: "FRAGWNతో మీ వ్యాపారాన్ని అభివృద్ధి చేయండి",
                intro: "కొత్త కస్టమర్లను చేరుకోండి మరియు మీ సేవలను మరింత మందికి పరిచయం చేయండి.",
                join: "నిపుణుడిగా చేరండి",
                modalTitle: "నిపుణుల నమోదు",
                name: "పూర్తి పేరు",
                phone: "ఫోన్ నంబర్",
                service: "సేవా విభాగం",
                area: "సేవా ప్రాంతం",
                description: "నిపుణుల వివరాలు",
                submit: "నమోదు సమర్పించండి",
                note: "నమోదు చేసినంత మాత్రాన ఆమోదం లభిస్తుందని హామీ లేదు.",
                success: "నమోదు ఫారమ్ తెరవబడుతోంది.",
                error: "దయచేసి అవసరమైన వివరాలన్నీ నమోదు చేయండి."
            },

            future: {
                title: "ఇంటి శుభ్రత మరియు నిర్వహణ",
                intro: "భవిష్యత్తులో అందించాలనుకుంటున్న గృహ సేవలు:"
            },

            about: {
                title: "FRAGWN గురించి",
                mission: "<strong>మా లక్ష్యం:</strong> రోజువారీ స్థానిక సేవలను సులభంగా, పారదర్శకంగా మరియు నమ్మదగినవిగా చేయడం.",
                what: "<strong>మేము చేసేది:</strong> మరమ్మతులు, శుభ్రత, ట్యూషన్ మరియు ఇతర సేవల కోసం కస్టమర్లను స్థానిక నిపుణులతో కలుపుతాము.",
                why: "<strong>FRAGWN ఎందుకు:</strong> అనేక సేవా ప్రదాతలను వెతకడానికి పట్టే సమయాన్ని ఆదా చేసుకోండి.",
                vision: "<strong>మా దృష్టి:</strong> నమ్మదగిన స్థానిక నిపుణుడిని కనుగొనడాన్ని కాఫీ ఆర్డర్ చేసినంత సులభం చేయడం."
            },

            contact: {
                title: "మమ్మల్ని సంప్రదించండి",
                name: "పూర్తి పేరు",
                email: "ఈమెయిల్ చిరునామా",
                message: "మీ సందేశం",
                submit: "సందేశం పంపండి",
                error: "దయచేసి అవసరమైన వివరాలను నమోదు చేయండి.",
                emailError: "దయచేసి సరైన ఈమెయిల్ చిరునామాను నమోదు చేయండి."
            },

            general: {
                close: "మూసివేయండి",
                selectService: "సేవను ఎంచుకోండి",
                required: "ఈ వివరాన్ని నమోదు చేయాలి.",
                other: "ఇతర"
            }
        }
    };

    /* ================= HELPERS ================= */

    const $ = (selector, root = document) =>
        root.querySelector(selector);

    const $$ = (selector, root = document) =>
        Array.from(root.querySelectorAll(selector));

    function getText(path, language = currentLang) {
        return path.split(".").reduce(
            (value, key) => value && value[key],
            translations[language]
        );
    }

    function getServiceName(serviceId, language = currentLang) {
        const service = SERVICES.find(item => item.id === serviceId);
        return service ? service[language] : serviceId;
    }

    let currentLang =
        localStorage.getItem("fragwn-lang") || "en";

    if (!translations[currentLang]) {
        currentLang = "en";
       
}

// Save the selected language
function saveLanguage(language) {
    if (!translations[language]) {
        language = "en";
    }

    currentLang = language;

    try {
        localStorage.setItem("fragwn-lang", language);
    } catch (error) {
        console.warn("Language preference could not be saved.");
    }

    document.documentElement.lang = language;

    // Update language buttons
    $$(".lang-btn").forEach(button => {
        const selected = button.dataset.lang === language;

        button.classList.toggle("active", selected);
        button.setAttribute("aria-pressed", String(selected));
    });

    // Translate text already present on the page
    $$("[data-i18n]").forEach(element => {
        let key = element.dataset.i18n;

        // Match the naming used by the existing translation dictionary
        const aliases = {
            "hero.cta-primary": "hero.ctaPrimary",
            "hero.cta-secondary": "hero.ctaSecondary",
            "request.modal.title": "request.modalTitle",
            "pros.button.join": "pros.join",
            "pro.modal.title": "pros.modalTitle",
            "pro.button.submit": "pros.submit",
            "pro.note": "pros.note",
            "contact.label.name": "contact.name",
            "contact.label.email": "contact.email",
            "contact.label.message": "contact.message",
            "contact.button.submit": "contact.submit"
        };

        key = aliases[key] || key;

        const value = getText(key, language);

        if (value !== undefined && value !== null && value !== key) {
            if (/<\/?(strong|em|b|i|br)>/i.test(value)) {
                element.innerHTML = value;
            } else {
                element.textContent = value;
            }
        }
    });
}

// Connect the four language buttons
$$(".lang-btn").forEach(button => {
    button.addEventListener("click", () => {
        saveLanguage(button.dataset.lang);
    });
});

// Open and close modal windows
function openModal(modal) {
    if (!modal) return;

    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("active");
    document.body.classList.add("modal-open");
}

function closeModal(modal) {
    if (!modal) return;

    modal.setAttribute("aria-hidden", "true");
    modal.classList.remove("active");

    if (!$(".modal.active")) {
        document.body.classList.remove("modal-open");
    }
}

// Connect modal buttons and close controls
$$("[data-modal-target]").forEach(button => {
    button.addEventListener("click", event => {
        event.preventDefault();

        const target = button.dataset.modalTarget;
        openModal(document.querySelector(target));
    });
});

$$("[data-modal-close], .modal-close").forEach(button => {
    button.addEventListener("click", () => {
        closeModal(button.closest(".modal"));
    });
});

// Close a modal when the user taps its background
$$(".modal").forEach(modal => {
    modal.addEventListener("click", event => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});

// Close modals with the Escape key
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        $$(".modal.active").forEach(closeModal);
    }
});

// Mobile navigation
const menuToggle = $("#menu-toggle");
const navMenu = $("#nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    $$("#nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// Initialize the saved language
saveLanguage(currentLang);

});
