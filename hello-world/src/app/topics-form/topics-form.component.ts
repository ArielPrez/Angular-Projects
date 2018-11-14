import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics-form',
  templateUrl: './topics-form.component.html',
  styleUrls: ['./topics-form.component.css']
})
export class TopicsFormComponent implements OnInit {

  constructor() { }

  form = new FormGroup({
    topics: new FormArray([])
  });

  ngOnInit() {
  }

  addTopic(topic: HTMLInputElement){
    // EACH TOPIC IS A SIMPLE VALUE, THAN MEANS TO PASS A FormControl OBJECT
    // BUT AN ITEM COULD BE A COMPLEX OBJECT TO PASS, SO IN THAT CASE IT WOULD BE USE A FormGroup OBJECT
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }
  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
  get topics(){
    return this.form.get('topics') as FormArray;
  }
}
