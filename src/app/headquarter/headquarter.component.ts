import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headquarter',
  templateUrl: './headquarter.component.html',
  styleUrls: ['./headquarter.component.css']
})
export class HeadquarterComponent {

  constructor(private router: Router){}

  members: Member[] = [
    new Member("Alphonso", "Online", "Let me know if you want to go to the movies on Sunday!", 1),
    new Member("Ralph", "Offline", "Going bowling tomorrow, lmk", 2),
    new Member("Julia", "Online", "Shopping spree Friday??", 3),
    new Member("Lucy", "Online", "Let's go to the cabin in March?", 4)
  ];

  goToDetailPage(clickedMember: Member) {
    this.router.navigate(['members', clickedMember.id]);
  };
}
