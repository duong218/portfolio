
const h = React.createElement, { useState, useEffect } = React;
const A = (href, txt, o) => h('a', Object.assign({ href, target: '_blank', rel: 'noopener' }, o), txt);
const Chips = (a) => h('div', { className: 'ch' }, a.map((x) => h('span', { key: x }, x)));

const PF_ID = '/img/pf-id.webp';
const PF_ME = '/img/pf-me.webp';
const IMG = ['/img/project-1.webp','/img/project-2.webp','/img/project-3.webp','/img/project-4.webp','/img/project-5.webp','/img/project-6.webp'];
const P = [
  { tag: 'Khóa luận và sản phẩm cho công ty', n: 'Z176 LMS: hệ thống thi chuyên môn nghiệp vụ giỏi', d: 'Hệ thống thi trắc nghiệm phục vụ quản lý đào tạo nội bộ của Công ty TNHH MTV 76. Mình phân tích nghiệp vụ, vẽ UML và thiết kế giao diện. Bản nâng cấp từ khóa luận, có thêm chatbot AI.', s: [['BA', 'Vai trò'], ['Khóa luận', 'Loại'], ['Thi trắc nghiệm', 'Chức năng chính']], t: ['MERN', 'MongoDB', 'UML', 'AI'], g: 'https://github.com/duong218/z176lms', img: IMG[0] },
  { tag: 'Sản phẩm cho công ty', n: 'Chỗ ngồi hội trường Z176', d: 'Ứng dụng sắp xếp và chỉ chỗ ngồi trong hội trường của Công ty TNHH MTV 76.', s: [['Sơ đồ ghế', 'Chức năng chính'], ['Hội trường', 'Nơi dùng']], t: ['MERN', 'Docker', 'StarUML'], g: 'https://github.com/duong218/hoitruongz76', img: IMG[1] },
  { tag: 'Dự án freelance', n: 'LucyClass: quản lý trung tâm tiếng Anh', d: 'Hệ thống nhiều vai trò cho một trung tâm thật: quản lý học viên, lịch học, điểm danh, chấm công và tính lương tự động theo lịch dạy.', s: [['3 vai trò', 'Admin, Teacher, Marketing'], ['4 lớp', 'Sao lưu mã hóa'], ['8.9/10', 'Bảo mật, do AI chấm']], t: ['MERN', 'Redis', 'Cloudinary', 'Google Drive API', 'Vercel', 'Render'], g: 'https://github.com/duong218/lucyClass', live: 'https://lucy-class.vercel.app', img: IMG[2] },
  { tag: 'Landing page freelance', n: 'LucyLanding', d: 'Trang giới thiệu cho trung tâm tiếng Anh Lucy’Class.', s: [['Landing page', 'Loại'], ['Freelance', 'Hình thức']], t: ['HTML', 'CSS', 'JavaScript'], g: 'https://github.com/duong218/LucyLanding', live: 'https://lucylandingpage.vercel.app/', img: IMG[3] },
  { tag: 'Landing page freelance', n: 'HoaVillas', d: 'Trang giới thiệu bất động sản.', s: [['Landing page', 'Loại'], ['Freelance', 'Hình thức']], t: ['HTML', 'CSS', 'JavaScript'], g: 'https://github.com/duong218/HoaVillas', live: 'https://duonghoavillas.vercel.app/', img: IMG[4] },
  { tag: 'Landing page freelance', n: 'Mê Hoa', d: 'Trang giới thiệu cho một tiệm hoa nhỏ ở Hà Nội.', s: [['Landing page', 'Loại'], ['Freelance', 'Hình thức']], t: ['HTML', 'CSS', 'JavaScript'], g: 'https://github.com/duong218/mehoa', live: 'https://mehoa.vercel.app/', img: IMG[5] }
];

const T = [
  ['08.2026', 'Hiện tại', 'Thực tập tại Công ty TNHH MTV 76', 'Từ 10/8/2026', 'Làm hệ thống thi chuyên môn nghiệp vụ giỏi và sơ đồ chỗ ngồi hội trường.', ['Business Analyst', 'UML', 'MERN']],
  ['HK1.2026', 'Thành tích', 'Học bổng toàn phần', 'Học kì 1 - 2026', 'Thành tích học tập tại Học viện Nông nghiệp Việt Nam.', ['Toàn phần']],
  ['01.2026', 'Freelance', 'Phân tích và thiết kế hệ thống LucyClass', '1/2026 đến 5/2026', 'Nhận yêu cầu từ khách hàng, phân tích, thiết kế và đưa lên production.', ['Phân tích yêu cầu', 'Thiết kế hệ thống', 'Triển khai']],
  ['HK2.2025', 'Thành tích', 'Học bổng toàn phần', 'Học kì 2 - 2025', 'Thành tích học tập tại Học viện Nông nghiệp Việt Nam.', ['Toàn phần']],
  ['04.2025', 'Thực tập', 'Thực tập IT tại HTC Viễn Thông Quốc Tế', '4/2025 đến 6/2025', 'Soạn thảo và chỉnh sửa báo cáo kỹ thuật, làm quen môi trường doanh nghiệp công nghệ.', ['Tài liệu kỹ thuật']],
  ['2022', 'Học tập', 'Khoa học máy tính', 'Học viện Nông nghiệp Việt Nam', 'Bắt đầu học và dần chọn hướng phân tích thiết kế hệ thống.', ['Thuật toán', 'Toán rời rạc']]
];

const Proj = (p) => h('article', { className: 'pj', key: p.n },
  h('div', null, h('span', { className: 'tp' }, p.tag), h('h3', null, p.n), h('p', null, p.d),
    h('div', { className: 'st' }, p.s.map((x) => h('div', { key: x[1] }, h('b', null, x[0]), h('small', null, x[1])))),
    Chips(p.t),
    h('div', { className: 'lk' }, A(p.g, 'Mã nguồn'), p.live && A(p.live, 'Chạy thử'))),
  h('div', { className: 'shot' }, p.img ? h('img', { src: p.img, alt: p.n, loading: 'lazy' }) : 'Ảnh chụp màn hình dự án sẽ đặt ở đây'));

