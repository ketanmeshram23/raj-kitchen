const WHATSAPP_NUMBER = '919370002119';

const translations = {
    en: {
        peopleText: 'How many people are you catering for?',
        people20: '20 People',
        people40: '40 People',
        people50: '50 People',
        recommendedFor: 'Recommended for',
        people: 'people:',
        addToOrder: 'Add to Order',
        remove: 'Remove',
        emptyCart: 'Select items to get started →',
        items: 'items',
        item: 'item',
        viewCart: 'View Cart',
        orderOnWhatsApp: 'Order on WhatsApp •',
        callToConfirm: '📞 Call to Confirm',
        pleaseAddItems: 'Please add items to your order',
        rajKitchenOrder: 'Raj Kitchen Order',
        confirmAvailability: 'Please confirm availability and delivery.',
        total: 'Total',
        langButton: 'मराठी',
    },
    mr: {
        peopleText: 'तुम किती लोकांसाठी अन्न सिद्ध करत आहात?',
        people20: '20 लोक',
        people40: '40 लोक',
        people50: '50 लोक',
        recommendedFor: 'या',
        people: 'लोकांसाठी शिफारस:',
        addToOrder: 'ऑर्डरमध्ये जोडा',
        remove: 'काढून टाका',
        emptyCart: 'सुरू करण्यासाठी आयटम निवडा →',
        items: 'आयटम',
        item: 'आयटम',
        viewCart: 'कार्ट पहा',
        orderOnWhatsApp: 'व्हाट्सअ्पवर ऑर्डर करा •',
        callToConfirm: '📞 खरोखर करण्यासाठी कॉल करा',
        pleaseAddItems: 'कृपया आपल्या ऑर्डरमध्ये आयटम जोडा',
        rajKitchenOrder: 'राज किचन ऑर्डर',
        confirmAvailability: 'कृपया उपलब्धता आणि वितरण खरोखर करा.',
        total: 'एकूण',
        langButton: 'English',
    }
};

function formatPriceDisplay(priceDisplay) {
    if (priceDisplay.includes('/ piece')) {
        return priceDisplay;
    }
    if (!priceDisplay.includes('/kg')) {
        return priceDisplay + ' /kg';
    }
    return priceDisplay;
}

