// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

const API_KEY =  "api_key=a760fa3892f3aaffc15730596b5f628b";
const BASE_URL = "https://api.themoviedb.org/3";
// http://www.omdbapi.com/?i=tt3896198&apikey=9cca7ae7

const API_URL = BASE_URL+"/discover/movie?sort_by=popularity.desc&"+API_KEY;

const IMG_URL = "https://image.tmdb.org/t/p/w500"
const searchURL = BASE_URL +"/search/movie?"+API_KEY;

const main = document.getElementById("movies")
const form = document.getElementById("form")
const search = document.getElementById("search_bar")

let data =JSON.parse(localStorage.getItem("amount"));
console.log(data)
// let data = JSON.parse(localStorage.getItem("amount"));
total = data.reduce(function(sum,elem,index,arr){
    return sum+elem.price;
},0)
var length = data.length;
// console.log(length)
// console.log(total)
let am = document.createElement("h1");
am.innerText=total;
document.querySelector("#navbar").append(am);
// nav.append(h1)

getMovies(API_URL)

let data1;
function getMovies(url){

    // *********** first method ***********
    fetch(url)
    .then(res=> res.json()).then(data1=>{
        console.log(data1)
        showMovies(data1.results)
    })
}

function showMovies(data){
    document.querySelector("#movies").innerHTML=""; 
    console.log(data)
    data.forEach(function(movie){
       
        let box = document.createElement("div")
        box.setAttribute("class","movie")
        
        let poster_path = document.createElement("img")
        poster_path.src = IMG_URL + movie.poster_path;

        let movie_info = document.createElement("div")
        movie_info.setAttribute("class","movie-info")

        let title = document.createElement("h3")
        title.innerHTML = movie.title;

        let IMDb_rating = document.createElement("span")
        IMDb_rating.innerHTML = `IMDB Rating: ${movie.vote_average}`;
        // if(movie.vote_average>8.5){
        //     let IMDb_rating = document.createElement("span")
        //     IMDb_rating.innerHTML = `IMDB Rating: ${movie.vote_average}`;
        // }

        let release_date = document.createElement("p")
        release_date.innerHTML =`Release Date : ${ movie.release_date}`;
       
        // IMDb_rating
        // .style.color = "lightgreen"
           
        // IMDb_rating.setAttribute("class",`${getColor(movie.vote_average)}`)
    
        let ow = document.createElement("div")
        ow.setAttribute("class","overview")

        let overview = document.createElement("h3")
        overview.innerHTML = "Overview";

        let para = document.createElement("p")
        para.innerHTML = movie.overview;

        let btn = document.createElement("button")
        btn.innerHTML = "Book Now";

        btn.addEventListener("click", function(){
            bookNow(movie)
        })

        ow.append(title,IMDb_rating,release_date,overview,para)
        
        box.append(poster_path,movie_info,ow)
        main.append(box,btn)

    }) 

}   

function bookNow(movie){
    window.location.href = "checkout.html"
}



