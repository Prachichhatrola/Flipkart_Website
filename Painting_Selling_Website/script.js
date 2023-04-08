// Function to get a random image from Google
function getRandomImage() {
	const searchTerm = 'painting';
	const startIndex = Math.floor(Math.random() * 100);
	const url = `https://www.googleapis.com/customsearch/v1?q=${searchTerm}&cx={your-cx}&imgSize=large&num=1&searchType=image&start=${startIndex}&key={your-api-key}`;
	fetch(url)
		.then(response => response.json())
		.then(data => {
			const image = data.items[0].link;
			const img = document.createElement('img');
			img.src = image;
			img.alt = 'Painting';
			const gallery = document.querySelector('.gallery');
			gallery.appendChild(img);
		})
		.catch(error => console.error(error));
}

// Call the function to get a random image
getRandomImage();

// Function to add a comment to the comment section
function addComment(event) {
	event.preventDefault();
	const comment = document.getElementById('comment').value;
	const commentsSection = document.querySelector('.comments');
	const p = document.createElement('p');
	p.textContent = comment;
	commentsSection.appendChild(p);
}

// Add an event listener to the comment form
const commentForm = document.querySelector('form');
commentForm.addEventListener('submit', addComment);

// Add comments to the gallery section
const paintings = document.querySelectorAll(".painting");
paintings.forEach(painting => {
	const comment = document.createElement("p");
	comment.innerText = "Add your comment here";
	painting.appendChild(comment);
});
