let latest = document.getElementById("latest")
window.addEventListener("load", async () => {
  //   const url = 'https://newsapi.org/v2/top-headlines/?sources=abc-news&apiKey=a5b40e714b094deeba9c8f676f7f4be6'
  let url = ('https://newsapi.org/v2/top-headlines?sources=ary-news&apiKey=d1d9b2d1eaae46bdb62f580468c3868d')
  latest.innerHTML = `<img src="./images/giphy.gif"alt="Loading........." style="width:500px; margin-left:auto;margin-right:auto">`
  const response = await fetch(url)
  const data = await response.json()
//   console.log("check.....", data)
  news(data)
})
const news = (data) => {
//   console.log("latest news....", data)
  latest.innerHTML = ` <div class="col-lg-4 col-md-6 col-sm-10 mt-3 scrol" style="height:300px ; overflow-y: scroll;">
    <h3 class="title ">
        Latest News
    </h3>
    <div>
        <div class="d-flex">
        <a href="${data.articles[0].url}"><img class="headlineimg img-fluid" style="width:70px;height:60px;border-radius:60px" src="${data.articles[0].urlToImage}" alt=""></a>
        <a class="text-white  " style="text-decoration: none;" href="${data.articles[0].url}"><p  class="headline">${data.articles[0].title.slice(0, 60)}</p></a>
        </div>
        <div class="d-flex mt-2">
        <a href="${data.articles[1].url}"><img class="headlineimg img-fluid" style="width:70px;height:60px;border-radius:60px" src="${data.articles[1].urlToImage}" alt=""></a>
        <a class="text-white " style="text-decoration: none;" href="${data.articles[1].url}"><p class="headline" >${data.articles[1].title.slice(0, 60)}</p></a>
        </div>
        <div class="d-flex mt-2">
        <a href="${data.articles[2].url}"><img class="headlineimg img-fluid" style="width:70px;height:60px;border-radius:60px" src="${data.articles[2].urlToImage}" alt=""></a>
        <a class="text-white " style="text-decoration: none;" href="${data.articles[2].url}"><p class="headline">${data.articles[2].title.slice(0, 60)}</p></a>
        </div>
        <div class="d-flex mt-2">
        <a href="${data.articles[3].url}"><img class="headlineimg img-fluid" style="width:70px;height:60px;border-radius:60px" src="${data.articles[6].urlToImage}" alt=""></a>
        <a class="text-white " style="text-decoration: none;" href="${data.articles[3].url}"><p class="headline">${data.articles[3].title.slice(0, 60)}</p></a>
        </div>
        <div class="d-flex mt-2">
        <a href="${data.articles[4].url}"><img class="headlineimg img-fluid" style="width:70px;height:60px;border-radius:60px" src="${data.articles[7].urlToImage}" alt=""></a>
        <a class="text-white " style="text-decoration: none;" href="${data.articles[4].url}"> <p class="headline" >${data.articles[4].title.slice(0, 60)}</p></a>
        </div>
    </div>
</div>
<div class="col-lg-4 col-md-6 col-sm-10 mt-3 shado  ">
<div class="card bg-dark" >
<img src="${data.articles[1].urlToImage}" class="card-img-top" alt="Image is not found">
<div class="card-body">
  <h5 class="card-title text-white">${data.articles[1].title.slice(0, 30)}</h5>
  <p class="card-text text-white">${data.articles[3].description.slice(0, 100)}</p>
  <a href="${data.articles[1].url}" class="btn btn-primary">Read More</a>
</div>
</div>
    
</div>
<div class="col-lg-4 col-md-6  col-sm-10 mt-3 shado">
<div class="card bg-dark" >
<img src="${data.articles[2].urlToImage}" class="card-img-top" alt="Image is not found">
<div class="card-body">
  <h5 class="card-title text-white">${data.articles[2].title.slice(0, 30)}</h5>
  <p class="card-text text-white">${data.articles[2].description.slice(0, 100)}</p>
  <a href="${data.articles[2].url}" class="btn btn-primary">Read More</a>
</div>
</div>
</div>`

  let youtubeDiv = document.getElementById("youtube")
  youtubeDiv.innerHTML = `
<div class="col col-sm-12 mb-3">
<h1 class="title">YouTube Live</h1>
</div>
<div class="col col-sm-12 text-center">
<iframe width="560" height="315" class="iframefirebase init" src="https://www.youtube.com/embed/zcmr_F4t7Cc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>`
  let slider = document.getElementById("slider")
  slider.innerHTML=` <div class="col col-lg-8 mt-4 col-md-12 col-sm-12 ">
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
          <div class="carousel-item active">
              <img src="./images/imran.jpg" class="d-block w-100 slid" alt="..." height="300"  >
          </div>
          <div class="carousel-item">
              <img src="./images/bjwa.jpg" class="d-block w-100" alt="..." height="300">
          </div>
          <div class="carousel-item">
              <img src="./images/na.jpg" class="d-block w-100" alt="..." height="300">
          </div>
      </div>
      <button class="carousel-control-prev" type="button"
          data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button"
          data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
      </button>
  </div>
</div>
<div class="col col-lg-4 mt-4 col-md-12 col-sm-12 mt-4  " >
  <div class="row">
      <div>
      <h3 class="title">EDITOR'S PICK</h3>
      </div>
      <div class="col col col-lg-5">
      <img src="./images/karchi sna.jpg" alt="" width="150">
      <h6 class="text-white">
      ${data.articles[2].description.slice(0, 30)}
          </h6>
      </div>
      <div class="col col col-lg-5">
          <img src="${data.articles[7].urlToImage}" alt="" width="150" height="73">
          <h6 class="text-white">
          ${data.articles[4].description.slice(0, 30)}
          </h6>
      </div>
  </div>
  <div class="row ">    
      <div class="col col col-lg-5  ">
      <img src="${data.articles[8].urlToImage}" alt="" width="150" height="73">
          <h6 class="text-white">
          ${data.articles[6].description.slice(0, 30)}
          </h6>
      </div>
      <div class="col col col-lg-5   ">
      <img src="${data.articles[9].urlToImage}" alt="" width="150" height="73">
          <h6 class="text-white">
          ${data.articles[9].description.slice(0, 30)}
          </h6>
      </div>
  </div>
</div>`}
window.addEventListener("load", async () => {
    let url = ('https://newsapi.org/v2/everything?business&sources=ary-news&apiKey=6629051b1bce456ebd3fcbac29741b08')
    latestdiv.innerHTML = `<img src="./images/giphy.gif"alt="Loading........." style="width:500px; margin-left:auto;margin-right:auto">`
    const response = await fetch(url)
    const data = await response.json()
    flood(data)
})
const flood = (data) => {
    // console.log("fdgdgdgdfg",data)
let latestdiv = document.getElementById("latestdiv")
latestdiv.innerHTML=`<div class="col  col-sm-2">
<div class="card cardalign bg-dark" style="height:140px;"  >
    <img src="${data.articles[0].urlToImage}" class="card-img-top" alt="...">
    <div >
    <p class="text-white textpara">${data.articles[0].title.slice(0,30)} </p>
    </div>
    </div>
</div>
</div>
<div class="col col-sm-2">
<div class="card cardalign bg-dark" style="height:140px;"  >
    <img src="${data.articles[1].urlToImage}" class="card-img-top" alt="...">
    <div >
    <p class="text-white textpara">${data.articles[1].title.slice(0,30)} </p>
    </div>
    </div>
</div>
</div>
<div class="col col-sm-2">
<div class="card cardalign bg-dark" style="height:140px;"  >
    <img src="${data.articles[2].urlToImage}" class="card-img-top" alt="...">
    <div >
    <p class="text-white textpara">${data.articles[2].title.slice(0,30)} </p>
    </div>
    </div>
</div>
</div>
<div class="col col-sm-2 none">
<div class="card cardalign bg-dark" style="height:140px;"  >
    <img src="${data.articles[3].urlToImage}" class="card-img-top" alt="...">
    <div >
    <p class="text-white textpara">${data.articles[3].title.slice(0,30)} </p>
    </div>
    </div>
</div>
</div>
<div class="col col-sm-2 none">
<div class="card cardalign bg-dark" style="height:140px;"  >
    <img src="${data.articles[4].urlToImage}" class="card-img-top" alt="...">
    <div >
      <p class="text-white textpara">${data.articles[4].title.slice(0,30)} </p>
      </div>
</div>
</div> `
}
window.addEventListener("load", async () => {
    let url = ('https://newsapi.org/v2/everything?sports&sources=bbc-news&apiKey=6629051b1bce456ebd3fcbac29741b08')
    latestdiv.innerHTML = `<img src="./images/giphy.gif"alt="Loading........." style="width:500px; margin-left:auto;margin-right:auto">`
    const response = await fetch(url)
    const data = await response.json()
    newlatest(data)
})
const newlatest = (data) => {
    // console.log("fajja",data)
    let latestdiv_2 = document.getElementById("latestdiv_2")
latestdiv_2.innerHTML=`<div class="col  col-sm-2">
<div class="card cardalign bg-dark" style="height:140px;"  >
    <img src="${data.articles[1].urlToImage}" class="card-img-top" alt="...">
    <div >
    <p class="text-white textpara">${data.articles[1].title.slice(0,20)} </p>
    </div>
    </div>
</div>
</div>
<div class="col col-sm-2">
<div class="card cardalign bg-dark" style="height:140px;"  >
    <img src="${data.articles[2].urlToImage}" class="card-img-top" alt="...">
    <div >
    <p class="text-white textpara">${data.articles[2].title.slice(0,20)} </p>
    </div>
    </div>
</div>
</div>
<div class="col col-sm-2">
<div class="card cardalign bg-dark" style="height:140px;"  >
    <img src="${data.articles[3].urlToImage}" class="card-img-top" alt="...">
    <div >
    <p class="text-white textpara">${data.articles[8].title.slice(0,20)} </p>
    </div>
    </div>
</div>
</div>
<div class="col col-sm-2 none">
<div class="card cardalign bg-dark" style="height:140px;"  >
    <img src="${data.articles[4].urlToImage}" class="card-img-top" alt="...">
    <div >
    <p class="text-white textpara">${data.articles[8].title.slice(0,20)} </p>
    </div>
    </div>
</div>
</div>
<div class="col col-sm-2 none">
<div class="card cardalign bg-dark" style="height:140px;"  >
    <img src="${data.articles[5].urlToImage}" class="card-img-top" alt="...">
    <div >
      <p class="text-white textpara">${data.articles[6].title.slice(0,20)} </p>
    </div>
</div>
</div> 
`
}
const trending = document.getElementById("trending")
trending.addEventListener("click", async () => {
    let url = ('https://newsapi.org/v2/everything?sports&sources=ary-news&apiKey=6629051b1bce456ebd3fcbac29741b08')
    const response = await fetch(url)
    const data = await response.json()
    // console.log("jkhkhk",data)
    window.location= data.articles[1].url})

