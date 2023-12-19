function Input () {


    return(
        <div>
        
        <form method="GET" action="/InputToDB.js">
        
            <label htmlFor="name">氏名:</label>
            <input type="text" id="name" name="name" required/>

            <br/>

            <label htmlFor="zipcode">郵便番号:</label>
            <input id="zipcode" name="zipcode" required></input>

            <br/>
            <label htmlFor="address_todoufuken">都道府県：</label>
            <input id="address_todoufuken" name="address_todoufuken" required></input>
            <br/>

            <br/>
            <label htmlFor="address_shityouson">市町村：</label>
            <input id="address_shityouson" name="address_shityouson" required></input>
            <br/>


            <br/>
            <label htmlFor="address_banchi">番地：</label>
            <input id="address_banchi" name="address_banchi" required></input>
            <br/>

            <label>再送付:</label>
            <input type="radio" id="public" name="visibility" value="public" checked />
            <label htmlFor="public">要</label>
            <input type="radio" id="private" name="visibility" value="private" />
            <label htmlFor="private">不要</label>

            <br />

            <input type="submit" value="投稿" />

        </form>
   
        </div>
    )
}


export default Input;