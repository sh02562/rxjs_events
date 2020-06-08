import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event-input-text',
  templateUrl: './from-event-input-text.component.html',
  styleUrls: ['./from-event-input-text.component.scss']
})
export class FromEventInputTextComponent implements OnInit, AfterViewInit {
  @ViewChild('input') input: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const inputEle = <HTMLInputElement>this.input.nativeElement;
    fromEvent<any>(inputEle, 'keyup')
      .subscribe(data => console.log(data.target.value));
  }


}
