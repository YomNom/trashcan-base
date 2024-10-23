# Smart Trashcan Interface (https://trashcan-base.vercel.app/) 
### By Joey Yong, Du Nguyen, Huu Quang Nhat Nguyen, Ming Zeng

This project demonstrates the user interface for a conceptual smart trashcan on a website using Svelte & JavaScript. "Physically", the smart trashcan has a digital screen and motion sensor on the lid. Hosted by Vercel, the website has an interactive representation of the screen and the motion sensor, along with a 2D model of the trashcan lid. Logically, the smart trashcan will assist the user by reminding them to take out the trash around trash day and notify them how dirty their trash is based on the level of smell. The trashcan also bags up trash and takes it out.

## Why this project was made?

The smart trashcan comes from a project for a class on Human Interfaces at the University of Cincinnati that asked us to create an UI for a smart object. We chose the trashcan because of its simple framework. Other ideas we had - backpack, bed, door - were scrapped due to their complexity. Additionally, despite its simplicity, we could easily come up with practical features to increase the complexity.

## Affordances

Size: Our smart trash can is medium-sized (10 - 20 gallons) and designed for use in households or offices. It is large enough to hold daily or weekly trash but compact enough to fit in designated spaces like a kitchen or corner of a room.
Portability: It is mostly fixed but can be moved if necessary. Users can carry the trash can by holding it by the sides or by holding the handles.
Stability: it can stand upright on the floor using its base. 

The primary use of the smart trash can is to track the smart analytics of odor, and trash thrown away and remind the user to take out trash on designated trash day. 
Affording Trash Disposal: The primary affordance is for users to dispose of trash easily.
Affording Notification: It notifies users about trash collection day and when the trash can is full on its display screen. 
Affording Hands-Free Use: Sensors in the trash can afford touchless interaction, and automatic lid opening when the user's hand is detected by the sensors.

## Interviews and Answers Summary

For interviews and feedback, we asked friends and family.
Our questions were: 

Are your trashcans opened or closed?
- 2 people said they had open trashcans
- 3 people said they had closed trashcans
  
Do any of your trashcans have motion sensors?
- Only 1 person had a motion sensor trashcan
  
What inconveniences you about taking out the trash?
- 3 people said they didn't like the task of tying up and throwing out their trashcan
- 1 person said taking the trash out to the dumpster
- 1 person initially said they didn't have any inconvenience but mentioned they took out their trash every Saturday.

Interview Questions that were conducted through verbal research by Du Nguyen:

1. What do you find frustrating or inconvenient about using your current trash can?
2. How often do you empty your trash can, and do you ever forget to take it out on trash day?
3. What kind of visual cue or notification method you would prefer for the smart trash can when it is time to take out the trash? 
4. Would you prefer a trash can that opens automatically when you approach it, or do you prefer manually opening it?
5. If your trash can notify you about something, what would you care about the most?
6. Would you be interested in a feature that tracks how much waste you generate over time?

Summary of the answers:
- Person 1: He often forgets to take out the trash on trash day, only take out when it is full or really smelly. He prefers to have a strong visual cue or audio that makes him take out the trash on a designated trash day at his apartment.
- Person 2: He takes out the trash twice a week to prevent the smell and the food from rotting in the trash can. He is extremely conscious of his living condition and he thinks that having the total weight of the trash he has taken out would be a great idea to know.
- Person 3: She really does not like to touch the trash bag whenever she opens it, if the trash can automatically opens, tie up the bag for her, and then take it out by itself it would be nice. She is afraid of touching the dirty trash and its smell and always prefers not to have any smell at all. 

## Assumptions About the Smart Trash Can

Motion Sensor for Hands-Free Use: The smart trash can is equipped with a motion sensor that detects the user's hand when they approach, enabling the lid to open automatically.
Odor Sensor: The smart trash can includes an odor sensor that monitors the smell of the trash. When the odor reaches a certain threshold, indicating the trash is likely full or needs to be taken out, the can will notify the user through a display screen or mobile notification.
Trash Day Reminder: The trash can has a built-in feature where users can input their trash collection schedule. This feature sends reminders, either via a display screen on the trash can or through a mobile app, informing users of upcoming trash collection days.
Display Screen for Smart Analytics: A small display screen is located on the trash can's lid, providing real-time information about the trash can's status, such as how full it is, odor levels, and reminders for trash day. This screen offers users quick, at-a-glance access to important data.

## User Needs and Design Requirements

### User Needs 

1. Users need hands-free interaction to avoid contact with the trash can.
2. Users need to be reminded when trash day is approaching.
3. Users need to know when the trash can is full or nearing capacity.
5. Users may want to track their waste generation for environmental purposes.
6. Users may want to integrate the trash can with their smart home systems (Internet of Things, through the use of a smartphone)

### Design Requirements

