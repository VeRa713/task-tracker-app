import { Component, Output, EventEmitter } from '@angular/core';
import { Team } from '../models/team';

@Component({
  selector: 'app-team-select',
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.scss']
})
export class TeamSelectComponent {
  @Output() teamSelectedEvent : EventEmitter<any> = new EventEmitter<any>()

  teams : Team[] = [
    {
      id: 1,
      teamName: "KNJ"
    },
    {
      id: 2,
      teamName: "KSJ"
    },
    {
      id: 3,
      teamName: "MYG"
    },
    {
      id: 4,
      teamName: "JHS"
    },
    {
      id: 5,
      teamName: "PJM"
    },
    {
      id: 6,
      teamName: "KTH"
    },
    {
      id: 7,
      teamName: "JJK"
    }                
  ]

  handlerTeam = (payload: any) => {
    let team_id = payload.target.value
    this.teamSelectedEvent.emit({ id: team_id })
  }
}
