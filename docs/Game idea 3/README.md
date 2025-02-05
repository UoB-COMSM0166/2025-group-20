<h1>Smoothie operator</h1>
<h2>Inspiration</h2>

![Image](https://github.com/user-attachments/assets/e55f852b-d12c-4d90-a209-17e4959c81bb)
![Image](https://github.com/user-attachments/assets/ab5f880f-5ccb-4560-a3c8-340989f9356c)
<strong>Fruit Ninja: </strong>In classic mode, you must slice as much fruits as possible as they pop up on the screen. You get 3 lives, and you lose one when you accidentally miss a fruit. You die if you slice the occasional sneaky bomb.<br>
<strong>Overcooked 2: </strong>In this game, you play team up with friends to serve. As many customers in a restaurant as possible. Each level involves different recipes, kitchen set-up and cooking instructions. You need a minimum number of points to level up.<br>
<strong>Fruit Ninja x Overcooked 2: </strong>In our game, you must slice the fruits that show up on the screen according to the smoothie recipes presented to you at the top of the screen. In addition, each fruit will require a specific slicing motion. You lose a live if you use the wrong motion to slice the fruit or if you slice the wrong fruit. Therefore, you must remember where you currently are in the recipe.

<h2>Functional Requirements</h2>
<h3>User Interface</h3>
<ul>
  <li>The player must have access to a main menu where they can:</li>
    <ul>
      <li>Adjust settings (audio, controls, graphics, etc.).</li>
      <li>View tutorials explaining game mechanics.</li>
      <li>Access information about the game, including lore and objectives.</li>
      <li>See their high score</li>
    </ul>
  <li>The player must have an option to start the game from the main menu.</li>
  <li>The player must have an option to quit the game at any point.</li>
  <li>The game must have a pause menu, allowing the player to:</li>
    <ul>
      <li>Resume gameplay.</li>
      <li>Quit and return to the main menu.</li>
    </ul>
  <li>The game must display a score counter and player’s lives.</li>
  <li>The game must display the game’s outcome:</li>
  <ul>
    <li>If the player loses, a Game Over screen is displayed with the score they achieved.</li>
    <li>After losing, the system must return the player to the main menu.</li>
  </ul>
</ul>

<h3>Controls</h3>
<ul>
  <li>The player uses the mouse cursor to cut the fruit/veg.</li>
  <li>Player navigates through menu using mouse.</li>
</ul>

<h3>Core Game Mechanics</h3>
<ul>
  <li>Fruit/veg is thrown up onto screen and then falls according to gravity.</li>
  <li>Player must cut the correct fruit for the recipe displayed on screen.</li>
  <li>For certain fruits they have to slice it in the correct pattern.</li>
  <li>If the player cuts a fruit in the wrong way, cuts the wrong fruit or cuts a bomb they lose a life.</li>
  <li>If they lose all their lives they lose the game and have to restart.</li>
</ul>

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