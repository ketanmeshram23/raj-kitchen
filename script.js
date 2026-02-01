// =============================================
// RAJ KITCHEN - COMPLETE JAVASCRIPT
// Combined Menu Data + Script Functionality
// =============================================

// =============================================
// MENU CATEGORIES AND ITEMS
// =============================================
const categories = {
    'ROTI/PURI': [
        { name: 'तेलाची मोठी पोळी', price: 150, priceDisplay: '₹ 150', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'फुलका रोटी', price: 160, priceDisplay: '₹ 160', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'अजवाइन पुरी', price: 180, priceDisplay: '₹ 180', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'ज्वारी भाकर', price: 190, priceDisplay: '₹ 190', suggestions: { 20: '4 Kg', 40: '6 kg', 50: '7 kg' } }
    ],
    'RICE': [
        { name: 'साधा राईस', price: 110, priceDisplay: '₹ 110', suggestions: { 20: '4 Kg', 40: '6 kg', 50: '7 kg' } },
        { name: 'जिरा राईस', price: 120, priceDisplay: '₹ 120', suggestions: { 20: '4 Kg', 40: '6 kg', 50: '7 kg' } },
        { name: 'गार्लिक राईस', price: 130, priceDisplay: '₹ 130', suggestions: { 20: '4 Kg', 40: '6 kg', 50: '7 kg' } },
        { name: 'व्हेज पुलाव', price: 160, priceDisplay: '₹ 160', suggestions: { 20: '4 Kg', 40: '6 kg', 50: '7 kg' } },
        { name: 'मसाला भात', price: 170, priceDisplay: '₹ 170', suggestions: { 20: '4 Kg', 40: '6 kg', 50: '7 kg' } },
        { name: 'मूंग दाल खिचडी', price: 160, priceDisplay: '₹ 160', suggestions: { 20: '4 Kg', 40: '6 kg', 50: '7 kg' } },
        { name: 'तुवर दाल खिचडी', price: 180, priceDisplay: '₹ 180', suggestions: { 20: '4 Kg', 40: '6 kg', 50: '7 kg' } }
    ],
    'DAL': [
        { name: 'साधी दाल', price: 160, priceDisplay: '₹ 160', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'जिरा दाल', price: 160, priceDisplay: '₹ 160', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'दाल तडका', price: 160, priceDisplay: '₹ 160', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'दाल पालक', price: 170, priceDisplay: '₹ 170', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } }
    ],
    'SWEETS (PER PIECE)': [
        { name: 'गुलाबजामून', price: 8, priceDisplay: '₹ 8 / piece', suggestions: { 20: '20 Pcs', 40: '40 Pcs', 50: '50 Pcs' } },
        { name: 'चम चम', price: 8, priceDisplay: '₹ 8 / piece', suggestions: { 20: '20 Pcs', 40: '40 Pcs', 50: '50 Pcs' } },
        { name: 'रसगुल्ला', price: 8, priceDisplay: '₹ 8 / piece', suggestions: { 20: '20 Pcs', 40: '40 Pcs', 50: '50 Pcs' } }
    ],
    'VEGETABLES': [
        { name: 'कोशिंबीर', price: 160, priceDisplay: '₹ 160', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'ग्रीन सलाद', price: 180, priceDisplay: '₹ 180', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'दाल चटणी', price: 120, priceDisplay: '₹ 120', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'ठेचा', price: 310, priceDisplay: '₹ 310', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'व्हेज नूडल्स', price: 260, priceDisplay: '₹ 260', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '7 kg' } },
        { name: 'व्हेज मंचुरियन', price: 260, priceDisplay: '₹ 260', suggestions: { 20: '4 Kg', 40: '6 kg', 50: '8 kg' } },
        { name: 'व्हेज कटलेट', price: 260, priceDisplay: '₹ 260', suggestions: { 20: '2 Kg', 40: '4 kg', 50: '5 kg' } },
        { name: 'मिक्स व्हेज कोल्हापुरी', price: 170, priceDisplay: '₹ 170', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'भेंडी मसाला', price: 210, priceDisplay: '₹ 210', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } }
    ],
    'PANEER': [
        { name: 'पनीर बटर मसाला', price: 330, priceDisplay: '₹ 330', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'मटर पनीर', price: 330, priceDisplay: '₹ 330', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'कढाई पनीर', price: 330, priceDisplay: '₹ 330', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'पालक पनीर', price: 330, priceDisplay: '₹ 330', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'लच्छा पनीर', price: 330, priceDisplay: '₹ 330', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } },
        { name: 'पनीर कोल्हापुरी', price: 400, priceDisplay: '₹ 400', suggestions: { 20: '3 Kg', 40: '5 kg', 50: '6 kg' } }
    ],
    'NON-VEG (MUTTON)': [
        { name: 'मटण सावजी', price: 650, priceDisplay: '₹ 650', suggestions: { 20: '8 Kg', 40: '15 Kg', 50: '20 Kg' } },
        { name: 'मटण मसाला', price: 700, priceDisplay: '₹ 700', suggestions: { 20: '8 Kg', 40: '15 Kg', 50: '20 Kg' } },
        { name: 'भूना मटण', price: 700, priceDisplay: '₹ 700', suggestions: { 20: '8 Kg', 40: '15 Kg', 50: '20 Kg' } },
        { name: 'सावजी खूर', price: 1000, priceDisplay: '₹ 1000', suggestions: { 20: '8 Kg', 40: '15 Kg', 50: '20 Kg' } },
        { name: 'खिमा कलेजी', price: 700, priceDisplay: '₹ 700', suggestions: { 20: '8 Kg', 40: '15 Kg', 50: '20 Kg' } }
    ],
    'NON-VEG (CHICKEN)': [
        { name: 'चिकन सावजी', price: 450, priceDisplay: '₹ 450', suggestions: { 20: '8 Kg', 40: '15 Kg', 50: '20 Kg' } },
        { name: 'चिकन मसाला', price: 500, priceDisplay: '₹ 500', suggestions: { 20: '8 Kg', 40: '15 Kg', 50: '20 Kg' } },
        { name: 'बटर चिकन', price: 500, priceDisplay: '₹ 500', suggestions: { 20: '8 Kg', 40: '15 Kg', 50: '20 Kg' } },
        { name: 'चिकन टिक्का मसाला', price: 500, priceDisplay: '₹ 500', suggestions: { 20: '8 Kg', 40: '15 Kg', 50: '20 Kg' } }
    ],
    'NON-VEG (EGG)': [
        { name: 'अंडा करी', price: 200, priceDisplay: '₹ 200', suggestions: { 20: '8 Kg', 40: '15 Kg', 50: '20 Kg' } },
        { name: 'अंडा मसाला', price: 250, priceDisplay: '₹ 250', suggestions: { 20: '8 Kg', 40: '15 Kg', 50: '20 Kg' } }
    ]
};