Hands-Free Operation: Incorporate a motion sensor to open the lid automatically.
Trash Day Reminder: Build a feature that allows users to input their trash collection schedule onto the trash can itself, which will send reminders.
Display Screen: Build a display screen on the lid of the trash can to notify the users and display smart analytics regarding the trash within the trash can.
Odor Sensor: Add a sensor that can detect when the trash can is full or when the trash needs to be taken out based on smell and send a notification.
Waste Tracking: Create a waste tracking feature in the app that records how often the trash is emptied, giving insights into waste habits.

## Designs and Sketches of the Smart Trash Can

Visually, the interface for the digital screen is enlarged and interactive on the left with the motion sensor and external controls below it. On the right are 2D illustrations of the trashcan in action.
The overhead of the lid are images created through Procreate and go between two images based on when the lid is open or closed. On the lid, there's a placeholder on where the digital screen would be. 

The general layout of the trashcan was found pretty early on in the sketching and brainstorming process of how to make a trashcan "smart". When coming up with ideas, we thought about the general characteristics of a trashcan: the capacity, the smell, the weight, trashday, age of trash. We also wanted to add a new feature that has been added to trashcans - motion sensors.

Motion control was an instant add for contactless throwaway feature and being a new feature of trashcans. One of our group members had some of them in their apartment. You can also see them around the University of Cincinnati's campus.

Odor was added because it often indicated when the trash needed to be taken out. Before thinking of a digital screen, we thought to put a light indicator on the lid to show if it was smelly i.e. it would glow once the stank went up to a certain level. We had the idea of putting in a mold detector, but decided the strength of the odor would be enough to tell the user the trash needed to be thrown out. Because of that, we used it as an external control to show that the screen would give alerts of when to throw the trash out.

We all came up with our own sketches and discussed them in person, but we couldn't fully decide because we were missing something - a digital screen. 

