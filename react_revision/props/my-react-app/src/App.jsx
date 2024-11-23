import Student from './Student.jsx'; // Ensure the casing matches the file name

//propTypes
//defaultProps
function App() {
    return (
        <>
            <Student name="John Doe" />
          
            <Student name="Spongebob" age={"30"} isStudent={true }></Student> 
            <Student name="Patrick" age={32} isStudent={false }></Student>
            <Student name="jyotirmoy" age={24} isStudent={true }></Student>
            <Student name="Shreya" age={30} isStudent={true }></Student>
            <Student name="Sqidward" age={30} isStudent={false }></Student>
            <Student name="Sandy" age={30} isStudent={true }></Student>
            <Student name = "Larry"></Student>


        </>
    );
}

export default App;

