// ข้อมูลสมาชิก 10 คน (แก้ไขรูปภาพและชื่อได้ที่นี่)
const membersData = [
    { name: "นายสมชาย ใจดี", role: "ประธานนักเรียน", img: "https://via.placeholder.com/200?text=Member+1", desc: "มุ่งมั่นพัฒนาโรงเรียน เพื่อเพื่อนทุกคน", ig: "somchai.ysp", fb: "Somchai Jaidee" },
    { name: "นางสาวสมหญิง จริงใจ", role: "รองประธานฝ่ายวิชาการ", img: "https://via.placeholder.com/200?text=Member+2", desc: "ผลักดันนโยบายพอร์ตโฟลิโอ", ig: "somying.real", fb: "Somying Jingjai" },
    { name: "นายเก่ง กล้าหาญ", role: "รองประธานฝ่ายกิจกรรม", img: "https://via.placeholder.com/200?text=Member+3", desc: "สนุกทุกกิจกรรม สานสัมพันธ์พี่น้อง", ig: "keng_brave", fb: "Keng Klahan" },
    { name: "นางสาวสวย ใสๆ", role: "เหรัญญิก", img: "https://via.placeholder.com/200?text=Member+4", desc: "ดูแลงบประมาณอย่างโปร่งใส", ig: "suay.sai", fb: "Suay Saisai" },
    { name: "นายเท่ห์ ทันสมัย", role: "ประชาสัมพันธ์", img: "https://via.placeholder.com/200?text=Member+5", desc: "อัพเดทข่าวสาร ฉับไว ทันเหตุการณ์", ig: "tae.cool", fb: "Tae Tun" },
    { name: "นางสาวดาว เด่น", role: "กรรมการฝ่ายสวัสดิการ", img: "https://via.placeholder.com/200?text=Member+6", desc: "ดูแลกล่องยาและสวัสดิการทุกคน", ig: "dao.den", fb: "Dao Den" },
    { name: "นายบอย เกมเมอร์", role: "กรรมการฝ่าย E-Sport", img: "https://via.placeholder.com/200?text=Member+7", desc: "ขับเคลื่อนวงการเกมในรั้วโรงเรียน", ig: "boy.gamer", fb: "Boy Gamer" },
    { name: "นางสาวฟ้า สดใส", role: "กรรมการฝ่ายศิลป์", img: "https://via.placeholder.com/200?text=Member+8", desc: "สร้างสรรค์งานศิลป์ ออกแบบสื่อ", ig: "fah.fresh", fb: "Fah Sodsai" },
    { name: "นายเข้ม แข็งแรง", role: "กรรมการฝ่ายกีฬา", img: "https://via.placeholder.com/200?text=Member+9", desc: "พัฒนาระบบยืมคืนอุปกรณ์กีฬา", ig: "kem.sport", fb: "Kem Kangrang" },
    { name: "นางสาวน้ำ ใจงาม", role: "เลขานุการ", img: "https://via.placeholder.com/200?text=Member+10", desc: "ประสานงานทุกฝ่าย ขับเคลื่อนนโยบาย", ig: "nam.jai", fb: "Nam Jaingam" },
];

// ฟังก์ชันสร้างการ์ดสมาชิกอัตโนมัติ
const membersContainer = document.querySelector('.members-container');

membersData.forEach((member, index) => {
    const card = document.createElement('div');
    card.classList.add('member-card');
    card.setAttribute('onclick', `openModal(${index})`); // คลิกแล้วเรียกฟังก์ชัน openModal

    card.innerHTML = `
        <img src="${member.img}" alt="${member.name}" class="member-img">
        <div class="member-info">
            <h4>${member.name}</h4>
            <p>${member.role}</p>
            <span class="click-more">คลิกดูรายละเอียด</span>
        </div>
    `;
    membersContainer.appendChild(card);
});

// จัดการ Modal Popup
const modal = document.getElementById('memberModal');
const closeBtn = document.querySelector('.close-btn');

// ฟังก์ชันเปิด Modal และใส่ข้อมูล
function openModal(index) {
    const member = membersData[index];
    document.getElementById('modal-img').src = member.img;
    document.getElementById('modal-name').innerText = member.name;
    document.getElementById('modal-role').innerText = member.role;
    document.getElementById('modal-desc').innerText = `"${member.desc}"`;
    document.getElementById('modal-ig').innerText = member.ig;
    document.getElementById('modal-fb').innerText = member.fb;
    
    modal.style.display = "flex";
}

// ปิด Modal เมื่อกดปุ่มกากบาท
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// ปิด Modal เมื่อกดพื้นที่ว่างๆ ข้างนอก
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

