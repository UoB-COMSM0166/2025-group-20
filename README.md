# COMSM0166 2025-group-20

## Our Game
<p align="center"> 
  <img src='docs/Design/Images/game-title.png'><br>
  <a href='https://drive.google.com/file/d/18Tgqo3EJAwu4O5Nu4xjZzqFX1K9_vdtC/view?usp=share_link'>
    <img src='docs/Design/Images/watch-our-video.png' width='150'> 
  </a>
  <a href="https://uob-comsm0166.github.io/2025-group-20/"> 
    <img src='docs/Design/Images/play-our-game.png' width='150'>
  </a>
  <a href="#individual-contribution">
    <img src="docs/Design/Images/meet-our-team.png" width="150">
  </a>
</p>

## Our Group
<div align="center">
  <img src='project-report-images/group-picture.png'><br>
</div>

## Introduction
As a team, we wanted to create something that paid homage to a game we all knew and loved growing up. Rather than relying solely on instinct and quick reactions, we aimed to challenge players’ focus, precision, and sequencing skills. We also wanted to create a game that offers players a fun and rewarding experience whether they were new or advanced gamers. This idea led to the creation of Smoothie Operator — a fruit-slicing game that requires precise accuracy and mental focus!

We drew inspiration from two food-based games: Fruit Ninja, a fast-paced, endless slicer that tests reflexes but doesn’t require mental focus, and Overcooked, a cooking simulation that completes tasks in a specific sequence but lacks precision based mechanics. From these two, we created a hybrid experience with two twists. First, players in ‘Ninja'/Easy Mode slice fruits not just for fun, but to complete smoothie recipes in the order displayed at the top of the screen. Second, in ‘Samurai’/Hard Mode, players still need to follow the recipe order, but they must also slice fruits in specific directions, adding another layer of difficulty. 

Additionally, we wanted to incorporate a social aspect into our game, so we added a multiplayer mode where one player slices fruits with the mouse while the other uses the keyboard to control a basket and catch them.

Designing our game based on user experiences led us to create a game that was mentally and physically engaging, simple to understand, and well-paced.

## Requirements 
<h3>Ideation Process</h3>

<p>
  In the early stages of development, we used both 
  <a href="https://miro.com/app/board/uXjVLtyUR80=/Miro" target="_blank">Miro</a> (Figure 1) and 
  <a href="https://uob-my.sharepoint.com/:w:/r/personal/zy21368_bristol_ac_uk/_layouts/15/Doc.aspx?sourcedoc=%7B16215be5-ecc8-4461-980c-cd596f6d788d%7D&action=edit&wdPid=4e6e8707" target="_blank">Google Docs</a> 
  to collaboratively brainstorm and explore different game concepts. After multiple discussions, we narrowed our ideas down to three main options:
</p>


<p align="center">
  <br>
  <img src="project-report-images/miro.png"><br>
  <b>Figure 1. </b> <i>Miro Board</i>
</p>

During the third workshop, we created a paper prototype to help refine our ideas. This allowed us to translate abstract concepts into tangible gameplay mechanics. By prototyping with paper, we were able to explore key aspects of the game design, including visual layout, player controls, and how users would interact with the interface.

Following this exercise, we held a team vote and ultimately chose to develop a game inspired by Fruit Ninja with a slight adaptation from another game, Overcooked. We felt this concept offered a manageable scope for development while still providing creative flexibility to tailor the user experience.

<p align="center">
  <br>
  <img src="project-report-images/prototype.gif" width="70%" ><br>
  <b>Figure 2. </b> <i> Smoothie Operator Paper Prototype</i>
</p>

<h3>Identifying Stakeholders </h3>
We started by using the Onion Model to identify key stakeholders, such as players, developers, and testers, to understand the different perspectives that influence game design. We then gathered feedback during prototype demos, asking individuals to evaluate the game from their perspective as stakeholders. While our project has been primarily designed within a university setting, the Onion Model emphasises how well-designed systems can influence broader social behaviors by offering engaging gameplay experiences for specific communities.

<p align="center">
  <br>
  <img src="project-report-images/onion_model_apple.png" width="50%"><br>
  <b>Figure 3. </b> <i>Onion Model of Smoothie Operator (but in the shape of an apple!)</i>
</p>

