<script>
    import { onMount } from 'svelte';
    let audioSrc = '';
  
    async function convertTextToSpeech(text) {
        const response = await fetch('/api/speech', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        });
  
        if (response.ok) {
            const blob = await response.blob();
            audioSrc = URL.createObjectURL(blob);
        }
    }
  
    let inputText = 'Today is a wonderful day to build something people love!';
  
    // Convert text on initial load
    onMount(() => {
        convertTextToSpeech(inputText);
    });
  </script>
  

        <textarea bind:value={inputText} rows="6" placeholder="Enter text to convert to speech"
        ></textarea>
  
        <button on:click={() => convertTextToSpeech(inputText)}>
            Convert to Speech
        </button>
  
        {#if audioSrc}
           
                <audio controls src={audioSrc} ></audio>
     
        {/if}

 
  