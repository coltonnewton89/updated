import { Plugins } from '@capacitor/core';
const { LocalNotifications } = Plugins;

const notifs = LocalNotifications.schedule({
  notifications: [
    {
      title: "Real quick!",
      body: "It's time for your four steps",
      id: 1,
      schedule: { at: new Date(Date.now() + 1000 * 5) },
      sound: null,
      attachments: null,
      actionTypeId: "",
      extra: null
    }
  ]
});
console.log('scheduled notifications', notifs);
