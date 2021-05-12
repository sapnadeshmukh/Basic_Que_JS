const promise = new Promise((resolve, reject) => {})
console.log(promise)
const promise1 = new Promise((resolve, reject) => {
    resolve('We did it!')
  })
  console.log(promise1)

  fetch('https://api.github.com/users/octocat')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })
