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


//Deletes a student.
const deletePost = (id) => {
    fetch(`/api/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => getPosts(postCategorySelect.value));
  };
  // Delete button
    const checkBox = document.getElementsByClassName('deleteCheckbox')
    const deleteBtn = document.getElementById('deleteButton');
    checkBox.addEventListener('click', deleteBtn)
    deleteBtn.addEventListener('click', handlePostDelete);
  
     const handlePostDelete = (e) => {
       const currentPost = JSON.parse(
         e.target.parentElement.parentElement.dataset.post
       );
       deletePost(currentPost.id);
     };
  
deletePost();
handlePostDelete();