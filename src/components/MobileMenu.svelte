<script>
    import Mode from './Mode.svelte';
    import { fade } from 'svelte/transition';
    let isHidden = true;

    function toggleMenu() {
        isHidden = !isHidden;
    }

</script>

<div class="flex sm:hidden flex-1 justify-end">
    <i
      class="fas fa-bars text-2xl dark:text-bk-light-shades text-bkl-light-shades cursor-pointer switch"
      on:click={toggleMenu}
    ></i>
</div>

{#if !isHidden}
<ul transition:fade class="dark:text-bk-light-shades text-bkl-light-shades flex flex-col absolute right-0 left-0 items-center top-20 dark:bg-bk-dark-shades bg-bkl-dark-shades py-12 gap-6 z-50 uppercase">
    <a href="/pricing" class="cursor-pointer hover:opacity-70 transition-all duration-200">Pricing</a>
    <hr class="h-px w-11/12">
    <a href="/contact" class="cursor-pointer hover:opacity-70 transition-all duration-200">Contact</a>
    <hr class="h-px w-11/12">
    <Mode />
</ul>
{/if}