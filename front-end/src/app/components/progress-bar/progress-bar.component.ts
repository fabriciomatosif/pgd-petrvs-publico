import { Component, Input, OnInit } from '@angular/core';

export type ProgressColor = "success" | "info" | "warning" | "danger";

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() max: number = 100;
  @Input() min: number = 0;
  @Input() value: number = 0;
  @Input() goal: number = 0;
  @Input() height: number = 12;
  @Input() noPercentage?: string;
  @Input() minWidth?: number;
  @Input() color?: ProgressColor;

  constructor() { }

  ngOnInit(): void {
  }

  public get isGoal(): boolean {
    return !!this.goal && this.goal != this.max;  
  }

  public get percentage(): number {
    return Math.round((this.value - this.min) * 100 / (this.max - this.min));
  }

  public get goalPercentage(): number {
    return Math.max(this.percentage - Math.round((this.goal - this.min) * 100 / (this.max - this.min)), 0);
  }

  public get goalValue(): number {
    return Math.max(this.value - this.goal, 0);
  }

  public get isNoPercentage(): boolean {
    return this.noPercentage != undefined;
  }

  public get progressClass(): string {
    return "progress-bar progress-bar-striped" + (this.color ? " bg-" + this.color : "");
  }

}
