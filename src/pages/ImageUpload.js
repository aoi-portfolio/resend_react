import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    // ファイルが選択されたときに呼ばれるハンドラ
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    // ファイルが選択されていない場合は何もしない
    if (!selectedFile) {
      return;
    }

    try {
      // FormDataを作成してファイルを追加
      const formData = new FormData();
      formData.append('image', selectedFile);

      // サーバーに画像をアップロード
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Upload successful:', response.data);
      // 成功した場合、ここで適切な処理を追加する
    } catch (error) {
      console.error('Error uploading image:', error);
      // エラーが発生した場合、ここで適切なエラーハンドリングを追加する
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>アップロード</button>
    </div>
  );
};

export default ImageUpload;