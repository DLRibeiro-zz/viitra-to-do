import { Component } from '@angular/core';
import { TaskService } from "app/Service/Task.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public items: Array<string>;

  constructor (private taskService : TaskService) {

    this.items = [];
    // for (let i = 0; i < 21; i++) {
    //   this.items.push(`Item ${i}`);
    // }
    taskService.fetchTasks(0);
    this.items = taskService.getAllTasks();
  }

  addTask(){
    this.taskService.addTask({Task_text : `Item ${this.items.length}`, codigo : this.items.length});
  }
  
}
