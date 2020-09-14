import actsOfService from "./wsImgs/actsOfService.png";
import avoidSocialMedia from "./wsImgs/avoidSocialMedia.png";
import badHabbits from "./wsImgs/badHabbits.png";
import beAnEncourager from "./wsImgs/beAnEncourager.png";
import becomeAware from "./wsImgs/becomeAware.png";
import beGenerous from "./wsImgs/beGenerous.png";
import beStill from "./wsImgs/beStill.png";
import betterFriend from "./wsImgs/betterFriend.png";
import catchNegative from "./wsImgs/catchNegative.png";
import clock from "./wsImgs/clock.png";
import discoverNegative from "./wsImgs/discoverNegative.png";
import discoverPositive from "./wsImgs/discoverPositive.png";
import giveAgift from "./wsImgs/giveAgift.png";
import haveFun from "./wsImgs/haveFun.png";
import helpingHand from "./wsImgs/helpingHand.png";
import hugSomeone from "./wsImgs/hugSomeone.png";
import identifyResentment from "./wsImgs/identifyResentment.png";
import journal from "./wsImgs/journal.png";
import justAtouch from "./wsImgs/justAtouch.png";
import justBeThere from "./wsImgs/justBeThere.png";
import laugh from "./wsImgs/laugh.png";
import listen from "./wsImgs/listen.png";
import listenToSong from "./wsImgs/listenToSong.png";
import makeSomeoneLaugh from "./wsImgs/makeSomeoneLaugh.png";
import meditate from "./wsImgs/meditate.png";
import moreOpen from "./wsImgs/moreOpen.png";
import move from "./wsImgs/move.png";
import reachOut from "./wsImgs/reachOut.png";
import safe from "./wsImgs/safe.png";
import selfAffirm from "./wsImgs/selfAffirm.png";
import smellTheRoses from "./wsImgs/smellTheRoses.png";
import smile from "./wsImgs/smile.png";
import thankfulness from "./wsImgs/thankfulness.png";
import torwardForgiveness from "./wsImgs/torwardForgiveness.png";
import trustworthy from "./wsImgs/trustworthy.png";
import unplug from "./wsImgs/unplug.png";
import unSafe from "./wsImgs/unSafe.png";
import wordsOfAffirmation from "./wsImgs/wordsOfAffirmation.png";
import read from "./wsImgs/read.png";

// When they complete challenge that's
// when it prompts save others share facebook

// Logic: challenge ? challenge Counter ++
// onClick addToChallengeCounter
//  also remove Counter btn so they can't cheat