// =============================================
// DISH NAME TRANSLATIONS (HINDI TO ENGLISH)
// =============================================
const dishTranslations = {
    'तेलाची मोठी पोळी': 'Telachi Mothi Poli',
    'फुलका रोटी': 'Fulka Roti',
    'अजवाइन पुरी': 'Ajwain Puri',
    'ज्वारी भाकर': 'Jwari Bhakar',
    'साधा राईस': 'Sadha Rice',
    'जिरा राईस': 'Jira Rice',
    'गार्लिक राईस': 'Garlic Rice',
    'व्हेज पुलाव': 'Veg Pulav',
    'मसाला भात': 'Masala Bhaat',
    'मूंग दाल खिचडी': 'Moong Dal Khichdi',
    'तुवर दाल खिचडी': 'Tuvar Dal Khichdi',
    'साधी दाल': 'Sadhi Dal',
    'जिरा दाल': 'Jira Dal',
    'दाल तडका': 'Dal Tadka',
    'दाल पालक': 'Dal Palak',
    'गुलाबजामून': 'Gulab Jamun',
    'चम चम': 'Cham Cham',
    'रसगुल्ला': 'Rasgulla',
    'कोशिंबीर': 'Kosimbir',
    'ग्रीन सलाद': 'Green Salad',
    'दाल चटणी': 'Dal Chutney',
    'ठेचा': 'Thecha',
    'व्हेज नूडल्स': 'Veg Noodles',
    'व्हेज मंचुरियन': 'Veg Manchurian',
    'व्हेज कटलेट': 'Veg Cutlet',
    'मिक्स व्हेज कोल्हापुरी': 'Mix Veg Kolhapuri',
    'भेंडी मसाला': 'Bhendi Masala',
    'पनीर बटर मसाला': 'Paneer Butter Masala',
    'मटर पनीर': 'Matar Paneer',
    'कढाई पनीर': 'Kadhai Paneer',
    'पालक पनीर': 'Palak Paneer',
    'लच्छा पनीर': 'Lachcha Paneer',
    'पनीर कोल्हापुरी': 'Paneer Kolhapuri',
    'मटण सावजी': 'Mutton Saoji',
    'मटण मसाला': 'Mutton Masala',
    'भूना मटण': 'Bhuna Mutton',
    'सावजी खूर': 'Saoji Khoor',
    'खिमा कलेजी': 'Khima Kaleji',
    'चिकन सावजी': 'Chicken Saoji',
    'चिकन मसाला': 'Chicken Masala',
    'बटर चिकन': 'Butter Chicken',
    'चिकन टिक्का मसाला': 'Chicken Tikka Masala',
    'अंडा करी': 'Anda Curry',
    'अंडा मसाला': 'Anda Masala'
};

