
config bundle mysql2 error macos
gem install mysql2 -v '0.5.3' -- --with-mysql-config=/usr/local/opt/mysql-client/bin/mysql_config \
                 --srcdir=/usr/local/opt/mysql/include --platform=ruby \
                 --with-ldflags=-L/usr/local/opt/openssl/lib \
                 --with-cppflags=-I/usr/local/opt/openssl/include
                 
reset apache  ``sudo npm start -- --reset-cache``

``export ANDROID_HOME=/home/longvv/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator``

sua phien ban moi `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`


link fonts assets ``react-native link``
<br />
console log of react native: ``react-native log-android``
<br/>
site debugger react native: ``http://localhost:8081/debugger-ui``

Promise,
async,
await

week2: 
``ScrollView``: chỉ phép được chưa 1 view,(lưu ý phải dùng flex:1) để set<br />
``refreshControl``: dùng trong xoay màn hình, dọc màn hình k hổ trợ<br />
``ActivityIndicator``: dùng trong chức năng loading pending chức năng
``stickyHeaderIndices``: giống danh bạ điện thoại, kéo xuống có kém theo kí tự,<br />
``flatlist:`` <br/>
``<FlatList
    data={[{key: 'a'}, {key: 'b'}]}
    renderItem={({item}) => <Text>{item.key}</Text>}
  />``
  đi sâu vào flatList gồm các thuộc tính.<br/>
    data={...}: danh sách các đối tượng mình đưa vào flatlist
    renderItem={{item, index}} 
  ``keyExtractor:(item: object, index: number) => string;``<br />
  ví dụ muốn gắn id từ một Api về thì dùng, <br />
    + item<br />
    + index<br />

``_renderItem=({item}) => {``
    ``return(<text style={{}}>item.name</text>)})``
    <br/>
    ``ListHeaderComponent``:<br />
    ``numColumns`` : chỉ áp dụng dọc, giống kiểu phan trang <br />
    ``onRefresh``: băt buộc them cái  refreshing, cái ni có nghĩa là sẽ load "pull to refresh" kéo màn hình xuống nó load load <br />
    .``onEndReached``: bắt buộc phải có onEndReachedThreshold ví onEndReachedThreshold={0.5} khi mình kéo khoảng bao niêu đó thì nó sẽ loadmore<br />

về hàm ``setInterval``:  hàm ngày có tác dụng giống setTimeout trong nodejs, nó dùng để chạy một func gì đó sau 1 thời gian nhất định, muốn dừng thì ta cần phải thêm một người bạn của nó ``clearInterval`` 

<br/>
<br/>
<br/>
Day 2: week2
``ImageBackground`` : để ảnh nền
``return (
  <ImageBackground source={...} style={{width: '100%', height: '100%'}}>
    <Text>Inside</Text>
  </ImageBackground>
);``

Get API
Fetch: 
thư viện Axios
Hoistring: 

Day 3: week 3

######6.Tiêu đề cấp 6

sudo chown long /dev/kvm

{
  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
  "terminal.integrated.fontSize": 15,

  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": true
  },
  "[typescript]": {
    "editor.formatOnSave": true
  },
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "prettier.eslintIntegration": true,
  "prettier.singleQuote": true,
  "npm-intellisense.importES6": true,
  "npm-intellisense.importQuotes": "'",
  "npm-intellisense.importLinebreak": ";\r\n",
  "npm-intellisense.importDeclarationType": "const",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "βui - Material",
  "window.zoomLevel": 0,
  "editor.fontSize": 16,
  "vsicons.projectDetection.autoReload": true
}

<br/>

sudo mysql_secure_installation
sudo mysql -u root -p
use mysql
UPDATE user SET plugin='mysql_native_password' WHERE User='root';
UPDATE mysql.user set authentication_string =PASSWORD('123123123') where user='root';
FLUSH PRIVILEGES;

echo 256 | sudo tee -a /proc/sys/fs/inotify/max_user_instances<br/>
echo 32768 | sudo tee -a /proc/sys/fs/inotify/max_queued_events<br/>
echo 65536 | sudo tee -a /proc/sys/fs/inotify/max_user_watches<br/>
watchman shutdown-server<br/>

``watchman watch-del-all``<br/>
``watchman shutdown-server``

Nodejs

