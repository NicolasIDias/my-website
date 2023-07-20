import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
/* empty css                */import { N as Navbar, F as Footer } from "../../chunks/Footer.js";
const CardsTechs_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container.s-tpP6DVaDOUJF{display:grid;grid-template-columns:repeat(2, 1fr);gap:16px;margin:0 auto;max-width:960px}",
  map: null
};
const CardsTechs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="container s-tpP6DVaDOUJF"><div class="max-w-xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800"><div class="mt-2"><a href="/" class="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabindex="0" role="link">Front-end</a>
        <p class="mt-2 text-gray-600 dark:text-gray-300">Svelte<br>
            Tailwindcss<br>
            TypeScript<br>
            React
        </p></div></div>

<div class="max-w-xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800"><div class="mt-2"><a href="/" class="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabindex="0" role="link">Back-end</a>
        <p class="mt-2 text-gray-600 dark:text-gray-300">Java<br>
            Spring<br>
            Nodejs<br>
            Express/Fastify<br>
            MongoDB
        </p></div></div>

<div class="max-w-xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800"><div class="mt-2"><a href="/" class="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabindex="0" role="link">DataBases</a>
        <p class="mt-2 text-gray-600 dark:text-gray-300">Java<br>
            MongoDb<br>
            MySql
        </p></div></div>

<div class="max-w-xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800"><div class="mt-2"><a href="/" class="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabindex="0" role="link">Tools</a>
        <p class="mt-2 text-gray-600 dark:text-gray-300">Git<br>
            Docker
        </p></div></div>
</div>`;
});
const CardsCourses = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800"><div class="flex justify-center -mt-16 md:justify-end"><img class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="avatar" src="lsdkfjn.jpg"></div>

  <h2 class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">Courses and MOOCs</h2>

  <p class="mt-2 text-sm text-gray-600 dark:text-gray-200">Week 0 to 10 in CS50&#39;s Introduction to Computer Science<br>CS50&#39;s Web Programming with Python and JavaScript<br>CS50&#39;s Introduction to Artificial Intelligence with Python</p>

  <div class="flex justify-end mt-4"><a href="https://github.com/NicolasIDias" target="_blank" class="text-lg font-medium text-blue-600 dark:text-blue-300" tabindex="0">Nicolas Dias</a></div></div>`;
});
const Body_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container1.s-Bb9MQ8A3-gf6{display:flex;flex-direction:column;justify-content:center;align-items:center}.paragrafo-1.s-Bb9MQ8A3-gf6{font-size:larger}",
  map: null
};
const Body = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container1 s-Bb9MQ8A3-gf6"><br>
  <p class="paragrafo-1 s-Bb9MQ8A3-gf6">Hi, I&#39;m a professional Bug Maker,<br> 
    Low Level enthusiast and a content creator posting sometimes about the projects I&#39;m working</p>
  <br>
    ${validate_component(CardsTechs, "CardsTechs").$$render($$result, {}, {}, {})} 
    ${validate_component(CardsCourses, "CardsCourses").$$render($$result, {}, {}, {})}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

${validate_component(Body, "Body").$$render($$result, {}, {}, {})}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
