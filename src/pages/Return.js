function Return() {
   
    const list_return = {
        name : "山田太郎",
        postcode : 1234567,
        address : "東京都江東区亀戸",
        status : false
    };

    
    return (
        <div>
            <a>データベース上のデータ</a>
            <ul>
                <li>氏名：{list_return.name}</li>
                <li>郵便番号：{list_return.postcode}</li>
                <li>住所：{list_return.address}</li>
                <li>状態：{list_return.status}</li>
            </ul>
        </div>
    )
}

export default Return;