const question = document.querySelectorAll('.question');

question.forEach(qa => {
  qa.addEventListener('click',showContent);
  
});

function showContent(){
  const questionTitle = document.querySelector('.question-title');
  const qaIcon = document.querySelector('.icon');
  const answer = document.querySelector('.answer');
  questionTitle.classList.toggle('text-primary');
  answer.classList.toggle('show-ans');
  console.log(this)
}
