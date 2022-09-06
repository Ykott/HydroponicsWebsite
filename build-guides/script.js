const nav = document.querySelector('.navbar')
const foot = document.querySelector('.foot')
const sidebar = document.querySelector('.sidebar')
const posts = document.querySelector('.posts')

fetch('../../general-files/navbar.html')
  .then(res => res.text())
  .then(data => {
    nav.innerHTML = data
  })

fetch('../../general-files/footer.html')
  .then(res => res.text())
  .then(data => {
    foot.innerHTML = data
  })

fetch('../../general-files/sidebar.html')
  .then(res => res.text())
  .then(data => {
    sidebar.innerHTML = data
  })

fetch('../../general-files/posts.html')
  .then(res => res.text())
  .then(data => {
    posts.innerHTML = data
  })