const business = document.getElementById("business")
business.addEventListener("click", async () => {
    let url = ('https://newsapi.org/v2/everything?business&sources=ary-news&apiKey=6629051b1bce456ebd3fcbac29741b08')
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data.articles[2].url)
    window.location= data.articles[2].url
})
const sports = document.getElementById("sports")
sports.addEventListener("click", async () => {
    let url = ('https://newsapi.org/v2/everything?business&sources=ary-news&apiKey=6629051b1bce456ebd3fcbac29741b08')
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data.articles[3].url)
    window.location= data.articles[3].url
})
const floodpakistan= document.getElementById("floodpakistan")
floodpakistan.addEventListener("click", async () => {
    let url = ('https://newsapi.org/v2/everything?business&sources=ary-news&apiKey=6629051b1bce456ebd3fcbac29741b08')
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data.articles[0].url)
    window.location= data.articles[1].url})

    window.addEventListener("load", async () => {
        let url = ('https://newsapi.org/v2/everything?sports&sources=bbc-news&apiKey=6629051b1bce456ebd3fcbac29741b08')
        const response = await fetch(url)
        const data = await response.json()
        const arr = data.articles
        for(key in arr){
                       for(i=0; i<=5; i++){
                        let multimedia = document.getElementById("multimedia")
                        multimedia.innerHTML+=` 
                        <div class="col-lg-4  col-md-6 mt-4 ">
                    <div class="card bg-dark iframe "  >
                  <img src="${arr[i].urlToImage}" class="card-img-top" alt="Image is not found">
                  <div class="card-body">
                    <h5 class="card-title">${arr[i].title.slice(0,30)}</h5>
                    <p class="card-text text-white">${arr[i].description.slice(0,90)}</p>
                    <a href="${arr[i].url}" class="btn btn-primary">Read more</a>
                  </div>
                </div>
                </div>
                        `
                       }
                    break;}
                }
                    )

