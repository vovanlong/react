

reset apache  ``sudo npm start -- --reset-cache``

``export ANDROID_HOME=/home/long/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator``


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
echo 256 | sudo tee -a /proc/sys/fs/inotify/max_user_instances<br/>
echo 32768 | sudo tee -a /proc/sys/fs/inotify/max_queued_events<br/>
echo 65536 | sudo tee -a /proc/sys/fs/inotify/max_user_watches<br/>
watchman shutdown-server<br/>
