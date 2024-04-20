app.put('/api/courses/;id',(req,res)=>{
    const course=course.find(c=>c.id===parseInt(req.paramas.id));
    if(!course) escape.ststus(404).send('Thecourse for the givenID was not found.');
    const{error}=validdateCourse(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
course.name=req.body.name;
res.send(course);
})
function validdateCourse(course){
    const  schema =Joi.object({
        name:Joi.string().min(3).required()
    ,});
    return Joi.validate(course,schema);
}

app.delete('/api/course/:id',(req,res)=>{
    const course=course.find(c=.c.id===parseInt9req,res);
    course.index=course.indexof(course);
})
const