import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { N as Navbar, F as Footer } from "../../../chunks/Footer.js";
const Body = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex items-center justify-center flex-col"><p class="text-lg w-1/2"><br>
    Hello, my name is Unicode (Nicolas), I&#39;m 16 years old and I work with web development (for now).<br>

    I like programming in Java/Kotlin (this website is made in Svelte) but I&#39;ve also used TypeScript/Python/PHP/C++ and several other languages.<br><br>

    Since 2020, when I got my computer, I&#39;ve been interested in programming, and that&#39;s how I started learning programming logic in JavaScript. Shortly after, I switched to Java, which I thought would be interesting (and it was), but I found Kotlin to be better. Fun fact: From 2020 to 2023, I was able to &quot;study&quot; the main languages such as C++, C#, Rust, etc., but I didn&#39;t delve deeply into any of them. To this day, I&#39;m not exactly sure which area I want to work in, I always want to know everything and end up not knowing anything. I love to develop my random and elaborate ideas, and sometimes they work out!<br><br>
  
    When I started studying programming, TRYING to focus on just one tech or area, I took some courses (both free and paid), and I highly recommend the ones on edx.org which are free and made by people from HARVARD. There are also many great tutorials on YouTube, which is a true tool of knowledge.<br><br>

    I plan on improving this website, posting my projects here in some way, and even considering creating a blog. If you&#39;re interested, feel free to check out my <b><a href="https://github.com/NicolasIDias">Github</a></b> where I post some of the things I develop, from the simplest to the most complex.<br><br>

    I&#39;ve had a YouTube channel since 2016, back when I wanted to be famous and make videos to become a millionaire. On this channel, I used to post gameplay videos, but now I focus on programming and some of the projects I&#39;m working on. I post videos occasionally, sometimes a tutorial, I don&#39;t know, I record when I feel like it :)
  </p></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

${validate_component(Body, "Body").$$render($$result, {}, {}, {})}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
