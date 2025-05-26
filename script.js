function submitReview(event) {
  event.preventDefault();

  const name = document.getElementById('reviewerName').value;
  const stars = parseInt(document.getElementById('reviewStars').value);
  const content = document.getElementById('reviewContent').value;

  const container = document.getElementById("review-list");
  const review = document.createElement("div");
  review.className = "review-item";
  review.innerHTML = `
    <strong>${name}</strong><br/>
    <span>${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}</span><br/>
    ${content}
  `;

  container.prepend(review);

  document.getElementById('reviewerName').value = '';
  document.getElementById('reviewStars').value = '5';
  document.getElementById('reviewContent').value = '';
}
