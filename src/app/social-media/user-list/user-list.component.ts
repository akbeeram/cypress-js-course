import { Component, Input, OnInit } from '@angular/core';
import { todaysNews } from './news';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {
  @Input()
  public userList: any = [];
  public isLoading: boolean = false;
  public news: any = todaysNews;

  ngOnInit(): void {
    // this.loadUsers();
  }

  public loadUsers() {
    this.isLoading = true;
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        // assume current user id is 1
        this.userList = json
          .filter((j: any) => j.id != 1)
          .map((m: any, i: number) => {
            return {
              ...m,
              isFriend: [2, 5, 8].indexOf(m.id) > -1
            };
          })
        this.isLoading = false;
      })
  }
  public addFriend(i: number) {
    this.userList[i].isFriend = !this.userList[i].isFriend;
  }
}