<h3>User Stories</h3>
We employed user stories to define our functional requirements because they provide a clear, stakeholder-centred way to communicate what to build, for whom, and why, making them accessible to both technical and non-technical team members. We began by identifying a broader strategic objective (initiative), then broke it down into epics and user stories. This structured approach was especially helpful in the early stages of game development, as it gave us focused and actionable goals as to what to build. For example, we designed the game to have a tutorial page from the start, so our game maintains clarity.<br><br>
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
      <td rowspan="2">Simple Gameplay and Clarity</td>
      <td>Clear visual design and self-explanatory mechanics</td>
      <td>
        - As a busy player with daily commitments, I want a game that is easily accessible and simple to follow, so I can play in brief sessions without feeling overwhelmed.<br>
        - As a casual player, I want a game with straightforward and intuitive gameplay that I can pick up quickly without a time-consuming learning curve.<br>
        - As a new player, I want the game to provide immediate feedback and clear instructions, so I can understand how to play and improve without needing external help.
      </td>
    </tr>
    <tr>
      <td>Simple mouse movements</td>
      <td>
        - As a casual player, I want to slice objects using quick mouse movements, so I can enjoy fast-paced gameplay without complicated controls.<br>
        - As a regular player, I want the game to recognise my slicing directions accurately through mouse movements so that I can feel in control and engaged from the start.
      </td>
    </tr>
    <tr>
      <td rowspan="2">Progression of Difficulty</td>
      <td>As the game goes on for longer recipes get more complex</td>
      <td>
        - As a regular player, I want the game to introduce faster objects over time so that the game challenge increases and keeps me engaged.<br>
        - As a competitive player, I want the game to introduce more variety like combo traps, so I feel rewarded for improving my skills.
      </td>
    </tr>
    <tr>
      <td>As the game goes on slicing patterns get more complex</td>
      <td>
        - As a focused player, I want slicing patterns to require specific directions as the game goes on, so I can feel a growing sense of improvement and precision.<br>
        - As a strategic player, I want the game pace to accelerate in pace, so I can find it more challenging to slice a fruit correctly and precisely.
      </td>
    </tr>
    <tr>
      <td rowspan="2">Sense of Achievement</td>
      <td>Player has their high score kept track of</td>
      <td>
        - As a competitive player, I want the game to record my highest score, so I can try to beat my personal best each time I play.<br>
        - As a motivated player, I want to see my high score displayed on the main menu, so I feel encouraged to keep improving and playing again.<br>
        - As a returning player, I want the game to display a history of my best scores, so I can stay motivated and see how much I’ve improved.
      </td>
    </tr>
    <tr>
      <td>Player loses lives if they do something wrong</td>
      <td>
        - As a new player, I want a clear visual when I make a slicing mistake that costs a life, so I can learn from my errors and improve without confusion.<br>
        - As a challenge-seeking player, I want to lose a life if I slice a forbidden object (i.e. bomb), so the game feels more intense and still requires precise decisions under pressure.
      </td>
    </tr>
  </tbody>
</table>
<p align="center">
  <b>Table 1. </b><i>User requirements divided into initiatives, epics, and user stories.</i>
</p>

<h3>Use Case Diagram and Specifications</h3>
At this stage of development, we were still evaluating whether our game concept was feasible to implement and enjoyable to play. To better understand the functionality and expectations of different stakeholders, we used user stories and identified key roles to create a Use Case Diagram. This helped us visualise and define what different elements of the game should and shouldn’t do.
<p align="center">
  <img src="project-report-images/usecasediagram.png" width="70%"><br>
  <b>Figure 4. </b> <i>Use Case Diagram</i>
</p>

In addition to the diagram, we developed detailed use case specifications to map out how players would interact with the game. This proved incredibly helpful, as it made us realise the importance of providing clear feedback and visibility within gameplay. For instance, players should be notified not only when they make a mistake but also when they achieve something. Including such feedback mechanisms became a core design priority to maintain user clarity.

As we worked through these use cases, we also saw an opportunity to introduce a multiplayer mode to encourage social interaction. As a result, we expanded our use case specifications to cover both single-player and multiplayer scenarios, ensuring each mode supported the gameplay goals and user experience.

<h4>1. Single Player Mode </h4>

***1.1 Basic Flow***
<table>
  <thead>
    <tr>
      <th>Steps</th>
      <th>Ninja Mode</th>
      <th>Samurai Mode</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>1</td>
    <td>Player launches the game and selects Ninja Mode.</td>
    <td>Player launches the game and selects Samurai Mode.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Recipe icons appear at the top of the screen.</td>
      <td> Recipe icons appear at the top + slicing methods found in the recipe book (bottom-right corner).</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Fruits appear and can be sliced freely using a mouse or trackpad.</td>
      <td>Fruits appear and must be sliced in the correct direction/method using a mouse or trackpad.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Slice the correct fruit: +10 points.</td>
      <td>Slice the correct fruit <b>in the correct pattern</b>: +10 points</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Complete a recipe (all fruits in the recipe are sliced): +20 bonus points.</td>
      <td>Complete a recipe with correct slices: +20 bonus points. </td>
    </tr>
  </tbody>
</table>
<p align="center">
  <b>Table 2a. </b> <i>Use Case Specification of Basic Flow in Single Player.</i>
</p>

***1.2 Alternative Flow***
<div align="center">
  <table>
    <thead>
      <tr>
        <th>Steps</th>
        <th>Ninja Mode</th>
        <th>Samurai Mode</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Wrong fruit sliced: -1 heart. No effect on score.</td>
        <td>Wrong fruit sliced: Same as Ninja mode.</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Sliced dragon fruit: +1 heart (max 3).</td>
        <td>Sliced dragon fruit: +1 heart (max 3).</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Sliced bomb: Instant game over.</td>
        <td>Sliced bomb: Instant game over.</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Incorrect slicing method: Not applicable.</td>
        <td>Incorrect slicing method: -1 heart. No score.</td>
      </tr>
    </tbody>
  </table>
  <b>Table 2b. </b> <i>Use Case Specification of Alternative Flow in Single Player.</i>
</div>

<h4>1. 2. Multiple Players Mode </h4>

***2.1 Basic Flow***
<table>
  <thead>
    <tr>
      <th>Steps</th>
      <th>Ninja Mode</th>
      <th>Samurai Mode</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Players select Ninja Mode under Two-Players Mode</td>
      <td>Players select Samurai Mode under Two-Player Mode</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Player 1 slices fruits using the mouse or trackpad.</td>
      <td>Player 1 slices fruits in the correct slicing pattern</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Player 2 controls the basket using their preferred keys (aswd or arrow controls)</td>
      <td>Player 2 controls the basket using their preferred keys (aswd or arrow controls)></td>
    </tr>
    <tr>
      <td>4</td>
      <td>Correct sliced fruit caught: +10 points.</td>
      <td>Correct sliced fruit <b>with the correct pattern</b> caught: +10 points</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Recipe completion: +20 bonus points.</td>
      <td>Recipe completion: +20 bonus points.</td>
    </tr>
  </tbody>
