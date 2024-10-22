# Smart Trashcan Interface (https://trashcan-base.vercel.app/) 
### By Joey Yong, Du Nguyen, Huu Quang Nhat Nguyen, Ming Zeng

This project demonstrates the user interface for a conceptual smart trashcan on a website using svelte & javascript. "Physically", the smart trashcan has a digital screen and motion sensor on the lid. Hosted by vercel, the website has an interactible representation of the screen and the motion sensor, along with a 2D model of the trashcan lid. Logically, the smart trashcan will assist the user by reminding them to take out the trash around trashday and notify them how dirty their trash is based on the level of smell. The trashcan also bags up trash and takes it out.

## Why this project was made?

The smart trashcan comes from a project for a class on Human Interfaces at the University of Cincinnati that asked us to create an UI for a smart object. We chose the trashcan because of its simple framework. Other ideas we had - backpack, bed, door - were scrapped due to their complexity. Additionally, despite its simplicity, we were easily able to come up with practical features to increase the complexity.

### Features [Include pictures and videos]

- Sensing odor strength
  
- Motion sensor

- Reminder of trash day
- Analytics of

## Design 

Visually, the interface for the digital screen is enlarged and interactible on the left with the motion sensor and external controls below it. On the right are 2D illustrations of the trashcan in action.
The overhead of the lid are images created through Procreate and goes between two images based on when the lid is oopen or closed. On the lid, there's a placeholder on where the digital screen would be. 

The general layout of the trashcan was found pretty early on in the sketching and brainstorming process of how to make a trashcan "smart". When coming up with ideas, we thought about the general characteristics of a trashcan: the capacity, the smell, the weight, trashday, age of trash. We also wanted to add a new feature that has been added to trashcans - motion sensors.

Motion control was an instant add for contactless throwaway feature and being a new feature of trashcans. One of our group members had some of them in their apartment. You can also see them around the University of Cincinnati's campus.

Odor was added because it often indicated when the trash needed to be taken out. Before thinking of a digital screen, we thought to put a light indicator on the lid to show if it was smelly i.e. it would glow once the stank went up to a certain level. We had the idea of putting in a mold detector, but decided the strength of the odor would be enough to tell the user the trash needed to be thrown out. Because of that, we used it as an external control to show that the screen would give alerts of when to throw the trash out.

We all came up with our own sketches and discussed them in person, but we couldn't fully decide because we were missing something - a digital screen. 

[sketch here]

There had to be a digital screen for the assignment, so we later met on discord in the voice channel of a server and used the discord app, whiteboard, to collectively scribble on what the interface and trashcan would look like.

[sketch here]

We were having trouble placing the screen, but we knew we wanted it on the lid. We didn't want put any features/controls anywhere besides the lid because it would make the simple trashcan unnessarily busy. There were suggestions of making the lid itself a monitor, but there were strong vetoes and feedback from people that it would crowd the top. Also, the screen would make the lid heavy and troublesome to maintain or not break. We then decided on a final sketch

### Color Palette 



## Implementation

## Interview![Final_trashsketch](https://github.com/user-attachments/assets/c12ca9e9-2fd6-4256-9a95-a5dcd6df856a)


## Side Quests

## Future 

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
