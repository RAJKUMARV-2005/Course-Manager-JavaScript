function Student(student_name,course_name,course_id){
    this.course_name=course_name;
    this.course_id=course_id;
    this.student_name=student_name;
}
function Course(course_name,course_id){
    this.course_name=course_name;
    this.course_id=course_id;
}
let enrollements=[];
let Course_arr=[];
function addStudent(){
    let student_name=document.getElementById('name').value;
    let course_name=document.getElementById('coursename').value;
    let course_id=document.getElementById('courseid').value;
    let curr_details=new Student(student_name,course_name,course_id);
    enrollements.push(curr_details);
    let courseExists = Course_arr.some(course => course.course_id === course_id);
    if (!courseExists) {
        // Only add the course if it doesn't already exist in the array
        Course_arr.push(new Course(course_name, course_id));
    }
    alert("Enrollement SuccesFull");
    document.getElementById('name').value="";
    document.getElementById('coursename').value="";
    document.getElementById('courseid').value="";
}
function displayDetails(){
      for(let i=0;i<Course_arr.length;i++){
        document.write("Course Name: "+Course_arr[i].course_name+"<br>");
        document.write("Course Id:"+Course_arr[i].course_id+" <br>");
        document.write("List of Students:"+"<br>");
        for(let j=0;j<enrollements.length;j++){
            if(enrollements[j].course_id==Course_arr[i].course_id){
                document.write(enrollements[j].student_name+"<br>");
            }
        }
      }
}