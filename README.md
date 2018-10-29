

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
  ``keyExtractor:(item: object, index: number) => string;``<br />
  ví dụ muốn gắn id từ một Api về thì dùng, <br />
    + item<br />
    + index<br />

``_renderItem=({item}) => {``
    ``return(<text style={{}}>item.name</text>)})``
    <br/>
    ``ListHeaderComponent``:
    ``numColumns`` : chỉ áp dụng dọc, giống kiểu phan trang 
    ``onRefresh``: băt buộc them cái  refreshing, cái ni có nghĩa là sẽ load "pull to refresh" kéo màn hình xuống nó load load 
    .``onEndReached``: bắt buộc phải có onEndReachedThreshold ví onEndReachedThreshold={0.5} khi mình kéo khoảng bao niêu đó thì nó sẽ loadmore

