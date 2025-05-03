class RecipeBook {
  constructor() {
    this.bookButton;
    this.recipepage = loadImage('Design/Images/recipepage.png');
    this.createRecipeBook();
  }

  //Loads relevant graphics and behaviour
  createRecipeBook() {
    this.bookButton = document.createElement('button');
    this.bookButton.classList.add('imageButton');
    const bookImg = document.createElement('img');
    bookImg.src = 'Design/Images/recipe-book.png';
    bookImg.alt = 'recipe book';
    bookImg.style.width = '90px';
    this.bookButton.appendChild(bookImg);
    this.bookButton.addEventListener('mouseover', () => {
      bookImg.src = 'Design/Images/open-recipe-book.png';
      overlay.imageMode(CENTER);
      overlay.image(this.recipepage, width / 2, height / 2, 450, 500);
    });
    this.bookButton.addEventListener('mouseout', () => {
      bookImg.src = 'Design/Images/recipe-book.png';
      overlay.clear();
    });
    bottomCorner.appendChild(this.bookButton);
    this.bookButton.style.display = 'none';
  }

  //displays recipe book in hard mode
  displayBook() {
    this.bookButton.style.display = 'block';
  }

  //hides recipe book in easy mode
  hideBook() {
    this.bookButton.style.display = 'none';
  }
}