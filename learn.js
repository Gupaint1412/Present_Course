document.addEventListener('DOMContentLoaded', () => {
    const progressDonut = document.getElementById('progress-donut');
    const progressText = document.getElementById('progress-percentage');
    const lessonList = document.getElementById('lesson-list');

    // ข้อมูลจำลองของบทเรียน (ตามภาพคือ 4/5)
    // ผมจะตั้ง Total lessons เป็น 5 เพื่อให้ Progress เป็น 4/5
    const lessons = [
        { id: 1, title: "1. Introduction to Python", completed: true },
        { id: 2, title: "2. Applications of Python...", completed: true },
        { id: 3, title: "3. Python Structure & Syntax", completed: true },
        { id: 4, title: "4. Exploring List", completed: true },
        { id: 5, title: "5. Exploring Dictionary (Active)", completed: false, current: true }, 
    ];

    function updateProgress() {
        const completedCount = lessons.filter(l => l.completed).length;
        const totalLessons = lessons.length;
        
        // คำนวณเปอร์เซ็นต์
        const progressPercentage = Math.round((completedCount / totalLessons) * 100);

        // อัปเดตข้อความ
        progressText.textContent = `${completedCount}/${totalLessons}`;
        
        // อัปเดตโดนัทความคืบหน้า (Progress Donut) โดยใช้ CSS Variable
        progressDonut.style.setProperty('--progress-value', progressPercentage);
    }

    // เรียกใช้เพื่อแสดงผลเริ่มต้น (4/5)
    updateProgress();

    // Event Listener สำหรับปุ่ม
    document.querySelector('.download-doc').addEventListener('click', () => {
        alert('กำลังดาวน์โหลดเอกสาร...');
    });

    document.querySelector('.download-cert').addEventListener('click', () => {
        alert('กำลังตรวจสอบสิทธิ์ใบรับรอง...');
    });
});