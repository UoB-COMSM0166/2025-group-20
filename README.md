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

## Introduction

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

## Requirements (Ziyan)
.
- 15% ~750 words
- Use case diagrams, user stories. Early stages design. Ideation process. How did you decide as a team what to develop? 

We've actually already written all of this! Will find a way of structuring it more succinctly at some point in this section :)
### Design (Barney)

- 15% ~750 words 
- System architecture. Class diagrams, behavioural diagrams.

Our design elements had a focus on maintability and Object-Oriented Principles, in order to create a robust foundation for the game. 

- System Architecture
- This section should include our User Interface (How the user interacts with the game both visually and gesturally - ie. the mouse or trackpad sliding to simulate the slicing of the fruit), the Game Logic (the fruit generation, the mechanics behind the slicing patterns, the scoring, and the registering of incorrect slicing adnd slicing bombs) and the Data Management (Persistently tracking game state and player statistics) - let me know if I've missed anything!
- This displays a modular approach to seperating the code, which instigates efficient testing and feature addition.

- Object-Oriented Design 
- Object-Oriented Design should display clarity and flexibility: Encapsulation, Abstraction, Inheritance, Polymorphism, Composition)

- Class Diagrams
- Explanation of our different classes, their different roles and relationships in accordance with the game and Object-Oriented Principles
- So far looking at the code we have the: Fruit Class, Life Icons Class, Point System Class, Slice Pattern Class, Smoothie Recipe Class
- These classes establish the relationships and associations clearly so the interactions within code are cohesive and gameplay retains data integrity

- Behavioural Diagrams
- We need to include sequence diagrams here like in the pac-man slides (demonstrate the dynamics of the gameplay) I don't want to use this but I've made a simplified one below to show you what it could look like
Player → Cursor: slice action cursorEffect()
Cursor → Fruit: isSliced() (in SlicePattern class)
Fruit → Fruit: isHit() (in HitBox class)
Fruit → Game: correctCut || recipeComplete() (in PointSystem class)
Game → Game (only if the highest score is reached): updateHighestScore(gameScore) (in HighestPointDisplay class)
Game → UI: gameScreen() (should update the display as necessary)


- Design Decisions and Subsquent Justification
- In designing our game we decided to use p5.js - it is easy to learn and easy to use, with good HTML/CSS/JAVASCRIPT integration as well was being really adaptable and easy to use in any modern browser. 

## Implementation (Omnia)

- 15% ~750 words

- Describe implementation of your game, in particular highlighting the three areas of challenge in developing your game. 

## Evaluation (Matilda)

## Abstract

This section presents the HCI evaluations of Smoothie Operator, with a particular focus on assessing balanced usability, cognitive load, and player engagement. To assess the game's key issues early in the design process, we employed a mixed-methods approach - combining qualitative feedback from Think Aloud evaluations with quantitative data collected using the NASA Task Load Index (TLX). Evaluations were conducted with a range of participants to encapsulate a comprehensive picture of potential user behaviours and perceptions. The primary objectives were to identify the usability key issues and measure player workload and demand across gameplay tasks to inform iterative design improvements. Results from the evaluations provided clear and direct feedback on the game's task flow and cognitive demands, leading to straightforward problem-solving to gameplay.

## Qualitative: Think Aloud

To evaluate the usability and HCI design of Smoothie Operator, we employed the Think Aloud (TA) protocol—an established method that provides real-time insights into user behaviour and experience (Nielsen, 1993). This approach was selected over Heuristic Evaluation for several reasons: the dynamic nature of the gameplay—requiring rapid mouse-based gestures and immediate feedback—demanded direct observation of users in context. Heuristic methods are less effective in capturing real-time breakdowns in game interaction, particularly when evaluating unconventional input modalities. TA enables the collection of instantaneous verbal data from participants as they engage with the game. This revealed four prominent areas for improvement: confusion around input mapping, varied responses to the visual feedback system, the learning curve associated with recipe memorisation, and the overall emotional experience. The richness of these observations, particularly in relation to control fluency and gameplay clarity, significantly informed subsequent design iterations. Participant commentary was analysed using thematic coding and categorised to identify patterns of friction, satisfaction, and emergent player strategies (see Table X). 

Table X: Raw Think Aloud (TA) feedback
| Theme | Positive | Negative | Suggested modifications |
| --- | --- | --- | --- |
| Controls | <ul><li>The click control is very satisfying</li><li>The cursorEffect provides good user feedback</li></ul> | <ul><li>Touchpad is inelegant</li><li>Mousepressed functions bug after hearts lost</li><li>The mousepressed for slicing could be redundant</li></ul> |  |
| Display | <ul><li>Good fruit sizes</li><li>Fruit slice visuals are very rewarding</li></ul> | <ul><li>Recipe aspect and order is unclear</li><li>cursorEffect does not remain long enough</li><li>Some fruits are generated stuck together</li></ul> | |
| Learning Curve |  | <ul><li>Initial difficulty remembering rules</li><li>Initial difficulty remembering slice patterns</li><li>Once slice patterns are internalised, they're too easy to remember</li></ul> | |
| Affective response |  | <ul><li>No time constraints cause monotony</li></ul> | |

### Controls 

### Display

### Learning Curve

### Affective Response 

## Quantitative: NASA TLX

- 15% ~750 words

- One quantitative evaluation (of your choice) 

- Description of how code was tested. 

## Process (May)

- 15% ~750 words

- Teamwork. How did you work together, what tools did you use. Did you have team roles? Reflection on how you worked together.

  ## Sustainability (Scarlett)

## Conclusion

- 10% ~500 words

- Reflect on project as a whole. Lessons learned. Reflect on challenges. Future work. 

### Contribution Statement

- Provide a table of everyone's contribution, which may be used to weight individual grades. We expect that the contribution will be split evenly across team-members in most cases. Let us know as soon as possible if there are any issues with teamwork as soon as they are apparent. 

### Additional Marks

You can delete this section in your own repo, it's just here for information. in addition to the marks above, we will be marking you on the following two points:

- **Quality** of report writing, presentation, use of figures and visual material (5%) 
  - Please write in a clear concise manner suitable for an interested layperson. Write as if this repo was publicly available.

- **Documentation** of code (5%)

  - Is your repo clearly organised? 
  - Is code well commented throughout?
