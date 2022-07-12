const { default: Project } = require("./project");
import LocalStore from './localstore';
const { default: Task } = require("./task");

let projectList  = [];
let curProject = 0 ; 

const localStore = new LocalStore()
 projectList = localStore.getStore();

document.getElementById("addtask").onclick = (e)=>{
         e.preventDefault();
         const name = document.getElementById("taskname").value ; 
         const time = document.getElementById("tasktime").value ; 
         const pri = document.getElementById("taskpri").value ; 

         const task = new Task(name , pri ,time , false ) ; 

         projectList[curProject].addTask(task);
         console.log(projectList[curProject])
         renderListTask(projectList[curProject])
}
const renderListTask = (project)=>{
    const elementListTask = document.getElementById("listTask") ; 
    elementListTask.innerHTML =""
    if(project === undefined){
        elementListTask.innerHTML =""
    }else{

        const listTask = project.tasks ; 
  
        const elmentContainerTask = document.createElement("div") ; 
    
        listTask.forEach((element , index) => {
            const elementTaskItem =document.createElement("div") ; 
           
             const elementTitle = document.createElement("p");
             elementTitle.innerHTML = element.title ; 
             const elementDate = document.createElement("p");
             elementDate.innerHTML = element.dueDate ; 
             const elementImportant = document.createElement("p");
             elementImportant.innerHTML = element.priority;
             const elementIsDone = document.createElement("p");
             elementIsDone.innerHTML = element.complated === true ? "done" : "not done yet" ;
             const elementButtonDone = document.createElement("button");
             elementButtonDone.setAttribute("class" , "btn btn-danger")
             elementButtonDone.innerHTML="X" ; 
             let elementButtonFix = document.createElement("button");
             elementButtonFix.setAttribute("class" , "btn btn-primary")
             elementButtonFix.innerHTML="Make done";
             if(element.completed === true){
              elementButtonFix.innerHTML = "completed";
              console.log("Ssss")
             }else{
                elementButtonFix.onclick = (e) =>{
                    element.completed =true ; 
                    renderListTask(project);
                    localStore.setLocalStore(projectList) ; 
                    console.log(project)
                 }
             }
             elementButtonDone.onclick = (e) =>{
                 project.deleteTask(index);
                 localStore.setLocalStore(projectList) ; 
                 renderListTask(project)
             }
             
             elementTaskItem.append(elementTitle , elementDate ,elementImportant ,elementButtonFix,elementButtonDone );
             elmentContainerTask.append(elementTaskItem) ; 
             
        });
       
        elementListTask.append(elmentContainerTask)
    }
}
const addProject = ()=>{
 const elementButtonAdd = document.getElementById("addproject") ; 
 elementButtonAdd.onclick = (e)=>{
    e.preventDefault() ; 
    const projectname = document.getElementById("projectname").value ; 
    const project =  new Project(projectname ,null, null) ; 
    projectList.push(project) ; 
    localStore.setLocalStore(projectList) ; 
   render();
 }
}
  
const render = ()=>{

    const elementProject = document.getElementById("projectlist") ; 
    elementProject.innerHTML ="";
    const elementProjectContainer = document.createElement("div");
    projectList.forEach((element , index) => {
         const elementProjectItem =document.createElement("div") ; 
         const elementTitle = document.createElement("p");
         elementTitle.innerHTML = element.title ; 
         const elementDate = document.createElement("p");
         elementDate.innerHTML = element.dueDate ; 
         const elementButtonDone = document.createElement("button");
         elementButtonDone.innerHTML="X" ; 
         elementButtonDone.setAttribute("class" , "btn btn-danger")
         const elementButtonFix = document.createElement("button");
         elementButtonFix.setAttribute("class" , "btn btn-primary")
         elementButtonFix.innerHTML="See" ;
         elementButtonDone.onclick = (e) =>{
            deleteProject(index) ; 
            localStore.setLocalStore(projectList) ; 
         }
         elementButtonFix.onclick = (e) =>{
      
            curProject = index;
            console.log(projectList[index])
            renderListTask(projectList[index]);
            localStore.setLocalStore(projectList) ; 
         }
         elementProjectItem.append(elementTitle , elementDate ,elementButtonFix,elementButtonDone )
         elementProjectContainer.append(elementProjectItem)
    });
    elementProject.append(elementProjectContainer)
} ; 
const deleteProject = (index)=>{
        projectList.splice(index ,1) ; 
        curProject = 0 ; 
        
        renderListTask(projectList[curProject]);
        localStore.setLocalStore(projectList) ; 
        render();
}
addProject()
render() ; 
renderListTask()
// project.addTask(task) ; 