</table>
<p align="center">
  <b>Table 3a. </b> <i>Use Case Specification of Basic Flow in Multiple Player.</i>
</p>

***2.2 Alternative Flow***
<div align="center">
  <table>
    <thead>
      <tr>
        <th>Steps</th>
        <th>Ninja Mode</th>
        <th>Samurai Mode</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Fruit missed by basket: No points awarded.</td>
        <td>Fruit missed by basket: No points awarded.</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Wrong fruit sliced: -1 heart.</td>
        <td>Wrong fruit sliced: -1 heart.</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Sliced dragon fruit: +1 heart (max 3).</td>
        <td>Sliced dragon fruit: +1 heart (max 3).</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Bomb sliced: Instant game over for both players.</td>
        <td>Bomb sliced: Instant game over for both players.</td>
      </tr>
      <tr>
        <td>5</td>
        <td>N/A</td>
        <td>Incorrect slicing method: -1 heart. No score.</td>
      </tr>
    </tbody>
  </table>
  <b>Table 3b. </b> <i>Use Case Specification of Alternative Flow in Multiple Player.</i>
</div>

## Design
<p>
  One early development stage required planning a comprehensive design and structure for our game. To achieve a code-efficient and modular structure, we utilised object-oriented programming principles that organised our software around objects and their behaviour.<br><br>
  Firstly we identified the classes needed for our objects, for which we performed an easy grammatical parse exercise which involved identifying nouns from a brief game description. Smoothie Operator is a game where  <b>fruits</b> are <b>generated</b> on-screen, which the player must slice according to a  <b>smoothie recipe</b>. If they slice a fruit out of order, they lose a <b>life</b>. I. If in samurai mode, they must also follow a unique <b>slicing pattern</b> for each fruit. The player gains <b>points</b> for each correctly sliced fruit and completed recipe. If there are two players, the second player controls a <b>basket</b> to catch sliced fruit.<br><br>
  Our core classes would therefore be:
  <ul>
    <li>Fruit</li>
    <li>FruitGenerator</li>
    <li>SmoothieRecipe</li>
    <li>Lives</li>
    <li>GameScore</li>
    <li>SlicingPattern</li>
    <li>Basket</li>
  </ul>
  This initial design was implemented using p5js, with a heavy reliance on JavaScript to manipulate different game screens and states. This meant we dealt with more classes each time we wanted the player to move through a different state in the game. As we progressed through development, we started utilising other tools such as HTML and CSS for UI design and elements, allowing for a cleaner code base. Our multiple game screen classes were replaced by one GameManager class which controlled all game states and facilitated the main gameplay loop flow. Due to the need for draw(), setup(), and other P5 library functions, we used sketch.js to contain these and act as both a 'main' file and a user interface for the Game Manager.
<br> 
</p>

<h3>Class Diagram</h3>
The following diagram illustrates Smoothie Operator’s final design, showing the GameManager controls the behaviour of the other classes. <b>NB</b>: The diagram omits constructors, getters, setters and any constants for reading simplification.
<p align="center">
  <br><img src="https://github.com/UoB-COMSM0166/2025-group-20/blob/27e07bb7d5fab9e4f5017e80f47b65b65c0a3a7e/project-report-images/Report%20Class%20DIagram%20final%20final%20final%20.png" width=700"><br><br>
  <b>Figure 5. </b><i>Class diagram of the game</i>
</p>

Devised classes uphold object-orientation principles in the following ways:

Encapsulation – Objects interact through getters and setters and do not access each other’s internals directly.

Abstraction – Objects have simplified and abstracted functionality. The objects within GameManager interact through abstract interfaces and are loosely coupled.

Inheritance – TutorialManager extends GameManager and TutorialFruit extends Fruit to provide slightly different functionality for the tutorial yet minimise code reuse.

Polymorphism – Different Fruit respond to user mouse input differently due to the different type SlicePatterns.

Composition – GameManager is composed of the other classes. Fruit is composed of SlicePattern which itself is composed of the SliceArray and HitBox classes.

<h3>Sequence Diagram</h3>
When launched, the player can customise their game through a system of on-screen buttons. Their options include Single/Two-player Mode, Easy (Ninja) and Hard (Samurai) Mode, preference for player 2 controls, and preferences for cursor and sound effects. All these options are recorded by the GameManager which manipulates gameplay accordingly through the gameState() method. The player can quit the gameplay loop by pausing the game at any time and choosing the ‘main menu’ option or through the game over screen if they lose the game. 
How these classes communicate and interact over time during the game state is detailed in a simplified Sequence Diagram below: 

