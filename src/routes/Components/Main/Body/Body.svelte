<script>
  import CardsTechs from "./CardsTechs.svelte";
  import CardsCourses from "./CardsCourses.svelte";
</script>

<style>

.container1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

  .paragrafo-1 {
    font-size: larger;
  }
</style>

<div class="container1">  
  <br>
  <p class="paragrafo-1">Hi, I'm a professional Bug Maker,<br> 
    Low Level enthusiast and a content creator posting sometimes about the projects I'm working</p>
  <br>
    <CardsTechs /> 
    <CardsCourses />
</div>