By Joey Yong - "I wanted to separate the features between the trashcan and the webpage, things like weight and capacity could be looked at on an app with minimal controls on the trashcan".
![firsttrashsketch](https://github.com/user-attachments/assets/047e9597-bca4-49fb-858d-0007b2744a73)

There had to be a digital screen for the assignment, so we later met on discord in the voice channel of a server and used the discord app, whiteboard, to collectively scribble on what the interface and trashcan would look like.

![Screenshot 2024-10-22 195402](https://github.com/user-attachments/assets/82bc2dd7-8d8c-4189-aaf5-ca6b4fc8c951)

![Screenshot 2024-10-22 195412](https://github.com/user-attachments/assets/f77b7a0d-baf8-4504-a758-293ff6eb1263)
![Scan 22 Oct 24 21·19·09 1729646408371](https://github.com/user-attachments/assets/23a4059e-7487-4821-9050-f7c0178c175a)

We were having trouble placing the screen, but we knew we wanted it on the lid. We didn't want put any features/controls anywhere besides the lid because it would make the simple trashcan unnecessarily busy. There were suggestions of making the lid itself a monitor, but there were strong vetoes and feedback from people that it would crowd the top. Also, the screen would make the lid heavy and troublesome to maintain or not break. We then decided on a final sketch.
![Scan 22 Oct 24 21·19·09 1729646408370](https://github.com/user-attachments/assets/a52c333a-f3f1-47fa-b496-7b8feeabf247)
![Scan 22 Oct 24 21·19·09 1729646408369](https://github.com/user-attachments/assets/c4b450a6-988f-4858-90c7-d3d4e236bee0)

![Final_trashsketch](https://github.com/user-attachments/assets/c12ca9e9-2fd6-4256-9a95-a5dcd6df856a)

We extended the front of the lid and put it at a slant so it could be looked at more easily from other angles. Initially, the lid was the same color as the frame but there was some concern over not being able to tell the lid apart from the frame so the lid was darkened. The side view is a dark color because it shows the inside of the trashcan, not the outside. 

### Hybrid Sketch

![Screenshot_20241022_233202_Gallery](https://github.com/user-attachments/assets/51250d9a-d837-4888-88be-f3ea53e847eb)

### Story Board

![Scan 22 Oct 24 21·19·09 1729653926342](https://github.com/user-attachments/assets/bfe3b564-9320-45a6-ad32-b820d568f076)

### Color Palette 
![Smart Trash Can Color Palette](https://github.com/user-attachments/assets/db4c2897-b8e2-46d6-b3f1-2e753f5a210e)


We went with a sea green palette with an orange to contrast. Trashcans are usually green and the color is associated with being environmentally friendly. We mixed some blue in and lightened the color to be softer on the eyes.

## Implementation

We divided the project into parts and worked on it in branches. Most of the code was able to be merged directly without trouble though. We kept in contact through a Discord server and updated each other on our work.

Procreate and another drawing app were used to create images. 

### Features [Include pictures and videos]

- Sensing odor strength
The trash can is designed to display the odor strength level inside the trash can by odor sensor.
Level 1: Acceptable (Low Odor): The odor is minimal and tolerable, the trash bag does not need to be replaced.
  Sensor Range: 0-33
Level 2: Medium (Moderate Odor): The odor is noticeable and somewhat unpleasant; the trash bag should be replaced soon.
  Sensor Range: 34-67
Level 3: High (Severe Odor): The odor is heavy and unpleasant, the trash bag must be replaced immediately.
  Sensor Range: 67-100
At Level 2, a notification will be sent out on the screen to remind user to put the trash away. 
At level 3, another notification will be alerted (with sound) to indicating that the trash bag should be replaced immediately!

In this design we have a odor strength control to increase or decrease the odor strength level inside the trash bag. By clicking on these buttons, you can increase or decrease the odor level stimulation by 10.

https://github.com/user-attachments/assets/a5cec6dc-0a70-4811-b60c-1ee3b55e18a3

- Motion sensor

<video src="https://github.com/user-attachments/assets/c7b509cb-d847-41c4-a0a5-2204cee64627"></video>

This was created by a member of our group that had access to a motion sensor trashcan and knew how it worked. The motion sensor is its own set of buttons to free up space on the digital screen and to be always accessible. Generally, a motion sensor is made up of two buttons - one for open and one for close - and a light indicator of when motion has been detected. Because it is only two buttons, the guide for the buttons was minimalized to a box frame and an filled in box. The box frame meaning open and a filled in box for close. Even if the users didn't know what it meant, it was easy to click between them to see what they did. If the lid is open and the motion sensor is set off, the lid will stay open. 

The lid switches between two images to demonstrate the lid opening and closing.

![Smart_Trashcan_ClosedLid](https://github.com/user-attachments/assets/4793e810-3955-45fc-9e80-8e1dd5303856)

![OpenTrashLid](https://github.com/user-attachments/assets/cfb5eb3b-83e9-4627-a774-9186cda866fd)

Another member created the sideview to also show this with the automatic function to tie up the trash and push it out.

For the Reminder of trash day box as well as the three buttons, thoese feathures were created to allow the user to have more control and modification on the trashcan UI.


- Reminder of trash day
  
The Reminder of trashcan is placed on the right side of the UI screen for better visiblity, it has a countdown for how many days until the user-set trash day, the Reminder will also adjust according to the users selection of trash day and send out notification when the trashday is being updated.

- Popups and Notifications

Pop ups  will activate once user click any of the buttons or change the trash day. There will always be a close button to close the notification. In the future, we want to develop it that the pop ups will automatically disappear after some timeout.

In the Notification, it stores all the previous trashday updates to help user keep track of previous activities. There is a 'Delete All' button to clear all the old notifications recorded in the memory. 

https://github.com/user-attachments/assets/f27c3a86-2912-4189-ab63-a42b13bb9058

- Settings

The settings button allow user to change the UI's color as well as changing the trash date or set the "age" of the trash days.
Setting allows you to adjust the default setting to your wanted one. There is a "Reset Button" for resetting everything back to default state. "Close" button is for just closing without any changes. If users make any changes, "save" button will be pressed and a notification, which indicates that changes are save, will appear at the end of the process.

https://github.com/user-attachments/assets/fa1b38e7-8520-4882-b49f-984d9887e217


https://github.com/user-attachments/assets/424c0265-9596-4c75-ba36-09e0f863b5b2

- Analytics

The Analytics will pop up once the Analytics button is pressed, It will show a mock graph of trash weight and times trash taken out every week.

<img width="441" alt="Screen Shot 2024-10-22 at 9 55 41 PM" src="https://github.com/user-attachments/assets/394674e1-aee3-498b-a7bf-85707832ba71">

- Automatic Trashbag Package

When press on the "Trashcan" icon button, the trash bag will be automatically sealed inside the trashcan before being pushed out of the trashcan and lifted up a little bit above the ground for the users to take away. Then a new trash bag will be replaced and the nofitication will be pushed out. As a result, odor level and the age of the trash will be automatically reset back to 0.

https://github.com/user-attachments/assets/dc1af57d-c88b-4270-aa2f-510a4e6920e7



## Future 
We might polish up some features and add some more controls we weren't able to in the time frame such as a day counter - to act like days going by. 
We would like to add a mold sensor and increase the amount of settings. Also, we would like to add trash and have our 2D model show trash being added.

## Use of AI
We are relatively new to svelte and javascript and utilized Github's copilot coding feature in VS, as well as chatGPT. It sped up the coding process by skipping past much of the lookup process and helped with debugging. 

## Libraries [include source links and explain what they were used for]
Tailwind CSS
chart.js

# TO RUN LOCALLY
# Svelte + Vite

This template should help get you started developing with Svelte in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.

This template contains as little as possible to get started with Vite + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `checkJs` in the JS template?**

It is likely that most cases of changing variable types in runtime are likely to be accidental, rather than deliberate. This provides advanced typechecking out of the box. Should you like to take advantage of the dynamically-typed nature of JavaScript, it is trivial to change the configuration.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```js
// store.js
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```
