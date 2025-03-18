document.addEventListener('DOMContentLoaded', () => {
    // FiveM yükleme olaylarını dinle
    window.addEventListener('message', function(e) {
        if (e.data.eventName === 'loadProgress') {
            // Yükleme çubuğunu güncelle
            const progress = Math.round(e.data.loadFraction * 100);
            updateLoadingProgress(progress);
        }
    });

    // Test için simüle edilmiş yükleme (gerçek FiveM ortamında kaldırılabilir)
    simulateLoading();
});

function updateLoadingProgress(progress) {
    const progressBar = document.querySelector('.progress');
    const percentage = document.querySelector('.percentage');
    const statusText = document.querySelector('.status-text');
    const loadingText = document.querySelector('.loading-text');

    progressBar.style.width = `${progress}%`;
    percentage.textContent = `${progress}%`;

    // Yükleme durumuna göre mesajları güncelle
    if (progress < 25) {
        statusText.textContent = 'DOSYALAR HAZIRLANIYOR';
        loadingText.textContent = 'Sunucu dosyaları hazırlanıyor...';
    } else if (progress < 50) {
        statusText.textContent = 'KAYNAKLAR YÜKLENİYOR';
        loadingText.textContent = 'Sunucu kaynakları yükleniyor...';
    } else if (progress < 75) {
        statusText.textContent = 'SCRIPTLER BAŞLATILIYOR';
        loadingText.textContent = 'Sunucu scriptleri başlatılıyor...';
    } else if (progress < 100) {
        statusText.textContent = 'SUNUCU HAZIRLANIYOR';
        loadingText.textContent = 'Son hazırlıklar yapılıyor...';
    } else {
        statusText.textContent = 'SUNUCU HAZIR';
        loadingText.textContent = 'Roleplay deneyimine hazırsınız!';
    }
}

// Test için yükleme simülasyonu (gerçek FiveM ortamında kaldırılabilir)
function simulateLoading() {
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress > 100) {
            progress = 100;
            clearInterval(interval);
        }
        updateLoadingProgress(Math.round(progress));
    }, 1000);
}

// Kartlar için hover efekti ve ışık animasyonu
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateX(-10px)';
    });
    
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateX(0)';
    });
}); 