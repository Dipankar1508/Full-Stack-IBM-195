let API_KEY = 'AIzaSyCUv6Anql26te8WZCBCGQY1XUlTbpaICHM';

let lowerBody = document.querySelector(".videos");

async function getData() {
    let search_term = document.getElementById("search-input").value || "India Cricket Team";

    try {
        let response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${encodeURIComponent(search_term)}&type=video&maxResults=20&key=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        document.querySelector(".loader-container").style.display = "none";

        let data = await response.json();
        showData(data.items);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function showData(arr) {
    arr.forEach(({ snippet, id }) => {
        let box = document.createElement("div");
        box.className = "video";

        let img = document.createElement("img");
        img.src = snippet.thumbnails.medium.url;
        img.style.cursor = "pointer";

        let title = document.createElement("h4");
        title.innerText = snippet.title;
        title.style.color = "white";

        let chanel_title = document.createElement("h4");
        chanel_title.innerText = snippet.channelTitle;
        chanel_title.style.color = "white";

        box.append(img, title, chanel_title);
        lowerBody.append(box);

        box.onclick = () => {
            let obj = { snippet, id };
            localStorage.setItem("videoData", JSON.stringify(obj));
            window.location.href = "play.html";
        };
    });
}
setTimeout(() => {
    getData();
}, 1000)




