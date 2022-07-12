const form = document.getElementById('form')
const inputField = document.getElementById('input')
const submitBtn = document.getElementById('submitBtn')
const commentField = document.getElementById('comments')

const noGoWords = ['zoom', 'channel', 'galvanize', 'mcsp', 'garrett', 'ross', 'incompetent', 'unfunny']


submitBtn.addEventListener('click', function(e) {
  e.preventDefault()
  createComment()
  inputField.value = ''
})

function createComment() {
  const comment = document.createElement('div')
  comment.classList.add('individualComment')
  for (let x = 0; x < noGoWords.length; x++) {
    let current = noGoWords[x];
    if (current === inputField.value.toLowerCase()) {
      comment.textContent = current[0] + '----'
      commentField.appendChild(comment)
      return

    } else {
      comment.textContent = inputField.value
      commentField.appendChild(comment)
    }
  }
}

