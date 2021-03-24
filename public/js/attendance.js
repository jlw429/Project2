

const getPosts = (category) => {
  fetch(`/api/attendance/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success in getting posts:', data);
      // posts = data;
    })
    .catch((error) => console.error('Error:', error));
};

getPosts();

// fetch(`/api/attendance`, {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('Success in getting posts:', data);
    
//   })
//   .catch((error) => console.error('Error:', error));