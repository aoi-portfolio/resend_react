import ImageUpload from "./ImageUpload";
import Input from "./Input";
function Return() {
   
    const list_return = {
        name : "山田太郎",
        postcode : 1234567,
        address : "東京都江東区亀戸",
        status : false
    };

    
    return (
        <div>
            <h1>データベース上のデータ</h1>
            <ul>
                <li>氏名：{list_return.name}</li>
                <li>郵便番号：{list_return.postcode}</li>
                <li>住所：{list_return.address}</li>
                <li>状態：{list_return.status}</li>
            </ul>
    < ImageUpload /> 
    < Input />
       </div>
   
    )
}

export default Return;