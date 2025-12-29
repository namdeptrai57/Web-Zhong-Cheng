import {partnerLogos,partnerLogoBasePath} from "./data.js";
/*Partner Logos*/
$(function(){
  const container = document.getElementById('partner-logo-list');
  // Nhân đôi danh sách logo để khi animation chạy đến -50% sẽ khớp với điểm bắt đầu
  const infiniteLogos = [...partnerLogos, ...partnerLogos];
  infiniteLogos.forEach((logo) => {
    const img = document.createElement('img');
    img.src= partnerLogoBasePath + logo.fileName;
    img.alt = logo.alt;
    img.classList.add('logo-ticker-image');
    container.appendChild(img);

  });
    
}
);

