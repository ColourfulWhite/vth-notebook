import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as n,c as i,a as t,b as e,d as r,e as a}from"./app-G8jnKdhm.js";const h={},s=t("h2",{id:"前言",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),e(" 前言")],-1),l=t("p",null,[e("许多编程语言都有自己的正则表达式解析引擎，这可能会导致不同的语言之间，正则表达式的语法会有些细小的（也可能是显著的）差别，称为 “Regular expression flavors”。一般翻译为"),t("strong",null,"正则表达式风格"),e("，但我认为翻译为"),t("strong",null,"正则表达式方言"),e("更合适。")],-1),p={href:"https://www.regular-expressions.info/tools.html",target:"_blank",rel:"noopener noreferrer"},g=a('<h2 id="普通字符" tabindex="-1"><a class="header-anchor" href="#普通字符" aria-hidden="true">#</a> 普通字符</h2><p>一个正则表达式本质上是由普通字符和特殊字符组成的一个字符串。</p><p>普通字符包括文字字符和不可打印字符。</p><p>文字字符指的是能在计算机中显示的字符，包括字母，数字，标点符号等。</p><p>不可打印字符也称空白符。常见的不可打印字符有：</p><table><thead><tr><th>Character</th><th>ASCII</th><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\\cx</td><td>-</td><td>控制符</td><td>x 指明一个控制字符。x 的取值范围必须是 A - Z 或 a - z，否则将 c 视为一个原义的字符 &#39;c&#39;</td></tr><tr><td>\\t</td><td>0x09</td><td>Tab 键 / 制表符</td><td>等价于 \\cl 或 \\x09</td></tr><tr><td>\\r</td><td>0x0D</td><td>回车符</td><td>等价于 \\cM 或 \\x0d</td></tr><tr><td>\\n</td><td>0x0A</td><td>换行符</td><td>等价于 \\cJ 或 \\x0a</td></tr><tr><td>\\f</td><td>0x0C</td><td>换页符</td><td>等价于 \\cL 或 \\x0c</td></tr><tr><td>\\v</td><td>0x0B</td><td>垂直制表符</td><td>等价于 \\cK 或 \\x0b</td></tr></tbody></table><p>所有的不可打印字符都可以直接在正则表达式中使用，或者作为字符类的一部分。</p><p>如果编程语言支持使用 Unicode，可以使用 <code>\\uFFFF</code> 或 <code>\\x{FFFF}</code> 插入一个 Unicode 字符。E.g. <code>\\u20AC</code> 或 <code>\\x{20AC}</code> 匹配欧元符号 <code>€</code> 。</p><p>如果不支持，可以使用 <code>\\xFF</code> 匹配一些特殊字符。E.g. <code>\\xA9</code> 可以匹配 Latin-1 字符集中的 <code>©</code> 。</p><h2 id="特殊字符" tabindex="-1"><a class="header-anchor" href="#特殊字符" aria-hidden="true">#</a> 特殊字符</h2><p>在正则表达式中，有 12 个特殊字符，它们表示特别的意义，如果需要在正则表达式中使用它们，需要<strong>使用 <code>\\</code> 进行转义</strong>。</p><table><thead><tr><th>Characters</th><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\\</td><td>反斜杠</td><td>1. 将下一个字符标记为特殊字符或原义字符<br>2. 反向引用<br>3. 八进制或十六进制转义符</td></tr><tr><td>^</td><td>插入符</td><td>1. 匹配字符串开始的位置<br>2. 在字符集中使用时，表示匹配时排除这个字符集的字符</td></tr><tr><td>$</td><td>美元符</td><td>匹配字符串结尾的位置</td></tr><tr><td>.</td><td>句点</td><td>匹配除换行符 <code>\\n</code> 之外的任意单字符</td></tr><tr><td>|</td><td>管道符</td><td>逻辑运算 or，在匹配字符串时只需要满足其中某一个表达式即可</td></tr><tr><td>?</td><td>问号</td><td>1. 匹配前面的子表达式<strong>零次或一次</strong><br>2. 将匹配模式切换为懒惰模式<br>3. 非捕获分组</td></tr><tr><td>*</td><td>星号</td><td>匹配前面的子表达式<strong>零次或多次</strong></td></tr><tr><td>+</td><td>加号</td><td>匹配前面的子表达式<strong>一次或多次</strong></td></tr><tr><td>( )</td><td>圆括号</td><td>标记一个<strong>子表达式</strong>的开始和结束位置</td></tr><tr><td>[ ]</td><td>方括号</td><td>标记一个<strong>字符集</strong>的开始和结束位置</td></tr></tbody></table><h2 id="句点-dot" tabindex="-1"><a class="header-anchor" href="#句点-dot" aria-hidden="true">#</a> 句点 <code>.</code> ( Dot )</h2><p>句点 <code>.</code> 匹配任意单个字符，但不匹配换行符。</p><p>在一些编程语言中，可以使用修饰符使句点 <code>.</code> 匹配任意单个字符，包括换行符。</p><p>在实际应用中，谨慎使用句点 <code>.</code>，使用字符类替代句点 <code>.</code> 更高效。</p><div class="hint-container info"><p class="hint-container-title">示例</p><p><code>.ar</code> =&gt; The <mark>car</mark> <mark>par</mark>ked in the <mark>gar</mark>age.</p></div><h2 id="字符集-character-classes-or-character-sets" tabindex="-1"><a class="header-anchor" href="#字符集-character-classes-or-character-sets" aria-hidden="true">#</a> 字符集 ( Character Classes or Character Sets )</h2><p>字符集也称为字符类，使用 <code>[ ]</code> 标记一个字符集开始和结束的位置。正则表达式在匹配的时候，只会匹配字符集中的的一个。<code>gr[ae]y</code> 只会匹配 grey 或 gray，它不会匹配 graay, graey 等类似字符串。在字符集中的字符顺序不会影响匹配的结果。</p><p>如果字符太多，可以使用连字符 <code>-</code> 指定字符范围。<code>[0-9]</code> 会匹配单个 0 到 9 的数字，<code>[A-Za-z]</code> 匹配单个大写或小写的英文字母。连字符 <code>-</code> 和单个字符可以同时存在。<code>[0-9a-fxA-FX]</code> 匹配十六进制中的一个数字或字符 &#39;X&#39;。</p><p>如果需要排除一些字符，可以在字符集中使用插入符号 <code>^</code> 告诉正则表达式在匹配时排除这些字符。<code>[^c]ar</code> 会匹配 par 或 gar，但不会匹配 car。</p><p>注意：</p><ul><li>插入符号 <code>^</code> 必须写在字符集中最开始的地方，也就是与左方括号 <code>[</code> 连在一起写时才会生效，否则将当作普通字符处理。如果需要在字符集最开始的地方使用插入符 <code>^</code> ，需要使用反斜杠 <code>\\</code> 进行转义。</li><li>特殊字符中除了反斜杠 <code>\\</code> 和方括号 <code>[ ]</code> 在字符集中需要使用反斜杠 <code>\\</code> 进行转义，其他特殊字符会被当作普通字符。</li></ul><div class="hint-container info"><p class="hint-container-title">示例</p><p><code>[Tt]he</code> =&gt; <mark>The</mark> car parked in <mark>the</mark> garage.</p><p><code>[^c]ar</code> =&gt; The car <mark>par</mark>ked in the <mark>gar</mark>age.</p></div><h2 id="简写字符类-shorthand-character-classes" tabindex="-1"><a class="header-anchor" href="#简写字符类-shorthand-character-classes" aria-hidden="true">#</a> 简写字符类 ( Shorthand Character Classes )</h2><table><thead><tr><th>简写</th><th>描述</th><th>字符集写法</th></tr></thead><tbody><tr><td>.</td><td>除换行符外的所有字符</td><td><code>[^\\n]</code></td></tr><tr><td>\\w</td><td>匹配所有字母数字和下划线</td><td><code>[a-zA-Z0-9_]</code></td></tr><tr><td>\\W</td><td>匹配所有非字母数字（包括下划线），即符号</td><td><code>[^\\w]</code></td></tr><tr><td>\\d</td><td>匹配数字 0 到 9</td><td><code>[0-9]</code></td></tr><tr><td>\\D</td><td>匹配非数字</td><td><code>[^\\d]</code></td></tr><tr><td>\\s</td><td>匹配空白字符</td><td><code>[\\t\\n\\r\\f\\p{Z}]</code></td></tr><tr><td>\\S</td><td>匹配非空白字符</td><td><code>[^\\s]</code></td></tr></tbody></table><p>简写字符类所匹配的字符取决于所使用的编程语言，在一些现代化的编程语言中，它们可以匹配一些非英语的字母和数字。</p><h2 id="重复-repetition" tabindex="-1"><a class="header-anchor" href="#重复-repetition" aria-hidden="true">#</a> 重复 ( Repetition )</h2><p>重复用来指定正则表达式在匹配字符串时，需要出现特定次数才能成功匹配。</p><p>正则表达式中表示重复的语法有 6 种，其中 <code>? * +</code> 称为重复运算符，<code>{ }</code> 称为量词。</p>',30),u=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"符号"),t("th",null,"描述")])]),t("tbody",null,[t("tr",null,[t("td",null,"?"),t("td",null,[e("匹配前面的子表达式"),t("strong",null,"零次或一次")])]),t("tr",null,[t("td",null,"*"),t("td",null,[e("匹配前面的子表达式"),t("strong",null,"零次或多次")])]),t("tr",null,[t("td",null,"+"),t("td",null,[e("匹配前面的子表达式"),t("strong",null,"一次或多次")])]),t("tr",null,[t("td",{n:""}),t("td",null,[e("匹配前面的子表达式 "),t("strong",null,"n 次"),e("，n >= 0")])]),t("tr",null,[t("td",{"n,":""}),t("td",null,[e("匹配前面的子表达式"),t("strong",null,"至少 n 次"),e("，n >= 0")])]),t("tr",null,[t("td",{"n,":"",m:""}),t("td",null,[e("匹配前面的子表达式"),t("strong",null,"最少 n 次，最多 m 次"),e("，n >= 0 且 n <= m")])])])],-1),x=a('<p>子表达式可以是单个字符，也可以是一个字符集或分组。</p><h2 id="贪婪模式与懒惰模式-greedy-and-lazy-repetition" tabindex="-1"><a class="header-anchor" href="#贪婪模式与懒惰模式-greedy-and-lazy-repetition" aria-hidden="true">#</a> 贪婪模式与懒惰模式 ( Greedy and Lazy Repetition )</h2><p>重复运算符或量词在匹配时总是贪婪的，它们会默认匹配尽可能多的字符。使用问号 <code>?</code> 将正则表达式的匹配模式切换成懒惰模式。</p><div class="hint-container info"><p class="hint-container-title">贪婪模式与懒惰模式</p><p>贪婪模式：<code>&lt;.+&gt;</code> =&gt; This is <mark>&lt;EM&gt; first &lt;/EM&gt;</mark>.</p><p>懒惰模式：<code>&lt;.+?&gt;</code> =&gt; This is <mark>&lt;EM&gt;</mark> first <mark>&lt;/EM&gt;</mark>.</p></div><h2 id="锚点-anchors" tabindex="-1"><a class="header-anchor" href="#锚点-anchors" aria-hidden="true">#</a> 锚点 ( Anchors )</h2><p>锚点也称为限定符，它匹配的是位置而不是字符。</p><table><thead><tr><th>符号</th><th>描述</th></tr></thead><tbody><tr><td>^</td><td>匹配字符串开始的位置，如果使用了 <code>multi-line</code> 模式，则会匹配每一行的开头</td></tr><tr><td>$</td><td>匹配字符串结束的位置，如果使用了 <code>multi-line</code> 模式，则会匹配每一行的结尾</td></tr><tr><td>\\b</td><td>匹配单词的边界</td></tr><tr><td>\\B</td><td>匹配除了单词边界的位置</td></tr></tbody></table><p>单词的边界是指能够被 <code>\\w</code> 匹配和不能被 <code>\\w</code> 匹配的字符之间的位置。</p><p>注意：锚点不能和重复运算符或量词一起使用。因为单词边界的前面或后面和换行不能有一个以上的位置。</p><div class="hint-container info"><p class="hint-container-title">锚点</p><p><code>(T|t)he</code> =&gt; <mark>The</mark> car is parked in <mark>the</mark> garage.</p><p><code>^(T|t)he</code> =&gt; <mark>The</mark> car is parked in the garage.</p><p><code>(at\\.)</code> =&gt; The fat c<mark>at.</mark> s<mark>at.</mark> on the m<mark>at.</mark></p><p><code>(at\\.)$</code> =&gt; The fat cat. sat. on the m<mark>at.</mark></p><p><code>cat</code> =&gt; The fat <mark>cat</mark> sat on the con<mark>cat</mark>enation.</p><p><code>\\bcat</code> =&gt; The fat <mark>cat</mark> sat on the concatenation.</p></div><h2 id="选择-alternation" tabindex="-1"><a class="header-anchor" href="#选择-alternation" aria-hidden="true">#</a> 选择 ( Alternation )</h2><p>正则表达式中使用 <code>|</code> 来表示选择，相当于逻辑运算中的 or。<code>cat|dog</code> 可以匹配 About cats and dogs. 中的 cat，在下一次匹配时会匹配 dog。选择项可以是任意数量的：<code>cat|dog|mouse|fisn</code>。</p><p>选择符是优先级最低的运算符。<code>cat|dog food</code> 匹配字符串中的 cat 或 dog food。如果需要匹配 cat food 或 dog food，需要使用圆括号 <code>( )</code> 改变优先级：<code>(cat|dog) food</code> 。</p><h2 id="分组-grouping-and-capturing" tabindex="-1"><a class="header-anchor" href="#分组-grouping-and-capturing" aria-hidden="true">#</a> 分组 ( Grouping and Capturing )</h2><p>使用圆括号 <code>( )</code> 对一个表达式进行分组，括号 <code>( )</code> 括起来的叫子表达式。</p><p>重复运算符和量词可以作用整个分组。</p><div class="hint-container info"><p class="hint-container-title">分组重复</p><p><code>Set(Value)?</code> 匹配 Set 或 SetValue</p><p><code>SetValue?</code> 匹配 SetValu 或 SetValue</p></div><p>所有的分组默认都是捕获的，每个分组匹配的值会缓存起来，多个匹配值之间可以通过数字 n 来查看。</p><div class="hint-container info"><p class="hint-container-title">捕获分组</p><p><code>Set(Value)?</code> 匹配 SetValue 时，会有两个值，第一个是整个正则表达式的结果 SetValue，第二个第一个分组的结果 Value</p></div><p>如何访问这些缓存的匹配值由所用的编程语言决定，通常第 0 个是整个正则表达式匹配的结果。</p><p>可以使用 <code>(?:regexp)</code> 取消捕获分组。如果不需要每个分组的匹配值时，取消捕获分组会更高效。</p><div class="hint-container info"><p class="hint-container-title">非捕获分组</p><p><code>Set(?:Value)?</code> 匹配 SetValue 时只有一个结果 SetValue</p></div><h2 id="反向引用-backreferences" tabindex="-1"><a class="header-anchor" href="#反向引用-backreferences" aria-hidden="true">#</a> 反向引用 ( Backreferences )</h2><p>使用 <code>\\n</code> 来匹配第 n 个捕获分组匹配的相同文本，这称为反向引用。这在查找相同文本时非常有用。</p><div class="hint-container info"><p class="hint-container-title">反向引用</p><p><code>([abc])=\\1</code> 可以匹配 a=a, b=b, c=c</p></div><h2 id="命名分组与引用-named-groups-and-backreferences" tabindex="-1"><a class="header-anchor" href="#命名分组与引用-named-groups-and-backreferences" aria-hidden="true">#</a> 命名分组与引用 ( Named Groups and Backreferences )</h2><p>如果一个正则表达式中有多个捕获分组，在反向引用时使用数字来索引很容易造成混乱。可以给每个分组命名，然后使用名字来引用。</p><p>使用 <code>(?&lt;name&gt;regexp)</code> 命名一个捕获分组，使用 <code>\\k&lt;name&gt;</code> 来引用一个命名的捕获分组。</p><div class="hint-container info"><p class="hint-container-title">命名分组</p><p><code>(?&lt;mygroup&gt;[abc])=\\k&lt;mygroup&gt;</code> 与 <code>([abc])=\\1</code> 是等价的</p></div><h2 id="前后预查-lookaround" tabindex="-1"><a class="header-anchor" href="#前后预查-lookaround" aria-hidden="true">#</a> 前后预查 ( Lookaround )</h2><p>前后预查是一个特殊的分组，它们参与字符串的匹配，但不包含在匹配结果中。它同锚点一样，匹配的是一个位置。</p><p>前后预查分为两大类：零宽先行断言和零宽后行断言。每个分类有两种，一种是正向，一种是负向。</p><div class="hint-container tip"><p class="hint-container-title">术语解释</p><ul><li><p>零宽</p><p>前后预查匹配的是一个位置，在匹配过程中不占用字符，所以称为零宽。</p></li><li><p>先行 ( lookahead ) 和后行 ( lookbehind )</p><p>正则表达式引擎在执行字符串和表达式匹配时，会从头到尾（从前到后）连续扫描字符串中的字符，设想有一个扫描指针指向字符边界处并随匹配过程移动。先行断言，是当扫描指针位于某处时，引擎会尝试匹配指针还未扫过的字符，先于指针到达该字符，故称为先行。后行断言，引擎会尝试匹配指针已扫过的字符，后于指针到达该字符，故称为后行。</p></li><li><p>正向 (positive) 和负向 (negative)</p><p>正向是指匹配时存在，负向是指匹配时不能存在。</p></li></ul></div><h3 id="零宽正向先行断言" tabindex="-1"><a class="header-anchor" href="#零宽正向先行断言" aria-hidden="true">#</a> 零宽正向先行断言</h3><p>零宽正向先行断言 <code>regexp1(?=regexp)</code> 表示 <code>regexp1</code> 后面必须跟着表达式 <code>regexp</code> 。</p><div class="hint-container info"><p class="hint-container-title">零宽正向先行断言</p><p><code>q(?=u)</code> 匹配 question 中的 q，但不会匹配 Iraq 中的 q</p></div><h3 id="零宽负向先行断言" tabindex="-1"><a class="header-anchor" href="#零宽负向先行断言" aria-hidden="true">#</a> 零宽负向先行断言</h3><p>零宽负向先行断言 <code>regexp1(?!regexp)</code> 表示 <code>regexp1</code> 后面不能跟着表达式 <code>regexp</code> 。</p><div class="hint-container info"><p class="hint-container-title">零宽负向先行断言</p><p><code>q(?!u)</code> Iraq 的 q，但不会匹配 question 中的 q</p></div><h3 id="零宽正向后行断言" tabindex="-1"><a class="header-anchor" href="#零宽正向后行断言" aria-hidden="true">#</a> 零宽正向后行断言</h3><p>零宽负向后行断言 <code>(?&lt;=regexp)regexp1</code> 表示 <code>regexp1</code> 前面必须跟着 <code>regexp</code> 。</p><div class="hint-container info"><p class="hint-container-title">零宽正向后行断言</p><p><code>(?&lt;=a)b</code> 匹配 abc 中的 a</p></div><h3 id="零宽负向后行断言" tabindex="-1"><a class="header-anchor" href="#零宽负向后行断言" aria-hidden="true">#</a> 零宽负向后行断言</h3><p>零宽负向后行断言 <code>(?&lt;!regexp)regexp1</code> 表示 <code>regexp1</code> 前面不能跟着 <code>regexp</code> 。</p><div class="hint-container info"><p class="hint-container-title">零宽负向后行断言</p><p><code>(?&lt;!a)b</code> 不匹配 abc 中的 a</p></div><h2 id="unicode-unicode-properties" tabindex="-1"><a class="header-anchor" href="#unicode-unicode-properties" aria-hidden="true">#</a> Unicode ( Unicode Properties )</h2><p>\\p{L} 可以匹配给定 Unicode 类别中单个字符。\\P{L} 可以匹配不在给定 Unicode 类别中的单个字符。</p>',47),b=t("code",null,"{ }",-1),f={href:"https://www.regular-expressions.info/unicode.html#category",target:"_blank",rel:"noopener noreferrer"},m=a('<h2 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符" aria-hidden="true">#</a> 修饰符</h2><p>正则表达式的修饰符用于指定额外的匹配策略，它们写在正则表达式的外面。</p><p>具体有哪些修饰符，由所用的编程语言决定。</p><p>下面列出一些常见的修饰符：</p><table><thead><tr><th>修饰符</th><th>模式</th><th>描述</th></tr></thead><tbody><tr><td>i</td><td><strong>i</strong>nsensitive</td><td>忽略大小写</td></tr><tr><td>g</td><td><strong>g</strong>lobal</td><td>查找所有的匹配项</td></tr><tr><td>m</td><td><strong>m</strong>ulti-line</td><td>多行匹配。使 <code>^</code> 和 <code>$</code> 匹配每行的开始和结束，而不是字符串的开始和结束。</td></tr><tr><td>s</td><td><strong>s</strong>ingle-line</td><td>句点 <code>.</code> 匹配时会匹配换行符</td></tr><tr><td>x</td><td>e<strong>x</strong>tended</td><td>忽略正则表达式中 <code>#</code> 后面的空格和文本</td></tr><tr><td>U</td><td><strong>U</strong>ngreedy</td><td>默认使用懒惰模式，这时 <code>?</code> 会切换到贪婪模式</td></tr><tr><td>u</td><td><strong>u</strong>nicode</td><td>正则表达式以 UTF-16 的编码解析，这会导致转义序列与 Unicode 字符匹配</td></tr><tr><td>J</td><td></td><td>允许重复使用子模式名称</td></tr><tr><td>D</td><td><strong>D</strong>ollar</td><td>强制 <code>$</code> 始终匹配字符串的末尾，而不是行尾。如果使用了 <code>m</code> 修饰符，则会忽略这个模式</td></tr></tbody></table><h2 id="运算符的优先级" tabindex="-1"><a class="header-anchor" href="#运算符的优先级" aria-hidden="true">#</a> 运算符的优先级</h2><table><thead><tr><th>运算符</th><th>描述</th></tr></thead><tbody><tr><td><code>\\</code></td><td>转义符</td></tr><tr><td><code>( )</code>, <code>(?:)</code>, <code>(?=)</code>, <code>[ ]</code></td><td>圆括号和方括号</td></tr><tr><td><code>*</code>, <code>+</code>, <code>?</code>, <code>{n}</code>, <code>{n, }</code>, <code>{n,m}</code></td><td>量词</td></tr><tr><td><code>^</code>, <code>$</code>, <code>\\特殊字符</code>, 其他任何字符</td><td>位置和序列</td></tr><tr><td>|</td><td>选择运算符</td></tr></tbody></table><h2 id="工具网站" tabindex="-1"><a class="header-anchor" href="#工具网站" aria-hidden="true">#</a> 工具网站</h2>',8),k={href:"https://regex101.com/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://regexr-cn.com/",target:"_blank",rel:"noopener noreferrer"},v=t("h2",{id:"参考",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),e(" 参考")],-1),y={href:"https://www.regular-expressions.info/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/Ackerven/learn-regex",target:"_blank",rel:"noopener noreferrer"},T={href:"https://www.runoob.com/regexp/regexp-tutorial.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.bilibili.com/video/BV1da4y1p7iZ",target:"_blank",rel:"noopener noreferrer"},V={href:"http://baiy.cn/utils/_regex_doc/index.htm",target:"_blank",rel:"noopener noreferrer"};function C(E,A){const d=c("ExternalLinkIcon");return n(),i("div",null,[s,l,t("p",null,[e("以下语法在大多数流行的编程语言中都可以使用，但建议先查阅该语言对正则表达式的解释说明。它们一般出现在书籍的附录，如果没有书籍可以在 "),t("a",p,[e("Regular-Expressions.info"),r(d)]),e(" 中找到一些相关的说明。")]),g,u,x,t("p",null,[e("花括号 "),b,e(" 中的字母代表一个类别，其中 L 代表字母类别。具体有哪些类别参考 "),t("a",f,[e("Regex Tutorial - Unicode Characters and Properties"),r(d)])]),m,t("ul",null,[t("li",null,[t("a",k,[e("regex101: build, test, and debug regex"),r(d)])]),t("li",null,[t("a",_,[e("RegExr: 学习、构建 和 测试 正则表达式 Test RegEx"),r(d)])])]),v,t("ul",null,[t("li",null,[t("a",y,[e("Regular-Expressions.info - Regex Tutorial, Examples and Reference - Regexp Patterns"),r(d)])]),t("li",null,[t("a",w,[e("learn-regex: Learn regex the easy way"),r(d)])]),t("li",null,[t("a",T,[e("正则表达式 – 教程 | 菜鸟教程"),r(d)])]),t("li",null,[t("a",S,[e("10分钟快速掌握正则表达式 哔哩哔哩"),r(d)])]),t("li",null,[t("a",V,[e("正则表达式说明"),r(d)])])])])}const U=o(h,[["render",C],["__file","00001syntax.html.vue"]]);export{U as default};
