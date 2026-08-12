// Data Store for Carrick Group Website (EN & VI Translations, Schools & Services)

const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      schools: "UK School Finder",
      calculator: "Budget Calculator",
      offices: "Our Offices",
      contact: "Book Consultation",
      tagline: "Premier UK Education & Relocation Advisory"
    },
    hero: {
      badge: "🇬🇧 Trusted UK Education & Relocation Experts",
      title: "Gateway to Elite UK Education & Relocation for Vietnamese Families",
      subtitle: "Personalized placement in top UK boarding schools, universities, luxury student accommodation, and end-to-end relocation advisory led by Anh Đào Carrick (BA, PG Cert, MA, FCCA).",
      ctaPrimary: "Book Consultation",
      ctaSecondary: "Explore UK Schools",
      stat1Number: "100%",
      stat1Label: "UK School & Visa Success",
      stat2Number: "50+",
      stat2Label: "Partner Institutions",
      stat3Number: "15+ Yrs",
      stat3Label: "UK Financial & Education Expertise"
    },
    about: {
      badge: "Meet The Director",
      title: "Anh Đào Carrick",
      subtitle: "BA, PG Cert, MA, FCCA | Managing Director",
      bio1: "Anh Đào Carrick is a distinguished Fellow of the Association of Chartered Certified Accountants (FCCA) and holds advanced postgraduate degrees from prestigious UK institutions. Based between London and Hanoi, she bridges British educational excellence with the aspirations of Vietnamese families.",
      bio2: "With deep expertise in UK finance, property investment, and school admissions, Mrs. Carrick provides a bespoke, transparent advisory service — guiding students from school selection to university graduation, guardianship, and family wealth management.",
      qualification1: "FCCA Chartered Certified Accountant (UK)",
      qualification2: "UK Independent School & University Admissions Strategist",
      qualification3: "Dual UK & Vietnam Headquarters for On-The-Ground Support",
      qualification4: "Comprehensive Relocation, Tax & Accommodation Concierge"
    },
    services: {
      badge: "Our Expertise",
      title: "Comprehensive Services for UK Excellence",
      subtitle: "Tailored solutions for parents wanting the very best for their children in the UK.",
      card1Title: "Boarding & Independent Schools",
      card1Desc: "Admissions strategy, interview preparation, and placement into premier UK independent preparatory & boarding schools (A-Levels & GCSE).",
      card2Title: "University Admissions & Oxbridge",
      card2Desc: "Strategic guidance for Russell Group, Oxbridge, and top UK universities, personal statement refinement, and commission-backed application support.",
      card3Title: "Luxury Student Accommodation",
      card3Desc: "Securing premium student apartments, safe homestays, and family luxury residential properties in central London and university towns.",
      card4Title: "Guardianship & Concierge",
      card4Desc: "Official UK student guardianship, emergency care, airport transfers, academic tracking, and peace of mind for parents in Vietnam.",
      card5Title: "Visa & Financial Planning",
      card5Desc: "Student & Investor Visa guidance, cross-border tax advice, tuition payment solutions, and UK banking setup leveraging FCCA expertise."
    },
    schoolsSection: {
      badge: "Direct Pathways",
      title: "Featured UK Schools & Universities",
      subtitle: "Discover elite institutions supported by Carrick Group advisory.",
      filterAll: "All Levels",
      filterBoarding: "Boarding / GCSE / A-Level",
      filterUni: "Universities",
      filterFoundation: "Foundation Pathways",
      searchPlaceholder: "Search school name or city..."
    },
    calculator: {
      badge: "Plan Your Investment",
      title: "UK Study & Relocation Cost Estimator",
      subtitle: "Estimate tuition fees, accommodation, and living costs tailored to your child's educational pathway.",
      levelLabel: "Educational Level:",
      locationLabel: "Preferred Location:",
      housingLabel: "Accommodation Type:",
      totalEst: "Estimated Annual Investment:",
      tuitionPart: "Tuition Fees:",
      livingPart: "Accommodation & Living:",
      disclaimer: "*Estimates are indicative. Exact fees depend on institution choice, course, and individual lifestyle."
    },
    offices: {
      badge: "Global Reach",
      title: "Visit Our London & Hanoi Offices",
      subtitle: "We provide seamless, on-the-ground support in both the UK and Vietnam.",
      londonHead: "London Head Office",
      londonAddr: "192 Woodseer Street, London, E1 5HQ, United Kingdom",
      londonBranch: "C&T Accountants Office",
      londonBranchAddr: "85 Tooting High Street, London, SW17 0SU",
      hanoiHead: "Hanoi Head Office",
      hanoiHeadAddr: "No.28 (3B5), 28B Dien Bien Phu Str, Ba Dinh Ward, Hanoi, Vietnam",
      hanoiBiz: "Hanoi Business Office",
      hanoiBizAddr: "100 Dong Co Str, Tay Ho Ward, Hanoi, Vietnam",
      phoneUK: "UK Phone / WhatsApp / Viber / Zalo:",
      phoneVN: "Vietnam Phone:",
      email: "Email Enquiries:"
    },
    footer: {
      rights: "© 2026 Carrick Investment Co., Ltd. All Rights Reserved.",
      regNo: "Registered in England & Wales & Vietnam | Director: Anh Đào Carrick (FCCA)"
    },
    modal: {
      title: "Book a Private Consultation",
      subtitle: "Speak directly with Anh Đào Carrick and our UK education specialists.",
      nameLabel: "Parent / Student Name *",
      phoneLabel: "Phone / Zalo / WhatsApp *",
      emailLabel: "Email Address *",
      serviceLabel: "Primary Service Needed",
      serviceOption1: "Boarding School / A-Levels Placement",
      serviceOption2: "UK University Application",
      serviceOption3: "Student Accommodation Search",
      serviceOption4: "Guardianship & Full Concierge",
      messageLabel: "Tell us about your child's goals",
      submitBtn: "Submit Inquiry via WhatsApp / Email"
    }
  },
  vi: {
    nav: {
      home: "Trang chủ",
      about: "Về Anh Đào Carrick",
      services: "Dịch vụ",
      schools: "Tìm Trường Anh Quốc",
      calculator: "Tính Chi Phí Du Học",
      offices: "Văn phòng",
      contact: "Đặt Lịch Tư Vấn",
      tagline: "Tư Vấn Du Học & Định Cư Anh Quốc Hàng Đầu"
    },
    hero: {
      badge: "🇬🇧 Chuyên Gia Du Học & Định Cư Anh Quốc Cho Gia Đình Việt",
      title: "Cầu Nối Giáo Dục Đẳng Cấp & Định Cư Anh Quốc Cho Gia Đình Việt Nam",
      subtitle: "Tư vấn lộ trình du học tư thục, nội trú, đại học hàng đầu, hỗ trợ nhà ở cao cấp và dịch vụ định cư trọn gói do bà Anh Đào Carrick (BA, PG Cert, MA, FCCA) trực tiếp điều hành.",
      ctaPrimary: "Đăng Ký Tư Vấn Trực Tiếp",
      ctaSecondary: "Khám Phá Trường Anh Quốc",
      stat1Number: "100%",
      stat1Label: "Tỷ Lệ Đạt Visa & Nhập Học",
      stat2Number: "50+",
      stat2Label: "Trường Đối Tác Hàng Đầu",
      stat3Number: "15+ Năm",
      stat3Label: "Kinh Nghiệm Tài Chính & Giáo Dục UK"
    },
    about: {
      badge: "Giám Đốc Điều Hành",
      title: "Bà Anh Đào Carrick",
      subtitle: "BA, PG Cert, MA, FCCA | Giám Đốc",
      bio1: "Bà Anh Đào Carrick là Hội viên Hiệp hội Kế toán Giảng dạy Anh Quốc (FCCA), sở hữu các bằng Thạc sĩ và Chứng chỉ Cao cấp từ các viện giáo dục uy tín tại Vương Quốc Anh. Hoạt động song song tại London và Hà Nội, bà là cầu nối tin cậy đưa con em các gia đình Việt Nam đến với nền giáo dục tinh hoa Anh Quốc.",
      bio2: "Với bề dày kinh nghiệm trong lĩnh vực tài chính, bất động sản và tư vấn tuyển sinh tại Anh, bà Anh Đào Carrick mang đến dịch vụ tư vấn cá nhân hóa, minh bạch — đồng hành cùng học sinh từ khâu chọn trường, nộp hồ sơ đại học, bảo hộ đến tư vấn tài chính cho gia đình.",
      qualification1: "Kế toán viên Công chứng Chuyên nghiệp Anh Quốc (FCCA)",
      qualification2: "Chuyên gia Chiến lược Tuyển sinh Trường Nội trú & Đại học UK",
      qualification3: "Hệ thống Văn phòng Trực tiếp tại London & Hà Nội",
      qualification4: "Dịch vụ Trọn gói: Định cư, Thuế, Nhà ở & Người Giám hộ"
    },
    services: {
      badge: "Dịch Vụ Chuyên Nghiệp",
      title: "Giải Pháp Toàn Diện Cho Học Sinh Việt Tại Anh Quốc",
      subtitle: "Dành riêng cho Quý phụ huynh mong muốn mang lại môi trường học tập và sinh hoạt tốt nhất cho con em.",
      card1Title: "Trường Nội Trú & Phổ Thông Tư Thục",
      card1Desc: "Tư vấn chiến lược nộp hồ sơ, luyện phỏng vấn và nhập học các trường nội trú top đầu Anh Quốc (chương trình GCSE & A-Levels).",
      card2Title: "Đại Học Hàng Đầu & Oxbridge",
      card2Desc: "Tư vấn hồ sơ ứng tuyển nhóm trường Russell Group, Oxford, Cambridge; chỉnh sửa luận văn cá nhân và định hướng học bổng.",
      card3Title: "Bất Động Sản & Nơi Ở Sinh Viên",
      card3Desc: "Tìm kiếm căn hộ cao cấp, ở cùng gia đình bản xứ (Homestay) an toàn hoặc tư vấn mua/thuê nhà cho gia đình tại London và các thành phố du học.",
      card4Title: "Người Giám Hộ & Hỗ Trợ Sinh Hoạt",
      card4Desc: "Đại diện giám hộ pháp lý tại Anh, đưa đón sân bay, theo dõi kết quả học tập và chăm sóc khẩn cấp 24/7 giúp phụ huynh yên tâm.",
      card5Title: "Tư Vấn Visa & Tài Chính Du Học",
      card5Desc: "Hướng dẫn thủ tục Visa du học/định cư, tư vấn kế hoạch chuyển tiền học phí, thuế liên quốc gia và mở tài khoản ngân hàng Anh Quốc."
    },
    schoolsSection: {
      badge: "Hệ Thống Giáo Dục",
      title: "Danh Sách Trường & Đại Học Tiêu Biểu",
      subtitle: "Khám phá các cơ sở giáo dục chất lượng được Carrick Group hỗ trợ trực tiếp.",
      filterAll: "Tất Cả Cấp Học",
      filterBoarding: "Trường Nội Trú / A-Levels",
      filterUni: "Đại Học Top UK",
      filterFoundation: "Dự Bị Đại Học",
      searchPlaceholder: "Tìm theo tên trường hoặc thành phố..."
    },
    calculator: {
      badge: "Dự Toán Ngân Sách",
      title: "Công Cụ Tính Chi Phí Du Học & Định Cư",
      subtitle: "Dự toán chi phí học phí, sinh hoạt và nhà ở phù hợp với bậc học của con Quý vị.",
      levelLabel: "Bậc Học Mong Muốn:",
      locationLabel: "Khu Vực Học Tập:",
      housingLabel: "Hình Thức Ở:",
      totalEst: "Ước Tính Tổng Chi Phí hàng Năm:",
      tuitionPart: "Học Phí Ước Tính:",
      livingPart: "Nhà Ở & Sinh Hoạt Chi Phí:",
      disclaimer: "*Số liệu mang tính chất tham khảo. Chi phí thực tế phụ thuộc vào ngành học, trường và chi tiêu cá nhân."
    },
    offices: {
      badge: "Mạng Lưới Trực Tiếp",
      title: "Hệ Thống Văn Phòng London & Hà Nội",
      subtitle: "Hỗ trợ trực tiếp 24/7 cho phụ huynh và học sinh cả ở Việt Nam và Vương Quốc Anh.",
      londonHead: "Trụ Sở Chính Tại London",
      londonAddr: "192 Woodseer Street, London, E1 5HQ, Vương Quốc Anh",
      londonBranch: "Văn Phòng C&T Accountants",
      londonBranchAddr: "85 Tooting High Street, London, SW17 0SU, Vương Quốc Anh",
      hanoiHead: "Trụ Sở Chính Tại Hà Nội",
      hanoiHeadAddr: "Số 28 (Dãy B5), 28B Điện Biên Phủ, P. Điện Biên, Q. Ba Đình, Hà Nội",
      hanoiBiz: "Văn Phòng Kinh Doanh Hà Nội",
      hanoiBizAddr: "100 Đồng Cổ, P. Bưởi, Q. Tây Hồ, Hà Nội",
      phoneUK: "Điện thoại / WhatsApp / Viber / Zalo (UK):",
      phoneVN: "Điện thoại tại Việt Nam:",
      email: "Email Liên Hệ:"
    },
    footer: {
      rights: "© 2026 Công Ty TNHH Đầu Tư Carrick (Carrick Investment Co., Ltd). Bảo lưu mọi quyền.",
      regNo: "Đăng ký kinh doanh tại Anh Quốc & Việt Nam | Giám đốc: Anh Đào Carrick (FCCA)"
    },
    modal: {
      title: "Đăng Ký Tư Vấn Trực Tiếp",
      subtitle: "Trao đổi 1:1 cùng Bà Anh Đào Carrick và chuyên gia giáo dục Anh Quốc.",
      nameLabel: "Họ và Tên Phụ Huynh / Học Sinh *",
      phoneLabel: "Số Điện Thoại / Zalo / WhatsApp *",
      emailLabel: "Địa Chỉ Email *",
      serviceLabel: "Dịch Vụ Cần Tư Vấn Chính",
      serviceOption1: "Xin Học Trường Nội Trú / A-Levels",
      serviceOption2: "Nộp Hồ Sơ Đại Học Top UK",
      serviceOption3: "Tìm Nhà Ở / Căn Hộ Du Học",
      serviceOption4: "Người Giám Hộ & Trọn Gói Định Cư",
      messageLabel: "Nhu cầu cụ thể hoặc câu hỏi của Quý vị",
      submitBtn: "Gửi Yêu Cầu Qua Zalo / WhatsApp / Email"
    }
  }
};

