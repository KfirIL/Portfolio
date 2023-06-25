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
    <hr
    class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-bk-light-shades to-transparent opacity-25 dark:opacity-100" />
</div>

{#if !isHidden}
<ul transition:fade class="dark:text-bk-light-shades text-bkl-light-shades border-y-[1px] dark:border-bk-light-accent border-bkl-light-accent flex flex-col absolute right-0 left-0 items-center top-24 dark:bg-bk-dark-shades bg-bkl-dark-shades py-12 gap-6 z-50 uppercase">
    <a href="/pricing" class="cursor-pointer hover:opacity-70 transition-all duration-200">Pricing</a>
    <hr
  class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
    <a href="/contact" class="cursor-pointer hover:opacity-70 transition-all duration-200">Contact</a>
    <Mode />
</ul>
{/if}