import { Component } from "@angular/core";

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <event-thumbnail [event]=this.event></event-thumbnail>
    </div>
    `
})
export class EventListComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '8/27/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: "1 Silvers Ct",
            city: "Pennington",
            country: "England"
        }
    }
}