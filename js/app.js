// Carrick Group Website Main Application Logic

let currentLang = localStorage.getItem('carrick_lang') || 'vi'; // Default to Vietnamese for target audience

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initModal();
  initMobileMenu();
});

// Language Switcher System
function initLanguage() {
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'vi' : 'en';
      localStorage.setItem('carrick_lang', currentLang);
      applyLanguage();
    });
  }
  applyLanguage();
}

function applyLanguage() {
  const t = TRANSLATIONS[currentLang];
  if (!t) return;

  // Update HTML lang attribute
  document.documentElement.lang = currentLang;

  // Update button text to clearly hint the user to switch to their language
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.innerHTML = currentLang === 'en' 
      ? `🇻🇳 <span>Chuyển sang Tiếng Việt</span>` 
      : `🇬🇧 <span>Switch to English</span>`;
    langToggleBtn.title = currentLang === 'en'
      ? 'Chuyển đổi giao diện sang Tiếng Việt'
      : 'Switch website interface to English';
  }

  // Update all elements with data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const keyPath = elem.getAttribute('data-i18n').split('.');
    let val = t;
    for (const key of keyPath) {
      if (val && val[key]) {
        val = val[key];
      } else {
        val = null;
        break;
      }
    }
    if (val) {
      if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
        elem.placeholder = val;
      } else {
        elem.innerHTML = val;
      }
    }
  });
}

// Modal System with 2 Separate Direct Channels
function initModal() {
  const modal = document.getElementById('consultation-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  const btnWa = document.getElementById('modal-submit-wa');
  const btnZalo = document.getElementById('modal-submit-zalo');

  if (btnWa) {
    btnWa.addEventListener('click', (e) => {
      e.preventDefault();
      sendInquiry('wa');
    });
  }

  if (btnZalo) {
    btnZalo.addEventListener('click', (e) => {
      e.preventDefault();
      sendInquiry('zalo');
    });
  }
}

function sendInquiry(channel) {
  const name = document.getElementById('modal-name')?.value || '';
  const phone = document.getElementById('modal-phone')?.value || '';
  const email = document.getElementById('modal-email')?.value || '';
  const service = document.getElementById('modal-service')?.value || '';
  const message = document.getElementById('modal-message')?.value || '';

  const text = `Họ tên: ${name}%0ASĐT: ${phone}%0AEmail: ${email}%0ADịch vụ: ${service}%0ANội dung: ${message}`;
  
  if (channel === 'wa') {
    window.open(`https://wa.me/447490130207?text=${text}`, '_blank');
  } else {
    window.open(`https://zalo.me/84949686098`, '_blank');
  }

  const modal = document.getElementById('consultation-modal');
  if (modal) modal.classList.remove('active');
}

function openConsultationModal(presetTopic = '') {
  const modal = document.getElementById('consultation-modal');
  if (modal) {
    modal.classList.add('active');
    if (presetTopic) {
      const msgElem = document.getElementById('modal-message');
      if (msgElem) {
        msgElem.value = currentLang === 'vi' 
          ? `Tôi muốn hỏi thêm thông tin về: ${presetTopic}` 
          : `Enquiry regarding: ${presetTopic}`;
      }
    }
  }
}

function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
}
