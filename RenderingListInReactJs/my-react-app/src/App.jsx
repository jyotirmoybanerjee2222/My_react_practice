import List from './List.jsx'

function App(){
  
      const fruits =   [{id : 1 , name:"apple",calories:95},
                        {id : 2 ,name:"bannana",calories:45},
                        {id : 3 ,name:"litchi",calories:105},
                        {id:4,name:"straberry",calories:159},
                        {id:5,name:"guava",calories:159}];
      const vegetables  =   [{id : 6 , name:"potatoes",calories:95},
                          {id : 7 ,name:"celery",calories:45},
                          {id : 8 ,name:"carrots",calories:105},
                          {id:9,name:"corn",calories:159},
                          {id:10,name:"brocoly",calories:159}];
   
   return(<>
            <List item = {fruits} category ="fruits"/>
            <List item = {vegetables} category = "Vegetables"></List>
          </>)
}

export default App