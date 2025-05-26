function submitReview(event) {
  event.preventDefault();

  const name = document.getElementById('reviewerName').value;
  const stars = parseInt(document.getElementById('reviewStars').value);
  const content = document.getElementById('reviewContent').value;

  const container = document.getElementById("review-list");
  const review = document.createElement("div");
  review.className = "review-item";
  review.innerHTML = `
    <strong>${name}</strong>
    <span>${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}</span>
    <p>${content}</p>
  `;

  container.prepend(review);

  // 폼 초기화
  document.getElementById('reviewerName').value = '';
  document.getElementById('reviewStars').value = '5';
  document.getElementById('reviewContent').value = '';
}
let currentIndex = 0;
const track = document.getElementById('galleryTrack');
const images = track.querySelectorAll('img');
const total = images.length;

function slideGallery() {
  currentIndex = (currentIndex + 1) % total;
  const scrollAmount = currentIndex * (320 + 20); // 이미지 너비 + gap
  track.style.transform = `translateX(-${scrollAmount}px)`;
}

setInterval(slideGallery, 3000); // 3초마다 슬라이드
