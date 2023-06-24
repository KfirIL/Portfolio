<script>
    import { onMount } from 'svelte';
  
    let isDarkMode = false;
  
    // Check if dark mode is enabled on component mount
    onMount(() => {
      const isDarkModeEnabled = JSON.parse(localStorage.getItem('darkMode'));
      if(isDarkModeEnabled === null) {
        isDarkMode = true;
      }
      else if (isDarkModeEnabled) {
        isDarkMode = true;
      }
      else {
        document.documentElement.classList.remove('dark');
        isDarkMode = false;
      }
    });
  
    function toggleDarkMode() {
      isDarkMode = !isDarkMode;
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
      }
    }
</script>
  

<li>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <i class="fa-solid fa-moon text-2xl cursor-pointer" on:click={toggleDarkMode}></i>
</li>