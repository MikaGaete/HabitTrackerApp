import {Component} from "react";

export class Notifications extends Component {
    constructor() {
        super();
        this.showNotification = this.showNotification.bind(this);
    }

    componentDidMount() {
        if (!("Notification" in window)) {
            console.log("Browser does not support desktop notification");
        } else {
            Notification.requestPermission();
        }
    }

    showNotification(name, icon, message) {
        var options = {
            body: message,
            icon: `${icon}?    auto=compress&cs=tinysrgb&dpr=1&w=500`,
            dir: 'ltr',
        };
        new Notification(name, options)
    }
}