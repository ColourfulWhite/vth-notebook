import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as i,c,a as n,b as t,e,d as s}from"./app.6bca9c30.js";const l={},u=e(`<h1 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h1><p>VuePress \u4F7F\u7528\u9879\u76EE\u6587\u4EF6\u5939\u4E0B\u7684 <code>.vuepress</code> \u6587\u4EF6\u5939\u5B58\u653E\u914D\u7F6E\uFF0C\u6240\u6709 VuePress \u76F8\u5173\u7684\u6587\u4EF6\u90FD\u5C06\u4F1A\u88AB\u653E\u5728\u8FD9\u91CC\u3002 \u5176\u4E2D <code>.vuepress/config.ts</code>\uFF08\u6216 <code>.vuepress/config.js</code>\uFF09\u662F\u5FC5\u8981\u7684\u914D\u7F6E\u6587\u4EF6\u3002</p><p>\u4F7F\u7528\u6A21\u677F\u521D\u59CB\u5316\u6210\u529F\u540E\uFF0C<code>.vuepress/</code> \u6587\u4EF6\u5939\u4E0B\u7684\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u251C\u2500\u2500 config.ts \u2192 \u914D\u7F6E\u6587\u4EF6\u7684\u5165\u53E3\u6587\u4EF6\uFF0C\u5176\u4E2D\u5BFC\u5165\u4E86 navbar.ts, sidebar.ts, theme.ts \u914D\u7F6E\u6587\u4EF6
\u251C\u2500\u2500 navbar.ts \u2192 \u5BFC\u822A\u680F\u914D\u7F6E\u6587\u4EF6
\u251C\u2500\u2500 public \u2192 \u9759\u6001\u8D44\u6E90\u76EE\u5F55
\u2502   \u251C\u2500\u2500 favicon.ico
\u2502   \u251C\u2500\u2500 logo.png
\u2502   \u2514\u2500\u2500 logo.svg
\u251C\u2500\u2500 sidebar.ts \u2192 \u4FA7\u8FB9\u680F\u914D\u7F6E\u6587\u4EF6
\u251C\u2500\u2500 styles \u2192 \u81EA\u5B9A\u4E49\u6837\u5F0F\u6587\u4EF6
\u2502   \u251C\u2500\u2500 index.scss
\u2502   \u2514\u2500\u2500 palette.scss
\u2514\u2500\u2500 theme.ts \u2192 \u4E3B\u9898\u914D\u7F6E\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E\u7684\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u7684\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u914D\u7F6E\u7684\u4F5C\u7528\u57DF</h2><h3 id="\u7AD9\u70B9\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u7AD9\u70B9\u914D\u7F6E" aria-hidden="true">#</a> \u7AD9\u70B9\u914D\u7F6E</h3><p>\u7AD9\u70B9\u914D\u7F6E\u4E2D\u7684\u914D\u7F6E\u9879\u76F4\u63A5\u88AB VuePress \u76F4\u63A5\u8BFB\u53D6\uFF0C\u548C\u4E3B\u9898\u65E0\u5173\u4E14\u5728\u6240\u6709\u4E3B\u9898\u5747\u53EF\u751F\u6548\u3002</p>`,7),r=s("\u4F60\u53EF\u4EE5\u524D\u5F80 "),d={href:"https://v2.vuepress.vuejs.org/zh/reference/config.html",target:"_blank",rel:"noopener noreferrer"},k=s("VuePress2 \u2192 \u53C2\u8003 \u2192 \u914D\u7F6E"),v=s(" \u67E5\u770B\u6240\u6709 VuePress \u914D\u7F6E\u3002"),m=n("p",null,[s("\u7AD9\u70B9\u914D\u7F6E\u4E00\u822C\u5199\u5728 "),n("code",null,"config.ts"),s(" \u4E2D\u3002")],-1),b=n("h3",{id:"\u4E3B\u9898\u914D\u7F6E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E3B\u9898\u914D\u7F6E","aria-hidden":"true"},"#"),s(" \u4E3B\u9898\u914D\u7F6E")],-1),q=n("p",null,[s("\u4E3B\u9898\u914D\u7F6E\u662F\u4F20\u9012\u7ED9 "),n("code",null,"hopeTheme"),s(" \u51FD\u6570\u7684\u5BF9\u8C61\uFF0C\u5B83\u5C06\u7531 VuePress Theme Hope \u5904\u7406\u3002")],-1),g=s("\u5728 VuePress Theme Hope \u5B98\u7F51\u7684 "),h={href:"https://vuepress-theme-hope.github.io/v2/zh/config/",target:"_blank",rel:"noopener noreferrer"},y=s("\u914D\u7F6E \u2192 \u4E3B\u9898\u914D\u7F6E"),f=s(" \u4E2D\u627E\u5230\u5168\u90E8\u7684\u4E3B\u9898\u8BBE\u7F6E\u3002"),x=e('<h4 id="\u63D2\u4EF6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u914D\u7F6E" aria-hidden="true">#</a> \u63D2\u4EF6\u914D\u7F6E</h4><p>VuePress Theme Hope \u4E3B\u9898\u6346\u7ED1\u4E86\u4E00\u4E9B\u63D2\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u5728\u4E3B\u9898\u9009\u9879\u4E2D\u901A\u8FC7 <code>plugins.\u63D2\u4EF6\u540D\u79F0</code> \u6765\u4F20\u9012\u63D2\u4EF6\u9009\u9879\uFF0C\u8BE6\u89C1 VuePress Theme Hope \u5B98\u7F51\u7684 <a href="">\u914D\u7F6E \u2192 \u4E3B\u9898\u63D2\u4EF6\u914D\u7F6E</a>\u3002</p><p>\u5982\u679C\u4F60\u60F3\u8981\u989D\u5916\u4F7F\u7528\u63D2\u4EF6\uFF0C\u8BF7\u81EA\u884C\u8C03\u7528\u63D2\u4EF6\u5E76\u4F20\u9012\u63D2\u4EF6\u9009\u9879\uFF0C\u8BE6\u89C1 <a href="">VuePress \u2192 \u63D2\u4EF6</a>\u3002</p><h4 id="\u5BFC\u822A\u680F\u548C\u4FA7\u8FB9\u680F\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u822A\u680F\u548C\u4FA7\u8FB9\u680F\u914D\u7F6E" aria-hidden="true">#</a> \u5BFC\u822A\u680F\u548C\u4FA7\u8FB9\u680F\u914D\u7F6E</h4><p>\u4F7F\u7528\u6A21\u677F\u521B\u5EFA\u7684 VuePress Theme Hope \u628A\u5BFC\u822A\u680F\u914D\u7F6E\u653E\u5728 <code>navbar.ts</code> \u6587\u4EF6\uFF0C\u628A\u4FA7\u8FB9\u680F\u914D\u7F6E\u653E\u5728 <code>sidebar.ts</code> \u6587\u4EF6\uFF0C\u5E76\u5728 <code>config.ts</code> \u6587\u4EF6\u4E2D\u5BFC\u5165\u8FD9\u4E24\u4E2A\u6587\u4EF6\u3002</p><h3 id="\u6837\u5F0F\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6837\u5F0F\u914D\u7F6E" aria-hidden="true">#</a> \u6837\u5F0F\u914D\u7F6E</h3><p>VuePress Theme Hope \u4F7F\u7528 <code>.vuepress/styles</code> \u6587\u4EF6\u5939\u5B58\u653E\u6837\u5F0F\u914D\u7F6E\u3002</p><p>\u5728\u6B64\u6587\u4EF6\u5939\u4E2D\uFF1A</p><ul><li>\u521B\u5EFA <code>index.scss</code> \u6765\u6CE8\u5165\u989D\u5916\u7684 CSS \u6837\u5F0F</li><li>\u521B\u5EFA <code>config.scss</code> \u6765\u8FDB\u884C\u6837\u5F0F\u914D\u7F6E</li><li>\u521B\u5EFA <code>palette.scss</code> \u6765\u914D\u7F6E\u989C\u8272\u548C\u5E03\u5C40</li></ul>',9),_=s("\u8BE6\u60C5\u67E5\u770B VuePress Theme Hope \u7684\u5B98\u7F51\u7684 "),w={href:"https://vuepress-theme-hope.github.io/v2/zh/config/style.html",target:"_blank",rel:"noopener noreferrer"},V=s("\u914D\u7F6E \u2192 \u6837\u5F0F\u914D\u7F6E"),P=s("\u3002"),T=n("h3",{id:"\u9875\u9762\u914D\u7F6E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9875\u9762\u914D\u7F6E","aria-hidden":"true"},"#"),s(" \u9875\u9762\u914D\u7F6E")],-1),z=n("p",null,"\u9664\u4E86\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u914D\u7F6E\uFF0C\u9875\u9762\u76F8\u5173\u7684\u914D\u7F6E\u8FD8\u652F\u6301\u901A\u8FC7 Markdown \u6587\u4EF6\u4E2D\u7684 YAML Frontmatter \u8FDB\u884C\u7279\u5B9A\u9875\u9762\u914D\u7F6E\u3002",-1),C={class:"custom-container info"},M=n("p",{class:"custom-container-title"},"\u76F8\u5173\u4FE1\u606F",-1),A=n("p",null,"Frontmatter \u662F VuePress \u4E2D\u5F88\u91CD\u8981\u7684\u4E00\u4E2A\u6982\u5FF5\uFF0C\u5B83\u7528\u4E8E\u627F\u8F7D Markdown \u6587\u4EF6\u7684\u914D\u7F6E\u3002Markdown \u6587\u4EF6\u53EF\u4EE5\u5305\u542B\u4E00\u4E2A YAML Frontmatter\u3002",-1),N=s("YAML \u8BED\u6CD5\uFF1A"),F={href:"https://mrhope.site/code/language/yaml/",target:"_blank",rel:"noopener noreferrer"},H=s("https://mrhope.site/code/language/yaml/"),L=e(`<p>Frontmatter \u5FC5\u987B\u5728 Markdown \u6587\u4EF6\u7684\u9876\u90E8\uFF0C\u5E76\u4E14\u88AB\u5305\u88F9\u5728\u4E00\u5BF9\u4E09\u77ED\u5212\u7EBF\u4E2D\u95F4\u3002</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">lang</span><span class="token punctuation">:</span> zh<span class="token punctuation">-</span>CN
<span class="token key atrule">title</span><span class="token punctuation">:</span> \u9875\u9762\u7684\u6807\u9898
<span class="token key atrule">description</span><span class="token punctuation">:</span> \u9875\u9762\u7684\u63CF\u8FF0</span>
<span class="token punctuation">---</span></span>

<span class="token comment">&lt;!-- \u8FD9\u91CC\u662F Markdown \u5185\u5BB9 --&gt;</span>

...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Frontmatter \u914D\u7F6E\u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E\u914D\u7F6E\u6587\u4EF6\u7684\u914D\u7F6E\u4E14\u4EC5\u5BF9\u5F53\u524D\u9875\u9762\u6709\u6548\uFF0C\u53EF\u4EE5\u901A\u8FC7 Frontmatter \u914D\u7F6E\u8986\u76D6\u6389\u914D\u7F6E\u6587\u4EF6\u7684\u914D\u7F6E\uFF0C\u5B9E\u73B0\u9875\u9762\u7684\u5B9A\u5236\u5316\u3002</p>`,3),S=e(`<h2 id="\u914D\u7F6E\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u53C2\u8003" aria-hidden="true">#</a> \u914D\u7F6E\u53C2\u8003</h2><h3 id="config-ts" tabindex="-1"><a class="header-anchor" href="#config-ts" aria-hidden="true">#</a> config.ts</h3><details class="custom-container details"><summary>\u8BE6\u60C5</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> theme <span class="token keyword">from</span> <span class="token string">&quot;./theme&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  lang<span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
  title<span class="token operator">:</span> <span class="token string">&quot;Notebook&quot;</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">&quot;Ackerven&#39;s knowledge planet.&quot;</span><span class="token punctuation">,</span>

  base<span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
  shouldPrefetch<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  theme<span class="token punctuation">,</span> <span class="token comment">// import theme config</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="theme-ts" tabindex="-1"><a class="header-anchor" href="#theme-ts" aria-hidden="true">#</a> theme.ts</h3><details class="custom-container details"><summary>\u8BE6\u60C5</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> hopeTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> navbar <span class="token keyword">from</span> <span class="token string">&quot;./navbar&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> sidebar <span class="token keyword">from</span> <span class="token string">&quot;./sidebar&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">hopeTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// base</span>
  hostname<span class="token operator">:</span> <span class="token string">&quot;https://floli.cc&quot;</span><span class="token punctuation">,</span>
  author<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&quot;Ackerven&quot;</span><span class="token punctuation">,</span>
    url<span class="token operator">:</span> <span class="token string">&quot;https://ackerven.com&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// view</span>
  darkmode<span class="token operator">:</span> <span class="token string">&quot;switch&quot;</span><span class="token punctuation">,</span>
  themeColor<span class="token operator">:</span> <span class="token punctuation">{</span>
    blue<span class="token operator">:</span> <span class="token string">&quot;#2196f3&quot;</span><span class="token punctuation">,</span>
    red<span class="token operator">:</span> <span class="token string">&quot;#f26d6d&quot;</span><span class="token punctuation">,</span>
    green<span class="token operator">:</span> <span class="token string">&quot;#3eaf7c&quot;</span><span class="token punctuation">,</span>
    orange<span class="token operator">:</span> <span class="token string">&quot;#fb9b5f&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  iconAssets<span class="token operator">:</span> <span class="token string">&quot;iconfont&quot;</span><span class="token punctuation">,</span>
  fullscreen<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  backToTop<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  pure<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

  <span class="token comment">// layout</span>
  <span class="token comment">// layout -&gt; navbar</span>
  navbar<span class="token operator">:</span> navbar<span class="token punctuation">,</span>
  logo<span class="token operator">:</span> <span class="token string">&quot;/logo.svg&quot;</span><span class="token punctuation">,</span>
  repo<span class="token operator">:</span> <span class="token string">&quot;ackerven/vth-notebook&quot;</span><span class="token punctuation">,</span>
  repoLabel<span class="token operator">:</span> <span class="token string">&quot;Github&quot;</span><span class="token punctuation">,</span>
  repoDisplay<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// layout -&gt; sidebar</span>
  headerDepth<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  sidebarIcon<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  sidebar<span class="token operator">:</span> sidebar<span class="token punctuation">,</span>

  <span class="token comment">// layout -&gt; other</span>
  breadcrumb<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  breadcrumbIcon<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  footer<span class="token operator">:</span> <span class="token string">&quot;Try again!&quot;</span><span class="token punctuation">,</span>
  displayFooter<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  toc<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// function</span>
  encrypt<span class="token operator">:</span> <span class="token punctuation">{</span>
    global<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    admin<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;123456&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  pageInfo<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Author&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Date&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Category&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tag&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ReadingTime&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Word&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// docsRepo: &quot;vue-notebook&quot;</span>
  docsBranch<span class="token operator">:</span> <span class="token string">&quot;master&quot;</span><span class="token punctuation">,</span>
  docsDir<span class="token operator">:</span> <span class="token string">&quot;docs&quot;</span><span class="token punctuation">,</span>
  lastUpdated<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  contributors<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  editLink<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// plugins</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">{</span>
    blog<span class="token operator">:</span> <span class="token punctuation">{</span>
      autoExcerpt<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    mdEnhance<span class="token operator">:</span> <span class="token punctuation">{</span>
      tex<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      sub<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      sup<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      codetabs<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      tasklist<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      mark<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      footnote<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      container<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

      imageMark<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      imageSize<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      include<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      attrs<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      align<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      gfm<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      linkCheck<span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// in function</span>
    copyCode<span class="token operator">:</span> <span class="token punctuation">{</span>
      showInMobile<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      duration<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    photoSwipe<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    copyright<span class="token operator">:</span> <span class="token punctuation">{</span>
      global<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      triggerWords<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
      disableCopy<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      disableSelection<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      author<span class="token operator">:</span> <span class="token string">&quot;Ackerven&quot;</span><span class="token punctuation">,</span>
      license<span class="token operator">:</span> <span class="token string">&quot;None&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// in advanced</span>
    feed<span class="token operator">:</span> <span class="token punctuation">{</span>
      atom<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      json<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      rss<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    pwa<span class="token operator">:</span> <span class="token punctuation">{</span>
      cachePic<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      cacheHTML<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      maxSize<span class="token operator">:</span> <span class="token number">2048</span><span class="token punctuation">,</span>
      maxPicSize<span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>
      update<span class="token operator">:</span> <span class="token string">&quot;available&quot;</span><span class="token punctuation">,</span>
      manifest<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ackerven&#39;s Notebook&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;short_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Notebook&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ackerven&#39;s knowledge planet.&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;icons&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/icons/icon-72x72.png&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;sizes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;72x72&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/icons/icon-96x96.png&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;sizes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;96x96&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/icons/icon-128x128.png&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;sizes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;128x128&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/icons/icon-144x144.png&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;sizes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;144x144&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/icons/icon-152x152.png&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;sizes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;152x152&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/icons/icon-192x192.png&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;sizes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;192x192&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/icons/icon-384x384.png&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;sizes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;384x384&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/images/icons/icon-512x512.png&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;sizes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;512x512&quot;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;image/png&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    sitemap<span class="token operator">:</span> <span class="token punctuation">{</span>
      sitemapFilename<span class="token operator">:</span> <span class="token string">&quot;sitemap.xml&quot;</span><span class="token punctuation">,</span>
      changefreq<span class="token operator">:</span> <span class="token string">&quot;daily&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="navbar-ts" tabindex="-1"><a class="header-anchor" href="#navbar-ts" aria-hidden="true">#</a> navbar.ts</h3><details class="custom-container details"><summary>\u8BE6\u60C5</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> navbar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">navbar</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string">&quot;/summary&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&quot;\u57FA\u77F3&quot;</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">&quot;material&quot;</span><span class="token punctuation">,</span>
    prefix<span class="token operator">:</span> <span class="token string">&quot;/cornerstone/&quot;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&quot;\u8BED\u8A00&quot;</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">&quot;code&quot;</span><span class="token punctuation">,</span>
    prefix<span class="token operator">:</span> <span class="token string">&quot;/language/&quot;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&quot;\u6846\u67B6&quot;</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">&quot;frame&quot;</span><span class="token punctuation">,</span>
    prefix<span class="token operator">:</span> <span class="token string">&quot;/framework/&quot;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&quot;\u7B97\u6CD5&quot;</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">&quot;branch&quot;</span><span class="token punctuation">,</span>
    prefix<span class="token operator">:</span> <span class="token string">&quot;/algorithm/&quot;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&quot;\u6280\u672F&quot;</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">&quot;tool&quot;</span><span class="token punctuation">,</span>
    prefix<span class="token operator">:</span> <span class="token string">&quot;/technology/&quot;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&quot;\u54F2\u5B66&quot;</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">&quot;relation&quot;</span><span class="token punctuation">,</span>
    prefix<span class="token operator">:</span> <span class="token string">&quot;/philosophy/&quot;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&quot;\u5176\u4ED6&quot;</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">&quot;others&quot;</span><span class="token punctuation">,</span>
    prefix<span class="token operator">:</span> <span class="token string">&quot;/other/&quot;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&quot;\u968F\u7B14&quot;</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">&quot;article&quot;</span><span class="token punctuation">,</span>
    link<span class="token operator">:</span> <span class="token string">&quot;/post/&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="sidebar-ts" tabindex="-1"><a class="header-anchor" href="#sidebar-ts" aria-hidden="true">#</a> sidebar.ts</h3><details class="custom-container details"><summary>\u8BE6\u60C5</summary><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sidebar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress-theme-hope&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">sidebar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;/cornerstone/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;/language/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;/framework/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;/algorithm/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;/technology/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;/philosophy/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;/post/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;/other/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// summary root dic</span>
  <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;/summary&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;\u57FA\u77F3&quot;</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&quot;material&quot;</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">&quot;/cornerstone/&quot;</span><span class="token punctuation">,</span> 
      collapsable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;\u8BED\u8A00&quot;</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&quot;code&quot;</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">&quot;/language/&quot;</span><span class="token punctuation">,</span>
      collapsable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;\u6846\u67B6&quot;</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&quot;frame&quot;</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">&quot;/framework/&quot;</span><span class="token punctuation">,</span> 
      collapsable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;\u7B97\u6CD5&quot;</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&quot;branch&quot;</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">&quot;/algorithm/&quot;</span><span class="token punctuation">,</span>
      collapsable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;\u6280\u672F&quot;</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&quot;tool&quot;</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">&quot;/technology/&quot;</span><span class="token punctuation">,</span>
      collapsable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;\u54F2\u5B66&quot;</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&quot;relation&quot;</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">&quot;/philosophy/&quot;</span><span class="token punctuation">,</span>
      collapsable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;\u968F\u7B14&quot;</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&quot;article&quot;</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">&quot;/post/&quot;</span><span class="token punctuation">,</span>
      collapsable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">&quot;\u5176\u4ED6&quot;</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">&quot;others&quot;</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">&quot;/other/&quot;</span><span class="token punctuation">,</span>
      collapsable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">&quot;structure&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,9);function I(E,B){const a=o("ExternalLinkIcon");return i(),c("div",null,[u,n("p",null,[r,n("a",d,[k,t(a)]),v]),m,b,q,n("p",null,[g,n("a",h,[y,t(a)]),f]),x,n("p",null,[_,n("a",w,[V,t(a)]),P]),T,z,n("div",C,[M,A,n("p",null,[N,n("a",F,[H,t(a)])]),L]),S])}var U=p(l,[["render",I],["__file","config.html.vue"]]);export{U as default};
