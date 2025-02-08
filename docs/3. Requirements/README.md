<h2>Onion Model and Stakeholder Analysis</h2>

<p>We first developed an Onion Model to identify key stakeholders to help us understand the different perspectives that influence game design, including players, developers, and testers. We then sought feedback during the prototype demonstrations, asking individuals to evaluate the game both as stakeholders and as players. Their insights provided input on how to refine our functional requirements.</p>

<h3>Onion Model</h3>

![Onion Model](https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/3.%20Requirements/OnionModel.png)


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

<h3>Use Case Diagram</h3>

![Use Case Diagram](https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/3.%20Requirements/UseCaseDiagram.png)



<h2>User Stories</h2>

<p>To further refine the user experience, we translated these functional requirements into user stories to reflect real-life players' motivations. By prioritizing features using the <strong>MoSCoW method</strong>, we ensure that essential gameplay elements are implemented first while leaving room for potential enhancements to the game.</p>

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