const MENU_DATA = {
    'STARTERS': [
        { name: 'Hara Bhara Kabab', price: 410, priceDisplay: '₹ 410', nameMR: 'हरा भरा कबाब', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' }, isStarter: true },
        { name: 'Manchurian 65', price: 410, priceDisplay: '₹ 410', nameMR: 'मंचुरियन 65', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' }, isStarter: true },
        { name: 'Crispy Veg', price: 410, priceDisplay: '₹ 410', nameMR: 'क्रिस्पी व्हेज', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' }, isStarter: true },
        { name: 'Veg Manchow Soup', price: 310, priceDisplay: '₹ 310', nameMR: 'व्हेज मंचाउ सूप', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' }, isStarter: true },
        { name: 'Hot & Sour Soup', price: 310, priceDisplay: '₹ 310', nameMR: 'हॉट & साव सूप', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' }, isStarter: true }
    ],
    'ROTI / BREAD': [
        { name: 'Telachi Mothi Poli', price: 150, priceDisplay: '₹ 150', nameMR: 'तेलाची मोठी पोळी', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Fulka Roti', price: 160, priceDisplay: '₹ 160', nameMR: 'फुलका रोटी', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Ajwain Puri', price: 180, priceDisplay: '₹ 180', nameMR: 'अजवाइन पुरी', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Jawari Bhakri', price: 190, priceDisplay: '₹ 190', nameMR: 'ज्वारी भाकर', suggestions: { 20: '4 Kg', 40: '6 kg', 50: '7 kg' } }
    ],
    'RICE': [
        { name: 'Sadha Rice', price: 110, priceDisplay: '₹ 110', nameMR: 'साधा राईस', suggestions: { 20: '4 Kg', 40: '6 kg', 50: '7 kg' } },
        { name: 'Jeera Rice', price: 120, priceDisplay: '₹ 120', nameMR: 'जिरा राईस', suggestions: { 20: '4 Kg', 40: '6 kg', 50: '7 kg' } },
        { name: 'Garlic Rice', price: 130, priceDisplay: '₹ 130', nameMR: 'गार्लिक राईस', suggestions: { 20: '4 Kg', 40: '6 kg', 50: '7 kg' } },
        { name: 'Veg Pulav', price: 160, priceDisplay: '₹ 160', nameMR: 'व्हेज पुलाव', suggestions: { 20: '4 Kg', 40: '6 kg', 50: '7 kg' } },
        { name: 'Tawa Pulav', price: 260, priceDisplay: '₹ 260', nameMR: 'तवा पुलाव', suggestions: { 20: '4 Kg', 40: '6 kg', 50: '7 kg' } },
        { name: 'Veg Biryani', price: 270, priceDisplay: '₹ 270', nameMR: ' व्हेज बिर्याणी', suggestions: { 20: '4 Kg', 40: '6 kg', 50: '7 kg' } },
        { name: 'Masala Bhat', price: 170, priceDisplay: '₹ 170', nameMR: 'मसाला भात', suggestions: { 20: '4 Kg', 40: '6 kg', 50: '7 kg' } },
        { name: 'Moong Dal Khichdi', price: 160, priceDisplay: '₹ 160', nameMR: 'मूंग दाल खिचडी', suggestions: { 20: '4 Kg', 40: '6 kg', 50: '7 kg' } },
        { name: 'Toor Dal Khichdi', price: 180, priceDisplay: '₹ 180', nameMR: 'तुवर दाल खिचडी', suggestions: { 20: '4 Kg', 40: '6 kg', 50: '7 kg' } }
    ],
    'DAL': [
        { name: 'Sadhi Dal', price: 160, priceDisplay: '₹ 160', nameMR: 'साधी दाल', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Jeera Dal', price: 160, priceDisplay: '₹ 160', nameMR: 'जिरा दाल', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Dal Tadka', price: 160, priceDisplay: '₹ 160', nameMR: 'दाल तडका', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Dal Palak', price: 170, priceDisplay: '₹ 170', nameMR: 'दाल पालक', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } }
    ],
    'VEG SABJI': [
        { name: 'Mix Veg Kolhapuri', price: 170, priceDisplay: '₹ 170', nameMR: 'मिक्स व्हेज कोल्हापुरी', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Bhendi Masala', price: 210, priceDisplay: '₹ 210', nameMR: 'भेंडी मसाला', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Fanus Curry (Seasonal)', price: 210, priceDisplay: '₹ 210', nameMR: 'फणस करी (ऋतुनुसार)', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Methi Matar Malai', price: 310, priceDisplay: '₹ 310', nameMR: 'मेथी मटर मलाई', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Veg Kofta Curry', price: 300, priceDisplay: '₹ 300', nameMR: 'व्हेज कोफता करी', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Malai Kofta', price: 310, priceDisplay: '₹ 310', nameMR: 'मलाई कोफता', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Chole Masala', price: 170, priceDisplay: '₹ 170', nameMR: 'छोले मसाला', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Aloo Chole', price: 170, priceDisplay: '₹ 170', nameMR: 'आलू छोले', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Dal Kanda', price: 190, priceDisplay: '₹ 190', nameMR: 'दाल कांडा', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Aloo Baingan', price: 160, priceDisplay: '₹ 160', nameMR: 'आलू बैंगन', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Baingan Masala', price: 160, priceDisplay: '₹ 160', nameMR: 'बैंगन मसाला', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Dum Aloo', price: 160, priceDisplay: '₹ 160', nameMR: 'दम आलू', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Aloo Gobi Matar', price: 160, priceDisplay: '₹ 160', nameMR: 'आलू गोभी मटर', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Veg Anda Curry', price: 190, priceDisplay: '₹ 190', nameMR: 'व्हेज अंडा करी', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Veg Keema Kasturi', price: 310, priceDisplay: '₹ 310', nameMR: 'व्हेज खीमा कस्तूरी', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Veg Keema Kaleji', price: 320, priceDisplay: '₹ 320', nameMR: 'व्हेज खीमा कलेजी', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Patwadi Rassa', price: 190, priceDisplay: '₹ 190', nameMR: 'पटवडी रस्सा', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Baingan Bharta', price: 190, priceDisplay: '₹ 190', nameMR: 'बैंगन भर्ता', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Zunka', price: 210, priceDisplay: '₹ 210', nameMR: 'जुनका', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } }
    ],
    'PANEER SPECIAL': [
        { name: 'Paneer Butter Masala', price: 330, priceDisplay: '₹ 330', nameMR: 'पनीर बटर मसाला', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Matar Paneer', price: 330, priceDisplay: '₹ 330', nameMR: 'मटर पनीर', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Kadhai Paneer', price: 330, priceDisplay: '₹ 330', nameMR: 'कढाई पनीर', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Palak Paneer', price: 330, priceDisplay: '₹ 330', nameMR: 'पालक पनीर', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Lachha Paneer', price: 330, priceDisplay: '₹ 330', nameMR: 'लच्छा पनीर', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Paneer Kolhapuri', price: 400, priceDisplay: '₹ 400', nameMR: 'पनीर कोल्हापुरी', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } }
    ],
    'NON-VEG SABJI': [
        { name: 'Mutton Saoji', price: 650, priceDisplay: '₹ 650', nameMR: 'मटण सावजी', suggestions: { 20: '8 Kg', 40: '15 kg', 50: '20 kg' } },
        { name: 'Mutton Masala', price: 700, priceDisplay: '₹ 700', nameMR: 'मटण मसाला', suggestions: { 20: '8 Kg', 40: '15 kg', 50: '20 kg' } },
        { name: 'Bhuna Mutton', price: 700, priceDisplay: '₹ 700', nameMR: 'भूना मटण', suggestions: { 20: '8 Kg', 40: '15 kg', 50: '20 kg' } },
        { name: 'Saoji Khur', price: 1000, priceDisplay: '₹ 1000', nameMR: 'सावजी खूर', suggestions: { 20: '8 Kg', 40: '15 kg', 50: '20 kg' } },
        { name: 'Keema Kaleji', price: 700, priceDisplay: '₹ 700', nameMR: 'खीमा कलेजी', suggestions: { 20: '8 Kg', 40: '15 kg', 50: '20 kg' } },
        { name: 'Chicken Saoji', price: 450, priceDisplay: '₹ 450', nameMR: 'चिकन सावजी', suggestions: { 20: '8 Kg', 40: '15 kg', 50: '20 kg' } },
        { name: 'Chicken Masala', price: 500, priceDisplay: '₹ 500', nameMR: 'चिकन मसाला', suggestions: { 20: '8 Kg', 40: '15 kg', 50: '20 kg' } },
        { name: 'Butter Chicken', price: 500, priceDisplay: '₹ 500', nameMR: 'बटर चिकन', suggestions: { 20: '8 Kg', 40: '15 kg', 50: '20 kg' } },
        { name: 'Chicken Tikka Masala', price: 500, priceDisplay: '₹ 500', nameMR: 'चिकन टिक्का मसाला', suggestions: { 20: '8 Kg', 40: '15 kg', 50: '20 kg' } },
        { name: 'Anda Curry', price: 200, priceDisplay: '₹ 200', nameMR: 'अंडा करी', suggestions: { 20: '8 Kg', 40: '15 kg', 50: '20 kg' } },
        { name: 'Anda Masala', price: 250, priceDisplay: '₹ 250', nameMR: 'अंडा मसाला', suggestions: { 20: '8 Kg', 40: '15 kg', 50: '20 kg' } }
    ],
       'CHINESE': [
        { name: 'Veg Noodles', price: 270, priceDisplay: '₹ 270', nameMR: 'व्हेज नूडल्स', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '7 kg' } },
        { name: 'Veg Manchurian', price: 270, priceDisplay: '₹ 270', nameMR: 'व्हेज मंचुरियन', suggestions: { 20: '4 Kg', 40: '6 kg', 50: '8 kg' } }
        
    ],
    'SNACKS': [
        { name: 'Moong Pakoda', price: 190, priceDisplay: '₹ 190', nameMR: 'मूंग पकोडा', suggestions: { 20: '1 Kg', 40: '3 kg', 50: '4 kg' } },
        { name: 'Kande Bhaje', price: 170, priceDisplay: '₹ 170', nameMR: 'कांदे भाजे', suggestions: { 20: '1 Kg', 40: '3 kg', 50: '4 kg' } },
        { name: 'Mirchi Bhaje', price: 180, priceDisplay: '₹ 180', nameMR: 'मिरची भाजे', suggestions: { 20: '1 Kg', 40: '3 kg', 50: '4 kg' } },
        { name: 'Dahi Vada', price: 230, priceDisplay: '₹ 230', nameMR: 'दही वडा', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Aloo Bonda', price: 260, priceDisplay: '₹ 260', nameMR: 'आलू बोंडा', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Veg Cutlet', price: 270, priceDisplay: '₹ 270', nameMR: 'कटलेट', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Sambar Vadi', price: 300, priceDisplay: '₹ 300', nameMR: 'संभार वडी', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Fryums Papad', price: 170, priceDisplay: '₹ 170', nameMR: 'फ्राईम्स पापड', suggestions: { 20: '1 Kg', 40: '2 kg', 50: '4 kg' } }
    ],
    'CURD': [ 
        { name: 'Maharashtrian Kadhi', price: 110, priceDisplay: '₹ 110', nameMR: 'महाराष्ट्रीयन कढी', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Mattha', price: 130, priceDisplay: '₹ 130', nameMR: 'मठ्ठा', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Boondi Raita', price: 160, priceDisplay: '₹ 160', nameMR: 'बूंदी रायता', suggestions: { 20: '4 Kg', 40: '6 kg', 50: '8 kg' } }
    ],
    'SWEETS': [
        { name: 'Gulab Jamun', price: 8, priceDisplay: '₹ 8 / piece', nameMR: 'गुलाब जामून', suggestions: { 20: '20 Pcs', 40: '40 Pcs', 50: '50 Pcs' } },
        { name: 'Cham Cham', price: 8, priceDisplay: '₹ 8 / piece', nameMR: 'चम चम', suggestions: { 20: '20 Pcs', 40: '40 Pcs', 50: '50 Pcs' } },
        { name: 'Rasgulla', price: 8, priceDisplay: '₹ 8 / piece', nameMR: 'रसगुल्ला', suggestions: { 20: '20 Pcs', 40: '40 Pcs', 50: '50 Pcs' } },
        { name: 'Moong Dal Halwa', price: 360, priceDisplay: '₹ 360', nameMR: 'मूंग दाल हलवा', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Shrikhand', price: 260, priceDisplay: '₹ 260', nameMR: 'श्रीखंड', suggestions: { 20: '2 Kg', 40: '4 kg', 50: '5 kg' } },
        { name: 'Kheer', price: 260, priceDisplay: '₹ 260', nameMR: 'खीर', suggestions: { 20: '2 Kg', 40: '3 kg', 50: '5 kg' } },
        { name: 'Motichur Ladoo', price: 360, priceDisplay: '₹ 360', nameMR: 'मोतीचूर लाडू', suggestions: { 20: '2 Kg', 40: '3 kg', 50: '5 kg' } },
        { name: 'Besan Barfi', price: 280, priceDisplay: '₹ 280', nameMR: 'बेसन बर्फी', suggestions: { 20: '2 Kg', 40: '3 kg', 50: '5 kg' } },
        { name: 'Puran Poli', price: 240, priceDisplay: '₹ 240', nameMR: 'पूरण पोळी', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Khova Poli', price: 340, priceDisplay: '₹ 340', nameMR: 'खोवा पोळी', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } }
    ],
    'SALADS & CHUTNEYS': [
        { name: 'Koshimbir', price: 160, priceDisplay: '₹ 160', nameMR: 'कोशिंबीर', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Green Salad', price: 180, priceDisplay: '₹ 180', nameMR: 'ग्रीन सलाद', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Dal Chutney', price: 120, priceDisplay: '₹ 120', nameMR: 'दाल चटणी', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'Thecha', price: 310, priceDisplay: '₹ 310', nameMR: 'ठेचा', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } }
    ]
   
};

const CATEGORY_NAMES = {
    'STARTERS': 'स्टार्टर्स',
    'ROTI / BREAD': 'रोटी / ब्रेड',
    'RICE': 'भात',
    'DAL': 'डाळ',
    'VEG SABJI': 'वेज सब्जी',
    'PANEER SPECIAL': 'पनीर स्पेशल',
    'NON-VEG SABJI': 'नॉन-वेज सब्जी',
    'CHINESE': 'चायनीज',
    'SNACKS': 'नाश्ता',
    'CURD': 'दही',
    'SWEETS': 'मिठाई',
    'SALADS & CHUTNEYS': 'सलाद & चटणी'
};

let state = {
    cart: {},
    language: 'en',
    selectedPeople: 20,
    activeCategory: 'STARTERS',
    cartVisible: false
};

function getTrans(key) {
    return translations[state.language][key] || translations['en'][key];
}

function getItemName(item) {
    return state.language === 'mr' ? item.nameMR : item.name;
}

function getCategoryName(category) {
    return state.language === 'mr' ? CATEGORY_NAMES[category] : category;
}

function parseQuantity(suggestion) {
    const match = suggestion.match(/(\d+)/);
    return match ? parseFloat(match[0]) : 0;
}

function formatPrice(amount) {
    return amount.toLocaleString('en-IN');
}

function updateAllHTMLText() {
    // Update all static HTML text
    document.getElementById('langToggle').textContent = getTrans('langButton');
    document.getElementById('peopleText').textContent = getTrans('peopleText');
    document.getElementById('emptyCart').textContent = getTrans('emptyCart');
    
    // Update people buttons
    const peopleBtns = document.querySelectorAll('.people-btn');
    peopleBtns[0].textContent = getTrans('people20');
    peopleBtns[1].textContent = getTrans('people40');
    peopleBtns[2].textContent = getTrans('people50');
    
    // Update view cart button
    const viewCartBtn = document.querySelector('.view-cart-btn');
    if (viewCartBtn) {
        viewCartBtn.textContent = getTrans('viewCart');
    }
    
    // Update call button
    const callBtn = document.getElementById('callBtn');
    if (callBtn) {
        callBtn.textContent = getTrans('callToConfirm');
    }
    
    // Update whatsapp button
    const whatsappBtn = document.getElementById('whatsappBtn');
    if (whatsappBtn) {
        whatsappBtn.innerHTML = `${getTrans('orderOnWhatsApp')} <span id="whatsappTotal">₹0</span>`;
    }
}

function init() {
    updateAllHTMLText();
    renderCategoryTabs();
    renderMenuItems(state.activeCategory);
    updateCartUI();
}

function renderCategoryTabs() {
    const categoryTabs = document.getElementById('categoryTabs');
    categoryTabs.innerHTML = '';

    Object.keys(MENU_DATA).forEach(category => {
        const tab = document.createElement('button');
        tab.className = `category-tab ${category === state.activeCategory ? 'active' : ''}`;
        tab.textContent = getCategoryName(category);
        tab.onclick = () => selectCategory(category);
        categoryTabs.appendChild(tab);
    });
}

function renderMenuItems(category) {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';

    const items = MENU_DATA[category];
    const isStarter = category === 'STARTERS';

    items.forEach((item) => {
        const cartKey = `${category}|${item.name}`;
        const cartItem = state.cart[cartKey];
        const suggestion = item.suggestions[state.selectedPeople];

        const itemEl = document.createElement('div');
        itemEl.className = 'menu-item';

        const itemNameEl = document.createElement('div');
        itemNameEl.className = 'item-name';
        itemNameEl.textContent = getItemName(item);

        const itemPriceEl = document.createElement('div');
        itemPriceEl.className = 'item-price';
        itemPriceEl.textContent = formatPriceDisplay(item.priceDisplay);

        itemEl.appendChild(itemNameEl);
        itemEl.appendChild(itemPriceEl);

        // Only show recommendation for non-starters
        if (!isStarter) {
            const recommendationEl = document.createElement('div');
            recommendationEl.className = 'recommendation';
            recommendationEl.innerHTML = `<strong>${getTrans('recommendedFor')} ${state.selectedPeople} ${getTrans('people')}</strong>${suggestion}`;
            itemEl.appendChild(recommendationEl);
        }

        if (cartItem) {
            const controlsEl = document.createElement('div');
            controlsEl.className = 'quantity-controls';

            const minusBtn = document.createElement('button');
            minusBtn.className = 'qty-btn qty-minus';
            minusBtn.textContent = '−';
            minusBtn.onclick = () => updateQuantity(cartKey, cartItem.quantity - 1);

            const input = document.createElement('input');
            input.type = 'number';
            input.className = 'qty-input';
            input.value = cartItem.quantity;
            input.onchange = (e) => updateQuantity(cartKey, parseFloat(e.target.value) || 0);

            const plusBtn = document.createElement('button');
            plusBtn.className = 'qty-btn qty-plus';
            plusBtn.textContent = '+';
            plusBtn.onclick = () => updateQuantity(cartKey, cartItem.quantity + 1);

            controlsEl.appendChild(minusBtn);
            controlsEl.appendChild(input);
            controlsEl.appendChild(plusBtn);

            itemEl.appendChild(controlsEl);

            const totalEl = document.createElement('div');
            totalEl.className = 'qty-total';
            totalEl.textContent = `₹${formatPrice(item.price * cartItem.quantity)}`;
            itemEl.appendChild(totalEl);
        } else {
            const addBtn = document.createElement('button');
            addBtn.className = 'add-btn';
            addBtn.textContent = getTrans('addToOrder');
            addBtn.onclick = () => addToCart(item, category);
            itemEl.appendChild(addBtn);
        }

        menuGrid.appendChild(itemEl);
    });
}

function updateCartUI() {
    const cartItems = Object.entries(state.cart);
    const totalItems = cartItems.length;
    const totalPrice = cartItems.reduce((sum, [_, item]) => sum + (item.price * item.quantity), 0);

    const cartBar = document.getElementById('cartBar');
    const emptyCart = document.getElementById('emptyCart');

    if (totalItems > 0) {
        cartBar.classList.add('active');
        emptyCart.classList.remove('active');

        const itemText = totalItems !== 1 ? getTrans('items') : getTrans('item');
        document.getElementById('cartCount').textContent = `${totalItems} ${itemText}`;
        document.getElementById('cartTotal').textContent = `₹${formatPrice(totalPrice)}`;
        document.getElementById('whatsappTotal').textContent = `₹${formatPrice(totalPrice)}`;

        const cartSummary = document.getElementById('cartSummary');
        cartSummary.innerHTML = '';

        cartItems.forEach(([key, item]) => {
            const cartItemEl = document.createElement('div');
            cartItemEl.className = 'cart-item';

            const itemInfoEl = document.createElement('div');
            const itemNameEl = document.createElement('div');
            itemNameEl.className = 'cart-item-name';
            itemNameEl.textContent = getItemName(item);

            const itemDetailEl = document.createElement('div');
            itemDetailEl.className = 'cart-item-detail';
            itemDetailEl.textContent = `${item.quantity} Kg × ₹${item.price} = ₹${formatPrice(item.price * item.quantity)}`;

            itemInfoEl.appendChild(itemNameEl);
            itemInfoEl.appendChild(itemDetailEl);

            const removeBtn = document.createElement('button');
            removeBtn.className = 'cart-item-remove';
            removeBtn.textContent = getTrans('remove');
            removeBtn.onclick = () => removeFromCart(key);

            cartItemEl.appendChild(itemInfoEl);
            cartItemEl.appendChild(removeBtn);
            cartSummary.appendChild(cartItemEl);
        });
    } else {
        cartBar.classList.remove('active');
        emptyCart.classList.add('active');
        emptyCart.textContent = getTrans('emptyCart');
    }
}

function addToCart(item, category) {
    const suggestion = item.suggestions[state.selectedPeople];
    const quantity = parseQuantity(suggestion);
    const key = `${category}|${item.name}`;

    state.cart[key] = {
        ...item,
        category,
        quantity,
        selectedPeople: state.selectedPeople
    };

    renderMenuItems(state.activeCategory);
    updateCartUI();
}

function updateQuantity(key, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(key);
    } else {
        state.cart[key].quantity = newQuantity;
        renderMenuItems(state.activeCategory);
        updateCartUI();
    }
}

function removeFromCart(key) {
    delete state.cart[key];
    renderMenuItems(state.activeCategory);
    updateCartUI();
}

function setPeople(count) {
    state.selectedPeople = count;

    document.querySelectorAll('.people-btn').forEach(btn => {
        btn.classList.remove('active', 'inactive');
    });
    event.target.classList.add('active');

    renderMenuItems(state.activeCategory);
}

function selectCategory(category) {
    state.activeCategory = category;
    renderCategoryTabs();
    renderMenuItems(category);
}

function toggleLanguage() {
    state.language = state.language === 'en' ? 'mr' : 'en';
    updateAllHTMLText();
    renderCategoryTabs();
    renderMenuItems(state.activeCategory);
    updateCartUI();
}

function toggleMenu() {
    window.location.href = 'menu.html';
}

function handleCall() {
    window.location.href = `tel:${WHATSAPP_NUMBER}`;
}

function toggleCart() {
    state.cartVisible = !state.cartVisible;
    const cartSummary = document.getElementById('cartSummary');
    const expandBtn = document.getElementById('expandBtn');

    if (state.cartVisible) {
        cartSummary.classList.add('active');
        expandBtn.textContent = '▲';
    } else {
        cartSummary.classList.remove('active');
        expandBtn.textContent = '▼';
    }
}

function handleWhatsAppOrder() {
    const cartItems = Object.entries(state.cart);

    if (cartItems.length === 0) {
        alert(getTrans('pleaseAddItems'));
        return;
    }

    let message = getTrans('rajKitchenOrder') + '\n\n';
    let total = 0;

    cartItems.forEach(([_, item]) => {
        const displayName = getItemName(item);
        const unit = item.suggestions[20].includes('Pcs') ? 'Pcs' : 'Kg';
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `• ${displayName}\n  ${item.quantity} ${unit} × ₹${item.price} = ₹${itemTotal}\n\n`;
    });

    message += `${getTrans('total')}: ₹${total}\n\n`;
    message += getTrans('confirmAvailability');

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}

document.addEventListener('DOMContentLoaded', init);