const SCHOOLS_DATA = [
  {
    id: 1,
    name: "Eton College / Harrow School (A-Level / GCSE)",
    nameVi: "Trường Nội Trú Eton / Harrow (Bậc A-Level)",
    category: "boarding",
    location: "Windsor / London, UK",
    tuition: "£45,000 - £52,000 / year",
    description: "World-renowned British independent boarding schools for academic excellence & leadership.",
    descriptionVi: "Hệ thống trường nội trú tư thục danh tiếng bậc nhất Anh Quốc, nôi đào tạo các nhà lãnh đạo thế giới.",
    tags: ["Boarding", "A-Levels", "Oxford/Cambridge Prep"],
    image: "assets/boarding-school.jpg"
  },
  {
    id: 2,
    name: "University of Oxford & Cambridge",
    nameVi: "Đại Học Oxford & Cambridge",
    category: "uni",
    location: "Oxford / Cambridge, UK",
    tuition: "£33,000 - £48,000 / year",
    description: "Top global university preparation, Oxbridge mock interview coaching, and admissions strategy.",
    descriptionVi: "Tư vấn chiến lược nộp hồ sơ, phỏng vấn thử và xin học bổng các trường Đại học Hàng đầu Thế giới.",
    tags: ["Oxbridge", "Top 10 Global", "Undergraduate / Postgrad"],
    image: "assets/hero-bg.jpg"
  },
  {
    id: 3,
    name: "Imperial College & UCL London",
    nameVi: "Đại Học Imperial College & UCL London",
    category: "uni",
    location: "Central London, UK",
    tuition: "£31,000 - £44,000 / year",
    description: "Leading science, engineering, business, and medicine degree pathways in the heart of London.",
    descriptionVi: "Đại học hàng đầu thế giới về Khoa học, Kinh tế và Y khoa tại trung tâm thủ đô London.",
    tags: ["London", "Russell Group", "Engineering & Biz"],
    image: "assets/hero-bg.jpg"
  },
  {
    id: 4,
    name: "Cathedral & Concord College UK",
    nameVi: "Trường Nội Trú Concord College & Millfield",
    category: "boarding",
    location: "Shropshire / Somerset, UK",
    tuition: "£39,000 - £47,000 / year",
    description: "Premier international boarding schools known for outstanding STEM & Medical school acceptance rates.",
    descriptionVi: "Trường nội trú hàng đầu cho học sinh chuyên STEM và chuẩn bị bước vào ngành Y tại Anh.",
    tags: ["STEM", "High GCSE Pass", "International Friendly"],
    image: "assets/boarding-school.jpg"
  },
  {
    id: 5,
    name: "UK Top University Foundation Pathways",
    nameVi: "Chương Trình Dự Bị Đại Học (Foundation)",
    category: "foundation",
    location: "London, Manchester, Edinburgh",
    tuition: "£18,000 - £24,000 / year",
    description: "Direct bridge program for Vietnamese high school graduates into UK Bachelor's degree Year 1.",
    descriptionVi: "Chương trình chuyển tiếp lý tưởng dành cho học sinh tốt nghiệp THPT tại Việt Nam sang ĐH Anh Quốc.",
    tags: ["Fast-Track", "Direct Entry", "Bilingual Support"],
    image: "assets/consultation.jpg"
  },
  {
    id: 6,
    name: "Central London Luxury Student Living",
    nameVi: "Căn Hộ Du Học Sinh Cao Cấp Trung Tâm London",
    category: "foundation",
    location: "Mayfair, Bloomsbury, Kensington",
    tuition: "£350 - £800 / week",
    description: "Luxury student residences with 24/7 security, gym, study suites, and proximity to universities.",
    descriptionVi: "Dịch vụ tìm kiếm căn hộ dịch vụ cao cấp, an ninh 24/7 gần các trường Đại học tại London.",
    tags: ["Housing", "London Central", "Concierge"],
    image: "assets/accommodation.jpg"
  }
];
