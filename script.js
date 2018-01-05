function displayFridge() {
  $(".fridge").css("display", "flex");
  $(".ingr").css("display", "none");
  $(".recipes").css("display", "none");
};

function displayIngr() {
  $(".fridge").css("display", "none");
  $(".ingr").css("display", "flex");
  $(".recipes").css("display", "none");
};

function displayRecipes() {
  $(".fridge").css("display", "none");
  $(".ingr").css("display", "none");
  $(".recipes").css("display", "flex");
};
