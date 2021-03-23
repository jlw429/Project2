const express = require('express');
const exphbs = require('express-handlebars');
var title = {
    "Student":[
        {
            "title":"<h2>GradeBook<h2>"
        },]
}

$(document).ready(function(){
    var studentTit=$("#student-Tit").html();
    var compiledStudentTit= Handlebars.compiled(studentTit);
    $(".body").html(compiledStudentTit(cast.Student[0]));
});