int BackTracking(int _dest, int _levelBack, List<int> _statusOfAgr){
    //lưu lại những luật có chứa kết luận
    List<int> _listRulesContainDest ;
    for i = 1 à numberOfRules
        if (ListRules[i].Contain(_dest))
            _listRulesContainDest.Add(i);
        /*Sắp xếp các luật có chứa kết luận theo số lượng biến nằm trong know của mỗi luật*/
    SortListByNumberOfArgInKnow(_listRulesContainDest);
    //Duyệt từng luật chứa kết luận
    for i = 1 à numberOfRulesCotainDest:
    {
        bool _isLoop = false;
        bool _isReady = true;
        /*duyệt từng biến trong giả thiết của mỗi luật*/
    foreach int j in _listHypothesisArg(_listRulesContainDest[i])
    {
        /*Nếu biến đó đang được tìm kiếm trong các vòng đệ quy trước thì đánh dấu lại)*/
        if(_listStatusOfArg[j] == 0)
            _isLoop = true;
        /*Nếu có biến đó không nằm trong know thì luật này chưa sẵn sàng để dùng*/
        if(Known.Contain(j) == 0)
             _isReady = false;
        }
        /*Nếu trạng thái của biến này là đang được tìm kiếm ở các vòng lặp trước thì bỏ qua (không dùng) luật này để tiếp tục với luật khác*/
        if (_isLoop)
        continue;
        /*Nếu luật này đã sẵn sàng để dùng thì tiến hành sinh giả thiết và thêm vào known*/

        if (_isReady)
        {
        Known.Add(_dest);
        //cập nhật trạng thái cho biến đó
        _listStatusOfArg[_dest] = -1;
        //trả về kết quả là đã sinh thành công
        Return 1;
        }
        else
        {
        /*Nếu đây là bước lùi thứ ba và đã thử hết toàn bộ luật có thể sinh kết luận cần tìm*/
        if(_levelBack == 3 && i == numberOfRulesContainDest)
            {
                //tiến hành sinh thêm giả thiết
            int result = generateAHypothesis();
            /*Nếu không thể sinh thêm được bất kỳ giả thiết nào nữa thì trả về kết quả là không thành công*/
            if (result == -1)
                return 0;
                /* Nếu giả thiết được sinh ra đang được tìm kiếm ở những vòng đệ quy ngoài thì báo kết quả ra */
            if(_listStatus[result] == 0;
            return 2;
            /*cập nhật trạng thái của giả thiết vừa được sinh ra*/
            _listStatus[i] = -1;
            continue;

        }
        else
        {
        /*đánh dấu xem liệu có thể đệ quy để tìm đủ giả thiết để sinh luật hay không*/
            bool _isAble = true;
          /*Duyệt từng biến trong phần giả thiết của luật */
           foreach int j in _listHypothesisArg(_listRulesContainDest[i])
            {
            /*lưu kết quả của việc quay lui */
            int _resultBackTracking = -1;
            /*Nếu không nằm trong known*/
            if (!Known.Contain(j))
            {
            /*đánh dấu danh sách trạng thái trước khi quay lui*/
                _listStatus[j] = 0;
                _resultBackTracking = BackTracking(j, _levelBack+1, _listStatus);
                /*Nếu quay lui thất bại*/
            if(_resultBackTracking == 0)
            {
                _isAble = false ;
                break ;
            }
            else
            /*Nếu quay lui thành công*/
            if (_resultBackTracking == 1)
                continue ;
            else
            /*Nếu quay lui tình cờ tìm thấy một giả thiết ở vòng đệ quy ngoài ta kiểm tra xem nó 
            có phải điều ta đang tìm kiếm hay không, nếu đúng, báo thành công, nếu sai, báo ra các vòng đệ quy ngoài*/
            if (Known.Contain(_dest))
                return 1 ;
            else
                return 2 ;
            }

        }
        //Nếu có khả năng sinh được luật
        if (_isAble)
        {
            /*Cập nhật danh sách trạng thái và báo thành công */
            _listStatus[_dest] = -1 ;
            return 1 ;
        }
     }
}
return 0 ;
}