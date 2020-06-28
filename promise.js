const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video one recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video two recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video three recorded')
})

Promise.race([
    recordVideoOne, 
    recordVideoTwo, 
    recordVideoThree
]).then((message) => {
    console.log(message)
})