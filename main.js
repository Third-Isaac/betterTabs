
  //url
  fetch('w3schools.com')
  .then((data) => data.json())
  .then((data) => {
    console.log(data)
  })
