# 2025-group-20
2025 COMSM0166 group 20

## Your Game

Link to your game [PLAY HERE](https://uob-comsm0166.github.io/2025-group-20/)
git 

Your game lives in the [/docs](/docs) folder, and is published using Github pages to the link above.

Include a demo video of your game here (you don't have to wait until the end, you can insert a work in progress video)

## Your Group
![Image](https://github.com/user-attachments/assets/958abe85-ba1e-46ad-b516-df34557794ae)

- Omnia Ali, dc24201@bristol.ac.uk
- May Daoud, zy21368@bristol.ac.uk
- Barney Evershed, b.evershed.2021@bristol.ac.uk
- Scarlett Hurford, cy21903@bristol.ac.uk
- Matilda Stokes, jl21579@bristol.ac.uk
- Ziyan Zhao, rw24449@bristol.ac.uk

# Project Report

# Introduction

- 5% ~250 words 
- Describe your game, what is based on, what makes it novel?

- Smoothie Operator first came to inception as an accessible, lighthearted desktop or PC game. Simple to play, hard to get the hang of, creating a delicate balance, that appeals to both newer, more relaxed players, and the more eager, ambitious players. In essence, we wanted to capture the chaos and thrill, through the act of slicing fruit, taking inspiration from the popular tablet game "Fruit Ninja".

- Game Concept:
Fruit Ninja with a twist! Players take on the role of "knife" or "smoothie man" or "blender" (I don't really know if the player has a role sorry I just feel like those work thematically). Their task? To churn out Smoothie Recipes with precision and speed (I suppose it's not really speed but I just thought that would sound good). As they progress through the game, the fruits gets faster, the bombs get bigger (I know they don't yet but it's nice alliteration), the recipes get more bonkers and the pressue cranks up.
The "recipe system" (or the blender queue system as I like to call it), is specially designed to optimise players engagement, and the "recipe book" on hard mode gives the more advanced players a challenge. 

- Demographic and difficulty/accessibility:
We took a "the more the merrier" approach to our game demographic. The idea was to attract casual gamers, while also appealing to those looking for a challenge (more on this later, specifically when talking about our difficulty levels system). Similar to our inspiration Fruit Ninja, we wanted a "Pick up and play" or, with the tablet to desktop transition considered, the more accurately dubbed "Click on a play" design. It's an inviting, convenenient format 
Simplicity - one mouse or trackpad control
Playing sessions should be compact, digestible, but replayable 
 
- USPs (Unique Selling Point - what makes our game different?):
Fruit Ninja - with a twist! Specific slicing patterns delegated to specific fruits, as well as specific "recipes" you have to follow, adds a memory/skill-mastering aspect to the game that encourages a more engaging gameplay. 
Technologies and technological difficulties

- Player Experience (the learning curve, engagement over time etc.) and progression:
Instant gratification and satisfaction(how satisfying it is when you slice a fruit i.e. animations, graphics and sound)
Player immersion - No timer, immersive visuals etc.

- Summary of the overall vision 

# Requirements (Ziyan)

## Ideation Processing
<p>
  In the early stage of ideation process, we used both 
  <a href="https://miro.com/app/board/uXjVLtyUR80=/Miro" target="_blank">Miro</a>
  (Figure 2) and 
  <a href="https://uob-my.sharepoint.com/:w:/r/personal/zy21368_bristol_ac_uk/_layouts/15/Doc.aspx?sourcedoc=%7B16215be5-ecc8-4461-980c-cd596f6d788d%7D&action=edit&wdPid=4e6e8707"target="_blank">Google Docs</a>
   for brainstorming. We explore several ideas for this game: 
</p>
<p align="center">
  <img src="project-report-images/Miro.png" width="60%"><br>
  <b>Figure 2. </b> <i>Brainstorming on Miro</i>
</p>

<ol>
  <li>
    <b>University Life Simulation</b><br>
    Inspired by the narrative-driven gameplay of <i>Papers, Please</i>, this concept focuses on simulating student life at the University of Bristol.
  </li>
  <li>
    <b>Fashion-combat Game</b><br>
    Combines fast-paced action gameplay with dress-up, drawing influence from <i>Cowgirl Crusade</i> and <i>Dress to Impress</i>.
  </li>
  <li>
    <b>Fruit-Ninja with Recipes</b><br>
    A gameplay concept adapted from <i>Fruit Ninja</i> and <i>Overcooked</i>, where players use slicing techniques to prepare ingredients and complete recipe-based objectives.
  </li>
</ol>

At first, we considered developing a simulation game while integrating a two-player combat mode, thereby creating an engaging and multifaceted gameplay experience. However, following the second workshop on P5.js, we conducted a feasibility study to assess the project's scope and the technical requirements of implementing these functionalities using JavaScript. After breaking down the game into smaller sections, we concluded that the original simulation concept was slightly ambitious. The complexity involved in managing multiple intricate functionalities was identified as a significant challenge, which led us to reassess our game.

Eventually, we took a vote and decide on the third idea —an adaptation of <i>Fruit Ninja</i>—due to its manageable scale and strong emphasis on engaging gameplay mechanics. The twist to our game involves following a specific order of the recipe, where each type of fruit requires distinct slicing technique.

<p align="center">
  <img src="project-report-images/fruit-ninja.png" width="50%"><br>
  <b>Figure 3. </b> <i>Fruit Ninja</i>
</p>

<p align="center">
  <img src="project-report-images/overcooked.png" width="50%"><br>
  <b>Figure 4. </b> <i>Overcooked</i>
</p>

## Early Design Phase
During the third workshop, we designed a Paper Prototype to refine and expand our ideas. This approach translates the complex yet abstract concepts into sets of tangible functionalities. By physically moving around the paper props, we gained further insights on visual design, controls, and optimal user interactions. This helped us establish a clear, scalable structure, making the project less daunting for the team.

<p align="center">
  <img src="project-report-images/prototype.gif" width="50%"><br>
  <b>Figure 5. </b> <i>Paper Prototype</i>
</p>

We also considered incorporating memory-based gameplay elements, wherein players would briefly see a recipe displayed with fruit icons and then need to recall it during gameplay. As levels progressed, the complexity and number of fruits would increase, challenging the player's memory further. However, in the Game Testing Activity, feedback from other teams indicated this approach demanded excessive cognitive effort, as players would need to simultaneously remember recipes and master fruit-specific slicing techniques. We took this feedback on board and decided to keep the recipes visible on-screen to improve the playability of our game. 


## Identifying Stakeholders
We first developed an Onion Model to identify key stakeholders to help us understand the different perspectives that influence game design, including players, developers, and testers. We then sought feedback during the prototype demonstrations, asking individuals to evaluate the game both as stakeholders and as players. Their insights provided input on how to refine our functional requirements.

<p align="center">
  <img src="project-report-images/OnionModel.png" width="50%"><br>
  <b>Figure 5. </b> <i>Onion Model of Smoothie Operator</i>
</p>

Although our project is primarily designed in an university setting, the Onion Model underscores the capacity of successful systems to shape broader social behaviors by providing engaging gameplay experiences tailored to relevant communities.

<h2>Functional Requirements</h2>

<p>Our group then approached defining requirements by focusing on how to make the game mechanics as intuitive and accessible as possible. We agreed that a successful game should allow players to grasp the core mechanics on their first attempt, ensuring an engaging and enjoyable experience. We used a Use-Case Diagram as guidance for what to include as a functional requirement.</p>

<h3>1. User Interface</h3>

<ul>
  <li>The player must have access to a main menu where they can:
    <ul>
      <li>Adjust settings (audio, controls, graphics, etc.).</li>
      <li>View tutorials explaining game mechanics.</li>
      <li>Access information about the game, including lore and objectives.</li>
      <li>See their current score and highest score.</li>
    </ul>
  </li>
  <li>The player must have an option to start the game from the main menu.</li>
  <li>The player must have an option to quit the game at any point.</li>
  <li>The game must have a pause menu, allowing the player to:
    <ul>
      <li>Resume gameplay.</li>
      <li>Quit and return to the main menu.</li>
    </ul>
  </li>
  <li>The game must display a score counter and player’s lives.</li>
  <li>The game must display the game’s outcome:
    <ul>
      <li>If the player loses, a <strong>Game Over</strong> screen is displayed with the score they achieved.</li>
      <li>After losing, the system must return the player to the main menu.</li>
    </ul>
  </li>
</ul>

<h3>2. Controls</h3>

<ul>
  <li>The player uses the mouse cursor to cut the fruit/vegetables.</li>
  <li>The player navigates through the menu using the mouse.</li>
</ul>

<h3>3. Core Game Mechanics</h3>

<ul>
  <li>Fruit/vegetables are thrown up onto the screen and then fall according to gravity.</li>
  <li>The player must cut the correct fruit for the recipe displayed on the screen.</li>
  <li>For certain fruits, they must slice them in the correct pattern.</li>
  <li>If the player cuts the correct fruit in the wrong way or cuts the wrong fruit, they lose a life.</li>
  <li>If the player cuts a bomb, they lose the game and must restart.</li>
  <li>If they lose all their lives, they lose the game and must restart.</li>
</ul>

<p align="center">
  <img src="project-report-images/usecasemod.png" width="70%"><br>
  <b>Figure 6. </b> <i>Use Case Diagram</i>
</p>

<h2>User Stories</h2>

<p>To further refine the user experience, we translated these functional requirements into user stories to reflect real-life players' motivations. By prioritising features using the <strong>MoSCoW method</strong>, we ensure that essential gameplay elements are implemented first while leaving room for potential enhancements to the game.</p>

<table>
        <thead>
            <tr>
                <th>Initiatives</th>
                <th>Epics</th>
                <th>User Stories</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Simple Gameplay and Clarity</td>
                <td>
                    <ul>
                        <li>Simple mouse movements</li>
                        <li>Clear visual design and self-explanatory mechanics</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>As a busy player with daily commitments, I want a game that is easily accessible and simple to follow, so I can play in brief sessions without feeling overwhelmed.</li>
                        <li>As a casual player, I want a game with straightforward and intuitive gameplay that I can pick up quickly without a time-consuming learning curve.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>Variety of Gameplay</td>
                <td>
                    <ul>
                        <li>Various fruits</li>
                        <li>Various recipes</li>
                        <li>Various slicing patterns</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>As a player, I want a variety of fruits and features that introduce fresh experiences in each gameplay session.</li>
                        <li>As a long-term gamer, I want a game that never ends, so that I can play the game for longer.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>Progression of Difficulty</td>
                <td>
                    <ul>
                        <li>As game goes on for longer recipes get more complex</li>
                        <li>As game goes on slicing patterns get more complex</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>As someone who likes to be challenged, I want to experience more challenge as time goes on, thereby feeling a sense of achievement through overcoming difficulty.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>Sense of Achievement</td>
                <td>
                    <ul>
                        <li>Player gains points for slicing the correct fruit</li>
                        <li>Player gains points for completing a recipe</li>
                        <li>Player has their high score kept track of</li>
                        <li>Player loses lives if they do something wrong</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>As a long-term gamer, I want a game that has my high score, so that I can have a sense of achievement over time.</li>
                        <li>As an easily bored gamer, I want to have an element of danger in the game, so that I am kept on my toes and stay engaged.</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>

<h3>User Stories – Prioritized using MoSCoW and Value vs Effort</h3>
<strong>Must Have (High Value, Low Effort):</strong><br>
<ul>
  <li>As a busy player with daily commitments, I want a game that is easily accessible and simple to follow, so I can play in brief sessions without feeling overwhelmed.</li>
  <li>As a casual player, I want a game with a straightforward and intuitive gameplay that I can pick up quicky without a time-consuming learning curve.</li>
</ul>
<strong>Should Have (High Value, High Effort):</strong><br>
<ul>
  <li>As a player, I want a variety of fruits and features that introduce fresh experiences in each gameplay session.</li>
  <li>As a long-term gamer, I want a game that never ends, so that I can play the game for longer.</li>
  <li>As someone who likes to be challenged, I want to experience more challenge as time goes on, thereby feeling a sense of achievement through overcoming difficulty.</li>
  <li>As an easily bored gamer, I want to have an element of danger in the game, so that I am kept on my toes and stay engaged.</li>
</ul>
<strong>Could Have (Low Value, Low Effort):</strong><br>
<ul>
  <li>As a long-term gamer, I want a game that has my high score, so that I can have a sense of achievement over time.</li>
</ul>

## Use Case Specification
### Single Player Mode

<Strong>Basic Flow</Strong>

| **Step** | **Easy Mode**                                                                                      | **Hard Mode**                                                                                           |
|---------:|----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| 1        | Player launches the game and selects Easy mode.                                                    | Player launches the game and selects Hard mode.                                                          |
| 2        | Recipe icons appear at the top of the screen.                                                      | Recipe icons appear at the top + slicing methods found in recipe book (bottom-right corner).            |
| 3        | Fruits appear and can be sliced freely using a mouse.                                                            | Fruits appear and must be sliced in the correct direction/method using a mouse.                                       |
| 4        | Slice any correct fruit: +10 points.                                                               | Slice correct fruit **with correct method**: +10 points.                                                 |
| 5        | Complete a recipe (all fruits in the recipe are sliced): +20 bonus points.                                     | Complete a recipe with correct slices: +20 bonus points.                                                 |
                                

<Strong>Alternative Flow</Strong>
| **Step** | **Easy Mode**                                                   | **Hard Mode**                                                        |
|---------:|------------------------------------------------------------------|----------------------------------------------------------------------|
| 1        | Wrong fruit sliced: -1 heart. No effect on score.               | Wrong fruit sliced: Same as Easy mode.                 |
| 2        | Sliced dragon fruit: +1 heart (max 3).                          | Sliced dragon fruit: +1 heart (max 3).                            |
| 3        | Sliced bomb: Instant game over.                                 |  Sliced bomb: Instant game over.                                    |
| 4        | Incorrect slicing method: Not applicable.                       | Incorrect slicing method: -1 heart. No score.                       |

### Two Player Mode

<Strong>Basic Flow</Strong>

| **Step** | **Easy Mode**                                                                                                 | **Hard Mode**                                                                                                  |
|---------:|---------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| 1        | Player 1 selects Easy + Two Player mode.                                                                      | Player 1 selects Hard + Two Player mode.                                                                       |
| 2        | Player 1 slices fruits using the mouse.                                                                       | Player 1 slices fruits using correct direction/method.                                                         |
| 3        | Player 2 moves basket using ⬅️ and ➡️ arrow keys to catch sliced fruit.                                        | Same as Easy mode.                                                                                             |
| 4        | Correct sliced fruit caught: +10 points.                                                                      | Correctly sliced **and** caught fruit: +10 points.                                                             |
| 5        | Recipe completion: +20 bonus points.                                                                          | Same, only if all fruits sliced correctly and caught.                                                          |


<Strong>Alternative Flow</Strong>

| **Step** | **Easy Mode**                                                   | **Hard Mode**                                                        |
|---------:|------------------------------------------------------------------|----------------------------------------------------------------------|
| 1        | Fruit missed by basket: No points awarded.                      | Fruit missed by basket: No points awarded.                          |
| 2        | Wrong fruit sliced: -1 heart.                                   | Wrong fruit sliced: -1 heart.                                       |
| 3        | Sliced dragon fruit: +1 heart (max 3).                          | Sliced dragon fruit: +1 heart (max 3).                             |
| 4        | Bomb sliced: Instant game over for both players.               | Bomb sliced: Instant game over for both players.                    |
| 5        | Incorrect slicing method: Not applicable.                       | Incorrect slicing method: -1 heart. No score.                       |


# Design (Barney)

Our game was built using the programming languages HTML, CSS and JavaScript with the files hosted on the popular code sharing website GitHub, allowing our game to be easily distributed and playable on any device with an internet browser. In addition to this we heavily utilised the P5.js JavaScript library for due to its easy and effective animation capabilities.

The user interface is designed to be simply navigated with just the device cursor, ideally a mouse as during testing we found the game was significantly more difficult when using a trackpad, and limited key presses. The game can be played on mobile with touch replacing the cursor, however due to time constraints the game has not been optimized for these types of devices leading to numerous issues if done so.

We chose an Object-Oriented Design as it made visualising and designing the game easier as well as providing additional benefits of code efficiency and modularity, making it easier to maintain and scale up in the long run. This meant upholding the principles of Object-Orientation including encapsulation, abstraction, inheritance, polymorphism and composition. 

With these principles in mind we devised the classes represented in the class diagram below: 

The game loads with the main menu which features two buttons to choose between either easy mode or hard mode, two buttons to choose between one player and two player mode, a button to choose the tutorial mode and a text prompt directing the player to start the game by pressing enter to communicate clearly to the player about how to operate the game. For the buttons we decided to have a fixed style to save time and code when needing a new button. Buttons display specified text, become highlighted when being hovered over, go a darker colour and make a sound when having been pressed. This functionality of the buttons was designed to clearly and intuitively communicate to the player what pressing the buttons does and when they have been pressed. In addition to this the high score is also present within the top right corner so that the player doesn’t have to start the game to be reminded of it. The sound button is also present in the right-hand corner throughout the entire system to allow the player to easily turn off the music when desired.

The tutorial was implemented so that new players could quickly learn the rules of the game and get playing as soon as possible and start enjoying it. When clicking the tutorial the player is presented with three further buttons, “learn the rules”, “slicing” and “back”. When learn the rules is clicked it takes the player to a series of slides they can click through showing screenshots from the game alongside explanations of the different modes and how to play them. When slicing is clicked it takes the player to a series of interactive animations that teach them how to slice each individual fruit with text prompts in the bottom left corner and arrows directing them. There are also arrows on the left and right of the screen to easily cycles through each fruit type in this section. The back button is present throughout the tutorial section to allow easy navigation and exit, upholding the design principle of …

In the main game, randomly-generated fruits are thrown up on screen for the player to slice them. The player gains 10 points for correctly slicing the first fruit in the recipe displayed at the top of the screen and gains 20 points for completing the whole recipe. If the player slices the wrong fruit they lose a life. In addition to this there is also the dragon fruit which gives the player another life if sliced as well as a bomb which causes the player to lose all their lives if sliced. When the player loses all their lives they are taken to the game over screen where they are presented with two buttons to either start over or go to the main menu. The current score is displayed in the top right corner, the amount of lives the player has in the top left, the current recipe at the top middle and the pause button in the bottom right above the sound button which if pressed pauses the game and presents the player with three buttons to either resume the game, restart the game or quit the game. All of which is intended to provide all the relevant information and functionality to the player.

In easy mode the player just has simply slice the relevant fruit in any direction whereas in hard mode there is a specific direction for each fruit for it to count as a correct slice. The player can remind themselves of the specific direction they need to cut the fruit by hovering over the recipe book on the right of the screen. In two player mode there is the addition of the basket that is controlled by the second player using the left and right arrow or ‘a’ and ‘d’ keys, which catches any sliced fruit. If the sliced fruit is not caught by the basket the points game from the slice are lost. There are various visual indicators within the main game to let them know of specific things such as losing or gaining life or completing a recipe.


# Implementation (Omnia)

- 15% ~750 words

- Describe implementation of your game, in particular highlighting the three areas of challenge in developing your game. 

# Evaluation (Matilda)

## Abstract

This section presents the HCI evaluations of Smoothie Operator, with a particular focus on assessing balanced usability, cognitive load, and player engagement. To assess the game's key issues early in the design process, we employed a mixed-methods approach - combining qualitative feedback from Think Aloud evaluations with quantitative data collected using the NASA Task Load Index (TLX). Evaluations were conducted with a range of participants to encapsulate a comprehensive picture of potential user behaviours and perceptions. The primary objectives were to identify the usability key issues and measure player workload and demand across gameplay tasks to inform iterative design improvements. Results from the evaluations provided clear and direct feedback on the game's task flow and cognitive demands, leading to straightforward problem-solving to gameplay.

## Qualitative: Think Aloud

To evaluate the usability and HCI design of Smoothie Operator, we employed the Think Aloud (TA) protocol—an established method that provides real-time insights into user behaviour and experience (Nielsen, 1993). This approach was selected over Heuristic Evaluation for several reasons: the dynamic nature of the gameplay—requiring rapid mouse-based gestures and immediate feedback—demanded direct observation of users in context. Heuristic methods are less effective in capturing real-time breakdowns in game interaction, particularly when evaluating unconventional input modalities. TA enables the collection of instantaneous verbal data from participants as they engage with the game. This revealed four prominent areas for improvement: confusion around input mapping, varied responses to the visual feedback system, the learning curve associated with recipe memorisation, and the overall emotional experience. The richness of these observations, particularly in relation to control fluency and gameplay clarity, significantly informed subsequent design iterations. Participant commentary was analysed using thematic coding and categorised to identify patterns of friction, satisfaction, and emergent player strategies (see Table X). 

Table X: Raw Think Aloud (TA) feedback
| Theme           | Positive                                                                                                                                 | Negative                                                                                                                            |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| Controls        | - The click control is very satisfying<br>- The `cursorEffect` provides good user feedback                                              | - Touchpad is inelegant<br>- The `mousepressed` function bugs after hearts lost<br>- The `mousepressed` for slicing could be redundant |
| Display         | - Good fruit sizes<br>- Fruit slice visuals are very rewarding                                                                          | - Recipe aspect and order is unclear<br>- `cursorEffect` does not remain long enough<br>- Some fruits are generated stuck together   |
| Learning Curve  | *(None listed)*                                                                                                                         | - Initial difficulty remembering rules<br>- Initial difficulty remembering slice patterns<br>- Once slice patterns are internalised, they're too easy to remember |


### Controls 
Feedback regarding the game’s controls was fairly consistent. There was a general consensus that adapting a game typically played on a touchscreen device (such as an iPad or phone) to a laptop or PC using a mouse or trackpad introduced a degree of disjointedness to the user experience. Our user tests were structured so that roughly a third of participants played using a mouse, a third with a trackpad, and a third tried both sequentially. The overall consensus was that using a mouse provided a more fluid and enjoyable gameplay experience.

A minor bug was encountered — labelled in our test documentation as "the mousePressed function bugs after hearts lost" — but this was resolved early in development.

One tester suggested that the "click and drag" mechanic for slicing might be redundant, and that gameplay might be smoother if users didn’t need to press down at all. While we carefully considered this feedback, we ultimately chose not to act on it for the following reasons:

1. The blueberry’s "slice pattern" requires a single-click input, which would become unworkable without click detection.
2. In easy mode, testers highlighted the satisfying, rapid clicking mechanic as a key positive feature.
3. Removing the click would reduce user control, increasing the likelihood of accidental slices — especially problematic when users may be trying to pause the game or consult the recipe book.

### Display
NEED TO ACTUALLY FIX SOME THINGS IN THE GAME - 1. CURSOREFFECT DOES NOT REMAIN FOR LONG ENOUGH 2. FRUIT GENERATED STUCK TOGETHER

### Learning Curve
Early user feedback regarding the game's initial difficulty was flagged: at this stage in the development several core features hadn't been implemented. Users found the games objectives and rules were initially unclear and many disliked the reliance on memory; having to remember specific slice patterns was tedious and created a slow, tedious gameplay. 

To address this, we implemented two features to our gameplay:

1. The recipe book: In hard mode, we introduced an in-game recipe book, that displays slice patterns for fruit. This allowed the user to easily refer to it during gameplay, eradicating any clunky, stop-and-start flow from having to memorise them.

![Recipe Book Evaluation](project-report-images/Think-Aloud-Recipe-Book.gif)

*Figure 1: Demo of the interactive recipe book feature.*

2. Tutorial Mode: We also added a tutorial accessible directing from the start screen. This faciliatated users to practise before gameplay. The player could internalise the slicing mechanics, and learn other essential gamplay features, such as:
 - Avoiding the bomb
 - The dragonfruit +1 life benefit
 - The importance of slicing the fruit in the correct recipe order

![Recipe Book Evaluation](project-report-images/Dragonfruit-Tutorial-Example.gif)

*Figure 2: Clear, informative dragonfruit explanation feature in tutorial mode.*

## Quantitative: NASA TLX
One of our primary goals was to create a game that was accessible to both casual players and highly-skilled users. As a result we devised two levels of difficulty within our game. We wanted a noticable increase in difficulty between the modes (this has been proven to increase player enjoyment from previous studies (Alexander et al., 2013)), while having frustration levels remain relatively unchanged. In Easy Mode, the user still needed to slice the fruit in the correct recipe order, but the slice patterns and the bombs were scrapped. In Hard Mode, the bombs and the slice patterns were re-introduced. We collected a data using the NASA Task Load Index (TLX) from a group of diverse age ranges, and with differing experience in playing video games. We chose the NASA TLX as it's been shown to be highly reliable for assessing game difficulty (Hart & Staveland, 1988; Ramkumar et al., 2016; Seyderhelm & Blackmore, 2023). We determined that using the raw TLX scores would be easier and faster to administer, and that it makes sense to opt for the easier option when studies report back mixed results for raw vs. weighted TLX scores (Hart (2006)).

![Alt text](project-report-images/NASA-TLX-Load-Index-Bar-Chart.png)

*Figure 2: NASA TLX Evaluation Bar Chart Feedback.*

The bar chart above shows a notable increase in overall workload from Easy to Hard mode: an expected and desirable outcome. These results validated our game objectives- we wanted to create an engaging learning curve to interest first-time players and long-term gamers.

- The accompanying pentagraph (below) reveals more granular differences:
- A significant rise in effort and frustration
- A moderate increase in mental demand and perceived performance
- Minimal change in physical or temporal demand

These findings suggest that the added difficulty in Hard mode effectively challenged the player without overwhelming them physically or pacing-wise.
![Alt text](project-report-images/NASA-TLX-Load-Index-Pentagraph.png)

*Figure 3: NASA TLX Pentagraph demonstrating specific demand difference feedback.*

The accompanying pentagraph (above) reveals more granular differences:
- A significant increase in effort and frustration
- A moderate increase in mental demand and perceived performance
- Minimal or no change in physical or temporal demand

These findings suggest that the added difficulty in Hard mode effectively challenged the player without overwhelming them physically or pacing-wise.

# Process
Our team had a great success working together, which was the result of a variety of software development techniques and team building exercises. Effective communication was our main priority throughout the process because it allowed us to clearly allocate tasks and track progress.
## Working as a Team
As part of the Software Engineering module, our first team building exercise let us share with each other the percentage of our individual levels of commitment to the project (ours ranged from 85% to 100%). The early weeks of development honestly reflected those levels, but we were missing a key aspect of software engineering; collaboration. Eager to start working on the project, we began implementing our own ideas and goals, displaying a lack of clear communication. These independent efforts resulted in an incomplete and difficult to understand early prototype of the game because it did not benefit from any collaborative skills. We decided to take time to reflect on our process and think of a better approach. 
## Development Tools and Techniques
Since our main goal was to increase team effort, we decided to follow an agile framework which would allow us to prioritise collaboration and enhance our individual skills. The main agile principle we followed was breaking down our project into small and manageable iterations which would encourage us to continuously deliver working software, while working at a steady and sustainable pace. To help plan our iterations, we set up a Kanban board on our Github to organise smaller tasks and track their statuses. Before each sprint, we would have an in-person meeting to discuss which of the items on our to-do column had top priority and needed to be achieved in that iteration. Once those tasks were allocated to members of the team, we would then look to see if we could allocate other tasks with less priority. To help us plan the duration of each iteration (or sprint), we would agree on a story point for each task based on its relative size which would help us estimate the effort required. At the end, work on our game was spread across 3 sprint cycles throughout the term, with most of the features being implemented during the first sprint. We used the remaining sprints to carry out refinements and enhancements. This structure allowed us to reflect on our performance and assess our workflow. 
<p align="center">
  <img src="project-report-images/sprint-review.png" width="50%"><br>
  <b>Figure 1. </b> <i>Sprint breakdown for the project</i>
</p>
<p align="center">
  <img src="project-report-images/kanban-board.png" width="50%"><br>
  <b>Figure 2. </b> <i>Our Kanban board</i>
</p>
The agile iterative framework is desgined to embrace change by encouraging flexibility in handling evolving product requirements. This aspect was instrumental for us when we were asked to add a new difficulty level to the game because it meant that we could adapt to this new requirement without dsrupting the overall development process by updating our Kanban board, allocating the task and reassessing our priorities. This resulted in a fast delivery of a well-tested and fully-working easy mode for our game. 

## Communication 
Another agile principle we followed was face to face communication which was often oragnised by our Scrum Master, Ziyan. However, we found out that our team member's work style would benefit more from planned long sessions at the lab rather than quick daily standup meetings as suggested by the agile principle. Thus, our Scrum Master would help us plan these coding and creativity sessions on Whatsapp where we would agree on our goals. However, the infomral nature of the app proved to be tricky; one member of team reached out to the rest of us with concerns about the work not being clearly delegated. The rest of team agreed that our communication style had been too relaxed, and suggested that we move our discussions to Microsoft's Teams which is linked to our university accounts. We changed our communication style so that it would involve a clear breakdown of our meetings summarising what our goals were ahead of the meeting, what was successfully achieved and the key points for the following meeting. In addition, we found that this was a better way for document sharing and conducting voting polls. This was also a better alternative for members who were unable to attend a particular meeting in person. 
<p align="center">
  <img src="project-report-images/old-chat.png" width="20%"><br>
  <b>Figure 3. </b> <i>An example of our old communication style</i>
</p>
<p align="center">
  <img src="project-report-images/new-chat.png" width="50%"><br>
  <b>Figure 4. </b> <i>An example of our new communication style</i>
</p>

# Sustainability (Scarlett)
With sustainability becoming an increasingly urgent global priority, it is imperative that we find simple, everyday ways to engage people in more environmentally friendly behaviours. Therefore, when designing our game, Smoothie Operator, we wanted to ensure that sustainable thinking was a part of the development process. 
To do this, we first needed to understand the sustainability impact of our game. Our analysis was based on the Sustainability Awareness Framework (SusAF), which is divided into five sectors: individual, technical, social, environmental, economic (Becker et al., 2015). We decided to focus primarily on the environmental, individual and social dimensions as they were more relevant to our game than technical and economical at this stage:

### 1)	 The individual dimension refers to personal freedom and fulfilment : 
Our game promotes lifelong learning by incorporating cognitive challenges. For instance, in Hard Mode, players must slice fruits in specific directions to earn points, requiring them to memorise the fruits’ directional patterns. To support this, an on-screen ‘recipe book’ provides visual cues when needed. Research suggests that games involving memory and reasoning tasks can enhance cognitive abilities such as short-term memory, reaction time, and communication skills (Ning et al., 2020). Based on this, we can infer that our Smoothie operator offers a degree of cognitive stimulation.

However, our NASA TLX evaluation revealed that players found hard mode more frustrating that easy mode (Figure …). While moderate frustration in gameplay can be empowering, motivating players to overcome challenges and increasing resilience, it also has the potential to negatively impact an individual’s emotional health by evoking stress and anxiety. In addition, the precise timing and accuracy required to slice the fruits may help improve hand-eye coordination and boost reflexes, improving an individual’s physical health. 

Currently, we do not collect user data in the form of a leaderboard system; only a player’s current and highest scores are visible. Although this helps to protect player privacy, it may also reduce the social or competitive element that often makes games more engaging. 

### 2)	The social dimension refers to relationships between individuals and groups :
Recognising that the game initially lacked social interaction, we implemented a two-player mode. In this mode, players need to work together to achieve a higher score. Implementing a cooperative element, that requires shared strategy, into our game encourages teamwork and effective communication as well as creating a more supportive environment within the gaming community. However, cooperative gameplay may also introduce conflict, especially if one player performs better than the other, potentially leading to tension and criticism, as players need to rely on each other to earn more points.

Smoothie Operator has a simple interface, with minimal instructions and a single-level design, attracting new users who are interested in casual gaming. Therefore, our initiative of “simple gameplay and clarity” helps to make the game inclusive of people who enjoy gaming but may not have the time to do so, and allows them to interact with others in a fun, low-pressure environment.

### 3)	The environmental dimension refers to the use and stewardship of natural resources :
Our game has a minimalistic design, aligning with Jakob Nielsen’s heuristics for user-friendly interfaces (Nielsen, 1994). By implementing efficient, object-oriented programming, we’ve optimised performance and reduced unnecessary resource consumption. Together, these choices contribute to lower energy usage and potentially reduce e-waste over time. 

Currently, our game is only hosted on GitHub; this is a platform committed to carbon negativity, 100% renewable energy use, and sever circularity (Brescia, 2021). Hosting our game only on GitHub allows us to contribute to these broader sustainability goals as well as minimising the need for new hardware, as it is accessible through any device, with internet access, via a public repository. It also does not require any downloads or installations, reducing storage needs.

As a digital-only product, Smoothie Operator avoids carbon emissions associated with physical production. However, all digital games require energy, but we aim to offset the environmental impact of our game through using GitHub. In the future, we hope to explore more hosting platforms that have a similar carbon footprint to GitHub, in order to make our game even more accessible.

## Green Software Foundation Implementation Patterns (I will finish and implement)
To make our game more sustainable, we implemented three green software patterns:
1)	Remove all unused CSS definitions
2)	Serve images in modern formats
3)	Deprecate GIFs for animated content (turn gif to mp4)

