// Carrick Group Website Main Application Logic

let currentLang = localStorage.getItem('carrick_lang') || 'vi'; // Default to Vietnamese for target audience

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  renderSchools('all');
  initFilterButtons();
  initCalculator();
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

  // Update button text
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.innerHTML = currentLang === 'en' 
      ? `🇻🇳 <span>Tiếng Việt</span>` 
      : `🇬🇧 <span>English</span>`;
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

  // Re-render schools to update card titles & descriptions in chosen language
  const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
  renderSchools(activeFilter);
  updateCalculatorResult();
}

// School Finder Filter
function renderSchools(filter = 'all', searchQuery = '') {
  const grid = document.getElementById('schools-grid');
  if (!grid) return;

  const t = TRANSLATIONS[currentLang];
  
  const filtered = SCHOOLS_DATA.filter(item => {
    const matchCategory = filter === 'all' || item.category === filter;
    const name = (currentLang === 'vi' ? item.nameVi : item.name).toLowerCase();
    const desc = (currentLang === 'vi' ? item.descriptionVi : item.description).toLowerCase();
    const matchSearch = !searchQuery || name.includes(searchQuery.toLowerCase()) || desc.includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="no-results">${currentLang === 'vi' ? 'Không tìm thấy trường phù hợp.' : 'No matching schools found.'}</div>`;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const title = currentLang === 'vi' ? item.nameVi : item.name;
    const desc = currentLang === 'vi' ? item.descriptionVi : item.description;
    
    return `
      <div class="school-card glass-card">
        <div class="card-img-container">
          <img src="${item.image}" alt="${title}" loading="lazy" />
          <span class="card-tag">${item.tags[0]}</span>
        </div>
        <div class="card-content">
          <div class="card-location">📍 ${item.location}</div>
          <h3>${title}</h3>
          <p>${desc}</p>
          <div class="card-tuition">🏷️ ${item.tuition}</div>
          <div class="card-actions">
            <button class="btn btn-outline-gold btn-sm" onclick="openConsultationModal('${title}')">
              ${currentLang === 'vi' ? 'Tư Vấn Ngay' : 'Inquire Now'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function initFilterButtons() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      buttons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const filter = e.target.dataset.filter;
      const searchVal = document.getElementById('school-search-input')?.value || '';
      renderSchools(filter, searchVal);
    });
  });

  const searchInput = document.getElementById('school-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
      renderSchools(activeFilter, e.target.value);
    });
  }
}

// Cost Calculator System
function initCalculator() {
  const levelSelect = document.getElementById('calc-level');
  const locationSelect = document.getElementById('calc-location');
  const housingSelect = document.getElementById('calc-housing');

  if (levelSelect && locationSelect && housingSelect) {
    [levelSelect, locationSelect, housingSelect].forEach(select => {
      select.addEventListener('change', updateCalculatorResult);
    });
  }
}

function updateCalculatorResult() {
  const level = document.getElementById('calc-level')?.value || 'boarding';
  const location = document.getElementById('calc-location')?.value || 'london';
  const housing = document.getElementById('calc-housing')?.value || 'boarding';

  let tuitionGBP = 35000;
  let livingGBP = 15000;

  if (level === 'boarding') {
    tuitionGBP = 44000;
  } else if (level === 'uni') {
    tuitionGBP = 32000;
  } else if (level === 'foundation') {
    tuitionGBP = 21000;
  }

  if (location === 'london') {
    livingGBP += 5000;
  }

  if (housing === 'luxury') {
    livingGBP += 8000;
  } else if (housing === 'homestay') {
    livingGBP -= 2000;
  }

  const totalGBP = tuitionGBP + livingGBP;
  const totalVND = (totalGBP * 32000).toLocaleString('vi-VN'); // Approx 1 GBP = ~32,000 VND

  const resTuition = document.getElementById('res-tuition');
  const resLiving = document.getElementById('res-living');
  const resTotal = document.getElementById('res-total');

  if (resTuition) resTuition.textContent = `£${tuitionGBP.toLocaleString()} / yr`;
  if (resLiving) resLiving.textContent = `£${livingGBP.toLocaleString()} / yr`;
  if (resTotal) {
    resTotal.innerHTML = `£${totalGBP.toLocaleString()} <span class="vnd-sub">(~${totalVND} VNĐ)</span>`;
  }
}

// Modal System
function initModal() {
  const modal = document.getElementById('consultation-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const form = document.getElementById('consultation-form');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modal-name')?.value;
      const phone = document.getElementById('modal-phone')?.value;
      const email = document.getElementById('modal-email')?.value;
      const service = document.getElementById('modal-service')?.value;
      const message = document.getElementById('modal-message')?.value;

      const text = `Họ tên: ${name}%0ASĐT: ${phone}%0AEmail: ${email}%0ADịch vụ: ${service}%0AGhi chú: ${message}`;
      
      // Open WhatsApp or Zalo direct trigger
      window.open(`https://wa.me/447490130207?text=${text}`, '_blank');
      modal.classList.remove('active');
    });
  }
}

function openConsultationModal(presetTopic = '') {
  const modal = document.getElementById('consultation-modal');
  if (modal) {
    modal.classList.add('active');
    if (presetTopic) {
      const msgElem = document.getElementById('modal-message');
      if (msgElem) {
        msgElem.value = currentLang === 'vi' 
          ? `Tôi quan tâm đến: ${presetTopic}` 
          : `Interested in: ${presetTopic}`;
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
