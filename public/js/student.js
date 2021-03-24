//Throws student table to page.
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



//updates student
    const checkBox = document.getElementsByClassName('deleteCheckbox')
    const deleteBtn = document.getElementById('updateButton');
    checkBox.addEventListener('click', deleteBtn)
    deleteBtn.addEventListener('click', handlePostDelete);

const updateStudent = (post) => {
    fetch('/api/student', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then(() => {
        console.log('Attempting update to post');
        window.location.href = '/student';
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


