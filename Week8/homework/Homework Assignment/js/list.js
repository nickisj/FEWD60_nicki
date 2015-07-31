/* JS for Homework Assigment # 8*/

$('#tasks').on('submit', addTasks);

$('#clear').on('click', clearTask);

$('#completed').on('click', clearCompletedTasks);

$('#total').on('click', '.tasks', switchStatus);

$('#total').on('click', '.remove', clearTask;

var tasks = [];
    
    $(document).ready(function(){
    
        //we use the jquery blur event
        $("#tasks").blur(function(){
        
            //in this example, the task-form id is the id attribute of the element
            var tasks_id = $(this).attr("id");
            
            //addTasks value is the inputtedvalue
            var addTasks_value = $(this).val();
            
            //then process the task
            process_tasks(tasks_id,addTasks_value);
        });
        
    });

    // ———— functions [START] ————
 
    // process task, usually based in task-form id
    function process_tasks(tasks_id,addTasks_value){
        
        if(addTasks_value==""){
            //if addTasks value is empty, delete from the array
            delete_tasks(tasks_id);
        }else if(checkIfExists(tasks_id)){
            //search if task-form_id exists in the array
            //if task exists, edit it
            edit(tasks_id,addTasks_value);
        }else if(!checkIfExists(tasks_id)){
            //if task does not exist, add it
            add(tasks_id,addTasks_value);
        }
        
        //read the tasks
        showAllTasks();
    }
    
    // ADD
    function add(tasks_id,addTasks_value){
        tasks.push({
            "tasks_id" : tasks_id,
            "addTasks_value" : addTasks_value
        });
        $("#status").text("Task successfully added.");
    }
 
    // EDIT
    function edit(tasks_id,addTasks_value){
        
        //delete first
        tasks.remove("tasks_id", tasks_id);
        
        //then add again
        tasks.push({
            "tasks_id" : tasks_id,
            "addTasks_value" : addTasks_value
        });
        $("#status").text("Task successfully edited.");
            
    }
    
    // DELETE
    function delete_tasks(tasks_id){
        tasks.remove("tasks_id", tasks_id);
        $("#status").text("Task successfully deleted.");
    }
    
    // READ
    function showAllTasks(){
        
        //clear results text
        $("#results").text("");
        
        var arr_len = tasks.length;
        
        // display also the array length
        $("#results").append("Array len: " + arr_len+ "<br />");
        
        //loop through the array to read the tasks
        for(var x=0; x<arr_len; x++){
            var tasks_id = tasks[x]['tasks_id'];
            var addTasks_value = tasks[x]['addTasks_value'];
            
            //append to results div to display
            $("#results").append("tasks_id: " + tasks_id + " >>> addTasks_value: " + addTasks_value + "<br />");
        }
    }
    
    function checkIfExists(check_tasks_id){
        
        //get the array length first
        var arr_len = tasks.length;
        
        //search the array
        //there might be another way
        for(var x=0; x<arr_len; x++){
            var tasks_id = tasks[x]['tasks_id'];
            var addTasks_value = tasks[x]['addTasks_value'];
            
            if(check_tasks_id==tasks_id){
                //it means the task exists
                return true;
            }
        }
        
        return false;
    }
    
    //needs a remove function
    Array.prototype.remove = function(name, value) {
        array = this;
        var rest = $.grep(this, function(tasks){
            return (tasks[name] != value);  
        });
 
        array.length = rest.length;
        $.each(rest, function(n, obj) {
            array[n] = obj;
        });
    };
    // ———— functions [END] ————