…..



# Conclusion

- 10% ~500 words

- Reflect on project as a whole. Lessons learned. Reflect on challenges. Future work. 

### Contribution Statement

<table>
 <thead>
  <tr>
   <th>Developer</th>
   <th>Contribution</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Omnia Ali</td>
   <td>1.0</td>
  </tr>
  <tr>
   <td>May Daoud</td>
   <td>1.0</td>
  </tr>
  <tr>
   <td>Barney Evershed</td>
   <td>1.0</td>
  </tr>
  <tr>
   <td>Scarlett Hurford</td>
   <td>1.0</td>
  </tr>
  <tr>
   <td>Matilda Stokes</td>
   <td>1.0</td>
  </tr>
  <tr>
   <td>Ziyan Zhao</td>
   <td>1.0</td>
  </tr>
 </tbody>
</table>

# References

Becker, C. et al. (2015) ‘Sustainability design and software: The Karlskrona Manifesto’, 2015 IEEE/ACM 37th IEEE International Conference on Software Engineering [Preprint]. doi:10.1109/icse.2015.179. 

Brescia, E. (2021) Environmental sustainability at github, The GitHub Blog. Available at: https://github.blog/news-insights/company-news/environmental-sustainability-github/ (Accessed: 21 April 2025). 

Nielsen, J. (1994) ‘Enhancing the explanatory power of usability heuristics’, Proceedings of the SIGCHI Conference on Human Factors in Computing Systems, pp. 152–158. doi:10.1145/191666.191729. 

Ning, H. et al. (2020) ‘A review on serious games for dementia care in ageing societies’, IEEE Journal of Translational Engineering in Health and Medicine, 8, pp. 1–11. doi:10.1109/jtehm.2020.2998055. 



