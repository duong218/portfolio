
/* Dịch Việt - Anh: đổi văn bản trên trang theo từ điển, nhớ lựa chọn */
(function () {
  const D = {
    'Trang chủ': 'Home', 'Giới thiệu': 'About', 'Dự án': 'Projects', 'Hành trình': 'Journey', 'Liên hệ': 'Contact', 'Sáng / Tối': 'Light / Dark', 'Về đầu trang': 'Back to top',
    'Sinh viên khoa học máy tính': 'Computer science student', 'Phân tích thiết kế': 'Analysis & Design',
    'Đang thực tập tại Z176': 'Interning at Z176', 'Ở Hà Nội, Việt Nam': 'Based in Hanoi, Vietnam', 'Hôm nay:': 'Today:', 'Cuộn xuống để xem tiếp': 'Scroll down for more',
    'Xem dự án': 'View projects', 'Thẻ giới thiệu': 'ID card', 'Ảnh chân dung': 'Portrait',
    'Chào bạn, mình là Phạm Ngọc Dương.': 'Hi, I’m Phạm Ngọc Dương.', 'Xem GitHub': 'View GitHub',
    'Phân tích và thiết kế': 'Analysis & design', 'Giao diện và code cơ bản': 'UI & basic coding', 'Công cụ': 'Tools', 'Kỹ năng mềm': 'Soft skills', 'Lãnh đạo': 'Leadership', 'Giao tiếp': 'Communication', 'Quản lý bản thân': 'Self-management', 'Đạt loại Giỏi': 'Rated Very Good', 'Hướng đối tượng': 'Object-oriented',
    'Ảnh chân dung sẽ đặt ở đây': 'Portrait goes here', 'Đang sẵn sàng': 'Available',
    'Cách mình làm việc': 'How I work', 'dự án đã làm': 'projects built', 'nơi đã thực tập và làm freelance': 'places interned or freelanced', 'năm học đại học': 'years at university',
    'Nghe yêu cầu': 'Listen', 'Phân tích': 'Analyze', 'Vẽ sơ đồ': 'Diagram', 'Thiết kế giao diện': 'Design the UI', 'Thử và bàn giao': 'Test & hand over',
    'Khóa luận và sản phẩm cho công ty': 'Thesis & company product', 'Z176 LMS: hệ thống thi chuyên môn nghiệp vụ giỏi': 'Z176 LMS: professional skills exam system',
    'Vai trò': 'Role', 'Khóa luận': 'Thesis', 'Loại': 'Type', 'Thi trắc nghiệm': 'Quiz exams', 'Chức năng chính': 'Main feature',
    'Sản phẩm cho công ty': 'Company product', 'Chỗ ngồi hội trường Z176': 'Z176 hall seating', 'Sơ đồ ghế': 'Seat map', 'Hội trường': 'Hall', 'Nơi dùng': 'Used at', '(điền công nghệ)': '(add tech stack)',
    'Dự án freelance': 'Freelance project', 'LucyClass: quản lý trung tâm tiếng Anh': 'LucyClass: English center management', '3 vai trò': '3 roles', '4 lớp': '4 layers', 'Sao lưu mã hóa': 'Encrypted backup', 'Bảo mật, do AI chấm': 'Security, graded by AI',
    'Landing page freelance': 'Freelance landing page', 'Trang giới thiệu bất động sản.': 'Real estate introduction page.', 'Hình thức': 'Format',
    'Mã nguồn': 'Source code', 'Xem trang chạy thử': 'Try the live demo', 'Ảnh chụp màn hình dự án sẽ đặt ở đây': 'Project screenshot goes here',
    'Từ giảng đường đến những hệ thống chạy thật.': 'From lecture halls to systems running for real.',
    'Hiện tại': 'Now', 'Thực tập tại Công ty TNHH MTV 76': 'Internship at 76 One-Member Co., Ltd.', 'Từ 10/8/2026': 'Since 10 Aug 2026',
    'Thành tích': 'Achievement', 'Học bổng toàn phần': 'Full scholarship', 'Học kì 1 - 2026': 'Semester 1, 2026', 'Học kì 2 - 2025': 'Semester 2, 2025', 'Toàn phần': 'Full',
    'Phân tích và thiết kế hệ thống LucyClass': 'Analysis & design of LucyClass', '1/2026 đến 5/2026': 'Jan 2026 to May 2026', 'Phân tích yêu cầu': 'Requirements analysis', 'Thiết kế hệ thống': 'System design', 'Triển khai': 'Deployment',
    'Thực tập': 'Internship', 'Thực tập IT tại HTC Viễn Thông Quốc Tế': 'IT internship at HTC International Telecom', '4/2025 đến 6/2025': 'Apr 2025 to Jun 2025', 'Tài liệu kỹ thuật': 'Technical documents',
    'Học tập': 'Study', 'Khoa học máy tính': 'Computer science', 'Học viện Nông nghiệp Việt Nam': 'Vietnam National University of Agriculture', 'Thuật toán': 'Algorithms', 'Toán rời rạc': 'Discrete math',
    'Vài khoảnh khắc ngoài giờ làm việc.': 'A few moments outside work.', 'Đóng': 'Close', 'Ảnh trước': 'Previous photo', 'Ảnh sau': 'Next photo', 'Album ảnh cá nhân': 'Personal photo album', 'Mở album ảnh cá nhân': 'Open the personal album',
    'Dạo này': 'Lately', 'ngày kể từ ngày đầu tiên ở Z176': 'days since my first day at Z176', 'Đang viết khóa luận': 'Writing my thesis', 'Module hỗ trợ thi chuyên môn nghiệp vụ giỏi.': 'A module supporting the professional skills exam.', 'Đang tìm việc': 'Open to work', 'Nhắn cho mình': 'Message me',
    'Cùng làm gì đó nhé': 'Let’s build something', 'Chép email': 'Copy email', 'Đã chép': 'Copied', 'Facebook (điền link)': 'Facebook (add link)', 'Gửi email': 'Send email', 'Hà Nội, Việt Nam': 'Hanoi, Vietnam',
    'Chào bạn!': 'Hi there!', 'Chào bạn! ✨': 'Hi there! ✨', 'Mình là Dương dứa': 'I’m Ocean', 'Xem dự án nhé': 'Check my projects!', 'Cuộn xuống nào': 'Keep scrolling!', 'Hôm nay ăn gì nhỉ?': 'What’s for lunch?',
    'Á!': 'Eek!', 'Đừng lại gần!': 'Don’t come close!', 'Hu hu!': 'Boo hoo!', 'Chạy thôi!': 'Run!', 'Cứu mình!': 'Help me!', 'Hây ya!': 'Hiyah!', 'Dứa rơi nè!': 'Pineapples!'
  };
  const L = [
    ['const hoSo', 'const profile = async () => { name: "Phạm Ngọc Dương", city: "Hanoi", goal: "Business Analyst, UI/UX", internship: "76 One-Member Co., Ltd." }'],
    ['Mình nghe người dùng nói', 'I listen to what users need, then turn it into diagrams and screens that are easy to use.'],
    ['Mình là sinh viên năm cuối', 'I am a final-year computer science student at Vietnam National University of Agriculture. What I like most is listening to what users need, then turning it into diagrams and screens that are easy for the people who will actually use them.'],
    ['Biết nhận trách nhiệm', 'I take responsibility and coordinate. In two team projects of four, I was the link between the lecturer’s requirements and the developers.'],
    ['Nghe khách hàng nói về', 'I listen to customers describe their work, ask again until it is clear, then explain features in plain words. I did this while presenting and refining LucyClass with its customer.'],
    ['Chia dự án thành các mốc', 'I split a project into small milestones (requirements, design, build, test, go live) and keep the pace myself. LucyClass was completed independently in five months, from January to May 2026.'],
    ['Thế mạnh của mình là khâu', 'My strength is analysis and design: from hearing requirements and writing specifications to drawing diagrams and building interfaces. I work with AI tools to turn ideas into products that actually run, such as LucyClass and the Z176 exam system.'],
    ['Ngồi nghe khách hàng', 'Sit down with customers or users, hear what they need, and keep asking until it is clear.'],
    ['Ví dụ: nhận yêu cầu', 'Example: taking requirements directly from the English center for LucyClass.'],
    ['Viết đặc tả, tách', 'Write the specification and split requirements into roles and features.'],
    ['Ví dụ: LucyClass chia', 'Example: LucyClass is split into 3 roles: Admin, Teacher, Marketing.'],
    ['Dùng use case, activity', 'Use case, activity, sequence and class diagrams so the whole team sees one picture.'],
    ['Ví dụ: bộ sơ đồ', 'Example: the UML set drawn in StarUML for the Z176 thesis.'],
    ['Làm màn hình dễ dùng', 'Build screens that are easy for the people who will actually use them.'],
    ['Ví dụ: giao diện nhiều', 'Example: the multi-role interfaces of LucyClass and Z176 LMS.'],
    ['Tự kiểm thử từng', 'Test every feature myself, then ship it to run for real.'],
    ['Ví dụ: LucyClass đã chạy', 'Example: LucyClass runs in production, with a live demo in Projects.'],
    ['Các hệ thống mình đã', 'Systems I analyzed, designed and built with real customers.'],
    ['Hệ thống thi trắc nghiệm', 'A multiple-choice exam system for internal training management at 76 One-Member Co., Ltd. I handled business analysis, UML and interface design. An upgrade of the thesis project, with an added AI chatbot.'],
    ['Ứng dụng sắp xếp', 'An app that arranges and shows seats in the hall of 76 One-Member Co., Ltd.'],
    ['Hệ thống nhiều vai trò', 'A multi-role system for a real center: students, schedules, attendance, timekeeping and automatic payroll from teaching schedules.'],
    ['Trang giới thiệu cho trung tâm', 'Introduction page for the Lucy’Class English center.'],
    ['Trang giới thiệu cho một tiệm', 'Introduction page for a small flower shop in Hanoi.'],
    ['Làm hệ thống thi', 'Building the professional skills exam system and the hall seating app.'],
    ['Thành tích học tập', 'Academic achievement at Vietnam National University of Agriculture.'],
    ['Nhận yêu cầu từ khách', 'Took requirements from the customer, analyzed, designed and shipped to production.'],
    ['Soạn thảo và chỉnh sửa', 'Drafted and edited technical reports, got to know a technology company environment.'],
    ['Bắt đầu học và dần', 'Started studying and gradually chose system analysis and design.'],
    ['Bạn có việc thực tập', 'Got an internship, a project, or feedback on this portfolio? Just send me an email.'],
    ['Business Analyst phần mềm', 'Business Analyst for management software, or UI/UX, from 2027.'],
  ];
  let lang = 'vi'; const M = new WeakMap();
  function trans(s) {
    const k = s.trim(); if (!k) return s;
    let e = D[k], m;
    if (e === undefined) { const l = L.find((x) => k.startsWith(x[0])); if (l) e = l[1]; }
    if (e === undefined) {
      if ((m = k.match(/^Thư mục (\d), ảnh (\d)(?: \((\d+)\/(\d+)\))?$/))) e = 'Folder ' + m[1] + ', photo ' + m[2] + (m[3] ? ' (' + m[3] + '/' + m[4] + ')' : '');
      else if ((m = k.match(/^Thư mục (\d)$/))) e = 'Folder ' + m[1];
      else if ((m = k.match(/^(\d) ảnh$/))) e = m[1] + ' photos';
      else if ((m = k.match(/^(\d)\. (.+)$/)) && D[m[2]]) e = m[1] + '. ' + D[m[2]];
      else if ((m = k.match(/^Mở (.+)$/))) { const t = trans(m[1]); if (t !== m[1]) e = 'Open ' + t; }
      else if (k.includes('✦')) e = k.split('Phân tích thiết kế').join('System analysis & design').split('Hướng đối tượng').join('Object-oriented');
    }
    return e === undefined ? s : s.replace(k, () => e);
  }
  function proc(n) {
    const p = n.parentNode; if (p && /^(SCRIPT|STYLE)$/.test(p.nodeName)) return;
    const s = n.nodeValue, r = M.get(n);
    if (lang === 'en') { if (r && s === r.en) return; const e = trans(s); if (e !== s) { M.set(n, { en: e }); n.nodeValue = e; } else if (r) M.delete(n); }
    else if (r) { if (s === r.en) n.nodeValue = r.vi; M.delete(n); }
    if (lang === 'en' && M.get(n)) M.get(n).vi = s;
  }
  function attr(el) {
    const cur = el.getAttribute('aria-label');
    if (lang === 'en') { if (el.dataset.ve !== undefined && cur === el.dataset.ve) return; const t = trans(cur); if (t !== cur) { el.dataset.va = cur; el.dataset.ve = t; el.setAttribute('aria-label', t); } }
    else if (el.dataset.va !== undefined && cur === el.dataset.ve) { el.setAttribute('aria-label', el.dataset.va); delete el.dataset.va; delete el.dataset.ve; }
  }
  function scan(node) {
    if (node.nodeType === 3) return proc(node);
    if (node.nodeType !== 1) return;
    const w = document.createTreeWalker(node, NodeFilter.SHOW_TEXT); const ns = []; while (w.nextNode()) ns.push(w.currentNode); ns.forEach(proc);
    if (node.hasAttribute('aria-label')) attr(node); node.querySelectorAll('[aria-label]').forEach(attr);
  }
  const TV = 'Phạm Ngọc Dương | Business Analyst và UI/UX', TE = 'Phạm Ngọc Dương | Business Analyst & UI/UX';
  let btnV, btnE;
  function setLang(l) {
    lang = l; document.documentElement.lang = l; document.title = l === 'en' ? TE : TV;
    try { localStorage.setItem('lang', l); } catch (e) {}
    scan(document.body);
    if (btnV) { btnV.classList.toggle('sel', l === 'vi'); btnE.classList.toggle('sel', l === 'en'); }
  }
  new MutationObserver((ms) => {
    if (lang !== 'en') return;
    ms.forEach((m) => { if (m.type === 'characterData') proc(m.target); else if (m.type === 'attributes') attr(m.target); else m.addedNodes.forEach(scan); });
  }).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['aria-label'] });
  setTimeout(() => {
    const tg = document.querySelector('.tg'); if (!tg) return;
    const box = document.createElement('div'); box.className = 'rt';
    const lg = document.createElement('button'); lg.className = 'lg'; lg.setAttribute('aria-label', 'Language');
    btnV = document.createElement('b'); btnV.textContent = 'VI'; btnE = document.createElement('b'); btnE.textContent = 'EN';
    lg.append(btnV, btnE); lg.addEventListener('click', () => setLang(lang === 'vi' ? 'en' : 'vi'));
    tg.replaceWith(box); box.append(lg, tg);
    let saved = 'vi'; try { saved = localStorage.getItem('lang') || 'vi'; } catch (e) {}
    setLang(saved === 'en' ? 'en' : 'vi');
  }, 700);
})();
