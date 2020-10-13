import { Plugins } from '@capacitor/core';
const { LocalNotifications } = Plugins;
import {quotes} from '../db/Quotes'



const notifs = LocalNotifications.schedule({
  notifications: [
    {
      title: "Four Steps Reminder",
      body: '',
      id: 1,
      schedule: { at: new Date(Date.now() + 1000 * 5) },
      sound: null,
      attachments: null,
      actionTypeId: "",
      extra: null
    },
    {
      title: "Four Steps Reminder",
      body: '',
      id: 1,
      schedule: { at: new Date(Date.now() + 1000 * 5) },
      sound: null,
      attachments: null,
      actionTypeId: "",
      extra: null
    },
    {
      title: "Four Steps Reminder",
      body: '',
      id: 1,
      schedule: { at: new Date(Date.now() + 1000 * 5) },
      sound: null,
      attachments: null,
      actionTypeId: "",
      extra: null
    },
    {
      title: "Four Steps Reminder",
      body: '',
      id: 1,
      schedule: { at: new Date(Date.now() + 1000 * 5) },
      sound: null,
      attachments: null,
      actionTypeId: "",
      extra: null
    },
    {
      title: "Four Steps Reminder",
      body: '',
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
