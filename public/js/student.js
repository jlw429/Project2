
const getAllStudents = (category) => {
  fetch(`/api/student/`, {
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

getAllStudents();