export const workshopChallenges = [
  {
    id: 1,
    title: "Hug Someone",
    img: hugSomeone,
    body:
      "Hug someone you know or your significant other for 15 seconds just once a day.",
    days: 5,
  },
  {
    id: 2,
    title: "Thankfulness",
    img: thankfulness,
    body:
      "No amount of regret will change yesterday and no amount of anxiety will change tomorrow, but gratefulness will change today. Every day write or say out loud 5 things for which you are thankful.",
    days: 5,
  },
  {
    id: 3,
    title: "Smell The Roses",
    img: smellTheRoses,
    body:
      "Slow your world down by listening to the sounds of birds or feel the wind blowing through the leaves. Do this 5 times a day.",
    days: 5,
  },
  {
    id: 4,
    title: "Become Emotionally Aware",
    img: becomeAware,
    body:
      "Share with a loved one a feeling you had during the day that doesn’t pertain to that relationship. Use primary emotions instead of secondary.",
    days: 1,
  },
  {
    id: 5,
    title: "Listen Intensely",
    img: listen,
    body:
      "Instead of forming a defense to what another is saying, ask questions to help you understand more thoroughly what they are saying or meaning.",
    days: 1,
  },
  {
    id: 6,
    title: "Catch The Negative",
    img: catchNegative,
    body:
      "When you find yourself taking something negative that someone said or did, be curious. Don’t assume they meant it the way you took it.",
    days: 1,
  },
  {
    id: 7,
    title: "Be An Encourager",
    img: beAnEncourager,
    body:
      "Make a commitment to encourage people around you at least 5 times a day.",
    days: 5,
  },
  {
    id: 8,
    title: "Reach Out",
    img: reachOut,
    body:
      " Initiate contact with someone you haven’t seen or talked to in a while. Don’t wait on them to reach out to you first.",
    days: 1,
  },
  {
    id: 9,
    title: "Just A Touch",
    img: justAtouch,
    body:
      "Notice how many times a day you reach out and physically touch as expression of love or appreciation. Make it a point to do this at least 2 times a day. (Please take social precautions during this covid-19 pandemic.)",
    days: 3,
  },
  {
    id: 10,
    title: "Self Affirm",
    img: selfAffirm,
    body:
      "Find one aspect about yourself you like. Then remind yourself of that aspect at least 5 times a day. Such as “I am trustworthy” or “I am valuable.”",
    days: 5,
  },
  {
    id: 11,
    title: "Have Fun",
    img: haveFun,
    body:
      "Find someone to play a friendly card game or enjoy a yard game with. Do this with friends and enjoy the time together.(Please take social precautions during this covid-19 pandemic.)",
    days: 5,
  },
  {
    id: 12,
    title: "Keep Moving",
    img: move,
    body:
      "Exercise is not only beneficial to the body but also to the mind. Do some kind of exercise for 30 minutes a day 3-5 times a week.",
    days: 3,
  },
  {
    id: 13,
    title: "Smile",
    img: smile,
    body:
      "Be intentional about smiling to people around you. Do this to everyone with which you work, play or cross paths with. Do this for one day.",
    days: 1,
  },
  {
    id: 14,
    title: "Laugh",
    img: laugh,
    body:
      "Find opportunities to have quality laughter. Try to have one laugh a day for 5 days.",
    days: 5,
  },
  {
    id: 15,
    title: "Make Someone Else Laugh",
    img: makeSomeoneLaugh,
    body:
      "Tell a joke, say a witty comment, or just act goofy. This can add joy to someone's day.",
    days: 1,
  },
  {
    id: 16,
    title: "Offer A Helping Hand",
    img: helpingHand,
    body:
      "Find someone who looks like they could use a helping hand whether it be carrying out groceries or just opening a door. This lets a person know they are not alone.",
    days: 1,
  },
  {
    id: 17,
    title: "Give A Gift",
    img: giveAgift,
    body:
      "Give a gift to someone in your life. It doesn’t have to be big but it should be something you believe they would like. (i.e. A chocolate bar, a hot/cold drink, a gift card.",
    days: 1,
  },
  {
    id: 18,
    title: "Words Of Affirmation",
    img: wordsOfAffirmation,
    body:
      "Say something you like about your family members, friends, or coworkers. Try to share this with at least 5 people over 5 days.",
    days: 5,
  },
  {
    id: 19,
    title: "Just Be There",
    img: justBeThere,
    body:
      "Reach out to someone that needs someone to be there. If they are going through a sad time, just sit and listen.",
    days: 1,
  },
  {
    id: 20,
    title: "Self Discovery- Positive",
    img: discoverPositive,
    body:
      "Think of a positive feeling about yourself you would like to remember often and see if you can remember the first time you ever felt that as a child.",
    days: 1,
  },
  {
    id: 21,
    title: "Self Discovery- Negative",
    img: discoverNegative,
    body:
      "Think of a negative feeling about yourself that you struggle with and see if you can remember the first time you felt that as a child.  Once you find it, find another word you would rather feel about yourself.",
    days: 1,
  },
  {
    id: 22,
    title: "Being Secure",
    img: safe,
    body:
      "Evaluate how secure you are as a friend, family member or coworker. Say or write down three things you know you do to make others feel at ease.",
    days: 1,
  },
  {
    id: 23,
    title: "Being Insecure",
    img: unSafe,
    body:
      "Be honest about your behavior that might cause someone to feel uncomfortable. (i.e. yell, blame, shut down). Write down this behavior and commit to end it. If you catch it before you act on it, give yourself a completion for that day.",
    days: 1,
  },
  {
    id: 24,
    title: "Acts Of Service",
    img: actsOfService,
    body:
      "Create a list of things you normally don't do for others. Try to complete every item once per day for five days.",
    days: 5,
  },
  {
    id: 25,
    title: "Be Generous",
    img: beGenerous,
    body:
      "Sacrifice something of value and give it to someone else. Make something in your garage and give it to a friend, give some items from your garden to someone, or scrounge up some old clothes and give them away.",
    days: 1,
  },
  {
    id: 26,
    title: "Journal",
    img: journal,
    body:
      "Write your thoughts and feelings about the days events. It does not have to be lengthy. One sentence or one page and anywhere in between.",
    days: 1,
  },
  {
    id: 27,
    title: "Be Still",
    img: beStill,
    body:
      "Slow your world down and just breathe. Close your eyes and see how relaxed you can become in 2 minutes.",
    days: 1,
  },
  {
    id: 28,
    title: "Meditate",
    img: meditate,
    body: "Listen to a calming recording.",
    days: 1,
  },
  {
    id: 29,
    title: "Read",
    img: read,
    body:
      "Read an inspirational quote or passage from your favorite book and just consider what it means for 5 minutes",
    days: 1,
  },
  {
    id: 30,
    title: "Listen To A Song",
    img: listenToSong,
    body:
      "Listen to a song that is encouraging or uplifting. Share it with a friend.",
    days: 1,
  },
  {
    id: 31,
    title: "Unplug",
    img: unplug,
    body:
      "Commit to not using any electronic devices (phone, tablets, etc) for an entire 12 hour day.",
    days: 1,
  },
  {
    id: 32,
    title: "Avoid Social Media",
    img: avoidSocialMedia,
    body:
      "Avoid any involvement with social media. Start out small. Try to make it a day and see if you can work up to a week.",
    days: 1,
  },
  {
    id: 33,
    title: "Toward Significance",
    img: torwardForgiveness,
    body:
      "Consider someone with whom you hold resentment. Put yourself in their shoes and see if you can identify two reasons why they might have behaved the way they did. Find compassion for them.",
    days: 1,
  },
  {
    id: 34,
    title: "Identify Resentment",
    img: identifyResentment,
    body:
      "Identify someone whom you know is holding resentment towards you. Identify the pain you may have caused them (i.e. betrayed, rejected, worthless, etc) and sincerely ask for forgiveness. Don't force this. You're your own person and they are as well. It's okay to be on different walks of life.",
    days: 1,
  },
  {
    id: 36,
    title: "Be More Open",
    img: moreOpen,
    body:
      "Be more open with someone you know you can trust. Share with them something about yourself that they don't already know.",
    days: 1,
  },
  {
    id: 37,
    title: "Be A Better Friend",
    img: betterFriend,
    body:
      "Be the friend you expect others to be. Identify and practice three areas of being a better friend.",
    days: 1,
  },
  {
    id: 38,
    title: "How Trustworthy Are You",
    img: trustworthy,
    body:
      "Identify and practice one area of trustworthiness today (i.e. being on time, being truthful, following through with responsibilities)",
    days: 1,
  },
  {
    id: 39,
    title: "Bad Habbits",
    img: badHabbits,
    body:
      "Identify a habit you want to break and give yourself credit for each day you successfully refrain from that behavior. (This is a 21 day to completion event so remember, mistakes happen. If you make one, simply skip hitting the completion button for that day and pick up where you left off the next. Good luck, we have faith in you!)",
    days: 21,
  },
  {
    id: 42,
    title: "Trustworthy",
    img: clock,
    body:
      "Consider your definition of “Trustworthy”. “You are trustworthy when you fully grasp how valuable and vulnerable another person is, and you treat that person accordingly. To the extent that you treat the person as precious and irreplaceable, you are trustworthy. And to the extent that you don’t, you’re not.” (DNA of Relationships in Marriage, p 75, Greg Smalley) Find ways to treat people in your life in a way that is trustworthy.",
    days: 1,
  },
];
