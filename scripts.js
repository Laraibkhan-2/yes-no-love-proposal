console.log("LARAIB KHAN");
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const heading = document.getElementById('heading');
const image = document.getElementById('image');


function moveButton() {
  const newX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
  const newY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
  noButton.style.position = 'absolute';
  noButton.style.left = newX + 'px';
  noButton.style.top = newY + 'px';
  
}
function textChange() {
        heading.textContent = "Aisa nhi bolo na plzz! YOU LOVE ME I KNOW";
        image.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e647605a-8e2c-4ed7-98ae-754a8d672b6a/dep4di2-336766be-469f-4988-8522-3bc80857821f.jpg/v1/fill/w_1280,h_682,q_75,strp/tom_and_jerry_sad_tom_with_tears_3_by_princessamulet16_dep4di2-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjgyIiwicGF0aCI6IlwvZlwvZTY0NzYwNWEtOGUyYy00ZWQ3LTk4YWUtNzU0YThkNjcyYjZhXC9kZXA0ZGkyLTMzNjc2NmJlLTQ2OWYtNDk4OC04NTIyLTNiYzgwODU3ODIxZi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.V-XIiQWWiU553VKysf-5mpyQavwse1pXAkDFvv7OXgs" // Reset image source if desired
      };

yesButton.addEventListener('click', () => {
  heading.textContent = "Hehe, I knew it!😊";
  //after click on yes
  image.src = "https://i.pinimg.com/originals/46/28/67/462867bf3097968f2767be61b069f64d.gif";
  yesButton.style.display = "none";
  noButton.style.display = "none";// Change image source if desired
});

