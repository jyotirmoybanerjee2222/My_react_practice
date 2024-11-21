function Food(){

    const Food1 = "Orange";
    const Food2 = "Banana";

    return(
        <ul>
            <li>Apple</li>
            <li>Banana</li>
            <li>Mango</li>
            <li>{Food1.toUpperCase()}</li>
            <li>{Food2}</li>
        </ul>
    );
}

export default Food;