let videoData = JSON.parse(localStorage.getItem("videoData"));
console.log(videoData);

let main = document.getElementById("container");
if (!videoData) {
    console.error("No video data found in localStorage.");
} else {
    showVideo(videoData);
}


async function showVideo(data) {
    main.innerHTML = ''; // Clear previous content
    try {
        let iframe = document.createElement("iframe");

        // Fixing the videoId access
        iframe.src = `https://www.youtube.com/embed/${data.id.videoId}`;
        iframe.height = "500px";
        iframe.width = "60%";
        iframe.setAttribute("allowfullscreen", true);
        iframe.setAttribute("autoplay", true); // Fix autoplay attribute

        let title = document.createElement("p");
        title.style = `
            font-size: 20px;
            font-weight: bold;
            `;
        title.innerText = data.snippet?.title || "No title available";

        let channel_title = document.createElement("p");
        channel_title.style = `
            font-size: 20px;
            `;
        channel_title.innerText = data.snippet?.channelTitle || "No channel name available";

        main.append(iframe, title, channel_title);
    } catch (error) {
        console.error("Error displaying video:", error);
    }
}

showVideo(videoData);
