import ComponentB from "./ComponentB.jsx";
function ComponentA(props){
return(<div className="box">
    <h1>ComponentA</h1>
    <ComponentB use = {props.user}/>
</div>)
}
export default ComponentA;