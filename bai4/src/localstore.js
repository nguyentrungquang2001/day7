
import Project from './project';
import Task from './task';
class LocalStore{
    getStore(){
        const data = localStorage.getItem("project");
        if(data){
             let dataPa = JSON.parse(data) ; 
             const projectList = [] ; 
             dataPa.forEach(element => {
                const project = new Project(element.title , element.description , element.dueDate);
                console.log(project)
                element.tasks.forEach(item => {
                    project.addTask(new Task(item.title,
                        item.priority ,
                        item.dueDate ,
                        item.completed ))
                    projectList.push(project)
                });
               
             });
             console.log(projectList);
             return projectList
        }
        return []; 
    }
    setLocalStore(list){
         localStorage.setItem("project" , JSON.stringify(list)) ; 
    }
}
export default LocalStore