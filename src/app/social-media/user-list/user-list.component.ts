import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

  public userList: any = [];
  public friendsList: any = [];

  ngOnInit(): void {
    this.loadUsers();
  }

  public loadUsers() {
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
      })
  }
  public addFriend(i: number) {
    this.userList[i].isFriend = !this.userList[i].isFriend;
  }
}
