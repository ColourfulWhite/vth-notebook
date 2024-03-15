import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as t,c,a as e,b as n,d as s,e as i}from"./app-G8jnKdhm.js";const d="/assets/1710505263705-windows_install_step_1-3N4ooGLU.png",r="/assets/1710505293431-windows_install_step_2-FG78eacE.png",p={},v=e("p",null,"Maven 的安装非常简单，只需要解压后配置环境变量即可。",-1),u=e("p",null,[e("strong",null,"注意：Maven 是使用 Java 来写的，使用前需要先配置 JDK。")],-1),m={href:"https://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"windows-安装-maven",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#windows-安装-maven","aria-hidden":"true"},"#"),n(" Windows 安装 Maven")],-1),h=e("p",null,"下载 Maven",-1),g={href:"https://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,[n("在 Maven 下载页面下载 "),e("code",null,"*-bin.zip"),n(" 文件。")],-1),f=i('<li><p>解压到安装目录</p><p>使用压缩软件解压到需要安装的目录。</p><p>需要记住这个目录，配置环境变量的时候需要用。</p></li><li><p>配置环境变量</p><p>如果为当前用户安装，修改用户变量；如果为所有用户安装，修改系统变量。</p><p>​ a. 添加一个新的变量，变量名为 <code>MAVEN_HOME</code> ，值为安装目录路径</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>​ b. 在 Path 变量添加 <code>%MAVEN_HOME%\\bin\\</code></p><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>检查环境变量是否生效</p><p>在 cmd 执行 <code>mvn -v</code> ，如果输出以下信息即为成功。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Apache Maven 3.8.4 (9b656c72d54e5bacbed989b64718c159fe39b537)
Maven home: D:\\apache-maven-3.8.4
Java version: 11.0.10, vendor: Oracle Corporation, runtime: C:\\Program Files\\Java\\jdk-11.0.10
Default locale: zh_CN, platform encoding: GBK
OS name: &quot;windows 10&quot;, version: &quot;10.0&quot;, arch: &quot;amd64&quot;, family: &quot;windows&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,3),k=e("h2",{id:"linux-安装-maven",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#linux-安装-maven","aria-hidden":"true"},"#"),n(" Linux 安装 Maven")],-1),x=e("p",null,"下载 Maven",-1),M={href:"https://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"},w=e("p",null,[n("在 Maven 下载页面下载 "),e("code",null,"*-bin.tar.gz"),n(" 文件。")],-1),q=i(`<li><p>解压到安装目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># filename 填需要解压的文件名</span>
<span class="token comment"># installdir 填解压后的目录</span>
<span class="token comment"># tar -zxv -f filename -C installdir</span>
<span class="token function">sudo</span> <span class="token function">tar</span> <span class="token parameter variable">-zxv</span> <span class="token parameter variable">-f</span> apache-maven-3.8.4-bin.tar.gz <span class="token parameter variable">-C</span> /usr/local/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置环境变量</p><p>如果仅为当前用户安装，编辑 <code>~/.branch</code> 。如果为系统所有用户安装，编辑 <code>/etc/profile</code> 。</p><p>添加以下内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># set maven environment</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAVEN_HOME</span><span class="token operator">=</span><span class="token operator">&lt;</span>installdir<span class="token operator">&gt;</span> 	<span class="token comment"># &lt;installdir&gt; 填 Maven 解压的目录</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">\${MAVEN_HOME}</span>/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：环境变量配置里需要有 <code>JAVA_HOME</code> 的记录。因为 Maven 也是使用 Java写的，需要用到 JDK。</strong></p></li><li><p>使环境变量生效</p><p>通过 <code>source</code> 刚刚编辑的文件使环境变量生效。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
<span class="token comment"># source ~/.branch</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>检查是否安装成功</p><p>执行 <code>mvn -v</code> ，如果有以下提示即为成功。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Apache Maven 3.8.4 (9b656c72d54e5bacbed989b64718c159fe39b537)
Maven home: /usr/local/maven
Java version: 11.0.14, vendor: Oracle Corporation, runtime: /usr/local/jdk/jdk-11.0.14
Default locale: en_US, platform encoding: UTF-8
OS name: &quot;linux&quot;, version: &quot;5.13.0-28-generic&quot;, arch: &quot;amd64&quot;, family: &quot;unix&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如果环境变量不生效，请重启系统。</strong></p></li>`,4),E=i('<h2 id="maven-核心程序的介绍" tabindex="-1"><a class="header-anchor" href="#maven-核心程序的介绍" aria-hidden="true">#</a> Maven 核心程序的介绍</h2><p>Maven 的核心程序有 <code>bin</code>, <code>boot</code>, <code>conf</code>, <code>lib</code> 等。</p><ul><li>bin：主要放置可执行命令</li><li>boot：Maven 的类加载器</li><li>conf：Maven 配置文件，其中 <code>settings.xml</code> 是设置 Maven 的主要文件</li><li>lib：Maven 运行时需要的 jar 包</li></ul><p>其他还有一些协议文件 <code>LICENSE</code> 等。</p>',4);function N(A,O){const a=l("ExternalLinkIcon");return t(),c("div",null,[v,u,e("p",null,[n("Maven 下载地址："),e("a",m,[n("https://maven.apache.org/download.cgi"),s(a)])]),b,e("ol",null,[e("li",null,[h,e("p",null,[n("Maven 下载地址："),e("a",g,[n("https://maven.apache.org/download.cgi"),s(a)])]),_]),f]),k,e("ol",null,[e("li",null,[x,e("p",null,[n("Maven 下载地址："),e("a",M,[n("https://maven.apache.org/download.cgi"),s(a)])]),w]),q]),E])}const C=o(p,[["render",N],["__file","00002install.html.vue"]]);export{C as default};
