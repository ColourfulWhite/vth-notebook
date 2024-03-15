import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o as c,c as u,a as t,b as e,d as s,w as o,e as n}from"./app-G8jnKdhm.js";const h={},m=n(`<p>这节介绍部署后如何维护 VTH。</p><p>在项目目录的 <code>package.json</code> 文件中定义了一些命令：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build src&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:clean-dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev src --clean-cache&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev src&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这意味着可以使用以下命令替代原命令。</p><ul><li><p><code>pnpm docs:build</code></p><p>构建项目输出到 <code>.vuepress/dist</code></p></li><li><p><code>pnpm docs:dev</code></p><p>启动开发服务器</p></li><li><p><code>pnpm docs:clean-dev</code></p><p>清除缓存并启动开发服务器</p></li></ul><h2 id="主题" tabindex="-1"><a class="header-anchor" href="#主题" aria-hidden="true">#</a> 主题</h2><h3 id="升级" tabindex="-1"><a class="header-anchor" href="#升级" aria-hidden="true">#</a> 升级</h3>`,7),g=n("<li><p>在 Github 对比最新分支与当前使用版本的改动</p><p>对比目录 <code>docs/theme/src/zh/</code>。</p><p>如果使用 Git Bash，执行以下命令：</p><ul><li><p>查看改动文件： <code>git diff --stat &lt;tagname&gt; main docs/theme/src/zh</code></p><p>e.g. <code>git diff --stat v2.0.0-beta.168 main docs/theme/src/zh</code></p></li><li><p>查看改动内容：<code>git diff &lt;tabname&gt; main docs/theme/src/zh</code></p><p>e.g. <code>git diff v2.0.0-beta.168 main docs/theme/src/zh</code></p></li></ul></li><li><p>从 master 分支 checkout 一个 updatetheme 分支</p></li>",2),v=t("p",null,"执行升级命令",-1),b=t("p",null,"注意保持版本一致。",-1),k={href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},_=t("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"pnpm"),e(` dlx vp-update
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"})])],-1),f=t("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[t("pre",{class:"language-bash"},[t("code",null,[t("span",{class:"token function"},"yarn"),e(` dlx vp-update
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"})])],-1),x=t("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[t("pre",{class:"language-bash"},[t("code",null,`npx vp-update
`)]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"})])],-1),y=n("<li><p>根据变动，修改配置文件</p></li><li><p>在本地机器执行 <code>pnpm docs:build</code> 进行构建测试</p></li><li><p>如果测试成功，提交 commit 并把 updatetheme 分支合并入 master 分支</p><p><strong>提交前先执行 <code>git diff --staged --check</code> 检查。</strong></p><p>commit 规范：<strong>update(vth): &lt;oldVersion&gt; to &lt;newVersion&gt;</strong></p></li><li><p>推送代码到 Github 进行构建部署</p></li><li><p>删除新建的分支</p></li>",5),E=n('<h3 id="更新-调整样式" tabindex="-1"><a class="header-anchor" href="#更新-调整样式" aria-hidden="true">#</a> 更新/调整样式</h3><ol><li><p>从 master 分支 checkout 一个分支</p></li><li><p>对主题进行更新</p></li><li><p>在本地机器执行 <code>pnpm docs:build</code> 进行构建测试</p></li><li><p>如果测试成功，提交 commit 并把当前分支合并入 master 分支</p><p><strong>提交前先执行 <code>git diff --staged --check</code> 检查。</strong></p><p>commit 规范：<strong>update/style(vth): xxx</strong></p></li><li><p>推送代码到 Github 进行构建部署</p></li><li><p>删除新建的分支</p></li></ol><h2 id="文章" tabindex="-1"><a class="header-anchor" href="#文章" aria-hidden="true">#</a> 文章</h2><p>在写每个 Markdown 文件时候，都需要配置 Frontmatter 信息。</p>',4),A={href:"https://theme-hope.vuejs.press/zh/config/frontmatter/",target:"_blank",rel:"noopener noreferrer"},q=n('<p>下面列出比较重要的：</p><table><thead><tr><th>属性</th><th>描述</th><th>类型</th><th>必要</th><th>备注</th></tr></thead><tbody><tr><td>title</td><td>内容标题</td><td>string</td><td>是</td><td>所有标题用这个字段指定而不是 H1</td></tr><tr><td>shortTitle</td><td>短标题，在导航栏、侧边栏和路径导航中作为首选</td><td>string</td><td>否</td><td>如果标题太长可以考虑使用这个</td></tr><tr><td>description</td><td>内容描述</td><td>string</td><td>否</td><td>一句话描述当前页面的作用</td></tr><tr><td>icon</td><td>图标</td><td>string</td><td>否</td><td><code>README.md</code> 中是必须的</td></tr><tr><td>category</td><td>分类</td><td>string | string[]</td><td>是</td><td>使用中文，分类同导航栏分类，<code>README.md</code> 可以不填</td></tr><tr><td>tag</td><td>标签</td><td>string | string[]</td><td>是</td><td>使用中文，可以多个，<code>README.md</code> 可以不填</td></tr><tr><td>order</td><td>排序</td><td>number</td><td>是</td><td>支持浮点数，<code>README.md</code> 可以不填</td></tr></tbody></table><h3 id="一个新的笔记本" tabindex="-1"><a class="header-anchor" href="#一个新的笔记本" aria-hidden="true">#</a> 一个新的笔记本</h3>',3),w=t("li",null,[t("p",null,[e("从 master 分支 checkout 一个分支，"),t("strong",null,"分类名尽量同笔记本名称")])],-1),M=t("li",null,[t("p",null,[e("在"),t("strong",null,"对应分类"),e("下新建文件夹，文件夹名称即为笔记本名称")])],-1),D=t("strong",null,"新建的文件夹",-1),T={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},R=n(`<p>首先添加 Frontmatter，然后写笔记本的描述，再写一个 H2 标题 “文章列表”。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span>
<span class="token key atrule">icon</span><span class="token punctuation">:</span>
<span class="token key atrule">description</span><span class="token punctuation">:</span>
<span class="token key atrule">category</span><span class="token punctuation">:</span>
tag<span class="token punctuation">:</span></span>
<span class="token punctuation">---</span></span>

这个笔记本的描述

<span class="token title important"><span class="token punctuation">##</span> 文章列表</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),G=t("li",null,[t("p",null,[e("把"),t("strong",null,"这个文件夹路径"),e("加入到 "),t("strong",null,"navbar 配置"),e("的"),t("strong",null,"对应分类"),e("的 "),t("code",null,"children"),e(" 中")])],-1),V=t("strong",null,"对应分类",-1),j={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},z=t("strong",null,"这个笔记本",-1),B={href:"http://summary.md",target:"_blank",rel:"noopener noreferrer"},C=t("strong",null,"这个笔记本",-1),F=t("p",null,[t("strong",null,"注意：需要写全路径，即带上分类路径")],-1),H=n("<li><p>执行 <code>pnpm docs:build</code> 构建项目，预览效果</p></li><li><p>确认无误后，提交 commit 并把当前分支合并入 master 分支</p><p><strong>提交前先执行 <code>git diff --staged --check</code> 检查。</strong></p><p>commit 规范：<strong>feat(note): create notebook(&lt;name&gt;)</strong></p></li><li><p>推送代码到 Github 进行构建部署</p></li><li><p>删除新建的分支</p></li>",4),N=t("h3",{id:"一篇新的文章",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#一篇新的文章","aria-hidden":"true"},"#"),e(" 一篇新的文章")],-1),P=n(`<li><p>从 master 分支 checkout 一个分支，分类名尽量同笔记本名称</p></li><li><p>添加 Markdown 文件并开始写文章</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span>
<span class="token key atrule">description</span><span class="token punctuation">:</span>
<span class="token key atrule">category</span><span class="token punctuation">:</span>
<span class="token key atrule">tag</span><span class="token punctuation">:</span>
order<span class="token punctuation">:</span></span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),I={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},L=n("<li><p>执行 <code>pnpm docs:build</code> 构建项目，预览效果</p></li><li><p>确认无误后，提交 commit 并把当前分支合并入 master 分支</p><p><strong>提交前先执行 <code>git diff --staged --check</code> 检查。</strong></p><p>commit 规范：<strong>feat(note): add &lt;filename&gt;(&lt;notebook&gt;)</strong></p></li><li><p>推送代码到 Github 进行构建部署</p></li><li><p>删除新建的分支</p></li>",4),S=n(`<h3 id="更新一篇文章" tabindex="-1"><a class="header-anchor" href="#更新一篇文章" aria-hidden="true">#</a> 更新一篇文章</h3><ol><li><p>从 master 分支 checkout 一个分支，分类名尽量同笔记本名称</p></li><li><p>修改文章</p></li><li><p>执行 <code>pnpm docs:build</code> 构建项目，预览效果</p></li><li><p>确认无误后，提交 commit 并把当前分支合并入 master 分支</p><p><strong>提交前先执行 <code>git diff --staged --check</code> 检查。</strong></p><p>commit 规范：<strong>update(note): &lt;filename&gt;(&lt;notebook&gt;)</strong></p></li><li><p>推送代码到 Github 进行构建部署</p></li><li><p>删除新建的分支</p></li></ol><h2 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> Github</h2><p>从 2021 年 8 月 13 日起，Github 不再支持使用用户名密码的方式进行认证，必须使用 Personal access token (PAT)。</p><p>对于私有仓库，必须通过配置 Token 的方式才可以拉取和上传代码。</p><p>添加/替换 Token：</p><ol><li><p>在 <strong>Setting -&gt; Developer settings -&gt; Personal access tokens</strong> 生成 token</p></li><li><p>使用 Token 拉取代码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://<span class="token operator">&lt;</span>token<span class="token operator">&gt;</span>@github.com/<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>/<span class="token operator">&lt;</span>hub<span class="token operator">&gt;</span>.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>更新 Token</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote set-url origin https://<span class="token operator">&lt;</span>token<span class="token operator">&gt;</span>@github.com/<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>/<span class="token operator">&lt;</span>hub<span class="token operator">&gt;</span>.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><h3 id="commit-规范" tabindex="-1"><a class="header-anchor" href="#commit-规范" aria-hidden="true">#</a> commit 规范</h3><ul><li>修改文章错别字：<strong>fix(note): fix typos &lt;filename&gt;(&lt;notebook&gt;)</strong></li></ul>`,10);function J(K,O){const a=d("ExternalLinkIcon"),p=d("CodeTabs");return c(),u("div",null,[m,t("ol",null,[g,t("li",null,[v,b,t("p",null,[e("每个包或依赖后面的标签对应的版本，可以前往 "),t("a",k,[e("npm registry"),s(a)]),e(" 查看。")]),s(p,{id:"87",data:[{id:"pnpm"},{id:"yarn"},{id:"npm"}],active:0,"tab-id":"updatetheme"},{title0:o(({value:i,isActive:l})=>[e("pnpm")]),title1:o(({value:i,isActive:l})=>[e("yarn")]),title2:o(({value:i,isActive:l})=>[e("npm")]),tab0:o(({value:i,isActive:l})=>[_]),tab1:o(({value:i,isActive:l})=>[f]),tab2:o(({value:i,isActive:l})=>[x]),_:1})]),y]),E,t("p",null,[e("具体的 Frontmatter 选项前往 "),t("a",A,[e("VuePress Theme Hope → 配置 → Frontmatter 配置"),s(a)]),e(" 查看。")]),q,t("ol",null,[w,M,t("li",null,[t("p",null,[e("在"),D,e("下面，新建 "),t("a",T,[e("README.md"),s(a)]),e(" 文件")]),R]),G,t("li",null,[t("p",null,[e("在"),V,e("的 "),t("a",j,[e("README.md"),s(a)]),e(" 中添加"),z,e("的超链接")])]),t("li",null,[t("p",null,[e("在 "),t("strong",null,[t("a",B,[e("summary.md"),s(a)]),e(" 中")]),e("添加"),C,e("超链接")]),F]),H]),N,t("ol",null,[P,t("li",null,[t("p",null,[e("在当前笔记本的 "),t("a",I,[e("README.md"),s(a)]),e(" 中 “文章列表” 添加文章的超链接")])]),L]),S])}const W=r(h,[["render",J],["__file","04maintain.html.vue"]]);export{W as default};
