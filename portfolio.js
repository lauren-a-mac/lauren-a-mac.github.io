function hover(img, srcIn, srcOut){
  img.mouseenter(function(){
  img.attr("src", srcIn);              
});
  img.mouseleave(function(){
  img.attr("src", srcOut);              
});
}

let calcImg = $("#calc-img");
let scoreImg = $("#score-img");
let cameraImg = $("#camera-img");
let palinImg = $("#palin-img");
let landingImg = $("#landing-img");
let surveyImg = $("#survey-img");
let blogImg = $("#blog-img");
let copernicusImg = $("#copernicus-img");

hover(calcImg, "https://user-images.githubusercontent.com/69159757/91315507-ab73af80-e7af-11ea-833b-7b4fbd0d4927.jpg",  "https://user-images.githubusercontent.com/69159757/91315506-ab73af80-e7af-11ea-8615-ff16b7d176fb.jpg");

hover(scoreImg, "https://user-images.githubusercontent.com/69159757/91315523-ad3d7300-e7af-11ea-84c0-66b13d5be63d.jpg", "https://user-images.githubusercontent.com/69159757/91315521-ad3d7300-e7af-11ea-904b-7ecc5df742a0.jpg");

hover(cameraImg, "https://user-images.githubusercontent.com/69159757/91315528-ae6ea000-e7af-11ea-9ce9-c07cf8b55c81.jpg", "https://user-images.githubusercontent.com/69159757/91315526-add60980-e7af-11ea-9bb0-b7a506cc8c8e.jpg");

hover(palinImg, "https://user-images.githubusercontent.com/69159757/91315519-aca4dc80-e7af-11ea-8b09-955728a129b9.jpg", "https://user-images.githubusercontent.com/69159757/91315516-aca4dc80-e7af-11ea-9303-6c46ca18df55.jpg");

hover(landingImg, "https://user-images.githubusercontent.com/69159757/91315515-aca4dc80-e7af-11ea-8dd0-e31ca1db1dec.jpg", "https://user-images.githubusercontent.com/69159757/91315513-ac0c4600-e7af-11ea-9dd6-0b53f7253cb7.jpg");

hover(surveyImg, "https://user-images.githubusercontent.com/69159757/91315525-add60980-e7af-11ea-874e-46ab088409d0.jpg", "https://user-images.githubusercontent.com/69159757/91315524-add60980-e7af-11ea-9770-d235616bce40.jpg");

hover(blogImg, "https://user-images.githubusercontent.com/69159757/91315505-aadb1900-e7af-11ea-82e1-5cecd3b24247.jpg", "https://user-images.githubusercontent.com/69159757/91315504-aa428280-e7af-11ea-9357-02ff1ca8703d.jpg");

hover(copernicusImg, "https://user-images.githubusercontent.com/69159757/91315511-ac0c4600-e7af-11ea-80c0-3b7192f2efae.jpg", "https://user-images.githubusercontent.com/69159757/91315509-ab73af80-e7af-11ea-84c3-7d3c1f36a9bf.jpg");