``populate``: nó giống như truy vấn giữa các bảng với nhau
``where in populate``: xét điều kiện
phân trang:
``skip``

spotify 
fuego014@yahoo.com:diego014|

###
Share bộ website học online chất cho ai cần.
1/ Chỉnh sử video:
- https://www.magisto.com/
- https://wideo.co/en/
- https://clipchamp.com/en
- http://web.creaza.com/
- http://online-video-cutter.com/vi/
- https://www.powtoon.com/
- https://www.tutpad.com/
- https://www.videopanda.net/
- Nguồn video miễn phí: http://videotube.marstheme.com/ - https://www.velosofy.com/
2/ Gif:
- https://giphy.com/
- https://gfycat.com/
3/ CHỈNH SỬA ẢNH:
- http://www.fotor.com/
- https://www.befunky.com/
- https://pixlr.com/
- - http://fotoflexer.com/
http://www.photoshop.com/tools/
4/ Chỉnh sửa nhạc:
- http://mp3cut.net/
- https://twistedwave.com/online/
- https://soundation.com/  Thư viện nhạc:
- https://www.youtube.com/user/NoCopyrightSounds
- https://www.youtube.com/channel/UCyytiQuL-5S59OX1opqG-bQ
- https://www.youtube.com/channel/UCht8qITGkBvXKsR1Byln-wA
- https://freesound.org/home/register/
- http://www.grsites.com/archive/sounds/category/14/?offset=0
- https://licensing.jamendo.com/fr/catalogue/recherche
5/ Học ngoại ngữ:
- duolingo.com
- memrise.com
- livemocha.com
- busuu.com
- verbling.com
- Học nhiều ngôn ngữ miễn phí: https://www.memrise.com
6/ Khóa học online miễn phí:
- Coursera.org
- Ureddit.com
- Udacity.com
- Edx.org
- Hàng ngàn bài dạy guitar miễn phí: https://www.justinguitar.com/
- Nâng cấp não bộ: https://www.lifehacker.co.uk/
- Khám phá tự nhiên: http://unplugthetv.com/
- Tính toán giờ giấc ngủ: https://sleepyti.me/ https://www.creativelive.com/onair
- Các bài nói chuyện truyền cảm hứng: https://www.ted.com/
Tâm lý học và thông minh cảm xúc: https://www.theschooloflife.com/
- Cộng đồng sách lớn nhất thế giới: https://www.goodreads.com/
7/ Nguồn ảnh đẹp:
- https://unsplash.com/
- https://picjumbo.com/
- http://littlevisuals.co/
- http://www.lifeofpix.com/
- https://www.pexels.com/
- https://alpha.wallhaven.cc/
- https://wall.alphacoders.com/
- http://thestocks.im/
- https://allthefreestock.com/
- https://es.pngtree.com/
- https://www.istockphoto.com/
- https://www.brushking.eu/
- https://pixabay.com/
- https://www.freepik.com/
- Ảnh và ý tưởng: https://www.pinterest.com/
8/ Học toán:
- wolframalpha.com
- projecteuler.net
- mathrun.net
- https://www.mathway.com/
9/ LẬP TRÌNH:
- codeacademy.com
- learncodethehardway.com
- net.tutsplus.com
- htmldog.com
- trypython.org
- https://www.codecademy.com/
- https://code.org/
10/ Những trang web kỳ lạ:
- Tự làm phim hoạt hình: http://www.dvolver.com/moviemaker/
- Chơi với nước: http://madebyevan.com/webgl-water/
- Tạo cảm giác như ở quán café: http://rainycafe.com/
- Vẽ vòng xoáy Neon: https://29a.ch/sandbox/2011/neonflames/
- Vẽ với cát: https://thisissand.com/
- Trải nghiệm thế giới rối ren: http://zoomquilt.org/
- Lật ngược ký tự: http://en.fliptext.net/
- Nghe tiếng mưa gió (cho mấy bạn thất tình):http://www.rainymood.com/
- Vẽ vời rằn ri linh tinh: http://weavesilk.com/
- So sánh giá trị dinh dưỡng giữa 2 món ăn:http://www.twofoods.com/
- Xóa mọi thông tin cá nhân ở các trang web nổi tiếng:http://www.accountkiller.com/en/
- Sức khỏe đời sống: https://www.howcast.com/
- Viết chữ in đậm trên FB: http://slothsoft.net/UnicodeMapper/