// =============================================
// CONSTANTS & VARIABLES
// =============================================
const WHATSAPP_NUMBER = '919370002119';
let cart = {};
let isHinglish = false;

// =============================================
// HAMBURGER MENU FUNCTIONALITY
// =============================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenu = document.getElementById('closeMenu');
const menuItems = document.querySelectorAll('.menu-item');

// Open hamburger menu
hamburger.addEventListener('click', () => {
    hamburger.classList.add('active');
    mobileMenu.classList.add('active');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close hamburger menu function
function closeMenuHandler() {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close menu button
closeMenu.addEventListener('click', closeMenuHandler);

// Close menu when overlay is clicked
menuOverlay.addEventListener('click', closeMenuHandler);

// Close menu when menu item is clicked
menuItems.forEach(item => {
    item.addEventListener('click', closeMenuHandler);
});

// =============================================
// SCROLL TO CATEGORY FUNCTION
// =============================================
function scrollToCategory(categoryName) {
    closeMenuHandler();
    setTimeout(() => {
        const categoryElements = document.querySelectorAll('.section-title');
        for (let el of categoryElements) {
            if (el.textContent.trim() === categoryName) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            }
        }
    }, 300);
}

// =============================================
// LANGUAGE TOGGLE
// =============================================
function toggleLanguage() {
    isHinglish = !isHinglish;
    const langBtn = document.getElementById('langToggle');
    langBtn.textContent = isHinglish ? '🌐 English' : '🌐 मराठी';
    renderMenu();
    updateOrderSummary();
}

document.getElementById('langToggle').addEventListener('click', toggleLanguage);

// =============================================
// GET DISH DISPLAY NAME
// =============================================
function getDishName(hindiName) {
    if (!isHinglish) {
        return dishTranslations[hindiName] || hindiName;
    }
    return hindiName;
}

// =============================================
// RENDER MENU
// =============================================
function renderMenu() {
    const section = document.getElementById('menuSection');
    let html = '';

    Object.keys(categories).forEach(cat => {
        const items = categories[cat];
        if (!items || items.length === 0) return;

        html += `
            <div class="category-section">
                <div class="section-title">${cat}</div>
                <table class="menu-table">
                    <thead>
                        <tr>
                            <th>Menu</th>
                            <th>1 Kg Price</th>
                            <th colspan="3" style="text-align: center;">Suggestions</th>
                            <th>Qty</th>
                        </tr>
                        <tr>
                            <th colspan="2"></th>
                            <th class="suggestion-cell">20 People</th>
                            <th class="suggestion-cell">40 People</th>
                            <th class="suggestion-cell">50 People</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        items.forEach(item => {
            const currentQty = cart[item.name]?.quantity || 0;
            const displayName = getDishName(item.name);
            html += `
                <tr>
                    <td class="item-name">${displayName}</td>
                    <td class="item-price">${item.priceDisplay}</td>
                    <td class="suggestion-cell">${item.suggestions[20]}</td>
                    <td class="suggestion-cell">${item.suggestions[40]}</td>
                    <td class="suggestion-cell">${item.suggestions[50]}</td>
                    <td>
                        <div class="qty-controls">
                            <button class="qty-btn" onclick="decrementItem('${item.name.replace(/'/g, "\\'")}')">−</button>
                            <div class="qty-display" id="qty-${item.name}">${currentQty}</div>
                            <button class="qty-btn" onclick="incrementItem('${item.name.replace(/'/g, "\\'")}')">+</button>
                        </div>
                    </td>
                </tr>
            `;
        });

        html += `</tbody></table></div>`;
    });

    section.innerHTML = html;
}

// =============================================
// INCREMENT ITEM
// =============================================
function incrementItem(name) {
    if (!cart[name]) {
        let item = null;
        for (let cat in categories) {
            const found = categories[cat].find(i => i.name === name);
            if (found) {
                item = found;
                break;
            }
        }
        if (!item) return;
        cart[name] = { ...item, quantity: 0 };
    }
    cart[name].quantity++;
    updateUI();
}

// =============================================
// DECREMENT ITEM
// =============================================
function decrementItem(name) {
    if (cart[name]) {
        cart[name].quantity--;
        if (cart[name].quantity <= 0) delete cart[name];
    }
    updateUI();
}

// =============================================
// UPDATE UI
// =============================================
function updateUI() {
    for (let cat in categories) {
        categories[cat].forEach(item => {
            const qty = cart[item.name]?.quantity || 0;
            const el = document.getElementById(`qty-${item.name}`);
            if (el) el.textContent = qty;
        });
    }
    updateOrderSummary();
}

// =============================================
// UPDATE ORDER SUMMARY
// =============================================
function updateOrderSummary() {
    const items = Object.values(cart).filter(i => i.quantity > 0);
    const orderItems = document.getElementById('orderItems');
    const orderTotal = document.getElementById('orderTotal');
    const whatsappBtn = document.getElementById('whatsappBtn');
    const clearBtn = document.getElementById('clearBtn');
    let total = 0;

    if (items.length === 0) {
        orderItems.innerHTML = `
            <div class="order-empty">
                <div class="order-empty-icon">🛒</div>
                <p>No items added</p>
            </div>
        `;
        whatsappBtn.disabled = true;
        clearBtn.style.display = 'none';
        orderTotal.textContent = '₹0';
        return;
    }

    let html = '';
    items.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        const displayName = getDishName(item.name);
        html += `
            <div class="order-item">
                <div class="order-item-name">${displayName}</div>
                <div style="display: flex; gap: 8px; align-items: center;">
                    <div class="order-item-qty">${item.quantity} kg</div>
                    <div class="order-item-price">₹${subtotal}</div>
                </div>
            </div>
        `;
    });

    orderItems.innerHTML = html;
    orderTotal.textContent = `₹${total}`;
    whatsappBtn.disabled = false;
    clearBtn.style.display = 'block';
}

// =============================================
// SEND WHATSAPP ORDER
// =============================================
function sendWhatsappOrder() {
    const items = Object.values(cart).filter(i => i.quantity > 0);
    if (items.length === 0) {
        alert('Please add items');
        return;
    }

    let msg = '🍽️ *Raj Kitchen Order*\n\n';
    let total = 0;

    items.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        msg += `• ${item.name}\n   ${item.quantity} kg × ₹${item.price} = ₹${subtotal}\n\n`;
    });

    msg += `\n*Total: ₹${total}*\n\nPlease confirm availability and delivery.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// =============================================
// EVENT LISTENERS
// =============================================
document.getElementById('whatsappBtn').addEventListener('click', sendWhatsappOrder);

document.getElementById('clearBtn').addEventListener('click', () => {
    cart = {};
    updateUI();
});

// =============================================
// INITIALIZE
// =============================================
document.addEventListener('DOMContentLoaded', renderMenu);