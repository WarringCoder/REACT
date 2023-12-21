export const Contact =() =>
{
    return(
        <div className="ContactContainer">
            <form action="">
                <label htmlFor="">İLETİŞİM</label>
                <input type="e-mail" />
                <input type="text" placeholder="Mesajınız..."/>
                <button type="submit">Gönder</button>
            </form>
        </div>
    )
}