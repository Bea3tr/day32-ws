import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Task } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  private fb = inject(FormBuilder)
  protected form!: FormGroup
  protected todos: Task[] = []

  isPast = (ctrl: AbstractControl) => {
    if(new Date(ctrl.value) < new Date())
      return { isPast: true } as ValidationErrors
    return null
  }

  ngOnInit(): void {
      this.form = this.createForm()
  }

  protected invalid(): boolean {
    return this.form.invalid 
  }

  protected processForm() {
    const task: Task = this.form.value
    console.info('>>> Values: ', this.form.value)
    this.todos.push(task)
    this.form.reset()
  }

  private createForm() {
    return this.fb.group({
      description: this.fb.control<string>('', [ Validators.minLength(5) ]),
      priority: this.fb.control<string>('low'),
      dueDate: this.fb.control<string>('', [ Validators.required, this.isPast ])
    })
  }

}
