
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  submit: boolean = false;
  errorMessage = '';
  newMemberName = '';
  members: String[] = [];
  totalLength: any = 0;
  numberOfTeams: number | '' = '';
  teams: String[][] = [];




  constructor() { }

  ngOnInit(): void {
    this.addTeam;
    this.onInput
  }

  resetTeamForm(): void{
    this.newMemberName = '';
    this.teams=[];
    if (this.newMemberName== '') {
      this.totalLength=this.members.length;
    }
  }

  addTeam(): void {
    if (this.newMemberName == '') {
      this.submit = false;
      this.errorMessage = "Name can't be empty"
    }

    else {
      this.members.push(this.newMemberName);
      this.totalLength = this.members.length;
      this.newMemberName = '';
      this.errorMessage = '';
    }
  }

  onInput(member: string): void {
    this.newMemberName = member;
  }

  onNumberOfTeamInput(value: string): void {
    this.numberOfTeams = Number(value);
  }

  genarateTeam() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = "Invalid number of team";
      return;

    }

    if (this.members.length < this.numberOfTeams) {
      this.errorMessage = "Invalid number of team";
      return;

    }

    this.errorMessage = ' '
    const allMembers = [...this.members];

    while (allMembers.length) {
      for (let index = 0; index < this.numberOfTeams; index++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const members = allMembers.splice(randomIndex, 1)[0];

        if (!members) break;

        if (this.teams[index]) {
          this.teams[index].push(members);
         

        } else {
          this.teams[index] = [members]
        }
      }
    }
    this.numberOfTeams = '';
    this.members = [];
  }
}