function App() {
  const [day, setDay] = useState(''), [ok, setOk] = useState(false);
  useEffect(() => setDay(new Date().toLocaleDateString('vi-VN')), []);
  const flip = () => { const r = document.documentElement, d = r.dataset.theme === 'dark' || (!r.dataset.theme && matchMedia('(prefers-color-scheme:dark)').matches); r.dataset.theme = d ? 'light' : 'dark'; };
  const copy = () => { try { navigator.clipboard.writeText('duong210804@gmail.com'); } catch (e) {} setOk(true); setTimeout(() => setOk(false), 1800); };
  return h(React.Fragment, null,
    h('nav', null, h('div', { className: 'w' }, h('a', { className: 'logo', href: '#top', 'aria-label': 'Về đầu trang' }, 'PND'),
      h('div', { className: 'links' }, [['top', 'Trang chủ'], ['gioi-thieu', 'Giới thiệu'], ['du-an', 'Dự án'], ['hanh-trinh', 'Hành trình'], ['album', 'Album'], ['lien-he', 'Liên hệ']].map((l) => h('a', { key: l[0], href: '#' + l[0] }, l[1]))),
      h('button', { className: 'tg', onClick: flip }, 'Sáng / Tối'))),
    h('header', { className: 'hero', id: 'top' },
      h('div', { className: 'hm' },
        h('div', { className: 'pills' }, h('div', { className: 'dot' }, '*'), h('div', { className: 'pill' }, 'Sinh viên khoa học máy tính'), h('div', { className: 'pill' }, 'Business Analyst'), h('div', { className: 'pill' }, 'Phân tích thiết kế'), h('div', { className: 'pill' }, 'UI/UX'), h('div', { className: 'dot k' }, '</>')),
        h('h1', { 'aria-label': 'Phạm Ngọc Dương' }, h('span', null, 'Phạm Ngọc '), h('span', null, 'Dương')),
        h('div', { className: 'code' }, 'const hoSo = async () => { ten: "Phạm Ngọc Dương", noiO: "Hà Nội", huongDi: "Business Analyst, UI/UX", thucTap: "Công ty TNHH MTV 76" }')),
      h('div', { className: 'bar' }, h('div', null, h('i', { className: 'on' }), 'Đang thực tập tại Z176'), h('div', null, 'Ở Hà Nội, Việt Nam'), h('div', null, h('b', null, 'Hôm nay: '), day), h('div', null, 'Cuộn xuống để xem tiếp'))),
    h('main', { className: 'w' },
      h('section', { id: 'gioi-thieu' }, h('h2', null, 'Giới thiệu'), h('div', { style: { height: '2rem' } }),
        h('div', { className: 'ab' },
          h('div', { className: 'card' }, h('h3', null, 'Chào bạn, mình là Phạm Ngọc Dương.'),
            h('p', null, 'Mình là sinh viên năm cuối ngành Khoa học máy tính tại Học viện Nông nghiệp Việt Nam. Mình thích nhất phần nghe người dùng cần gì, rồi vẽ thành sơ đồ và màn hình dễ dùng với đúng người sẽ dùng nó.'),
            h('p', null, 'Thế mạnh của mình là khâu phân tích và thiết kế: từ nghe yêu cầu, viết đặc tả, vẽ sơ đồ đến dựng giao diện. Mình phối hợp với các công cụ AI để đưa ý tưởng thành sản phẩm chạy thật, như LucyClass và hệ thống thi của Z176.'),
            A('https://github.com/duong218', 'Xem GitHub', { className: 'btn' }),
            h('div', { className: 'sk' }, h('div', null, h('h4', null, 'Phân tích và thiết kế'), Chips(['Use case', 'Activity', 'Sequence', 'Class', 'Hướng đối tượng'])), h('div', null, h('h4', null, 'Giao diện và code cơ bản'), Chips(['UI/UX', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js'])), h('div', null, h('h4', null, 'Công cụ'), Chips(['StarUML', 'GitHub', 'Antigravity', 'Claude'])))),
          h('div', { className: 'me' }, h('img', { className: 'pf', src: PF_ME, alt: 'Chân dung Phạm Ngọc Dương', decoding: 'async' }), h('div', { className: 'tag' }, h('div', null, '@duong218', h('small', null, 'Đang sẵn sàng')), h('a', { href: '#lien-he' }, 'Liên hệ'))))),
    ),
    h('div', { className: 'dk' }, h('div', { className: 'w' },
      h('section', { id: 'du-an' }, h('h2', null, 'Dự án'), h('p', { className: 'sub' }, 'Các hệ thống mình đã phân tích, thiết kế và làm cùng khách hàng thật.'), P.map(Proj)))),
    h('main', { className: 'w' },
      h('section', { id: 'hanh-trinh', style: { textAlign: 'center' } }, h('h2', null, 'Hành trình'), h('p', { className: 'sub', style: { margin: '0 auto' } }, 'Từ giảng đường đến những hệ thống chạy thật.'),
        h('div', { className: 'tl', style: { textAlign: 'left' } }, T.map((t) => h('div', { className: 'it', key: t[0] }, h('div', { className: 'yr' }, t[0]),
          h('div', { className: 'card' }, h('span', { className: 'bd' }, t[1]), h('h3', null, t[2]), h('small', null, t[3]), h('p', null, t[4]), Chips(t[5]))))))),
    h('div', { className: 'dk', style: { marginTop: '2rem' } }, h('div', { className: 'w' },
      h('section', { id: 'lien-he' }, h('div', { className: 'ct' },
        h('div', null, h('h2', null, 'Cùng làm gì đó nhé'), h('p', { className: 'sub' }, 'Bạn có việc thực tập, dự án hay muốn góp ý cho portfolio này, cứ gửi email cho mình.')),
        h('div', null, h('div', { className: 'em' }, h('span', null, 'duong210804@gmail.com'), h('button', { onClick: copy }, ok ? 'Đã chép' : 'Chép email')),
          h('div', { className: 'so' }, A('https://github.com/duong218', 'GitHub'), A('https://www.facebook.com/d.dua04', 'Facebook'), A('https://www.tiktok.com/@_d.dua04', 'TikTok'), A('https://locket.cam/ddua04', 'Locket'), A('mailto:duong210804@gmail.com', 'Gửi email', { target: '_self' }))))),
      h('footer', null, h('span', null, '© 2026 Phạm Ngọc Dương'), h('span', null, 'Hà Nội, Việt Nam')))));
}
ReactDOM.createRoot(document.getElementById('root')).render(h(App));

/* Hiệu ứng mượt + các nhân vật nhỏ (chạy sau khi React vẽ xong) */
(function () {
  const rd = matchMedia('(prefers-reduced-motion:reduce)').matches;
  /* ponytail: một chỗ chặn chung thay vì sửa từng vòng lặp; khi album mở các vòng nền chạy chậm lại */
  const _raf = window.requestAnimationFrame.bind(window);
  window.requestAnimationFrame = (f) => document.body.classList.contains('ao') ? setTimeout(() => _raf(f), 250) : _raf(f);
  const mk = (c, id) => { const e = document.createElement('div'); e.className = c; if (id) e.id = id; document.body.appendChild(e); return e; };
  let mx = innerWidth / 2, my = innerHeight / 2;
  addEventListener('pointermove', (e) => { mx = e.clientX; my = e.clientY; }, { passive: true });


  /* Swarm: mỗi khối được dựng từng phần. Một con trỏ kéo khung ra như vẽ hình chữ nhật, các con trỏ khác
     "gõ" từng dòng chữ, quét ảnh, đặt chip và nút vào. Không sửa DOM, chỉ mở lộ bằng clip-path.
     ponytail: chưa có bầy đàn/flocking theo chuột; tối đa 10 con trỏ, quá 8 giây thì hiện luôn. */
  /* Âm thanh: giai điệu ngũ cung C trưởng, nốt sine mềm có echo nhẹ, đi qua bộ nén để nhiều con trỏ không bị chói.
     Gõ chữ = đi bộ ngẫu nhiên trên thang âm; kéo khung = hợp âm êm; xong = nốt chuông cao.
     ponytail: tổng hợp bằng oscillator, muốn đàn thật thì thay bằng sample. Trình duyệt chỉ cho phát sau lần bấm/gõ/chạm đầu tiên. */
  const snd = (() => {
    const AC = window.AudioContext || window.webkitAudioContext, SC = [261.63, 293.66, 329.63, 392, 440, 523.25, 587.33, 659.25, 783.99, 880];
    let ac = null, bus = null, mute = false, last = 0, idx = 4, voices = 0;
    try { mute = localStorage.getItem('mute') === '1'; } catch (e) {}
    const mkBus = () => {
      const comp = ac.createDynamicsCompressor(), m = ac.createGain(), dl = ac.createDelay(1), fb = ac.createGain(), wet = ac.createGain();
      m.gain.value = 1.5; dl.delayTime.value = .27; fb.gain.value = .32; wet.gain.value = .35;
      m.connect(comp); m.connect(dl); dl.connect(fb); fb.connect(dl); dl.connect(wet); wet.connect(comp); comp.connect(ac.destination); return m;
    };
    let tw = 0;
    const wake = (e) => {
      if (!AC) return;
      try {
        if (!ac) { ac = new AC(); bus = mkBus(); }
        if (ac.state === 'running') return;
        const n = performance.now(); if (e && /^(wheel|scroll|pointermove)$/.test(e.type) && n - tw < 500) return; tw = n;
        const r = ac.resume(); if (r && r.catch) r.catch(() => {});
      } catch (er) {}
    };
    wake(); /* thử bật ngay khi vào trang; trình duyệt thường chỉ cho phát từ lần bấm/chạm/gõ đầu tiên */
    ['pointerdown', 'pointerup', 'mousedown', 'click', 'keydown', 'touchstart', 'touchend', 'wheel', 'scroll', 'pointermove'].forEach((ev) => addEventListener(ev, wake, { passive: true }));
    const voice = (f, vol, att, dur, x, h) => {
      if (!ac || ac.state !== 'running' || mute || rd || voices >= 14) return;
      const t = ac.currentTime, g = ac.createGain(), pn = ac.createStereoPanner ? ac.createStereoPanner() : null, end = t + att + dur + .05;
      g.gain.setValueAtTime(.0001, t); g.gain.linearRampToValueAtTime(vol, t + att); g.gain.exponentialRampToValueAtTime(.0001, t + att + dur);
      [[f, 1], [f * 2, h]].forEach(([fr, k]) => { if (!k) return; const o = ac.createOscillator(), og = ac.createGain(); o.type = 'sine'; o.frequency.value = fr; og.gain.value = k; o.connect(og); og.connect(g); o.start(t); o.stop(end); });
      if (pn) { pn.pan.value = Math.max(-1, Math.min(1, x / innerWidth * 2 - 1)) * .7; g.connect(pn); pn.connect(bus); } else g.connect(bus);
      voices++; setTimeout(() => voices--, (end - t) * 1000 + 80);
    };
    return {
      tick: (x) => { const n = performance.now(); if (n - last < 120) return; last = n; idx = Math.max(0, Math.min(9, idx + [-2, -1, 1, 2][Math.floor(Math.random() * 4)])); voice(SC[idx], .16, .02, .8, x, .25); },
      pop: (x) => voice(SC[5 + Math.floor(Math.random() * 5)], .22, .01, 1.1, x, .3),
      drag: (x, d) => { const k = Math.floor(Math.random() * 5); voice(SC[k], .12, Math.max(.1, d * .6), .9, x, .15); voice(SC[k + 2], .09, Math.max(.15, d * .7), .9, x, 0); },
      toggle: () => { mute = !mute; try { localStorage.setItem('mute', mute ? '1' : '0'); } catch (e) {} },
      get muted() { return mute; }, ok: !!AC
    };
  })();
  if (!rd && snd.ok) {
    const mb = document.createElement('button'); mb.className = 'mu'; mb.title = 'Bật/tắt âm thanh';
    const paint = () => { mb.textContent = snd.muted ? '🔇' : '🔊'; mb.setAttribute('aria-label', snd.muted ? 'Bật âm thanh' : 'Tắt âm thanh'); mb.setAttribute('aria-pressed', String(!snd.muted)); };
    mb.addEventListener('click', () => { snd.toggle(); paint(); }); paint(); document.body.appendChild(mb);
  }

  /* Màn chào: bấm Bắt đầu là mở âm thanh (cú bấm này mở khóa trình duyệt) rồi phát hai nốt chào */
  (window.__go || Promise.resolve()).then(() => setTimeout(() => { snd.pop(innerWidth / 2); setTimeout(() => snd.pop(innerWidth / 2), 140); }, 150));

  const swarm = (() => {
    const COL = ['#F24E1E', '#A259FF', '#1ABCFE', '#0ACF83', '#FFC700', '#E8467C', '#9747FF', '#14AE5C', '#0D99FF', '#FF8A00', '#00B5CE', '#FF7262'],
      NM = ['Ada', 'Linus', 'Grace', 'Alan', 'Margaret', 'Ken', 'Barbara', 'Dennis', 'Radia', 'Guido', 'Hedy', 'Tim'];
    const Q = [], MAXC = 10; let live = 0, seq = 0;
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    const ease = (p) => 1 - Math.pow(1 - p, 3), tempo = () => 1 + Math.min(3, Q.length / 4);
    const R = (el) => el.getBoundingClientRect(), shown = (r) => r.bottom > 0 && r.top < innerHeight;
    const clampP = (x, y) => ({ x: Math.min(innerWidth - 10, Math.max(0, x)), y: Math.min(innerHeight - 10, Math.max(0, y)) });
    const tween = (ms, f) => new Promise((ok) => { const t0 = performance.now(); (function s(t) { const p = Math.min(1, (t - t0) / ms); f(p); p < 1 ? requestAnimationFrame(s) : ok(); })(t0); });
    const put = (c, x, y) => { c.x = x; c.y = y; c.el.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)'; };
    const fly = (c, to, ms) => { const x0 = c.x, y0 = c.y, bend = (Math.random() - .5) * 160; return tween(ms, (p) => { const e = ease(p), g = to(), dx = g.x - x0, dy = g.y - y0, L = Math.hypot(dx, dy) || 1, k = Math.sin(Math.PI * p) * bend; put(c, x0 + dx * e - dy / L * k, y0 + dy * e + dx / L * k); }); };
    const mkc = () => {
      const i = seq++ % COL.length, e = document.createElement('div'), ol = document.createElement('div'), left = Math.random() < .5;
      e.className = 'sc'; ol.className = 'sb';
      e.innerHTML = '<svg width="20" height="22" viewBox="0 0 20 22"><path d="M2 2l15 7-6.5 2L8 18z" fill="' + COL[i] + '" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/></svg><b style="background:' + COL[i] + '">' + NM[i] + '</b>';
      const c = { el: e, ol, lab: e.lastChild, nm: NM[i], col: COL[i], x: left ? -40 : innerWidth + 40, y: Math.random() * innerHeight };
      put(c, c.x, c.y); document.body.append(ol, e); return c;
    };
    const hasBox = (el) => { const s = getComputedStyle(el); return parseFloat(s.borderTopWidth) + parseFloat(s.borderRightWidth) + parseFloat(s.borderBottomWidth) + parseFloat(s.borderLeftWidth) > 0 || s.boxShadow !== 'none' || s.backgroundImage !== 'none' || !/^rgba\(0, 0, 0, 0\)|transparent/.test(s.backgroundColor); };
    const isLeaf = (el) => ![...el.children].some((k) => !/^(SVG|BR|I)$/i.test(k.tagName));
    const boxClip = (q) => 'inset(-14px calc(' + q + '% - 14px) calc(' + q + '% - 14px) -14px)';
    async function exec(c, j) {
      const { el, kind, root } = j, dead = () => root._done;
      if (dead() || !shown(R(el))) { el.style.visibility = 'visible'; return; }
      const m = tempo();
      el.style.clipPath = kind === 'box' ? boxClip(100) : 'inset(0 100% 100% 0)';
      await fly(c, () => { const r = R(el); return clampP(r.left + 2, r.top + 2); }, (260 + Math.random() * 260) / m);
      el.style.visibility = 'visible';
      const r0 = R(el);
      if (kind === 'box') {
        c.ol.style.display = 'block'; c.ol.style.borderColor = c.col;
        const bd = Math.min(900, 330 + Math.hypot(r0.width, r0.height) * .45) / m; snd.drag(c.x, bd / 1000);
        await tween(bd, (p) => {
          if (dead()) return; const e = ease(p), r = R(el); el.style.clipPath = boxClip((1 - e) * 100);
          put(c, r.left + r.width * e, r.top + r.height * e);
          Object.assign(c.ol.style, { left: r.left + 'px', top: r.top + 'px', width: r.width * e + 'px', height: r.height * e + 'px' });
          c.lab.textContent = c.nm + ' ' + Math.round(r.width * e) + ' × ' + Math.round(r.height * e);
        });
        c.ol.style.display = 'none'; c.lab.textContent = c.nm;
      } else if (kind === 'img') {
        const idr = Math.min(900, 300 + r0.height * .8) / m; snd.drag(c.x, idr / 1000);
        await tween(idr, (p) => {
          if (dead()) return; const e = ease(p), r = R(el); el.style.clipPath = 'inset(0 0 ' + (1 - e) * 100 + '% 0)';
          put(c, r.left + r.width * (.2 + .6 * e), r.top + r.height * e);
        });
      } else {
        const cs = getComputedStyle(el), lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.2, n = Math.max(1, Math.round(r0.height / lh)), len = (el.textContent || '').length;
        const Y = (i) => i <= 0 ? '-10px' : i >= n ? 'calc(100% + 10px)' : (i / n * 100) + '%';
        let lc = 0;
        await tween(Math.min(1800, Math.max(260, len * 16)) / m, (p) => {
          if (dead()) return; const ch = Math.floor(p * len); if (ch !== lc) { lc = ch; snd.tick(c.x); }
          const u = p * n, k = Math.min(n - 1, Math.floor(u)), f = u - k, X = f >= 1 ? 'calc(100% + 10px)' : (f * 100) + '%', r = R(el);
          el.style.clipPath = 'polygon(-10px -10px,calc(100% + 10px) -10px,calc(100% + 10px) ' + Y(k) + ',' + X + ' ' + Y(k) + ',' + X + ' ' + Y(k + 1) + ',-10px ' + Y(k + 1) + ')';
          put(c, r.left + r.width * f, r.top + (k + .5) * r.height / n);
        });
      }
      el.style.clipPath = ''; snd.pop(c.x); c.press = 1; c.el.classList.add('pr'); await wait(70); c.el.classList.remove('pr');
    }
    async function worker() {
      live++; const c = mkc();
      for (;;) {
        let j = Q.shift(); if (!j) { await wait(600); j = Q.shift(); if (!j) break; }
        await exec(c, j); j.ok();
      }
      await fly(c, () => ({ x: c.x < innerWidth / 2 ? -60 : innerWidth + 60, y: c.y }), 450);
      c.el.remove(); c.ol.remove(); live--;
    }
    const job = (el, kind, root) => new Promise((ok) => { Q.push({ el, kind, root, ok }); if (live < MAXC) worker(); });
    async function run(el, root) {
      if (root._done) return;
      if (isLeaf(el)) return job(el, el.tagName === 'IMG' ? 'img' : 'text', root);
      if (hasBox(el)) await job(el, 'box', root); else el.style.visibility = 'visible';
      await Promise.all([...el.children].filter((k) => !/^(SCRIPT|STYLE)$/i.test(k.tagName)).map((k) => run(k, root)));
    }
    return (root) => {
      if (rd) { root.removeAttribute('data-rv'); return; }
      const done = () => { if (root._done) return; root._done = true; root.removeAttribute('data-rv'); [root, ...root.querySelectorAll('*')].forEach((x) => { x.style.removeProperty('visibility'); x.style.removeProperty('clip-path'); }); };
      setTimeout(done, 8000); run(root, root).then(done);
    };
  })();

  /* nhân vật nhỏ */
  const bub = mk('gt');
  const say = (g, t) => { bub.textContent = t; bub.classList.add('show'); bub._g = g; clearTimeout(bub._t); bub._t = setTimeout(() => { bub.classList.remove('show'); bub._g = null; }, 2200); };
  const lines = ['Chào bạn!', 'Mình là Dương dứa', 'Xem dự án nhé', 'Cuộn xuống nào', 'Hôm nay ăn gì nhỉ?'];
  const G = [{ x: .12, acc: '</>' }, { x: .5, acc: 'Q' }, { x: .82, acc: '' }].map((c, i) => {
    const el = mk('gh');
    el.innerHTML = '<div class="gb"></div><i class="gl a"></i><i class="gl b"></i><i class="ge l"></i><i class="ge r"></i><i class="gm"></i><i class="gs"></i>';
    if (c.acc) { const s = document.createElement('span'); s.className = 'gx'; s.textContent = c.acc; el.appendChild(s); }
    const g = { el, x: c.x * innerWidth, fy: 0, fvx: 0, fvy: 0, dir: i % 2 ? -1 : 1, sp: .6 + Math.random() * .5, st: 'idle', t: 30 + i * 60, hp: -1, eyes: el.querySelectorAll('.ge') };
    el.addEventListener('click', () => { g.hp = 0; g.st = 'idle'; g.t = 90; say(g, lines[Math.floor(Math.random() * lines.length)]); });
    return g;
  });
  const coarse = matchMedia('(pointer:coarse)').matches;
  const fearLines = ['Á!', 'Đừng lại gần!', 'Hu hu!', 'Chạy thôi!', 'Cứu mình!'];

  /* nhãn và biểu tượng bay bổng, kéo được, thả ra nảy về chỗ cũ */
  function initFloat() {
    const els = [...document.querySelectorAll('.pill,.dot')].map((el, i) => ({ el, x: 0, y: 0, vx: 0, vy: 0, ph: i * 1.7, drag: false, tx: 0, ty: 0, px: 0, py: 0 }));
    els.forEach((o) => {
      o.el.addEventListener('pointerdown', (e) => { o.drag = true; o.el.setPointerCapture(e.pointerId); o.px = e.clientX - o.x; o.py = e.clientY - o.y; o.tx = o.x; o.ty = o.y; o.el.style.zIndex = 5; o.el.style.cursor = 'grabbing'; });
      o.el.addEventListener('pointermove', (e) => { if (o.drag) { o.tx = e.clientX - o.px; o.ty = e.clientY - o.py; } });
      const up = () => { if (!o.drag) return; o.drag = false; o.el.style.zIndex = ''; o.el.style.cursor = ''; };
      o.el.addEventListener('pointerup', up); o.el.addEventListener('pointercancel', up);
    });
    let tt = 0, lf = performance.now();
    (function f(now) {
      const dt = Math.min(2, (now - lf) / 16); lf = now; tt += dt / 60;
      els.forEach((o) => {
        if (o.drag) { const nx = o.x + (o.tx - o.x) * .35, ny = o.y + (o.ty - o.y) * .35; o.vx = nx - o.x; o.vy = ny - o.y; o.x = nx; o.y = ny; }
        else {
          const gx = Math.sin(tt * 1.3 + o.ph) * 5, gy = Math.sin(tt * 1.7 + o.ph * 1.3) * 8;
          o.vx += ((gx - o.x) * .06 - o.vx * .1) * dt; o.vy += ((gy - o.y) * .06 - o.vy * .1) * dt;
          o.x += o.vx * dt; o.y += o.vy * dt;
        }
        o.el.style.translate = o.x.toFixed(1) + 'px ' + o.y.toFixed(1) + 'px';
      });
      requestAnimationFrame(f);
    })(performance.now());
  }
  /* vòng tròn theo chuột, to ra khi rê vào nút */
  function initRing() {
    if (coarse) return;
    const r = mk('rg'); r.style.opacity = 0;
    const hot = 'a,button,.pill,.dot,.gh,.shot,.af,.ax';
    const upd = (e) => {
      r.style.left = e.clientX + 'px'; r.style.top = e.clientY + 'px'; r.style.opacity = 1;
      const target = document.elementFromPoint(e.clientX, e.clientY) || e.target;
      r.classList.toggle('big', !!(target && target.closest && target.closest(hot)));
    };
    addEventListener('pointermove', upd, { passive: true });
    document.addEventListener('mouseleave', () => { r.style.opacity = 0; });
    addEventListener('blur', () => { r.style.opacity = 0; });
  }
  /* dải chữ chạy ngang dưới phần đầu trang */
  function initAlbum() {
    const FO = [
      { name: 'Góc đọc sách', photos: [
        { src: '/img/reading.jpg', cap: 'Đọc sách giữa những kệ sách' },
        { src: '/img/library-seat.jpg', cap: 'Khoảnh khắc trong thư viện' },
        { src: '/img/book-cafe.jpg', cap: 'Một góc quán sách' },
      ] },
      { name: 'Dạo phố', photos: [
        { src: '/img/painting.jpg', cap: 'Ngắm tranh và lưu lại khoảnh khắc' },
        { src: '/img/cafe-outfit.jpg', cap: 'Một buổi dạo phố' },
        { src: '/img/mirror-look.jpg', cap: 'Một chút phong cách thường ngày' },
      ] },
      { name: 'Thư giãn', photos: [
        { src: '/img/window-seat.jpg', cap: 'Ngồi bên khung cửa' },
        { src: '/img/evening-cafe.jpg', cap: 'Một buổi tối ở quán cà phê' },
        { src: '/img/garden-cafe.jpg', cap: 'Cà phê giữa không gian xanh' },
      ] },
    ];
    let PH = FO[0].photos, btn = null;
    const at = document.getElementById('hanh-trinh'); if (!at) return;
    const sec = document.createElement('section'); sec.id = 'album';
    sec.innerHTML = '<h2>Album</h2><p class="sub" style="margin:0 auto 3rem">Vài khoảnh khắc ngoài giờ làm việc.</p><button class="fd" aria-haspopup="dialog" aria-label="Mở album ảnh cá nhân"><span class="fb"></span><span class="fp p1"></span><span class="fp p2"></span><span class="fp p3"></span><span class="ff"></span></button><p class="fl"><b>Album ảnh cá nhân</b><br>' + PH.length + ' ảnh. Bấm vào thư mục để mở.</p>';
    at.after(sec);
    const one = sec.querySelector('.fd'), cap = sec.querySelector('.fl'), row = document.createElement('div'); row.className = 'fr';
    FO.forEach((f, k) => {
      const it = document.createElement('div'); it.className = 'fi';
      const b = one.cloneNode(true); b.dataset.k = k; b.setAttribute('aria-label', 'Mở ' + f.name);
      const t = document.createElement('p'); t.className = 'fl'; t.innerHTML = '<b></b><br>' + f.photos.length + ' ảnh'; t.firstChild.textContent = f.name;
      it.append(b, t); row.appendChild(it);
    });
    one.replaceWith(row); cap.remove();
    
    let ov = null, cur = -1;
    const photo = (p) => p.src ? '<img src="' + p.src + '" alt="' + p.cap + '" decoding="async">' : '<span class="ph">' + p.cap + '</span>';
    function show(i) {
      cur = i; const lb = ov.querySelector('.lb');
      if (i < 0) { lb.hidden = true; return; }
      lb.hidden = false; lb.querySelector('.lbi').innerHTML = photo(PH[i]);
      lb.querySelector('.lbc').textContent = PH[i].cap + ' (' + (i + 1) + '/' + PH.length + ')';
    }
    function close() { if (!ov) return; ov.remove(); ov = null; cur = -1; document.body.style.overflow = ''; document.body.classList.remove('ao'); removeEventListener('keydown', key); btn.focus(); }
    function key(e) {
      if (e.key === 'Escape') { if (cur >= 0) show(-1); else close(); }
      else if (cur >= 0 && e.key === 'ArrowRight') show((cur + 1) % PH.length);
      else if (cur >= 0 && e.key === 'ArrowLeft') show((cur + PH.length - 1) % PH.length);
    }
    sec.addEventListener('click', (ev) => {
      const fb = ev.target.closest('.fd'); if (!fb) return;
      btn = fb; const fo = FO[+fb.dataset.k]; PH = fo.photos; const title = fo.name;
      ov = document.createElement('div'); ov.className = 'al'; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-label', 'Album ảnh cá nhân');
      ov.innerHTML = '<div class="ah"><b>Album ảnh cá nhân</b><button class="ax">Đóng</button></div><div class="ag">' + PH.map((p, i) => '<button class="af" style="--r:' + (((i * 7) % 5) - 2) + 'deg;--d:' + (i * 55) + 'ms" data-i="' + i + '" aria-label="' + p.cap + '">' + photo(p) + '</button>').join('') + '</div><div class="lb" hidden><button class="lv" aria-label="Ảnh trước">‹</button><div class="lbm"><div class="lbi"></div><p class="lbc"></p></div><button class="ln" aria-label="Ảnh sau">›</button></div>';
      ov.addEventListener('click', (e) => {
        const f = e.target.closest('.af');
        if (f) return show(+f.dataset.i);
        if (e.target.closest('.ax')) return close();
        if (e.target.closest('.lv')) return show((cur + PH.length - 1) % PH.length);
        if (e.target.closest('.ln')) return show((cur + 1) % PH.length);
        if (e.target.classList.contains('lb')) show(-1);
      });
      ov.querySelector('.ah b').textContent = title; ov.setAttribute('aria-label', title);
      document.body.appendChild(ov); document.body.style.overflow = 'hidden'; document.body.classList.add('ao');
      addEventListener('keydown', key); ov.querySelector('.ax').focus();
    });
  }
  function initCard() {
    const hero = document.querySelector('.hero'), bar = hero && hero.querySelector('.bar'); if (!bar) return;
    const hx = document.createElement('div'); hx.className = 'hx';
    hx.innerHTML = '<div class="hl"><p class="big">Mình nghe người dùng nói họ cần gì, rồi vẽ thành sơ đồ và màn hình dễ dùng.</p><div class="bt"><a class="btn" href="#du-an">Xem dự án</a><a class="btn o" href="#lien-he">Liên hệ</a></div></div><div class="pd"><i class="pv"></i><div class="rp"></div><div class="id"><div class="idh"><span>PND</span><span>Thẻ giới thiệu</span></div><div class="idp"><img src="' + PF_ID + '" alt="Phạm Ngọc Dương" decoding="async"></div><b>Phạm Ngọc Dương</b><span class="r">Business Analyst, UI/UX</span><div class="bc"></div></div></div>';
    hero.insertBefore(hx, bar);
    if (rd) return;
    const pd = hx.querySelector('.pd'), id = hx.querySelector('.id'), pv = hx.querySelector('.pv');
    let th = .6, w = 0, pth = th, drag = false, last = performance.now();
    let dragY = 0, stretch = 0, stretchTarget = 0, stretchV = 0;
    id.addEventListener('pointerdown', (e) => { drag = true; dragY = e.clientY; stretchTarget = stretch; id.setPointerCapture(e.pointerId); id.style.cursor = 'grabbing'; });
    id.addEventListener('pointermove', (e) => {
      if (drag) { const r = pv.getBoundingClientRect(); th = Math.max(-1.4, Math.min(1.4, Math.atan2(-(e.clientX - (r.left + 7)), e.clientY - (r.top + 7)))); stretchTarget = Math.max(0, Math.min(130, e.clientY - dragY)); }
      else w -= Math.max(-.01, Math.min(.01, (e.movementX || 0) * .0005));
    });
    const up = () => { drag = false; stretchTarget = 0; id.style.cursor = ''; };
    id.addEventListener('pointerup', up); id.addEventListener('pointercancel', up);
    (function f(t) {
      const dt = Math.max(.25, Math.min(2, (t - last) / 16)); last = t;
      if (drag) w = (th - pth) / dt; else { w += (-.00176 * Math.sin(th) - .012 * w) * dt; th += w * dt; }
      if (drag) { const before = stretch; stretch += (stretchTarget - stretch) * Math.min(1, .28 * dt); stretchV = (stretch - before) / dt; }
      else { stretchV += (-.035 * stretch - .14 * stretchV) * dt; stretch += stretchV * dt; if (stretch < .15 && stretchV < .15) { stretch = 0; stretchV = 0; } }
      pd.style.setProperty('--stretch', stretch.toFixed(1) + 'px');
      pth = th; pd.style.transform = 'rotate(' + th + 'rad)';
      requestAnimationFrame(f);
    })(last);
  }
  function initSoft() {
    const me = document.querySelector('#gioi-thieu .me'); if (!me) return;
    const S = (b) => '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">' + b + '</svg>';
    const crown = S('<path d="M2 12L1.5 5l4 3L8 3l2.5 5 4-3L14 12z" fill="#F2B705"/><path d="M2 14h12"/>');
    const talk = S('<path d="M2 3h12v8H7l-3 3v-3H2z"/><path d="M5 6.2h6M5 8.4h4"/>');
    const clock = S('<circle cx="8" cy="8" r="6.5"/><path d="M8 4.5V8l2.5 1.5"/>');
    const medal = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 1.5l3 7M16.5 1.5l-3 7" stroke="#d33" stroke-width="2.2" stroke-linecap="round" fill="none"/><circle cx="12" cy="15.5" r="6.5" fill="#fff" stroke="#000" stroke-width="1.5"/><path d="M12 11.6l1.2 2.5 2.7.4-2 1.9.5 2.7-2.4-1.3-2.4 1.3.5-2.7-2-1.9 2.7-.4z" fill="#F2B705" stroke="#000" stroke-width=".8" stroke-linejoin="round"/></svg>';
    const d = document.createElement('div'); d.className = 'card';
    d.innerHTML = '<div class="sh"><h4>Kỹ năng mềm</h4><span class="md">' + medal + 'Đạt loại Giỏi</span></div><ul class="sf"><li><b>' + crown + 'Lãnh đạo</b><p>Biết nhận trách nhiệm và điều phối. Ở hai dự án nhóm 4 người, mình là cầu nối giữa yêu cầu của giảng viên và đội lập trình.</p></li><li><b>' + talk + 'Giao tiếp</b><p>Nghe khách hàng nói về công việc của họ, hỏi lại cho đến khi hiểu rõ, rồi giải thích chức năng bằng lời dễ hiểu. Mình đã làm vậy khi giới thiệu và chỉnh sửa LucyClass cùng khách hàng.</p></li><li><b>' + clock + 'Quản lý bản thân</b><p>Chia dự án thành các mốc nhỏ (yêu cầu, thiết kế, làm, kiểm thử, đưa lên chạy) và tự giữ tiến độ. LucyClass được hoàn thành độc lập trong 5 tháng, từ 1/2026 đến 5/2026.</p></li></ul>';
    const wrap = document.createElement('div'); wrap.className = 'rc'; me.before(wrap); wrap.append(me, d);
  }
  function initIcons() {
    const S = (b) => '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">' + b + '</svg>';
    const B = (bg, fg, t) => S('<rect width="16" height="16" rx="3.5" fill="' + bg + '" stroke="none"/><text x="8" y="11.2" text-anchor="middle" font-size="7.5" font-weight="700" fill="' + fg + '" stroke="none" font-family="Space Grotesk,sans-serif">' + t + '</text>');
    const cls = S('<rect x="2.5" y="1.5" width="11" height="13"/><path d="M2.5 5.5h11M2.5 10h11"/>');
    const I = {
      'Use case': S('<ellipse cx="8" cy="8" rx="6.5" ry="4"/>'),
      'Activity': S('<rect x="2" y="1.5" width="12" height="4.5" rx="2.2"/><path d="M8 6v2.5"/><path d="M8 8.5l4 3-4 3-4-3z"/>'),
      'Sequence': S('<rect x="1.5" y="1.5" width="5" height="3"/><rect x="9.5" y="1.5" width="5" height="3"/><path d="M4 4.5v10M12 4.5v10" stroke-dasharray="2 1.5"/><path d="M4 9h8M10 7.5l2 1.5-2 1.5"/>'),
      'Class': cls, 'Hướng đối tượng': cls,
      'UI/UX': S('<rect x="1.5" y="2" width="13" height="12" rx="2"/><path d="M1.5 6h13M5 10h3"/>'),
      'HTML': B('#E34F26', '#fff', 'H5'), 'CSS': B('#1572B6', '#fff', 'C3'), 'JavaScript': B('#F7DF1E', '#000', 'JS'), 'Docker': B('#2496ED', '#fff', 'Dk'), 'AI': S('<path d="M8 1l1.6 4.4L14 7l-4.4 1.6L8 13l-1.6-4.4L2 7l4.4-1.6z" fill="#A78BFA" stroke="none"/>'), 'React': B('#61DAFB', '#000', 'Re'), 'Node.js': B('#339933', '#fff', 'No'),
      'StarUML': S('<path d="M8 1.2l2 4.3 4.7.6-3.4 3.3.9 4.6L8 11.6 3.8 14l.9-4.6L1.3 6.1 6 5.5z" fill="#F2B705"/>'),
      'Antigravity': S('<circle cx="8" cy="8" r="6.5"/><path d="M8 11.5v-7M5 7.5l3-3 3 3"/>'),
      'Claude': S('<g stroke="#D97757" stroke-width="1.7"><path d="M8 1.5v13M1.5 8h13M3.4 3.4l9.2 9.2M12.6 3.4l-9.2 9.2M5 2l6 12M11 2L5 14"/></g>'),
      'GitHub': '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
      'Vercel': S('<path d="M8 2l7 12H1z" fill="currentColor"/>'),
      'MongoDB': S('<path d="M8 1c2.5 2.6 4 4.7 4 7.2 0 2.4-1.5 4.2-3.5 4.8V15H7.4v-2C5.5 12.4 4 10.6 4 8.2 4 5.7 5.5 3.6 8 1z" fill="#47A248" stroke="none"/>')
    };
    document.querySelectorAll('.ch span').forEach((c) => { const k = c.textContent.trim(); if (I[k]) c.insertAdjacentHTML('afterbegin', I[k]); });
    const h4 = [...document.querySelectorAll('#gioi-thieu .sk h4')].find((h) => h.textContent.trim() === 'Công cụ');
    if (h4 && h4.nextElementSibling) ['Vercel', 'MongoDB'].forEach((n) => { const s = document.createElement('span'); s.innerHTML = I[n] + n; h4.nextElementSibling.appendChild(s); });
  }
  function initNow() {
    const at = document.getElementById('album'); if (!at) return;
    const days = Math.max(0, Math.floor((Date.now() - new Date(2026, 7, 10)) / 864e5));
    const sec = document.createElement('section'); sec.id = 'dao-nay'; sec.style.textAlign = 'center';
    sec.innerHTML = '<h2>Dạo này</h2><div class="nw"><div class="card"><b>' + days + '</b><p>ngày kể từ ngày đầu tiên ở Z176</p></div><div class="card"><h3>Đang viết khóa luận</h3><p>Module hỗ trợ thi chuyên môn nghiệp vụ giỏi.</p></div><div class="card bk"><h3>Đang tìm việc</h3><p>Business Analyst phần mềm quản lý, hoặc UI/UX, từ năm 2027.</p><a class="btn" href="mailto:duong210804@gmail.com">Nhắn cho mình</a></div></div>';
    at.after(sec);
  }
  function initWave() {
    const h1 = document.querySelector('h1'); if (!h1) return;
    const L = [];
    h1.querySelectorAll('span').forEach((s) => { const t = s.textContent; s.textContent = ''; [...t].forEach((c) => { const e = document.createElement('i'); e.className = 'lt'; e.textContent = c === ' ' ? '\u00a0' : c; s.appendChild(e); L.push(e); }); });
    addEventListener('pointermove', (ev) => {
      if (scrollY > innerHeight * .8) return;
      L.forEach((e) => {
        const r = e.getBoundingClientRect(), cy = r.top + r.height / 2 - (e._y || 0), d = Math.hypot(ev.clientX - (r.left + r.width / 2), ev.clientY - cy), k = Math.max(0, 1 - d / 230);
        e._y = -k * 22; e.style.transform = 'translateY(' + e._y + 'px) scale(' + (1 + k * .1) + ')';
      });
    }, { passive: true });
  }
  function initWork() {
    const at = document.getElementById('gioi-thieu'); if (!at) return;
    const ST = [[6, 'dự án đã làm'], [3, 'nơi đã thực tập và làm freelance'], [4, 'năm học đại học']];
    const WK = [
      ['Nghe yêu cầu', 'Ngồi nghe khách hàng hoặc người dùng nói họ cần gì, hỏi lại cho đến khi hiểu rõ.', 'Ví dụ: nhận yêu cầu trực tiếp từ trung tâm tiếng Anh cho LucyClass.'],
      ['Phân tích', 'Viết đặc tả, tách yêu cầu thành vai trò và chức năng.', 'Ví dụ: LucyClass chia thành 3 vai trò Admin, Teacher, Marketing.'],
      ['Vẽ sơ đồ', 'Dùng use case, activity, sequence và class để cả nhóm cùng nhìn một bức tranh.', 'Ví dụ: bộ sơ đồ UML vẽ bằng StarUML cho khóa luận Z176.'],
      ['Thiết kế giao diện', 'Làm màn hình dễ dùng với đúng người sẽ dùng nó.', 'Ví dụ: giao diện nhiều vai trò của LucyClass và Z176 LMS.'],
      ['Thử và bàn giao', 'Tự kiểm thử từng chức năng rồi đưa lên chạy thật.', 'Ví dụ: LucyClass đã chạy production, có link chạy thử ở phần Dự án.']
    ];
    const sec = document.createElement('section'); sec.id = 'cach-lam';
    sec.innerHTML = '<h2>Cách mình làm việc</h2><div class="sn">' + ST.map((s) => '<div><b data-n="' + s[0] + '">0</b><span>' + s[1] + '</span></div>').join('') + '</div><div class="wt" role="tablist">' + WK.map((w, i) => '<button role="tab" data-i="' + i + '"><i>' + (i + 1) + '</i>' + w[0] + '</button>').join('') + '</div><div class="card wc"><h3></h3><p></p><small></small></div>';
    at.after(sec);
    const tabs = [...sec.querySelectorAll('.wt button')], c = sec.querySelector('.wc');
    let cur = 0, stop = rd;
    const show = (i) => {
      cur = i; tabs.forEach((b, k) => { b.classList.toggle('act', k === i); b.setAttribute('aria-selected', k === i); });
      c.querySelector('h3').textContent = (i + 1) + '. ' + WK[i][0]; c.querySelector('p').textContent = WK[i][1]; c.querySelector('small').textContent = WK[i][2];
      c.classList.remove('ch'); void c.offsetWidth; c.classList.add('ch');
    };
    tabs.forEach((b, k) => b.addEventListener('click', () => { stop = true; show(k); }));
    show(0);
    if (!rd) setInterval(() => { if (!stop) show((cur + 1) % WK.length); }, 4500);
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return; io.unobserve(e.target);
      const n = +e.target.dataset.n; if (rd) { e.target.textContent = n; return; }
      const t0 = performance.now();
      (function f(t) { const p = Math.min(1, (t - t0) / 1200); e.target.textContent = Math.round(n * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); })(t0);
    }), { threshold: .6 });
    sec.querySelectorAll('[data-n]').forEach((b) => io.observe(b));
  }
  function rain(x, y, n) {
    for (let i = 0; i < n; i++) {
      const e = document.createElement('span'); e.textContent = '✦';
      e.style.cssText = 'position:fixed;z-index:40;pointer-events:none;color:#F2B705;left:' + x + 'px;top:' + y + 'px;font-size:' + (14 + Math.random() * 14) + 'px';
      document.body.appendChild(e);
      const a = Math.random() * Math.PI * 2, d = 60 + Math.random() * 120;
      e.animate([{ transform: 'translate(0,0) rotate(0)', opacity: 1 }, { transform: 'translate(' + Math.cos(a) * d + 'px,' + (Math.sin(a) * d + 140) + 'px) rotate(' + (Math.random() * 540 - 270) + 'deg)', opacity: 0 }], { duration: 1000 + Math.random() * 600, easing: 'cubic-bezier(.2,.8,.3,1)' }).onfinish = () => e.remove();
    }
  }
  function pour() {
    for (let i = 0; i < 26; i++) {
      const e = document.createElement('span'); e.textContent = '🍍';
      e.style.cssText = 'position:fixed;z-index:40;pointer-events:none;top:-40px;left:' + Math.random() * 96 + 'vw;font-size:' + (22 + Math.random() * 22) + 'px';
      document.body.appendChild(e);
      e.animate([{ transform: 'translateY(0) rotate(0)' }, { transform: 'translateY(' + (innerHeight + 90) + 'px) rotate(' + (Math.random() * 720 - 360) + 'deg)' }], { duration: 2200 + Math.random() * 1800, delay: Math.random() * 900, easing: 'cubic-bezier(.4,0,.8,.6)', fill: 'backwards' }).onfinish = () => e.remove();
    }
  }
  function initFun() {
    let buf = '';
    addEventListener('keydown', (e) => { if (!e.key || e.key.length !== 1) return; buf = (buf + e.key.toLowerCase()).slice(-3); if (buf === 'dua') { buf = ''; pour(); say(G[1], 'Dứa rơi nè!'); } });
    document.addEventListener('click', (e) => { const b = e.target.closest && e.target.closest('.em button'); if (!b) return; const r = b.getBoundingClientRect(); rain(r.left + r.width / 2, r.top + r.height / 2, 16); });
  }
  function addMarquee() {
    const hd = document.querySelector('.hero'); if (!hd) return;
    const m = document.createElement('div'); m.className = 'mq';
    const t = 'Business Analyst  ✦  UI/UX  ✦  Phân tích thiết kế  ✦  Hướng đối tượng  ✦  ';
    m.innerHTML = '<div class="mt"><span>' + t.repeat(4) + '</span><span aria-hidden="true">' + t.repeat(4) + '</span></div>';
    hd.after(m);
  }
  let last = performance.now(), pmx = 0, pmy = 0, psy = 0, lm = performance.now();
  function tick(now) {
    const dt = Math.min(40, now - last); last = now;
    const W = innerWidth;
    if (mx !== pmx || my !== pmy || scrollY !== psy) { pmx = mx; pmy = my; psy = scrollY; lm = now; }
    const sleepy = now - lm > 15000;
    G.forEach((g) => {
      const dd = Math.hypot(mx - (g.x + 23), my - (innerHeight - 26 + g.fy));
      if (!coarse && dd < 165) {
        if (g.st !== 'flee') {
          // Give each character its own escape angle, then add local separation
          // so the group fans out instead of heading for the same edge.
          const away = Math.atan2(innerHeight - 26 + g.fy - my, g.x + 23 - mx);
          const spread = [-.72, .55, 1.18][G.indexOf(g) % 3];
          const a = away + spread;
          g.fvx = Math.cos(a) * 4.2; g.fvy = Math.sin(a) * 3.4;
        }
        g.st = 'flee'; g.fear = 40; g.dir = g.fvx < 0 ? -1 : 1;
        const leftCorner = g.x < 34, rightCorner = g.x > W - 82;
        const corner = (leftCorner && g.dir < 0) || (rightCorner && g.dir > 0);
        if (corner && !g.lp && !(g.cool > 0)) {
          const lx = leftCorner
            ? Math.min(W - 56, Math.max(105, mx + 125))
            : Math.max(8, Math.min(W - 150, mx - 125));
          if (Math.abs(lx - g.x) > 55) { g.lp = { x0: g.x, x1: lx, p: 0 }; g.hp = -1; g.sayT = now; say(g, 'Hây ya!'); }
        }
        if (corner && !g.lp && g.hp < 0) g.hp = 0;
        if (g.hp < 0 && !g.lp && Math.random() < .03) g.hp = 0;
        if (!g.sayT || now - g.sayT > 2200) { g.sayT = now; say(g, fearLines[Math.floor(Math.random() * fearLines.length)]); }
      } else if (g.st === 'flee') { g.fear -= dt / 16; if (g.fear <= 0) { g.st = 'idle'; g.t = 60; } }
      if (sleepy && g.st !== 'flee') { g.st = 'idle'; g.t = 99; }
      if (g.st !== 'flee') g.t -= dt / 16; else g.t = 99;
      if (g.t <= 0) {
        if (g.st === 'walk') { g.st = 'idle'; g.t = 60 + Math.random() * 160; }
        else { g.st = 'walk'; g.dir = Math.random() < .5 ? -1 : 1; g.t = 120 + Math.random() * 260; if (Math.random() < .35) g.hp = 0; }
      }
      if (g.cool > 0) g.cool -= dt / 16;
      if (g.lp) { g.lp.p += dt / 850; const p = Math.min(1, g.lp.p), q = p * p * (3 - 2 * p); g.x = g.lp.x0 + (g.lp.x1 - g.lp.x0) * q; if (p >= 1) { g.lp = null; g.cool = 110; } }
      else if (g.st === 'walk') g.x += g.dir * g.sp * dt / 16 * 1.3; else if (g.st === 'flee') {
        // Maintain a personal no-go radius around the pointer, even when it
        // follows the character or lands directly on top of it.
        const cx = g.x + 23, cy = innerHeight - 26 + g.fy;
        let awayX = cx - mx, awayY = cy - my, pointerDist = Math.hypot(awayX, awayY);
        if (pointerDist < 112) {
          if (pointerDist < 1) { const a = (G.indexOf(g) - 1) * .9 - Math.PI / 2; awayX = Math.cos(a); awayY = Math.sin(a); pointerDist = 1; }
          const pressure = (112 - pointerDist) / 112;
          g.fvx += awayX / pointerDist * (1.8 + pressure * 3.2) * dt / 16;
          g.fvy += awayY / pointerDist * (1.8 + pressure * 3.2) * dt / 16;
        }
        let sx = 0, sy = 0;
        G.forEach((other) => { if (other === g) return; const dx = g.x - other.x, dy = g.fy - other.fy, d2 = dx * dx + dy * dy; if (d2 < 110 * 110) { const d = Math.sqrt(d2) || 1, force = (110 - d) / 110; sx += dx / d * force * 1.8; sy += dy / d * force * 1.8; } });
        g.fvx += sx * dt / 16; g.fvy += sy * dt / 16;
        g.fvx *= .985; g.fvy *= .985;
        const speed = Math.hypot(g.fvx, g.fvy); if (speed > 10) { g.fvx = g.fvx / speed * 10; g.fvy = g.fvy / speed * 10; }
        g.x += g.fvx * dt / 16; g.fy += g.fvy * dt / 16;
        // Keep the runners in a shallow lane above the bottom edge; pointer
        // pressure must never accumulate into a flight across the viewport.
        if (g.fy < -48) { g.fy = -48; if (g.fvy < 0) g.fvy = 0; }
        if (g.fy > 0) { g.fy = 0; if (g.fvy > 0) g.fvy = 0; }
      } else g.fy *= .88;
      if (g.x < 8) { g.x = 8; g.dir = 1; if (g.fvx < 0) g.fvx = 0; } if (g.x > W - 56) { g.x = W - 56; g.dir = -1; if (g.fvx > 0) g.fvx = 0; }
      let y = g.lp ? Math.sin(Math.min(1, g.lp.p) * Math.PI) * 76 : -g.fy;
      if (g.hp >= 0) { g.hp += dt / 520; if (g.hp >= 1) g.hp = -1; else y = Math.sin(g.hp * Math.PI) * 36; }
      g.el.style.transform = 'translate3d(' + g.x + 'px,' + (-y) + 'px,0)';
      g.el.classList.toggle('walk', g.st === 'walk' || g.st === 'flee'); g.el.classList.toggle('fear', g.st === 'flee'); g.el.classList.toggle('lp', !!g.lp); g.el.classList.toggle('zz', sleepy && g.st === 'idle');
      const r = g.el.getBoundingClientRect(), dx = mx - (r.left + 23), dy = my - (r.top + 26), d = Math.hypot(dx, dy) || 1, k = Math.min(3, d / 40);
      g.eyes.forEach((e) => { e.style.translate = (dx / d * k) + 'px ' + (dy / d * k) + 'px'; });
      if (bub._g === g) { bub.style.left = (g.x + 23) + 'px'; bub.style.bottom = 'calc(env(safe-area-inset-bottom,0px) + ' + (62 + y) + 'px)'; }
    });
    requestAnimationFrame(tick);
  }
  if (rd) G.forEach((g) => { g.el.style.transform = 'translate3d(' + g.x + 'px,0,0)'; }); else requestAnimationFrame(tick);
  setTimeout(() => say(G[0], 'Chào bạn! ✨'), 1400);

  setTimeout(() => { initAlbum(); initNow(); initWork(); initCard(); initIcons(); initSoft(); if (!rd) initFun(); }, 300);
  if (rd) return;
  /* thanh tiến độ cuộn + dịch chuyển nhẹ ở hero */
  const pg = mk('', 'pg');
  let busy = false;
  const onScroll = () => {
    if (busy) return; busy = true;
    requestAnimationFrame(() => {
      busy = false;
      const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
      pg.style.transform = 'scaleX(' + (max > 0 ? y / max : 0) + ')';
      if (y < innerHeight) {
        const a = document.querySelector('.pills'), b = document.querySelector('.code');
        if (a) a.style.transform = 'translateX(' + (y * .25) + 'px)';
        if (b) b.style.transform = 'translateX(' + (-y * .25) + 'px)';
      }
    });
  };
  addEventListener('scroll', onScroll, { passive: true });
  setTimeout(() => {
    /* hiện dần khi cuộn tới */
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target); (window.__go || Promise.resolve()).then(() => swarm(e.target));
    }), { threshold: .12 });
    document.querySelectorAll('.ab .card,.me,.pj,.it,.sub,section h2,.ct>div,.hero .pills,.hero .bar').forEach((el) => { el.setAttribute('data-rv', ''); io.observe(el); });
    /* ảnh dự án nghiêng theo chuột */
    initFloat(); initRing(); addMarquee(); initWave();
    document.querySelectorAll('.shot').forEach((s) => {
      s.addEventListener('pointermove', (e) => { const r = s.getBoundingClientRect(), px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5; s.style.transform = 'perspective(900px) rotateY(' + (px * 8) + 'deg) rotateX(' + (-py * 8) + 'deg) scale(1.02)'; });
      s.addEventListener('pointerleave', () => { s.style.transform = ''; });
    });
  }, 300);
})();


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
    'Mã nguồn': 'Source code', 'Chạy thử': 'Live demo', 'Xem trang chạy thử': 'Try the live demo', 'Ảnh chụp màn hình dự án sẽ đặt ở đây': 'Project screenshot goes here',
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
