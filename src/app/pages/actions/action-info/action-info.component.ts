import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionResponse } from 'src/app/shared/interfaces/action';
import { ActionService } from 'src/app/shared/services/action/action.service';
import { GoodsResponse } from '../../../shared/interfaces/goods';

@Component({
  selector: 'app-action-info',
  templateUrl: './action-info.component.html',
  styleUrls: ['./action-info.component.css'],
})
export class ActionInfoComponent implements OnInit {
  public action!: ActionResponse;

  constructor(
    private actionService: ActionService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      this.actionService.getOneAction(id as string).subscribe((data) => {
        this.action = data as ActionResponse;
      });
    });
  }
}
