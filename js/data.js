// Data Store for Carrick Group Website (100% Genuine EN & VI Content)

const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      pathways: "UK Pathways",
      offices: "Our Offices",
      contact: "Contact Us",
      tagline: "UK Education & Relocation Advisory"
    },
    hero: {
      badge: "🇬🇧 Professional UK Advisory",
      title: "Educational Advisory & Relocation Services for Vietnamese Families",
      subtitle: "Personalized guidance for UK school & university admissions, student accommodation, and relocation assistance led by Anh Đào Carrick (BA, PG Cert, MA, FCCA).",
      ctaWhatsApp: "💬 Chat on WhatsApp",
      ctaZalo: "💬 Chat on Zalo",
      ctaSecondary: "View Services",
      stat1Title: "UK & Vietnam Presence",
      stat1Desc: "Offices in London & Hanoi",
      stat2Title: "Tailored Guidance",
      stat2Desc: "School & University Applications",
      stat3Title: "Full Assistance",
      stat3Desc: "Housing, Visas & Guardianship"
    },
    about: {
      badge: "Director Profile",
      title: "Anh Đào Carrick",
      subtitle: "BA, PG Cert, MA, FCCA | Director",
      bio1: "Anh Đào Carrick is a Fellow of the Association of Chartered Certified Accountants (FCCA) with postgraduate qualifications from leading UK academic institutions. Based in London and Hanoi, she assists Vietnamese families navigating the UK education and relocation landscape.",
      bio2: "Combining extensive background in financial advisory, property investment, and education, Mrs. Carrick provides clear, independent guidance to help students transition smoothly into British academic and daily life.",
      qualification1: "FCCA Chartered Certified Accountant (UK)",
      qualification2: "UK Boarding School & University Application Guidance",
      qualification3: "Dual Headquarters in London & Hanoi for On-Ground Support",
      qualification4: "Student Accommodation & Family Relocation Support"
    },
    services: {
      badge: "Our Core Services",
      title: "Services Offered",
      subtitle: "Transparent and dedicated support throughout every stage of your child's UK education.",
      card1Title: "Independent & Boarding School Placement",
      card1Desc: "Assistance with selecting and applying to UK independent preparatory and boarding schools (GCSE & A-Levels).",
      card2Title: "University Admissions Support",
      card2Desc: "Guidance on application processes, personal statements, and course selection for UK universities.",
      card3Title: "Student Accommodation & Housing",
      card3Desc: "Assistance finding suitable student housing, homestays, and residential rentals in London and major UK university cities.",
      card4Title: "Guardianship & Local Support",
      card4Desc: "Arranging UK guardianship services, local contact points, and emergency support for young students away from home.",
      card5Title: "Relocation & Financial Advisory",
      card5Desc: "Guidance on UK student visas, banking setup, tuition payment logistics, and cross-border financial planning."
    },
    pathways: {
      badge: "Academic Stages",
      title: "UK Educational Pathways We Support",
      subtitle: "Overview of key academic entry points for international students in the UK.",
      p1Title: "Boarding & Senior Schools (A-Levels / GCSE)",
      p1Desc: "For students aged 11–18 seeking British private boarding school education to prepare for top UK universities.",
      p2Title: "University Foundation Pathways",
      p2Desc: "Bridge programs for Vietnamese high school graduates transitioning into UK undergraduate degree courses.",
      p3Title: "Undergraduate Degrees (Bachelor's)",
      p3Desc: "Direct application assistance for 3-year UK Bachelor's degree programs across leading institutions.",
      p4Title: "Postgraduate & Master's Degrees",
      p4Desc: "Application guidance for Master's programs, professional qualifications, and postgraduate studies.",
      p5Title: "Student & Family Relocation",
      p5Desc: "Comprehensive assistance with short and long-term accommodation, airport pickup, and local settling-in."
    },
    offices: {
      badge: "Contact & Locations",
      title: "London & Hanoi Office Locations",
      subtitle: "Get in touch with our team directly in the UK or Vietnam.",
      londonHead: "London Head Office",
      londonAddr: "192 Woodseer Street, London, E1 5HQ, United Kingdom",
      londonBranch: "C&T Accountants Office",
      londonBranchAddr: "85 Tooting High Street, London, SW17 0SU, United Kingdom",
      hanoiHead: "Hanoi Head Office",
      hanoiHeadAddr: "No.3, B5 House, TTQD 28 Dien Bien Phu Str, Ba Dinh Ward, Hanoi, Vietnam",
      hanoiBiz: "Hanoi Business Office",
      hanoiBizAddr: "No. 125, Group 35, Cluster 7, Tay Ho Ward, Hanoi, Vietnam",
      phoneUK: "UK Phone / WhatsApp / Viber / Zalo:",
      phoneVN: "Vietnam Phone / WhatsApp / Viber / Zalo:",
      email: "Email Enquiries:"
    },
    footer: {
      rights: "© 2026 Carrick Investment Co., Ltd. All Rights Reserved.",
      regNo: "Carrick Investment Co., Ltd | Director: Anh Đào Carrick (FCCA)"
    },
    modal: {
      title: "Contact Carrick Group",
      subtitle: "Send an enquiry directly to Anh Đào Carrick.",
      nameLabel: "Your Name *",
      phoneLabel: "Phone / Zalo / WhatsApp *",
      emailLabel: "Email Address *",
      serviceLabel: "Service of Interest",
      serviceOption1: "Boarding School Placement",
      serviceOption2: "University Admissions",
      serviceOption3: "Student Housing / Accommodation",
      serviceOption4: "Guardianship & Relocation",
      messageLabel: "Your Enquiry",
      submitWhatsApp: "💬 Send via WhatsApp",
      submitZalo: "💬 Send via Zalo"
    }
  },
  vi: {
    nav: {
      home: "Trang chủ",
      about: "Giới thiệu",
      services: "Dịch vụ",
      pathways: "Lộ trình du học",
      offices: "Văn phòng",
      contact: "Liên Hệ",
      tagline: "Tư Vấn Du Học & Định Cư UK"
    },
    hero: {
      badge: "🇬🇧 Tư Vấn Du Học & Định Cư Anh Quốc",
      title: "Dịch Vụ Tư Vấn Du Học & Hỗ Trợ Định Cư Anh Quốc",
      subtitle: "Tư vấn lộ trình du học trường tư thục, đại học, tìm kiếm nơi ở sinh viên và hỗ trợ định cư trọn gói do bà Anh Đào Carrick (BA, PG Cert, MA, FCCA) trực tiếp tư vấn.",
      ctaWhatsApp: "💬 Chat qua WhatsApp",
      ctaZalo: "💬 Chat qua Zalo",
      ctaSecondary: "Xem Dịch Vụ",
      stat1Title: "Hiện Diện Song Song",
      stat1Desc: "Văn phòng tại London & Hà Nội",
      stat2Title: "Tư Vấn Cá Nhân Hóa",
      stat2Desc: "Hồ sơ trường phổ thông & đại học",
      stat3Title: "Hỗ Trợ Trọn Gói",
      stat3Desc: "Nhà ở, Visa & Người giám hộ"
    },
    about: {
      badge: "Giám Đốc Điều Hành",
      title: "Bà Anh Đào Carrick",
      subtitle: "BA, PG Cert, MA, FCCA | Giám Đốc",
      bio1: "Bà Anh Đào Carrick là Hội viên Hiệp hội Kế toán Giảng dạy Anh Quốc (FCCA), sở hữu các bằng Thạc sĩ và Chứng chỉ Cao cấp từ các viện giáo dục uy tín tại Vương Quốc Anh. Hoạt động song song tại London và Hà Nội, bà tư vấn trực tiếp cho các phụ huynh và học sinh Việt Nam mong muốn học tập và sinh sống tại Anh Quốc.",
      bio2: "Với kinh nghiệm chuyên sâu trong tài chính, bất động sản và tư vấn du học, bà Carrick cung cấp thông tin minh bạch, độc lập — giúp học sinh chuẩn bị tốt nhất cho quá trình học tập và sinh hoạt tại Vương Quốc Anh.",
      qualification1: "Kế toán viên Công chứng Chuyên nghiệp Anh Quốc (FCCA)",
      qualification2: "Tư vấn Trực tiếp Hồ sơ Trường Tư thục & Đại học UK",
      qualification3: "Hệ thống Văn phòng Trực tiếp tại London & Hà Nội",
      qualification4: "Hỗ trợ Tìm Nhà ở, Visa & Người Giám hộ tại Anh"
    },
    services: {
      badge: "Dịch Vụ Chính",
      title: "Các Dịch Vụ Cung Cấp",
      subtitle: "Đồng hành minh bạch và tận tâm cùng gia đình trong suốt quá trình du học.",
      card1Title: "Trường Nội Trú & Phổ Thông Tư Thục",
      card1Desc: "Hỗ trợ tư vấn chọn trường, chuẩn bị hồ sơ ứng tuyển các trường phổ thông tư thục và nội trú tại Anh (GCSE & A-Levels).",
      card2Title: "Tư Vấn Nộp Hồ Sơ Đại Học",
      card2Desc: "Hướng dẫn quy trình đăng ký, chuẩn bị bài luận cá nhân và lựa chọn ngành học phù hợp tại các trường Đại học Anh Quốc.",
      card3Title: "Nhà Ở & Căn Hộ Sinh Viên",
      card3Desc: "Hỗ trợ tìm kiếm nơi ở sinh viên, căn hộ thuê hoặc gia đình bản xứ (Homestay) an toàn tại London và các thành phố du học.",
      card4Title: "Người Giám Hộ & Hỗ Trợ Tại Chỗ",
      card4Desc: "Sắp xếp dịch vụ người giám hộ hợp pháp, điểm liên lạc tại Anh và hỗ trợ trường hợp khẩn cấp cho du học sinh nhỏ tuổi.",
      card5Title: "Tư Vấn Visa & Tài Chính Du Học",
      card5Desc: "Hướng dẫn thủ tục Visa du học, mở tài khoản ngân hàng, quy trình đóng học phí và tư vấn kế hoạch tài chính cho gia đình."
    },
    pathways: {
      badge: "Lộ Trình Học Tập",
      title: "Các Bậc Học Hỗ Trợ Tại Anh Quốc",
      subtitle: "Tổng quan các giai đoạn học tập dành cho học sinh Việt Nam.",
      p1Title: "Trường Phổ Thông & Nội Trú (GCSE / A-Levels)",
      p1Desc: "Dành cho học sinh từ 11–18 tuổi chuẩn bị nền tảng học thuật và tiếng Anh vững chắc trước khi vào đại học.",
      p2Title: "Dự Bị Đại Học (Foundation)",
      p2Desc: "Chương trình chuyển tiếp dành cho học sinh tốt nghiệp THPT tại Việt Nam muốn vào học đại học tại Anh.",
      p3Title: "Bậc Đại Học (Bachelor's Degree)",
      p3Desc: "Hỗ trợ nộp hồ sơ trực tiếp các chương trình cử nhân 3 năm tại các trường đại học Anh Quốc.",
      p4Title: "Bậc Sau Đại Học & Thạc Sĩ",
      p4Desc: "Tư vấn hồ sơ học Thạc sĩ, chứng chỉ chuyên ngành và các khóa học cao học.",
      p5Title: "An Cư & Nhà Ở Sinh Viên",
      p5Desc: "Hỗ trợ toàn diện việc tìm kiếm căn hộ, đón sân bay và làm quen với cuộc sống tại Anh."
    },
    offices: {
      badge: "Thông Tin Liên Hệ",
      title: "Địa Chỉ Văn Phòng London & Hà Nội",
      subtitle: "Liên hệ trực tiếp với chúng tôi tại Vương Quốc Anh hoặc Việt Nam.",
      londonHead: "Trụ Sở Chính Tại London",
      londonAddr: "192 Woodseer Street, London, E1 5HQ, Vương Quốc Anh",
      londonBranch: "Văn Phòng C&T Accountants",
      londonBranchAddr: "85 Tooting High Street, London, SW17 0SU, Vương Quốc Anh",
      hanoiHead: "Trụ Sở Chính Tại Hà Nội",
      hanoiHeadAddr: "Số 3, nhà B5, TTQĐ 28 Điện Biên Phủ, P. Ba Đình, Hà Nội",
      hanoiBiz: "Văn Phòng Kinh Doanh Hà Nội",
      hanoiBizAddr: "Số 125, tổ 35, cụm 7, P. Tây Hồ, Hà Nội",
      phoneUK: "Điện thoại / WhatsApp / Viber / Zalo (UK):",
      phoneVN: "Điện thoại / WhatsApp / Viber / Zalo:",
      email: "Email Liên Hệ:"
    },
    footer: {
      rights: "© 2026 Công Ty TNHH Đầu Tư Carrick (Carrick Investment Co., Ltd). Bảo lưu mọi quyền.",
      regNo: "Carrick Investment Co., Ltd | Giám đốc: Anh Đào Carrick (FCCA)"
    },
    modal: {
      title: "Liên Hệ Carrick Group",
      subtitle: "Gửi thông tin yêu cầu trực tiếp tới Bà Anh Đào Carrick.",
      nameLabel: "Họ và Tên *",
      phoneLabel: "Số Điện Thoại / Zalo / WhatsApp *",
      emailLabel: "Địa Chỉ Email *",
      serviceLabel: "Dịch Vụ Cần Tư Vấn",
      serviceOption1: "Tư Vấn Trường Phổ Thông / Nội Trú",
      serviceOption2: "Tư Vấn Nộp Hồ Sơ Đại Học",
      serviceOption3: "Tìm Nhà Ở / Căn Hộ Du Học",
      serviceOption4: "Người Giám Hộ & Hỗ Trợ An Cư",
      messageLabel: "Nội dung cần trao đổi",
      submitWhatsApp: "💬 Gửi qua WhatsApp",
      submitZalo: "💬 Gửi qua Zalo"
    }
  }
};
