import { Component } from "@angular/core";
import { Task } from "./app.model";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  tasks: Task[] = [];
  task: Task = new Task("", "", false);

  addTask() {
    console.log(this.task);
    this.tasks.push(this.task);
    this.task = new Task("", "", false);
  }

  removeTask(task: Task) {
    // TODO: Implement remove logic
    const index = this.tasks.findIndex(
      (item) => item.taskName === task.taskName
    );

    this.tasks.splice(index, 1);
  }
}
