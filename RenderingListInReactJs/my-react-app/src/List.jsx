import PropTypes from 'prop-types'
function List(props){
    const category = props.category;
    const itemList = props.item;
    const listItem = itemList.map(item => <li key = {item.id}>
                                          {item.name}: &nbsp;
                                           <b>{item.calories}</b>  </li>)
//   const fruits = [{id : 1 , name:"apple",calories:95},{id : 2 ,name:"bannana",calories:45},{id : 3 ,name:"litchi",calories:105},{id:4,name:"straberry",calories:159},{id:5,name:"guava",calories:159}];
//   //fruits.sort();//lexicographically

//   const lowCalFruits = fruits.filter(fruit => fruit.calories<100);
//     // const listItem = fruits.map(fruit =><li key = {fruit.id}>
//     //                                         {fruit.name}: &nbsp;
//     //                                         <b>{fruit.calories}</b></li>)

//     const listItem = lowCalFruits.map(fruit =><li key = {fruit.id}>
//                                                  {fruit.name}: &nbsp;
//                                              <b>{fruit.calories}</b></li>)
    
  return(<>
            <h3 className="list-category">{category} </h3>
            <ol className="list-item">{listItem}</ol>
  </>);
}
// List.propTypes = {
//     categorty : PropTypes.string,
//     item:PropTypes.arrayof(PropTypes.shape(id:PropTypes.number,
//                                             name:propTypes.string
//     ))
// }
List.defaultProps = {
    category: "category",
    items:[],
}
export default List