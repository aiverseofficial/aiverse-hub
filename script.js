const tools = [
{
name:"ChatGPT",
category:"Chatbot",
description:"AI assistant for writing, coding and research.",
link:"https://chatgpt.com"
},

{
name:"Claude",
category:"Chatbot",
description:"Powerful AI assistant by Anthropic.",
link:"https://claude.ai"
},

{
name:"Gemini",
category:"Chatbot",
description:"Google AI assistant for productivity.",
link:"https://gemini.google.com"
},

{
name:"Perplexity",
category:"Search",
description:"AI powered search engine.",
link:"https://perplexity.ai"
},

{
name:"Midjourney",
category:"Image",
description:"Generate amazing AI images.",
link:"https://midjourney.com"
},

{
name:"Leonardo AI",
category:"Image",
description:"Create high quality AI artwork.",
link:"https://leonardo.ai"
},

{
name:"Ideogram",
category:"Image",
description:"AI image generation with text support.",
link:"https://ideogram.ai"
},

{
name:"Runway",
category:"Video",
description:"AI video generation platform.",
link:"https://runwayml.com"
},

{
name:"Pika",
category:"Video",
description:"Generate videos using AI.",
link:"https://pika.art"
},

{
name:"ElevenLabs",
category:"Audio",
description:"AI voice generation and cloning.",
link:"https://elevenlabs.io"
},

{
name:"Suno",
category:"Music",
description:"Create songs with AI.",
link:"https://suno.com"
},

{
name:"GitHub Copilot",
category:"Coding",
description:"AI coding assistant.",
link:"https://github.com/features/copilot"
},

{
name:"Cursor",
category:"Coding",
description:"AI powered code editor.",
link:"https://cursor.com"
},

{
name:"Notion AI",
category:"Productivity",
description:"AI powered notes and workspace.",
link:"https://notion.so"
},

{
name:"Canva AI",
category:"Design",
description:"Design presentations and graphics.",
link:"https://canva.com"
}
];

const toolsGrid = document.getElementById("toolsGrid");

function displayTools(list){

toolsGrid.innerHTML = "";

list.forEach(tool => {

toolsGrid.innerHTML += `
<div class="tool-card">

<h3>${tool.name}</h3>

<p>
${tool.description}
</p>

<p>
<b>Category:</b> ${tool.category}
</p>

<a href="${tool.link}" target="_blank">
Visit Tool
</a>

</div>
`;

});

}

displayTools(tools);

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

const value =
searchInput.value.toLowerCase();

const filtered =
tools.filter(tool =>
tool.name.toLowerCase().includes(value)
);

displayTools(filtered);

});