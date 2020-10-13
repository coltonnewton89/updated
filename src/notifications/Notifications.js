import { Plugins } from '@capacitor/core';
const { LocalNotifications } = Plugins;

const notifs = LocalNotifications.schedule({
  notifications: [
    {
      title: "Four Steps Reminder",
      body: '"Priorities and purpose help keep us on track" -Candace Cameron',
      id: 1,
      schedule: { at: new Date(Date.now() + 1000 * 5) },
      sound: null,
      attachments: null,
      actionTypeId: "",
      extra: null
    },
    {
      title: "Four Steps Reminder",
      body: '"The greatest gift you ever give is your honest self" -Mr.Rogers',
      id: 1,
      schedule: { at: new Date(Date.now() + 1000 * 5) },
      sound: null,
      attachments: null,
      actionTypeId: "",
      extra: null
    },
    {
      title: "Four Steps Reminder",
      body: '"You need the dark in order to show the light" -Bob Ross',
      id: 1,
      schedule: { at: new Date(Date.now() + 1000 * 5) },
      sound: null,
      attachments: null,
      actionTypeId: "",
      extra: null
    },
    {
      title: "Four Steps Reminder",
      body: '"Repitition creates the master" -Cesar Milan',
      id: 1,
      schedule: { at: new Date(Date.now() + 1000 * 5) },
      sound: null,
      attachments: null,
      actionTypeId: "",
      extra: null
    },
    {
      title: "Four Steps Reminder",
      body: '"I am worth it" -Yourself',
      id: 1,
      schedule: { at: new Date(Date.now() + 1000 * 5) },
      sound: null,
      attachments: null,
      actionTypeId: "",
      extra: null
    },
  ]
});
console.log('scheduled notifications', notifs);
