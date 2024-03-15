import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as t,c,a as e,b as a,d as s,e as l}from"./app-G8jnKdhm.js";const d={},r=e("h2",{id:"版本选择",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#版本选择","aria-hidden":"true"},"#"),a(" 版本选择")],-1),p=e("p",null,"Java 的 JDK 可以粗暴的分为两种：Oracle JDK 和第三方 JDK。",-1),u=e("p",null,"Oracle 公司负责制定 JVM 规范。",-1),v=e("li",null,"Oracle JDK：由 Oracle 公司根据这个规范实现的 JDK",-1),h={href:"https://openjdk.org/",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"安装-jdk",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装-jdk","aria-hidden":"true"},"#"),a(" 安装 JDK")],-1),m=e("p",null,"获取 JDK",-1),_={href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://jdk.java.net/archive/",target:"_blank",rel:"noopener noreferrer"},J={class:"hint-container tip"},A=e("p",{class:"hint-container-title"},"提示",-1),g={href:"http://bugmenot.com/view/oracle.com",target:"_blank",rel:"noopener noreferrer"},f=l(`<li><p>安装/解压到合适位置</p><p>运行安装程序或将压缩包解压到到合适位置，这个位置的路径就是 JDK 的路径。</p><p>Linux/macOS 使用 <code>tar</code> 解压 <code>*.tar.gz</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># filename 填需要解压的文件名</span>
<span class="token comment"># installdir 填解压后的目录</span>
<span class="token comment"># tar -zxv -f filename -C installdir</span>
<span class="token function">sudo</span> <span class="token function">tar</span> <span class="token parameter variable">-zxv</span> <span class="token parameter variable">-f</span> jdk-11.0.14_linux-x64_bin.tar.gz <span class="token parameter variable">-C</span> /usr/local/jdk/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置环境变量</p><ul><li><p>Windows</p><ol><li><p>新建一个 <code>JAVA_HOME</code> 环境变量，值为 JDK 的路径</p></li><li><p>新建一个 <code>CLASSPATH</code> 环境变量，值为 <code>.;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar;</code></p></li><li><p>修改 <code>Path</code> 环境变量，新增 <code>%JAVA_HOME%\\bin</code> 和 <code>%JAVA_HOME%\\jre\\bin</code></p><p>注意：如果 <code>Path</code> 是单行显示的话，需要加上 <code>;</code> 分隔，即 <code>%JAVA_HOME%\\bin;%JAVA_HOME%\\jre\\bin;</code></p></li></ol></li><li><p>Linux/macOS</p><p>如果仅需要当前用户生效，修改 <code>~/.bashrc</code> 文件。</p><p>如果需要系统所有用户生效，修改 <code>/etc/profile</code> 文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#set oracle jdk environment</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>installDir <span class="token comment">## installDir 换成解压的 jdk 的目录</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JRE_HOME</span><span class="token operator">=</span><span class="token variable">\${JAVA_HOME}</span>/jre
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">\${JAVA_HOME}</span>/lib:<span class="token variable">\${JRE_HOME}</span>/lib
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">\${JAVA_HOME}</span>/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改完之后，使用 <code>source</code> 命令使配置生效。</p><p>当前用户：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所有用户：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>检查配置是否生效</p><p>在 cmd 或终端中执行 <code>java --version</code> 检查配置是否生效，生效会输出版本号信息。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java 11.0.14 2022-01-18 LTS
Java(TM) SE Runtime Environment 18.9 (build 11.0.14+8-LTS-263)
Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.14+8-LTS-263, mixed mode)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有生效，检查添加的内容是否正确或重启系统。</p></li>`,3),x=l(`<h2 id="环境变量说明" tabindex="-1"><a class="header-anchor" href="#环境变量说明" aria-hidden="true">#</a> 环境变量说明</h2><ul><li><p><code>JAVA_HOME</code></p><p><code>JAVA_HOME</code> 环境变量的值是 JDK 的路径。</p><p>虽然 <code>JAVA_HOME</code> 这个名称不是死规定，但是很多 Java 的程序会尝试使用这个名称的环境变量从系统中获取 JDK 的路径。</p><p>而且这个环境变量不是必须的，如果不设置这个环境变量，需要在 <code>CLASSPATH</code> 和 <code>PATH</code> 中 <code>JAVA_HOME</code> 部分填入完整的 JDK 路径。</p></li><li><p><code>CLASSPATH</code></p><p>这个环境变量用于告诉 JRE 到哪里搜索 Java 类，常用于加载第三方类库。</p><p>在 JDK1.4 以前的版本 JRE 并不会在当前路径下搜索 Java 类，需要在 <code>CLASSPATH</code> 中加入 <code>.</code> 告诉 JRE 在当前路径下搜索。</p><p>在编译运行 Java 程序还需要 JDK 的 <code>lib</code> 下 <code>dt.jar</code> 和 <code>tools.jar</code> 中的 Java 类，所以需要在 <code>CLASSPATH</code> 中加入这两个文件。</p></li><li><p><code>PATH</code> (Linux) / <code>Path</code> (Windows)</p><p>这个环境变量用于告诉操作系统去哪里搜索可执行程序。</p></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Windows 在安装 JDK8 时，在安装完成后会继续安装 JRE，默认的路径就是安装路径下的 <code>jre</code>。</p><p>在 JDK8 之后，默认不会再安装 JRE，所以安装目录下自然也就没有了 <code>jre</code>。</p><p>如果需要，可以在<strong>以管理员身份运行</strong>的 cmd 中执行以下命令安装：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>jlink.exe --module-path jmods --add-modules java.desktop --output jre
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>JDK 9 更新引入了模块化系统，所以 <code>bin</code> 目录不再包含 <code>dt.jar</code> 和 <code>tools.jar</code> 这两个文件，但为了兼容性，建议仍在 <code>CLASSPATH</code> 加入这两个文件。</p></div><h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> 补充</h2><p>对于其他一些系统，可能存在别的安装方式。</p><h3 id="ubuntu-通过-apt-安装" tabindex="-1"><a class="header-anchor" href="#ubuntu-通过-apt-安装" aria-hidden="true">#</a> Ubuntu 通过 APT 安装</h3><p>Ubuntu 默认仓库没有 JDK 的安装包，可以通过添加 PPA，实现使用 apt 安装。</p><p>以下是安装 JDK11 的示例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository ppa:webupd8team/java
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> oracle-java11-installer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),j={href:"https://launchpad.net/ubuntu/+ppas",target:"_blank",rel:"noopener noreferrer"},E={href:"https://launchpad.net/~linuxuprising/+archive/ubuntu/java",target:"_blank",rel:"noopener noreferrer"};function H(D,O){const n=i("ExternalLinkIcon");return t(),c("div",null,[r,p,u,e("ul",null,[v,e("li",null,[a("第三方 JDK：由其他开源组织或商业公司根据这个规范实现的 JDK，如 "),e("a",h,[a("OpenJDK"),s(n)])])]),b,e("ol",null,[e("li",null,[m,e("ul",null,[e("li",null,[e("p",null,[a("Oracle JDK："),e("a",_,[a("https://www.oracle.com/java/technologies/downloads/"),s(n)])])]),e("li",null,[e("p",null,[a("OpenJDK: "),e("a",k,[a("https://jdk.java.net/archive/"),s(n)])])])]),e("div",J,[A,e("p",null,[a("如果下载 Oracle 的 JDK，需要登陆但没有账号，可以在 "),e("a",g,[a("http://bugmenot.com/view/oracle.com"),s(n)]),a(" 获取账号登录。")])])]),f]),x,e("p",null,[a("对于新版本的 JDK，可以在 "),e("a",j,[a("https://launchpad.net/ubuntu/+ppas"),s(n)]),a(" 寻找 PPA。")]),e("ul",null,[e("li",null,[e("a",E,[a("Linux Uprising Team 的 Oracle Java"),s(n)])])])])}const M=o(d,[["render",H],["__file","000002install.html.vue"]]);export{M as default};
