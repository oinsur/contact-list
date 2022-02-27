import './App.css';
import Contact from './components/Contact';
// import Contactslist from './components/Contactslist'
import Sidebar from './components/Sidebar';

/* 

Here we have a contacts app! The basic front end is built for you! Your job is to create the functionality and dynamically create 5 DIFFERENT CONTACTS using props.

TODO: Create an array of objects that contain the necessary properties you need to pass down to the Contact

Hint: Create the array and pass the props here then take the props you need from the object in the Contact.jsx
*/


function App() { 
  let contacts = [
    {name: "Elon Musk",
    pic: "https://economictimes.indiatimes.com/thumb/msid-84588036,width-1200,height-900,resizemode-4,imgsize-109325/elon-musk.jpg?from=mdr",
    phone: "1-888-518-3752"
    },
    {name: "Sam Jones",
    pic: "https://images.unsplash.com/photo-1627087820883-7a102b79179a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGFpdHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
    phone: "1-805-581-3645"
    },
    {name: "Carla Diaz",
    pic: "https://images.unsplash.com/photo-1622281587418-f2f4fc06ae7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGFpdHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
    phone: "1-866-841-4582"
    },
    {name: "Ben Frost",
    pic: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydGFpdHxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
    phone: "1-855-815-5894"
    }
  ]
  return (
    <div className="App">
      <Sidebar />
      <div className="contact-container">
        <h1 className="title">Contact List</h1>
        {contacts.map((contacts)=> {
          return <Contact name = {contacts.name} pic = {contacts.pic} phone = {contacts.phone}/>;
        })}
      </div>
    </div>
  );
}

export default App;