![mermaid-diagram-2025-05-11-231022](https://github.com/user-attachments/assets/2a08fb40-5a00-408b-853e-7a295bbd1b68)

<p align="center">
  <b>Figure 6. </b><i>Sequence diagram of the main gameplay loop</i>
</p>

Initially GameManager calls upon FruitGenerator to produce a new Fruit object, the type of which is random althoug higher probability that it is the current fruit type that needs slicing and a low chance it will be a dragon fruit. The User then interacts with the system by using the cursor to slice the Fruit. Each Fruit has a SlicePattern attached to it, which the GameManager then checks. 

If a correct slice, GameManager interacts with GameScore to increment the score. When slicing dragon fruit, GameManager interacts with Lives to increment life count. If this fruit is the last in the recipe GameManager interacts with GameScore to increment score and constructs a new RecipeGenerator to generate a new recipe. If the sliced fruit isn’t at the front of the recipe, the GameManager interacts with Lives to decrement life count. In Samurai mode, if wrongly sliced the wrongSlice effect of class SliceEffect is displayed. With every fruit sliced GameManager utilises Splatter and SliceEffect to display effects letting the User know how it affected the game and interacts with the Fruit class through the makeInert function to make the SlicePattern inert. If a bomb is sliced, GameManager sets the Lives class life count to zero. 

In two player mode the User(s) use the arrow keys or 'a' and 'd' to control the Basket class through the move() function and if a Fruit object has been sliced the GameManager checks the Basket class to see if they're in the same position and if not the GameManager accesses the GameScore class again and decrements the score.

## Implementation
<h3>Challenge 1: A suitable hitbox mechanism</h3>
Originally, Fruit Ninja was designed for mobile, where players could smoothly swipe fruits using the touchscreen. Implementing Ninja (easy) Mode was straightforward, but the Samurai (hard) Mode required players to slice fruits in specific directions, therefore, we needed a way to accurately detect different slicing patterns. Our first challenge was to design an intuitive slicing mechanism that works seamlessly with computer mice and trackpads. To handle slicing, we created a system using three main classes: <br><br> 

•HitBox: A small invisible circle that detects when the player’s mouse passes through it. <br>
•SliceArray: A group of three HitBoxes arranged in a line to detect slicing direction (e.g. up, down, diagonal).<br>
•SlicePattern: Combines multiple SliceArrays to define the full slicing rule for the fruit. In Ninja Mode, it uses one large HitBox; in Samurai mode, it checks if the player slices through the correct pattern of hitboxes in the right direction.

Our initial approach placed 3 hitboxes on each fruit, aligned with the slicing direction and moving alongside it. A correct slice required the cursor to hit all three in order; otherwise, the player had to try again. During early testing, users found this too precise because slices often failed due to slight misalignment, even if the direction was correct. The limited hitbox fruit coverage made accurate slicing frustrating, which went against our goal of making the game both challenging and enjoyable.

Upon examination, we decided to extend the hitboxes to represent a 3x3 grid that covered the entire fruit. This meant that a correct slice could be registered if the user aimed for the edges of the fruit. However, the cursor still needed to hit 3 consecutive hitboxes in the same row/column. Users again reported that it was difficult to keep the cursor in a straight line if the fruit was moving along the screen. This impacted our users' experiences because the system was still registering objectively correct slices as false negatives. Even after adjusting the fruits' speed, or allowing the hitboxes to overlap, we were still encountering difficulties with this design so we brainstormed one last time.

In our final implementation, we maintained the 3x3 grid of hitboxes, but we changed the threshold for a correct slice. A more lenient approach required the cursor to hit the first two hitboxes in the same row/column. After that, if the cursor hits any of the boxes in the remaining row/column, a correct slice will be registered. This makes up for the stress of following the fruit along the screen with a mouse or a trackpad while maintaining the challenging yet exciting aspect of following a specific slicing pattern.

<p align="center">
  <br>
  <img src="project-report-images/challenges1.png" width="70%"><br>
  <b>Figure 7. </b> <i>Evolution of the hitbox system. Arrows indicate valid directions that count as a correct slice.</i>
</p>

<h3>Challenge 2: UI Optimisation</h3>
After implementing most of the game features, we noticed performance issues regarding the loading phase and fruit spawn timing. Through testing, we traced these issues to an overreliance on JavaScript for managing the game’s UI layout and screen transitions. Our initial codebase mainly used JavaScript to manage button placement and interactions across multiple screens, including the difficulty mode selection, recipe, start, pause, and tutorial screens. Clicking a button would often trigger several JavaScript functions and DOM manipulations, which introduced noticeable delays and complications. 

We were able to use CSS and handle these tasks and their layout more efficiently. We shifted layout responsibilities to CSS using Flexbox, where certain segments oversaw different button layouts for example, i.e. centre-buttons (horizontal), .button-wrapper (vertical) and .horizontal. This simplified alignment and spacing without relying on JS positioning logic.

We also identified an opportunity to enhance visual feedback by adding hover effects and a flash animation when the user fails to click on an option or title, minimising the need for extra event listeners or style toggles in JavaScript. We transformed what previously was a scattered style logic, into a single CSS file. This organised classes such as .button and .imageButton for reuse across different game screens and button types. Additionally, we used a custom font with @font-face to ensure stylistic consistency without additional JS font loading. 

This CSS-first approach greatly improved UI responsiveness, reduced code duplication, and made the layout far easier to manage and understand. It also freed up JS to focus solely on gameplay logic, such as scoring, fruit behaviour, and player interaction.

<div align="center">
  <img src="project-report-images/old-diagram.gif" alt="Old Diagram" width="500">
  <br>
  <b>Figure 8. </b> <i> Sequence diagram before implementing CSS for UI</i>
</div>


## Evaluations
<h3>Qualitative Evaluation: Think Aloud </h3>
To evaluate the usability and HCI design of Smoothie Operator, we used the Think Aloud (TA) protocol. This is an empirical method that captures real-time insights into user behaviour. This was chosen over inspection-based methods like Heuristic Evaluation due to the game’s fast-paced, gesture-based interactions, which required direct observation to fully understand user challenges. Heuristic approaches are less effective for identifying real-time breakdowns, especially with unconventional input methods. Participants were asked to:

1.	Navigate to the actual game from the start screen
  
2.	Score at least 150 in one go
  
3.	Attempt to intentionally lose

TA allowed us to gather live verbal feedback as users played, revealing key issues: confusion around input mapping, mixed reactions to visual feedback, and difficulty remembering recipes. These findings, especially those tied to control fluency and clarity, directly informed design changes. Feedback was thematically analysed to identify common points of friction, satisfaction, and emergent strategies.

<div align="center">
  <table>
    <thead>
      <tr>
        <th>Theme</th>
        <th>Positive</th>
        <th>Negative</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Controls</td>
        <td>
          <ul>
            <li>The click control is very satisfying</li>
            <li>The <b>cursorEffect</b> provides good user feedback</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Trackpad is inelegant</li>
            <li> The <b>mousepressed</b> function bugs after hearts lost</li>
            <li>The <b>mousepressed</b> for slicing could be redundant</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>Display</td>
        <td>
          <ul>
            <li>Good fruit sizes</li>
            <li>Fruit slice visuals are very rewarding</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Recipe aspect and order is unclear</li>
            <li><b>cursorEffect</b> does not remain long enough</li>
            <li>Some fruits are generated stuck together</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>Learning Curve</td>
        <td>N/A</td>
        <td>
          <ul>
            <li>Initial difficulty remembering rules</li>
            <li>Initial difficulty remembering slice patterns</li>
            <li>Once slice patterns are internalised, they're too easy to remember</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
  <b>Table 4. </b><i>Raw Think Aloud feedback</i>
</div>

<h4> Controls </h4>

We found that adapting a game designed for touchscreens to laptop or PC input introduced some disjointedness. Our testing split participants evenly between mouse, trackpad, and both. The majority found the mouse offered a smoother, more enjoyable experience. 

One participant suggested removing the 'click and drag' mechanic to simplify slicing. We considered this but decided against it for key reasons: 

•	The blueberry’s slice pattern relies on single-click input, which wouldn’t work without click detection.

•	In Ninja (easy) Mode, rapid clicking was seen as a satisfying feature.

•	Removing click control could lead to accidental slices, especially when accessing menus or the recipe book.


<h4> Display </h4>
User feedback on visuals was exceptionally positive. Players appreciated the nostalgic 8-bit style, satisfying fruit slicing, and the responsive, engaging cursor. The visual design was seen as cohesive and well-executed. 

However, two recurrent issues emerged. Firstly, the occasional generation of overlapping rendered fruits difficult to slice, which we resolved by adjusting the spawn rate and speed. Secondly, some users had trouble seeing their slicing direction and requested a longer-lasting cursor. To avoid clutter, we introduced the cursorWoodScratch effect — a subtle trail beneath the cursor and fruit—preserving clarity while enhancing feedback (Figure 9).

<h4> Learning Curve </h4>
<div align="center">
  <img src="project-report-images/scratchwoodEffect.gif" alt="`cursorWoodScratch` implementation." width="500">
  <br>
  <b>Figure 9. </b><i>cursorWoodScratch implementation.</i>
  <br>
</div>
<br>

Early user feedback highlighted issues with the game's initial difficulty. At that stage, several game core features hadn’t been implemented, and players found the objectives unclear. Many also disliked the reliance on memory - having to recall specific slice patterns made gameplay feel slow and repetitive. To address this, we implemented two key features: 


1. Recipe Book (Figure 10): In Samurai mode, we added an in-game recipe book displaying fruit slice patterns. This allowed players to refer to it during gameplay, removing the need for memorisation and improving flow. 

2. Tutorial Mode: Accessible from the start screen to let users practice core mechanics before playing. It introduces essential elements such as: 

•	Avoiding bombs

•	The dragon fruit’s +1 life bonus (Figure 11)

•	The importance of slicing fruit in the correct recipe order

  <br>
  <div align="center">
    <img src="project-report-images/recipebookImplementation.gif" alt="Interactive recipe book feature" width="500">
    <br>
    <b>Figure 10. </b> <i>Demo of the interactive recipe book feature.</i>
  </div>
  <br>
   <div align="center">
    <img src="project-report-images/dragonfruitImplementation.gif" alt="Dragonfruit feature in tutorial mode" width="500">
    <br>
    <b>Figure 11. </b> <i>Dragonfruit feature in tutorial mode.</i>
  </div>

  <h3> Quantative Evaluation: NASA TLX </h3>
One of our primary goals was to design a game that was accessible to both casual and experienced users. As a result, we analysed the two levels of difficulty within our game. In Ninja Mode, the user still needed to slice the fruit in the correct recipe order, but the slice patterns and the bombs were scrapped. In Samurai Mode, the bombs and the slice patterns were re-introduced. We aimed for a noticeable increase in challenge between modes, as research shows this boosts player enjoyment (Alexander et al., 2013) but without significantly increasing frustration.

  
We collected data using the NASA Task Load Index (TLX) from a group of diverse age ranges, and with differing experience in playing video games. We chose the NASA TLX as it's been shown to be highly reliable for assessing game difficulty (Hart & Staveland, 1988; Ramkumar et al., 2016; Seyderhelm & Blackmore, 2023). We determined that using the raw TLX scores would be easier and faster to administer, and studies reported back mixed results for raw vs. weighted TLX scores (Hart (2006)).


The bar chart shows a notable increase in overall workload from Ninja to Samurai mode: an expected and desirable outcome. These results validated our game objectives - we wanted to create an engaging learning curve to interest first-time players and long-term gamers. 

<p align="center">
  <img src="project-report-images/NASA-TLX-Load-Index-Bar-Chart.png" width="60%"><br>
  <b>Figure 12. </b> <i>NASA TLX Evaluation Bar Chart Feedback.</i><br><br>
</p>


The accompanying pentagraph (Figure 13) reveals more granular differences: 

•	A significant rise in effort and frustration.

•	A moderate increase in mental demand and perceived performance.

•	Minimal change in physical or temporal demand.

While frustration increased, it was largely attributed to earlier usability issues identified through TAE, all of which were later resolved. These findings suggest that the added difficulty in Samurai Mode effectively challenged the player without overwhelming them physically or pacing-wise. 

<p align="center">
  <img src="project-report-images/NASA-TLX-Load-Index-Pentagraph.png" width="60%"><br>
  <b>Figure 13. </b> <i>NASA TLX Pentagraph demonstrating specific demand difference feedback.</i><br><br>
</p>

<h3>Statistical Analysis</h3>

While the data visually and confidently determined that the quantitative tests executed indicated a significant workload increase, we adopted the Wilcoxon Signed Rank Test to test if there was a significant difference between the Ninja and Samurai modes: 
- Wilcoxon result (where n = 10, a = 0.05):
  - A value of 8 or less to quantify a significant difference. 
  - W = 0 (0 < 8).
  - An *extremely* significant difference.
These findings suggest that the added difficulty in Samurai mode effectively challenged the player without overwhelming them physically or pacing-wise. 

## Process
Our team worked together successfully, due to a combination of software development techniques and team-building exercises. Effective communication was a top priority, as it enabled us to allocate tasks and track progress throughout the process.

<h3>Working as a Team</h3>
As part of the Software Engineering module, our first team-building exercise let us share the percentage of our levels of commitment to the project (ours ranged from 85% to 100%). The early weeks of development honestly reflected those levels, but we were missing a key aspect of software engineering, collaboration. Eager to start working on the project, we began implementing our ideas and goals, displaying a lack of clear communication. These independent efforts resulted in an incomplete and difficult-to-understand early prototype of the game because it did not benefit from any collaborative skills. We decided to take time to reflect on our process and think of a better approach.

<h3>Communication</h3>
One Agile principle we aimed to follow was face-to-face communication, often facilitated by our Scrum Master, Ziyan. However, we soon discovered that our team worked more effectively through planned, extended lab sessions rather than the brief daily standups typically recommended in Agile. In response, our Scrum Master helped organise longer coding and brainstorming sessions, coordinating them through WhatsApp, where we collectively set goals in advance. While this informal approach initially worked, it eventually led to communication challenges. One team member raised concerns about unclear task delegation, prompting a group discussion. We agreed that our communication had become too relaxed and lacked structure. 

As a solution, we migrated our discussions to Microsoft Teams, which is linked to our university accounts and better suited for project management. This shift improved our workflow significantly. We began structuring our meetings with clear agendas, summaries of accomplishments, and defined next steps. Additionally, Teams proved more effective for document sharing, tracking progress, and conducting polls. It also supported flexible communication, allowing members who couldn’t attend meetings in person to stay informed and contribute.

<p align="center">
  <img src="project-report-images/old-chat.png" width="20%"><br>
  <b>Figure 14a. </b> <i>An example of our old communication style</i><br><br>
  <img src="project-report-images/new-chat.png" width="50%"><br>
  <b>Figure 14b. </b> <i>An example of our new communication style</i>
</p>

<h3>Development Tools and Techniques</h3>
Since our main goal was to increase team effort, we decided to follow an agile framework which would allow us to prioritise collaboration and enhance our skills. The main agile principle we followed was breaking down our project into small and manageable iterations which would encourage us to continuously deliver working software while working at a steady and sustainable pace. 

To help plan our iterations, we set up a Kanban board on our Github to organise smaller tasks and track their statuses. Before each sprint, we would have an in-person meeting to discuss which of the items on our to-do column had top priority and needed to be achieved in that iteration. Once those tasks were allocated to members of the team, we would then look to see if we could allocate other tasks with less priority. To help us plan the duration of each iteration (or sprint), we would agree on a story point for each task based on its relative size which would help us estimate the effort required. In the end, work on our game was spread across 3 sprint cycles throughout the term, with most of the features being implemented during the first sprint. We used the remaining sprints to carry out refinements and enhancements. This structure allowed us to reflect on our performance and assess our workflow.

<p align="center">
  <img src="project-report-images/sprint-review.png" width="50%"><br>
  <b>Figure 15. </b> <i>Sprint breakdown for the project</i><br><br>
  <img src="project-report-images/kanban-board.png" width="50%"><br>
  <b>Figure 16. </b> <i>Our Kanban board</i>
</p>

The agile iterative framework is designed to embrace change by encouraging flexibility in handling evolving product requirements. This was instrumental when we were asked to add a new difficulty level, as we were able to adapt quickly by updating our Kanban board, assigning tasks, and adjusting our priorities without disrupting the overall development process. As a result, we delivered a well-tested and fully functional Ninja (easy) Mode in a short period. 

## Sustainability
With sustainability becoming an increasingly urgent, global priority, we must find simple, everyday ways to engage people in more environmentally friendly behaviours. Therefore, when designing our game, Smoothie Operator, we wanted to ensure that sustainable thinking was part of the development process. To do this, we first needed to understand the sustainability impact of our game. Our analysis was based on the Sustainability Awareness Framework (SusAF), which is divided into five sectors: individual, technical, social, environmental, and economic (Becker et al., 2015).

<h3>Overview of Sustainability Analysis</h3>


Our game promotes lifelong learning by incorporating cognitive challenges. For instance, Samurai Mode requires players to memorise the fruits’ directional patterns. Research suggests that games involving memory tasks can enhance cognitive abilities such as short-term memory, reaction time, and communication skills (Ning et al., 2020). Based on this, we can infer that Smoothie Operator offers a degree of cognitive stimulation.


NASA TLX results showed that players found Samurai Mode more frustrating than Ninja Mode (Figure 13). While moderate frustration can be empowering and motivating, it may also cause stress and anxiety. In addition, the precise timing and accuracy required to slice the fruits may help improve hand-eye coordination and boost reflexes, improving an individual’s physical health. 


Currently, only a player’s current and highest scores are visible. Although this helps to protect player privacy, it may also reduce the social or competitive element that often makes games more engaging. To address the initial lack of social interaction, we added a two-player mode where players collaborate to achieve higher scores. This fosters teamwork and communication but may also cause tension if one player outperforms the other.


Smoothie Operator features minimal instructions and a single-level design, making it accessible to casual gamers and those with limited time. Therefore, its simple, low-pressure gameplay encourages inclusive social interaction.


The game’s minimalist interface follows Jakob Nielsen’s usability heuristics (1994), and its efficient, object-oriented code optimises performance while reducing energy use and potential e-waste.

Hosted exclusively on GitHub, a platform committed to carbon negativity, 100% renewable energy use, and server circularity (Brescia, 2021), the game runs directly in-browser, requiring no downloads or installations. This reduces hardware demands, and storage needs, and supports broader environmental goals.

As a digital-only product, it avoids emissions from physical production. While all digital games consume energy, we aim to offset our environmental impact by hosting on GitHub.

<h3>Chain of Effects across Time and Dimensions </h3>

<p align="center">
  <img src="project-report-images/Chainofeffects.jpg" width="70%"><br>
  <b>Figure 17. </b> <i>Chain of Effects. Red and green outlined boxes represent potential negative and positive impacts. Boxes with a black, dashed outline represent our design responses to negate the negative impacts. </i>
</p>

<h3>Sustainability-Informed Requirements Analysis</h3>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Initiatives</th>
      <th>Epics</th>
      <th>User Stories</th>
      <th>Acceptance Criteria</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Inclusive Gameplay</td>
      <td>Monitor and Reduce Frustration</td>
      <td>
        1. As a player with bad short-term memory, I want optional hints so that I can complete the challenging slice patterns without feeling stuck.<br><br>
        2. As a first-time user, I want clear instructions along with a tutorial so that I don’t get annoyed trying to understand how the game works.
      </td>
      <td>
        1. <b>Given</b> that a player hovers over the ‘recipe book’, <b>when</b> the ‘recipe page’ (hint) shows, <b>then</b> the game should continue running in the background, and the player should be able to view the current slice pattern without interrupting gameplay.<br><br>
        2. <b>Given</b> that I am a first-time user, <b>when</b> I load the game, <b>then</b> I should be presented with the option to complete a tutorial.
      </td>
    </tr>
    <tr>
      <td>Provide Cooperative Gameplay</td>
      <td>
        1. As a player who loves playing games with my friends, I want co-op mode to include shared rewards so that we feel motivated to work together.<br><br>
        2. As a parent, I want games with non-competitive modes so that my child can build confidence while playing.
      </td>
      <td>
        1. <b>Given</b> that I am playing in two-player mode, <b>when</b> we complete a task together, <b>then</b> we should both receive shared rewards (e.g., in the form of points).<br><br>
        2. <b>Given</b> that my child is playing in two-player mode, <b>when</b> they play with a partner, <b>then</b> the game should emphasize teamwork rather than rewarding individual performance.
      </td>
    </tr>
    <tr>
      <td rowspan="2">Reduce Digital Resource Consumption</td>
      <td>Host on Sustainable Platforms</td>
      <td>
        1. As a player with limited storage, I want to play the game directly in a browser so that I don’t have to download large files.<br><br>
        2. As the owner of the game, I want to host it on a platform that aligns with our environmental values so that we can actively contribute to a lower carbon footprint.
      </td>
      <td>
        1. <b>Given</b> that I have limited storage on my device, <b>when</b> I choose to play the game, <b>then</b> I should be able to access and play the game without needing to install any files. <br><br>
        2. <b>Given</b> that I am selecting a hosting platform for the game, <b>when</b> I review the available options, <b>then</b> I should be able to choose a platform that aligns with my environmental values.
      </td>
    </tr>
    <tr>
      <td>Optimise Game Code for Efficiency and Sustainability</td>
      <td>
        1. As a player with a busy schedule, I want the game to load instantly so that I can enjoy quick gameplay without disrupting my day.<br><br>
        2. As the tech lead, I want to profile the game for bottlenecks so that we can improve performance and reduce e-waste.
      </td>
      <td>
        1. <b>Given</b> that I launch the game from my browser, <b>when</b> I open it, <b>then</b> it should load in under 3 seconds.<br><br>
        2. <b>Given</b> that I know the system's classes and their interactions, <b>when</b> I create a sequence diagram for key processes, <b>then</b> I can identify potential performance bottlenecks in the interaction flow.
      </td>
    </tr>
  </tbody>
</table>

<p align="center">
  <b>Table 5. </b> <i>Chain of Effects formulated into user requirements. </i>
</p>

<div>
  <h3>Green Software Foundation Implementation Patterns</h3>
  <p>1. <strong>Remove all unused CSS definitions</strong>: To decrease file size and enhance efficiency, we removed redundant CSS.</p>
  <p>2. <strong>Optimise image size</strong>: Since there are a lot of photos in our game, we downsized them to save file space without sacrificing quality.</p>
  <p>3. <strong>Defer offscreen images</strong>: To save energy, we only loaded graphics to our game when they were ready to be used.</p>
</div>

## Conclusion
The Agile process allowed us to create a game that was user-focused by developing functional requirements through user stories. This helped us build a design from the start that ensured the game was challenging, usable, and accessible. Our qualitative evaluation helped us consider user feedback and visibility, while the quantitative evaluation highlighted the challenge of Samurai Mode. Through this, we learned how to strike a balance between technical functionality and user experience, especially when designing Samurai (hard) Mode. Using evaluation tools such as the NASA TLX questionnaire, we gained insight into user expectations and adjusted the game’s difficulty accordingly, ensuring it remained challenging yet enjoyable.

However, creating a game that was challenging but not frustrating wasn’t without its difficulties. Since the original inspiration, Fruit Ninja, was designed for touchscreen use, adapting it to mouse or trackpad input proved tricky. We discovered that slicing precision was harder to achieve, especially with trackpads. To address this, we kept refining our HitBoxes to be more lenient, reducing false positives and negatives when slicing fruit.

We also learned how to write more efficient code to improve performance. Originally, we used multiple classes for different screens and buttons, which made the code more complex. By shifting to a CSS-based design across the game, we simplified the structure, improved loading times, and made the code easier to maintain.
As a team, we also benefited greatly from adopting Agile methodologies. Breaking the project into smaller, manageable sprints allowed us to track progress effectively and work at a sustainable pace. After each meeting, tasks were assigned to team members and tracked on our GitHub Kanban board, ensuring everyone stayed up to date. Our Scrum Master also posted follow-up messages summarising meeting objectives and outcomes on Microsoft Teams. This strengthened communication, improved clarity, and reduced miscommunication.
For future refinements, we hope to improve the game’s art design with a consistent yet distinctive visual style. We’d also like to introduce customisation features, such as a coin-earning system that allows players to unlock different slicing effects, enhancing both personalisation and engagement.

We also believe the game would be better suited to mobile devices, where touch controls could offer more natural slicing mechanics. Our next step would be to adapt the game for iOS and Android systems and conduct further evaluation to see if the experience is improved. Over time, we came to see the game not just as functional software, but as a socially relevant system - one that considers its impact, meets diverse user needs, and reflects responsibility in its design.

This group project gave us valuable experience not only in technical development but also in teamwork, communication, organisation, and user-centred design. It encouraged us to think creatively in the design phase and taught us the importance of clear communication throughout. The project also inspired us to consider broader issues like sustainability and user well-being when making smooth design decisions.

Speaking of smooth, we also hope you got the [Smooth Operator](https://youtu.be/4TYv2PhG89A?si=Ua1qUIsa5WO5wfFF) reference!

### Individual Contribution
<table>
 <thead>
  <tr>
   <th>Developer</th>
    <th>Role</th>
   <th>Contribution</th>
    <th>Email</th>
    <th>Github username</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Omnia Ali</td>
    <td>Product Owner</td>
   <td>1.0</td>
    <td>dc24201@bristol.ac.uk</td>
    <td>omnia18o8</td>
  </tr>
  <tr>
   <td>May Daoud</td>
    <td>Tech Lead</td>
   <td>1.0</td>
    <td>zy21368@bristol.ac.uk</td>
    <td>may03d</td>
  </tr>
  <tr>
   <td>Barney Evershed</td>
    <td>Mechanics Programmer</td>
   <td>1.0</td>
    <td>b.evershed.2021@bristol.ac.uk</td>
    <td>bever1tbev</td>
  </tr>
  <tr>
   <td>Scarlett Hurford</td>
    <td>UI Designer</td>
   <td>1.0</td>
    <td>cy21903@bristol.ac.uk</td>
    <td>constscarlett</td>
  </tr>
  <tr>
   <td>Matilda Stokes</td>
    <td>Effects Designer</td>
   <td>1.0</td>
    <td>jl21579@bristol.ac.uk</td>
    <td>jl21579 <b>and</b><br>matildarosevin</td>
  </tr>
  <tr>
   <td>Ziyan Zhao</td>
    <td>Scrum Master</td>
   <td>1.0</td>
    <td>rw24449@bristol.ac.uk</td>
    <td>ziziyan02</td>
  </tr>
 </tbody>
</table>
<p align="center">
 <b>Table 6. </b><i>Team information</i>
</p>

### References

Alexander, J. T., Sear, J., & Oikonomou, A. (2013). An investigation of the effects of game difficulty on player enjoyment. Entertainment Computing, 4(1), 53–62. https://doi.org/10.1016/j.entcom.2012.09.001.

Becker, C. et al. (2015) ‘Sustainability design and software: The Karlskrona Manifesto’, 2015 IEEE/ACM 37th IEEE International Conference on Software Engineering [Preprint]. doi:10.1109/icse.2015.179. 

Brescia, E. (2021) Environmental sustainability at github, The GitHub Blog. Available at: https://github.blog/news-insights/company-news/environmental-sustainability-github/ (Accessed: 21 April 2025). 

Hart, S. G., & Staveland, L. E. (1988). Development of NASA-TLX (Task Load Index): Results of empirical and theoretical research. Advances in Psychology, 139–183. https://doi.org/10.1016/s0166-4115(08)62386-9.

Nielsen, J. (1994) ‘Enhancing the explanatory power of usability heuristics’, Proceedings of the SIGCHI Conference on Human Factors in Computing Systems, pp. 152–158. doi:10.1145/191666.191729. 

Ning, H. et al. (2020) ‘A review on serious games for dementia care in ageing societies’, IEEE Journal of Translational Engineering in Health and Medicine, 8, pp. 1–11. doi:10.1109/jtehm.2020.2998055. 

Ramkumar, A., Stappers, P. J., Niessen, W. J., Adebahr, S., Schimek-Jasch, T., Nestle, U., & Song, Y. (2016). Using GOMS and NASA-TLX to evaluate human–computer interaction process in interactive segmentation. International Journal of Human–Computer Interaction, 33(2), 123–134. https://doi.org/10.1080/10447318.2016.1220729.

Seyderhelm, A. J. A., & Blackmore, K. L. (2023). How hard is it really? assessing game-task difficulty through real-time measures of performance and cognitive load. Simulation & Gaming, 104687812311699. https://doi.org/10.1177/10468781231169910.
